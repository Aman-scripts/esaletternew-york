import type { ArticlePage } from "@/lib/content/types";
import { crumbsFor } from "@/lib/content/registry";
import { schemasFor } from "@/lib/seo";
import { countWords } from "@/lib/slug";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { JsonLd } from "../common/JsonLd";
import { Hero } from "../modules/Hero";
import { TableOfContents } from "../modules/TableOfContents";
import { ContentSections, sectionWords } from "../modules/ContentSections";
import { CtaBand } from "../modules/CtaBand";
import { Callout } from "../modules/Callout";
import { RelatedPages } from "../modules/RelatedPages";
import { ArticleAside, FaqSection } from "./parts";

type Props = {
  page: ArticlePage;
  /** Extra content inside a section, keyed by section index (M12 / M13 on T2+ pages) */
  slots?: Record<number, React.ReactNode>;
};

/**
 * T2 Core page: Hero (compact) > TOC (if >1,200 words) > Body H2s with inline CTA after section 2
 * > Callout > FAQ (3-5) > Related pages > Final CTA
 */
export function CorePageTemplate({ page, slots }: Props) {
  const words = countWords([page.intro, ...sectionWords(page.sections)]);
  const headings = page.sections.map((s) => s.heading);

  return (
    <>
      <JsonLd data={schemasFor(page, page.sections)} />
      <Hero title={page.h1} lead={page.intro} before={<Breadcrumbs items={crumbsFor(page)} />} />

      <div className="section">
        <div className="container article-layout">
          <article>
            {words > 1200 && <TableOfContents headings={headings} inline />}
            <ContentSections
              sections={page.sections}
              slots={slots}
              insertAfter={{ index: 1, node: <CtaBand /> }}
            />
            {page.callout && <Callout {...page.callout} />}
            <FaqSection faqs={page.faqs} />
            <RelatedPages paths={page.related} />
          </article>
          <ArticleAside />
        </div>
      </div>

      <CtaBand variant="final" />
    </>
  );
}
