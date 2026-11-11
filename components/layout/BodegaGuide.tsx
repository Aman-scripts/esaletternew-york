"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { site } from "@/lib/site";
import { mascot } from "@/lib/mascot";
import { MascotFace } from "../modules/Mascot";
import "../modules/cat-scene.css";

type TipKey = "hi" | "steps" | "pricing" | "faq" | "cta" | "read" | "help";

const TIPS: Record<TipKey, { text: string; cta?: { label: string; href: string } }> = {
  hi: {
    text: `Hi, I’m ${mascot.name}. Scroll along, and whenever you’re ready I’ll walk you to the assessment.`,
    cta: { label: "Start my assessment", href: site.applyHref },
  },
  steps: {
    text: "Four moves from your couch to a signed letter. I do all the walking.",
    cta: { label: "Start my assessment", href: site.applyHref },
  },
  pricing: {
    text: "One price, paid once. If you don’t qualify, you get every dollar back.",
    cta: { label: "Start my assessment", href: site.applyHref },
  },
  faq: {
    text: "Didn’t find your answer? Write to us and a real person will reply.",
    cta: { label: "Ask a question", href: "/contact/" },
  },
  cta: {
    text: "About ten private minutes, reviewed by a New York licensed professional.",
    cta: { label: "Let’s go", href: site.applyHref },
  },
  read: {
    text: "Ready when you are. Your assessment takes about ten minutes.",
    cta: { label: "Start my assessment", href: site.applyHref },
  },
  help: {
    text: "Need a hand? Start the assessment, or ask us anything at all.",
    cta: { label: "Start my assessment", href: site.applyHref },
  },
};

const LANDMARKS: Array<{ key: TipKey; selector: string; label: string }> = [
  { key: "steps", selector: ".ny-walk, .steps", label: "How it works" },
  { key: "pricing", selector: ".pricing", label: "Pricing" },
  { key: "cta", selector: ".cta-band", label: "Get your letter" },
  { key: "faq", selector: ".faq", label: "Questions" },
  { key: "read", selector: ".related", label: "Keep reading" },
];

/** Characters that already star in a section; the guide steps aside while they are on screen */
const SCENES = ".ny-scene, .ny-walk-stage";
const MAX_AUTO_TIPS = 3;
const MAX_CLOSES = 2;

type Mark = { id: number; key: TipKey; label: string; p: number; node: Element };

const store = {
  get(key: string) {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      sessionStorage.setItem(key, value);
    } catch {}
  },
};

/** Bodega rides a rail down the left edge as you scroll, perches by key sections, and offers a tip. */
export function BodegaGuide() {
  const root = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  const [tip, setTip] = useState<TipKey | null>(null);
  const [shown, setShown] = useState<TipKey | null>(null);
  const [marks, setMarks] = useState<Mark[]>([]);
  const active = useRef<TipKey | null>(null);
  const tipRef = useRef<TipKey | null>(null);
  const onRef = useRef(false);
  const openedAt = useRef(0);
  const timers = useRef<{ auto?: number; close?: number }>({});

  useEffect(() => {
    tipRef.current = tip;
    onRef.current = on;
  }, [tip, on]);

  const close = useCallback((byUser = false) => {
    window.clearTimeout(timers.current.close);
    setTip(null);
    if (byUser) store.set("bodega_closes", String(Number(store.get("bodega_closes") || 0) + 1));
  }, []);

  const open = useCallback((key: TipKey) => {
    window.clearTimeout(timers.current.close);
    openedAt.current = window.scrollY;
    setTip(key);
    setShown(key);
    const linger = 6500 + TIPS[key].text.length * 35;
    const autoClose = () => {
      const node = root.current;
      if (node && (node.matches(":hover") || node.contains(document.activeElement))) {
        timers.current.close = window.setTimeout(autoClose, 2500);
      } else {
        setTip(null);
      }
    };
    timers.current.close = window.setTimeout(autoClose, linger);
  }, []);

  const offerAuto = useCallback(
    (key: TipKey) => {
      window.clearTimeout(timers.current.auto);
      timers.current.auto = window.setTimeout(() => {
        if (!onRef.current || tipRef.current) return;
        if (Number(store.get("bodega_closes") || 0) >= MAX_CLOSES) return;
        const seen = (store.get("bodega_seen") || "").split(",").filter(Boolean);
        if (seen.includes(key) || seen.length >= MAX_AUTO_TIPS) return;
        store.set("bodega_seen", [...seen, key].join(","));
        open(key);
      }, 1100);
    },
    [open],
  );

  // Scroll progress, smoothed with frame-rate independent easing
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = -1;
    let frame = 0;
    let lastTime = 0;

    const target = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const tick = (time: number) => {
      const dt = lastTime ? Math.min(64, time - lastTime) : 16;
      lastTime = time;
      const goal = target();
      const previous = current;
      current = still || current < 0 ? goal : current + (goal - current) * (1 - Math.pow(0.86, dt / 16.7));
      const velocity = (current - previous) / dt;
      const tilt = still ? 0 : Math.max(-14, Math.min(14, velocity * 9000));
      node.style.setProperty("--p", current.toFixed(4));
      node.style.setProperty("--tilt", `${tilt.toFixed(2)}deg`);

      if (Math.abs(goal - current) > 0.0004) {
        node.classList.add("is-moving");
        frame = requestAnimationFrame(tick);
      } else {
        current = goal;
        node.style.setProperty("--p", goal.toFixed(4));
        node.style.setProperty("--tilt", "0deg");
        node.classList.remove("is-moving");
        frame = 0;
        lastTime = 0;
      }
    };

    const kick = () => {
      if (!frame) frame = requestAnimationFrame(tick);
      if (tipRef.current && Math.abs(window.scrollY - openedAt.current) > window.innerHeight * 0.7) close();
    };

    kick();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [close]);

  // Show after the fold, step aside while another Bodega scene is on screen
  useEffect(() => {
    const busy = new Set<Element>();
    let scrolled = false;
    const update = () => {
      const visible = scrolled && busy.size === 0;
      setOn(visible);
      if (!visible) close();
    };
    const onScroll = () => {
      const next = window.scrollY > 160;
      if (next !== scrolled) {
        scrolled = next;
        update();
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? busy.add(entry.target) : busy.delete(entry.target)));
        update();
      },
      { rootMargin: "-10% 0px -10% 0px" },
    );
    document.querySelectorAll(SCENES).forEach((scene) => observer.observe(scene));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [close]);

  // Landmarks: rail markers plus the section Bodega is currently next to
  useEffect(() => {
    const found: Array<{ key: TipKey; label: string; node: Element }> = [];
    LANDMARKS.forEach(({ key, selector, label }) => {
      document.querySelectorAll(selector).forEach((node) => {
        if (!node.closest(".hero")) found.push({ key, label, node });
      });
    });

    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return setMarks([]);
      const next = found
        .map(({ key, label, node }, id) => {
          const rect = node.getBoundingClientRect();
          const center = rect.top + window.scrollY + rect.height / 2 - window.innerHeight / 2;
          return { id, key, label, node, p: Math.min(1, Math.max(0, center / max)) };
        })
        .sort((a, b) => a.p - b.p)
        .filter((mark, index, list) => index === 0 || mark.p - list[index - 1].p > 0.035);
      setMarks(next);
    };

    let pending = 0;
    const schedule = () => {
      window.clearTimeout(pending);
      pending = window.setTimeout(measure, 200);
    };
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);

    const nearby = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (!hit) return;
        const mark = found.find((item) => item.node === hit.target);
        if (!mark || mark.key === active.current) return;
        active.current = mark.key;
        offerAuto(mark.key);
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    found.forEach(({ node }) => nearby.observe(node));

    return () => {
      window.clearTimeout(pending);
      resize.disconnect();
      nearby.disconnect();
    };
  }, [offerAuto]);

  // First appearance: a short hello, once per visit
  useEffect(() => {
    if (!on || store.get("bodega_hi")) return;
    const id = window.setTimeout(() => {
      if (tipRef.current || store.get("bodega_hi")) return;
      store.set("bodega_hi", "1");
      open("hi");
    }, 1800);
    return () => window.clearTimeout(id);
  }, [on, open]);

  // Perk up whenever any call to action is hovered
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const over = (event: MouseEvent) => {
      const btn = (event.target as Element | null)?.closest?.(".btn");
      node.classList.toggle("is-perk", !!btn && !node.contains(btn));
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape" && tipRef.current) close();
    };
    document.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("mouseover", over);
      document.removeEventListener("keydown", key);
    };
  }, [close]);

  useEffect(() => () => window.clearTimeout(timers.current.auto), []);

  const current = shown ? TIPS[shown] : null;

  return (
    <aside
      ref={root}
      className={`bodega-guide${on ? " is-on" : ""}${tip ? " is-talking" : ""}`}
      aria-label={`${mascot.name}, your guide`}
    >
      <div className="bodega-guide__rail" aria-hidden="true">
        <span className="bodega-guide__rail-fill" />
      </div>
      <ol className="bodega-guide__marks">
        {marks.map((mark) => (
          <li key={mark.id} style={{ "--m": mark.p } as React.CSSProperties}>
            <button
              type="button"
              className="bodega-guide__mark"
              data-label={mark.label}
              aria-label={`Jump to ${mark.label}`}
              tabIndex={on ? 0 : -1}
              onClick={() => mark.node.scrollIntoView({ behavior: "smooth", block: "center" })}
            />
          </li>
        ))}
      </ol>

      <div className="bodega-guide__unit">
        <div className="bodega-guide__say" id="bodega-say" role="status">
          {current && (
            <>
              <p>{current.text}</p>
              {current.cta && (
                <a
                  className="bodega-guide__go"
                  href={current.cta.href}
                  tabIndex={tip ? 0 : -1}
                  data-event="guide_click"
                  data-event-label={shown ?? ""}
                >
                  {current.cta.label}
                </a>
              )}
              <button
                type="button"
                className="bodega-guide__x"
                aria-label="Close tip"
                tabIndex={tip ? 0 : -1}
                onClick={() => close(true)}
              >
                <X aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        <button
          type="button"
          className="bodega-guide__badge"
          aria-controls="bodega-say"
          aria-expanded={!!tip}
          aria-label={`${mascot.name}, your guide. Show a tip`}
          tabIndex={on ? 0 : -1}
          onClick={() => (tip ? close(true) : open(active.current ?? "help"))}
        >
          <svg className="bodega-guide__ring" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="30" pathLength={1} />
            <circle className="bodega-guide__ring-fill" cx="32" cy="32" r="30" pathLength={1} />
          </svg>
          <span className="bodega-guide__face">
            <MascotFace />
          </span>
        </button>
      </div>
    </aside>
  );
}
