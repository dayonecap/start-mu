"use client";

import Link, { useLocale } from "@/components/Link";
import { useState } from "react";
import { finder, type FinderStrings } from "@/content/finder";

type Answers = {
  purpose?: "business" | "employed" | "remote" | "retire" | "capital" | "home";
  over50?: "yes" | "no";
  capital?: "under50" | "50to100" | "100to375" | "375to1m" | "over1m";
  horizon?: "test" | "settle";
};

type Result = { title: string; href: string; why: string[]; also?: { title: string; href: string; note: string }[] };

const href = {
  premium: "/residency/premium-visa",
  property: "/residency/property-acquisition",
  retired: "/residency/retired-residence-permit",
  investor: "/residency/investor-permit",
  selfEmployed: "/residency/self-employed-permit",
  professional: "/residency/professional-permit",
  innovator: "/residency/innovator-permit",
  golden: "/residency/golden-visa",
  residency: "/residency",
} as const;

function decide(a: Answers, f: FinderStrings): Result {
  const L = f.links;
  const premium = { ...L.premium, href: href.premium };
  const property = { ...L.property, href: href.property };
  const retired = { ...L.retired, href: href.retired };
  const big = a.capital === "375to1m" || a.capital === "over1m";

  if (a.horizon === "test" && a.purpose !== "employed") {
    return {
      ...f.r.premiumFirst,
      href: href.premium,
      also:
        a.purpose === "business"
          ? [{ ...L.investorAfterPlan, href: href.investor }]
          : a.over50 === "yes"
            ? [retired]
            : [property],
    };
  }
  switch (a.purpose) {
    case "employed":
      return { ...f.r.employed, href: href.professional, also: a.over50 === "yes" ? [retired] : undefined };
    case "retire":
      if (a.over50 === "yes") return { ...f.r.retiredOver50, href: href.retired, also: big ? [property] : undefined };
      return { ...f.r.premiumThen50, href: href.premium, also: [property] };
    case "remote":
      return {
        ...f.r.remote,
        href: href.premium,
        also: [{ ...L.selfEmployed, href: href.selfEmployed }, ...(a.over50 === "yes" ? [retired] : [])],
      };
    case "home":
      if (big) return { ...f.r.propertyResidency, href: href.property, also: a.over50 === "yes" ? [retired] : undefined };
      return {
        title: a.over50 === "yes" ? f.r.homeBelow.titleOver50 : f.r.homeBelow.titleUnder50,
        href: a.over50 === "yes" ? href.retired : href.residency,
        why: [f.r.homeBelow.why0, a.over50 === "yes" ? f.r.homeBelow.whyOver50 : f.r.homeBelow.whyUnder50],
        also: [premium],
      };
    case "capital":
      if (a.capital === "over1m") return { ...f.r.golden, href: href.golden, also: [property] };
      return {
        title: a.over50 === "yes" ? f.r.passive.titleOver50 : f.r.passive.titleUnder50,
        href: a.over50 === "yes" ? href.retired : href.property,
        why: f.r.passive.why,
        also: [{ ...L.investorIfDirect, href: href.investor }],
      };
    case "business":
    default:
      if (a.capital === "under50") return { ...f.r.innovator, href: href.innovator, also: [premium] };
      if (a.capital === "50to100")
        return { ...f.r.selfEmployedOrInvestor, href: href.selfEmployed, also: [{ ...L.investorGrowth, href: href.investor }] };
      return { ...f.r.investor, href: href.investor, also: big ? [property] : undefined };
  }
}

const order = ["purpose", "over50", "capital", "horizon"] as const;
type Step = (typeof order)[number];

export function RouteFinder() {
  const [a, setA] = useState<Answers>({});
  const f = finder[useLocale()];
  const step = order.find((k) => a[k] === undefined) as Step | undefined;
  const result = step ? null : decide(a, f);

  return (
    <div className="max-w-[62ch]">
      {step ? (
        <div>
          <p className="t-ui text-slate">{f.progress(order.indexOf(step) + 1, order.length)}</p>
          <h2 className="t-h2 mt-3">{f.q[step].text}</h2>
          <ul className="mt-6 divide-y divide-stone border-y border-stone">
            {f.q[step].options.map(([value, label]) => (
              <li key={value}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left text-[1.05rem] hover:text-green"
                  onClick={() => setA({ ...a, [step]: value })}
                >
                  <span>{label}</span>
                  <span aria-hidden="true" className="text-stone">
                    +
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {order.indexOf(step) > 0 ? (
            <button type="button" className="t-ui link-rule mt-6 text-slate" onClick={() => setA({})}>
              {f.startAgain}
            </button>
          ) : null}
        </div>
      ) : result ? (
        <div>
          <p className="t-ui text-green">{f.theRoute}</p>
          <h2 className="t-h1 mt-3">{result.title}</h2>
          <ul className="prose-ipc mt-6">
            {result.why.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={result.href} className="btn btn-solid">
              {f.readAbout}
            </Link>
            <Link href="/contact" className="link-rule text-[1.05rem] text-green">
              {f.arrange}
            </Link>
          </div>
          {result.also?.length ? (
            <div className="mt-10 border-t border-stone pt-6">
              <p className="t-ui font-medium">{f.alongside}</p>
              <ul className="mt-3 space-y-3">
                {result.also.map((x) => (
                  <li key={x.href}>
                    <Link href={x.href} className="link-rule text-green">
                      {x.title}
                    </Link>
                    <span className="text-slate"> {x.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="t-small mt-10 max-w-[52ch]">{f.disclaimer}</p>
          <button type="button" className="t-ui link-rule mt-4 text-slate" onClick={() => setA({})}>
            {f.startAgain}
          </button>
        </div>
      ) : null}
    </div>
  );
}
