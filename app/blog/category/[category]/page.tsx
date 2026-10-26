import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogCategories, getCategory } from "@/lib/content/registry";
import { buildMetadata } from "@/lib/seo";
import { CategoryTemplate } from "@/components/templates/CategoryTemplate";

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const category = getCategory((await params).category);
  return category ? buildMetadata({ ...category, robots: "IF" }) : {};
}

export default async function CategoryPage({ params }: PageProps<"/blog/category/[category]">) {
  const category = getCategory((await params).category);
  if (!category) notFound();
  return <CategoryTemplate category={category} />;
}
