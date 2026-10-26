import type { LegalPage } from "@/lib/content/types";
import { crumbsFor } from "@/lib/content/registry";
import { schemasFor } from "@/lib/seo";
import { formatDate } from "@/lib/site";
import { Breadcrumbs } from "../layout/Breadcrumbs";
import { JsonLd } from "../common/JsonLd";
import { Hero } from "../modules/Hero";
import { ContentSections } from "../modules/ContentSections";

/** T11 Legal / utility: Hero (compact) > Last updated date > Body (H2 per section) > Contact details */
export function LegalTemplate({ page }: { page: LegalPage }) {
  return (
    <>
      <JsonLd data={schemasFor(page)} />
      <Hero title={page.h1} hideCta before={<Breadcrumbs items={crumbsFor(page)} />} />
      <div className="section">
        <div className="container container--narrow">
          <p className="legal-updated text-body-small">
            Last updated: <time dateTime={page.updated}>{formatDate(page.updated)}</time>
          </p>
          <ContentSections sections={page.sections} />
        </div>
      </div>
    </>
  );
}
