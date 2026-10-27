import type { Metadata } from "next";
import type { Faq, PageBase, RobotsCode, ContentSection } from "./content/types";
import { site, absoluteUrl } from "./site";

/** Spec 7.1 robots values */
const ROBOTS: Record<RobotsCode, Metadata["robots"]> = {
  IF: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  NIF: { index: false, follow: true },
};

type MetaInput = {
  path: string;
  title: string;
  description: string;
  robots: RobotsCode;
  /** Optional canonical override (spec 10.3) */
  canonical?: string;
  ogType?: "website" | "article";
  /** Optional OG overrides (spec 10.3); default to the meta title / description */
  ogTitle?: string;
  ogDescription?: string;
  /** Page-specific social image; defaults to the generated 1200x630 card from app/opengraph-image.tsx */
  image?: string;
};

export function buildMetadata(input: MetaInput): Metadata {
  const canonical = input.canonical ?? input.path;
  const ogTitle = input.ogTitle ?? input.title;
  const ogDescription = input.ogDescription ?? input.description;
  // A page-level openGraph object stops nested routes inheriting the root file-based image, so the
  // generated 1200x630 card (app/opengraph-image.tsx) is referenced explicitly as the default.
  const images = input.image
    ? [{ url: absoluteUrl(input.image), alt: ogTitle }]
    : [{ url: absoluteUrl("/opengraph-image/"), width: 1200, height: 630, alt: ogTitle }];

  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical },
    robots: ROBOTS[input.robots],
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: site.name,
      type: input.ogType ?? "website",
      locale: "en_US",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: images.map((i) => i.url),
    },
  };
}

export function pageMetadata(page: PageBase & { image?: string }, ogType?: "website" | "article"): Metadata {
  return buildMetadata({ ...page, ogType, image: page.image });
}

/* ---------- JSON-LD (spec 10.2) ---------- */

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl(site.logo),
    email: site.email,
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: absoluteUrl("/"),
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(faqs: Faq[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(page: PageBase & { published?: string; author?: string; image?: string }): Json {
  const primaryImg = page.image ?? "/images/ny_esa_hero.webp";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    url: absoluteUrl(page.path),
    image: [absoluteUrl(primaryImg), absoluteUrl("/images/section_brooklyn_housing.webp")],
    datePublished: page.published ?? page.updated,
    dateModified: page.updated,
    author: { "@type": "Organization", name: page.author ?? site.name },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: absoluteUrl(page.path),
  };
}

export function howToSchema(name: string, sections: ContentSection[]): Json | null {
  const steps = sections.flatMap((s) => s.steps ?? []);
  if (!steps.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
  };
}

export function serviceSchema(name: string, path: string, areaServed: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: "Emotional support animal letter evaluation",
    url: absoluteUrl(path),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Place", name: areaServed },
  };
}

export function productSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ESA Housing Evaluation & Letter (New York)",
    description: "Telehealth evaluation with a New York-licensed mental health professional and, if appropriate, an ESA housing letter.",
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: site.pricing.letter,
      priceCurrency: site.pricing.currency,
      url: absoluteUrl("/cost/"),
      availability: "https://schema.org/InStock",
    },
  };
}

export function collectionSchema(name: string, path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: absoluteUrl(path),
  };
}

export function contactSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    url: absoluteUrl("/contact/"),
  };
}

/**
 * JSON-LD for a page's declared schema types (FAQPage is emitted by the FAQ module,
 * BreadcrumbList by Breadcrumbs, Organization/WebSite by the root layout).
 */
export function schemasFor(
  page: PageBase & { published?: string; author?: string },
  sections: ContentSection[] = [],
  areaServed = "New York",
): Json[] {
  const out: (Json | null)[] = page.schema.map((type) => {
    switch (type) {
      case "Article":
        return articleSchema(page);
      case "HowTo":
        return howToSchema(page.h1, sections);
      case "Service":
        return serviceSchema(page.h1, page.path, areaServed);
      case "Product":
        return productSchema();
      case "CollectionPage":
        return collectionSchema(page.h1, page.path);
      case "ContactPage":
        return contactSchema();
      case "WebPage":
        return webPageSchema(page);
      default:
        return null;
    }
  });
  return out.filter((x): x is Json => x !== null);
}

export function webPageSchema(page: PageBase): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    url: absoluteUrl(page.path),
    dateModified: page.updated,
  };
}
