import type { LucideIcon } from "lucide-react";
import type { ArticlePage } from "@/lib/content/types";
import { blogCategories, crumbsFor } from "@/lib/content/registry";
import { schemasFor } from "@/lib/seo";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { JsonLd } from "../common/JsonLd";
import { SectionHead } from "../common/SectionHead";
import { ButtonLink } from "../common/ButtonLink";
import { Hero } from "../modules/Hero";
import { TableOfContents } from "../modules/TableOfContents";
import { ContentSections } from "../modules/ContentSections";
import { ChildGrid } from "../modules/ChildGrid";
import { CtaBand } from "../modules/CtaBand";
import { LatestPosts } from "../modules/LatestPosts";
import { FaqAccordion } from "../modules/FaqAccordion";
import { ReviewerBox } from "../modules/ReviewerBox";
import { ReviewNote } from "../modules/ReviewNote";

type Props = {
  page: ArticlePage;
  spokes: ArticlePage[];
  gridTitle: string;
  gridIcon?: LucideIcon;
};

const GRID_HEADING_ID = "all-guides";

/**
 * T3 Silo pillar (hub): Hero > Intro 200-300 words > TOC > Overview H2s > M6 child grid [all spokes]
 * > Inline CTA > M7 Latest from blog > FAQ > Final CTA > Reviewer box
 */
export function PillarTemplate({ page, spokes, gridTitle, gridIcon }: Props) {
  const categories = blogCategories.filter((c) => c.pillars.includes(page.path));
  const primaryCategory = categories.find((c) => c.slug === page.blogCategory) ?? categories[0];

  return (
    <>
      <JsonLd data={schemasFor(page, page.sections)} />
      <Hero title={page.h1} lead={page.intro} before={<Breadcrumbs items={crumbsFor(page)} />} />

      <section className="section">
        <div className="container container--narrow">
          <ReviewNote text={page.reviewNote} />
          <div className="prose lead-paragraphs">
            {page.overview?.map((p) => <p key={p}>{p}</p>)}
          </div>
          <TableOfContents headings={[...page.sections.map((s) => s.heading), gridTitle]} inline />
          <ContentSections sections={page.sections} />
        </div>
      </section>

      <section className="section section--tint" aria-labelledby={GRID_HEADING_ID}>
        <div className="container">
          <SectionHead title={gridTitle} id={GRID_HEADING_ID} lead={`${spokes.length} in-depth guides.`} />
          <ChildGrid
            icon={gridIcon}
            items={spokes.map((s) => ({ href: s.path, label: s.label, description: s.description }))}
          />
        </div>
      </section>

      <div className="container">
        <CtaBand />
      </div>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="From the blog" title="Latest articles" />
          <LatestPosts categories={categories.map((c) => c.slug)} count={3} />
          {primaryCategory && (
            <div className="center-actions">
              <ButtonLink href={primaryCategory.path} variant="outline">
                More {primaryCategory.name} articles
              </ButtonLink>
            </div>
          )}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container container--narrow">
          <SectionHead title="Frequently asked questions" center />
          <FaqAccordion faqs={page.faqs} />
        </div>
      </section>

      <CtaBand variant="final" />
      <div className="container container--narrow section--tight">
        <ReviewerBox date={page.updated} label="Reviewed by" />
      </div>
    </>
  );
}
