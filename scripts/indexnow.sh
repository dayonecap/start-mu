#!/usr/bin/env bash
# Notify IndexNow (Bing, Yandex, Seznam, Naver) of every URL in the sitemap.
# Run after publishing or materially revising content.
# Google does not use IndexNow — it has its own crawl, driven by Search Console.
set -euo pipefail

HOST="start.mu"
KEY="c86338d428bb4c798bc2c1bb111031c3"
KEY_LOCATION="https://$HOST/$KEY.txt"

# The key file must be live before IndexNow will accept a submission.
if ! curl -sf --max-time 15 "$KEY_LOCATION" | grep -q "$KEY"; then
  echo "ERROR: $KEY_LOCATION is not serving the key. Deploy first." >&2
  exit 1
fi

# Fetch, parse and submit in one place. XML is parsed properly rather than
# scraped with sed, which is not portable between GNU and BSD.
python3 - "$HOST" "$KEY" "$KEY_LOCATION" <<'PY'
import json, sys, urllib.request
import xml.etree.ElementTree as ET

host, key, key_location = sys.argv[1], sys.argv[2], sys.argv[3]

with urllib.request.urlopen(f"https://{host}/sitemap.xml", timeout=30) as r:
    root = ET.fromstring(r.read())

ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
urls = [e.text.strip() for e in root.findall(".//s:loc", ns) if e.text]
print(f"Sitemap: {len(urls)} URLs")

bad = [u for u in urls if not u.startswith(f"https://{host}")]
if bad or not urls:
    print(f"ERROR: {len(bad)} URL(s) not on https://{host}, e.g. {bad[:2]}", file=sys.stderr)
    sys.exit(1)

body = json.dumps({"host": host, "key": key, "keyLocation": key_location, "urlList": urls}).encode()
req = urllib.request.Request(
    "https://api.indexnow.org/indexnow",
    data=body,
    headers={"Content-Type": "application/json; charset=utf-8"},
    method="POST",
)
explain = {
    200: "Accepted.",
    202: "Accepted; key validation pending.",
    400: "Bad request — malformed payload.",
    403: "Forbidden — key not valid at keyLocation.",
    422: "URLs do not belong to this host, or key mismatch.",
    429: "Too many requests. Wait and retry.",
}
try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        code = resp.status
except urllib.error.HTTPError as e:
    code = e.code

print(f"Submitted {len(urls)} URLs — HTTP {code}: {explain.get(code, 'unexpected response')}")
sys.exit(0 if code in (200, 202) else 1)
PY
