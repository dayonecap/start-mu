import type { LegalDoc } from "@/content/legal";
import { Container } from "./Container";
import { PageHero } from "./PageHero";

export function LegalPage({ doc, updatedLabel }: { doc: LegalDoc; updatedLabel: string }) {
  return (
    <>
      <PageHero title={doc.title} compact>
        <p className="t-small mt-6 text-slate">
          {updatedLabel} {doc.updated}
        </p>
      </PageHero>
      <section className="rule">
        <Container className="prose-ipc py-14 lg:py-20">
          {doc.intro.map((p) => (
            <p key={p} className="t-lead">
              {p}
            </p>
          ))}
          {doc.sections.map((s) => (
            <div key={s.heading} className="mt-10 first:mt-12">
              <h2 className="t-h3 mb-3">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.list ? (
                <ul>
                  {s.list.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
