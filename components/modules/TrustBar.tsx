import { BadgeCheck, Clock, Lock, ShieldCheck } from "lucide-react";

const items = [
  { icon: BadgeCheck, label: "Licensed New York providers" },
  { icon: Lock, label: "HIPAA-compliant intake" },
  { icon: ShieldCheck, label: "Money-back guarantee" },
  { icon: Clock, label: "Letters often within 24 hours" },
];

/** M2 Trust bar */
export function TrustBar() {
  return (
    <div className="trust-bar">
      <ul className="container trust-bar__list">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="trust-bar__item text-body-small-semibold">
            <span className="trust-bar__icon">
              <Icon aria-hidden="true" />
            </span>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
