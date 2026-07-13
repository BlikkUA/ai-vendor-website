import Link from "next/link";
import Reveal from "@/components/Reveal";

const industries = [
  {
    title: "Autonomous systems",
    desc: "Frame-accurate perception labeling for driving, drones, and robotics — synced across camera, LiDAR, and radar.",
    stat: "",
    tags: ["3d_cuboid", "sensor_fusion", "tracking"],
  },
  {
    title: "Healthcare & life sciences",
    desc: "Clinician-reviewed annotation for imaging, EHR, and clinical trial data under HIPAA-aligned handling.",
    stat: "",
    tags: ["radiology", "pathology", "hipaa"],
  },
  {
    title: "Generative AI & LLMs",
    desc: "Preference data, red-teaming, and rubric evaluation to align foundation and fine-tuned models.",
    stat: "",
    tags: ["rlhf", "red_team", "eval_rubric"],
  },
  {
    title: "Robotics",
    desc: "Demonstration data, action labeling, and simulation review for manipulation and navigation policies.",
    stat: "",
    tags: ["teleop", "action_labels", "sim2real"],
  },
  {
    title: "Financial services",
    desc: "CFA-reviewed document and transaction annotation for fraud detection, underwriting, and forecasting models.",
    stat: "",
    tags: ["document_ai", "fraud", "kyc"],
  },
  {
    title: "Retail & e-commerce",
    desc: "Catalog tagging, visual search training data, and review-sentiment labeling at seasonal scale.",
    stat: "",
    tags: ["catalog", "visual_search", "sentiment"],
  },
  {
    title: "Government & public sector",
    desc: "Cleared reviewer pools and on-premise deployment options for sensitive geospatial and language datasets.",
    stat: "",
    tags: ["geospatial", "cleared_reviewers", "on_prem"],
  },
];

export default function Industries() {
  return (
    <>
      <section className="container-page pb-16 pt-20 md:pb-20 md:pt-28">
        <Reveal>
          <span className="eyebrow">Industries</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for the constraints of your industry, not around them.
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-text-secondary">
            Every sector has a different definition of "correct." We staff,
            train, and audit against yours.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={Math.min(i * 60, 300)}>
              <div className="card group flex h-full flex-col justify-between p-7 transition-all duration-300 hover:border-gold/40 hover:bg-surface-2">
                <div>
                  <h2 className="font-display text-lg font-semibold text-text-primary">
                    {ind.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {ind.desc}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="font-mono text-xs uppercase tracking-[0.14em] text-gold">
                    {ind.stat}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ind.tags.map((t) => (
                      <span key={t} className="tag-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-surface-border bg-surface/30 py-24">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Regulated data</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Compliance isn't a checkbox. It's built into the workflow.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-text-secondary">
              From HIPAA-aligned clinical review to cleared reviewer pools
              for public-sector data, sensitive engagements route through
              access-controlled tooling with full audit trails — not a
              generic crowd queue.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Discuss your requirements
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card p-8">
              <ul className="flex flex-col divide-y divide-surface-border">
                {[
                  ["SOC 2 Type II", "Independently audited annually"],
                  ["ISO 27001", "Certified information security management"],
                  ["HIPAA-aligned workflows", "For clinical and PHI-adjacent data"],
                  ["On-prem & air-gapped", "Available for government engagements"],
                ].map(([title, detail]) => (
                  <li key={title} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="text-sm font-medium text-text-primary">{title}</span>
                    <span className="text-right text-xs text-text-tertiary">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
