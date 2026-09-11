import type { Locale } from "@/lib/i18n";

/** Downloadable document checklists (PDF), served from public/downloads, one file per language. Keyed by section/slug. */
export type Download = { file: string; pages: number };
export type LocalisedDownload = Record<Locale, Download>;

const base = "/downloads";
const suffix: Record<Locale, string> = { en: "", fr: "-fr", de: "-de" };

const localised = (name: string, pages: Record<Locale, number>): LocalisedDownload =>
  ({
    en: { file: `${base}/${name}${suffix.en}.pdf`, pages: pages.en },
    fr: { file: `${base}/${name}${suffix.fr}.pdf`, pages: pages.fr },
    de: { file: `${base}/${name}${suffix.de}.pdf`, pages: pages.de },
  });

export const checklistPack = localised("start-mu-document-checklists", { en: 28, fr: 29, de: 29 });

export const checklists: Record<string, LocalisedDownload> = {
  "residency/investor-permit": localised("start-mu-checklist-investor-occupation-permit", { en: 3, fr: 3, de: 3 }),
  "residency/professional-permit": localised("start-mu-checklist-professional-occupation-permit", { en: 3, fr: 3, de: 3 }),
  "residency/self-employed-permit": localised("start-mu-checklist-self-employed-occupation-permit", { en: 3, fr: 3, de: 3 }),
  "residency/innovator-permit": localised("start-mu-checklist-innovator-occupation-permit", { en: 3, fr: 3, de: 3 }),
  "residency/retired-residence-permit": localised("start-mu-checklist-retired-non-citizen-residence-permit", { en: 3, fr: 3, de: 3 }),
  "residency/property-acquisition": localised("start-mu-checklist-residency-by-property-acquisition", { en: 3, fr: 3, de: 3 }),
  "residency/golden-visa": localised("start-mu-checklist-golden-visa", { en: 3, fr: 3, de: 3 }),
  "residency/premium-visa": localised("start-mu-checklist-premium-visa", { en: 2, fr: 2, de: 2 }),
  "residency/dependents": localised("start-mu-checklist-dependent-residence-permit", { en: 2, fr: 2, de: 2 }),
  "residency/permanent-residence": localised("start-mu-checklist-permanent-residence-permit", { en: 2, fr: 3, de: 3 }),
};

export const getChecklist = (section: string, slug: string, locale: Locale): Download | undefined => checklists[`${section}/${slug}`]?.[locale];
