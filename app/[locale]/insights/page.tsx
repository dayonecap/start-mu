import type { Metadata } from "next";
import { dateLocale, isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import Link from "@/components/Link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { getInsights } from "@/lib/content";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return {
    title: ui[locale].insightsPage.title,
    description: ui[locale].insightsPage.meta,
    alternates: alternates("/insights", locale),
  };
}

export default async function InsightsPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale];
  const insights = await getInsights(locale);
  return (
    <>
      <PageHero title={t.insightsPage.title} lead={t.insightsPage.lead} compact />
      <section className="rule">
        <Container className="py-14 lg:py-20">
          {insights.length === 0 ? (
            <div className="max-w-[60ch]">
              <p className="text-[1.05rem] leading-[1.6] text-slate">
                {t.insightsPage.empty}
              </p>
              <p className="mt-6">
                <Link href="/residency" className="link-rule text-green">
                  {t.insightsPage.emptyLink}
                </Link>
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-stone border-y border-stone">
              {insights.map((i) => (
                <li key={i.slug} className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                  <p className="t-ui text-slate sm:col-span-3">
                    {new Date(i.publishedAt).toLocaleDateString(dateLocale[locale], { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <div className="sm:col-span-9">
                    <Link href={`/insights/${i.slug}`} className="t-h3 link-rule hover:text-green">
                      {i.title}
                    </Link>
                    <p className="mt-2 text-[1.05rem] leading-[1.55] text-slate">{i.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
      <ClosingCta locale={locale} />
    </>
  );
}
