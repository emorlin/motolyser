"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const inputId = useId();
  const messageId = useId();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    // TODO: wire to newsletter provider (e.g. via a Route Handler) once selected.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          Your email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="Your email address"
          aria-invalid={status === "error"}
          aria-describedby={messageId}
          className="min-h-11 flex-1 border border-border bg-surface px-4 text-sm text-text placeholder:text-text-muted focus:border-cyan"
        />
        <Button type="submit" variant="primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </Button>
      </div>
      <p id={messageId} role="status" className="mt-2 min-h-5 text-sm">
        {status === "success" && <span className="text-green">You&rsquo;re subscribed. Thanks.</span>}
        {status === "error" && <span className="text-warning">Enter a valid email address.</span>}
      </p>
    </form>
  );
}
