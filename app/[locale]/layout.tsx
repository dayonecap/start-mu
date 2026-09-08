import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Newsreader, Inter } from "next/font/google";
import "../globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { getFooter, getNavigation } from "@/lib/content";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/i18n";
import { alternates, ogLocale } from "@/lib/meta";

// Self-hosted at build time by next/font: the files are served from this origin, so no
// visitor request ever reaches Google. Both families are variable fonts, hence no weight list.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const titles: Record<Locale, string> = {
    en: "start.mu | Residency and establishment in Mauritius, by Intrasia",
    fr: "start.mu | Résidence et établissement à Maurice, par Intrasia",
    de: "start.mu | Aufenthalt und Gründung auf Mauritius, von Intrasia",
  };
  const descriptions: Record<Locale, string> = {
    en: "Mauritius residency, occupation permits, company formation and property acquisition for families and entrepreneurs, handled from first conversation to arrival by start.mu, the private client practice of the Intrasia Group.",
    fr: "Résidence à Maurice, permis d'occupation, constitution de sociétés et acquisition immobilière pour les familles et les entrepreneurs, pris en charge de la première conversation à l'arrivée par start.mu, le cabinet de clientèle privée du Groupe Intrasia.",
    de: "Aufenthalt auf Mauritius, Occupation Permits, Gesellschaftsgründung und Immobilienerwerb für Familien und Unternehmer, begleitet vom ersten Gespräch bis zur Ankunft von start.mu, der Private-Client-Praxis der Intrasia Group.",
  };
  return {
    metadataBase: new URL(site.url),
    title: { default: titles[locale], template: "%s | start.mu" },
    description: descriptions[locale],
    alternates: alternates("/", locale),
    openGraph: { type: "website", siteName: site.name, title: titles[locale], description: descriptions[locale], url: site.url, locale: ogLocale[locale] },
    robots: { index: true, follow: true },
  };
}

const organisation = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "start.mu by Intrasia",
  alternateName: ["start.mu", "start.mu by Intrasia"],
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  areaServed: "Mauritius",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aventure du Sucre Street, Block 3, First Floor, The Strand",
    addressLocality: "Beau Plan",
    addressRegion: "Pamplemousses",
    addressCountry: "MU",
  },
  parentOrganization: { "@type": "Organization", name: "Intrasia Group", url: site.groupUrl },
  sameAs: [site.linkedin, site.groupUrl],
  knowsAbout: ["Mauritius occupation permits", "Mauritius residence permits", "Mauritius company incorporation", "Mauritius property acquisition schemes"],
  availableLanguage: ["en", "fr", "de"],
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const locale = l;
  const t = ui[locale];
  return (
    // suppressHydrationWarning covers this element's own attributes only. Chrome's page
    // translation rewrites lang and adds a "translated-ltr" class before React hydrates,
    // which would otherwise log a mismatch on every translated visit.
    <html lang={htmlLang[locale]} className={`${newsreader.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <JsonLd data={organisation} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-bone focus:px-3 focus:py-2">
          {t.nav.skip}
        </a>
        <SiteHeader locale={locale} navigation={getNavigation(locale)} t={t.nav} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale} columns={getFooter(locale)} t={t.footer} />
      </body>
    </html>
  );
}
