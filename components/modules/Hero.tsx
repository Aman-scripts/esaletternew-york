import { BadgeCheck, Check, Lock, ShieldCheck } from "lucide-react";
import { ButtonLink } from "../common/ButtonLink";

type Props = {
  variant?: "full" | "compact";
  title: string;
  lead?: string;
  eyebrow?: string;
  checks?: string[];
  guarantee?: React.ReactNode;
  /** Right-hand visual (full variant) */
  aside?: React.ReactNode;
  /** Hide the CTA button (e.g. legal pages) */
  hideCta?: boolean;
  /** Content rendered above the title (e.g. breadcrumbs) */
  before?: React.ReactNode;
};

/** M1 Hero: H1 + subhead + primary CTA + trust badges. */
export function Hero({
  variant = "compact",
  title,
  lead,
  eyebrow,
  checks,
  guarantee,
  aside,
  hideCta = false,
  before,
}: Props) {
  const body = (
    <div>
      {eyebrow && <span className="eyebrow text-body-small-semibold">{eyebrow}</span>}
      <h1 className="hero__title text-h1">{title}</h1>
      {lead && <p className="hero__lead text-body-large">{lead}</p>}
      {checks && (
        <ul className="hero__checks">
          {checks.map((c) => (
            <li key={c} className="text-body-large">
              <Check className="check-icon" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      )}
      {!hideCta && (
        <div className="hero__actions">
          <ButtonLink size={variant === "full" ? "lg" : "md"} />
        </div>
      )}
      {guarantee && <p className="hero__guarantee">{guarantee}</p>}
      {!hideCta && (
        <ul className="hero__meta text-body-small" aria-label="Trust badges">
          <li className="hero__meta-item">
            <BadgeCheck aria-hidden="true" /> Licensed NY providers
          </li>
          <li className="hero__meta-item">
            <Lock aria-hidden="true" /> HIPAA-compliant intake
          </li>
          <li className="hero__meta-item">
            <ShieldCheck aria-hidden="true" /> Money-back guarantee
          </li>
        </ul>
      )}
    </div>
  );

  return (
    <section className={`hero hero--${variant}${aside ? "" : " hero--center"}`}>
      {before}
      <div className="container">
        {aside ? (
          <div className="split">
            {body}
            {aside}
          </div>
        ) : (
          body
        )}
      </div>
    </section>
  );
}
