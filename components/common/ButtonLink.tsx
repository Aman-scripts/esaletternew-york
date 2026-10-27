import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

type Variant = "primary" | "outline" | "white";
type Size = "sm" | "md" | "lg";

type Props = {
  href?: string;
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  block?: boolean;
  arrow?: boolean;
  className?: string;
  event?: string;
  eventLabel?: string;
  ariaLabel?: string;
};

/** Shared link-styled button. Defaults to the primary "Get Your ESA Letter" CTA -> evaluation survey */
export function ButtonLink({
  href = site.applyHref,
  children = "Get Your ESA Letter",
  variant = "primary",
  size = "md",
  block = false,
  arrow = true,
  className,
  event,
  eventLabel,
  ariaLabel,
}: Props) {
  const isSurvey = href === site.applyHref;
  const eventName = event ?? (isSurvey ? "survey_click" : "cta_click");
  const label = eventLabel ?? (typeof children === "string" ? children : undefined);

  const classes = [
    "btn",
    `btn--${variant}`,
    size !== "md" && `btn--${size}`,
    block && "btn--block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="btn__icon" aria-hidden="true" />}
    </>
  );

  // External destinations (the evaluation survey) use a plain anchor
  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        data-event={eventName}
        data-event-label={label}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      data-event={eventName}
      data-event-label={label}
      aria-label={ariaLabel}
    >
      {content}
    </Link>
  );
}
