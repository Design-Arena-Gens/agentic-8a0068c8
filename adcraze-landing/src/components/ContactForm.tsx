"use client";

import { useState } from "react";

const adSpendOptions = [
  "Under $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong. Please email team@adcraze.com and we&apos;ll follow up.");
    }
  };

  return (
    <div className="rounded-2xl bg-white p-10 shadow-glow ring-1 ring-white/40">
      <div className="mb-8">
        <p className="eyebrow text-sm font-semibold text-electric">Start Here</p>
        <h3 className="mt-2 font-heading text-3xl font-semibold text-navy">
          Tell us about the revenue targets you&apos;re chasing.
        </h3>
        <p className="mt-3 text-sm leading-6 text-navy/70">
          We respond within one business day. If we&apos;re not the right fit, we&apos;ll point you toward a partner who is.
        </p>
      </div>
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-navy" htmlFor="name">
            Name
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            className="h-11 rounded-lg border border-navy/15 bg-white px-3 text-sm text-navy placeholder:text-navy/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-navy" htmlFor="email">
            Work Email
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            className="h-11 rounded-lg border border-navy/15 bg-white px-3 text-sm text-navy placeholder:text-navy/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-navy" htmlFor="company">
            Company
          </label>
          <input
            required
            id="company"
            name="company"
            type="text"
            placeholder="Acme Co."
            className="h-11 rounded-lg border border-navy/15 bg-white px-3 text-sm text-navy placeholder:text-navy/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-navy" htmlFor="website">
            Website or Store URL
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            className="h-11 rounded-lg border border-navy/15 bg-white px-3 text-sm text-navy placeholder:text-navy/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-navy" htmlFor="monthlyAdSpend">
            Monthly Advertising Spend
          </label>
          <select
            required
            id="monthlyAdSpend"
            name="monthlyAdSpend"
            className="h-11 rounded-lg border border-navy/15 bg-white px-3 text-sm text-navy focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select your current spend
            </option>
            {adSpendOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-navy" htmlFor="primaryObjective">
            Primary Objective
          </label>
          <input
            required
            id="primaryObjective"
            name="primaryObjective"
            type="text"
            placeholder="e.g. Scale profitable ROAS to 5x"
            className="h-11 rounded-lg border border-navy/15 bg-white px-3 text-sm text-navy placeholder:text-navy/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
          />
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-navy" htmlFor="frustrations">
            What&apos;s not working today?
          </label>
          <textarea
            required
            id="frustrations"
            name="frustrations"
            rows={4}
            placeholder="Be specific-ad platforms, tracking, creative, landing pages, team resourcing, etc."
            className="rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm text-navy placeholder:text-navy/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
          />
        </div>
        <div className="rounded-lg border border-dashed border-electric/40 bg-electric/5 p-4 text-xs leading-5 text-navy/70">
          We take on clients where we see a path to profitable scale in the first 90 days. If we move forward together, our fee is funded directly from performance gains.
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex h-12 items-center justify-center rounded-full bg-electric font-semibold text-white transition hover:bg-electric/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:cursor-not-allowed disabled:bg-electric/60"
        >
          {status === "loading" ? "Submitting..." : "Request a Growth Blueprint"}
        </button>
        {status === "success" && (
          <p className="text-sm font-medium text-emerald-600">
            Thanks! A strategist will reach out within one business day.
          </p>
        )}
        {status === "error" && error && (
          <p className="text-sm font-medium text-blaze">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
