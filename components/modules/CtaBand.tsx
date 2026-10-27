import { ClipboardCheck } from "lucide-react";
import { ButtonLink } from "../common/ButtonLink";

type Props = {
  variant?: "inline" | "final";
  title?: string;
  text?: string;
};

const COPY = {
  inline: {
    title: "Not sure if you qualify?",
    text: "Take the private 10-minute assessment. A New York-licensed professional reviews it, with a full refund if you don't qualify.",
  },
  final: {
    title: "Ready to see if you qualify?",
    text: "Start a private assessment and meet a New York-licensed professional.",
  },
} as const;

/**
 * M4 CTA band -> evaluation survey (site.applyHref). "inline" is a light mid-page prompt with its own
 * copy so it never reads as a duplicate of the "final" gradient band that closes the page.
 */
export function CtaBand({ variant = "inline", title, text }: Props) {
  const copy = COPY[variant];

  if (variant === "inline") {
    return (
      <aside className="cta-band cta-band--inline" aria-label="Check if you qualify">
        <div className="cta-band__inner">
          <span className="cta-band__icon" aria-hidden="true">
            <ClipboardCheck />
          </span>
          <div className="cta-band__body">
            <p className="cta-band__title text-h4">{title ?? copy.title}</p>
            <p className="cta-band__text text-body-normal">{text ?? copy.text}</p>
          </div>
          <ButtonLink>Start Assessment</ButtonLink>
        </div>
      </aside>
    );
  }

  return (
    <section className="section section--tight">
      <div className="container">
        <aside className="cta-band cta-band--final" aria-label="Get your ESA letter">
          <div className="cta-band__inner">
            <div>
              <h2 className="cta-band__title text-h2">{title ?? copy.title}</h2>
              <p className="cta-band__text">{text ?? copy.text}</p>
            </div>
            <ButtonLink variant="white" size="lg" />
          </div>
        </aside>
      </div>
    </section>
  );
}
