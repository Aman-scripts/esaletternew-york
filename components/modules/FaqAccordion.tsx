import { Plus } from "lucide-react";
import type { Faq } from "@/lib/content/types";
import { faqSchema } from "@/lib/seo";
import { JsonLd } from "../common/JsonLd";

type Props = {
  faqs: Faq[];
  /** Output FAQPage schema (disable when a parent outputs one combined schema) */
  schema?: boolean;
};

/** M5 FAQ accordion. Native <details> is keyboard accessible without JS (spec 10.5). */
export function FaqAccordion({ faqs, schema = true }: Props) {
  if (!faqs.length) return null;
  return (
    <div className="faq">
      {schema && <JsonLd data={faqSchema(faqs)} />}
      {faqs.map((f) => (
        <details key={f.q} className="faq__item">
          <summary className="faq__q">
            <h3 className="faq__title text-h3">{f.q}</h3>
            <Plus className="faq__icon" aria-hidden="true" />
          </summary>
          <div className="faq__a">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
