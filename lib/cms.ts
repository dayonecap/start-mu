/**
 * Insights content adapter.
 *
 * The site is designed to take articles from a headless CMS. Until one is connected,
 * this module reads the launch articles held in content/insights.
 *
 * To connect a CMS (Sanity, Contentful, Payload, Strapi or similar), implement
 * getInsights() and getInsight(slug) against its API and keep the Insight shape below.
 */

import type { Faq } from "@/content/faqs";

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string; // ISO date
  body: string; // HTML or portable text rendered by the article page
  category?: "Residency" | "Establishment" | "Property" | "Living in Mauritius";
  faqs?: Faq[];
};

export async function getInsights(): Promise<Insight[]> {
  const { insights } = await import("@/content/insights");
  return [...insights].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getInsight(slug: string): Promise<Insight | null> {
  const all = await getInsights();
  return all.find((i) => i.slug === slug) ?? null;
}
