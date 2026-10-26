export type Step = { title: string; text: string };

export const defaultSteps: Step[] = [
  {
    title: "Take the assessment",
    text: "Answer a short, private questionnaire about your housing and how an animal supports you.",
  },
  {
    title: "Licensed professional review",
    text: "Consult a mental health professional licensed in New York by secure video or phone.",
  },
  {
    title: "Receive your letter",
    text: "If you qualify, get a signed ESA letter as a PDF, often within 24 hours of your consultation.",
  },
];

/** M3 numbered process */
export function StepProcess({ steps = defaultSteps }: { steps?: Step[] }) {
  return (
    <ol className={steps.length >= 4 ? "steps steps--4" : "steps"}>
      {steps.map((step, i) => (
        <li key={step.title} className="step">
          <span className="step__num" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="step__title">{step.title}</h3>
          <p className="step__text">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
