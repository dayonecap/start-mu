import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { getLegal } from "@/lib/content";
import { LegalPage } from "@/components/LegalPage";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const titles = { en: "Terms of use", fr: "Conditions d'utilisation", de: "Nutzungsbedingungen" };
  const desc = {
    en: "The terms on which start.mu publishes this website: the general nature of the information, the absence of a client relationship, and the law that governs both.",
    fr: "Les conditions dans lesquelles start.mu publie ce site : le caractère général des informations, l'absence de relation client et le droit applicable.",
    de: "Die Bedingungen, unter denen start.mu diese Website veröffentlicht: der allgemeine Charakter der Informationen, das Fehlen eines Mandatsverhältnisses und das anwendbare Recht.",
  };
  return {
    title: titles[locale],
    description: desc[locale],
    alternates: alternates("/terms", locale),
  };
}

export default async function TermsPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return <LegalPage doc={getLegal(locale).terms} updatedLabel={ui[locale].legal.updated} />;
}
