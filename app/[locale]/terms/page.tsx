import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { termsOfUse } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return {
    title: "Terms of use",
    description:
      "The terms on which start.mu publishes this website: the general nature of the information, the absence of a client relationship, and the law that governs both.",
    alternates: alternates("/terms", locale),
  };
}

export default async function TermsPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return <LegalPage doc={termsOfUse} notice={locale !== "en" ? ui[locale].untranslated : undefined} />;
}
