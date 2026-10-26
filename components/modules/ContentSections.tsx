import { Fragment } from "react";
import type { ContentSection } from "@/lib/content/types";
import { anchorId } from "@/lib/slug";
import { Callout } from "./Callout";
import { ComparisonTable } from "./ComparisonTable";

type Props = {
  sections: ContentSection[];
  /** Node inserted after the section at this index (e.g. M4 inline CTA after section 2) */
  insertAfter?: { index: number; node: React.ReactNode };
  /** Extra content rendered inside a section, keyed by index (e.g. M12 sample letter) */
  slots?: Record<number, React.ReactNode>;
};

/** Renders ordered H2 body sections from content data */
export function ContentSections({ sections, insertAfter, slots }: Props) {
  return (
    <div className="prose">
      {sections.map((s, i) => (
        <Fragment key={s.heading}>
          <section className="content-section" aria-labelledby={anchorId(s.heading)}>
            <h2 id={anchorId(s.heading)}>{s.heading}</h2>
            {slots?.[i]}
            {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
            {s.list && (
              <ul>
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {s.steps && (
              <ol className="inline-steps">
                {s.steps.map((step) => (
                  <li key={step.title}>
                    <div>
                      <strong>{step.title}</strong>
                      {step.text}
                    </div>
                  </li>
                ))}
              </ol>
            )}
            {s.table && <ComparisonTable {...s.table} />}
            {s.callout && <Callout {...s.callout} />}
          </section>
          {insertAfter && insertAfter.index === i && insertAfter.node}
        </Fragment>
      ))}
    </div>
  );
}

export function sectionWords(sections: ContentSection[]) {
  return sections.flatMap((s) => [
    s.heading,
    ...(s.paragraphs ?? []),
    ...(s.list ?? []),
    ...(s.steps?.map((st) => `${st.title} ${st.text}`) ?? []),
  ]);
}
