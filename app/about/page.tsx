import Link from "next/link";
import Reveal from "@/components/Reveal";

const values = [
  {
    title: "Accuracy over speed",
    desc: "We'd rather ship a smaller, correct batch than a fast, wrong one. Throughput follows quality, not the reverse.",
  },
  {
    title: "Show the work",
    desc: "Every deliverable comes with agreement scores and error breakdowns — quality you can audit, not just trust.",
  },
  {
    title: "Reviewers are the product",
    desc: "We invest in training, fair pay, and retention because consistent judgment comes from continuity, not turnover.",
  },
  {
    title: "Narrow scope, ramp fast",
    desc: "We'd rather nail one taxonomy in a week than half-solve five. Depth first, breadth after.",
  },
];

const timeline = [
  { year: "2019", detail: "Founded by ex-autonomous vehicle perception engineers frustrated with inconsistent label quality." },
  { year: "2021", detail: "Crossed 500M labels delivered; opened domain-expert practice for clinical and legal review." },
  { year: "2023", detail: "Launched RLHF and model evaluation practice for frontier language model teams." },
  { year: "2026", detail: "Operating reviewer pods across 30+ countries, serving AV, health, finance, and generative AI teams." },
];

const leadership = [
  { name: "Elena Marsh", role: "Co-founder & CEO", bg: "Ex-Cruise, perception systems" },
  { name: "Daniyar Suleimenov", role: "Co-founder & CTO", bg: "Ex-Scale AI, infra & tooling" },
  { name: "Priya Nathan", role: "Head of Quality", bg: "Ex-FDA, clinical data standards" },
  { name: "Marcus Webb", role: "Head of Workforce", bg: "Ex-Appen, global operations" },
];

export default function About() {
  return (
    <>
      <section className="container-page pb-16 pt-20 md:pb-20 md:pt-28">
        <Reveal>
          <span className="eyebrow">About Vendor+</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            We started this because bad labels were quietly wrecking good models.
          </h1>
          <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-text-secondary">
            Vendor+ was founded in 2019 by a team of perception engineers
            who kept tracing model regressions back to the same root cause:
            inconsistent, unaudited labeling. We built the company we wished
            existed — one where quality is measured, not promised.
          </p>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="container-page pb-24">
        <div className="grid gap-6 border-t border-surface-border pt-10 md:grid-cols-4 md:gap-4">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 90}>
              <div className="border-l border-surface-border pl-5">
                <div className="font-mono text-sm text-gold">{t.year}</div>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {t.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-surface-border bg-surface/30 py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">How we operate</span>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Four principles, held even when they slow us down.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card h-full p-7">
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container-page py-24">
        <Reveal>
          <span className="eyebrow">Leadership</span>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Built by people who've felt the cost of bad data.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 font-display text-sm font-semibold text-gold">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="mt-4 font-display text-[15px] font-semibold text-text-primary">
                  {p.name}
                </div>
                <div className="mt-1 text-sm text-gold">{p.role}</div>
                <div className="mt-2 text-xs leading-relaxed text-text-tertiary">
                  {p.bg}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-28">
        <Reveal>
          <div className="card relative overflow-hidden p-10 text-center md:p-16">
            <div className="absolute inset-0 bg-noise-radial" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                We're hiring reviewers and engineers.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-text-secondary">
                If you care about getting the details right, we'd like to
                meet you — wherever you're based.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn-primary">
                  View open roles
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
