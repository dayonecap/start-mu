import type { Metadata } from "next";
import Link from "@/components/Link";
import { Container } from "@/components/Container";
import { ClosingCta } from "@/components/ClosingCta";
import { getInsights, getResidency } from "@/lib/content";
import { ui } from "@/content/ui";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return { alternates: alternates("/", locale) };
}

const homeRoutes = ["investor-permit", "self-employed-permit", "retired-residence-permit", "property-acquisition", "golden-visa", "premium-visa"];

export default async function HomePage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale].home;
  const residency = getResidency(locale);
  const notes = (await getInsights(locale)).slice(0, 3);
  const routes = homeRoutes.map((s) => residency.find((r) => r.slug === s)!);
  return (
    <>
      <section className="py-24 lg:py-36">
        <Container>
          <p className="reveal t-ui text-green">{t.eyebrow}</p>
          <h1 className="reveal reveal-2 t-display mt-6 max-w-[22ch]">{t.h1}</h1>
          {t.lead ? <p className="reveal reveal-3 t-lead mt-8 max-w-[52ch]">{t.lead}</p> : null}
          <div className="reveal reveal-3 mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn btn-solid">
              {ui[locale].nav.consult}
            </Link>
            <Link href="/residency/route-finder" className="link-rule text-[1.05rem] text-green">
              {t.finder}
            </Link>
          </div>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{t.bridgeH}</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="t-lead">{t.bridge}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
            {t.pillars.map((p) => (
              <article key={p.title} className="border-t border-ink pt-6">
                <h2 className="t-h2">
                  <Link href={p.href} className="hover:text-green">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-5 text-[1.05rem] leading-[1.6] text-slate">{p.body}</p>
                <p className="mt-6">
                  <Link href={p.href} className="link-rule t-ui text-green">
                    {p.link}
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="rule bg-paper">
        <Container className="py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="t-h2">{t.routesH}</h2>
              <p className="mt-5 max-w-[36ch] text-[1.05rem] leading-[1.55] text-slate">{t.routesBody}</p>
              <p className="mt-6">
                <Link href="/residency" className="link-rule t-ui text-green">
                  {t.routesLink}
                </Link>
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-stone border-y border-stone">
                {routes.map((r) => (
                  <li key={r.slug} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-6">
                    <div className="sm:col-span-5">
                      <Link href={`/residency/${r.slug}`} className="t-h3 link-rule hover:text-green">
                        {r.title}
                      </Link>
                    </div>
                    <div className="t-ui sm:col-span-4">{r.index?.threshold}</div>
                    <div className="t-ui text-slate sm:col-span-3">{r.index?.duration}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-16 lg:py-24">
          <h2 className="t-h2">{t.howH}</h2>
          <ol className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {t.steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="font-serif text-[2.5rem] leading-none text-green" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="t-h3">{s.title}</h3>
                  <p className="mt-3 text-[1.05rem] leading-[1.6] text-slate">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="rule">
        <Container className="py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{t.mauritiusH}</h2>
            </div>
            <div className="prose-ipc lg:col-span-6 lg:col-start-7">
              {t.mauritius.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                <Link href="/mauritius" className="link-rule text-green">
                  {t.mauritiusLink}
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {notes.length > 0 ? (
        <section className="rule bg-paper">
          <Container className="py-16 lg:py-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="t-h2">{t.notesH}</h2>
                <p className="mt-6">
                  <Link href="/insights" className="link-rule t-ui text-green">
                    {t.notesLink}
                  </Link>
                </p>
              </div>
              <ul className="divide-y divide-stone border-y border-stone lg:col-span-8">
                {notes.map((n) => (
                  <li key={n.slug} className="py-5">
                    <Link href={`/insights/${n.slug}`} className="t-h3 link-rule hover:text-green">
                      {n.title}
                    </Link>
                    <p className="mt-2 max-w-[60ch] text-[1.05rem] leading-[1.55] text-slate">{n.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="rule">
        <Container className="py-10">
          <p className="t-ui max-w-[80ch] text-slate">{t.credibility}</p>
        </Container>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
}
