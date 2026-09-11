import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import Link from "@/components/Link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceIndex } from "@/components/ServiceIndex";
import { ClosingCta } from "@/components/ClosingCta";
import { getEstablishment } from "@/lib/content";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const titles = {
    en: "Establishment: companies, banking and administration in Mauritius",
    fr: "Création de sociétés, banque et administration à Maurice",
    de: "Unternehmensgründung, Bankkonten und Verwaltung auf Mauritius",
  };
  const desc = {
    en: "Domestic Company, Global Business Company and Authorised Company compared. Bank account opening, registered office, company secretary and annual compliance, handled by start.mu, the private client practice of the Intrasia Group.",
    fr: "Domestic Company, Global Business Company et Authorised Company comparées. Ouverture de compte bancaire, siège social, secrétariat de société et conformité annuelle, assurés par start.mu, le cabinet mauricien du Groupe Intrasia dédié à la clientèle privée.",
    de: "Domestic Company, Global Business Company und Authorised Company im Vergleich. Kontoeröffnung, eingetragener Sitz, Company Secretary und jährliche Pflichten, übernommen von start.mu, der Privatkundenberatung der Intrasia Group.",
  };
  return {
    title: titles[locale],
    description: desc[locale],
    alternates: alternates("/establishment", locale),
  };
}

export default async function EstablishmentPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale];
  const establishment = getEstablishment(locale);
  const services = establishment.filter((e) => !e.index);
  return (
    <>
      <PageHero title={t.establishmentPage.title} lead={t.establishmentPage.lead} />

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <h2 className="t-h2">{t.establishmentPage.whichH}</h2>
          <div className="mt-8">
            <ServiceIndex entries={establishment} base="/establishment" columns={[t.index.use, t.index.control, t.index.tax]} routeLabel={t.index.routeEstablishment} />
          </div>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{t.establishmentPage.adminH}</h2>
              <p className="mt-5 max-w-[36ch] text-[1.05rem] leading-[1.55] text-slate">
                {t.establishmentPage.adminLead}
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="divide-y divide-stone border-y border-stone">
                {services.map((s) => (
                  <li key={s.slug} className="py-5">
                    <Link href={`/establishment/${s.slug}`} className="t-h3 link-rule hover:text-green">
                      {s.title}
                    </Link>
                    <p className="mt-2 text-[1.05rem] leading-[1.55] text-slate">{s.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
}
