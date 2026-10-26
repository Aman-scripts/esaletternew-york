import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { labelFor } from "@/lib/content/registry";

/** M8 Related pages: curated internal links (labels resolved from the registry) */
export function RelatedPages({ paths, title = "Related guides" }: { paths: string[]; title?: string }) {
  if (!paths.length) return null;
  return (
    <nav className="related" aria-label={title}>
      <h2 className="related__title">{title}</h2>
      <ul className="related__list">
        {paths.map((path) => (
          <li key={path}>
            <Link href={path}>
              {labelFor(path)}
              <ArrowRight aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
