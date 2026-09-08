import type { Faq } from "./faqs";

export type CountryPage = {
  slug: string;
  country: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  routes: { title: string; href: string; note: string }[];
  faqs: Faq[];
};

export const countries: CountryPage[] = [
  {
    slug: "south-africa",
    country: "South Africa",
    title: "Moving to Mauritius from South Africa",
    metaTitle: "Moving to Mauritius from South Africa | start.mu",
    metaDescription: "The permits South African families use, exchange control and the 60-day transfer, schools, banking and what the first year costs. Residency and establishment handled from Mauritius.",
    intro: "South Africans are the largest group of foreign residents arriving in Mauritius. A four-hour flight, the same time zone, English-speaking schools, a stable currency and a functioning state. The question is rarely whether, but which door and in what order.",
    sections: [
      { heading: "The routes South Africans use", body: ["An entrepreneur who will run a business here takes the Investor Occupation Permit: USD 100,000 into a Mauritian company, turnover conditions from Year 3, ten years. A consultant working alone takes the Self-Employed permit at USD 50,000. Anyone over 50 living on South African income takes the Retired Non-Citizen permit on transfers of USD 24,000 a year. A purchase in an approved scheme at USD 375,000 or above carries residence for as long as the property is held, and suits families who were going to buy anyway.", "A common pattern is one spouse on the Investor permit and the other employed by the same company on a Professional permit, which puts both partners in the business legitimately."] },
      { heading: "Exchange control and the 60 days", body: ["Moving capital out of South Africa runs through the Reserve Bank's rules and your annual allowances, and the timing matters more than in most relocations. The Investor and Self-Employed permits require the initial investment to arrive in Mauritius within 60 days of issuance, and a late transfer cancels the permit. We do not advise on South African exchange control, but we sequence the permit so that the money is cleared to move before the clock starts, and we introduce a South African adviser where the amounts warrant it."] },
      { heading: "Keeping the South African business", body: ["Many clients keep their South African company and add a Mauritian one that contracts with it, takes over the export side, or becomes the regional holding entity. The structure affects both tax systems and should be designed before the permit application rather than after, with advice on the South African side. Mauritius has a double taxation agreement with South Africa, and the position of a director resident in one country and a company in the other turns on it."] },
      { heading: "The practical side", body: ["Rent before you buy. Choose the school before the house; the English-medium schools in the north and centre have waiting lists in the year groups families most often arrive into. Get the bank account open before the permit is issued. Private medical cover that includes referral to South Africa is not optional. Budget for two trips before the move, one to see and one to sign. Direct flights from Johannesburg, Cape Town and Durban make both easy."] },
    ],
    routes: [
      { title: "Investor permit", href: "/residency/investor-permit", note: "Run a business here." },
      { title: "Self-Employed permit", href: "/residency/self-employed-permit", note: "A practice of one, in services." },
      { title: "Retired Non-Citizen permit", href: "/residency/retired-residence-permit", note: "Over 50, income from home." },
      { title: "Residency by property", href: "/residency/property-acquisition", note: "USD 375,000 in an approved scheme." },
    ],
    faqs: [
      { q: "Can we keep our medical aid?", a: "Some South African schemes offer an extension for Mauritius; most families end up with a Mauritian or international plan that includes evacuation to South Africa. Check the specific scheme before relying on it." },
      { q: "How long does the whole move take?", a: "From the first conversation to a family in a house with children at school, three to six months is realistic. The school place and the bank account usually set the pace." },
      { q: "Can we bring the dog?", a: "Yes, with planning. Mauritius is rabies-free and requires an import permit, titration tests and quarantine; South African animals are typically asked for two titre tests three months apart. Start the file four to six months ahead." },
    ],
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    title: "Moving to Mauritius from the United Kingdom",
    metaTitle: "Moving to Mauritius from the UK | start.mu",
    metaDescription: "The permits British families and retirees use, the UK tax questions to settle before leaving, schools following the English curriculum, and how the move is managed from Mauritius.",
    intro: "British enquiries have risen steadily, from retirees, from founders who can run a business from anywhere, and from families who want a warmer, safer place to raise children with schools that follow the curriculum they already know. Mauritius is a Commonwealth country with English as the language of government and law, and a legal system with final appeal to the Privy Council. It is not a stretch.",
    sections: [
      { heading: "The routes British clients use", body: ["Over 50 and living on a pension or investment income: the Retired Non-Citizen permit, ten years, on transfers of USD 24,000 a year, with no property required. Running a business: the Investor permit at USD 100,000 into a Mauritian company. Consulting alone: the Self-Employed permit at USD 50,000. Buying a home in an approved scheme at USD 375,000 or above: residence for as long as it is held. Testing the island first: the Premium Visa, a year at a time on income from abroad."] },
      { heading: "The UK tax questions to settle before you leave", body: ["We are not tax advisers. We know the questions a UK adviser needs to answer before the move is decided. Whether you will pass the statutory residence test's automatic overseas tests, and how many UK days that leaves you. How the UK and Mauritius treaty treats your pension, your dividends and any UK rental income. Whether keeping a UK property keeps you UK resident, or exposes you to non-resident capital gains on its sale. How the remittance basis in Mauritius interacts with the transfers the permit requires. And what your UK domicile means for inheritance tax, which does not follow residence. The answers shape which permit, and when."] },
      { heading: "Schools and the curriculum", body: ["The largest English-medium schools follow the British curriculum through Cambridge IGCSE and A-Levels, several with the IB alongside, and a child moving from an English school steps into the same year group with the same examinations at the end. Waiting lists exist in the early primary years and in Year 7, and the application should start before the permit does."] },
      { heading: "The practical side", body: ["Direct flights from London. A four-hour time difference in winter, three in British summer time, which makes working with the UK straightforward. Driving on the left. Sterling is freely convertible into rupees with no exchange control on the Mauritian side. Private healthcare is good; the insurance should include evacuation for the small number of conditions treated abroad."] },
    ],
    routes: [
      { title: "Retired Non-Citizen permit", href: "/residency/retired-residence-permit", note: "Over 50, income from the UK." },
      { title: "Investor permit", href: "/residency/investor-permit", note: "Run a business here." },
      { title: "Premium Visa", href: "/residency/premium-visa", note: "A year to decide." },
      { title: "Residency by property", href: "/residency/property-acquisition", note: "USD 375,000 in an approved scheme." },
    ],
    faqs: [
      { q: "Can I keep my UK state pension?", a: "Yes. It is paid abroad, and Mauritius is among the countries where the UK state pension is uprated annually under a social security agreement. Confirm the current position with the Department for Work and Pensions before relying on it." },
      { q: "Do I need a visa to enter while the permit is processed?", a: "British citizens enter Mauritius visa-free as visitors. The permit process itself starts before travel and is completed in person once approved in principle." },
      { q: "Is Mauritius a tax haven?", a: "No. It is a low-tax, treaty-compliant jurisdiction with substance requirements, a 15% corporate rate, personal rates that top out at 20% and a remittance basis for foreign income. It is on no current blacklist, and that is precisely why it works for British residents." },
    ],
  },
  {
    slug: "france",
    country: "France",
    title: "S'installer à Maurice depuis la France",
    metaTitle: "Moving to Mauritius from France | start.mu",
    metaDescription: "The permits French families, retirees and entrepreneurs use, the French tax exit questions, the French-curriculum schools on the island, and how the move is managed. Nous travaillons en français.",
    intro: "The French are the second largest group of foreign residents in Mauritius and the longest established. French is spoken everywhere, the legal system is half French civil law, the notarial system for property is the one a French buyer already knows, and the island has a full network of French-curriculum schools homologated by the Ministry. We work in French, and this page is a summary in English of what we discuss in French.",
    sections: [
      { heading: "The routes French clients use", body: ["Retirees over 50 on the Retired Non-Citizen permit, on transfers of USD 24,000 a year, with no obligation to buy. Entrepreneurs on the Investor permit at USD 100,000, often with an activity serving francophone Africa or the Indian Ocean from Mauritius. Independent professionals on the Self-Employed permit at USD 50,000. Families who buy in an approved scheme at USD 375,000 or above and take residence through the property. And those who want a year to decide, on the Premium Visa."] },
      { heading: "The French tax questions", body: ["We are not tax advisers. The questions a French adviser needs to answer are known. Whether your ties to France, in particular a foyer or a centre of economic interests, will keep you French tax resident despite the days you spend in Mauritius. How the France and Mauritius treaty allocates your pension, your dividends and any French rental income. Whether the exit tax applies to your shareholdings on departure. What the remittance basis in Mauritius means for income you bring in to satisfy the permit. And the position of French property you keep, for both income tax and the impôt sur la fortune immobilière."] },
      { heading: "Schools", body: ["The French-curriculum schools run from maternelle to the baccalauréat, homologated by the French Ministry of Education, with one offering the IB Diploma in the final years. There are French schools in the north, the west and the centre. A child moving from a French school continues in the same programme. Places in some year groups are limited and enrolment should start early."] },
      { heading: "Property the French way", body: ["Purchases pass before a notary, with a reservation contract, an authentic deed, registration duty of 5% and, for new builds, a vente en l'état futur d'achèvement with staged payments and a completion guarantee. A French buyer will recognise all of it. What differs is the EDB authorisation required for a non-citizen and the schemes within which a non-citizen may buy. We act for the buyer, alongside the notary."] },
    ],
    routes: [
      { title: "Retired Non-Citizen permit", href: "/residency/retired-residence-permit", note: "Plus de 50 ans, revenus de l'étranger." },
      { title: "Investor permit", href: "/residency/investor-permit", note: "Diriger une société à Maurice." },
      { title: "Residency by property", href: "/residency/property-acquisition", note: "USD 375 000 dans un programme agréé." },
      { title: "Off-plan and VEFA", href: "/property/off-plan-vefa", note: "L'achat sur plan et la garantie d'achèvement." },
    ],
    faqs: [
      { q: "Parlez-vous français ?", a: "Oui. Les consultations, les propositions et les échanges avec les autorités peuvent se faire en français. Le site est en anglais parce que nos clients viennent de plusieurs pays; nos dossiers sont dans la langue du client." },
      { q: "Do French driving licences transfer?", a: "A French licence can be used initially and converted to a Mauritian licence through the National Transport Authority. Driving is on the left." },
      { q: "Is there a French community?", a: "A large one, concentrated in the north around Grand Baie and in the west around Tamarin and Flic en Flac, with French schools, shops and associations in each." },
    ],
  },
  {
    slug: "germany-austria-switzerland",
    country: "Germany, Austria and Switzerland",
    title: "Moving to Mauritius from Germany, Austria or Switzerland",
    metaTitle: "Moving to Mauritius from Germany, Austria or Switzerland | start.mu",
    metaDescription: "The permits German-speaking retirees, buyers and entrepreneurs use, the tax residence questions specific to each country, and how a relocation is managed from Mauritius. Wir sprechen Deutsch.",
    intro: "German-speaking clients tend to arrive with a specific plan: a retirement, a house in a particular development, or a business that can be run from the Indian Ocean as easily as from Munich or Zurich. They also arrive with detailed questions about tax residence, and they are right to. This is where the decision is made.",
    sections: [
      { heading: "The routes German-speaking clients use", body: ["Retirees over 50 on the Retired Non-Citizen permit, ten years on transfers of USD 24,000 a year. Buyers who take residence through a property purchase at USD 375,000 or above in an approved scheme, frequently off-plan under a VEFA, which is where careful review of the completion guarantee matters most. Entrepreneurs on the Investor permit at USD 100,000. And, increasingly, families on the Premium Visa for a year while they decide."] },
      { heading: "Tax residence, country by country", body: ["We are not tax advisers and do not give opinions; we frame the questions and introduce the specialist. Germany looks at ties as well as days: a Wohnsitz kept in Germany can keep you resident, the Wegzugsbesteuerung applies to substantial shareholdings on departure, and the treaty with Mauritius allocates pensions and investment income in ways that differ by type. Austria applies a similar habitual abode test and has its own treaty. Switzerland has no treaty with Mauritius in force, which changes the analysis for Swiss residents entirely and needs to be understood before anything else. In all three, the permit condition of USD 24,000 a year transferred into Mauritius is, by definition, remitted income under the Mauritian remittance basis."] },
      { heading: "Buying, and the guarantee", body: ["A German or Swiss buyer will find the Mauritian notarial process orderly but unfamiliar in one respect: most new homes are sold off-plan, with staged payments and a bank guarantee of completion. We have acted for German buyers in delayed developments and the difference between a recoverable and a difficult position was decided at signature. Our note on VEFA purchases sets out what to examine."] },
      { heading: "The practical side", body: ["Direct flights from Frankfurt, Munich, Zurich and Vienna seasonally, and year-round via Paris or Dubai. A two-hour time difference in winter. Private healthcare is good and German-speaking doctors exist; insurance should include evacuation. Household effects may be imported with duty relief as a permit holder. English-medium and French-medium schools; no German school, and families with school-age children usually choose the IB route."] },
    ],
    routes: [
      { title: "Retired Non-Citizen permit", href: "/residency/retired-residence-permit", note: "Over 50, income from home." },
      { title: "Residency by property", href: "/residency/property-acquisition", note: "USD 375,000 in an approved scheme." },
      { title: "Off-plan and VEFA", href: "/property/off-plan-vefa", note: "What to examine before signing." },
      { title: "Investor permit", href: "/residency/investor-permit", note: "Run a business here." },
    ],
    faqs: [
      { q: "Sprechen Sie Deutsch?", a: "Ja. Wir arbeiten mit deutschsprachigen Mandanten und Beratern zusammen; die Korrespondenz mit den Behörden erfolgt auf Englisch, die Beratung kann auf Deutsch stattfinden." },
      { q: "Does Switzerland have a treaty with Mauritius?", a: "Not in force at the time of writing, which means Swiss-source income of a Mauritian resident is analysed under domestic law on both sides. A Swiss adviser should look at this before the decision to move." },
      { q: "Can we keep a flat at home?", a: "For the permit, yes. Whether it keeps you tax resident in Germany or Austria is a question for your adviser there, and the answer often turns on whether the flat is available for your use." },
    ],
  },
];

export const countryBySlug = (slug: string) => countries.find((c) => c.slug === slug);
