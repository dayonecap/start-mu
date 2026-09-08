"use client";

import Link from "@/components/Link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import type { NavGroup } from "@/content/site";
import { locales, localeNames, href as localise, type Locale } from "@/lib/i18n";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";

export function SiteHeader({ locale, navigation, t }: { locale: Locale; navigation: NavGroup[]; t: { consult: string; menu: string; close: string; whatsapp: string } }) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname() ?? "/";
  // usePathname() reports the internal rewritten path ("/en/contact") after a client-side
  // navigation through the middleware rewrite, so strip every locale, en included, or the
  // switcher builds "/fr/en/contact". Built from `locales` so adding a language can't miss one.
  const basePath = pathname.replace(new RegExp(`^/(${locales.join("|")})(?=/|$)`), "") || "/";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
        setOpenGroup(null);
      }
    }
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header ref={ref} className="relative z-40 border-b border-stone bg-bone">
      <div className="hidden border-b border-stone/70 lg:block">
        <Container className="flex h-9 items-center justify-end gap-6">
          <a href={site.phoneHref} className="t-small hover:text-green">
            {site.phone}
          </a>
          <a href={site.whatsapp} className="t-small hover:text-green" rel="noopener">
            WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="t-small hover:text-green">
            {site.email}
          </a>
          <span className="t-small text-slate" aria-hidden="true">
            |
          </span>
          <nav aria-label="Language" className="flex gap-4">
            {locales.map((l) => (
              <a key={l} href={localise(l, basePath)} hrefLang={l} className={`t-small ${l === locale ? "text-ink" : "text-slate hover:text-green"}`} aria-current={l === locale ? "true" : undefined}>
                {localeNames[l]}
              </a>
            ))}
          </nav>
        </Container>
      </div>
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <Wordmark />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navigation.map((group) => {
                const active = basePath === group.href || basePath.startsWith(group.href + "/");
                const hasPanel = group.columns.length > 0;
                // inline-block on both: a bare <a> is inline, so py-2 would not build the same
                // box height as the <button> siblings and the item would sit ~2px high.
                const itemClass = `t-ui inline-block py-2 ${active ? "text-green" : "text-ink"} hover:text-green`;
                return (
                  <li key={group.label}>
                    {hasPanel ? (
                      <button
                        type="button"
                        className={itemClass}
                        aria-expanded={open === group.label}
                        aria-controls={`panel-${group.label}`}
                        onClick={() => setOpen(open === group.label ? null : group.label)}
                      >
                        {group.label}
                      </button>
                    ) : (
                      <Link href={group.href} className={itemClass}>
                        {group.label}
                      </Link>
                    )}
                  </li>
                );
              })}
              <li>
                <Link href="/contact" className="btn btn-solid">
                  {t.consult}
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="t-ui lg:hidden"
            aria-expanded={mobile}
            aria-controls="mobile-nav"
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? t.close : t.menu}
          </button>
        </div>
      </Container>

      {navigation.map((group) =>
        group.columns.length > 0 && open === group.label ? (
          <div key={group.label} id={`panel-${group.label}`} className="nav-panel hidden lg:block">
            <Container className="py-9">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-4 pr-8">
                  <Link href={group.href} className="t-h2 link-rule inline text-ink">
                    {group.label}
                  </Link>
                  <p className="mt-4 max-w-[36ch] text-[1.05rem] leading-[1.5] text-slate">{group.description}</p>
                </div>
                <div className={`col-span-8 grid gap-8 ${group.columns.length > 3 ? "grid-cols-4" : "grid-cols-3"}`}>
                  {group.columns.map((col) => (
                    <div key={col.heading}>
                      <p className="t-ui mb-3 font-medium text-ink hyphens-auto break-words">{col.heading}</p>
                      <ul className="space-y-2">
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className="t-ui text-slate hover:text-green">
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        ) : null,
      )}

      {mobile ? (
        <div id="mobile-nav" className="border-t border-stone bg-paper lg:hidden">
          <Container className="py-5">
            {/* Actions first: reachable without scrolling past the section list. */}
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn btn-solid justify-center">
                {t.consult}
              </Link>
              <a href={site.whatsapp} className="btn btn-ghost justify-center" rel="noopener">
                {t.whatsapp}
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <a href={site.phoneHref} className="t-ui text-slate">
                {site.phone}
              </a>
              <nav aria-label="Language" className="flex gap-4">
                {locales.map((l) => (
                  <a
                    key={l}
                    href={localise(l, basePath)}
                    hrefLang={l}
                    className={`t-ui ${l === locale ? "text-ink" : "text-slate"}`}
                    aria-current={l === locale ? "true" : undefined}
                  >
                    {localeNames[l]}
                  </a>
                ))}
              </nav>
            </div>

            <ul className="mt-5 divide-y divide-stone border-t border-stone">
              {navigation.map((group) => {
                const hasPanel = group.columns.length > 0;
                const isOpen = openGroup === group.label;
                const panelId = `m${group.href.replace(/\//g, "-")}`;
                return (
                  <li key={group.label}>
                    {hasPanel ? (
                      <>
                        {/* Label navigates to the section; the +/- toggles it open. The button
                            takes its accessible name from the link, so it announces as
                            "Residency, collapsed" without needing its own translated label. */}
                        <div className="flex items-center justify-between gap-2">
                          <Link id={`${panelId}-label`} href={group.href} className="t-h3 block flex-1 py-4 text-ink">
                            {group.label}
                          </Link>
                          <button
                            type="button"
                            className="t-ui flex w-11 shrink-0 items-center justify-center py-4 text-slate"
                            aria-labelledby={`${panelId}-label`}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setOpenGroup(isOpen ? null : group.label)}
                          >
                            <span aria-hidden="true">{isOpen ? "\u2212" : "+"}</span>
                          </button>
                        </div>
                        {isOpen ? (
                          <div id={panelId} className="pb-5">
                            {group.columns.map((c) => (
                              <div key={c.heading} className="mt-4 first:mt-0">
                                <p className="t-small font-medium text-ink">{c.heading}</p>
                                <ul className="mt-2 space-y-2">
                                  {c.links.map((l) => (
                                    <li key={l.href}>
                                      <Link href={l.href} className="t-ui text-slate">
                                        {l.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <Link href={group.href} className="t-h3 block py-4 text-ink">
                        {group.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
