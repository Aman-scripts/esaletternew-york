import { Building2, Gavel, Landmark } from "lucide-react";
import type { CityInfo } from "@/lib/content/types";

/** M14 City info panel: local housing facts, local rules, nearby resources (CMS-editable per city) */
export function CityInfoPanel({ name, city }: { name: string; city: CityInfo }) {
  return (
    <section className="city-panel" aria-label={`${name} at a glance`}>
      <div>
        <p className="city-panel__title">
          <Building2 aria-hidden="true" /> {name} housing
        </p>
        <dl>
          <div>
            <dt>Housing mix</dt>
            <dd>{city.housingMix}</dd>
          </div>
          {city.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <p className="city-panel__title">
          <Gavel aria-hidden="true" /> Local rules
        </p>
        <ul>
          {city.localRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="city-panel__title">
          <Landmark aria-hidden="true" /> Local resources
        </p>
        <ul>
          {city.resources.map((r) => (
            <li key={r.name}>
              <strong>{r.name}</strong>
              {r.detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
