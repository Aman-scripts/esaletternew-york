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
};

/** Shared link-styled button. Defaults to the primary "Get Your ESA Letter" CTA -> /#appForm */
export function ButtonLink({
  href = site.applyHref,
  children = "Get Your ESA Letter",
  variant = "primary",
  size = "md",
  block = false,
  arrow = true,
  className,
}: Props) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size !== "md" && `btn--${size}`,
    block && "btn--block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes}>
      {children}
      {arrow && <ArrowRight className="btn__icon" aria-hidden="true" />}
    </Link>
  );
}
