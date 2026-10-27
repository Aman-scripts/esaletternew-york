import type { ArticlePage, BlogCategory, BlogPost, CityPage, LegalPage, PageBase, RobotsCode } from "./types";
import { corePages } from "./core";
import { rightsPillar, rightsSpokes } from "./rights";
import { conditionsPillar, eligibleAnimals, conditionPages } from "./conditions";
import { locationsPillar, cityPages } from "./locations";
import { blogCategories, blogPosts, POSTS_PER_PAGE } from "./blog";
import { supportPages, legalPages } from "./support";
import { site } from "../site";

export const homePage: PageBase = {
  path: "/",
  h1: "ESA Letter New York",
  label: "Home",
  title: "ESA Letter New York | Online Evaluation, 24-Hr Turnaround",
  description:
    "Get an ESA letter in New York from a licensed mental health professional. Learn your housing rights, how it works, and whether you qualify.",
  robots: "IF",
  template: "T1",
  phase: 1,
  priority: "High",
  schema: ["FAQPage"],
  updated: site.lastReviewed,
};

export const blogHub: PageBase = {
  path: "/blog/",
  h1: "ESA Blog",
  label: "Blog",
  title: "ESA Blog: New York Housing Rights, Guides & Updates",
  description:
    "Guides, news, and landlord-tenant tips for New York ESA owners. Learn about housing rights, co-op rules, qualifying conditions, and ESA care.",
  robots: "IF",
  template: "T7",
  parent: "/",
  phase: 1,
  priority: "Medium",
  schema: ["CollectionPage"],
  intro:
    "Plain-language guides on ESA housing rights, co-op and rental requests, qualifying conditions and life with an emotional support animal in New York. Every article is written for New York renters, co-op shareholders and housing providers, and links to the detailed guide behind it. Browse by category below or start with the latest posts.",
  updated: site.lastReviewed,
};

export type PillarPath = "/rights/" | "/conditions/" | "/locations/";

export const pillars: Record<PillarPath, { page: ArticlePage; spokes: ArticlePage[] }> = {
  "/rights/": { page: rightsPillar, spokes: rightsSpokes },
  "/conditions/": { page: conditionsPillar, spokes: [eligibleAnimals, ...conditionPages] },
  "/locations/": { page: locationsPillar, spokes: cityPages },
};

export { corePages, supportPages, legalPages, cityPages, conditionPages, blogCategories, blogPosts, POSTS_PER_PAGE };

/** Sorted newest first */
export const sortedPosts: BlogPost[] = [...blogPosts].sort((a, b) =>
  b.published.localeCompare(a.published),
);

export function getCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function postsInCategory(slug: string): BlogPost[] {
  return sortedPosts.filter((p) => p.category === slug);
}

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function blogPageCount(): number {
  return Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
}

/** Every templated page (excluding 404) with routing + SEO fields */
const pageList: PageBase[] = [
  homePage,
  ...corePages,
  rightsPillar,
  ...rightsSpokes,
  conditionsPillar,
  eligibleAnimals,
  ...conditionPages,
  locationsPillar,
  ...cityPages,
  blogHub,
  ...supportPages,
  ...legalPages,
  ...blogPosts,
];

const byPath = new Map<string, PageBase>(pageList.map((p) => [p.path, p]));

export function getPage(path: string): PageBase | undefined {
  return byPath.get(path);
}

/** Label for any internal path, including blog categories */
export function labelFor(path: string): string {
  const page = byPath.get(path);
  if (page) return page.label;
  const category = blogCategories.find((c) => c.path === path);
  if (category) return category.name;
  return path;
}

export function descriptionFor(path: string): string | undefined {
  return byPath.get(path)?.description ?? blogCategories.find((c) => c.path === path)?.description;
}

/** Breadcrumb trail (excluding Home) following parent links: Home > Hub > Page */
export function crumbsFor(page: Pick<PageBase, "path" | "label" | "parent">) {
  const trail: { label: string; href: string }[] = [{ label: page.label, href: page.path }];
  let parent = page.parent;
  while (parent && parent !== "/") {
    trail.unshift({ label: labelFor(parent), href: parent });
    const isCategory = blogCategories.some((c) => c.path === parent);
    parent = isCategory ? blogHub.path : getPage(parent)?.parent;
  }
  return trail;
}

/** Top-level single-segment pages served by app/[slug] */
export const topLevelPages: (ArticlePage | LegalPage)[] = [...corePages, ...supportPages, ...legalPages];

export function getTopLevelPage(slug: string) {
  return topLevelPages.find((p) => p.path === `/${slug}/`);
}

export function getSpoke(pillar: PillarPath, slug: string): ArticlePage | CityPage | undefined {
  return pillars[pillar].spokes.find((p) => p.path === `${pillar}${slug}/`);
}

export type SitemapEntry = { path: string; updated: string; robots: RobotsCode; priority: string };

/** All indexable URLs for the XML sitemap (spec 7.3: I/F only, no paginated 2+) */
export function indexableEntries(): SitemapEntry[] {
  const pages = pageList.map((p) => ({
    path: p.path,
    updated: p.updated,
    robots: p.robots,
    priority: p.priority,
  }));
  const categories = blogCategories.map((c) => ({
    path: c.path,
    updated: postsInCategory(c.slug)[0]?.published ?? site.lastReviewed,
    robots: "IF" as const,
    priority: c.priority,
  }));
  return [...pages, ...categories].filter((e) => e.robots === "IF");
}

/** Lightweight index for the 404 search box */
export function searchIndex() {
  return [
    ...pageList.map((p) => ({ path: p.path, label: p.label, description: p.description })),
    ...blogCategories.map((c) => ({ path: c.path, label: c.name, description: c.description })),
  ];
}
