import "./cat-scene.css";

type Pose = "sit" | "walk" | "carry" | "home";

const FUR = "url(#inkcat-fur)";
const FUR_DARK = "#232a33";
const BIB = "#f2eee4";
const EAR = "#c98f84";

/** Rolled letter tied with a red ribbon and a wax seal. */
export function InkLetter({ className }: { className?: string }) {
  return (
    <svg className={`ink-letter ${className ?? ""}`} viewBox="0 0 140 80" aria-hidden="true">
      <rect x="10" y="22" width="120" height="36" rx="18" fill="#f5f0e3" stroke="#c9b89a" strokeWidth="2" />
      <ellipse cx="22" cy="40" rx="10" ry="18" fill="#e9dfc9" stroke="#c9b89a" strokeWidth="2" />
      <ellipse cx="22" cy="40" rx="4" ry="9" fill="#d8caa9" />
      <path d="M40 30h64M40 40h56M40 50h48" stroke="#d7cbb3" strokeWidth="2" strokeLinecap="round" />
      <path d="M86 22v36" stroke="#b3392a" strokeWidth="5" />
      <path d="M86 58c-6 10-14 14-20 14M86 58c6 10 14 14 20 14" stroke="#b3392a" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="86" cy="40" r="10" fill="#9e2f22" />
      <circle cx="86" cy="40" r="5.5" fill="none" stroke="#e4a23a" strokeWidth="1.6" />
      <g className="ink-letter__spark">
        <path d="M118 8l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#e4a23a" />
      </g>
    </svg>
  );
}

function Defs() {
  return (
    <defs>
      <linearGradient id="inkcat-fur" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#4d5764" />
        <stop offset="1" stopColor="#262d36" />
      </linearGradient>
    </defs>
  );
}

function Whiskers({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <g stroke="#f6f7f2" strokeWidth="1.3" strokeLinecap="round" opacity="0.75">
      <path d={`M${x1} ${y}l-36 -6M${x1} ${y + 4}l-36 4`} />
      <path d={`M${x2} ${y}l36 -6M${x2} ${y + 4}l36 4`} />
    </g>
  );
}

function Face({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <path
        d={`M${cx - 16} ${cy + 12}c4-14 28-14 32 0 2 14-34 14-32 0z`}
        fill={BIB}
      />
      <g className="mascot__eye">
        <ellipse cx={cx - 16} cy={cy - 4} rx="7.5" ry="8.5" fill="#e4b84a" />
        <ellipse cx={cx - 15} cy={cy - 4} rx="2.6" ry="6.5" fill="#14181d" />
        <circle cx={cx - 13} cy={cy - 7} r="1.7" fill="#fff" />
      </g>
      <g className="mascot__eye">
        <ellipse cx={cx + 16} cy={cy - 4} rx="7.5" ry="8.5" fill="#e4b84a" />
        <ellipse cx={cx + 17} cy={cy - 4} rx="2.6" ry="6.5" fill="#14181d" />
        <circle cx={cx + 19} cy={cy - 7} r="1.7" fill="#fff" />
      </g>
      <path d={`M${cx - 4} ${cy + 8}h8l-4 5z`} fill="#c47a6c" />
      <path
        d={`M${cx} ${cy + 13}c0 5-6 7-9 4M${cx} ${cy + 13}c0 5 6 7 9 4`}
        stroke="#2a2f36"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <Whiskers x1={cx - 16} x2={cx + 16} y={cy + 12} />
    </>
  );
}

function SitHead() {
  return (
    <>
      <g className="mascot__ear mascot__ear--l">
        <path d="M166 96l4-44 28 28z" fill={FUR} />
        <path d="M173 88l2-26 15 17z" fill={EAR} opacity="0.85" />
      </g>
      <g className="mascot__ear mascot__ear--r">
        <path d="M206 78l30-28 2 46z" fill={FUR} />
        <path d="M213 79l18-18 1 26z" fill={EAR} opacity="0.85" />
      </g>
      <ellipse cx="202" cy="108" rx="42" ry="36" fill={FUR} />
      <Face cx={202} cy={106} />
    </>
  );
}

function Sitting({ home }: { home: boolean }) {
  return (
    <>
      <g className="mascot__tail mascot__tail--sit">
        <path
          d="M98 232C52 240 22 214 30 182c6-22 32-26 36-10"
          fill="none"
          stroke={FUR}
          strokeWidth="16"
          strokeLinecap="round"
        />
      </g>

      <g>
        <path d="M86 240C70 200 84 150 132 136c40-11 72 10 78 46 4 28 0 48-10 58z" fill={FUR} />
        <path d="M90 240c-8-34 14-58 46-54 26 4 34 30 24 54z" fill={FUR_DARK} opacity="0.55" />
        <path d="M176 150c20 6 28 32 22 64-8-8-20-28-28-54z" fill={BIB} />
        <path d="M182 190v44M199 188l1 46" stroke={FUR_DARK} strokeWidth="13" strokeLinecap="round" />
      </g>
      <ellipse cx="183" cy="238" rx="11" ry="6" fill={BIB} />
      <ellipse cx="202" cy="238" rx="11" ry="6" fill={BIB} />
      <path d="M168 146c18 10 38 8 52-4" stroke="#b3392a" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle className="mascot__tag" cx="194" cy="158" r="5" fill="#e4a23a" />

      <g className="mascot__head mascot__head--sit">
        <SitHead />
      </g>

      {home && (
        <g transform="translate(212 214) scale(0.5)">
          <InkLetterShape />
        </g>
      )}
    </>
  );
}

function Standing({ carry }: { carry: boolean }) {
  return (
    <>
      <g className="mascot__tail mascot__tail--up">
        <path
          d="M78 142C44 128 36 88 54 66c8-10 22-6 18 6"
          fill="none"
          stroke={FUR}
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>

      <g className="mascot__leg mascot__leg--b">
        <path d="M114 168l6 66" stroke="#1d232b" strokeWidth="13" strokeLinecap="round" />
      </g>
      <g className="mascot__leg mascot__leg--a">
        <path d="M208 166l6 66" stroke="#1d232b" strokeWidth="13" strokeLinecap="round" />
      </g>

      <g className="mascot__trunk">
        <path
          d="M72 150c-2-30 40-44 90-42 44 2 68 18 64 44-4 24-30 32-74 32s-78-6-80-34z"
          fill={FUR}
         
        />
        <ellipse cx="214" cy="156" rx="13" ry="20" fill={BIB} />
        <path d="M206 128c8 14 26 20 42 16" stroke="#b3392a" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>

      <g className="mascot__leg mascot__leg--a">
        <path d="M92 166l-6 66" stroke={FUR_DARK} strokeWidth="14" strokeLinecap="round" />
        <ellipse cx="85" cy="236" rx="10" ry="5" fill={BIB} />
      </g>
      <g className="mascot__leg mascot__leg--b">
        <path d="M192 166l-6 66" stroke={FUR_DARK} strokeWidth="14" strokeLinecap="round" />
        <ellipse cx="185" cy="236" rx="10" ry="5" fill={BIB} />
      </g>

      <g className="mascot__head mascot__head--walk">
        <g className="mascot__ear mascot__ear--l">
          <path d="M210 94l4-42 26 28z" fill={FUR} />
          <path d="M217 86l2-24 14 16z" fill={EAR} opacity="0.85" />
        </g>
        <g className="mascot__ear mascot__ear--r">
          <path d="M248 78l28-24 2 44z" fill={FUR} />
          <path d="M255 78l16-15 1 24z" fill={EAR} opacity="0.85" />
        </g>
        <ellipse cx="244" cy="110" rx="40" ry="34" fill={FUR} />
        <Face cx={244} cy={108} />
        {carry && (
          <g transform="translate(212 118) scale(0.5)">
            <InkLetterShape />
          </g>
        )}
      </g>
    </>
  );
}

export function InkLetterShape() {
  return (
    <>
      <rect x="10" y="22" width="120" height="36" rx="18" fill="#f5f0e3" stroke="#c9b89a" strokeWidth="3" />
      <ellipse cx="22" cy="40" rx="10" ry="18" fill="#e9dfc9" stroke="#c9b89a" strokeWidth="3" />
      <path d="M86 22v36" stroke="#b3392a" strokeWidth="6" />
      <circle cx="86" cy="40" r="11" fill="#9e2f22" />
      <circle cx="86" cy="40" r="6" fill="none" stroke="#e4a23a" strokeWidth="2" />
    </>
  );
}

/** Bodega's head on its own, framed for round badges and avatars. */
export function InkCatFace({ className }: { className?: string }) {
  return (
    <svg className={`mascot mascot--face ${className ?? ""}`} viewBox="148 40 108 108" aria-hidden="true">
      <Defs />
      <SitHead />
    </svg>
  );
}

/** Bodega, an original ink-wash tuxedo cat. Pose decides the drawing; CSS does the motion. */
export function InkCat({ pose = "sit" }: { pose?: Pose }) {
  const standing = pose === "walk" || pose === "carry";

  return (
    <svg className={`mascot mascot--${pose}`} viewBox="0 0 320 260" aria-hidden="true">
      <Defs />
      <ellipse className="mascot__shadow" cx="160" cy="245" rx="100" ry="9" />
      {standing ? <Standing carry={pose === "carry"} /> : <Sitting home={pose === "home"} />}
    </svg>
  );
}
