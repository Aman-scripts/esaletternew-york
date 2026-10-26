import type { Faq } from "@/lib/content/types";
import { anchorId } from "@/lib/slug";
import { site } from "@/lib/site";
import { ButtonLink } from "../common/ButtonLink";
import { FaqAccordion } from "../modules/FaqAccordion";

export const FAQ_HEADING = "Frequently asked questions";

/** One related-links box per page: curated links (hub first) then 2-3 sibling spokes, capped for an even 2-column grid */
export const MAX_RELATED = 6;

/** In-article FAQ block (M5) with H2 */
export function FaqSection({ faqs, heading = FAQ_HEADING }: { faqs: Faq[]; heading?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="prose" aria-labelledby={anchorId(heading)}>
      <h2 id={anchorId(heading)}>{heading}</h2>
      <FaqAccordion faqs={faqs} />
    </section>
  );
}

/** Desktop sidebar: CTA card. Related and sibling links live in the article's single RelatedPages box. */
export function ArticleAside() {
  return (
    <aside className="article-layout__aside aside-stack">
      <div className="aside-cta">
        <p className="aside-cta__title text-h3">Get your ESA letter</p>
        <p className="aside-cta__text">
          Private assessment, a New York-licensed professional, and a full refund if you don&rsquo;t
          qualify. {site.turnaround}.
        </p>
        <ButtonLink variant="white" block size="sm" />
      </div>
    </aside>
  );
}
