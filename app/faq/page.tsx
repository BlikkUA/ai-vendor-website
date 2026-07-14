import Link from "next/link";
import Reveal from "@/components/Reveal";

const faqCategories = [
  {
    category: "Onboarding & Teams",
    description: "How we spin up pods and scale operations.",
    items: [
      {
        question: "How fast can you onboard a new data project?",
        answer: "Most pilots ship within 24 hours. We map your taxonomy, set up the initial workforce pods, and validate guidelines against a small test batch to ensure alignment before scaling.",
      },
      {
        question: "Do you have a minimum project size or commitment?",
        answer: "No. We can always start with something smaller so you can see what we're capable of and how well we understand the rules before we begin a long-term project.",
      },
      {
        question: "How are your remote project teams structured?",
        answer: "We deploy calibrated workforce pods managed by dedicated delivery leads. This structure ensures strict adherence to submission rules, eliminates management overhead on your side, and keeps throughput consistent.",
      },
    ],
  },
  {
    category: "Quality & Modalities",
    description: "Our approach to precision across various data types.",
    items: [
      {
        question: "What data modalities do your teams support?",
        answer: "We support a wide array of high-stakes modalities: multi-turn LLM roleplay, RLHF preference ranking, text transcription, audio/video segmentation, 3D cuboid mapping, and custom image pixel-labeling.",
      },
      {
        question: "How do you maintain high data accuracy and quality control?",
        answer: "We use a multi-stage verification guideline. Every asset passes through automated validation scripts, inter-annotator agreement (IAA) metrics, and senior QA reviewers who adjudicate edge cases before final delivery.",
      },
      {
        question: "How do you handle updating guidelines mid-project?",
        answer: "Data operations are iterative. When edge cases appear, our team recalibrates guidelines within 12 hours, updates the workforce training modules, and runs delta-reviews on already processed assets if necessary.",
      },
    ],
  },
  {
    category: "Security & Expertise",
    description: "Confidentiality, compliance, and domain knowledge.",
    items: [
      {
        question: "Can your teams handle specialized domains like legal or medical data?",
        answer: "Yes. We have a dedicated network of vetted contributors, including licensed clinicians, legal analysts, and tech specialists who are explicitly trained to handle complex, regulated, or high-stakes datasets.",
      },
      {
        question: "How do you handle data security and confidentiality?",
        answer: "Security is non-negotiable. All team members sign strict NDAs, and operations are conducted within secure, access-controlled data environments or directly inside your proprietary tooling via secure access integrations.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="relative isolate min-h-screen bg-[#0B0D10] text-text-primary py-20 md:py-28 overflow-hidden">
      {/* Декоративне фонове світіння */}
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="container-page">
        
        {/* Header Section */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-sm bg-gold" />
              Operations Knowledge Base
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.2rem]">
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-text-secondary max-w-xl">
              Everything you need to know about our human-in-the-loop infrastructure, multi-stage quality control pipelines, and scaling workflows.
            </p>
          </Reveal>
        </div>

        {/* Categories & Accordions Grid */}
        <div className="mt-20 space-y-16">
          {faqCategories.map((cat, catIdx) => (
            <div key={catIdx} className="grid gap-8 lg:grid-cols-3 border-t border-surface-border/60 pt-10">
              
              {/* Назва категорії зліва */}
              <div className="lg:col-span-1">
                <Reveal delay={100}>
                  <h2 className="font-display text-xl font-semibold text-text-primary">{cat.category}</h2>
                  <p className="mt-2 text-sm text-text-tertiary max-w-xs">{cat.description}</p>
                </Reveal>
              </div>

              {/* Список питань для цієї категорії справа */}
              <div className="lg:col-span-2 space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <Reveal key={itemIdx} delay={150 + itemIdx * 50}>
                    <details className="group card border border-surface-border bg-surface/10 rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden open:border-gold/20 open:bg-surface/20 transition-all duration-300">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 text-text-primary focus:outline-none">
                        <h3 className="font-display text-base font-semibold group-hover:text-gold transition-colors duration-200">
                          {item.question}
                        </h3>
                        <span className="relative size-5 shrink-0 ml-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-all duration-200 text-text-tertiary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-all duration-200 text-gold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-sm leading-relaxed text-text-secondary border-t border-surface-border/40 pt-4">
                        {item.answer}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Custom CTA Box */}
        <Reveal delay={400}>
          <div className="card mt-24 p-8 md:p-12 text-center border border-surface-border bg-gradient-to-b from-surface/20 to-surface/5 rounded-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 -z-10 h-40 w-40 rounded-full bg-gold/5 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="font-display text-xl font-semibold">Have a custom workflow scenario?</h3>
            <p className="mt-3 text-sm text-text-secondary max-w-lg mx-auto leading-relaxed">
              Whether you need daily processing of media assets, specific transcription guidelines, or structured evaluation rubrics — we can build a calibrated team model for your pipeline.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary group inline-flex items-center gap-1.5">
                Contact our ops team
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}