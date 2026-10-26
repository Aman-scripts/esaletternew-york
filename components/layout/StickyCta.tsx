import { ButtonLink } from "../common/ButtonLink";

/** Sticky mobile CTA bar (spec 3.1, 10.5). Hidden on desktop via CSS. */
export function StickyCta() {
  return (
    <div className="sticky-cta">
      <ButtonLink block />
    </div>
  );
}
