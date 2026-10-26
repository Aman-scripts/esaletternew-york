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
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-head__title" id={id}>
        {title}
      </h2>
      {lead && <p className="section-head__lead">{lead}</p>}
    </div>
  );
}
