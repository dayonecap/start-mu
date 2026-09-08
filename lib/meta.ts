import type { Metadata } from "next";
import { href, locales, type Locale } from "./i18n";

/** Canonical and hreflang for a path across locales. */
export function alternates(path: string, locale: Locale): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = href(l, path);
  languages["x-default"] = path;
  return { canonical: href(locale, path), languages };
}

export const ogLocale: Record<Locale, string> = { en: "en_GB", fr: "fr_FR", de: "de_DE" };
