"use client";

import { useState } from "react";

const volumeOptions = ["< 10k items", "10k – 100k items", "100k – 1M items", "1M+ items"];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [volume, setVolume] = useState(volumeOptions[0]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      volume,
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setVolume(volumeOptions[0]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex h-full min-h-[420px] flex-col items-center justify-center p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40">
          <span className="font-display text-lg text-gold">✓</span>
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-text-primary">
          Request received
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
          A member of our solutions team will follow up within one business
          day with next steps for scoping your pilot.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-7 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Jordan Lee"
            className="rounded-lg border border-surface-border bg-ink px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-gold/60"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">
            Work email
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="jordan@company.com"
            className="rounded-lg border border-surface-border bg-ink px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-gold/60"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company name"
          className="rounded-lg border border-surface-border bg-ink px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-gold/60"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">
          Estimated monthly volume
        </span>
        <div className="flex flex-wrap gap-2">
          {volumeOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setVolume(opt)}
              className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                volume === opt
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-surface-border text-text-secondary hover:border-gold/40 hover:text-text-primary"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What are you labeling, and what does success look like?"
          className="resize-none rounded-lg border border-surface-border bg-ink px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-gold/60"
        />
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-tag-coral/40 bg-tag-coral/10 px-4 py-3 text-sm text-tag-coral">
          Something went wrong sending your request. Please try again, or
          email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
      >
        {status === "loading" ? "Sending…" : "Submit request"}
        {status !== "loading" && <span aria-hidden>→</span>}
      </button>
    </form>
  );
}
