export type Fact = { label: string; value: string };

export type Section = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ServiceEntry = {
  slug: string;
  title: string;
  /** One line used on index pages and in navigation panels. */
  summary: string;
  /** Lead paragraph under the page title. */
  intro: string;
  /** Short note shown under the intro when the framework is new or in transition. */
  status?: string;
  facts: Fact[];
  sections: Section[];
  related: { label: string; href: string }[];
  metaTitle: string;
  metaDescription: string;
  /** Columns for comparison tables on overview pages. */
  index?: { audience: string; threshold: string; duration: string };
};
