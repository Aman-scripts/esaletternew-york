"use client";

import { useEffect, useRef, useState } from "react";
import { mascot } from "@/lib/mascot";
import { InkLetter } from "./InkCat";
import { Mascot } from "./Mascot";
import { letterWalkSteps as steps } from "./letter-walk-steps";
import "./cat-scene.css";

const poses = ["sit", "walk", "carry", "stand", "hold"] as const;

/** Share of the stage width the walker covers between the first and last step */
const PATH = 48;
/** Journey progress where the mouth reaches the letter on the pavement (matches its CSS position) */
const PICKUP = 0.62;
const POSTED = 0.985;
/** Top speed in journey-per-second, tuned to the gait so the paws don't skate */
const MAX_SPEED = 0.32;
/** Where on screen the reading line sits, as a share of the viewport height */
const READ_LINE = 0.6;

type Walk = { moving: boolean; back: boolean; carrying: boolean; posted: boolean; start: boolean };

const sameWalk = (a: Walk, b: Walk) =>
  a.moving === b.moving && a.back === b.back && a.carrying === b.carrying && a.posted === b.posted && a.start === b.start;

/**
 * Scroll-driven story: the mascot follows the reader down the steps at a walking pace,
 * picks up the letter on the way, and posts it in the mailbox at the end.
 */
export function LetterWalk() {
  const [step, setStep] = useState(0);
  const [walk, setWalk] = useState<Walk>({ moving: false, back: false, carrying: false, posted: false, start: true });
  const stage = useRef<HTMLDivElement>(null);
  const items = useRef<Array<HTMLLIElement | null>>([]);

  const pose = walk.moving
    ? walk.carrying
      ? "carry"
      : "walk"
    : walk.posted
      ? "stand"
      : walk.carrying
        ? "hold"
        : walk.start
          ? "sit"
          : "stand";

  useEffect(() => {
    const nodes = items.current.filter(Boolean) as HTMLLIElement[];
    const el = stage.current;
    if (nodes.length < 2 || !el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let target = 0;
    let pos = 0;
    let speed = 0;
    let frame = 0;
    let then = 0;
    let state: Walk = { moving: false, back: false, carrying: false, posted: false, start: true };

    const measure = () => {
      const centre = (node: HTMLLIElement) => {
        const box = node.getBoundingClientRect();
        return box.top + box.height / 2;
      };
      const last = centre(nodes[nodes.length - 1]);
      const spacing = (last - centre(nodes[0])) / (nodes.length - 1);
      // The walk starts one step-spacing before step 1, so every step (including the first) is a stroll
      const start = centre(nodes[0]) - spacing;
      const line = window.innerHeight * READ_LINE;
      target = Math.min(1, Math.max(0, (line - start) / (last - start)));
      setStep(Math.min(nodes.length - 1, Math.max(0, Math.round(target * nodes.length) - 1)));
    };

    const publish = (moving: boolean) => {
      const next: Walk = {
        moving,
        back: moving ? speed < 0 : state.back,
        carrying: pos >= PICKUP,
        posted: !moving && pos >= POSTED,
        start: pos < 0.02,
      };
      if (!sameWalk(state, next)) {
        state = next;
        setWalk(next);
      }
      el.style.setProperty("--x", (pos * PATH).toFixed(3));
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - then) / 1000 || 0.016);
      then = now;
      const gap = target - pos;
      const cruise = Math.sign(gap) * Math.min(MAX_SPEED, Math.abs(gap) * 5);
      speed += (cruise - speed) * Math.min(1, dt * 6);
      pos += speed * dt;
      const arrived = Math.sign(target - pos) !== Math.sign(gap);

      if (arrived || (Math.abs(gap) < 0.002 && Math.abs(speed) < 0.02)) {
        pos = target;
        speed = 0;
        frame = 0;
        publish(false);
        return;
      }
      publish(Math.abs(speed) > 0.03);
      frame = requestAnimationFrame(tick);
    };

    const update = () => {
      measure();
      if (reduced) {
        pos = target;
        publish(false);
        return;
      }
      if (!frame) {
        then = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    measure();
    pos = target;
    publish(false);

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="ny-walk">
      <div
        ref={stage}
        className="ny-walk-stage"
        data-step={step}
        data-dir={walk.back ? "back" : "on"}
        data-moving={walk.moving || undefined}
        data-carrying={walk.carrying || undefined}
        data-posted={walk.posted || undefined}
        aria-hidden="true"
      >
        <svg className="ny-walk-stage__city" viewBox="0 0 800 500" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="nywalk-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#efd9c7" />
              <stop offset="0.55" stopColor="#eae3d6" />
              <stop offset="1" stopColor="#f6f7f2" />
            </linearGradient>
            <radialGradient id="nywalk-window" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#ffd98a" />
              <stop offset="1" stopColor="#ffd98a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="500" fill="url(#nywalk-sky)" />
          <circle cx="560" cy="120" r="46" fill="#f3d9a7" opacity="0.7" />

          <g fill="#213457" opacity="0.1">
            <rect x="20" y="250" width="60" height="200" />
            <rect x="90" y="210" width="44" height="240" />
            <path d="M150 450V170h14l7-56 7 56h14v280z" />
            <rect x="206" y="236" width="70" height="214" />
            <rect x="290" y="270" width="54" height="180" />
            <rect x="356" y="224" width="40" height="226" />
            <rect x="408" y="260" width="80" height="190" />
          </g>
          <g fill="#213457" opacity="0.18">
            <path d="M98 210v-22h28v22M101 188l10-14 10 14" />
            <path d="M296 270v-20h26v20M299 250l10-12 10 12" />
          </g>

          <g className="ny-walk-stage__brownstone">
            <rect x="590" y="180" width="210" height="262" fill="#7a5040" opacity="0.32" />
            <rect x="590" y="172" width="210" height="12" fill="#5b3a2e" opacity="0.4" />
            {[620, 680, 740].map((x) => (
              <rect key={`t${x}`} x={x} y="206" width="34" height="50" rx="3" fill="#3a2a24" opacity="0.35" />
            ))}
            <rect x="620" y="282" width="34" height="50" rx="3" fill="#3a2a24" opacity="0.35" />
            <rect className="ny-walk-stage__home" x="680" y="282" width="34" height="50" rx="3" fill="#3a2a24" opacity="0.35" />
            <circle className="ny-walk-stage__home-glow" cx="697" cy="307" r="70" fill="url(#nywalk-window)" />
            <rect x="740" y="282" width="34" height="50" rx="3" fill="#3a2a24" opacity="0.35" />
            <rect x="600" y="362" width="40" height="80" rx="4" fill="#3a2a24" opacity="0.4" />
            <path d="M540 442h100v-14h-80v-14h-20z" fill="#9b8b78" opacity="0.5" />
          </g>

          <path d="M0 440c120-10 260-6 400-2s300 4 400-2v64H0z" fill="#d6cfbf" />
          <path d="M0 452c160-6 320 2 480 0s240-4 320 0" stroke="#bfb6a3" strokeWidth="2" fill="none" />
        </svg>

        <p className="ny-walk-stage__caption">{mascot.name}, on {mascot.his} rounds</p>
        <p className="ny-walk-stage__delivered">Signed. Delivered.</p>

        <div className="ny-walk-stage__letter">
          <InkLetter />
        </div>
        <svg className="ny-walk-stage__postbox" viewBox="0 0 80 124">
          <defs>
            <linearGradient id="nywalk-box" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#35598f" />
              <stop offset="0.55" stopColor="#2a4877" />
              <stop offset="1" stopColor="#1d3358" />
            </linearGradient>
          </defs>
          <rect x="13" y="104" width="8" height="18" rx="2" fill="#1a2c4b" />
          <rect x="59" y="104" width="8" height="18" rx="2" fill="#1a2c4b" />
          <path d="M8 106V40C8 20 22 8 40 8s32 12 32 32v66z" fill="url(#nywalk-box)" />
          <path d="M14 38c2-14 12-22 24-23" stroke="#fff" strokeOpacity="0.28" strokeWidth="3" fill="none" strokeLinecap="round" />
          <rect x="6" y="100" width="68" height="8" rx="2" fill="#1a2c4b" />
          <rect x="17" y="34" width="46" height="13" rx="4" fill="#1d3358" />
          <rect x="21" y="39" width="38" height="3.5" rx="1.5" fill="#0c1729" />
          <rect x="22" y="60" width="36" height="16" rx="2.5" fill="#efe7d4" opacity="0.92" />
          <text x="40" y="72" textAnchor="middle" fontSize="10" fontWeight="700" letterSpacing="1.5" fill="#24406d">
            MAIL
          </text>
          <g className="ny-walk-stage__flag">
            <rect x="72" y="44" width="4" height="26" rx="1.5" fill="#8a2a1f" />
            <path d="M76 44h12v10H76z" fill="#c8402e" />
          </g>
        </svg>
        <div className="ny-walk-stage__mail">
          <InkLetter />
        </div>
        <div className="ny-walk-stage__track">
          <div className="ny-walk-stage__cat">
            <div className="ny-walk-stage__face">
              {poses.map((name) => (
                <div key={name} className="ny-walk-stage__pose" data-pose={name} data-on={name === pose || undefined}>
                  <Mascot pose={name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ny-walk-stage__paws">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} style={{ "--i": i } as React.CSSProperties} />
          ))}
        </div>
      </div>

      <ol className="ny-walk-steps">
        {steps.map((item, index) => (
          <li
            key={item.title}
            ref={(node) => {
              items.current[index] = node;
            }}
            data-step={index}
            className={index === step ? "is-on" : undefined}
          >
            <span className="ny-walk-steps__num">{index + 1}</span>
            <h3 className="text-h3">{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
