import { Lightbulb } from "lucide-react";

/** M9 quick-answer variant (40-60 words, required on T4/T5/T6) */
export function QuickAnswer({ text }: { text: string }) {
  return (
    <aside className="quick-answer" aria-label="Quick answer">
      <span className="quick-answer__label text-body-small-semibold">
        <Lightbulb aria-hidden="true" /> Quick answer
      </span>
      <p className="quick-answer__text text-body-large">{text}</p>
    </aside>
  );
}
