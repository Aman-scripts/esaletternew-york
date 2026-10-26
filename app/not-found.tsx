import type { Metadata } from "next";
import Link from "next/link";
import { searchIndex } from "@/lib/content/registry";
import { buildMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/common/ButtonLink";
import { SiteSearch } from "@/components/modules/SiteSearch";

/** #85 Page Not Found (T11): HTTP 404, noindex, follow, no schema */
export const metadata: Metadata = buildMetadata({
  path: "/404/",
  title: "Page Not Found | ESA Letter New York",
  description:
    "The page you were looking for could not be found. Return to the ESA Letter New York home page or browse our guides.",
  robots: "NIF",
});

const keyLinks = [
  { href: "/", label: "Home" },
  { href: "/rights/", label: "Your Rights" },
  { href: "/locations/", label: "Locations" },
  { href: "/conditions/", label: "Conditions" },
  { href: "/blog/", label: "Blog" },
];

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container container--narrow">
        <p className="notfound__code text-h1" aria-hidden="true">
          404
        </p>
        <h1 className="hero__title text-h1">Page not found</h1>
        <p className="hero__lead text-body-large">
          The page you were looking for doesn&rsquo;t exist or has moved. Search our guides or try one of
          these pages.
        </p>
        <SiteSearch entries={searchIndex()} />
        <ul className="chip-list notfound__links">
          {keyLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="chip text-body-small-semibold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="center-actions">
          <ButtonLink size="lg" />
        </div>
      </div>
    </section>
  );
}
