import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { privacyPolicy } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return {
    title: "Privacy policy",
    description:
      "What personal information start.mu collects through this website and in the course of an engagement, why we hold it, who we share it with and what you may ask us to do with it.",
    alternates: alternates("/privacy-policy", locale),
  };
}

export default async function PrivacyPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return <LegalPage doc={privacyPolicy} notice={locale !== "en" ? ui[locale].untranslated : undefined} />;
}
