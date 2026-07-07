import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Vendor+",
  description: "High-fidelity data solutions for frontier AI development.",
};

export default function Services() {
  return (
    <>
      {/* Головний заголовок сторінки */}
      <section className="container-page pb-16 pt-20 md:pb-20 md:pt-28">
        <Reveal>
          <span className="eyebrow">Our Capabilities</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            High-fidelity data solutions for frontier AI.
          </h1>
          <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-text-secondary">
            We provide the structured human intelligence pipelines required to train, tune, and evaluate world-class machine learning models.
          </p>
        </Reveal>
      </section>

      {/* 1. Секція: Data labeling */}
      <section id="data-labelling-&-annotation" className="container-page py-20 border-t border-surface-border scroll-mt-24">
        <Reveal>
          <span className="eyebrow">01 / Annotation</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-text-primary">
            Data labeling & annotation
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
            High-throughput, multi-stage labeling workflows with rigorous consensus checks. From detailed text taxonomies to high-precision metadata processing.
          </p>
          <div className="mt-8 card p-6 bg-surface/10 max-w-xl">
            <p className="text-xs font-mono text-gold">✓ Multi-stage validation workflows & custom guidelines</p>
          </div>
        </Reveal>
      </section>

      {/* 2. Секція: RLHF & evaluation */}
      <section id="rlhf-&-evaluation" className="container-page py-20 border-t border-surface-border scroll-mt-24">
        <Reveal>
          <span className="eyebrow">02 / Alignment</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-text-primary">
            RLHF & evaluation
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Reinforcement Learning from Human Feedback tailored by domain experts. Red-teaming, model ranking, and detailed multi-turn dialogue evaluation.
          </p>
          <div className="mt-8 card p-6 bg-surface/10 max-w-xl">
            <p className="text-xs font-mono text-gold">✓ Complex reasoning, codebase verification & safety alignment</p>
          </div>
        </Reveal>
      </section>

      {/* 3. Секція: Data collection */}
      <section id="data-collection" className="container-page py-20 border-t border-surface-border scroll-mt-24">
        <Reveal>
          <span className="eyebrow">03 / Sourcing</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-text-primary">
            Data collection
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Bespoke dataset generation under strict licensing and privacy frameworks. High-quality audio transcription, custom text corpora, and complex segmentation tasks.
          </p>
          <div className="mt-8 card p-6 bg-surface/10 max-w-xl">
            <p className="text-xs font-mono text-gold">✓ Optimized for large-scale audio and specialized data processing</p>
          </div>
        </Reveal>
      </section>

      {/* 4. Секція: Trust & safety review */}
      <section id="trust-&-safety-review" className="container-page py-20 border-t border-surface-border scroll-mt-24">
        <Reveal>
          <span className="eyebrow">04 / Moderation</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-text-primary">
            Trust & safety review
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Policy alignment, adversarial testing, and sensitive content moderation. Ensuring your frontier models remain secure, robust, and compliant with global safety standard frameworks.
          </p>
          <div className="mt-8 card p-6 bg-surface/10 max-w-xl">
            <p className="text-xs font-mono text-gold">✓ Built around enterprise security requirements and strict data protection</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}