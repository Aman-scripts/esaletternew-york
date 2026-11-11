import { mascot } from "@/lib/mascot";
import { InkLetter } from "./InkCat";
import { Mascot } from "./Mascot";
import "./cat-scene.css";

const motes = [
  { left: "58%", top: "22%", delay: "0s" },
  { left: "74%", top: "34%", delay: "1.4s" },
  { left: "66%", top: "58%", delay: "2.6s" },
  { left: "86%", top: "48%", delay: "0.8s" },
  { left: "50%", top: "40%", delay: "3.3s" },
  { left: "80%", top: "18%", delay: "2s" },
];

/** Hero illustration: a painted ring over an ink New York skyline, the mascot, and the letter. */
export function HeroScene() {
  return (
    <div className="ny-scene" aria-hidden="true">
      <svg className="ny-scene__ring" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="nyscene-lamp" cx="0.58" cy="0.42" r="0.5">
            <stop offset="0" stopColor="#ffd98a" stopOpacity="0.95" />
            <stop offset="0.45" stopColor="#f3d9a7" stopOpacity="0.55" />
            <stop offset="1" stopColor="#efd9c7" stopOpacity="0" />
          </radialGradient>
          <clipPath id="nyscene-clip">
            <circle cx="200" cy="200" r="128" />
          </clipPath>
          <filter id="nyscene-brush" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="4" />
            <feDisplacementMap in="SourceGraphic" scale="7" />
          </filter>
        </defs>

        <circle cx="200" cy="200" r="150" fill="url(#nyscene-lamp)" />

        <g clipPath="url(#nyscene-clip)" className="ny-scene__city">
          <g fill="#213457" opacity="0.13">
            <rect x="80" y="236" width="34" height="120" />
            <rect x="118" y="214" width="26" height="140" />
            <rect x="148" y="250" width="40" height="110" />
            <path d="M196 330V170h8l4-30 4 30h8v160z" />
            <rect x="226" y="226" width="30" height="130" />
            <rect x="260" y="246" width="44" height="110" />
            <rect x="308" y="232" width="24" height="120" />
          </g>
          <g fill="#213457" opacity="0.22">
            <path d="M126 214v-14h14v14M128 200l5-8 5 8" />
            <path d="M268 246v-12h16v12M270 234l6-8 6 8" />
          </g>
          <path d="M60 330c60-14 120-10 180-4s100 4 120-2v80H60z" fill="#213457" opacity="0.08" />
        </g>

        <g filter="url(#nyscene-brush)">
          <path
            className="ny-scene__enso"
            d="M321 130A140 140 0 1 1 280 85"
            pathLength={1}
            fill="none"
            stroke="#213457"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            className="ny-scene__enso ny-scene__enso--thin"
            d="M318 136A136 136 0 1 1 286 92"
            pathLength={1}
            fill="none"
            stroke="#2d4672"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>
      </svg>

      {motes.map((m) => (
        <span key={`${m.left}-${m.top}`} className="ny-scene__mote" style={{ left: m.left, top: m.top, animationDelay: m.delay }} />
      ))}

      <p className="ny-scene__bubble">
        <span>Meet {mascot.name}.</span> {mascot.He} carries your answers to a licensed New York professional and brings your
        letter home.
      </p>

      <div className="ny-scene__cat">
        <Mascot pose="sit" />
      </div>

      <div className="ny-scene__letter">
        <div className="ny-scene__letter-float">
          <InkLetter />
        </div>
      </div>
    </div>
  );
}
