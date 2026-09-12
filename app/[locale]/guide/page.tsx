import type { Metadata } from "next";
import "../../guide.css";
import { isLocale, dateLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { site } from "@/content/site";
import { guide } from "@/content/guide";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale].guidePage;
  return {
    title: { absolute: t.metaTitle },
    description: t.meta,
    alternates: alternates("/guide", locale),
  };
}

export default async function GuidePage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale].guidePage;
  const verified = new Date(guide.verifiedAt).toLocaleDateString(dateLocale[locale], { day: "numeric", month: "long", year: "numeric" });
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.meta,
    datePublished: guide.verifiedAt,
    dateModified: guide.verifiedAt,
    version: guide.edition,
    inLanguage: "en",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/guide`,
  };
  const stamp = [
    { k: t.stamp.verified, v: verified, s: t.stamp.verifiedNote },
    { k: t.stamp.baseline, v: "Finance Act 2026", s: t.stamp.baselineNote },
    { k: t.stamp.edition, v: guide.edition, s: t.stamp.editionNote },
    { k: t.stamp.currency, v: "MUR", s: t.stamp.currencyNote },
  ];
  return (
    <>
      <JsonLd data={article} />
      <PageHero title={t.title} lead={t.lead}>
        <p className="t-small mt-6 font-medium uppercase tracking-[0.08em] text-green">{t.eyebrow}</p>
        {locale !== "en" ? <p className="t-small mt-4 border-l-2 border-green pl-4">{ui[locale].untranslated}</p> : null}
        <dl className="mt-8 grid grid-cols-1 gap-px border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-4">
          {stamp.map((s) => (
            <div key={s.k} className="bg-paper px-4 py-3">
              <dt className="t-small font-medium uppercase tracking-[0.08em] text-slate">{s.k}</dt>
              <dd className="mt-1 font-serif text-[1.2rem] leading-tight tabular-nums">{s.v}</dd>
              <dd className="t-small mt-1">{s.s}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="rule">
        <Container className="py-10 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <nav className="guide-toc lg:col-span-3" aria-label={t.contents}>
              <div className="lg:sticky lg:top-6 lg:max-h-screen lg:overflow-auto lg:border-r lg:border-stone lg:pr-5">
                <p className="t-small mb-3 font-medium uppercase tracking-[0.08em] text-slate">{t.contents}</p>
                <ol>
                  {guide.toc.map((e) =>
                    "group" in e ? (
                      <li key={e.group} className="grp">
                        {e.group}
                      </li>
                    ) : (
                      <li key={e.id}>
                        <a href={`#${e.id}`}>
                          <span className="n">{e.n}</span>
                          {e.label}
                        </a>
                      </li>
                    ),
                  )}
                </ol>
              </div>
            </nav>
            <article className="guide lg:col-span-9" dangerouslySetInnerHTML={{ __html: guide.body }} />
          </div>
        </Container>
      </section>

      <ClosingCta locale={locale} heading={t.cta.heading} body={t.cta.body} />
    </>
  );
}
