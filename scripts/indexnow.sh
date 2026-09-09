#!/usr/bin/env bash
# Notify IndexNow (Bing, Yandex, Seznam, Naver) of every URL in the sitemap.
# Run after publishing content. Google does not use IndexNow — it has its own crawl.
set -euo pipefail

HOST="start.mu"
KEY="c86338d428bb4c798bc2c1bb111031c3"
KEY_LOCATION="https://$HOST/$KEY.txt"

echo "Reading sitemap…"
URLS=$(curl -s "https://$HOST/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed 's|</\?loc>||g')
COUNT=$(echo "$URLS" | grep -c .)
echo "  $COUNT URLs"

# The key file must be live before IndexNow will accept a submission.
if ! curl -sf --max-time 15 "$KEY_LOCATION" | grep -q "$KEY"; then
  echo "ERROR: $KEY_LOCATION is not serving the key. Deploy first." >&2
  exit 1
fi

BODY=$(python3 - <<PY
import json,sys
urls = """$URLS""".split()
print(json.dumps({
  "host": "$HOST",
  "key": "$KEY",
  "keyLocation": "$KEY_LOCATION",
  "urlList": urls,
}))
PY
)

CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" --data "$BODY")

case "$CODE" in
  200) echo "Submitted $COUNT URLs. Accepted." ;;
  202) echo "Submitted $COUNT URLs. Accepted, key validation pending." ;;
  400) echo "400 Bad request — malformed payload." >&2; exit 1 ;;
  403) echo "403 Forbidden — key not valid at $KEY_LOCATION." >&2; exit 1 ;;
  422) echo "422 — URLs do not belong to $HOST, or key mismatch." >&2; exit 1 ;;
  429) echo "429 — too many requests. Wait and retry." >&2; exit 1 ;;
  *)   echo "Unexpected response: $CODE" >&2; exit 1 ;;
esac
