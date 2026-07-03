import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    id: "labeling",
    title: "Data labeling & annotation",
    desc: "Structured labeling across every modality your models train on, executed by pods calibrated to your taxonomy.",
    bullets: [
      "2D & 3D bounding boxes, polygons, instance & semantic segmentation",
      "Keypoints, skeletal pose, and LiDAR point-cloud annotation",
      "Text classification, named entity recognition, and transcription",
      "Audio diarization, event tagging, and speech transcription",
    ],
    tags: ["bounding_box", "segmentation", "point_cloud", "transcription"],
  },
  {
    id: "rlhf",
    title: "RLHF & model evaluation",
    desc: "Human preference data and structured evaluation to align, benchmark, and red-team language and multimodal models.",
    bullets: [
      "Pairwise and Likert preference ranking for RLHF/DPO pipelines",
      "Rubric-based response grading across helpfulness, safety, tone",
      "Adversarial red-teaming and jailbreak probing",
      "Golden-set benchmark construction and regression tracking",
    ],
    tags: ["ranking", "rubric_eval", "red_team", "benchmark"],
  },
  {
    id: "collection",
    title: "Data collection & sourcing",
    desc: "Purpose-built datasets sourced through vetted contributor networks when off-the-shelf data doesn't exist.",
    bullets: [
      "Voice, image, and video capture programs across 40+ locales",
      "Synthetic and simulation-augmented data generation",
      "Survey and structured conversational data collection",
      "Consented, licensed sourcing with full chain-of-custody",
    ],
    tags: ["voice_capture", "synthetic", "multilingual", "licensed"],
  },
  {
    id: "safety",
    title: "Trust & safety review",
    desc: "Content moderation and policy annotation for platforms that need consistent, defensible judgment calls at scale.",
    bullets: [
      "Policy violation labeling across text, image, and video",
      "Escalation workflows for high-severity content",
      "Wellness-supported reviewer rotation and support programs",
      "Auditable decision trails for regulator and platform review",
    ],
    tags: ["content_policy", "escalation", "audit_trail"],
  },
  {
    id: "domain",
    title: "Domain expert annotation",
    desc: "Licensed professionals handle the annotation work that generalist crowds can't — with credentialed sign-off.",
    bullets: [
      "Clinician-reviewed radiology, pathology, and EHR annotation",
      "Attorney review for contract and legal-document datasets",
      "CFA/CPA-credentialed labeling for financial models",
      "Multi-rater adjudication for ambiguous, high-stakes cases",
    ],
    tags: ["clinical", "legal", "financial", "adjudication"],
  },
  {
    id: "qa",
    title: "QA & data operations",
    desc: "The measurement layer underneath every engagement — so accuracy is tracked, not assumed.",
    bullets: [
      "Inter-annotator agreement monitoring and consensus review",
      "Gold-standard spot checks injected into live queues",
      "Custom tooling integrations via API and webhook delivery",
      "Weekly accuracy reporting with root-cause error analysis",
    ],
    tags: ["iaa_score", "gold_set", "api_delivery"],
  },
];

export default function Services() {
  return (
    <>
      <section className="container-page pb-16 pt-20 md:pb-20 md:pt-28">
        <Reveal>
          <span className="eyebrow">Services</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Data operations built for models that can't afford to be wrong.
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-text-secondary">
            Six practice areas, one shared QA backbone. Mix and match across
            modalities as your model's needs shift from pretraining to
            post-training to production monitoring.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-28">
        <div className="flex flex-col divide-y divide-surface-border border-t border-surface-border">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i * 60, 240)}>
              <div
                id={s.id}
                className="grid gap-8 py-12 md:grid-cols-[280px_1fr] md:gap-16 md:py-16"
              >
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.14em] text-gold">
                    {String(i + 1).padStart(2, "0")} / 06
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-text-primary">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
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

                <ul className="grid content-start gap-4 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="card flex gap-3 p-5 text-sm leading-relaxed text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-surface-border bg-surface/30 py-24">
        <div className="container-page">
          <Reveal>
            <div className="card relative overflow-hidden p-10 text-center md:p-16">
              <div className="absolute inset-0 bg-noise-radial" />
              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Not sure which service fits?
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm text-text-secondary">
                  Send us a sample of your data and target taxonomy — we'll
                  scope the right mix and a pilot timeline within 48 hours.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link href="/contact" className="btn-primary">
                    Talk to our team
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
