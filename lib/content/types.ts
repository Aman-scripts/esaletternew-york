/**
 * Shared content types. Every URL in the dev spec (section 6) is described by
 * one of these objects; templates render the containers, data supplies copy.
 */

/** Robots codes from spec section 7.1 */
export type RobotsCode = "IF" | "NIF";

export type TemplateId =
  | "T1"
  | "T2"
  | "T3"
  | "T4"
  | "T5"
  | "T6"
  | "T7"
  | "T8"
  | "T9"
  | "T10"
  | "T11";

export type SchemaType =
  | "Article"
  | "FAQPage"
  | "HowTo"
  | "Service"
  | "Product"
  | "CollectionPage"
  | "ContactPage"
  | "WebPage"
  | "Person";

export type Priority = "High" | "Medium" | "Low";

export type Faq = { q: string; a: string };

export type CalloutVariant = "info" | "warning" | "legal" | "success";

export type Callout = {
  variant: CalloutVariant;
  title: string;
  text: string;
};

export type ComparisonTableData = {
  caption?: string;
  head: string[];
  rows: string[][];
};

/** One H2 section of body copy */
export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  steps?: { title: string; text: string }[];
  table?: ComparisonTableData;
  callout?: Callout;
};

/** Base fields shared by every routed page */
export type PageBase = {
  path: string;
  h1: string;
  /** Short label for breadcrumbs, cards and link lists */
  label: string;
  title: string;
  description: string;
  robots: RobotsCode;
  template: TemplateId;
  /** Parent hub path (undefined for Home / 404) */
  parent?: string;
  phase: 1 | 2 | 3 | 4;
  priority: Priority;
  schema: SchemaType[];
  /** Hero subhead */
  intro?: string;
  /** Visible last-reviewed / updated date (ISO) */
  updated: string;
};

export type ArticlePage = PageBase & {
  /** M9 quick answer, 40-60 words (required on T4/T5/T6) */
  quickAnswer?: string;
  /** T3 pillar intro, 200-300 words */
  overview?: string[];
  sections: ContentSection[];
  /** M9 legal callout citing statute/regulation (T4/T5) */
  legalCallout?: Callout;
  /** Extra M9 callout used on T2 pages */
  callout?: Callout;
  faqs: Faq[];
  /** M8 related page paths */
  related: string[];
  /** Pillar only: blog category feeding M7 */
  blogCategory?: string;
};

export type CityInfo = {
  housingMix: string;
  facts: { label: string; value: string }[];
  localRules: string[];
  resources: { name: string; detail: string }[];
};

export type CityPage = ArticlePage & {
  areaServed: string;
  city: CityInfo;
};

export type BlogCategory = {
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  /** Category -> pillar mapping (spec section 9) */
  pillars: string[];
  phase: 1 | 2 | 3 | 4;
  priority: Priority;
};

export type BlogPost = PageBase & {
  slug: string;
  category: string;
  published: string;
  author: string;
  excerpt: string;
  sections: ContentSection[];
  /** Required contextual link into the matching silo */
  siloLink: string;
  /** Featured blog image */
  image?: string;
};

export type LegalPage = PageBase & {
  sections: ContentSection[];
};

export type SupportPage = ArticlePage;
