import type { Metadata } from "next";
import Link from "@/components/Link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { getCountries, getFaqs } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { site } from "@/content/site";

type Params = { slug: string; locale: string };

export function generateStaticParams() {
  return getCountries("en").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const c = getCountries(locale).find((x) => x.slug === slug);
  if (!c) return {};
  return { title: { absolute: c.metaTitle }, description: c.metaDescription, alternates: alternates(`/moving-to-mauritius-from/${slug}`, locale) };
}

export default async function CountryPage({ params }: { params: Promise<Params> }) {
  const { slug, locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const c = getCountries(locale).find((x) => x.slug === slug);
  if (!c) notFound();
  const t = ui[locale];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Residency", item: `${site.url}/residency` },
      { "@type": "ListItem", position: 3, name: c.title, item: `${site.url}/moving-to-mauritius-from/${c.slug}` },
    ],
  };
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumb} />
      <PageHero title={c.title} lead={c.intro} compact>
        <p className="t-ui mt-8 text-slate">
          <Link href="/residency" className="link-rule">
            {t.service.residency}
          </Link>
        </p>
        {locale !== "en" && !c.translated ? <p className="t-small mt-6 border-l-2 border-green pl-4">{t.untranslated}</p> : null}
      </PageHero>
      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-4">
              <h2 className="t-h2">{t.service.routes}</h2>
              <ul className="mt-6 divide-y divide-stone border-y border-stone">
                {c.routes.map((r) => (
                  <li key={r.href} className="py-4">
                    <Link href={r.href} className="t-h3 link-rule hover:text-green">
                      {r.title}
                    </Link>
                    <p className="mt-1 text-[1rem] text-slate">{r.note}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <Link href="/residency/route-finder" className="link-rule t-ui text-green">
                  {t.home.finder}
                </Link>
              </p>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
              {c.sections.map((s, i) => (
                <div key={s.heading} className={i === 0 ? "" : "mt-12"}>
                  <h2 className="t-h2">{s.heading}</h2>
                  <div className="prose-ipc mt-5">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="rule bg-paper">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="t-h2">{t.service.faq}</h2>
            </div>
            <div className="lg:col-span-8">
              <Faq items={c.faqs} />
            </div>
          </div>
        </Container>
      </section>
      <ClosingCta locale={locale} {...t.cta.residency} />
    </>
  );
}
