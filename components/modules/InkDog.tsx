import type { CSSProperties } from "react";
import { InkLetterShape } from "./InkCat";
import "./cat-scene.css";

export type DogPose = "sit" | "walk" | "carry" | "stand" | "hold" | "home";

const FUR = "url(#inkdog-fur)";
const SHADE = "url(#inkdog-shade)";
const CREAM = "url(#inkdog-cream)";
const EAR = "url(#inkdog-ear)";
const FAR = "url(#inkdog-far)";
const FAR_PAW = "#dcc5a2";
const LINE = "#3b2a22";
const GLOW = "#f8dcae";

/** Pivot an animated group around a point in viewBox units */
const pivot = (x: number, y: number, extra?: CSSProperties): CSSProperties => ({
  transformBox: "view-box",
  transformOrigin: `${x}px ${y}px`,
  ...extra,
});

/** A tapered limb segment with rounded ends, from (x1, y1) at width w1 to (x2, y2) at width w2 */
function seg(x1: number, y1: number, w1: number, x2: number, y2: number, w2: number) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  const nx = -(y2 - y1) / len;
  const ny = (x2 - x1) / len;
  const r1 = w1 / 2;
  const r2 = w2 / 2;
  const p = (x: number, y: number) => `${x.toFixed(1)} ${y.toFixed(1)}`;
  return [
    `M${p(x1 + nx * r1, y1 + ny * r1)}`,
    `L${p(x2 + nx * r2, y2 + ny * r2)}`,
    `A${r2} ${r2} 0 0 0 ${p(x2 - nx * r2, y2 - ny * r2)}`,
    `L${p(x1 - nx * r1, y1 - ny * r1)}`,
    `A${r1} ${r1} 0 0 0 ${p(x1 + nx * r1, y1 + ny * r1)}Z`,
  ].join("");
}

function Defs() {
  return (
    <defs>
      <linearGradient id="inkdog-fur" x1="0" y1="0" x2="0.25" y2="1">
        <stop offset="0" stopColor="#e7b77f" />
        <stop offset="1" stopColor="#b5733d" />
      </linearGradient>
      <linearGradient id="inkdog-far" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#b47a46" />
        <stop offset="1" stopColor="#8c5631" />
      </linearGradient>
      <radialGradient id="inkdog-shade" cx="0.36" cy="0.22" r="0.9">
        <stop offset="0" stopColor="#fff4dc" stopOpacity="0.4" />
        <stop offset="0.5" stopColor="#fff4dc" stopOpacity="0" />
        <stop offset="1" stopColor="#4a2810" stopOpacity="0.36" />
      </radialGradient>
      <linearGradient id="inkdog-cream" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fdf7ec" />
        <stop offset="1" stopColor="#e6cfac" />
      </linearGradient>
      <linearGradient id="inkdog-ear" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#a86a39" />
        <stop offset="1" stopColor="#70401d" />
      </linearGradient>
      <radialGradient id="inkdog-iris" cx="0.4" cy="0.35" r="0.7">
        <stop offset="0" stopColor="#8a5527" />
        <stop offset="1" stopColor="#1f1108" />
      </radialGradient>
      <radialGradient id="inkdog-nose" cx="0.35" cy="0.3" r="0.8">
        <stop offset="0" stopColor="#5d453c" />
        <stop offset="1" stopColor="#1a110e" />
      </radialGradient>
    </defs>
  );
}

function Eye({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g className="mascot__eye">
      <ellipse cx={cx} cy={cy} rx={r + 1.4} ry={r + 1.8} fill="#2a1a12" />
      <ellipse cx={cx} cy={cy} rx={r} ry={r + 0.5} fill="url(#inkdog-iris)" />
      <circle cx={cx + 0.4} cy={cy + 0.4} r={r * 0.5} fill="#0d0704" />
      <circle cx={cx + r * 0.38} cy={cy - r * 0.42} r={r * 0.3} fill="#fff" />
      <circle cx={cx - r * 0.4} cy={cy + r * 0.45} r={r * 0.12} fill="#fff" opacity="0.7" />
    </g>
  );
}

function Tongue({ x, y }: { x: number; y: number }) {
  return (
    <g className="mascot__tongue" style={pivot(x + 9, y)}>
      <path d={`M${x} ${y}c0 10 4 16 10 16s9-6 8-15z`} fill="#e07a7c" />
      <path d={`M${x + 9} ${y + 3}v8`} stroke="#bf5a60" strokeWidth="1.4" strokeLinecap="round" />
    </g>
  );
}

function Paw({ x, y, far }: { x: number; y: number; far?: boolean }) {
  return (
    <>
      <path d={`M${x - 12} ${y}c-1-7 4-11 11-11h4c7 0 12 4 11 11z`} fill={far ? FAR_PAW : CREAM} />
      {!far && (
        <path d={`M${x + 1} ${y - 5}v5M${x + 7} ${y - 4}v4`} stroke="#c4a37b" strokeWidth="1.3" strokeLinecap="round" />
      )}
    </>
  );
}

/* ---------- Head (shared by the sitting pose and the badge) ---------- */
function SitHead({ tongue = true }: { tongue?: boolean }) {
  return (
    <>
      <path d="M222 64c10-10 26-6 28 6 1 10-8 22-14 26-4-12-8-22-14-32z" fill={EAR} />
      <ellipse cx="204" cy="96" rx="36" ry="33" fill={FUR} />
      <ellipse cx="204" cy="96" rx="36" ry="33" fill={SHADE} />
      <path d="M176 110c4 16 16 28 34 30 10 1 18-2 24-8-12-2-30-8-40-22z" fill="#9c6232" opacity="0.35" />
      <path d="M208 62c6 0 9 14 9 30-5 1-12-1-16-4 0-12 2-26 7-26z" fill={CREAM} opacity="0.9" />
      <path d="M212 94c18-6 44-2 50 14 4 12-6 24-26 24-16 0-28-6-32-18-2-8 2-16 8-20z" fill={CREAM} />
      <path d="M218 124c10 7 28 9 40 2" stroke="#d2b48a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="240" cy="112" r="1.1" fill="#b89671" />
      <circle cx="245" cy="116" r="1.1" fill="#b89671" />
      <circle cx="238" cy="118" r="1.1" fill="#b89671" />
      {tongue && <Tongue x={238} y={122} />}
      <path d="M259 116v4M259 120c-4 6-14 8-22 4" stroke={LINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M252 100c6-4 15-2 16 5 1 7-5 11-11 11-6 0-10-4-10-9 0-3 2-6 5-7z" fill="url(#inkdog-nose)" />
      <ellipse cx="256" cy="103" rx="3" ry="1.6" fill="#fff" opacity="0.55" />
      <ellipse cx="205" cy="72" rx="5" ry="3" fill="#f6e2c2" opacity="0.85" />
      <ellipse cx="231" cy="74" rx="4.5" ry="2.8" fill="#f6e2c2" opacity="0.85" />
      <Eye cx={205} cy={82} r={4.6} />
      <Eye cx={231} cy={84} r={5.2} />
      <g className="mascot__ear mascot__ear--flop" style={pivot(194, 62)}>
        <path d="M196 62c-18-4-30 12-32 34-1 20 4 34 14 36 12 2 18-14 18-32 0-16 4-32 0-38z" fill={EAR} />
        <path d="M186 76c-8 8-11 24-8 40" stroke="#5e3518" strokeOpacity="0.45" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    </>
  );
}

/* ---------- Sitting ---------- */
const SIT_BODY = "M182 122C160 118 128 132 112 160c-14 26-14 60-2 76l96 2c8-24 8-62 0-88-6-16-14-26-24-28z";
const SIT_THIGH = "M100 210c-2-30 18-46 42-44 26 2 40 22 36 46-2 18-16 26-38 26h-28c-8-4-12-16-12-28z";
const UPPER_ARM_SIT = "M194 132c16 0 22 18 18 38-2 10-6 16-12 18-8-8-12-24-10-40 0-8 2-14 4-16z";

function Sitting({ home }: { home: boolean }) {
  return (
    <>
      <g className="mascot__tail mascot__tail--sit" style={pivot(108, 230)}>
        <path d="M110 234c-20 5-46 3-58-8-6-6 0-13 7-9 12 8 30 10 50 6z" fill={FUR} />
        <path d="M58 220c-3-3-1-7 3-6" stroke={GLOW} strokeWidth="2.6" fill="none" strokeLinecap="round" />
      </g>

      <g className="mascot__body" style={pivot(156, 240)}>
        <path d={SIT_BODY} fill={FUR} />
        <path d={SIT_BODY} fill={SHADE} />
        <path d={seg(186, 168, 15, 185, 232, 10)} fill={FAR} />
        <Paw x={186} y={239} far />
        <path d={SIT_THIGH} fill={FUR} />
        <path d={SIT_THIGH} fill={SHADE} />
        <path d="M110 186c10-12 26-17 42-14" stroke={GLOW} strokeOpacity="0.75" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d={seg(116, 230, 14, 150, 235, 10)} fill={FUR} />
        <Paw x={158} y={240} />
        <path d="M186 130c16 2 28 24 26 54-1 16-5 28-11 34-12-16-22-50-15-88z" fill={CREAM} />
        <path d={UPPER_ARM_SIT} fill={FUR} />
        <path d={UPPER_ARM_SIT} fill={SHADE} />
        <path d={seg(203, 180, 15, 206, 233, 11)} fill={FUR} />
        <path d="M201 188c0 14 1 28 3 40" stroke={GLOW} strokeOpacity="0.6" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <Paw x={208} y={240} />
        <path d="M176 134c12 12 34 14 48 2" stroke="#b3392a" strokeWidth="7" strokeLinecap="round" fill="none" />
        <circle className="mascot__tag" cx="202" cy="150" r="5" fill="#e4a23a" />
      </g>

      <g className="mascot__head mascot__head--sit" style={pivot(198, 138)}>
        <g transform="translate(198 138) scale(1.14) translate(-198 -138)">
          <SitHead tongue={!home} />
        </g>
      </g>

      {home && (
        <g transform="translate(222 214) scale(0.5)">
          <InkLetterShape />
        </g>
      )}
    </>
  );
}

/* ---------- Standing and walking ---------- */
const THIGH = "M96 112c24-4 44 12 40 38-3 18-9 28-15 30-9-4-21-20-27-40-4-12-4-24 2-28z";
const UPPER_ARM = "M194 108c20-4 30 16 24 38-4 14-11 22-18 24-8-10-12-30-10-48 0-8 1-12 4-14z";
const TRUNK =
  "M206 96C176 90 132 92 106 98 88 102 80 118 84 134c4 14 18 18 32 16 20-2 34 0 50 6 18 6 40 6 54-6 12-12 10-42-14-54z";
const WALK_T = "0.9s";

/** Rear leg: thigh, gaskin, then the angled hock down to the paw */
function RearLeg({ far, phase }: { far?: boolean; phase: number }) {
  const fill = far ? FAR : FUR;
  const timing = { animationDelay: `calc(${WALK_T} * ${-phase})` };
  return (
    <g transform={far ? "translate(-10 -3)" : undefined}>
      <g className="mascot__hip" style={pivot(112, 128, timing)}>
        <path d={THIGH} fill={fill} />
        {!far && <path d={THIGH} fill={SHADE} />}
        {!far && <path d="M104 118c10-2 20 2 26 10" stroke={GLOW} strokeOpacity="0.7" strokeWidth="2.6" fill="none" strokeLinecap="round" />}
        <g className="mascot__stifle" style={pivot(122, 176, timing)}>
          <path d={seg(122, 172, 22, 104, 206, 13)} fill={fill} />
          <g className="mascot__hock" style={pivot(104, 206, timing)}>
            <path d={seg(104, 205, 13, 108, 235, 11)} fill={fill} />
            <Paw x={111} y={238} far={far} />
          </g>
        </g>
      </g>
    </g>
  );
}

/** Front leg: upper arm, forearm, then the pastern and paw */
function FrontLeg({ far, phase }: { far?: boolean; phase: number }) {
  const fill = far ? FAR : FUR;
  const timing = { animationDelay: `calc(${WALK_T} * ${-phase})` };
  return (
    <g transform={far ? "translate(-10 -3)" : undefined}>
      <g className="mascot__shoulder" style={pivot(206, 122, timing)}>
        <path d={UPPER_ARM} fill={fill} />
        {!far && <path d={UPPER_ARM} fill={SHADE} />}
        <g className="mascot__elbow" style={pivot(200, 166, timing)}>
          <path d={seg(200, 162, 19, 199, 212, 13)} fill={fill} />
          {!far && <path d="M196 172v34" stroke={GLOW} strokeOpacity="0.55" strokeWidth="2.2" strokeLinecap="round" />}
          <g className="mascot__wrist" style={pivot(199, 212, timing)}>
            <path d={seg(199, 211, 13, 203, 234, 12)} fill={fill} />
            <Paw x={206} y={238} far={far} />
          </g>
        </g>
      </g>
    </g>
  );
}

function Standing({ carry }: { carry: boolean }) {
  return (
    <>
      <RearLeg far phase={0.5} />
      <FrontLeg far phase={0.75} />

      <g className="mascot__tail mascot__tail--up" style={pivot(92, 112)}>
        <path d="M94 110c-16-8-28-26-30-46-1-6 7-8 9-2 3 16 12 30 26 38z" fill={FUR} />
        <path d="M66 66c-1-5 4-7 6-3" stroke={GLOW} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      <g className="mascot__trunk" style={pivot(150, 150)}>
        <path d={TRUNK} fill={FUR} />
        <path d={TRUNK} fill={SHADE} />
        <path d="M118 148c18 2 34 2 48 6 14 4 30 6 42 2-10 8-30 10-48 6-16-4-30-8-42-14z" fill={CREAM} opacity="0.85" />
        <path d="M112 100c26-6 64-8 92-2" stroke={GLOW} strokeOpacity="0.6" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M222 112c8 10 10 30 2 44-8-4-12-22-8-44z" fill={CREAM} />
      </g>

      <RearLeg phase={0} />
      <FrontLeg phase={0.25} />

      <g className="mascot__head mascot__head--walk" style={pivot(214, 116)}>
        <g transform="translate(226 116) scale(1.1) translate(-226 -116)">
          <path d="M200 102c10-18 28-32 46-36l16 32c-14 14-34 24-52 26z" fill={FUR} />
          <path d="M200 102c10-18 28-32 46-36l16 32c-14 14-34 24-52 26z" fill={SHADE} />
          <path d="M214 118c12 8 30 6 42-6" stroke="#b3392a" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle className="mascot__tag" cx="236" cy="126" r="4.5" fill="#e4a23a" />
          <path d="M262 52c8-8 22-6 24 4 1 8-6 18-12 22-4-10-8-18-12-26z" fill={EAR} />
          <ellipse cx="252" cy="78" rx="30" ry="27" fill={FUR} />
          <ellipse cx="252" cy="78" rx="30" ry="27" fill={SHADE} />
          <path d="M255 52c5 0 8 12 8 26-4 1-10-1-13-3 0-10 1-23 5-23z" fill={CREAM} opacity="0.9" />
          <path d="M260 76c16-5 38-2 42 12 3 10-6 20-22 20-14 0-24-5-27-15-2-7 2-13 7-17z" fill={CREAM} />
          {!carry && <Tongue x={282} y={100} />}
          <path d="M298 96v3M298 99c-4 5-12 6-18 3" stroke={LINE} strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M294 84c5-3 12-2 13 4 1 6-4 9-9 9s-8-3-8-7c0-3 2-5 4-6z" fill="url(#inkdog-nose)" />
          <ellipse cx="298" cy="86.5" rx="2.6" ry="1.4" fill="#fff" opacity="0.55" />
          <ellipse cx="253" cy="58" rx="4.2" ry="2.6" fill="#f6e2c2" opacity="0.85" />
          <ellipse cx="275" cy="60" rx="4" ry="2.4" fill="#f6e2c2" opacity="0.85" />
          <Eye cx={253} cy={67} r={4} />
          <Eye cx={275} cy={69} r={4.5} />
          <g className="mascot__ear mascot__ear--flop" style={pivot(246, 50)}>
            <path d="M248 50c-16-3-26 10-28 30-1 18 4 30 13 32 10 1 15-12 15-28 0-14 3-28 0-34z" fill={EAR} />
            <path d="M240 62c-7 7-10 20-7 34" stroke="#5e3518" strokeOpacity="0.45" strokeWidth="2.6" fill="none" strokeLinecap="round" />
          </g>
          {carry && (
            <g transform="translate(262 92) scale(0.45)">
              <InkLetterShape />
            </g>
          )}
        </g>
      </g>
    </>
  );
}

/** The dog's head on its own, framed for round badges and avatars. */
export function InkDogFace({ className }: { className?: string }) {
  return (
    <svg className={`mascot mascot--dog mascot--face ${className ?? ""}`} viewBox="158 34 124 124" aria-hidden="true">
      <Defs />
      <SitHead />
    </svg>
  );
}

/**
 * Hudson, an original fawn rescue dog. "walk" and "carry" step through a four-beat walk;
 * "stand" and "hold" are the same body at rest. CSS drives every joint.
 */
export function InkDog({ pose = "sit" }: { pose?: DogPose }) {
  const upright = pose !== "sit" && pose !== "home";
  const carrying = pose === "carry" || pose === "hold";
  return (
    <svg className={`mascot mascot--dog mascot--${pose}`} viewBox="0 0 320 260" aria-hidden="true">
      <Defs />
      <ellipse className="mascot__shadow" cx="160" cy="245" rx="104" ry="9" />
      {upright ? <Standing carry={carrying} /> : <Sitting home={pose === "home"} />}
    </svg>
  );
}
