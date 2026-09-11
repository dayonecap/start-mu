import type { ServiceEntry } from "@/content/types";
import type { Faq } from "@/content/faqs";
import { residencyDe, faqsDe } from "./residency";
import { establishmentDe, propertyDe, faqsBusinessDe } from "./business";
import { countriesDe } from "./countries";
import { insightsDe } from "./insights";

const navLabels: Record<string, string> = {
  Residency: "Aufenthalt",
  "Live, work or retire in Mauritius through an approved permit.": "Leben, arbeiten oder den Ruhestand verbringen auf Mauritius, mit einer anerkannten Genehmigung.",
  "Occupation permits": "Occupation Permits",
  Investor: "Investor",
  Professional: "Angestellte",
  "Self-employed": "Selbstständige",
  Innovator: "Innovatoren",
  "Residence permits and visas": "Genehmigungen und Visa",
  "Retired Non-Citizen": "Ruheständler",
  "Residency by property": "Aufenthalt durch Immobilienerwerb",
  "Golden Visa": "Golden Visa",
  "Premium Visa": "Premium Visa",
  Overview: "Überblick",
  "Which route fits": "Welche Möglichkeit passt",
  "Compare all routes": "Alle Möglichkeiten vergleichen",
  "Dependents and family": "Familienangehörige",
  "Permanent residence": "Dauerhafter Aufenthalt",
  "Moving from": "Umzug aus",
  "South Africa": "Südafrika",
  "United Kingdom": "Vereinigtes Königreich",
  France: "Frankreich",
  "Germany, Austria, Switzerland": "Deutschland, Österreich, Schweiz",
  Establishment: "Gründung",
  "A Mauritian company, bank account and registered office, operational from day one.": "Eine mauritische Gesellschaft, ein Bankkonto und ein eingetragener Sitz, vom ersten Tag an einsatzbereit.",
  "Company structures": "Gesellschaftsformen",
  "Domestic Company": "Domestic Company",
  "Global Business Company": "Global Business Company",
  "Authorised Company": "Authorised Company",
  Administration: "Verwaltung",
  "Bank account opening": "Kontoeröffnung",
  "Registered office and secretary": "Sitz und Company Secretary",
  "Annual compliance": "Jährliche Pflichten",
  "Which structure fits": "Welche Struktur passt",
  "Why Mauritius": "Warum Mauritius",
  Property: "Immobilien",
  "Buy in an approved development and, above the threshold, qualify for residence.": "In einem zugelassenen Projekt kaufen und ab der Schwelle den Aufenthalt erhalten.",
  "Approved schemes": "Zugelassene Programme",
  "Property Development Scheme": "Property Development Scheme",
  "Integrated Resort Scheme": "Integrated Resort Scheme",
  "Real Estate Scheme": "Real Estate Scheme",
  "Smart City Scheme": "Smart City Scheme",
  "Other routes": "Weitere Möglichkeiten",
  "Invest Hotel Scheme": "Invest Hotel Scheme",
  "Ground plus two apartments": "R+2-Wohnungen",
  "How acquisition works": "So läuft der Erwerb",
  "Off-plan and VEFA": "Kauf vor Fertigstellung und VEFA",
  Concierge: "Concierge",
  "The arrangements that a permit and a company do not cover.": "Was Genehmigung und Gesellschaft nicht abdecken.",
  About: "Über uns",
  "A private client firm within the Intrasia Group.": "Eine Privatkundenberatung innerhalb der Intrasia Group.",
  "The firm": "Das Unternehmen",
  "About us": "Über uns",
  "Mauritius in practice": "Mauritius in der Praxis",
  Insights: "Beiträge",
  Contact: "Kontakt",
  "Request a consultation": "Beratungsgespräch vereinbaren",
  "Intrasia Group": "Intrasia Group",
  "Investor permit": "Investor Permit",
  "Professional permit": "Professional Permit",
  "Self-employed permit": "Self-Employed Permit",
  "Retired Non-Citizen permit": "Genehmigung für Ruheständler",
  Firm: "Unternehmen",
};

const thresholdNote =
  "Die Voraussetzungen werden vom Economic Development Board festgelegt und mit jedem Staatsbudget überarbeitet. Die Angaben auf dieser Seite folgen den Occupation Permit Guidelines des EDB nach Section 5(2)(ca) des Economic Development Board Act 2017 in der nach dem Budget 2026-27 überarbeiteten Fassung und wurden zuletzt im September 2026 geprüft. Vor der Vorbereitung eines Antrags bestätigen wir die geltenden Kriterien beim EDB.";

const residency: Record<string, Partial<ServiceEntry>> = {
  "investor-permit": {
    title: "Occupation Permit für Investoren",
    summary: "Für alle, die auf Mauritius ein Unternehmen besitzen und führen werden.",
    intro:
      "Das Occupation Permit der Kategorie Investor ist eine kombinierte Arbeits- und Aufenthaltsgenehmigung für eine Person, die in eine auf Mauritius gegründete Gesellschaft investiert und aktiv an ihr beteiligt ist. Es wird für bis zu zehn Jahre erteilt und erfasst Ehepartner, unterhaltsberechtigte Kinder und Eltern des Inhabers.",
    facts: [
      { label: "Mindestinvestition", value: "100.000 USD, aus dem Ausland auf das Bankkonto der mauritischen Gesellschaft überwiesen" },
      { label: "Umsatzbedingungen", value: "5 Millionen MUR jährlich ab dem dritten Jahr der Registrierung; 8 Millionen MUR jährlich ab dem fünften Jahr für die Verlängerung" },
      { label: "Gültigkeit", value: "Bis zu 10 Jahre, verlängerbar" },
      { label: "Mittelnachweis", value: "Nachweis der Mittel im Ausland bei Antragstellung; die 100.000 USD werden innerhalb von 60 Tagen nach Erteilung auf das mauritische Konto der Gesellschaft überwiesen" },
      { label: "Überwachung", value: "Das EDB überwacht gemeinsam mit dem PIO und der Mauritius Revenue Authority die Einhaltung, auch durch Besuche vor Ort, und kann einen Inhaber, der die Kriterien nicht erfüllt, aus dem Register streichen" },
      { label: "Familienangehörige", value: "Ehepartner oder Lebenspartner, unverheiratete unterhaltsberechtigte Kinder und Eltern" },
      { label: "Behörden", value: "Economic Development Board; die Aufenthaltsgenehmigung erteilt das Passport and Immigration Office" },
    ],
    sections: [
      {
        heading: "Für wen es passt",
        body: [
          "Die Genehmigung ist für den Eigentümer-Unternehmer gedacht: jemanden, der Anteile an einer mauritischen Gesellschaft hält, sie leitet und ein Geschäft aufbaut, das auf Mauritius Umsatz erzielt. Für rein passive Investitionen eignet es sich nicht. Wer das Unternehmen nicht tatsächlich führen will, ist mit einer Aufenthaltsgenehmigung über eine Immobilie oder, sobald es in Kraft ist, mit dem Golden Visa meist besser bedient.",
          "Die meisten unserer Investor-Mandanten kommen mit einer bestehenden Tätigkeit: Beratung, Handel, Software, freie Berufe, regionaler Vertrieb. Die mauritische Gesellschaft wird zur operativen Einheit dieser Tätigkeit oder zu einer regionalen Basis, von der aus das Gesamtgeschäft bedient wird.",
        ],
      },
      {
        heading: "Was der Antrag umfasst",
        body: [
          "Zuerst wird die Gesellschaft gegründet. Der Antrag wird dann von einem Ausschuss aus EDB, Passport and Immigration Office und Büro des Premierministers anhand des Geschäftsplans, des Mittelnachweises, der Gesellschaftsunterlagen und der persönlichen Akte des Antragstellers geprüft. Die Genehmigung wird dem Grunde nach erteilt, die ärztliche Untersuchung findet auf Mauritius statt, und der Antragsteller erscheint persönlich zur Ausstellung. Ist der Investor eine Gesellschaft, stellt jeder Gesellschafter, der zugleich Direktor ist, einen eigenen Antrag.",
          "Wir erstellen den Geschäftsplan von Anfang an mit Blick auf die Umsatzbedingungen, damit die Ziele für das dritte und fünfte Jahr realistisch sind und sich in der Struktur des Unternehmens wiederfinden.",
        ],
      },
      {
        heading: "Nach der Erteilung",
        body: [
          "Die Genehmigung ist erst der Beginn einer laufenden Beziehung zum EDB und zur Mauritius Revenue Authority. Der Bruttoumsatz der Gesellschaft ist jährlich bei der MRA zu erklären, die Umsatzschwellen gelten ab dem dritten Jahr und erneut bei der Verlängerung, und das EDB überwacht die Einhaltung zusammen mit PIO und MRA, auch durch Besuche vor Ort. Wir bleiben nach der Erteilung für die jährlichen Erklärungen, die Schwelle im fünften Jahr und die Verlängerung an Ihrer Seite.",
        ],
      },
      {
        heading: "Die Variante für innovative Start-ups",
        body: [
          "Innerhalb der Kategorie Investor gibt es eine eigene Variante für innovative Start-ups, deren Projekt beim EDB eingereicht oder bei einem vom Mauritius Research and Innovation Council akkreditierten Inkubator registriert ist. Eine Mindestinvestition gibt es nicht. Stattdessen legt der Inhaber jährlich einen Fortschrittsbericht vor und am Ende des fünften Jahres einen Entwicklungsbericht, der zeigt, dass das Projekt ein marktfähiges Minimalprodukt erreicht hat. Näheres auf der Seite zum Innovator Permit.",
        ],
      },
    ],
    related: [
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Kontoeröffnung", href: "/establishment/bank-account-opening" },
      { label: "Innovator Permit", href: "/residency/innovator-permit" },
      { label: "Familienangehörige", href: "/residency/dependents" },
    ],
    metaTitle: "Occupation Permit für Investoren auf Mauritius | start.mu",
    metaDescription:
      "Das Occupation Permit für Investoren auf Mauritius: Mindestinvestition von 100.000 USD, Umsatzbedingungen, Familienangehörige, und wie start.mu den Antrag von der Gründung bis zur Erteilung begleitet.",
    index: { audience: "Eigentümer-Unternehmer einer mauritischen Gesellschaft", threshold: "100.000 USD Investition", duration: "Bis zu 10 Jahre" },
  },
};

const faqs: Record<string, Faq[]> = {
  "investor-permit": [
    { q: "Müssen die 100.000 USD in der Gesellschaft bleiben?", a: "Die Verpflichtung lautet, sie innerhalb von 60 Tagen nach Erteilung aus dem Ausland auf das mauritische Konto der Gesellschaft zu überweisen. Dort sind sie Betriebskapital und dürfen für das Geschäft ausgegeben werden. Es handelt sich weder um eine Kaution noch um eine Einlage, und sie werden nicht zurückgezahlt." },
    { q: "Kann ich die Genehmigung mit einem Geschäftspartner halten?", a: "Ja. Ist der Investor eine Gesellschaft mit mehreren Eigentümern, beantragt jeder Gesellschafter, der zugleich Direktor ist, seine eigene Genehmigung, und jeder muss die Kriterien selbst erfüllen." },
    { q: "Was passiert, wenn der Umsatz im dritten Jahr zu niedrig ist?", a: "Das EDB gleicht den erklärten Umsatz mit der Schwelle von 5 Millionen MUR ab und kann einen Inhaber, der sie nicht erreicht, streichen, womit die Genehmigung erlischt. In der Praxis wird die Frage aufgeworfen, bevor sie durchgesetzt wird, und wer die Lücke früh erkennt, hat meist Zeit gegenzusteuern. Das ist der Hauptgrund, warum wir die Erklärungen vom ersten Jahr an verfolgen." },
    { q: "Darf mein Ehepartner auf Mauritius arbeiten?", a: "Nicht mit einer Genehmigung als Familienangehöriger. Ein Ehepartner, der arbeiten möchte, beantragt ein eigenes Occupation Permit, häufig als Angestellter derselben Gesellschaft, oder eine Arbeitserlaubnis." },
    { q: "Ist das Investor Permit der richtige Weg, wenn ich nur passiv investieren will?", a: "In der Regel nicht. Die Genehmigung setzt einen Eigentümer voraus, der das Unternehmen leitet und dessen Gesellschaft auf Mauritius Umsatz erzielt. Ein passiver Investor ist meist mit dem Aufenthalt über eine Immobilie oder, sobald in Kraft, mit dem Golden Visa besser bedient." },
  ],
};

export const overrides = {
  navLabels,
  insights: insightsDe,
  countries: countriesDe,
  thresholdNote,
  residency: { ...residency, ...residencyDe },
  establishment: establishmentDe,
  property: propertyDe,
  faqs: { ...faqs, ...faqsDe, ...faqsBusinessDe },
};
