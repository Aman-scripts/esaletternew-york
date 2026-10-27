import Image from "next/image";
import {
  BadgeCheck,
  Check,
  Lock,
  ShieldCheck,
  Star,
  Mic,
  Video,
  PhoneOff,
  Settings,
  FileText,
  Mail,
  Download,
  CheckCircle2,
} from "lucide-react";
import { ButtonLink } from "../common/ButtonLink";

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
  // 1. Showcase variant: Centered cloud layout with macOS browser mockup (Home Page)
  if (variant === "showcase") {
    const hasAccent = !!titleAccent && title.endsWith(titleAccent);
    const titleBase = hasAccent ? title.slice(0, -titleAccent.length).trimEnd() : title;

    return (
      <section className="hero hero--showcase">
        {/* Soft atmospheric cloud glows */}
        <div className="hero-cloud hero-cloud--left" aria-hidden="true" />
        <div className="hero-cloud hero-cloud--right" aria-hidden="true" />

        <div className="container hero--showcase__container">
          {/* Top Pill / Rating Badge */}
          <div className="hero-pill-badge text-body-normal-semibold">
            <span className="hero-pill-badge__stars">
              4.9/5 <Star className="hero-pill-badge__star-icon" aria-hidden="true" />
            </span>
            <span className="hero-pill-badge__divider" aria-hidden="true" />
            <span className="hero-pill-badge__label">{eyebrow || "Licensed New York Providers"}</span>
            <span className="hero-pill-badge__tag" aria-hidden="true">NY</span>
          </div>

          {/* Heading with subtle curved arrow flourish */}
          <div className="hero-title-wrap">
            <h1 className="hero__title hero__title--showcase text-h1">
              {titleBase}
              {hasAccent && (
                <>
                  {" "}
                  <span className="hero__title-accent">{titleAccent}</span>
                </>
              )}
            </h1>
            <Image
              src="/esaletternewyork_arrow.svg"
              alt=""
              width={93}
              height={93}
              className="hero-curved-arrow"
              aria-hidden="true"
            />
          </div>

          {/* Lead description */}
          {lead && <p className="hero__lead hero__lead--showcase text-body-large">{lead}</p>}

          {/* Primary CTA button */}
          {!hideCta && (
            <div className="hero__actions hero__actions--showcase">
              <ButtonLink size="lg" className="hero__cta-btn">
                Get Your ESA Letter
              </ButtonLink>
            </div>
          )}

          {/* Money-back guarantee note */}
          {guarantee && <p className="hero__guarantee hero__guarantee--showcase text-body-small">{guarantee}</p>}

          {/* Trust checks */}
          {checks && (
            <ul className="hero__checks hero__checks--showcase" aria-label="Key protections">
              {checks.map((c) => (
                <li key={c} className="text-body-normal">
                  <CheckCircle2 className="hero__check-icon" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Centered Desktop Window Mockup Frame */}
          <div className="hero-window-mockup" role="region" aria-label="Telehealth Consultation Preview">
            <div className="hero-window-mockup__header">
              <div className="hero-window-mockup__dots" aria-hidden="true">
                <span className="hero-window-mockup__dot hero-window-mockup__dot--red" />
                <span className="hero-window-mockup__dot hero-window-mockup__dot--yellow" />
                <span className="hero-window-mockup__dot hero-window-mockup__dot--green" />
              </div>
              <div className="hero-window-mockup__title text-body-normal">
                ESA Letter New York &middot; Private Clinical Session
              </div>
              <div className="hero-window-mockup__badge text-body-normal-semibold">
                <span className="hero-window-mockup__pulse" />
                <span>Live Evaluation</span>
              </div>
            </div>

            <div className="hero-window-mockup__body">
              {/* Left Column: Telehealth Video Call Preview */}
              <div className="hero-window-mockup__video">
                <div className="hero-window-mockup__video-inner">
                  <Image
                    src="/images/ny_esa_hero.webp"
                    alt="New York pet owner with emotional support dog in a cozy NYC apartment"
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 860px) 100vw, (max-width: 1280px) 60vw, 1080px"
                    className="hero-window-mockup__img"
                  />
                  <div className="hero-window-mockup__video-tag text-body-normal-semibold">
                    <span>Patient &amp; Support Animal</span>
                  </div>

                  {/* Video Call Controls Bar */}
                  <div className="hero-window-mockup__controls" aria-hidden="true">
                    <button type="button" className="hero-window-mockup__ctrl-btn" tabIndex={-1} aria-label="Microphone">
                      <Mic />
                    </button>
                    <button type="button" className="hero-window-mockup__ctrl-btn" tabIndex={-1} aria-label="Video camera">
                      <Video />
                    </button>
                    <button
                      type="button"
                      className="hero-window-mockup__ctrl-btn hero-window-mockup__ctrl-btn--end"
                      tabIndex={-1}
                      aria-label="End call"
                    >
                      <PhoneOff />
                    </button>
                    <button type="button" className="hero-window-mockup__ctrl-btn" tabIndex={-1} aria-label="Settings">
                      <Settings />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Clinical Intake & Evaluation Summary */}
              <div className="hero-window-mockup__summary">
                <div className="hero-window-mockup__summary-status text-body-normal-semibold">
                  <span className="hero-window-mockup__summary-pulse" />
                  <span>Taking Evaluation Summary...</span>
                </div>

                <div className="hero-window-mockup__summary-header">
                  <p className="hero-window-mockup__summary-title text-h4">NY Housing Accommodation Intake</p>
                  <p className="hero-window-mockup__summary-sub text-body-normal">Clinical Review &amp; Recommendation</p>
                </div>

                <div className="hero-window-mockup__summary-section">
                  <p className="hero-window-mockup__section-title text-body-large-semibold">Key Assessment</p>
                  <ul className="hero-window-mockup__list text-body-normal">
                    <li>1-on-1 telehealth evaluation with licensed NY clinician</li>
                    <li>Evaluated under Fair Housing Act &amp; NYS Human Rights Law</li>
                    <li>Private consultation &middot; no diagnosis shared with landlord</li>
                  </ul>
                </div>

                <div className="hero-window-mockup__summary-section">
                  <p className="hero-window-mockup__section-title text-body-large-semibold">Clinical Decision</p>
                  <ul className="hero-window-mockup__list text-body-normal">
                    <li>Reasonable accommodation clinically supported</li>
                    <li>Exempt from pet deposits, pet fees &amp; monthly pet rent</li>
                  </ul>
                </div>

                <div className="hero-window-mockup__sync">
                  <p className="hero-window-mockup__sync-label text-body-normal">Delivering to Patient Portal &amp; Documentation...</p>
                  <div className="hero-window-mockup__sync-icons" aria-hidden="true">
                    <div className="hero-window-mockup__sync-item" title="Official PDF Letter">
                      <FileText />
                    </div>
                    <span className="hero-window-mockup__sync-line" />
                    <div className="hero-window-mockup__sync-item" title="HIPAA Encrypted Storage">
                      <Lock />
                    </div>
                    <span className="hero-window-mockup__sync-line" />
                    <div className="hero-window-mockup__sync-item" title="Landlord Verification Help">
                      <Mail />
                    </div>
                    <span className="hero-window-mockup__sync-line" />
                    <div
                      className="hero-window-mockup__sync-item hero-window-mockup__sync-item--active"
                      title="Instant Download"
                    >
                      <Download />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </section>
  );
}

