import type { ArticlePage } from "@/lib/content/types";
import { crumbsFor, labelFor } from "@/lib/content/registry";
import { schemasFor } from "@/lib/seo";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { JsonLd } from "../common/JsonLd";
import { Hero } from "../modules/Hero";
import { QuickAnswer } from "../modules/QuickAnswer";
import { TableOfContents } from "../modules/TableOfContents";
import { ContentSections } from "../modules/ContentSections";
import { Callout } from "../modules/Callout";
import { CtaBand } from "../modules/CtaBand";
import { RelatedPages } from "../modules/RelatedPages";
import { ReviewerBox } from "../modules/ReviewerBox";
import { ReviewNote } from "../modules/ReviewNote";
import { ArticleAside, FAQ_HEADING, FaqSection } from "./parts";

type Props = {
  page: ArticlePage;
  /** 2-3 sibling spokes within the same hub (spec 9) */
  siblings: string[];
};

/**
 * T4 Silo cluster / T5 Condition: Hero > Quick answer [required] > TOC > Body > Legal callout
 * > Inline CTA > FAQ > Related pages incl. link up to pillar [required] > Final CTA > Reviewer box
 */
export function ClusterTemplate({ page, siblings }: Props) {
  const headings = [...page.sections.map((s) => s.heading), ...(page.faqs.length ? [FAQ_HEADING] : [])];

  return (
    <>
      <JsonLd data={schemasFor(page, page.sections)} />
      <Hero title={page.h1} lead={page.intro} before={<Breadcrumbs items={crumbsFor(page)} />} />

      <div className="section">
        <div className="container article-layout">
          <article>
            <ReviewNote text={page.reviewNote} />
            {page.quickAnswer && <QuickAnswer text={page.quickAnswer} />}
            <TableOfContents headings={headings} inline />
            <ContentSections sections={page.sections} />
            {page.legalCallout && <Callout {...page.legalCallout} />}
            <CtaBand />
            <FaqSection faqs={page.faqs} />
            <RelatedPages paths={page.related} />
          </article>
          <ArticleAside
            siblings={siblings}
            siblingsTitle={page.parent ? `More in ${labelFor(page.parent)}` : undefined}
          />
        </div>
      </div>

      <CtaBand variant="final" />
      <div className="container container--narrow section--tight">
        <ReviewerBox date={page.updated} />
      </div>
    </>
  );
}
