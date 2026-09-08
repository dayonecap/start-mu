export const site = {
  name: "start.mu",
  byline: "start.mu by Intrasia",
  legalName: "Intrasia Corporate Services Limited",
  tagline: "Clear guidance for living, investing and doing business in Mauritius",
  // Canonical host. Every absolute URL on the site derives from this one value:
  // canonicals, hreflang, sitemap, robots, Open Graph and JSON-LD. Trailing slashes are
  // stripped so a stray "https://start.mu/" in the environment cannot produce "//residency".
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://start.mu").replace(/\/+$/, ""),
  email: "hello@start.mu",
  phone: "+230 260 8180",
  phoneHref: "tel:+2302608180",
  whatsapp: "https://wa.me/23052581052?text=Hello%2C%20I%20would%20like%20to%20discuss%20moving%20to%20Mauritius.",
  address: ["Aventure du Sucre Street, Block 3", "First Floor, The Strand", "Beau Plan, Pamplemousses", "Mauritius"],
  singapore: {
    phone: "+65 6225 2213",
    phoneHref: "tel:+6562252213",
  },
  groupUrl: "https://www.intrasiagroup.com",
  linkedin: "https://www.linkedin.com/company/intrasia-group",
};

export type NavLink = { label: string; href: string; note?: string };
export type NavGroup = {
  label: string;
  href: string;
  description: string;
  columns: { heading: string; links: NavLink[] }[];
};

export const navigation: NavGroup[] = [
  {
    label: "Residency",
    href: "/residency",
    description: "Live, work or retire in Mauritius through an approved permit.",
    columns: [
      {
        heading: "Occupation permits",
        links: [
          { label: "Investor", href: "/residency/investor-permit" },
          { label: "Professional", href: "/residency/professional-permit" },
          { label: "Self-employed", href: "/residency/self-employed-permit" },
          { label: "Innovator", href: "/residency/innovator-permit" },
        ],
      },
      {
        heading: "Residence permits and visas",
        links: [
          { label: "Retired Non-Citizen", href: "/residency/retired-residence-permit" },
          { label: "Residency by property", href: "/residency/property-acquisition" },
          { label: "Golden Visa", href: "/residency/golden-visa" },
          { label: "Premium Visa", href: "/residency/premium-visa" },
        ],
      },
      {
        heading: "Overview",
        links: [
          { label: "Which route fits", href: "/residency/route-finder" },
          { label: "Compare all routes", href: "/residency" },
          { label: "Dependents and family", href: "/residency/dependents" },
          { label: "Permanent residence", href: "/residency/permanent-residence" },
        ],
      },
      {
        heading: "Moving from",
        links: [
          { label: "South Africa", href: "/moving-to-mauritius-from/south-africa" },
          { label: "United Kingdom", href: "/moving-to-mauritius-from/united-kingdom" },
          { label: "France", href: "/moving-to-mauritius-from/france" },
          { label: "Germany, Austria, Switzerland", href: "/moving-to-mauritius-from/germany-austria-switzerland" },
        ],
      },
    ],
  },
  {
    label: "Establishment",
    href: "/establishment",
    description: "A Mauritian company, bank account and registered office, operational from day one.",
    columns: [
      {
        heading: "Company structures",
        links: [
          { label: "Domestic Company", href: "/establishment/domestic-company" },
          { label: "Global Business Company", href: "/establishment/global-business-company" },
          { label: "Authorised Company", href: "/establishment/authorised-company" },
        ],
      },
      {
        heading: "Administration",
        links: [
          { label: "Bank account opening", href: "/establishment/bank-account-opening" },
          { label: "Registered office and secretary", href: "/establishment/registered-office-and-secretary" },
          { label: "Annual compliance", href: "/establishment/annual-compliance" },
        ],
      },
      {
        heading: "Overview",
        links: [
          { label: "Which structure fits", href: "/establishment" },
          { label: "Why Mauritius", href: "/mauritius" },
        ],
      },
    ],
  },
  {
    label: "Property",
    href: "/property",
    description: "Buy in an approved development and, above the threshold, qualify for residence.",
    columns: [
      {
        heading: "Approved schemes",
        links: [
          { label: "Property Development Scheme", href: "/property/property-development-scheme" },
          { label: "Integrated Resort Scheme", href: "/property/integrated-resort-scheme" },
          { label: "Real Estate Scheme", href: "/property/real-estate-scheme" },
          { label: "Smart City Scheme", href: "/property/smart-city-scheme" },
        ],
      },
      {
        heading: "Other routes",
        links: [
          { label: "Invest Hotel Scheme", href: "/property/invest-hotel-scheme" },
          { label: "Ground plus two apartments", href: "/property/ground-plus-two" },
        ],
      },
      {
        heading: "Overview",
        links: [
          { label: "How acquisition works", href: "/property" },
          { label: "Off-plan and VEFA", href: "/property/off-plan-vefa" },
        ],
      },
    ],
  },
  {
    label: "Concierge",
    href: "/concierge",
    description: "The arrangements that a permit and a company do not cover.",
    columns: [],
  },
  {
    label: "About",
    href: "/about",
    description: "A private client firm within the Intrasia Group.",
    columns: [
      {
        heading: "The firm",
        links: [
          { label: "About us", href: "/about" },
          { label: "Mauritius in practice", href: "/mauritius" },
          { label: "Insights", href: "/insights" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { label: "Request a consultation", href: "/contact" },
          { label: "Intrasia Group", href: site.groupUrl },
        ],
      },
    ],
  },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Residency",
    links: [
      { label: "Which route fits", href: "/residency/route-finder" },
      { label: "Investor permit", href: "/residency/investor-permit" },
      { label: "Professional permit", href: "/residency/professional-permit" },
      { label: "Self-employed permit", href: "/residency/self-employed-permit" },
      { label: "Retired Non-Citizen permit", href: "/residency/retired-residence-permit" },
      { label: "Golden Visa", href: "/residency/golden-visa" },
      { label: "Premium Visa", href: "/residency/premium-visa" },
    ],
  },
  {
    heading: "Establishment",
    links: [
      { label: "Domestic Company", href: "/establishment/domestic-company" },
      { label: "Global Business Company", href: "/establishment/global-business-company" },
      { label: "Authorised Company", href: "/establishment/authorised-company" },
      { label: "Bank account opening", href: "/establishment/bank-account-opening" },
      { label: "Registered office and secretary", href: "/establishment/registered-office-and-secretary" },
    ],
  },
  {
    heading: "Property",
    links: [
      { label: "Property Development Scheme", href: "/property/property-development-scheme" },
      { label: "Integrated Resort Scheme", href: "/property/integrated-resort-scheme" },
      { label: "Real Estate Scheme", href: "/property/real-estate-scheme" },
      { label: "Smart City Scheme", href: "/property/smart-city-scheme" },
      { label: "Off-plan and VEFA", href: "/property/off-plan-vefa" },
    ],
  },
  {
    heading: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "Concierge", href: "/concierge" },
      { label: "Mauritius in practice", href: "/mauritius" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
