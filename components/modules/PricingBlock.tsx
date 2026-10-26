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
        <h3 className="pricing__name">ESA Housing Letter</h3>
        <p className="pricing__price">
          {formatPrice(site.pricing.letter)} <small>one-time</small>
        </p>
        <ul className="pricing__list">
          {letterIncludes.map((item) => (
            <li key={item}>
              <Check className="check-icon" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <ButtonLink block />
        <p className="pricing__note">
          See our <Link href="/refund-policy/">Refund &amp; Money-Back Policy</Link>.
        </p>
      </div>
      <div className="pricing__card">
        <h3 className="pricing__name">Annual Renewal</h3>
        <p className="pricing__price">
          {formatPrice(site.pricing.renewal)} <small>per year</small>
        </p>
        <ul className="pricing__list">
          {renewalIncludes.map((item) => (
            <li key={item}>
              <Check className="check-icon" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <ButtonLink href="/renewal/" variant="outline" block>
          About renewal
        </ButtonLink>
      </div>
    </div>
  );
}
