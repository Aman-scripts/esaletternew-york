type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  id?: string;
};

export function SectionHead({ eyebrow, title, lead, center = false, id }: Props) {
  return (
    <div className={center ? "section-head section-head--center" : "section-head"}>
      {eyebrow && <span className="eyebrow text-body-small-semibold">{eyebrow}</span>}
      <h2 className="section-head__title text-h2" id={id}>
        {title}
      </h2>
      {lead && <p className="section-head__lead text-body-large">{lead}</p>}
    </div>
  );
}
