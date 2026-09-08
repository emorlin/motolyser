"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/utils";

type FieldName = "name" | "email" | "subject" | "message" | "consent";
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "min-h-11 w-full border border-border-strong bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-cyan";

const FIELD_ORDER: FieldName[] = ["name", "email", "subject", "message", "consent"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement>>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: a field real users never see or fill. Bots that fill every
    // field trip this instead of a math-question captcha.
    if (data.get("company_website")) {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!email || !email.includes("@")) nextErrors.email = "Enter a valid email address.";
    if (!subject) nextErrors.subject = "Enter a subject.";
    if (!message) nextErrors.message = "Enter a message.";
    if (!consent) nextErrors.consent = "Please confirm you agree.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
      if (firstInvalid) fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    // TODO: wire to a Route Handler that sends the message (e.g. via Resend)
    // once an email provider is chosen.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="border border-green/40 bg-green/5 p-6" role="status">
        <p className="font-sans text-base font-bold text-text">Message sent</p>
        <p className="mt-1 text-sm text-text-muted">
          Thanks for reaching out. We&rsquo;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <p className="text-xs text-text-muted">All fields are required.</p>

      {status === "error" && errorCount > 0 && (
        <p role="alert" className="border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-warning">
          {errorCount === 1
            ? "1 field needs your attention below."
            : `${errorCount} fields need your attention below.`}
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          ref={(el) => {
            fieldRefs.current.name = el ?? undefined;
          }}
          className={cx(fieldClasses, errors.name && "border-warning")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-warning">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          ref={(el) => {
            fieldRefs.current.email = el ?? undefined;
          }}
          className={cx(fieldClasses, errors.email && "border-warning")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-warning">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          aria-required="true"
          ref={(el) => {
            fieldRefs.current.subject = el ?? undefined;
          }}
          className={cx(fieldClasses, errors.subject && "border-warning")}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-warning">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          ref={(el) => {
            fieldRefs.current.message = el ?? undefined;
          }}
          className={cx(fieldClasses, "resize-y", errors.message && "border-warning")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-warning">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-text-muted">
          <input
            type="checkbox"
            name="consent"
            required
            aria-required="true"
            ref={(el) => {
              fieldRefs.current.consent = el ?? undefined;
            }}
            className="mt-0.5 h-4 w-4 shrink-0 border border-border-strong bg-surface accent-green"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          I agree that my information may be used to respond to my enquiry.
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-xs text-warning">
            {errors.consent}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending…" : "Send message →"}
      </Button>
    </form>
  );
}
