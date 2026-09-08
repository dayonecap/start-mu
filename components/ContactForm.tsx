"use client";

import { useState } from "react";
import Link, { useLocale } from "@/components/Link";
import { ui } from "@/content/ui";

type State = { status: "idle" | "sending" | "sent" | "error"; message?: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ status: "idle" });
  const locale = useLocale();
  const t = ui[locale].form;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? t.failed);
      setState({ status: "sent" });
      form.reset();
    } catch (err) {
      setState({ status: "error", message: err instanceof Error ? err.message : t.failed });
    }
  }

  if (state.status === "sent") {
    return (
      <div className="border-l-2 border-green pl-5">
        <p className="t-h3">{t.sentH}</p>
        <p className="mt-2 text-slate">{t.sentBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2" noValidate>
      <div>
        <label htmlFor="name" className="label">
          {t.name}
        </label>
        <input id="name" name="name" required autoComplete="name" className="field" />
      </div>
      <div>
        <label htmlFor="email" className="label">
          {t.email}
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className="field" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="interest" className="label">
          {t.interest}
        </label>
        <select id="interest" name="interest" className="field" defaultValue={t.interests[0]}>
          {t.interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="label">
          {t.message}
        </label>
        <textarea id="message" name="message" rows={6} required className="field" placeholder={t.placeholder} />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave blank</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-solid" disabled={state.status === "sending"}>
          {state.status === "sending" ? t.sending : t.send}
        </button>
        {state.status === "error" ? <p className="t-small text-ink">{state.message}</p> : null}
      </div>
      <p className="t-small sm:col-span-2 text-slate">
        {t.privacyBefore}
        <Link href="/privacy-policy" className="link-rule">
          {t.privacyLink}
        </Link>
        {t.privacyAfter}
      </p>
    </form>
  );
}
