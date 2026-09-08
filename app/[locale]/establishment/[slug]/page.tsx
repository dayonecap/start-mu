import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { getEstablishment, getThresholdNote } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";

type Params = { slug: string; locale: string };

export function generateStaticParams() {
  return getEstablishment("en").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const entry = getEstablishment(locale).find((e) => e.slug === slug);
  if (!entry) return {};
  return {
    title: { absolute: entry.metaTitle },
    description: entry.metaDescription,
    alternates: alternates(`/establishment/${slug}`, locale),
    openGraph: { title: entry.metaTitle, description: entry.metaDescription },
  };
}

export default async function EstablishmentEntryPage({ params }: { params: Promise<Params> }) {
  const { slug, locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const entry = getEstablishment(locale).find((e) => e.slug === slug);
  if (!entry) notFound();
  return <ServicePage locale={locale} entry={entry} parent={{ label: "Establishment", href: "/establishment" }} />;
}
