import { ClipboardList, FileCheck, LifeBuoy, Video, type LucideIcon } from "lucide-react";
import type { Step } from "./StepProcess";

const icons: LucideIcon[] = [ClipboardList, Video, FileCheck, LifeBuoy];

/** Timeline of what to expect: icon cards joined by a connector line */
export function Timeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="timeline">
      {steps.map((step, i) => {
        const Icon = icons[i % icons.length];
        return (
          <li key={step.title} className="timeline__item">
            <span className="timeline__icon">
              <Icon aria-hidden="true" />
            </span>
            <h3 className="timeline__title text-h3">{step.title}</h3>
            <p className="timeline__text">{step.text}</p>
          </li>
        );
      })}
    </ol>
  );
}
