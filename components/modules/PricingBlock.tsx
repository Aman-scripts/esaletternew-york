import Link from "next/link";
import { Check } from "lucide-react";
import { formatPrice, site } from "@/lib/site";
import { ButtonLink } from "../common/ButtonLink";

const letterIncludes = [
  "Online assessment",
  "Telehealth consultation with a NY-licensed professional",
  "Signed ESA housing letter (PDF) if you qualify",
  "Landlord verification support",
  "Full refund if you don't qualify",
];

const renewalIncludes = [
  "Re-evaluation with a licensed professional",
  "Newly dated letter if still appropriate",
  "Landlord verification support",
];

/** M13 Pricing block: price, inclusions, refund policy, CTA */
export function PricingBlock() {
  return (
    <div className="pricing">
      <div className="pricing__card pricing__card--featured">
        <h3 className="pricing__name text-h3">ESA Housing Letter</h3>
        <h3 className="pricing__price text-h3">
          {formatPrice(site.pricing.letter)} <small className="pricing__period text-body-normal">one-time</small>
        </h3>
        <ul className="pricing__list">
          {letterIncludes.map((item) => (
            <li key={item}>
              <Check className="check-icon" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="pricing__footer">
          <ButtonLink block />
          <p className="pricing__note text-body-small">
            See our <Link href="/refund-policy/">Refund &amp; Money-Back Policy</Link>.
          </p>
        </div>
      </div>
      <div className="pricing__card">
        <h3 className="pricing__name text-h3">Annual Renewal</h3>
        <h3 className="pricing__price text-h3">
          {formatPrice(site.pricing.renewal)} <small className="pricing__period text-body-normal">per year</small>
        </h3>
        <ul className="pricing__list">
          {renewalIncludes.map((item) => (
            <li key={item}>
              <Check className="check-icon" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <div className="pricing__footer">
          <ButtonLink href="/renewal/" variant="outline" block>
            About renewal
          </ButtonLink>
          <p className="pricing__note pricing__note--spacer text-body-small" aria-hidden="true">
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}
