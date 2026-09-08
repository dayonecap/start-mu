import type { ServiceEntry } from "./types";

export const establishment: ServiceEntry[] = [
  {
    slug: "domestic-company",
    title: "Domestic Company",
    summary: "The operating company behind most Occupation Permits and many property purchases.",
    intro:
      "A Mauritian Domestic Company is a private company incorporated under the Companies Act 2001 for business carried on in Mauritius. It is the vehicle for an Investor Occupation Permit, the employer for a Professional permit, and, with a trust layer, a way of holding scheme property. It is taxed in Mauritius at 15% on chargeable income, with partial exemptions for certain classes.",
    facts: [
      { label: "Governing law", value: "Companies Act 2001, administered by the Registrar of Companies" },
      { label: "Shareholders and directors", value: "One shareholder and one director are sufficient. At least one director must be ordinarily resident in Mauritius" },
      { label: "Registered office", value: "Required in Mauritius. We provide it" },
      { label: "Company secretary", value: "Required for a company with more than one director, or in practice for any company holding a permit or bank account. We provide it" },
      { label: "Timing", value: "Incorporation typically within a few working days of a complete file. A bank account takes longer" },
      { label: "Tax", value: "15% on chargeable income. No capital gains tax. Dividends paid to shareholders are exempt from income tax in their hands, but count towards an individual resident's Fair Share Contribution threshold" },
      { label: "Annual obligations", value: "Annual return, financial statements, tax return, and for permit holders, turnover declarations to the EDB" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "Anyone relocating on an Investor permit, since the permit requires a company. Anyone setting up a real business in Mauritius: consulting, trading, technology, hospitality, property development, regional services. And families who want to hold a scheme property through a company rather than in their own names.",
        ],
      },
      {
        heading: "Holding property through a company with a trust",
        body: [
          "A Domestic Company may acquire property under the approved schemes, and the shares of that company may be held by a trust. The structure separates the home from the individual, which matters for succession, for families with members in several jurisdictions, and for buyers who prefer not to hold Mauritian real estate personally. The EDB has confirmed to us that the residence permit can be applied for through a trustee structure, subject to the usual conditions.",
          "This is a structure we set up regularly. It requires a Mauritian trustee, a properly drafted trust deed, and coordination between the notary, the EDB and the bank at the point of purchase. We prepare a written proposal for each engagement showing the structure, the parties, the costs and the sequence.",
        ],
      },
      {
        heading: "Resident director",
        body: [
          "Every Domestic Company needs at least one director who is ordinarily resident in Mauritius. Where the owner is not yet resident, or prefers not to act, we provide a resident director under a written agreement that sets out plainly what the director will and will not do, and how the owner retains control. We do not provide directors to companies whose activities we do not understand.",
        ],
      },
      {
        heading: "What we handle",
        body: [
          "Name reservation, incorporation, constitution, registered office, company secretary, resident director where required, the bank introduction, registration with the Mauritius Revenue Authority and the Registrar of Businesses, and the annual compliance that follows. For permit holders, the EDB filings run alongside.",
        ],
      },
    ],
    related: [
      { label: "Investor permit", href: "/residency/investor-permit" },
      { label: "Bank account opening", href: "/establishment/bank-account-opening" },
      { label: "Registered office and secretary", href: "/establishment/registered-office-and-secretary" },
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
    ],
    metaTitle: "Mauritius Domestic Company Incorporation | start.mu",
    metaDescription:
      "Incorporating a Domestic Company in Mauritius: directors, registered office, tax at 15%, holding scheme property through a company and trust, and what start.mu handles.",
    index: { audience: "Business in Mauritius, permit holders, property through a structure", threshold: "Business carried on in Mauritius", duration: "15% on chargeable income" },
  },
  {
    slug: "global-business-company",
    title: "Global Business Company",
    summary: "For international business conducted from Mauritius with substance and treaty access.",
    intro:
      "A Global Business Company holds a Global Business Licence from the Financial Services Commission and conducts business principally outside Mauritius while being managed and controlled from within it. It is the structure for holding companies, international trading, investment funds and regional headquarters that want access to Mauritius's double taxation agreements.",
    status:
      "Global Business Companies are licensed by the Financial Services Commission and must be administered by a licensed Management Company. These engagements are delivered with our sister company, Intrasia Management (Mauritius) Limited, which holds a Management Licence from the FSC. start.mu coordinates the engagement on the client's behalf.",
    facts: [
      { label: "Licence", value: "Global Business Licence issued by the Financial Services Commission" },
      { label: "Administration", value: "Must be administered by a Management Company licensed by the FSC" },
      { label: "Substance", value: "At least two resident directors, a principal bank account in Mauritius, accounts kept and audited in Mauritius, board meetings held in Mauritius, and core income-generating activity carried out in Mauritius" },
      { label: "Tax", value: "15% with an 80% partial exemption on qualifying foreign-source income, giving an effective rate of 3% on that income, subject to substance" },
      { label: "Treaty access", value: "Eligible for Mauritius's network of double taxation agreements, subject to tax residence certification" },
      { label: "Timing", value: "Licensing typically takes several weeks from a complete file" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "A business owner with operations or investments in several countries, particularly in Africa and Asia, who wants a stable, well-regulated holding jurisdiction with treaty access. It is not the right structure for a business that will trade principally in Mauritius, and it is not a structure for a permit application on its own, although a Global Business Company can employ a Professional permit holder.",
        ],
      },
      {
        heading: "Substance is not optional",
        body: [
          "The value of a Global Business Company lies in its tax residence, and tax residence depends on real management and control in Mauritius. The FSC and the Mauritius Revenue Authority test this. Directors must be resident and must actually direct. Decisions must be made in Mauritius. Expenditure and staff must be proportionate to the activity. We set the structure up so that it can meet these tests, and we say so plainly where a proposed structure cannot.",
        ],
      },
      {
        heading: "How we work on these engagements",
        body: [
          "We assess the proposal, identify the right licence and structure, and coordinate the application through the licensed Management Company. Where the owner is also relocating, we run the permit and the personal side in parallel so that the two are consistent.",
        ],
      },
    ],
    related: [
      { label: "Authorised Company", href: "/establishment/authorised-company" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Why Mauritius", href: "/mauritius" },
    ],
    metaTitle: "Mauritius Global Business Company | start.mu",
    metaDescription:
      "The Mauritius Global Business Company: FSC licensing, substance requirements, the 3% effective rate on qualifying foreign income, treaty access, and how the engagement is coordinated.",
    index: { audience: "International holding and trading", threshold: "Managed and controlled in Mauritius", duration: "3% effective on qualifying foreign income" },
  },
  {
    slug: "authorised-company",
    title: "Authorised Company",
    summary: "A simpler vehicle for business conducted and controlled outside Mauritius.",
    intro:
      "An Authorised Company is incorporated in Mauritius, authorised by the Financial Services Commission, and has its central management and control outside Mauritius. It is treated as non-resident for tax and is not eligible for treaty benefits. It suits international trading, invoicing and holding activity where treaty access is not needed.",
    status:
      "Authorised Companies are authorised by the Financial Services Commission and must have a registered agent that is a licensed Management Company. Our sister company, Intrasia Management (Mauritius) Limited, acts as registered agent, and start.mu coordinates the engagement on the client's behalf.",
    facts: [
      { label: "Authorisation", value: "Issued by the Financial Services Commission" },
      { label: "Registered agent", value: "A Management Company licensed by the FSC" },
      { label: "Management and control", value: "Outside Mauritius" },
      { label: "Tax", value: "Non-resident. No Mauritian tax on foreign-source income. No access to double taxation agreements" },
      { label: "Activities", value: "Trading, investment holding, consultancy, intellectual property holding and similar activities conducted outside Mauritius. Banking, financial services and certain other activities are excluded" },
      { label: "Reporting", value: "An annual financial summary filed with the FSC and an annual return of income filed with the Mauritius Revenue Authority" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "An entrepreneur who wants a Mauritian-incorporated company for international activity, with lighter substance requirements than a Global Business Company, and who does not need treaty access. It is common for consultants and traders serving clients across several markets, and for holding intellectual property or investments where the owner's home jurisdiction does not tax on a residence basis.",
        ],
      },
      {
        heading: "Limits",
        body: [
          "An Authorised Company cannot carry on business in Mauritius with residents, cannot hold a Global Business Licence, and cannot support an Occupation Permit. The owner's own tax position at home is unaffected by the choice of a Mauritian vehicle, and we recommend home-country advice before proceeding.",
        ],
      },
    ],
    related: [
      { label: "Global Business Company", href: "/establishment/global-business-company" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Mauritius Authorised Company | start.mu",
    metaDescription:
      "The Mauritius Authorised Company: FSC authorisation, management and control outside Mauritius, non-resident tax treatment, permitted activities and limits.",
    index: { audience: "International activity without treaty needs", threshold: "Controlled outside Mauritius", duration: "Non-resident, no Mauritian tax" },
  },
  {
    slug: "bank-account-opening",
    title: "Bank Account Opening",
    summary: "Introduced, supported through onboarding, and open before the permit is filed.",
    intro:
      "A Mauritian bank account is a condition of most permits and a practical necessity for any company. Opening one takes longer than incorporation, and the banks' onboarding standards have risen considerably. We introduce clients to the bank that fits their profile and support the file through to activation.",
    facts: [
      { label: "Banks we work with", value: "MCB, AfrAsia Bank, SBM, Bank One and ABSA Mauritius, among others" },
      { label: "Timing", value: "Two to six weeks from a complete file, depending on the bank and the applicant's profile" },
      { label: "What the bank will ask for", value: "Identity and address documents, source of wealth and source of funds, the business plan, and for companies, the constitution and incorporation documents" },
      { label: "Personal and corporate", value: "We arrange both. The personal account is usually opened first" },
    ],
    sections: [
      {
        heading: "Why it takes time",
        body: [
          "Mauritian banks apply enhanced due diligence to non-resident applicants and to new companies. A file that is incomplete or inconsistent will sit. The single most effective thing we do on a bank file is prepare it properly before submission: a coherent narrative of the applicant's wealth, documents that agree with each other, and a business plan the bank's compliance function can follow.",
        ],
      },
      {
        heading: "Choosing the bank",
        body: [
          "The banks differ in their appetite by nationality, sector and account type, in their minimum balances, in their multi-currency facilities, and in how they treat a company that has not yet started trading. We know where a given profile is likely to be welcomed and we direct the introduction accordingly, rather than submitting to several banks and waiting to see which responds.",
        ],
      },
      {
        heading: "Coordination with the permit",
        body: [
          "For an Investor permit, the USD 100,000 must be transferred into the company's Mauritian account within 60 days of issuance; for Self-Employed the figure is USD 50,000 and for a Retired Non-Citizen an initial USD 2,000. Failure to transfer within the 60 days leads to deregistration and cancellation of the permit. We sequence the bank file and the permit file so that the account is open before the permit is issued and the deadline is never in question.",
        ],
      },
    ],
    related: [
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Investor permit", href: "/residency/investor-permit" },
    ],
    metaTitle: "Bank Account Opening Mauritius | start.mu",
    metaDescription:
      "Opening personal and corporate bank accounts in Mauritius: which banks, what they require, how long it takes, and how the account is coordinated with a permit application.",
  },
  {
    slug: "registered-office-and-secretary",
    title: "Registered Office and Company Secretary",
    summary: "Held on our books, with the statutory records kept and the filings made.",
    intro:
      "Every Mauritian company needs a registered office in Mauritius and, in practice, a company secretary who keeps the statutory registers and makes the filings the Registrar of Companies requires. We provide both from our office in Mauritius.",
    facts: [
      { label: "Registered office", value: "A Mauritian address for service of documents and statutory correspondence" },
      { label: "Company secretary", value: "Maintenance of the share register, register of directors, minutes and resolutions, and the annual return" },
      { label: "Filings", value: "Annual return to the Registrar of Companies, changes to directors and shareholders, and beneficial ownership information" },
      { label: "Mail", value: "Statutory mail received, scanned and forwarded" },
    ],
    sections: [
      {
        heading: "What is included",
        body: [
          "The registered office address, receipt and handling of official correspondence, the statutory registers, board and shareholder resolutions for routine matters, the annual return, and reminders ahead of each filing and renewal date. For permit holders, we keep the EDB turnover declarations in the same calendar.",
        ],
      },
      {
        heading: "What is not included",
        body: [
          "Accounting, audit and tax filings are separate services. We introduce a local accountant as part of the establishment package and coordinate with them, but the accounts themselves are prepared by the accountant. Where a client would prefer a single point of contact for all of it, we arrange that.",
        ],
      },
    ],
    related: [
      { label: "Annual compliance", href: "/establishment/annual-compliance" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Registered Office and Company Secretary Mauritius | start.mu",
    metaDescription:
      "Registered office and company secretarial services in Mauritius: statutory registers, annual returns, beneficial ownership filings and the compliance calendar for permit holders.",
  },
  {
    slug: "annual-compliance",
    title: "Annual Compliance",
    summary: "The filings, declarations and reviews that keep a permit and a company in good standing.",
    intro:
      "A permit and a company each carry annual obligations, and since the 2025 and 2026 Budgets those obligations are checked more closely than before. We keep one calendar for the company, the permit and the household, and we act on it.",
    facts: [
      { label: "Company", value: "Annual return, financial statements, tax return, beneficial ownership updates, registered office and secretary renewals" },
      { label: "Permit", value: "Annual declaration of turnover or income to the Mauritius Revenue Authority, EDB monitoring, the Year 3 and Year 5 thresholds, and renewal lodged at least one month before expiry" },
      { label: "Tax", value: "Personal income tax return where resident, and corporate tax return for the company, filed with the Mauritius Revenue Authority" },
      { label: "Household", value: "Vehicle licences, medical cover renewals, lease renewals, school re-enrolment" },
    ],
    sections: [
      {
        heading: "The Year 5 threshold",
        body: [
          "Investor and Self-Employed permits carry turnover or income conditions from Year 3, and higher ones from Year 5 that govern renewal. The EDB, with the Passport and Immigration Office and the Mauritius Revenue Authority, monitors compliance, including through site visits, and may deregister a holder who does not meet them, after which the permit is cancelled. We prepare for this from Year 1 by keeping the MRA declarations consistent and by flagging early where the numbers are drifting away from the thresholds.",
        ],
      },
      {
        heading: "How the service works",
        body: [
          "Clients on an annual retainer receive a compliance calendar for the year ahead, reminders before each deadline, the filings made on their behalf, and a short annual review meeting. The ordinary questions that come with living somewhere new are answered as they arise.",
        ],
      },
    ],
    related: [
      { label: "Registered office and secretary", href: "/establishment/registered-office-and-secretary" },
      { label: "Investor permit", href: "/residency/investor-permit" },
      { label: "Concierge", href: "/concierge" },
    ],
    metaTitle: "Annual Compliance for Permit Holders and Companies in Mauritius | start.mu",
    metaDescription:
      "Annual compliance in Mauritius for Occupation Permit holders and Domestic Companies: MRA declarations, EDB monitoring, the Year 5 threshold, company filings, and how the retainer works.",
  },
];

export const establishmentBySlug = (slug: string) => establishment.find((e) => e.slug === slug);
