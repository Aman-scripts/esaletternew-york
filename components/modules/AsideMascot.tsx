"use client";

import { useEffect, useRef, useState } from "react";
import { Mascot } from "./Mascot";

export function AsideMascot() {
  const [pose, setPose] = useState<"carry" | "home">("carry");
  const [inView, setInView] = useState(false);
  const [bubbleActive, setBubbleActive] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    // Walk for 2.2 seconds with the letter, then sit down
    const sitTimer = setTimeout(() => {
      setPose("home");
      // Greet briefly on mobile/scroll
      setBubbleActive(true);
      const hideBubble = setTimeout(() => {
        setBubbleActive(false);
      }, 3000);
      return () => clearTimeout(hideBubble);
    }, 2200);

    return () => clearTimeout(sitTimer);
  }, [inView]);

  return (
    <div
      ref={stageRef}
      className="aside-cta__stage"
      aria-hidden="true"
      onClick={() => setBubbleActive((v) => !v)}
    >
      <div className="aside-cta__halo" />
      <div className="aside-cta__sparkles">
        <span className="aside-cta__sparkle aside-cta__sparkle--1" />
        <span className="aside-cta__sparkle aside-cta__sparkle--2" />
        <span className="aside-cta__sparkle aside-cta__sparkle--3" />
      </div>

      <div className="aside-cta__mascot">
        <div className={`aside-cta__walker ${inView ? "aside-cta__walker--active" : ""}`}>
          <Mascot pose={pose} />
        </div>
      </div>

      <div className={`aside-cta__speech ${bubbleActive ? "aside-cta__speech--active" : ""}`}>
        <span>Ready to help! 🐾</span>
      </div>
    </div>
  );
}

