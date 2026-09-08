import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import Link from "@/components/Link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceIndex } from "@/components/ServiceIndex";
import { ClosingCta } from "@/components/ClosingCta";
import { getProperty } from "@/lib/content";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return {
  title: "Property acquisition in Mauritius for non-citizens",
  description:
    "The approved schemes through which non-citizens buy property in Mauritius, the USD 375,000 residence threshold, how a purchase proceeds, and off-plan VEFA sales explained.",
    alternates: alternates("/property", locale),
  };
}

export default async function PropertyPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale];
  const property = getProperty(locale);
  const other = property.filter((p) => !p.index);
  return (
    <>
      <PageHero title={t.propertyPage.title} lead={t.propertyPage.lead} />

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <h2 className="t-h2">{t.propertyPage.comparedH}</h2>
          <div className="mt-8">
            <ServiceIndex entries={property} base="/property" columns={[t.index.offer, t.index.threshold, t.index.status]} routeLabel={t.index.route} />
          </div>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{t.propertyPage.sequenceH}</h2>
              <p className="mt-5 max-w-[36ch] text-[1.05rem] leading-[1.55] text-slate">
                {t.propertyPage.sequenceLead}
              </p>
              <p className="mt-6">
                <Link href="/property/off-plan-vefa" className="link-rule t-ui text-green">
                  {t.propertyPage.vefaLink}
                </Link>
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="divide-y divide-stone border-y border-stone">
                {t.propertyPage.sequence.map((s, i) => (
                  <li key={s.title} className="flex gap-5 py-5">
                    <span className="font-serif text-[2rem] leading-none text-green" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="t-h3">{s.title}</h3>
                      <p className="mt-2 text-[1.05rem] leading-[1.55] text-slate">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{t.propertyPage.actH}</h2>
            </div>
            <div className="prose-ipc lg:col-span-6 lg:col-start-7">
              {t.propertyPage.act.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {other.map((o) => (
                <p key={o.slug}>
                  <Link href={`/property/${o.slug}`} className="link-rule text-green">
                    {o.title}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
}
