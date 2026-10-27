import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "../common/JsonLd";

export type Crumb = { label: string; href: string };

/** Visible breadcrumb trail + BreadcrumbList schema (spec 3.3). Last item is the current page. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav className="breadcrumbs container text-body-normal" aria-label="Breadcrumb">
      <JsonLd data={breadcrumbSchema(trail)} />
      <ol className="breadcrumbs__list">
        {trail.map((item, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={item.href} className="breadcrumbs__item">
              {last ? (
                <span className="breadcrumbs__current text-body-normal-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href}>{item.label}</Link>
                  <ChevronRight className="breadcrumbs__sep" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
