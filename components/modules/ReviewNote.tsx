import { TriangleAlert } from "lucide-react";

/** Editorial flag for pages needing legal/clinical review before launch. Remove the note in content once cleared. */
export function ReviewNote({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="review-note text-body-small-semibold" role="note">
      <TriangleAlert aria-hidden="true" />
      {text}
    </p>
  );
}
