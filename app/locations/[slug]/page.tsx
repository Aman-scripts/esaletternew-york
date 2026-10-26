import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CityPage } from "@/lib/content/types";
import { cityPages } from "@/lib/content/registry";
import { pageMetadata } from "@/lib/seo";
import { pickSiblings } from "@/lib/siblings";
import { CityTemplate } from "@/components/templates/CityTemplate";

const BOROUGHS = ["manhattan", "brooklyn", "queens", "the-bronx", "staten-island"];

function getCity(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.path === `/locations/${slug}/`);
}

export function generateStaticParams() {
  return cityPages.map((c) => ({ slug: c.path.split("/")[2] }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const page = getCity((await params).slug);
  return page ? pageMetadata(page, "article") : {};
}

export default async function CityRoute({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const page = getCity(slug);
  if (!page) notFound();

  const boroughs =
    slug === "new-york-city" ? cityPages.filter((c) => BOROUGHS.some((b) => c.path.endsWith(`/${b}/`))) : undefined;

  return (
    <CityTemplate page={page} boroughs={boroughs} siblings={pickSiblings(cityPages, page.path, page.related)} />
  );
}
