import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { blogHub, blogPageCount } from "@/lib/content/registry";
import { buildMetadata } from "@/lib/seo";
import { BlogHubTemplate } from "@/components/templates/BlogHubTemplate";

/** Paginated blog archive pages 2+ (spec 7.3: noindex, follow; self-canonical; excluded from sitemap) */
export function generateStaticParams() {
  const total = blogPageCount();
  const pages = Array.from({ length: Math.max(total - 1, 1) }, (_, i) => ({ page: String(i + 2) }));
  return pages;
}

function parsePage(value: string) {
  const n = Number(value);
  return Number.isInteger(n) && String(n) === value ? n : NaN;
}

export async function generateMetadata({ params }: PageProps<"/blog/page/[page]">): Promise<Metadata> {
  const { page } = await params;
  return buildMetadata({
    path: `/blog/page/${page}/`,
    title: `${blogHub.title} | Page ${page}`,
    description: blogHub.description,
    robots: "NIF",
  });
}

export default async function BlogPaginatedPage({ params }: PageProps<"/blog/page/[page]">) {
  const n = parsePage((await params).page);
  if (n === 1) permanentRedirect("/blog/");
  if (!(n >= 2 && n <= blogPageCount())) notFound();
  return <BlogHubTemplate pageNumber={n} />;
}
