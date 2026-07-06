import Link from "next/link";
import AnnotationDemo from "@/components/AnnotationDemo";
import TagMarquee from "@/components/TagMarquee";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "2M+", label: "Labels delivered" },
  { value: "98%", label: "Median label accuracy" },
  { value: "60+", label: "Domain expert specialties" },
  { value: "<24h", label: "Pilot turnaround" },
];

const services = [
  {
    title: "Data labeling",
    desc: "Image, video, text, audio, and 3D annotation with task-specific tooling and calibrated reviewers.",
    tags: ["bounding_box", "segmentation", "3d_cuboid"],
  },
  {
    title: "RLHF & model evaluation",
    desc: "Human preference ranking, red-teaming, and structured evals to steer and benchmark your models.",
    tags: ["ranking", "red_team", "rubric_eval"],
  },
  {
    title: "Data collection & sourcing",
    desc: "Purpose-built datasets gathered through vetted contributor networks and field capture programs.",
    tags: ["voice", "image_capture", "synthetic"],
  },
  {
    title: "Domain expert review",
    desc: "Licensed clinicians, lawyers, and analysts annotate and adjudicate high-stakes, regulated data.",
    tags: ["clinical", "legal", "financial"],
  },
];

const process = [
  {
    step: "Scope",
    detail: "We map your taxonomy, edge cases, and quality bar before a single label is drawn.",
  },
  {
    step: "Pilot",
    detail: "A small, fast batch validates guidelines and tooling against your ground truth.",
  },
  {
    step: "Scale",
    detail: "Calibrated workforce pods ramp with automated QA and inter-annotator agreement checks.",
  },
  {
    step: "Refine",
    detail: "Weekly accuracy reviews feed back into guidelines as your model's needs evolve.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-page relative pt-16 md:pt-24">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-10">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-sm bg-gold" />
                Human-in-the-loop data infrastructure
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem]">
                The ground truth layer for frontier AI.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-text-secondary">
                Vendor+ pairs calibrated human expertise with purpose-built
                tooling to label, evaluate, and review the data your models
                learn from — at the accuracy regulated and frontier teams
                require.
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
            <Reveal delay={320}>
              <div className="mt-10 flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
                <span>Trusted by ML teams at</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-text-tertiary">
                {["Appen", "Data Plus", "LOFT", "Kuoni Tumlare", ""].map(
                  (name) => (
                    <span
                      key={name}
                      className="font-display text-sm font-medium tracking-tight opacity-70 transition-opacity hover:opacity-100"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <AnnotationDemo />
          </Reveal>
        </div>
      </section>

      <div className="mt-20 md:mt-28">
        <TagMarquee />
      </div>

      {/* Stats */}
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

      {/* Services */}
      <section className="container-page py-8 md:py-12">
        <Reveal>
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Every modality. One quality bar.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="card group h-full p-7 transition-all duration-300 hover:border-gold/40 hover:bg-surface-2">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {s.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Link
            href="/services"
            className="mt-10 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            View all services
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      {/* Process */}
      <section className="mt-24 border-t border-surface-border bg-surface/30 py-24 md:py-28">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">How it runs</span>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              A pipeline built for iteration, not a one-off batch.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
                  <div className="absolute left-[2.5px] top-4 h-full w-px bg-surface-border md:hidden" />
                  <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 font-display text-lg font-semibold text-text-primary">
                    {p.step}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {p.detail}
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
              "Vendor+'s reviewers caught labeling drift our own QA
              missed for weeks. Our eval accuracy moved more in one sprint
              than the previous quarter."
            </p>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary">
              Head of ML Data · Argus AI
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
                Bring your hardest labeling problem.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-text-secondary">
                Most pilots ship a scoped, quality-audited batch within a
                week — no long-term contract required to start.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Request a pilot
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn about us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
