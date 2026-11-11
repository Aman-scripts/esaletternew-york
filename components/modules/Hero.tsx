import { BadgeCheck, Check, Lock, ShieldCheck } from "lucide-react";
import { ButtonLink } from "../common/ButtonLink";
import { HeroScene } from "./HeroScene";
import { CatCameo } from "./CatCameo";

type Props = {
  variant?: "full" | "compact" | "showcase";
  title: string;
  /** Showcase only: trailing part of the title rendered in the muted second tone */
  titleAccent?: string;
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
  titleAccent,
  lead,
  eyebrow,
  checks,
  guarantee,
  aside,
  hideCta = false,
  before,
}: Props) {
  if (variant === "showcase") {
    const hasAccent = !!titleAccent && title.endsWith(titleAccent);
    const titleBase = hasAccent ? title.slice(0, -titleAccent.length).trimEnd() : title;

    return (
      <section className="hero hero--editorial">
        <div className="container hero-editorial">
          <div className="hero-editorial__copy">
            {eyebrow && <p className="kicker">{eyebrow}</p>}
            <h1 className="hero__title text-h1">
              {titleBase}
              {hasAccent && (
                <>
                  {" "}
                  <em>{titleAccent}</em>
                </>
              )}
            </h1>
            {lead && <p className="hero__lead text-body-large">{lead}</p>}
            {!hideCta && (
              <div className="hero__actions">
                <ButtonLink size="lg">Get Your ESA Letter</ButtonLink>
                <ButtonLink href="/how-it-works/" variant="outline" size="lg">
                  See how it works
                </ButtonLink>
              </div>
            )}
            {guarantee && <p className="hero__guarantee">{guarantee}</p>}
            {checks && (
              <ul className="hero-facts" aria-label="Key protections">
                {checks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
          </div>
          <HeroScene />
        </div>
      </section>
    );
  }

  // 2. Default & compact variants (unchanged for all other pages)
  const body = (
    <div>
      {eyebrow && <span className="eyebrow text-body-large-semibold">{eyebrow}</span>}
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
        <ul className="hero__meta text-body-normal" aria-label="Trust badges">
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
      {!aside && <CatCameo />}
    </section>
  );
}

