import type { Faq } from "@/lib/content/types";
import { anchorId } from "@/lib/slug";
import { site } from "@/lib/site";
import { ButtonLink } from "../common/ButtonLink";
import { FaqAccordion } from "../modules/FaqAccordion";
import { AsideMascot } from "../modules/AsideMascot";

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

/** Desktop sidebar: CTA card with animated mascot companion. */
export function ArticleAside() {
  return (
    <aside className="article-layout__aside aside-stack">
      <div className="aside-cta">
        <div className="aside-cta__badge">
          <span className="aside-cta__badge-pulse" aria-hidden="true" />
          <span>New York Official Assessment</span>
        </div>

        <AsideMascot />

        <div className="aside-cta__body">
          <p className="aside-cta__title text-h3">Get your ESA letter</p>
          <p className="aside-cta__text">
            Private assessment, a New York-licensed professional, and a full refund if you don&rsquo;t
            qualify. {site.turnaround}.
          </p>

          <ul className="aside-cta__perks" role="list">
            <li className="aside-cta__perk">
              <svg className="aside-cta__check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
              </svg>
              <span>100% money-back guarantee</span>
            </li>
            <li className="aside-cta__perk">
              <svg className="aside-cta__check" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
              </svg>
              <span>NY-licensed clinician review</span>
            </li>
          </ul>

          <ButtonLink variant="white" block size="sm" className="aside-cta__btn" />
        </div>
      </div>
    </aside>
  );
}
