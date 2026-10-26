"use client";

import Link from "next/link";
import { useState } from "react";
import { CircleCheckBig, Lock } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const housingOptions = [
  "Renting an apartment",
  "Co-op or condo",
  "NYCHA or public housing",
  "College housing",
  "Renting a house",
  "Other",
];

const animalOptions = ["Dog", "Cat", "Other animal"];

/**
 * Home-page application form (#appForm). Spec 2 / 10.4:
 * submitted by POST over HTTPS, never via URL parameters, and no field values
 * are sent to analytics. Confirmation is an in-page state (no Thank You page).
 */
export function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("/api/apply/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success__icon">
          <CircleCheckBig aria-hidden="true" />
        </span>
        <p className="apply__title text-h3">You&rsquo;re on your way</p>
        <p className="apply__sub">
          Check your email for a secure link to complete your assessment and schedule your
          consultation with a New York-licensed professional.
        </p>
      </div>
    );
  }

  return (
    <form className="form" method="post" action="/api/apply/" onSubmit={handleSubmit} noValidate={false}>
      <div className="form__row">
        <div className="field">
          <label className="field__label text-body-small-semibold" htmlFor="firstName">
            First name
          </label>
          <input className="field__input" id="firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div className="field">
          <label className="field__label text-body-small-semibold" htmlFor="lastName">
            Last name
          </label>
          <input className="field__input" id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label className="field__label text-body-small-semibold" htmlFor="email">
            Email
          </label>
          <input className="field__input" id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label className="field__label text-body-small-semibold" htmlFor="phone">
            Phone <span className="field__hint text-body-small">(optional)</span>
          </label>
          <input className="field__input" id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label className="field__label text-body-small-semibold" htmlFor="housing">
            Your housing
          </label>
          <select className="field__select" id="housing" name="housing" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {housingOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label className="field__label text-body-small-semibold" htmlFor="animal">
            Your animal
          </label>
          <select className="field__select" id="animal" name="animal" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {animalOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <label className="checkbox text-body-small">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I am 18 or older, located in New York, and agree to the <Link href="/terms/">Terms</Link>{" "}
          and <Link href="/privacy-policy/">Privacy Policy</Link>. I understand a licensed
          professional decides whether an ESA letter is appropriate.
        </span>
      </label>

      {status === "error" && (
        <p className="field__error text-body-small-semibold" role="alert">
          Something went wrong. Please try again or email us.
        </p>
      )}

      <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Start My Assessment"}
      </button>
      <p className="form__secure text-body-small">
        <Lock aria-hidden="true" /> Encrypted submission. We never share your health information.
      </p>
    </form>
  );
}
