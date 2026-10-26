import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ArticlePage, LegalPage } from "@/lib/content/types";
import { getTopLevelPage, topLevelPages } from "@/lib/content/registry";
import { pageMetadata } from "@/lib/seo";
import { CorePageTemplate } from "@/components/templates/CorePageTemplate";
import { SupportTemplate } from "@/components/templates/SupportTemplate";
import { LegalTemplate } from "@/components/templates/LegalTemplate";
import { SampleLetter } from "@/components/modules/SampleLetter";
import { PricingBlock } from "@/components/modules/PricingBlock";

/** Core (T2), support (T10) and legal (T11) pages live at /{slug}/ */
export function generateStaticParams() {
  return topLevelPages.map((p) => ({ slug: p.path.replaceAll("/", "") }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const page = getTopLevelPage((await params).slug);
  return page ? pageMetadata(page) : {};
}

/** T2+ module slots: M12 on /sample-letter/, M13 on /cost/ (both in the first body section) */
const coreSlots: Record<string, Record<number, React.ReactNode>> = {
  "/sample-letter/": { 0: <SampleLetter /> },
  "/cost/": { 0: <PricingBlock /> },
};

export default async function TopLevelPage({ params }: PageProps<"/[slug]">) {
  const page = getTopLevelPage((await params).slug);
  if (!page) notFound();

  switch (page.template) {
    case "T2":
      return <CorePageTemplate page={page as ArticlePage} slots={coreSlots[page.path]} />;
    case "T10":
      return <SupportTemplate page={page as ArticlePage} />;
    case "T11":
      return <LegalTemplate page={page as LegalPage} />;
    default:
      notFound();
  }
}
