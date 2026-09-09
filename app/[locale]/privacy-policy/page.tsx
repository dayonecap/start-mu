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
  const titles = { en: "Privacy policy", fr: "Politique de confidentialité", de: "Datenschutzerklärung" };
  const desc = {
    en: "What personal information start.mu collects through this website and in the course of an engagement, why we hold it, who we share it with and what you may ask us to do with it.",
    fr: "Les données personnelles que start.mu recueille via ce site et dans le cadre d'une mission, les raisons pour lesquelles nous les conservons, les personnes avec qui nous les partageons et les droits que vous pouvez exercer.",
    de: "Welche personenbezogenen Daten start.mu über diese Website und im Rahmen eines Mandats erhebt, warum wir sie speichern, an wen wir sie weitergeben und welche Rechte Ihnen zustehen.",
  };
  return {
    title: titles[locale],
    description: desc[locale],
    alternates: alternates("/privacy-policy", locale),
  };
}

export default async function PrivacyPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return <LegalPage doc={getLegal(locale).privacy} updatedLabel={ui[locale].legal.updated} />;
}
