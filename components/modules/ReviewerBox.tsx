import Link from "next/link";
import { ShieldCheck } from "lucide-react";
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
  return (
    <aside className="reviewer-box" aria-label="Page review">
      <span className="reviewer-box__icon" aria-hidden="true">
        <ShieldCheck />
      </span>
      <div>
        <p className="reviewer-box__label text-body-small-semibold">
          {kind === "medical" ? "Medically reviewed by" : "Reviewed by"}
        </p>
        <p className="reviewer-box__name">{name}</p>
        <p className="reviewer-box__meta text-body-small">
          {credentials}. License state: {licenseState}
          {licenseNumber && `, license #${licenseNumber}`}.
        </p>
        <p className="reviewer-box__meta text-body-small">
          Last reviewed <time dateTime={updated}>{formatDate(updated)}</time> &middot;{" "}
          <Link href="/about-our-therapists/">How our providers are vetted</Link>
        </p>
      </div>
    </aside>
  );
}
