export const locales = ["en", "fr", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

/** Prefix a path for a locale. English stays at the root. */
export function href(locale: Locale, path: string) {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export const localeNames: Record<Locale, string> = { en: "English", fr: "Français", de: "Deutsch" };
export const htmlLang: Record<Locale, string> = { en: "en", fr: "fr", de: "de" };

/** BCP 47 tags for Intl formatting. */
export const dateLocale: Record<Locale, string> = { en: "en-GB", fr: "fr-FR", de: "de-DE" };
