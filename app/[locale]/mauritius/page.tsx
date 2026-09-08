import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { FactTable } from "@/components/FactTable";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return {
    title: ui[locale].mauritiusPage.title,
    description: ui[locale].mauritiusPage.meta,
    alternates: alternates("/mauritius", locale),
  };
}

export default async function MauritiusPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale];
  return (
    <>
      <PageHero title={t.mauritiusPage.title} lead={t.mauritiusPage.lead} />

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{t.mauritiusPage.frameworkH}</h2>
              <div className="mt-6">
                <FactTable facts={t.mauritiusPage.facts} caption={t.mauritiusPage.caption} />
              </div>
              <p className="t-small mt-5 max-w-[52ch]">
                {t.mauritiusPage.disclaimer}
              </p>
            </div>
            <div className="prose-ipc lg:col-span-6 lg:col-start-7">
              <h2 className="t-h2">{t.mauritiusPage.livingH}</h2>
              {t.mauritiusPage.living.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <h2 className="t-h2 mt-12">{t.mauritiusPage.businessH}</h2>
              {t.mauritiusPage.business.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
}
