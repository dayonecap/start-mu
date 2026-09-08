import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { residency } from "@/content/residency";
import { establishment } from "@/content/establishment";
import { property } from "@/content/property";
import { countries } from "@/content/countries";
import { getInsights } from "@/lib/cms";
import { href, locales } from "@/lib/i18n";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const all = await base();
  return locales.flatMap((l) => all.map((e) => ({ ...e, url: e.url.replace(site.url, site.url + (l === "en" ? "" : `/${l}`)) })));
}

async function base(): Promise<MetadataRoute.Sitemap> {
  const statics = ["", "/residency", "/residency/route-finder", "/establishment", "/property", "/concierge", "/mauritius", "/about", "/contact", "/insights"];
  const insights = await getInsights();
  const built = new Date();
  return [
    ...statics.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, lastModified: built })),
    ...residency.map((r) => ({ url: `${site.url}/residency/${r.slug}`, changeFrequency: "monthly" as const, lastModified: built })),
    ...establishment.map((e) => ({ url: `${site.url}/establishment/${e.slug}`, changeFrequency: "monthly" as const, lastModified: built })),
    ...countries.map((c) => ({ url: `${site.url}/moving-to-mauritius-from/${c.slug}`, changeFrequency: "monthly" as const, lastModified: built })),
    ...property.map((p) => ({ url: `${site.url}/property/${p.slug}`, changeFrequency: "monthly" as const, lastModified: built })),
    ...insights.map((i) => ({ url: `${site.url}/insights/${i.slug}`, lastModified: i.publishedAt })),
  ];
}
