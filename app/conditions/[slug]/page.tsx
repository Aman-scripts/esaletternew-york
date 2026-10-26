import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpoke, pillars } from "@/lib/content/registry";
import { pageMetadata } from "@/lib/seo";
import { pickSiblings } from "@/lib/siblings";
import { ClusterTemplate } from "@/components/templates/ClusterTemplate";

const PILLAR = "/conditions/";

/** /conditions/eligible-animals/ (T4) + condition pages (T5) */
export function generateStaticParams() {
  return pillars[PILLAR].spokes.map((s) => ({ slug: s.path.split("/")[2] }));
}

export async function generateMetadata({ params }: PageProps<"/conditions/[slug]">): Promise<Metadata> {
  const page = getSpoke(PILLAR, (await params).slug);
  return page ? pageMetadata(page, "article") : {};
}

export default async function ConditionSpokePage({ params }: PageProps<"/conditions/[slug]">) {
  const page = getSpoke(PILLAR, (await params).slug);
  if (!page) notFound();
  return <ClusterTemplate page={page} siblings={pickSiblings(pillars[PILLAR].spokes, page.path, page.related)} />;
}
