import { CircleCheck, Info, Scale, TriangleAlert } from "lucide-react";
import type { Callout as CalloutData } from "@/lib/content/types";

const icons = {
  info: Info,
  warning: TriangleAlert,
  legal: Scale,
  success: CircleCheck,
};

/** M9 Callout / alert box */
export function Callout({ variant, title, text }: CalloutData) {
  const Icon = icons[variant];
  return (
    <aside className={`callout callout--${variant}`} role="note">
      <Icon className="callout__icon" aria-hidden="true" />
      <div>
        <p className="callout__title">
          <strong>{title}</strong>
        </p>
        <p className="callout__text">{text}</p>
      </div>
    </aside>
  );
}
