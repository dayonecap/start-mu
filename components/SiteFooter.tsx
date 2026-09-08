import Link from "@/components/Link";
import { site } from "@/content/site";
import type { NavLink } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";

export function SiteFooter({ columns, t }: { locale: Locale; columns: { heading: string; links: NavLink[] }[]; t: { tagline: string; legal: string; rights: string; privacy: string; terms: string; group: string } }) {
  return (
    <footer className="bg-green text-bone">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark onDark />
            <p className="mt-5 max-w-[34ch] text-[1.05rem] leading-[1.55] text-stone">{t.tagline}</p>
            <address className="t-ui mt-8 not-italic leading-[1.7] text-stone">
              <a href={`mailto:${site.email}`} className="link-rule text-bone">
                {site.email}
              </a>
              <br />
              <a href={site.phoneHref} className="text-bone">
                {site.phone}
              </a>
              <br />
              Mauritius
            </address>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="t-ui mb-3 font-medium text-bone">{col.heading}</p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="t-ui text-stone hover:text-bone">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-bone/20 pt-6 text-stone sm:flex-row sm:items-center sm:justify-between">
          <p className="t-ui max-w-[70ch] text-stone">
            {t.legal} &copy; {new Date().getFullYear()} {t.rights}
          </p>
          <ul className="t-ui flex gap-5 text-stone">
            <li>
              <Link href="/privacy-policy" className="hover:text-bone">
                {t.privacy}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-bone">
                {t.terms}
              </Link>
            </li>
            <li>
              <a href={site.groupUrl} className="hover:text-bone">
                {t.group}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
