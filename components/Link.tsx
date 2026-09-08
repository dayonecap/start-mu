"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { isLocale, href as localise, type Locale } from "@/lib/i18n";

export function useLocale(): Locale {
  const p = usePathname() ?? "/";
  const first = p.split("/")[1];
  return isLocale(first) ? first : "en";
}

/** next/link that keeps the reader in their language for internal paths. */
export default function Link(props: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const h = props.href;
  if (typeof h === "string" && h.startsWith("/") && !h.startsWith("//")) {
    const first = h.split("/")[1];
    const already = isLocale(first);
    return <NextLink {...props} href={already ? h : localise(locale, h)} />;
  }
  return <NextLink {...props} />;
}
