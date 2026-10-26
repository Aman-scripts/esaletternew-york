import type { Faq } from "@/lib/content/types";
import { anchorId } from "@/lib/slug";
import { site } from "@/lib/site";
import { ButtonLink } from "../common/ButtonLink";
import { FaqAccordion } from "../modules/FaqAccordion";
import { RelatedPages } from "../modules/RelatedPages";

export const FAQ_HEADING = "Frequently asked questions";

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

/** Desktop sidebar: CTA card + optional sibling links */
export function ArticleAside({ siblings, siblingsTitle }: { siblings?: string[]; siblingsTitle?: string }) {
  return (
    <aside className="article-layout__aside aside-stack">
      <div className="aside-cta">
        <h2 className="aside-cta__title">Get your ESA letter</h2>
        <p className="aside-cta__text">
          Private assessment, a New York-licensed professional, and a full refund if you don&rsquo;t
          qualify. {site.turnaround}.
        </p>
        <ButtonLink variant="white" block size="sm" />
      </div>
      {siblings && siblings.length > 0 && <RelatedPages paths={siblings} title={siblingsTitle} />}
    </aside>
  );
}
