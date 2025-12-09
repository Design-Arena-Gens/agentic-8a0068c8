import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const heroBullets = [
  "Profit-first campaign architecture across social, search, and programmatic",
  "Full-funnel dashboards that make every dollar accountable",
  "Creative and CRO sprints aligned to revenue, not vanity metrics",
];

const performanceStats = [
  { label: "Average ROAS lift", value: "37%" },
  { label: "Pipeline influenced", value: "$64M" },
  { label: "Paid media managed", value: "$28M" },
  { label: "Client retention", value: "92%" },
];

const processSteps = [
  {
    title: "Deep-dive revenue audit",
    description:
      "We unpack your offers, margins, creative, and data visibility to clarify the real levers for profitable scale.",
  },
  {
    title: "Performance blueprint",
    description:
      "Cross-channel plan with clear targets, budget allocation, offer sequencing, and testing roadmap for the next 90 days.",
  },
  {
    title: "Execution sprints",
    description:
      "Weekly campaign optimizations, creative refreshes, and landing page experiments-all prioritized by impact to revenue KPIs.",
  },
  {
    title: "Relentless accountability",
    description:
      "Transparent dashboards and founder-level communication so you know exactly what's happening and why.",
  },
];

const serviceHighlights = [
  {
    title: "Paid Social & Creative Studio",
    points: [
      "Meta, TikTok, and YouTube growth frameworks that balance scale with efficiency",
      "High-velocity creative testing backed by performance data",
      "UGC, motion graphics, and offer positioning sourced from real customer insights",
    ],
  },
  {
    title: "Paid Search & Shopping",
    points: [
      "Full-funnel Google Ads and Performance Max management",
      "Query sculpting and first-party data layering to eliminate wasted spend",
      "Landing page and CRO collaboration to boost conversion rates",
    ],
  },
  {
    title: "Analytics & Enablement",
    points: [
      "Server-side tracking implementation and attribution cleanup",
      "Custom Looker Studio dashboards built around CAC, LTV, and payback",
      "Revenue modeling to forecast scenarios before you deploy budget",
    ],
  },
];

const testimonials = [
  {
    quote:
      "They rebuilt our paid media engine in 60 days. We went from fighting to break even to printing cash at a 4.6x blended ROAS.",
    name: "Laura Chen",
    role: "Founder, Hydrate+",
  },
  {
    quote:
      "I finally have clarity on where the money is going. Their reporting is brutal in the best way possible-every dollar is accountable.",
    name: "Marcus Alvarez",
    role: "VP Growth, Steelcore Equipment",
  },
];

const faqs = [
  {
    question: "Who is the best fit for Adcraze?",
    answer:
      "We partner with growing e-commerce brands, lead-gen businesses, and B2B companies investing $10k-$250k per month and ready to scale responsibly.",
  },
  {
    question: "How does the performance-based model work?",
    answer:
      "We pair a baseline retainer that covers the growth team with an upside structure tied directly to revenue or qualified pipeline created. When you win, we win.",
  },
  {
    question: "Do you handle creative and landing pages?",
    answer:
      "Yes. Our in-house creative pod ships ad concepts weekly and we partner closely on CRO sprints to squeeze more revenue from every click.",
  },
  {
    question: "How soon can we launch?",
    answer:
      "Discovery to launch typically takes 3 weeks. The first 10 days focus on the growth audit, followed by implementation and go-live.",
  },
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-electric"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l2.293 2.293 6.543-6.543a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-[#f5f7ff] text-white">
      <header className="relative">
        <div className="absolute inset-0 -z-10 bg-grid-overlay bg-[length:28px_28px] opacity-20" aria-hidden />
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-electric/50 bg-electric/10 text-lg font-semibold text-electric">
              AC
            </span>
            <div>
              <p className="font-heading text-lg font-semibold tracking-wide">Adcraze</p>
              <p className="text-xs uppercase tracking-[0.28em] text-electric/80">Performance Advertising</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
            <Link href="#process" className="transition hover:text-white">
              Process
            </Link>
            <Link href="#services" className="transition hover:text-white">
              Capabilities
            </Link>
            <Link href="#proof" className="transition hover:text-white">
              Proof
            </Link>
            <Link href="#faqs" className="transition hover:text-white">
              FAQs
            </Link>
            <Link
              href="#consultation"
              className="rounded-full bg-blaze px-5 py-2 font-semibold text-white shadow-glow transition hover:bg-blaze/90"
            >
              Book Consultation
            </Link>
          </div>
        </nav>

        <section className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col justify-center">
            <span className="eyebrow text-sm font-semibold text-electric">Performance-Driven Growth Partner</span>
            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl">
              We only win when you win. Turn wasted ad spend into compounding revenue.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Adcraze partners with founders and marketing leaders who are done with guesswork. We build accountable paid media systems that turn every dollar into trackable growth.
            </p>
            <div className="mt-8 flex flex-col gap-4 text-sm text-white/80">
              {heroBullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <span className="mt-1">
                    <CheckIcon />
                  </span>
                  <p>{bullet}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#consultation"
                className="flex h-12 items-center justify-center rounded-full bg-electric px-7 text-sm font-semibold text-white shadow-glow transition hover:bg-electric/80"
              >
                Book a 20-Minute Strategy Call
              </Link>
              <Link
                href="#contact"
                className="flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
              >
                Get a Free Spend Audit
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4" id="proof">
              {performanceStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="contact">
            <ContactForm />
          </div>
        </section>
      </header>

      <main className="bg-white text-navy">
        <section className="border-t border-navy/5 bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl bg-navy px-8 py-10 text-white shadow-xl">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div>
                  <p className="eyebrow text-sm font-semibold text-electric">Case Study Snapshot</p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold">
                    $420k new revenue in 90 days for a DTC essentials brand.
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-white/70">
                    We restructured campaigns around contribution margin, plugged attribution gaps, and shipped 18 new creative concepts. Result: profitable scale while lowering blended CAC by 23%.
                  </p>
                  <ul className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      5.4x lift in Meta revenue at constant CAC
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      37% jump in Google Shopping conversion rate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      Attribution clarity across offline conversions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      Daily reporting tied to contribution margin
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric/70">What changed</p>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.28em] text-white/50">Before</dt>
                      <dd className="text-lg font-semibold">Bleeding spend with a 1.8x blended ROAS</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.28em] text-white/50">After</dt>
                      <dd className="text-lg font-semibold text-electric">4.2x blended ROAS with 32% spending efficiency</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.28em] text-white/50">Timeline</dt>
                      <dd className="text-lg font-semibold">90 days</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-sm font-semibold text-electric">Capabilities</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-navy">
                The growth pod that plugs into your team and delivers accountable scale.
              </h2>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {serviceHighlights.map((service) => (
                <div key={service.title} className="rounded-3xl border border-navy/10 bg-[#f8faff] p-8 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-navy">{service.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-navy/80">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1">
                          <CheckIcon />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#f5f7ff] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-sm font-semibold text-electric">Process</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-navy">
                A proven operating rhythm that compounds results.
              </h2>
              <p className="mt-3 text-sm leading-6 text-navy/70">
                No black boxes. No mystery optimizations. You get full visibility into the strategies, experiments, and numbers powering growth.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-electric/80">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-3 font-heading text-xl font-semibold text-navy">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-navy/70">{step.description}</p>
                    </div>
                    <span className="ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-electric/10 text-base font-semibold text-electric">
                      {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="eyebrow text-sm font-semibold text-electric">What Clients Say</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold text-navy">
                  Straight talk. Transparent numbers. Relentless execution.
                </h2>
                <div className="mt-10 grid gap-8">
                  {testimonials.map((testimonial) => (
                    <blockquote
                      key={testimonial.name}
                      className="rounded-3xl border border-navy/10 bg-[#f8faff] p-8 text-sm leading-6 text-navy/80"
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                      <footer className="mt-5 text-sm font-semibold text-navy">
                        {testimonial.name} · <span className="font-normal text-navy/70">{testimonial.role}</span>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-navy/10 bg-navy p-8 text-white">
                <p className="eyebrow text-sm font-semibold text-electric">Why Adcraze</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold">Your growth partner, not just another vendor.</h3>
                <ul className="mt-6 space-y-4 text-sm leading-6 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    Weekly growth huddles focused on revenue-critical metrics, not vanity updates.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    Shared dashboards that tie ad spend to contribution margin, inventory, and LTV.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    Creative, media buying, and CRO specialists aligned under one performance pod.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    Performance guarantee: if we don&apos;t hit agreed-on targets, you don&apos;t pay the performance fee.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="consultation" className="bg-[#0f254a] py-20 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow text-sm font-semibold text-electric">Consultation</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold">
                  Reserve a 1:1 strategy session with a senior growth lead.
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  We&apos;ll audit your existing accounts live, highlight quick wins, and map the path to profitable scaling. No fluff, just data-backed action items you can implement immediately.
                </p>
                <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
                  <div className="flex items-start gap-3">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    Walk through the exact levers to improve ROAS, CAC, or pipeline velocity
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    Get clarity on data gaps and tracking issues kneecapping performance
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    Understand how our performance fee structures align incentives
                  </div>
                </div>
                <Link
                  href="https://cal.com/adcraze/performance-lab"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-blaze px-6 text-sm font-semibold text-white shadow-lg shadow-blaze/40 transition hover:bg-blaze/90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Available Times
                </Link>
              </div>
              <div className="min-h-[360px] overflow-hidden rounded-3xl border border-white/20 bg-white/5 p-4 backdrop-blur">
                <iframe
                  title="Adcraze Consultation Calendar"
                  src="https://cal.com/embed/adcraze/performance-lab?hide_landing_page_details=1"
                  className="h-full w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-sm font-semibold text-electric">FAQs</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-navy">What growth leaders ask before we partner.</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-navy/10 bg-[#f8faff] p-6">
                  <h3 className="font-heading text-lg font-semibold text-navy">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-navy/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-navy-900/95 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold">Adcraze</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/60">Performance-Based Advertising</p>
          </div>
          <div className="flex flex-col gap-1 text-xs text-white/60 sm:text-right">
            <p>team@adcraze.com</p>
            <p>San Diego · Serving clients globally</p>
            <p>© {new Date().getFullYear()} Adcraze. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
