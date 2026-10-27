import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CityPage } from "@/lib/content/types";
import { crumbsFor } from "@/lib/content/registry";
import { schemasFor } from "@/lib/seo";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { JsonLd } from "../common/JsonLd";
import { Hero } from "../modules/Hero";
import { QuickAnswer } from "../modules/QuickAnswer";
import { CityInfoPanel } from "../modules/CityInfoPanel";
import { ContentSections } from "../modules/ContentSections";
import { CtaBand } from "../modules/CtaBand";
import { RelatedPages } from "../modules/RelatedPages";
import { ReviewerBox } from "../modules/ReviewerBox";
import { ArticleAside, FaqSection, MAX_RELATED } from "./parts";

type Props = {
  page: CityPage;
  /** Borough tiles rendered inside the "Links to each borough page" section (NYC page only) */
  boroughs?: CityPage[];
  siblings: string[];
};

/**
 * T6 City: Hero (city in H1) > Quick answer > M14 City info panel [required] > Local body sections
 * > Inline CTA > City-specific FAQ > Related pages (up to /locations/, across to /rights/) > M11 Reviewer box > Final CTA
 */
export function CityTemplate({ page, boroughs, siblings }: Props) {
  const boroughIndex = page.sections.findIndex((s) => s.heading.startsWith("Links to each borough"));
  const slots =
    boroughs && boroughIndex >= 0
      ? {
          [boroughIndex]: (
            <ul className="grid grid--3 tile-grid" role="list">
              {boroughs.map((b) => (
                <li key={b.path}>
                  <Link href={b.path} className="tile">
                    <h3 className="tile__title text-h3">{b.label}</h3>
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          ),
        }
      : undefined;

  return (
    <>
      <JsonLd data={schemasFor(page, page.sections, page.areaServed)} />
      <Hero title={page.h1} lead={page.intro} before={<Breadcrumbs items={crumbsFor(page)} />} />

      <div className="section">
        <div className="container article-layout">
          <article>
            {page.quickAnswer && <QuickAnswer text={page.quickAnswer} />}
            <CityInfoPanel name={page.label} city={page.city} />
            <ContentSections sections={page.sections} slots={slots} />
            <CtaBand title={`Renting in ${page.label}? See if you qualify`} />
            <FaqSection faqs={page.faqs} heading={`${page.label} ESA FAQ`} />
            <RelatedPages paths={[...page.related, ...siblings].slice(0, MAX_RELATED)} />
            <ReviewerBox updated={page.updated} />
          </article>
          <ArticleAside />
        </div>
      </div>

      <CtaBand variant="final" title={`Get your ESA letter in ${page.label}`} />
    </>
  );
}
