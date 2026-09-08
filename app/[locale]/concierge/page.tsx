import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return {
    title: ui[locale].conciergePage.metaTitle,
    description: ui[locale].conciergePage.meta,
    alternates: alternates("/concierge", locale),
  };
}

export default async function ConciergePage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale];
  return (
    <>
      <PageHero title={t.conciergePage.title} lead={t.conciergePage.lead} />

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.conciergePage.areas.map((a) => (
              <div key={a.title} className="border-t border-ink pt-5">
                <h2 className="t-h3">{a.title}</h2>
                <p className="mt-3 text-[1.05rem] leading-[1.6] text-slate">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{t.conciergePage.requestH}</h2>
            </div>
            <div className="prose-ipc lg:col-span-6 lg:col-start-7">
              {t.conciergePage.request.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
}
