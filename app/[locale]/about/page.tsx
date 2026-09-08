import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { Figure } from "@/components/Figure";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return {
    title: { absolute: ui[locale].aboutPage.metaTitle },
    description: ui[locale].aboutPage.meta,
    alternates: alternates("/about", locale),
  };
}

/** Two-column section: heading (and optional aside) left, prose right. */
function Split({ heading, aside, children }: { heading: string; aside?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rule">
      <Container className="py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="t-h2">{heading}</h2>
            {aside}
          </div>
          <div className="lg:col-span-6 lg:col-start-7">{children}</div>
        </div>
      </Container>
    </section>
  );
}

function Person({ name, role, slot, bio, linkedin }: { name: string; role: string; slot: (typeof images)[string]; bio: string[]; linkedin: string }) {
  return (
    <Split
      heading={name}
      aside={
        <>
          <p className="t-ui mt-2 text-slate">{role}</p>
          <Figure slot={slot} className="mt-8 max-w-[320px]" sizes="320px" />
        </>
      }
    >
      <div className="prose-ipc">
        {bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p>
          <a href={linkedin} className="link-rule text-green" rel="noopener">
            LinkedIn
          </a>
        </p>
      </div>
    </Split>
  );
}

export default async function AboutPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const a = ui[locale].aboutPage;
  return (
    <>
      <PageHero title={a.title} lead={a.lead} />

      <Split heading={a.firmH}>
        <div className="prose-ipc">
          {a.firm.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Split>

      <Split heading={a.servicesH}>
        <ul className="divide-y divide-stone border-y border-stone">
          {a.services.map((s) => (
            <li key={s} className="py-3 text-[1.05rem] leading-[1.5]">
              {s}
            </li>
          ))}
        </ul>
      </Split>

      <Person name="Herman Suhirman" role={a.hermanRole} slot={images.about} bio={a.herman} linkedin="https://www.linkedin.com/in/hsuhirman/" />
      <Person name="Lea Permal" role={a.leaRole} slot={images.lea} bio={a.lea} linkedin="https://www.linkedin.com/in/lea-permal-181178223/" />

      <Split heading={a.groupH}>
        <div className="prose-ipc">
          <p>{a.groupIntro}</p>
          <ul>
            {a.companies.map((c) => (
              <li key={c.name}>
                <strong>
                  {"href" in c && c.href ? (
                    <a href={c.href} className="link-rule" rel="noopener">
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </strong>
                {", "}
                {c.body}
              </li>
            ))}
          </ul>
          <p>{a.groupAfter}</p>
          <h2 className="t-h2 mt-12">{a.singaporeH}</h2>
          <p>{a.singapore}</p>
          <p className="t-ui text-slate">
            {a.singaporeLabel}: {site.singapore.phone}
          </p>
        </div>
      </Split>

      <ClosingCta locale={locale} heading={a.ctaH} body={a.ctaBody} />
    </>
  );
}
