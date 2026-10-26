import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { blogCategories, getCategory, postsInCategory, POSTS_PER_PAGE } from "@/lib/content/registry";
import { buildMetadata } from "@/lib/seo";
import { CategoryTemplate } from "@/components/templates/CategoryTemplate";

function pageCount(slug: string) {
  return Math.max(1, Math.ceil(postsInCategory(slug).length / POSTS_PER_PAGE));
}

/**
 * Category archive pages 2+ (noindex, follow; self-canonical).
 * Cache Components requires at least one param, so when no category has a second page yet
 * a single placeholder is returned; it resolves to notFound() below.
 */
export function generateStaticParams() {
  const params = blogCategories.flatMap((c) =>
    Array.from({ length: pageCount(c.slug) - 1 }, (_, i) => ({ category: c.slug, page: String(i + 2) })),
  );
  return params.length ? params : [{ category: blogCategories[0].slug, page: "2" }];
}

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]/page/[page]">): Promise<Metadata> {
  const { category: slug, page } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return buildMetadata({
    path: `${category.path}page/${page}/`,
    title: `${category.title} | Page ${page}`,
    description: category.description,
    robots: "NIF",
  });
}

export default async function CategoryPaginatedPage({ params }: PageProps<"/blog/category/[category]/page/[page]">) {
  const { category: slug, page } = await params;
  const category = getCategory(slug);
  const n = Number(page);
  if (!category || !Number.isInteger(n)) notFound();
  if (n === 1) permanentRedirect(category.path);
  if (n < 2 || n > pageCount(slug)) notFound();
  return <CategoryTemplate category={category} pageNumber={n} />;
}
