import { ButtonLink } from "../common/ButtonLink";

type Props = {
  variant?: "inline" | "final";
  title?: string;
  text?: string;
};

/** M4 CTA band -> /#appForm. "inline" repeats mid-page; "final" closes a page. */
export function CtaBand({
  variant = "inline",
  title = "Ready to see if you qualify?",
  text = "Start a private assessment and meet a New York-licensed professional.",
}: Props) {
  const band = (
    <aside className={`cta-band cta-band--${variant}`} aria-label="Get your ESA letter">
      <div className="cta-band__inner">
        <div>
          <p className="cta-band__title text-h3">{title}</p>
          <p className="cta-band__text">{text}</p>
        </div>
        <ButtonLink variant="white" size="lg" />
      </div>
    </aside>
  );

  if (variant === "final") {
    return (
      <section className="section section--tight">
        <div className="container">{band}</div>
      </section>
    );
  }
  return band;
}
