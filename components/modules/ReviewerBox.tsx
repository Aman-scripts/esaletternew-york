import { Stethoscope } from "lucide-react";
import { formatDate, site } from "@/lib/site";

/** M11 Author / reviewer box with visible last-reviewed date (spec 10.4) */
export function ReviewerBox({
  date,
  label = "Medically reviewed by",
  name = site.reviewer.name,
}: {
  date: string;
  label?: string;
  name?: string;
}) {
  return (
    <div className="reviewer">
      <span className="reviewer__avatar" aria-hidden="true">
        <Stethoscope />
      </span>
      <div>
        <p className="reviewer__label">{label}</p>
        <p className="reviewer__name">{name}</p>
        <p className="reviewer__meta">
          {site.reviewer.credentials}, licensed in {site.reviewer.licenseState} · Last reviewed{" "}
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
      </div>
    </div>
  );
}
