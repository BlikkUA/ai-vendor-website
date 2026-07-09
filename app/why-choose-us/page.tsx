import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why Choose Us — Vendor+",
  description: "High-fidelity data solutions for frontier AI development.",
};

const stats = [
  { value: "98%", label: "Median accuracy rate" },
  { value: "<24h", label: "Team ramp-up time" },
  { value: "50+", label: "Specialists per team" },
  { value: "200k+", label: "Records processed" },
];

const advantages = [
  {
    title: "Fast Team Deployment",
    desc: "We can assemble and onboard project teams quickly, reducing your time to production.",
    tags: ["rapid_onboarding", "agile_ops", "immediate_start"],
  },
  {
    title: "Quality Assurance",
    desc: "Every project includes structured QA workflows and continuous quality monitoring.",
    tags: ["multi_stage_qa", "precision_checks", "zero_drift"],
  },
  {
    title: "Multilingual Workforce",
    desc: "We support projects across multiple languages with experienced remote specialists.",
    tags: ["native_speakers", "global_coverage", "localization"],
  },
  {
    title: "Scalable Operations",
    desc: "Whether you need 5 or 100 specialists, our team can scale with your project.",
    tags: ["dynamic_scaling", "workforce_pods", "high_throughput"],
  },
  {
    title: "Dedicated Communication",
    desc: "Clear communication and regular progress updates throughout the entire project.",
    tags: ["weekly_reviews", "slack_sync", "transparent_reporting"],
  },
  {
    title: "Secure & Confidential",
    desc: "We follow confidentiality requirements and work under NDAs whenever required.",
    tags: ["enterprise_security", "nda_compliant", "data_privacy"],
  },
];

const trackRecord = [
  {
    step: "Enterprise Scale",
    detail: "Proven execution on massive data processing tasks, including projects with over 200,000 records managed seamlessly.",
  },
  {
    step: "Expert Networks",
    detail: "Direct access to curated pools of over 50 specialists tailored to unique annotation and transcription criteria.",
  },
  {
    step: "Tailored Tooling",
    detail: "We adapt dynamically to your custom software, guidelines, and inner workflows without platform lock-in.",
  },
  {
    step: "Continuous Feedback",
    detail: "Our structured pipeline ensures that edge cases are flagged early, keeping your training cycles completely clean.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      {/* Hero */}
      <section className="container-page relative pt-16 md:pt-24">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-sm bg-gold" />
              The Vendor+ Advantage
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem]">
              Built for Velocity. Trusted for Absolute Precision.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[15.5px] leading-relaxed text-text-secondary">
              Frontier AI development demands accurate training data and flexible human operations. We eliminate staffing bottlenecks and guideline confusion, allowing your engineering teams to focus entirely on model architecture.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Request a pilot
                <span aria-hidden>→</span>
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats (Metrics) */}
      <section className="container-page py-20 md:py-28">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="border-l border-surface-border pl-5">
                <div className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-text-secondary">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6 Advantages (Grid) */}
      <section className="container-page py-8 md:py-12">
        <Reveal>
          <span className="eyebrow">Core Strengths</span>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Why leading machine learning teams partner with us.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={i * 80}>
              <div className="card group h-full p-7 transition-all duration-300 hover:border-gold/40 hover:bg-surface-2">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {adv.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {adv.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {adv.tags.map((t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Track Record (Detailed Features) */}
      <section className="mt-24 border-t border-surface-border bg-surface/30 py-24 md:py-28">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Proven track record</span>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Enterprise reliability at any scale.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {trackRecord.map((tr, i) => (
              <Reveal key={tr.step} delay={i * 100}>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
                  <div className="absolute left-[2.5px] top-4 h-full w-px bg-surface-border md:hidden" />
                  <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 font-display text-lg font-semibold text-text-primary">
                    {tr.step}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {tr.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="container-page py-24 md:py-28">
        <Reveal>
          <div className="card mx-auto max-w-3xl p-10 text-center md:p-14">
            <p className="font-display text-xl leading-snug text-text-primary sm:text-2xl">
              "Vendor+ provides the rare combination of rapid resource deployment and bulletproof data alignment. They integrate directly into our iteration sprints seamlessly."
            </p>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary">
              VP of Operations · Data Infrastructure Partner
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA banner */}
      <section className="container-page pb-28">
        <Reveal>
          <div className="card relative overflow-hidden p-10 text-center md:p-16">
            <div className="absolute inset-0 bg-noise-radial" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to optimize your data operations?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-text-secondary">
                Let's scope a pilot batch tailored to your exact evaluation standards and taxonomy requirements.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Request a pilot
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/services" className="btn-secondary">
                  View all services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}