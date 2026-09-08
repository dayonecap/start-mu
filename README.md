# start.mu by Intrasia

Next.js 15 (App Router), TypeScript, Tailwind v4. Static pages generated at build; the contact form posts to a Route Handler.

## Structure

- `content/` all page copy and structured facts. Edit here, not in components.
  - `site.ts` contact details, navigation, footer
  - `residency.ts`, `establishment.ts`, `property.ts` one entry per page, rendered by the shared template
- `app/` routes. `[slug]` folders render entries from `content/` via `components/ServicePage.tsx`
- `components/` header, footer, hero, fact table, route index, contact form, closing call to action
- `lib/cms.ts` adapter for Insights. Reads `content/insights/index.ts` until a headless CMS is connected
- `content/faqs.ts` FAQ questions per page, rendered as disclosures with FAQPage schema
- `next.config.ts` 301 redirects from the old Wix URLs

## Languages

English at the root, French at `/fr`, German at `/de`. Every route exists in all three; `middleware.ts` rewrites root paths to the internal `en` segment. Interface strings live in `content/ui.ts`. Translated page content lives in `content/fr/index.ts` and `content/de/index.ts` as overrides keyed by slug; anything not yet translated falls back to English with a short notice, so the site is never broken while translation proceeds. hreflang and per-language canonicals are generated from `lib/meta.ts`. The language switcher in the header keeps the reader on the same page.

## Run locally

    npm install
    cp .env.example .env.local
    npm run dev

## Deploy on Vercel

1. Push to a Git repository and import in Vercel.
2. Set environment variables: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
3. Verify the sending domain in Resend so `CONTACT_FROM_EMAIL` delivers.
4. Point `start.mu` at Vercel as the production domain. Add `intrasiacorporate.com` and `www.intrasiacorporate.com` to the same project and set them to redirect (301) to `start.mu`; Vercel does this in the Domains tab. The path redirects in `next.config.ts` then map every old Wix URL to its new page, so `intrasiacorporate.com/mauritius-investor-permit-100000` lands on `start.mu/residency/investor-permit`.

Without `RESEND_API_KEY` the form still succeeds and submissions are written to the server log.

## Images

The layout is typographic and carries no images by design. `components/Figure.tsx`, `components/AmbientVideo.tsx` and the manifest in `content/images.ts` are kept in the repository for when photography or the film is wanted; placing `<Figure slot={images.about} />` on a page is all that is needed. The About page uses one slot, the portrait: drop the file at `public/images/herman-suhirman.jpg` (portrait format, 4:5) and the placeholder is replaced.

## Fonts

Newsreader and Inter are loaded from Google Fonts in `app/layout.tsx`. To self-host, drop the font files into `public/fonts` and switch to `next/font/local`.

## Connecting a CMS for Insights

Implement `getInsights()` and `getInsight(slug)` in `lib/cms.ts` against the chosen CMS and keep the `Insight` shape. The list page, article page, sitemap and Article schema pick it up automatically. Recommended: Sanity (hosted, free tier, good editor) or Payload (self-hosted on the same Vercel project with Postgres). Either takes an afternoon to wire.

## SEO

Per-page titles, descriptions and canonicals; Organization, BreadcrumbList, FAQPage and Article schema; sitemap and robots; a generated Open Graph image at `/opengraph-image`; 301 redirects from the Wix URLs. After deploy: submit the sitemap in Google Search Console and request the EDB service provider listing and a link from intrasiagroup.com.

## Before launch

- Confirm every threshold and figure in `content/` against the EDB's current guidelines
- Confirm the Golden Visa status text once the EDB publishes its guidelines
- Have the privacy policy and terms reviewed by counsel
- Replace the placeholder office address in `content/site.ts`
- Confirm the exact registration wording on the About page against the Registrar of Companies certificate
