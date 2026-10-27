import Link from "next/link";
import { ShieldCheck, CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { formatDate, site } from "@/lib/site";

type Props = {
  /** ISO date shown as the visible last-reviewed date (spec 10.4) */
  updated: string;
  /** "medical" for health pages ("Medically reviewed by"), "content" for law and local pages */
  kind?: "medical" | "content";
};

/** M11 Author / reviewer box: name, credentials, license state, "Medically reviewed by" + date */
export function ReviewerBox({ updated, kind = "content" }: Props) {
  const { name, credentials, licenseState, licenseNumber } = site.reviewer;
  const isMedical = kind === "medical";

  return (
    <aside className="reviewer-box" aria-label="Clinical and editorial review">
      <div className="reviewer-box__icon-wrap" aria-hidden="true">
        <ShieldCheck className="reviewer-box__shield" />
      </div>

      <div className="reviewer-box__content">
        <div className="reviewer-box__header">
          <span className="reviewer-box__badge text-body-normal-semibold">
            <CheckCircle2 className="reviewer-box__badge-icon" aria-hidden="true" />
            {isMedical ? "Clinically Reviewed" : "Fact-Checked & Reviewed"}
          </span>
          <span className="reviewer-box__jurisdiction text-body-normal-semibold">New York State</span>
        </div>

        <h3 className="reviewer-box__name text-h3">{name}</h3>

        <p className="reviewer-box__credentials text-body-normal">
          <span>{credentials}</span>
          <span className="reviewer-box__sep" aria-hidden="true">&middot;</span>
          <span>License State: {licenseState}</span>
          {licenseNumber && (
            <>
              <span className="reviewer-box__sep" aria-hidden="true">&middot;</span>
              <span>License #{licenseNumber}</span>
            </>
          )}
        </p>

        <div className="reviewer-box__footer">
          <span className="reviewer-box__date text-body-small">
            <Calendar className="reviewer-box__meta-icon" aria-hidden="true" />
            <span>
              Last reviewed <time dateTime={updated}>{formatDate(updated)}</time>
            </span>
          </span>

          <Link href="/about-our-therapists/" className="reviewer-box__vetting-link text-body-normal-semibold">
            <span>How our providers are vetted</span>
            <ArrowRight className="reviewer-box__arrow" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

