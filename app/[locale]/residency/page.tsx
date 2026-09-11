import type { Metadata } from "next";
import Link from "@/components/Link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceIndex } from "@/components/ServiceIndex";
import { ClosingCta } from "@/components/ClosingCta";
import { getResidency, getThresholdNote } from "@/lib/content";
import { ui } from "@/content/ui";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { checklistPack } from "@/content/downloads";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const titles = { en: "Residency in Mauritius: every route compared", fr: "Résidence à Maurice : toutes les voies comparées", de: "Aufenthalt auf Mauritius: alle Möglichkeiten im Vergleich" };
  const desc = {
    en: "Occupation permits, residence permits, the Golden Visa and the Premium Visa compared by audience, threshold and duration. Which route fits, and how start.mu handles the application.",
    fr: "Permis d'occupation, permis de résidence, Golden Visa et Premium Visa comparés selon le public, le seuil et la durée. Quelle voie convient, et comment start.mu gère la demande.",
    de: "Occupation Permits, Aufenthaltsgenehmigungen, Golden Visa und Premium Visa im Vergleich nach Zielgruppe, Schwelle und Dauer. Welche Möglichkeit passt und wie start.mu den Antrag begleitet.",
  };
  return { title: titles[locale], description: desc[locale], alternates: alternates("/residency", locale) };
}

export default async function ResidencyPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale];
  const residency = getResidency(locale);
  const others = residency.filter((r) => !r.index);
  return (
    <>
      <PageHero title={t.residencyPage.title} lead={t.residencyPage.lead}>
        <p className="mt-8">
          <Link href="/residency/route-finder" className="btn btn-ghost">
            {t.residencyPage.finder}
          </Link>
        </p>
      </PageHero>

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <h2 className="t-h2">{t.residencyPage.compareH}</h2>
          <div className="mt-8">
            <ServiceIndex entries={residency} base="/residency" columns={[t.index.audience, t.index.threshold, t.index.duration]} routeLabel={t.index.route} />
          </div>
          <p className="t-small mt-6 max-w-[80ch]">{getThresholdNote(locale)}</p>
          <p className="mt-8">
            <a href={checklistPack[locale].file} download className="btn btn-ghost">
              {t.download.pack}
            </a>
          </p>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{t.residencyPage.chooseH}</h2>
            </div>
            <div className="prose-ipc lg:col-span-6 lg:col-start-7">
              {t.residencyPage.choose.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-12">
          <h2 className="t-h3">{t.residencyPage.alsoH}</h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {others.map((r) => (
              <li key={r.slug}>
                <Link href={`/residency/${r.slug}`} className="link-rule text-[1.05rem] text-green">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingCta locale={locale} {...t.cta.residency} />
    </>
  );
}
