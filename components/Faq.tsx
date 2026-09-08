import type { Faq as FaqItem } from "@/content/faqs";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-stone border-y border-stone">
      {items.map((f) => (
        <details key={f.q} className="faq group">
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-5">
            <span className="t-h3 font-normal">{f.q}</span>
            <span className="faq-marker mt-2 shrink-0 text-slate" aria-hidden="true" />
          </summary>
          <p className="max-w-[62ch] pb-6 text-[1.05rem] leading-[1.6] text-slate">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
