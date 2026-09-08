import type { Locale } from "./i18n";
import type { ServiceEntry } from "@/content/types";
import { residency as residencyEn, thresholdNote as thresholdNoteEn } from "@/content/residency";
import { establishment as establishmentEn } from "@/content/establishment";
import { property as propertyEn } from "@/content/property";
import { faqs as faqsEn, type Faq } from "@/content/faqs";
import { navigation as navEn, footerColumns as footerEn, type NavGroup, type NavLink } from "@/content/site";
import { countries as countriesEn, type CountryPage } from "@/content/countries";
import { getInsights as getInsightsEn, type Insight } from "./cms";

import * as fr from "@/content/fr";
import * as de from "@/content/de";

type Overrides = {
  residency?: Record<string, Partial<ServiceEntry>>;
  establishment?: Record<string, Partial<ServiceEntry>>;
  property?: Record<string, Partial<ServiceEntry>>;
  faqs?: Record<string, Faq[]>;
  thresholdNote?: string;
  navLabels?: Record<string, string>;
  countries?: Record<string, Partial<CountryPage>>;
  insights?: Record<string, Partial<Insight>>;
};

const packs: Record<Locale, Overrides> = { en: {}, fr: fr.overrides, de: de.overrides };

function merge<T extends { slug: string }>(base: T[], over?: Record<string, Partial<T>>): (T & { translated: boolean })[] {
  return base.map((e) => ({ ...e, ...(over?.[e.slug] ?? {}), translated: Boolean(over?.[e.slug]) }));
}

export function getResidency(locale: Locale) {
  return merge(residencyEn, packs[locale].residency);
}
export function getEstablishment(locale: Locale) {
  return merge(establishmentEn, packs[locale].establishment);
}
export function getProperty(locale: Locale) {
  return merge(propertyEn, packs[locale].property);
}
export function getFaqs(locale: Locale, slug: string): Faq[] {
  return packs[locale].faqs?.[slug] ?? faqsEn[slug] ?? [];
}
export function getThresholdNote(locale: Locale) {
  return packs[locale].thresholdNote ?? thresholdNoteEn;
}
export function getCountries(locale: Locale) {
  return merge(countriesEn, packs[locale].countries);
}
export async function getInsights(locale: Locale) {
  const all = await getInsightsEn();
  return merge(all, packs[locale].insights);
}

function relabel(links: NavLink[], labels?: Record<string, string>): NavLink[] {
  return links.map((l) => ({ ...l, label: labels?.[l.label] ?? l.label }));
}
export function getNavigation(locale: Locale): NavGroup[] {
  const labels = packs[locale].navLabels;
  return navEn.map((g) => ({
    ...g,
    label: labels?.[g.label] ?? g.label,
    description: labels?.[g.description] ?? g.description,
    columns: g.columns.map((c) => ({ heading: labels?.[c.heading] ?? c.heading, links: relabel(c.links, labels) })),
  }));
}
export function getFooter(locale: Locale) {
  const labels = packs[locale].navLabels;
  return footerEn.map((c) => ({ heading: labels?.[c.heading] ?? c.heading, links: relabel(c.links, labels) }));
}
