import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  locale?: string;
  name?: string;
  email?: string;
  country?: string;
  interest?: string;
  message?: string;
  company_website?: string;
};

// The form posts the reader's locale so a rejection comes back in the language they are reading.
const messages = {
  en: {
    invalid: "Invalid request.",
    fields: "Please provide your name, a valid email address and a message.",
    failed: "The message could not be sent. Please try again or use the contact details on this page.",
  },
  fr: {
    invalid: "Requête invalide.",
    fields: "Merci d'indiquer votre nom, une adresse e-mail valide et un message.",
    failed: "Le message n'a pas pu être envoyé. Merci de réessayer ou d'utiliser les coordonnées de cette page.",
  },
  de: {
    invalid: "Ungültige Anfrage.",
    fields: "Bitte geben Sie Ihren Namen, eine gültige E-Mail-Adresse und eine Nachricht an.",
    failed: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder nutzen Sie die Kontaktdaten auf dieser Seite.",
  },
} as const;

function t(locale: string | undefined) {
  return locale === "fr" || locale === "de" ? messages[locale] : messages.en;
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: messages.en.invalid }, { status: 400 });
  }
  const m = t(body.locale);

  // Honeypot: bots fill the hidden field, people do not.
  if (body.company_website) return NextResponse.json({ ok: true });

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: m.fields }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "hello@start.mu";
  const from = process.env.CONTACT_FROM_EMAIL ?? "hello@start.mu";
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Interest: ${body.interest ?? ""}`,
    "",
    message,
  ].join("\n");

  if (!process.env.RESEND_API_KEY) {
    console.log("[contact] RESEND_API_KEY not set. Submission:\n" + text);
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `start.mu by Intrasia <${from}>`,
      to,
      replyTo: email,
      subject: `Website enquiry: ${body.interest ?? "General"} from ${name}`,
      text,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: m.failed }, { status: 500 });
  }
}
