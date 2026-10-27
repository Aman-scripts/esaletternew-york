"use client";

import { useState } from "react";
import { CircleCheckBig } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

/** Contact form (no PHI: users are told not to share health details) */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("/api/contact/", {
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
        <p className="apply__title text-h3">Message sent</p>
        <p className="apply__sub">We reply to most messages within one business day.</p>
      </div>
    );
  }

  return (
    <form className="form" method="post" action="/api/contact/" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="field">
          <label className="field__label text-body-normal-semibold" htmlFor="contact-name">
            Name
          </label>
          <input className="field__input" id="contact-name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label className="field__label text-body-normal-semibold" htmlFor="contact-email">
            Email
          </label>
          <input className="field__input" id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="field">
        <label className="field__label text-body-normal-semibold" htmlFor="contact-message">
          Message
        </label>
        <textarea className="field__textarea" id="contact-message" name="message" required />
        <span className="field__hint text-body-small">Please don&rsquo;t include medical or health information.</span>
      </div>
      {status === "error" && (
        <p className="field__error text-body-normal-semibold" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
      <button type="submit" className="btn btn--primary btn--lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
