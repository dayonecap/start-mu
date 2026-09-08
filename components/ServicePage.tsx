import Link from "@/components/Link";
import type { ServiceEntry } from "@/content/types";
import { Container } from "./Container";
import { PageHero } from "./PageHero";
import { FactTable } from "./FactTable";
import { ClosingCta } from "./ClosingCta";
import { Faq } from "./Faq";
import { JsonLd } from "./JsonLd";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { getFaqs } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function ServicePage({
  entry,
  parent,
  note,
  locale = "en",
}: {
  entry: ServiceEntry & { translated?: boolean };
  parent: { label: string; href: string };
  note?: string;
  locale?: Locale;
}) {
  const t = ui[locale];
  const items = getFaqs(locale, entry.slug);
  const section = parent.href.replace("/", "") as "residency" | "establishment" | "property";
  const parentLabel = t.service[section] ?? parent.label;
  const closingText = t.cta[section];
  const url = `${site.url}${parent.href}/${entry.slug}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: parentLabel, item: `${site.url}${parent.href}` },
      { "@type": "ListItem", position: 3, name: entry.title, item: url },
    ],
  };
  const faqSchema =
    items.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;
  return (
    <>
      <JsonLd data={breadcrumb} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <PageHero title={entry.title} lead={entry.intro} compact>
        <p className="t-ui mt-8 text-slate">
          <Link href={parent.href} className="link-rule">
            {parentLabel}
          </Link>
        </p>
        {locale !== "en" && !entry.translated ? <p className="t-small mt-6 border-l-2 border-green pl-4">{t.untranslated}</p> : null}
      </PageHero>

      {entry.status ? (
        <section className="rule">
          <Container className="py-8">
            <p className="max-w-[70ch] border-l-2 border-green pl-5 text-[1.05rem] leading-[1.55] text-ink">{entry.status}</p>
          </Container>
        </section>
      ) : null}

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <h2 className="t-h2">{t.service.glance}</h2>
              <div className="mt-6">
                <FactTable facts={entry.facts} caption={`Key facts: ${entry.title}`} />
              </div>
              {note ? <p className="t-small mt-5 max-w-[52ch]">{note}</p> : null}
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
              {entry.sections.map((s, i) => (
                <div key={s.heading} className={i === 0 ? "" : "mt-12"}>
                  <h2 className="t-h2">{s.heading}</h2>
                  <div className="prose-ipc mt-5">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                    {s.bullets ? (
                      <ul>
                        {s.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {items.length > 0 ? (
        <section className="rule bg-paper">
          <Container className="py-14 lg:py-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="t-h2">{t.service.faq}</h2>
              </div>
              <div className="lg:col-span-8">
                <Faq items={items} />
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {entry.related.length > 0 ? (
        <section className="rule">
          <Container className="py-12">
            <h2 className="t-h3">{t.service.related}</h2>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {entry.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="link-rule text-[1.05rem] text-green">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <ClosingCta locale={locale} {...closingText} />
    </>
  );
}
