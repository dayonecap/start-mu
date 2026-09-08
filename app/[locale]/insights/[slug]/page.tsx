import type { Metadata } from "next";
import Link from "@/components/Link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { getInsights } from "@/lib/content";
import { dateLocale, isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { site } from "@/content/site";

type Params = { slug: string; locale: string };

export async function generateStaticParams() {
  const all = await getInsights("en");
  return all.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const i = (await getInsights(locale)).find((x) => x.slug === slug);
  return i ? { title: i.title, description: i.summary, alternates: alternates(`/insights/${slug}`, locale) } : {};
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug, locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const all = await getInsights(locale);
  const i = all.find((x) => x.slug === slug);
  if (!i) notFound();
  const others = all.filter((o) => o.slug !== slug).slice(0, 3);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: i.title,
    description: i.summary,
    datePublished: i.publishedAt,
    ...(i.reviewedAt ? { dateModified: i.reviewedAt } : {}),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/insights/${i.slug}`,
  };
  const faqSchema = i.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: i.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;
  return (
    <>
      <JsonLd data={article} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <PageHero title={i.title} lead={i.summary} compact>
        {locale !== "en" && !i.translated ? <p className="t-small mt-6 border-l-2 border-green pl-4">{ui[locale].untranslated}</p> : null}
        <p className="t-ui mt-6 text-slate">
          {new Date(i.publishedAt).toLocaleDateString(dateLocale[locale], { day: "numeric", month: "long", year: "numeric" })}
          {i.category ? `, ${ui[locale].insightsPage.categories[i.category]}` : ""}
        </p>
        {i.reviewedAt ? (
          <p className="t-small mt-2 text-slate">
            {ui[locale].insightsPage.reviewed}{" "}
            {new Date(i.reviewedAt).toLocaleDateString(dateLocale[locale], { day: "numeric", month: "long", year: "numeric" })}
          </p>
        ) : null}
      </PageHero>
      <section className="rule">
        <Container className="py-14 lg:py-20">
          <article className="prose-ipc" dangerouslySetInnerHTML={{ __html: i.body }} />
          {i.faqs?.length ? (
            <div className="mt-14 max-w-[68ch]">
              <h2 className="t-h2">Questions this raises</h2>
              <div className="mt-6">
                <Faq items={i.faqs} />
              </div>
            </div>
          ) : null}
        </Container>
      </section>
      {others.length > 0 ? (
        <section className="rule">
          <Container className="py-12">
            <h2 className="t-h3">More notes</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/insights/${o.slug}`} className="link-rule text-[1.05rem] text-green">
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/insights" className="t-ui link-rule text-slate">
                All notes
              </Link>
            </p>
          </Container>
        </section>
      ) : null}
      <ClosingCta locale={locale} />
    </>
  );
}
