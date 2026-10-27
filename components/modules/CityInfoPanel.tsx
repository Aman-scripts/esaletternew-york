import { Building2, Gavel, Landmark } from "lucide-react";
import type { CityInfo } from "@/lib/content/types";

/** M14 City info panel: local housing facts, local rules, nearby resources (CMS-editable per city) */
export function CityInfoPanel({ name, city }: { name: string; city: CityInfo }) {
  return (
    <section className="city-panel" aria-label={`${name} at a glance`}>
      <div className="city-panel__col">
        <p className="city-panel__title text-h4">
          <span className="city-panel__icon">
            <Building2 aria-hidden="true" />
          </span>
          {name} housing
        </p>
        <dl>
          <div>
            <dt className="text-body-small-semibold">Housing mix</dt>
            <dd>{city.housingMix}</dd>
          </div>
          {city.facts.map((f) => (
            <div key={f.label}>
              <dt className="text-body-small-semibold">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="city-panel__col">
        <p className="city-panel__title text-h4">
          <span className="city-panel__icon">
            <Gavel aria-hidden="true" />
          </span>
          Local rules
        </p>
        <ul className="city-panel__rules">
          {city.localRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
      <div className="city-panel__col">
        <p className="city-panel__title text-h4">
          <span className="city-panel__icon">
            <Landmark aria-hidden="true" />
          </span>
          Local resources
        </p>
        <ul className="city-panel__resources">
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
