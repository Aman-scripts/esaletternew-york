"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "../common/ButtonLink";

/** Sticky mobile CTA bar (spec 3.1, 10.5). Hidden on desktop via CSS. Only reveals on mobile after scrolling past hero fold. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 340);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky-cta ${visible ? "sticky-cta--visible" : ""}`} aria-hidden={!visible}>
      <ButtonLink block />
    </div>
  );
}
