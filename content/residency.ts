import type { ServiceEntry } from "./types";

export const thresholdNote =
  "Eligibility criteria are set by the Economic Development Board and revised with each National Budget. The figures on this page follow the EDB Occupation Permit Guidelines issued under section 5(2)(ca) of the Economic Development Board Act 2017, as revised after the 2026-27 Budget, and were last checked against the guidelines in September 2026. We confirm the current criteria with the EDB before any application is prepared.";

export const residency: ServiceEntry[] = [
  {
    slug: "investor-permit",
    title: "Investor Occupation Permit",
    summary: "For those who will own and run a business in Mauritius.",
    intro:
      "The Investor Occupation Permit is a combined work and residence permit for a person who invests in, and is actively involved in, a company incorporated in Mauritius. It is issued for up to ten years and covers the holder's spouse, dependent children and parents.",
    facts: [
      { label: "Minimum initial investment", value: "USD 100,000, transferred from abroad into the bank account of the Mauritian company" },
      { label: "Turnover conditions", value: "MUR 5 million a year from the third year of registration; MUR 8 million a year from the fifth year to qualify for renewal" },
      { label: "Validity", value: "Up to 10 years, renewable" },
      { label: "Proof of funds", value: "Evidence of funds abroad at application, with the USD 100,000 transferred into the company's Mauritian account within 60 days of issuance" },
      { label: "Monitoring", value: "The EDB, with the PIO and the Mauritius Revenue Authority, monitors compliance, including through site visits, and may deregister a holder who does not meet the criteria" },
      { label: "Dependents", value: "Spouse or common-law partner, unmarried dependent children and parents" },
      { label: "Issuing authorities", value: "Economic Development Board, with the residence permit issued by the Passport and Immigration Office" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "The permit is designed for an owner-operator: someone who will hold shares in a Mauritian company, direct it, and build a business that generates revenue in Mauritius. It is not a passive investment route. A holder who does not intend to run the business in practice is usually better served by a residence permit through property, or by the Golden Visa once it is operational.",
          "Most of our investor clients arrive with an established activity elsewhere: consulting, trading, software, professional services, regional distribution. The Mauritian company becomes the operating entity for that activity, or a regional base from which the wider business is served.",
        ],
      },
      {
        heading: "What the application involves",
        body: [
          "The company is incorporated first. The application is then assessed by a committee of the EDB, the Passport and Immigration Office and the Prime Minister's Office on the strength of the business plan, the evidence of funds, the company documents and the applicant's personal file. Approval is given in principle, the medical examination is completed in Mauritius, and the applicant attends in person for the permit to be issued. Where the investor is a company, each shareholder who is also a director applies in their own right.",
          "We prepare the business plan with the turnover conditions in mind from the outset, so that the numbers the company must meet in Year 3 and Year 5 are realistic and are reflected in the way the business is set up.",
        ],
      },
      {
        heading: "After issuance",
        body: [
          "The permit is only the beginning of an ongoing relationship with the EDB and the Mauritius Revenue Authority. The gross income of the company must be declared to the MRA annually, the turnover thresholds apply from Year 3 and again at renewal, and the EDB monitors compliance with the PIO and the MRA, including through site visits. We remain engaged after issuance for the annual declarations, the Year 5 threshold, and the renewal application, which must be lodged at least one month before expiry.",
        ],
      },
      {
        heading: "The innovative start-up route",
        body: [
          "A separate route exists under the Investor category for innovative start-ups with a project submitted to the EDB or registered with an incubator accredited by the Mauritius Research and Innovation Council. There is no minimum initial investment. Instead, the holder files an annual progress report and, at the end of the fifth year, a development report showing that the project has reached a minimum viable product. We cover this on the Innovator permit page.",
        ],
      },
    ],
    related: [
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Bank account opening", href: "/establishment/bank-account-opening" },
      { label: "Innovator permit", href: "/residency/innovator-permit" },
      { label: "Dependents and family", href: "/residency/dependents" },
    ],
    metaTitle: "Investor Occupation Permit Mauritius | start.mu",
    metaDescription:
      "The Mauritius Investor Occupation Permit: USD 100,000 minimum investment, turnover conditions, dependents, and how start.mu handles the application from incorporation to issuance.",
    index: { audience: "Owner-operators of a Mauritian company", threshold: "USD 100,000 investment", duration: "Up to 10 years" },
  },
  {
    slug: "professional-permit",
    title: "Professional Occupation Permit",
    summary: "For those employed by a company in Mauritius.",
    intro:
      "The Professional Occupation Permit allows a non-citizen to take up employment with a Mauritian employer. It is applied for by the employer, is valid for up to ten years, and gives the holder and their dependents the right to live in Mauritius for the duration of the contract.",
    facts: [
      { label: "Minimum basic salary", value: "MUR 50,000 a month, across all sectors, following the 2026-27 Budget" },
      { label: "Applicant", value: "The employer applies, with the employee as beneficiary" },
      { label: "Validity", value: "Up to 10 years, or the length of the employment contract if shorter" },
      { label: "Dependents", value: "Spouse or common-law partner, unmarried dependent children and parents" },
      { label: "Existing holders", value: "A professional holding an active permit under the former MUR 30,000 criterion is eligible for one renewal on that basis" },
      { label: "Short-term permit", value: "A Short-term Occupation Permit is available for up to 9 months, extendable once by 3 months" },
      { label: "Shareholding", value: "A professional may hold shares in the employer, but not a majority, and may invest in other businesses without being employed by them" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "The permit is for someone who will be an employee rather than an owner. It is common for executives relocating with an international group, for specialists recruited by Mauritian firms, and for a founder's spouse who takes a role within the family company.",
          "The former ProPass and Expert Pass tiers have been merged into a single Professional category with one salary threshold. The distinction that mattered under the old system, between a standard professional and a senior expert, no longer affects the application.",
        ],
      },
      {
        heading: "Employment within your own company",
        body: [
          "A structure we are often asked about is the founder who holds the Investor permit and a spouse who is employed by the same company on a Professional permit. This works, and it can be the right answer where both partners will be active in the business. The salary must be real, paid monthly, and declared to the Mauritius Revenue Authority, the company must be able to show that it is earning enough to pay it, and the professional may not be the majority shareholder of the employer.",
        ],
      },
      {
        heading: "Changing employer",
        body: [
          "The permit is tied to the employer. A professional who moves to another company needs a fresh permit under the new employer, and if employment ends the permit is cancelled. There is a limited window in which a holder may remain in Mauritius to secure new employment or a new permit, provided the right steps are taken promptly. Restraint of trade clauses in the old contract can complicate a move within the same field. We advise on the sequence before notice is given.",
        ],
      },
      {
        heading: "What the application involves",
        body: [
          "The employer applies, with the contract of employment, the company's documents and the applicant's qualifications. Regulated professions require clearance or registration with the relevant council, and senior banking roles require Bank of Mauritius clearance. Once approved, the employee attends in person for issuance with a representative of the employer.",
        ],
      },
    ],
    related: [
      { label: "Investor permit", href: "/residency/investor-permit" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Dependents and family", href: "/residency/dependents" },
    ],
    metaTitle: "Professional Occupation Permit Mauritius | start.mu",
    metaDescription:
      "The Mauritius Professional Occupation Permit for employees: the MUR 50,000 salary threshold, employer-led application, validity and dependents.",
    index: { audience: "Employees of a Mauritian company", threshold: "MUR 50,000 monthly salary", duration: "Up to 10 years" },
  },
  {
    slug: "self-employed-permit",
    title: "Self-Employed Occupation Permit",
    summary: "For a professional working alone, in the services sector.",
    intro:
      "The Self-Employed Occupation Permit is for a person who will work on their own account in Mauritius, in a service activity, without incorporating a company. It is issued for up to ten years and carries income conditions that rise over the life of the permit.",
    facts: [
      { label: "Minimum initial investment", value: "USD 50,000, or the equivalent in freely convertible currency, transferred from abroad into the holder's Mauritian bank account within 60 days of issuance" },
      { label: "Activity", value: "Services sector only, registered with the Registrar of Businesses or operating as a one-person company" },
      { label: "Letters of intent", value: "At least three, of which at least two from prospective local clients" },
      { label: "Income conditions", value: "MUR 2 million a year from the third year of operation; MUR 3 million a year from the fifth year to qualify for renewal" },
      { label: "Validity", value: "Up to 10 years, renewable" },
      { label: "Staff", value: "One local administrative employee may be engaged" },
      { label: "Dependents", value: "Spouse or common-law partner, unmarried dependent children and parents" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "Consultants, designers, developers, coaches, advisers, media producers and other professionals who sell their own time and skill, and who do not need a company to do it. The permit is personal to the holder and does not allow the employment of other professionals, although administrative support may be engaged.",
          "The choice between Self-Employed and Investor is usually about scale and structure. The initial investment is USD 50,000 for Self-Employed against USD 100,000 for Investor. If the activity will grow into a business with staff, contracts in a company's name and separate ownership, the Investor route with a Domestic Company is the better foundation. If the activity is and will remain the work of one person, Self-Employed is simpler and less costly to maintain.",
        ],
      },
      {
        heading: "The business plan",
        body: [
          "The EDB prescribes the structure of the business plan and the weight it gives to each section, and it expects five-year financial projections. Three letters of intent, two of them from local clients, are mandatory. We draft the plan with the applicant in the format the EDB assesses against, and test the income projections against the thresholds for Year 3 and Year 5 before anything is filed.",
        ],
      },
      {
        heading: "What the application involves",
        body: [
          "Registration as a business, evidence of funds abroad, the business plan and letters of intent, qualifications, and the personal file. Approval is given in principle, the medical examination is completed in Mauritius, and the applicant attends in person for issuance, after which the USD 50,000 is transferred within 60 days.",
        ],
      },
    ],
    related: [
      { label: "Investor permit", href: "/residency/investor-permit" },
      { label: "Bank account opening", href: "/establishment/bank-account-opening" },
      { label: "Premium Visa", href: "/residency/premium-visa" },
    ],
    metaTitle: "Self-Employed Occupation Permit Mauritius | start.mu",
    metaDescription:
      "The Mauritius Self-Employed Occupation Permit: USD 50,000 initial investment, three letters of intent, income conditions from Year 3 and Year 5, and how the business plan is prepared.",
    index: { audience: "Sole practitioners in services", threshold: "USD 50,000 investment", duration: "Up to 10 years" },
  },
  {
    slug: "innovator-permit",
    title: "Innovator Occupation Permit",
    summary: "For founders of an innovative start-up, with no minimum investment.",
    intro:
      "The innovative start-up route sits within the Investor category and is intended for founders whose project is approved by the Economic Development Board or registered with an accredited incubator. There is no minimum initial investment. Eligibility rests on the nature of the project rather than on capital.",
    facts: [
      { label: "Minimum initial investment", value: "None" },
      { label: "Qualifying route", value: "A project approved by the EDB, or registration with an incubator accredited by the Mauritius Research and Innovation Council" },
      { label: "Reporting", value: "An annual progress report within three months of the end of the first year, and a development report at the end of the fifth year confirming that the project has reached the minimum viable product stage" },
      { label: "Validity", value: "Up to 10 years, renewable" },
      { label: "Dependents", value: "Spouse or common-law partner, unmarried dependent children and parents" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "Technology and knowledge-based founders who are building something new and cannot, or would rather not, commit USD 100,000 at the outset. Software, fintech, biotech, renewable energy, data and AI projects are the typical candidates. The EDB is looking for a project with substance: a product, a team, a plan, and a reason for the work to happen in Mauritius.",
        ],
      },
      {
        heading: "How the project is assessed",
        body: [
          "The application is judged on the project rather than on the applicant's bank balance. That makes the documentation different from a standard Investor application: a business plan clearly labelled as an innovative start-up, a technical description of the product, the development to be undertaken in Mauritius, the founding team's background, and the commercial path. Where an accredited incubator is involved, the incubator's acceptance carries weight with the EDB. The obligation after issuance is a reporting one: progress each year, and a working product by Year 5.",
        ],
      },
      {
        heading: "Our role",
        body: [
          "We structure the company, prepare the application in the form the EDB expects, and, where useful, make the introduction to an accredited incubator. We also set the reporting calendar at the outset, so that the annual progress reports and the Year 5 development report are prepared against the business plan the EDB approved.",
        ],
      },
    ],
    related: [
      { label: "Investor permit", href: "/residency/investor-permit" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Innovator Occupation Permit Mauritius | start.mu",
    metaDescription:
      "The Mauritius innovative start-up route within the Investor Occupation Permit: no minimum investment, EDB project approval or accredited incubator, and how the application is assessed.",
    index: { audience: "Founders of innovative start-ups", threshold: "No minimum investment", duration: "Up to 10 years" },
  },
  {
    slug: "retired-residence-permit",
    title: "Retired Non-Citizen Residence Permit",
    summary: "For those aged 50 and over, with income from abroad.",
    intro:
      "The Retired Non-Citizen Residence Permit allows a person aged 50 or over to live in Mauritius for up to ten years on the strength of income transferred from abroad. There is no requirement to buy property, no minimum stay, and no restriction on where in Mauritius the holder lives.",
    facts: [
      { label: "Age", value: "50 or over at the date of application" },
      { label: "Proof of funds", value: "A bank statement from the country of origin or residence showing at least USD 24,000" },
      { label: "Transfer", value: "An initial USD 2,000 into a Mauritian bank within 60 days of issuance, then USD 2,000 a month or USD 24,000 a year" },
      { label: "Validity", value: "10 years, renewable" },
      { label: "Work", value: "No gainful employment on the permit itself. Investment in a business is permitted provided the holder is not employed by it. Employment in specific sectors is possible through a separate work permit or Occupation Permit" },
      { label: "Character", value: "Police clearance covering the last ten years, less than six months old" },
      { label: "Dependents", value: "Spouse or common-law partner and dependent children" },
      { label: "Permanent residence", value: "Eligible for a 20-year Permanent Residence Permit after five years, with aggregate transfers of at least USD 200,000 over the five years preceding the application" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "A retired or semi-retired couple, or an individual, who wants a settled base in Mauritius without buying property to secure it. It is the most flexible residence route for anyone over 50, and it is frequently the right answer for people who first enquire about the property schemes because they assume that is the only way in.",
        ],
      },
      {
        heading: "Tax and the transfer",
        body: [
          "A holder who spends 183 days or more in Mauritius in a tax year becomes tax resident. Mauritius taxes foreign-source income on a remittance basis and has a network of double taxation agreements, which together shape the outcome for pensions, dividends and rental income from abroad. The position depends on the holder's home jurisdiction and on the agreement in force with it. Applicants are also asked to disclose their other residences and tax residences, which the EDB shares with the Mauritius Revenue Authority under the Common Reporting Standard.",
          "We are not tax advisers and do not offer tax opinions. Where the position matters, and it usually does, we introduce a Mauritian tax specialist before the application is filed, so that the decision to relocate is made with the full picture.",
        ],
      },
      {
        heading: "What the application involves",
        body: [
          "Evidence of funds abroad, police clearance, civil status documents and the personal file. Approval is given in principle, the medical examination is completed in Mauritius, and the applicant attends in person for issuance. The first transfer is made after the permit is issued.",
        ],
      },
    ],
    related: [
      { label: "Residency by property", href: "/residency/property-acquisition" },
      { label: "Premium Visa", href: "/residency/premium-visa" },
      { label: "Concierge", href: "/concierge" },
    ],
    metaTitle: "Retired Non-Citizen Residence Permit Mauritius | start.mu",
    metaDescription:
      "The Mauritius Retired Non-Citizen Residence Permit for those aged 50 and over: USD 24,000 a year transferred from abroad, ten-year validity, tax residence, and the path to permanent residence.",
    index: { audience: "Individuals and couples aged 50 and over", threshold: "USD 24,000 a year from abroad", duration: "10 years" },
  },
  {
    slug: "property-acquisition",
    title: "Residency by Property Acquisition",
    summary: "Buy in an approved scheme above the threshold and qualify for residence.",
    intro:
      "A non-citizen who buys residential property in an EDB-approved scheme for at least USD 375,000 is eligible for a residence permit for as long as the property is held. The permit covers the buyer's spouse and dependent children, and exempts the holder from the need for a work or occupation permit.",
    facts: [
      { label: "Minimum purchase price", value: "USD 375,000, or the equivalent in any hard convertible currency at the selling rate in force on the date the title deed is signed" },
      { label: "Eligible schemes", value: "Integrated Resort Scheme, Real Estate Scheme, Invest Hotel Scheme, Property Development Scheme, Smart City Scheme, and apartments used as a residence in buildings of at least two floors above the ground floor" },
      { label: "Validity", value: "For as long as the holder owns the property" },
      { label: "Work", value: "The holder is exempt from the requirement to hold a work or occupation permit" },
      { label: "Dependents", value: "Spouse or common-law partner and dependent children" },
      { label: "Below the threshold", value: "Purchases below USD 375,000 in an approved scheme are permitted but do not carry a residence permit" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "A buyer who has decided to own a home in Mauritius in any case, and for whom the residence permit is a consequence of that decision rather than its purpose. The permit is tied to the asset, so it is not the right route for someone who wants residency first and would rather rent.",
        ],
      },
      {
        heading: "The acquisition itself",
        body: [
          "The purchase follows a defined sequence: reservation, EDB application for authorisation to acquire, the notarial deed, and registration. Off-plan purchases under a VEFA contract add a further layer, with staged payments tied to construction milestones and a financial guarantee from the developer. We cover this in detail in the Property section, and we act for the buyer throughout, alongside the notary.",
        ],
      },
      {
        heading: "The permit",
        body: [
          "Once the deed is signed and the EDB has recorded the acquisition, the residence permit is applied for through the EDB and issued by the Passport and Immigration Office. The permit remains valid while the property is held, and lapses on sale unless the holder has qualified under another route by then.",
        ],
      },
    ],
    related: [
      { label: "Property overview", href: "/property" },
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Off-plan and VEFA", href: "/property/off-plan-vefa" },
      { label: "Domestic Company with a trust", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Residence Permit by Property Acquisition Mauritius | start.mu",
    metaDescription:
      "Residence in Mauritius through property: the USD 375,000 threshold, eligible EDB schemes, how the acquisition proceeds, and what the permit covers.",
    index: { audience: "Buyers in an approved scheme", threshold: "USD 375,000 purchase", duration: "While the property is held" },
  },
  {
    slug: "golden-visa",
    title: "Golden Visa",
    summary: "A new route for high-net-worth families committing USD 1 million within twelve months.",
    intro:
      "The Golden Visa is a multiple-entry visa for high-net-worth individuals and their immediate dependents, approved by Cabinet in April 2026 and legislated through the 2026-27 Budget measures. A holder who invests USD 1 million in Mauritius within twelve months of issue becomes eligible to apply for a twenty-year Permanent Residence Permit. Eligibility is not the same as approval: the application is assessed on its merits, and completing the investment does not convert the visa automatically.",
    status:
      "The framework has been enacted in principle but the EDB's application guidelines and the commencement of the scheme remain to be finalised. We are tracking the guidelines closely and will confirm the operative requirements before accepting any instruction.",
    facts: [
      { label: "Investment undertaking", value: "USD 1 million, invested within twelve months of issue, confirmed by a written undertaking at application" },
      { label: "Qualifying investment", value: "Any business activity other than the acquisition of residential property under the EDB property schemes. Sectors highlighted include fintech, artificial intelligence, biotechnology, renewable energy and global treasury" },
      { label: "Initial permit", value: "Up to two years, multiple entry, renewable" },
      { label: "On completion of the investment", value: "Eligible to apply for a 20-year Permanent Residence Permit. Not an automatic conversion" },
      { label: "Dependents", value: "Spouse and dependent children" },
      { label: "Processing target", value: "Five working days, announced by the Prime Minister" },
      { label: "Expected volume", value: "Around 100 recipients a year" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "A family with capital to deploy, who want to relocate to Mauritius quickly and hold a long permit that is not tied to owning a home or running a business day to day. The Golden Visa does not, on its own, confer the right to work in Mauritius; the expectation is investment into qualifying sectors rather than employment.",
          "It sits between the existing routes. It requires more capital than the Investor permit or the property threshold, but it offers a twenty-year permanent residence at the end of the first year, and it leaves the choice of where to invest to the holder.",
        ],
      },
      {
        heading: "Due diligence",
        body: [
          "Applications will pass through the EDB with inter-agency screening involving the Financial Crimes Commission, the Financial Intelligence Unit, the Financial Services Commission, the Bank of Mauritius and the Passport and Immigration Office. Source of funds and source of wealth will be examined properly. We prepare that file to the standard the agencies will apply, drawing on the group's compliance practice.",
        ],
      },
      {
        heading: "Housing during the initial period",
        body: [
          "The framework contemplates that holders will live in hotels or in residential property that is already open to foreign buyers while the investment is made, so as not to add pressure to the local housing market. Residential property under the EDB schemes remains available to Golden Visa holders as a home, but does not count towards the USD 1 million.",
        ],
      },
      {
        heading: "Our role",
        body: [
          "We advise on whether the Golden Visa or an existing route is the better fit, prepare the application and the due diligence file, structure the receiving entity for the investment where one is needed, and manage the concierge side of the relocation. Once the EDB guidelines are published, we will set out the documentary requirements here in full.",
        ],
      },
    ],
    related: [
      { label: "Investor permit", href: "/residency/investor-permit" },
      { label: "Residency by property", href: "/residency/property-acquisition" },
      { label: "Permanent residence", href: "/residency/permanent-residence" },
      { label: "Concierge", href: "/concierge" },
    ],
    metaTitle: "Mauritius Golden Visa | start.mu",
    metaDescription:
      "The Mauritius Golden Visa: USD 1 million investment within twelve months, a two-year multiple-entry permit, and eligibility for twenty-year permanent residence. Current status and what to expect.",
    index: { audience: "High-net-worth families", threshold: "USD 1 million within 12 months", duration: "2 years, then 20-year PR" },
  },
  {
    slug: "premium-visa",
    title: "Premium Visa",
    summary: "A long-stay visa for remote workers and those testing Mauritius before committing.",
    intro:
      "The Premium Visa allows a non-citizen to stay in Mauritius for up to a year, renewable, while working remotely for an employer or clients outside Mauritius, or while retired and living on income from abroad. It is not a residence permit, but it is often the right first step.",
    facts: [
      { label: "Validity", value: "Up to one year, renewable" },
      { label: "Who may apply", value: "Remote workers, digital professionals, retirees and long-stay visitors whose income arises outside Mauritius" },
      { label: "Income", value: "Evidence of sufficient means, with the EDB guideline at USD 1,500 a month for the principal applicant and additional amounts for accompanying children" },
      { label: "Work", value: "No employment with a Mauritian employer and no entry to the local labour market" },
      { label: "Tax", value: "Income spent in Mauritius through foreign cards or accounts is not treated as remitted; tax residence arises at 183 days" },
      { label: "Cost", value: "No application fee" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "Someone who wants to live in Mauritius before deciding whether to establish here, or who has no need to establish at all because their work happens online for clients elsewhere. It is also a sensible holding position for a family that arrives ahead of an Occupation Permit application, or while a property purchase completes.",
        ],
      },
      {
        heading: "Moving from Premium Visa to residence",
        body: [
          "The visa can be converted from within Mauritius. A remote worker who later incorporates and applies for an Investor or Self-Employed permit, or a Premium Visa holder over 50 who moves to the Retired Non-Citizen permit, does not need to leave the country to do so. We plan the sequence at the outset so that the time on the Premium Visa is not wasted.",
        ],
      },
      {
        heading: "What the application involves",
        body: [
          "The application is made online through the EDB with a passport, proof of the intended stay and accommodation, evidence of income from outside Mauritius, and travel and health cover. Approval is typically quick. We handle it as part of a wider relocation rather than as a standalone service.",
        ],
      },
    ],
    related: [
      { label: "Self-employed permit", href: "/residency/self-employed-permit" },
      { label: "Retired Non-Citizen permit", href: "/residency/retired-residence-permit" },
      { label: "Concierge", href: "/concierge" },
    ],
    metaTitle: "Mauritius Premium Visa | start.mu",
    metaDescription:
      "The Mauritius Premium Visa for remote workers and long-stay visitors: one-year renewable validity, income requirements, tax treatment, and how it leads to a residence permit.",
    index: { audience: "Remote workers and long-stay visitors", threshold: "Income from abroad", duration: "1 year, renewable" },
  },
  {
    slug: "dependents",
    title: "Dependents and Family",
    summary: "Who can accompany a permit holder, and on what terms.",
    intro:
      "Every Occupation Permit and Residence Permit extends to the holder's immediate family through a Dependent Permit. The dependent's permit runs with the main holder's and ends when it ends.",
    facts: [
      { label: "Spouse", value: "A spouse or common-law partner of the opposite sex, with a marriage certificate or certificate of cohabitation" },
      { label: "Children", value: "Unmarried dependent children not over 24, including stepchildren and lawfully adopted children" },
      { label: "Parents", value: "The parents of the main holder" },
      { label: "Work", value: "Dependents may not engage in gainful activity. A dependent who wishes to work applies for their own Occupation Permit or a work permit" },
      { label: "Issuing authority", value: "The Passport and Immigration Office determines dependent applications" },
      { label: "Family Occupation Permit", value: "The former Family Occupation Permit category was abolished in the 2026-27 Budget" },
    ],
    sections: [
      {
        heading: "Sequencing",
        body: [
          "Dependent applications are filed once the main permit is issued. In practice we prepare the dependent files alongside the main application so that they are lodged immediately after issuance, and the family's permits are issued together within a short period.",
        ],
      },
      {
        heading: "Schooling and the practical side",
        body: [
          "Dependent children need school places, and the good schools in Mauritius fill early. Our concierge service handles school introductions, medical cover and the household arrangements that make the move work for the whole family, not only for the permit holder.",
        ],
      },
    ],
    related: [
      { label: "Concierge", href: "/concierge" },
      { label: "Compare all routes", href: "/residency" },
    ],
    metaTitle: "Dependent Permits Mauritius | start.mu",
    metaDescription:
      "Who can accompany an Occupation or Residence Permit holder to Mauritius: spouse, children and parents, how dependent permits are sequenced, and the practical arrangements for families.",
  },
  {
    slug: "permanent-residence",
    title: "Permanent Residence",
    summary: "The twenty-year permit, and the routes that lead to it.",
    intro:
      "A Permanent Residence Permit is issued for twenty years and frees the holder from the conditions that attach to an Occupation or Residence Permit. It is earned by meeting sustained thresholds under an existing permit, or, once the scheme is operational, by completing the Golden Visa investment.",
    facts: [
      { label: "Validity", value: "20 years, renewable" },
      { label: "Investor", value: "Five years on the permit, with annual turnover of at least MUR 15 million in each of those years or aggregate turnover of MUR 75 million over the five years" },
      { label: "Professional", value: "Five years on an Occupation Permit or work permit, with a basic monthly salary of at least MUR 400,000 for five consecutive years" },
      { label: "Self-employed", value: "Five years on the permit, with annual business income of at least MUR 3 million in each year or aggregate income of MUR 15 million over the five years" },
      { label: "Retired Non-Citizen", value: "Five years on the permit, with aggregate transfers of at least USD 200,000 over the five years" },
      { label: "Timing", value: "The application must be made no later than six months after the criteria are satisfied" },
      { label: "From a Golden Visa", value: "On completion of the USD 1 million investment within twelve months" },
      { label: "Dependents", value: "Spouse and dependent children may be included" },
    ],
    sections: [
      {
        heading: "Planning for it from the start",
        body: [
          "The thresholds for permanent residence are measured over five consecutive years, not at a single point, and they are considerably higher than the thresholds for holding the permit itself. An investor's declared turnover, a professional's basic salary and a self-employed holder's declared income all count, year by year, and the application window closes six months after the criteria are met. We set out the path at the first consultation so that the decisions made in Year 1 do not close the door in Year 5.",
        ],
      },
      {
        heading: "What it changes",
        body: [
          "A permanent resident is no longer subject to the annual conditions of the original permit. An investor, professional or self-employed holder of a permanent residence permit may later have it reissued under the retired non-citizen category for the remaining period, on showing disposable annual income of USD 40,000. For a family that has settled, it is the point at which Mauritius stops being a permit and becomes a home.",
        ],
      },
    ],
    related: [
      { label: "Investor permit", href: "/residency/investor-permit" },
      { label: "Golden Visa", href: "/residency/golden-visa" },
      { label: "Retired Non-Citizen permit", href: "/residency/retired-residence-permit" },
    ],
    metaTitle: "Permanent Residence Permit Mauritius | start.mu",
    metaDescription:
      "The twenty-year Mauritius Permanent Residence Permit: which permits lead to it, the thresholds measured over time, and what changes once it is held.",
  },
  {
    slug: "technical-occupation-permit",
    title: "Technical Occupation Permit",
    summary: "A new category for foreign professionals recruited under government-to-government arrangements.",
    intro:
      "The 2026-27 Budget introduced a Technical category of Occupation Permit under the Work and Live framework, to facilitate the recruitment of foreign professionals through government-to-government arrangements. The EDB has reviewed the operational framework and is integrating the permit into its systems.",
    status:
      "The eligibility criteria and guidelines for the Technical Occupation Permit have not yet been published by the EDB. This page will carry them when they are. In the meantime, a professional with a Mauritian employer applies under the Professional category.",
    facts: [
      { label: "Introduced", value: "Budget 2026-27, under the Work and Live framework" },
      { label: "Purpose", value: "Strategic recruitment of foreign professionals through government-to-government arrangements" },
      { label: "Status", value: "Operational framework reviewed by the EDB Board in mid-2026; guidelines awaited" },
      { label: "Alternative today", value: "The Professional Occupation Permit, at a minimum basic salary of MUR 50,000 a month" },
    ],
    sections: [
      {
        heading: "What is known",
        body: [
          "The Budget described the category as a means of strategic recruitment under government-to-government arrangements, which suggests it is aimed at sectors where the state has agreed to bring in technical staff in numbers, rather than at individual applicants. Whether individual professionals or private employers will be able to use it is not yet clear.",
        ],
      },
      {
        heading: "What to do now",
        body: [
          "If you are a professional with an offer from a Mauritian employer, the Professional permit is the route and it is available today. If you are an employer or a sector body considering a government-to-government arrangement, we can advise on the framework as the EDB publishes it.",
        ],
      },
    ],
    related: [
      { label: "Professional permit", href: "/residency/professional-permit" },
      { label: "Compare all routes", href: "/residency" },
    ],
    metaTitle: "Technical Occupation Permit Mauritius | start.mu",
    metaDescription:
      "The new Mauritius Technical Occupation Permit introduced in the 2026-27 Budget for government-to-government recruitment: what is known, current status, and the route available today.",
  },
];

export const residencyBySlug = (slug: string) => residency.find((r) => r.slug === slug);
