import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { finder } from "@/content/finder";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { RouteFinder } from "@/components/RouteFinder";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return {
    title: finder[locale].metaTitle,
    description: finder[locale].meta,
    alternates: alternates("/residency/route-finder", locale),
  };
}

export default async function RouteFinderPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const f = finder[locale];
  return (
    <>
      <PageHero title={f.title} lead={f.lead} compact />
      <section className="rule">
        <Container className="py-14 lg:py-20">
          <RouteFinder />
        </Container>
      </section>
    </>
  );
}
