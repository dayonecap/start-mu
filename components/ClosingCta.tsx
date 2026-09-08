import Link from "@/components/Link";
import { Container } from "./Container";

import { ui } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export function ClosingCta({ locale = "en", heading, body }: { locale?: Locale; heading?: string; body?: string }) {
  const t = ui[locale].cta;
  heading = heading ?? t.heading;
  body = body ?? t.body;
  return (
    <section className="bg-green text-bone">
      <Container className="py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 className="t-h2 text-bone">{heading}</h2>
            <p className="mt-5 max-w-[52ch] text-[1.15rem] leading-[1.55] text-stone">{body}</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/contact" className="btn btn-on-dark">
              {t.button}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
