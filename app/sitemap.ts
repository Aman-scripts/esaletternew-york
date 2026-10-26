import type { MetadataRoute } from "next";
import { indexableEntries } from "@/lib/content/registry";
import { absoluteUrl } from "@/lib/site";

const PRIORITY: Record<string, number> = { High: 0.9, Medium: 0.7, Low: 0.5 };

/** Spec 7.3: I/F URLs only. NI/F pages, 404, search and paginated pages 2+ are excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  return indexableEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: entry.updated,
    priority: entry.path === "/" ? 1 : PRIORITY[entry.priority],
  }));
}
