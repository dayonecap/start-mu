import type { ServiceEntry } from "./types";

export const property: ServiceEntry[] = [
  {
    slug: "property-development-scheme",
    title: "Property Development Scheme",
    summary: "The current scheme for new residential developments open to foreign buyers.",
    intro:
      "The Property Development Scheme is the framework under which most new residential developments open to non-citizens have been approved since 2015. It replaced the Integrated Resort and Real Estate Schemes for new projects and covers villas, townhouses, apartments and serviced plots within an approved development.",
    facts: [
      { label: "Minimum purchase price", value: "None for the purchase itself. USD 375,000 to qualify for a residence permit" },
      { label: "Who may buy", value: "Non-citizens, companies, trusts and foundations, with EDB authorisation" },
      { label: "Residence permit", value: "For the buyer, spouse and dependent children, valid while the property is held, at USD 375,000 and above" },
      { label: "Registration duty", value: "5% of the purchase price, paid by the buyer" },
      { label: "Rental", value: "The owner may let the property" },
      { label: "Resale", value: "Permitted, to another eligible buyer, with the same authorisation process" },
    ],
    sections: [
      {
        heading: "What a PDS development looks like",
        body: [
          "PDS projects range from a handful of villas on a coastal plot to several hundred apartments in a master-planned estate with shared amenities. The scheme requires the developer to allocate part of the project to social benefit and to meet design and environmental standards, and each project is approved by the EDB before units can be sold to foreigners.",
        ],
      },
      {
        heading: "How the purchase proceeds",
        body: [
          "Reservation with a deposit, the buyer's EDB application for authorisation to acquire, the notarial deed of sale, and registration. Most PDS units are sold off-plan under a VEFA contract, which adds staged payments tied to construction milestones and a completion guarantee from the developer's bank. We act for the buyer alongside the notary, review the developer's standing and guarantee, and manage the EDB application.",
        ],
      },
      {
        heading: "Holding through a company or trust",
        body: [
          "A PDS unit may be held through a Mauritian Domestic Company, with the shares of that company held in trust. This is a structure we set up regularly for families who prefer not to hold real estate personally. The residence permit can be obtained through the structure, subject to the EDB's conditions.",
        ],
      },
    ],
    related: [
      { label: "Off-plan and VEFA", href: "/property/off-plan-vefa" },
      { label: "Residency by property", href: "/residency/property-acquisition" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Property Development Scheme Mauritius | start.mu",
    metaDescription:
      "Buying under the Mauritius Property Development Scheme: eligibility, the USD 375,000 residence threshold, the purchase sequence, VEFA off-plan sales, and holding through a company and trust.",
    index: { audience: "New villas, townhouses and apartments in approved developments", threshold: "No minimum; USD 375,000 for residence", duration: "Current scheme for new projects" },
  },
  {
    slug: "integrated-resort-scheme",
    title: "Integrated Resort Scheme",
    summary: "The original luxury resort scheme, now available on the resale market.",
    intro:
      "The Integrated Resort Scheme was the first framework to open Mauritian residential property to foreign buyers, from 2002. IRS developments are large, resort-style estates with golf courses, marinas or hotels. No new IRS projects have been approved since the Property Development Scheme replaced it, but resale units in established IRS estates remain available and carry the same residence entitlement.",
    facts: [
      { label: "Status", value: "Closed to new projects. Resale units available in existing estates" },
      { label: "Residence permit", value: "At USD 375,000 and above, for the buyer, spouse and dependent children, while the property is held" },
      { label: "Registration duty", value: "5% of the purchase price, paid by the buyer" },
      { label: "Estates", value: "Anahita, Tamarina, Villas Valriche, Azuri and others" },
    ],
    sections: [
      {
        heading: "Why buyers still look at IRS",
        body: [
          "The established IRS estates are mature: the landscaping has grown in, the amenities are operating, the management companies have a track record, and the rental market for the units is known. A buyer who values certainty over the pricing of a new-build often prefers them. The purchase is a completed property, so the VEFA risk that attaches to off-plan buying does not arise.",
        ],
      },
      {
        heading: "How the purchase proceeds",
        body: [
          "The same sequence as any scheme purchase: the buyer's EDB application, the notarial deed and registration. Because the seller is usually a private owner rather than a developer, the due diligence shifts to title, estate charges and the state of the property, which we review with the notary before the deed.",
        ],
      },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Real Estate Scheme", href: "/property/real-estate-scheme" },
      { label: "Residency by property", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Integrated Resort Scheme Mauritius | start.mu",
    metaDescription:
      "Buying a resale unit in a Mauritius Integrated Resort Scheme estate: current status, residence entitlement at USD 375,000, and how the purchase proceeds.",
    index: { audience: "Resale units in established resort estates", threshold: "USD 375,000 for residence", duration: "Closed to new projects" },
  },
  {
    slug: "real-estate-scheme",
    title: "Real Estate Scheme",
    summary: "Smaller developments from the pre-2015 framework, available on resale.",
    intro:
      "The Real Estate Scheme covered smaller developments than the IRS, on plots under ten hectares, and was the route through which many boutique villa and apartment projects were approved before 2015. Like the IRS, it is closed to new projects but remains relevant for resale.",
    facts: [
      { label: "Status", value: "Closed to new projects. Resale units available" },
      { label: "Residence permit", value: "At USD 375,000 and above, for the buyer, spouse and dependent children, while the property is held" },
      { label: "Registration duty", value: "5% of the purchase price, paid by the buyer" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "A buyer looking for a completed property in a smaller, quieter development, often close to the coast in the north or west, at a price point below the large resort estates. Many RES developments are well located and well maintained, and the resale market is active.",
        ],
      },
      {
        heading: "How the purchase proceeds",
        body: [
          "The buyer's EDB application, the notarial deed and registration, with due diligence on title, syndicate charges and the condition of the property. We act for the buyer with the notary throughout.",
        ],
      },
    ],
    related: [
      { label: "Integrated Resort Scheme", href: "/property/integrated-resort-scheme" },
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
    ],
    metaTitle: "Real Estate Scheme Mauritius | start.mu",
    metaDescription:
      "Buying a resale unit in a Mauritius Real Estate Scheme development: status, residence entitlement and the purchase process.",
    index: { audience: "Resale units in smaller developments", threshold: "USD 375,000 for residence", duration: "Closed to new projects" },
  },
  {
    slug: "smart-city-scheme",
    title: "Smart City Scheme",
    summary: "Mixed-use developments with residential units and, for permit holders, serviced land.",
    intro:
      "Smart City Scheme developments are master-planned mixed-use projects combining offices, residential units, retail, education and leisure. Non-citizens may buy residential units within them, and holders of an Occupation, Residence or Permanent Residence Permit may also acquire a serviced plot to build on.",
    facts: [
      { label: "Residential units", value: "Open to non-citizens with EDB authorisation. Residence permit at USD 375,000 and above" },
      { label: "Serviced plots", value: "Available to Occupation, Residence and Permanent Residence Permit holders for a residential build, subject to size limits and a construction deadline" },
      { label: "Registration duty", value: "5% of the purchase price, paid by the buyer" },
      { label: "Developments", value: "Beau Plan, Moka, Mon Trésor, Uniciti, Cap Tamarin and others" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "Families who want to live close to schools, offices and services rather than in a coastal resort, and professionals who prefer a town setting. The Smart Cities in the centre and north have become the established choice for families relocating with children of school age.",
        ],
      },
      {
        heading: "Building on a serviced plot",
        body: [
          "A permit holder may buy a plot within a Smart City and build a home on it. The plot is serviced with roads and utilities, the design must conform to the estate's guidelines, and construction must begin within a set period. This is the only route by which most non-citizens can build a house of their own design in Mauritius, and we manage the acquisition, the EDB approval and the introduction to architects and contractors.",
        ],
      },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Off-plan and VEFA", href: "/property/off-plan-vefa" },
      { label: "Residency by property", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Smart City Scheme Mauritius | start.mu",
    metaDescription:
      "Buying a residential unit or serviced plot in a Mauritius Smart City: eligibility, residence at USD 375,000, building on a plot as a permit holder, and the main developments.",
    index: { audience: "Town living and self-build plots for permit holders", threshold: "USD 375,000 for residence", duration: "Current scheme" },
  },
  {
    slug: "invest-hotel-scheme",
    title: "Invest Hotel Scheme",
    summary: "Ownership of a hotel room or villa, leased back to the operator.",
    intro:
      "The Invest Hotel Scheme allows a non-citizen to buy a unit within an approved hotel, lease it back to the hotel operator, and receive rental income, with a limited right to occupy the unit each year. It is an investment product first and a home second.",
    facts: [
      { label: "What is bought", value: "A room, suite or villa within a hotel approved under the scheme" },
      { label: "Lease-back", value: "The unit is leased back to the operator, who runs it as part of the hotel and pays the owner a share of revenue" },
      { label: "Personal use", value: "Up to 45 days a year" },
      { label: "Residence permit", value: "Available at USD 375,000 and above, for the buyer, spouse and dependent children, while the unit is held" },
      { label: "Registration duty", value: "5% of the purchase price, paid by the buyer" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "An investor who wants exposure to Mauritian hospitality with a professional operator managing the asset, and who visits Mauritius for a few weeks a year rather than living here. A unit at USD 375,000 or above carries a residence permit like any other scheme purchase, but the 45-day limit on personal use means it is rarely the right route for someone who intends to live in Mauritius full time.",
        ],
      },
      {
        heading: "What to examine",
        body: [
          "The operator's track record, the terms of the lease-back and the revenue share, the treatment of refurbishment costs, and the exit provisions. These vary considerably between hotels. We review them with the buyer before any reservation is made.",
        ],
      },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Residency by property", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Invest Hotel Scheme Mauritius | start.mu",
    metaDescription:
      "The Mauritius Invest Hotel Scheme: buying a hotel unit with lease-back, personal use of 45 days a year, residence entitlement at USD 375,000, and what to examine before buying.",
    index: { audience: "Investors in hotel units with lease-back", threshold: "USD 375,000 for residence", duration: "45 days personal use" },
  },
  {
    slug: "ground-plus-two",
    title: "Ground Plus Two Apartments",
    summary: "Apartments in ordinary buildings, outside the schemes, for non-citizens.",
    intro:
      "A non-citizen may buy an apartment in a building of at least ground plus two floors anywhere in Mauritius, outside the approved schemes, with EDB authorisation. The route opened the wider apartment market, including new developments in town centres and along the coast, to foreign buyers.",
    facts: [
      { label: "Building", value: "At least three storeys: ground floor plus two" },
      { label: "Minimum purchase price", value: "MUR 6 million" },
      { label: "Residence permit", value: "At USD 375,000 and above, for the buyer, spouse and dependent children, while the property is held" },
      { label: "Registration duty", value: "5% of the purchase price, paid by the buyer" },
      { label: "Authorisation", value: "EDB authorisation required before the deed" },
    ],
    sections: [
      {
        heading: "Who it suits",
        body: [
          "A buyer who wants an apartment rather than a villa, in a location the schemes do not cover, at a lower entry price. Many recent apartment developments in Grand Baie, Tamarin, Flic en Flac and the towns of the plateau are sold to non-citizens under this route.",
        ],
      },
      {
        heading: "Off-plan purchases",
        body: [
          "New apartment buildings are commonly sold off-plan under VEFA contracts. The same protections and the same risks apply as under the schemes, and the review of the developer's standing and the completion guarantee is, if anything, more important where the developer is smaller.",
        ],
      },
    ],
    related: [
      { label: "Off-plan and VEFA", href: "/property/off-plan-vefa" },
      { label: "Residency by property", href: "/residency/property-acquisition" },
    ],
    metaTitle: "Ground Plus Two Apartments Mauritius | start.mu",
    metaDescription:
      "Buying an apartment in Mauritius as a non-citizen under the ground plus two route: the MUR 6 million minimum, residence at USD 375,000, EDB authorisation and off-plan purchases.",
    index: { audience: "Apartments outside the schemes", threshold: "MUR 6 million; USD 375,000 for residence", duration: "Buildings of three storeys or more" },
  },
  {
    slug: "off-plan-vefa",
    title: "Off-Plan Purchases and VEFA",
    summary: "How a sale in a future state of completion works, and where the risk sits.",
    intro:
      "Most new residential units sold to non-citizens in Mauritius are sold off-plan under a Vente en l'État Futur d'Achèvement, or VEFA: a sale in a future state of completion. The buyer becomes owner of the land share and the building as it is constructed, pays in stages tied to progress, and relies on a financial guarantee of completion from the developer's bank.",
    facts: [
      { label: "Contract", value: "A VEFA deed signed before a notary, transferring ownership progressively as construction advances" },
      { label: "Payments", value: "Staged against construction milestones, typically on signature, foundations, structure, roofing, and handover, in proportions fixed in the deed" },
      { label: "Completion guarantee", value: "A garantie financière d'achèvement from a bank or insurer, covering completion of the building if the developer fails" },
      { label: "Delivery", value: "A contractual delivery date, with penalties for late delivery set out in the deed" },
      { label: "Defects", value: "Statutory guarantees against defects after handover, including the ten-year structural guarantee" },
    ],
    sections: [
      {
        heading: "Where the risk sits",
        body: [
          "The protection in a VEFA lies in the completion guarantee and in the staging of payments. A buyer who has paid ahead of construction, or whose guarantee is weak, is exposed if the developer stalls. The questions to ask before signing are therefore who has issued the guarantee, on what terms, and whether the payment schedule in the deed actually follows the building.",
          "We have acted for buyers whose developments have been delayed, and the difference between a recoverable position and a difficult one is almost always decided at the point of signature rather than afterwards.",
        ],
      },
      {
        heading: "What we do for a buyer",
        body: [
          "Review the developer's standing, the EDB approval of the project, the guarantee and its issuer, the payment schedule, the delivery terms and the penalty provisions. Coordinate with the notary. Manage the EDB application. And, if a development runs into difficulty, work through the guarantee framework, the notary and the developer on the buyer's behalf.",
        ],
      },
      {
        heading: "Buying through a structure",
        body: [
          "A VEFA unit may be bought through a Mauritian Domestic Company held in trust, as with any scheme property. The structure must be in place before the deed, and the bank, the notary and the EDB must each be satisfied with it. We prepare the structure in parallel with the reservation so that the deed is not delayed.",
        ],
      },
    ],
    related: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Ground plus two apartments", href: "/property/ground-plus-two" },
      { label: "Domestic Company", href: "/establishment/domestic-company" },
    ],
    metaTitle: "Off-Plan Property and VEFA in Mauritius | start.mu",
    metaDescription:
      "How off-plan property purchases work in Mauritius under a VEFA: staged payments, the completion guarantee, delivery terms, where the risk sits, and what start.mu does for the buyer.",
  },
];

export const propertyBySlug = (slug: string) => property.find((p) => p.slug === slug);
