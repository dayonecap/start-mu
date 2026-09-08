import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { ui } from "@/content/ui";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  return {
    title: ui[locale].contactPage.title,
    description: ui[locale].contactPage.meta,
    alternates: alternates("/contact", locale),
  };
}

export default async function ContactPage({ params }: { params: Promise<Params> }) {
  const { locale: l } = await params;
  const locale: Locale = isLocale(l) ? l : "en";
  const t = ui[locale];
  return (
    <>
      <PageHero title={t.contactPage.title} lead={t.contactPage.lead} compact />
      <section className="rule">
        <Container className="py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h2 className="t-h3">{t.contactPage.directlyH}</h2>
              <address className="mt-4 not-italic leading-[1.7]">
                <a href={`mailto:${site.email}`} className="link-rule text-green">
                  {site.email}
                </a>
                <br />
                <a href={site.phoneHref} className="text-ink">
                  {site.phone}
                </a>
                <br />
                <span className="text-slate">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">GMT +4</span>
                </span>
              </address>
              <h2 className="t-h3 mt-10">{t.contactPage.expectH}</h2>
              <p className="mt-3 text-[1.05rem] leading-[1.6] text-slate">
                {t.contactPage.expect}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
