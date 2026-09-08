import { site } from "./site";

export type LegalSection = { heading: string; body: string[]; list?: string[] };
export type LegalDoc = { title: string; updated: string; intro: string[]; sections: LegalSection[] };

/**
 * Adapted from the policies published at intrasiacorporate.com and extended for this site:
 * the contact form, the hosting and email processors it relies on, and the European readers
 * the French and German editions are written for. Counsel should review before launch.
 */

/** No personal addresses are published; enquiries route through the form or the postal address. */
export const contactRoute = `${site.url}/contact`;
export const principalAddress =
  "Aventure du Sucre Street, Block 3, First Floor, The Strand, Beau Plan, Pamplemousses, Mauritius";

const updated = "8 September 2026";

export const privacyPolicy: LegalDoc = {
  title: "Privacy policy",
  updated,
  intro: [
    `This policy explains what personal information ${site.legalName}, trading as start.mu, collects through this website and in the course of an engagement, why we hold it, who we share it with and what you may ask us to do with it.`,
    "It covers this website and the work that follows from an enquiry made through it. It is written to be read, not to be endured; if anything in it is unclear, write to us and we will explain it.",
  ],
  sections: [
    {
      heading: "Who we are",
      body: [
        `${site.legalName} is registered as Company Secretary and Corporate Service Provider with the Registrar of Companies in Mauritius, and trades as start.mu. We are the controller of the personal information described in this policy.`,
        `Our principal address is ${principalAddress}. General enquiries reach us at ${site.email}, or through the form at ${contactRoute}. Questions about personal information, and requests to exercise the rights set out below, reach our Data Protection Officer at the same address; mark them for the attention of the Data Protection Officer and they will be passed on.`,
      ],
    },
    {
      heading: "What we collect through this website",
      body: [
        "The contact form asks for your name, your email address, the subject you would like to discuss and your message. Nothing else on this site asks you for personal information, and the form carries no hidden fields beyond a single anti-spam trap that is discarded.",
        "Our host records ordinary server logs when a page is requested, including the IP address, the page and the time. These logs exist to keep the site running and secure.",
      ],
    },
    {
      heading: "What we collect during an engagement",
      body: [
        "If an enquiry becomes an engagement, the applications we prepare require documents that the authorities, banks and regulators specify. Depending on the route, this may include:",
      ],
      list: [
        "Your name, date of birth and nationality",
        "Passport and national identity card details",
        "Residential address and proof of it",
        "Marital status and family composition, where dependants are included",
        "Evidence of income, funds or investment",
        "Professional history, qualifications and references",
        "Information required for background screening and source-of-funds checks",
      ],
    },
    {
      heading: "Why we use it, and on what basis",
      body: [
        "We use the information you give through the form to answer your enquiry and, where you ask us to, to assess which route fits. We use the information gathered during an engagement to prepare and submit applications, to correspond with the authorities, banks and professionals involved, and to keep the records our own regulators require.",
        "Where the law of a European country applies to you, our lawful bases are these: answering your enquiry and performing our engagement are necessary for a contract or for steps taken at your request; identity, screening and record-keeping obligations are necessary for compliance with a legal obligation, including anti-money-laundering legislation; keeping our own records of advice given is necessary for our legitimate interest in defending our position; and marketing, if you ever receive any from us, rests on your consent.",
      ],
    },
    {
      heading: "Cookies, analytics and third-party requests",
      body: [
        "This site sets no cookies, stores nothing in your browser and carries no analytics, advertising or tracking of any kind. There is no consent banner because there is nothing to consent to.",
        "It also makes no requests to anyone else. The typefaces are served from this domain rather than from a font service, and no script, image or embed is loaded from a third party. Opening a page tells nobody but us and our host that you were here.",
      ],
    },
    {
      heading: "Who else sees it",
      body: [
        "We do not sell personal information and we do not share it for anyone else's marketing.",
        "Messages sent through the contact form are delivered to our mailbox by Resend, an email delivery service acting on our instructions. This site is hosted by Vercel, which processes the server logs described above. Both act as processors, under contract, and neither uses the information for its own purposes.",
        "In the course of an engagement we share what is necessary with the authorities that decide your application, principally the Economic Development Board and the Passport and Immigration Office, with banks where an account is being opened, and with the lawyers, notaries and accountants working on your matter. We disclose information where a law, regulation, court order or regulatory guideline requires it, including for identity verification, background screening and the prevention of money laundering and terrorist financing.",
      ],
    },
    {
      heading: "Information that leaves Mauritius",
      body: [
        "We are a Mauritian firm and our processors are established outside Mauritius. Where information is transferred out of Mauritius, or out of the European Economic Area, we do so under the safeguards the applicable law requires, which in practice means contractual protections with the recipient and transfers limited to what the purpose needs.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "An enquiry that does not become an engagement is kept while we are in correspondence and for a reasonable period afterwards, then deleted.",
        "Engagement records are kept for the period our regulatory obligations require, which for anti-money-laundering records is set by Mauritian law and runs for a number of years after the relationship ends. When a retention period expires and no legal or business purpose remains, we securely destroy or anonymise the information.",
      ],
    },
    {
      heading: "How we protect it",
      body: [
        "We apply technical and organisational measures appropriate to the sensitivity of what we hold, and access within the firm is limited to those who need it for your matter. No transmission over the internet is perfectly secure, and email in particular is not; where a document is sensitive we will agree a safer way to send it.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "You may ask us for a copy of the personal information we hold about you, ask us to correct it if it is wrong or incomplete, ask us to delete it, ask us to restrict or object to what we are doing with it, ask for it in a portable form, and withdraw any consent you have given. We will verify your identity before we act, and we will answer within the time the applicable law allows.",
        "These rights are not absolute. Where a law requires us to keep a record, we will keep it and tell you why. There is no charge; if a request is clearly unfounded, repetitive or excessive we may charge a reasonable fee or decline it, and we will explain our reasoning.",
        `To exercise any of these, write to ${site.email} marked for the attention of the Data Protection Officer, use the form at ${contactRoute}, or write to us at our principal address above. If you are not satisfied with our answer, you may complain to the Data Protection Office in Mauritius, and, if you are in Europe, to the supervisory authority where you live or work.`,
      ],
    },
    {
      heading: "Marketing",
      body: [
        "We may occasionally send you writing or invitations we think will interest you, but only if you have asked to hear from us. Every such message carries a way to stop them, and stopping them has no effect on the work we do for you.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        `We update this policy from time to time and publish the current version here with the date it took effect. Where a change materially affects your rights, it applies only to information processed after the change. This version is dated ${updated}.`,
      ],
    },
  ],
};

export const termsOfUse: LegalDoc = {
  title: "Terms of use",
  updated,
  intro: [
    `This website is published by ${site.legalName}, trading as start.mu. By using it you accept these terms. If you do not accept them, please do not use the site.`,
  ],
  sections: [
    {
      heading: "What this site is",
      body: [
        "The content here is general information about residency, company establishment and property acquisition in Mauritius. It is written carefully and reviewed regularly, but it is general: it does not take account of your circumstances, and it is not legal, tax, immigration, investment or financial advice.",
      ],
    },
    {
      heading: "No client relationship",
      body: [
        "Reading this site, sending an enquiry through it or receiving a reply does not create a client relationship. An engagement begins only when we have agreed its scope and terms with you in writing.",
        "We treat what clients tell us as confidential, under our engagement terms and our own professional and regulatory obligations. Confidentiality is not the same as legal professional privilege. We are a corporate service provider, not a law firm, and communications with us do not attract privilege in the way communications with a lawyer can. Where that distinction matters to your position, it is a reason to instruct a lawyer, and we will tell you so.",
      ],
    },
    {
      heading: "Figures, thresholds and timelines",
      body: [
        "Eligibility criteria, investment thresholds, official fees and processing times are set by the Mauritian authorities and change from time to time. The figures on this site are indicative, are correct to the best of our knowledge on the date shown, and are confirmed against the authorities' current guidelines before any application is prepared. Do not commit to a decision on the strength of a figure read here without asking us to confirm it.",
      ],
    },
    {
      heading: "No guarantee of outcome",
      body: [
        "Decisions on permits, residence, bank accounts, licences and regulatory approvals rest with the relevant authorities and institutions, not with us. We do not guarantee any outcome, and nothing on this site should be read as a promise of one.",
      ],
    },
    {
      heading: "No offer or solicitation",
      body: [
        "Nothing on this site is an offer or a solicitation to buy or sell any security or investment product, and the services described are not available in every jurisdiction. The site is not directed at anyone in a jurisdiction where publishing it would be contrary to local law.",
      ],
    },
    {
      heading: "Our content, and what you may do with it",
      body: [
        "The text, design, structure and marks on this site belong to us or are used with permission. You are welcome to read it, print it and quote it with attribution. You may not republish, redistribute, modify, rebrand or create derivative works from it without our written permission, and you must leave copyright and proprietary notices intact.",
        "You must not attempt to gain unauthorised access to the site or any connected system, probe or test its security, interfere with its operation or another reader's use of it, disguise the origin of anything you send through it, or use it for any unlawful purpose.",
      ],
    },
    {
      heading: "Availability",
      body: [
        "We aim to keep the site accurate, current and available, but we do not warrant that it will be uninterrupted, error-free or free of anything harmful, and we may change or withdraw any part of it without notice. Any reliance you place on the content is at your own risk.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the fullest extent the law allows, we are not liable for any loss arising from your use of this site or from reliance on its content, including loss of profit, loss of opportunity or any indirect or consequential loss. Nothing in these terms limits liability that cannot lawfully be limited, including liability for fraud or for death or personal injury caused by negligence.",
      ],
    },
    {
      heading: "Links to other sites",
      body: [
        "Where we link to another organisation's site, it is for convenience and is not an endorsement. We do not control those sites and are not responsible for their content, their accuracy or how they handle your personal information.",
      ],
    },
    {
      heading: "Privacy",
      body: [
        "How we collect and use personal information is set out in our privacy policy, which forms part of these terms.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        `We may revise these terms at any time by posting the revised version here. Continued use of the site after a revision is published constitutes acceptance of it. This version is dated ${updated}.`,
      ],
    },
    {
      heading: "Governing law",
      body: [
        "These terms are governed by the law of Mauritius, and any dispute arising from them or from your use of this site is subject to the exclusive jurisdiction of the courts of Mauritius. If any provision is found unenforceable, the rest continues in effect and the unenforceable provision is treated as replaced by an enforceable one reflecting its original intent.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about these terms reach us at ${site.email}.`],
    },
  ],
};
