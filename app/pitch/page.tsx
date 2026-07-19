import React from 'react';
import Link from 'next/link';

// Імпортуємо твої компоненти та форму зв'язку
import Reveal from "@/components/Reveal";
import ContactSection from '@/app/contact/page'; 

export const metadata = {
  title: 'Vendor+ | B2B Capability Proposal',
  description: 'High-fidelity human data operations built to power advanced machine learning and AI modeling workflows.',
  robots: {
    index: false,
    follow: true,
  },
};

interface Step {
  number: string;
  role: string;
  title: string;
  desc: string;
  input: string;
  output: string;
}

const pipelineSteps: Step[] = [
  {
    number: "01",
    role: "Client Ingest",
    title: "Client (Initiation)",
    desc: "The project launchpad. You provide raw source data (audio, video, text, 3D assets), define technical specifications, establish edge cases, and set the target accuracy bar.",
    input: "Raw media assets, task specifications, and initial reference guidelines.",
    output: "Approved statement of work (SOW) and defined scope for the initial batch.",
  },
  {
    number: "02",
    role: "Project Manager Setup",
    title: "Personal Vendor (Setup)",
    desc: "Your dedicated Account/Project Manager analyzes specifications under a microscope, structures workflows, creates interactive guidelines for workers, configures annotation platforms, and runs a small pilot sprint.",
    input: "Client specifications and custom validation samples.",
    output: "Calibrated workforce guidelines, platform configurations, and task queues.",
  },
  {
    number: "03",
    role: "Calibrated Workforce",
    title: "Workforce Processing",
    desc: "Certified remote specialists (annotators, transcribers, editors) process your tasks in parallel, working within secure environments with strict focus on guidelines, speed, and raw quality standards.",
    input: "Granular step-by-step instructions and assigned task packages.",
    output: "Initial draft output of processed assets (Version 1.0 Draft).",
  },
  {
    number: "04",
    role: "QA Manager (100% Review)",
    title: "Detailed QA Review",
    desc: "A dedicated QA Manager performs a comprehensive, 100% manual review of every single delivered task. They fix minor spelling, grammar, or labeling mistakes and immediately reject faulty files back to workers for revision.",
    input: "Raw draft output (V1.0) received from the processing team.",
    output: "Cleaned, high-precision structured data (Version 2.0 QA Verified).",
  },
  {
    number: "05",
    role: "QA Team Lead (Spot-Check)",
    title: "Surface QA Auditing",
    desc: "The QA Team Lead performs a random, statistically significant audit (10–20% of the batch). This stage verifies the QA managers' work, prevents subjective guideline drift, and certifies the overall accuracy score.",
    input: "100% verified and corrected dataset from the QA managers.",
    output: "Validated and audited batch with certified accuracy scores.",
  },
  {
    number: "06",
    role: "Vendor Final Sign-Off",
    title: "Vendor Final Validation",
    desc: "Your Personal Vendor conducts final acceptance testing (Acceptance QA). They verify file schemas (JSON, CSV, custom APIs), test metadata mapping, randomly inspect critical edge-case files, and compile a delivery report.",
    input: "Audited and certified data ready for export packaging.",
    output: "Final structured release-ready package and analytical performance report.",
  },
  {
    number: "07",
    role: "Dataset Release",
    title: "Client Delivery & Loop",
    desc: "You receive a premium-tier dataset ready for direct training pipelines. Any feedback or adjustments from your team are automatically looped back to update instructions for the next operational batch.",
    input: "Premium, multi-pass verified release-ready dataset.",
    output: "Successful AI model training and optimized ruleset for Batch #2.",
  },
];

export default function PitchPage() {
  return (
    // overflow-x-hidden ліквідує будь-яке горизонтальне зміщення та зсув сторінки вліво на смартфонах
    <div className="relative min-h-screen pb-24 overflow-x-hidden selection:bg-gold selection:text-black bg-background">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER SECTION */}
      <header className="container-page relative pt-16 md:pt-24 pb-12 border-b border-surface-border">
        <div className="grid items-end gap-10 md:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-sm bg-gold" />
                B2B Capability Proposal
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem]">
                Vendor<span className="text-gold">+</span> Data Operations
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-text-secondary">
                High-fidelity human-in-the-loop data operations built to power advanced machine learning, AI modeling, and high-volume enterprise pipelines.
              </p>
            </Reveal>
          </div>
          
          {/* INFO CARD */}
          <Reveal delay={240}>
            <div className="card p-6 text-sm space-y-3.5 max-w-sm md:justify-self-end">
              <div className="flex justify-between gap-4">
                <span className="text-text-tertiary font-mono uppercase text-[10px] tracking-wider">Platform</span> 
                <Link href="/" className="text-text-primary font-semibold hover:text-gold transition-colors">
                  vendor-plus.com
                </Link>
              </div>
              <div className="h-px bg-surface-border" />
              <div className="flex justify-between gap-4">
                <span className="text-text-tertiary font-mono uppercase text-[10px] tracking-wider">Contact</span> 
                <a href="mailto:info@vendor-plus.com" className="text-gold font-mono hover:underline transition-colors">
                  info@vendor-plus.com
                </a>
              </div>
              <div className="h-px bg-surface-border" />
              <div className="flex justify-between gap-4">
                <span className="text-text-tertiary font-mono uppercase text-[10px] tracking-wider">Operations</span> 
                <span className="text-text-secondary font-medium">Lviv, Ukraine • Remote</span>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* EXECUTIVE SUMMARY */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">Executive Summary</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Ground Truth Built on Human Rigor
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-text-secondary">
              Vendor+ delivers rigorous, human-in-the-loop data operations. We specialize in transforming massive, unstructured audio, video, and text pipelines into high-accuracy ground truth datasets tailored strictly to your proprietary guidelines and taxonomy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES / CAPABILITIES */}
      <section className="container-page py-8 md:py-12 border-t border-surface-border">
        <Reveal>
          <span className="eyebrow">Our Capabilities</span>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Rigorous Data Operations at Scale
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Reveal delay={80}>
            <div className="card group h-full p-7 transition-all duration-300 hover:border-gold/40 hover:bg-surface-2">
              <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-4">01 / Transcription</div>
              <h3 className="font-display text-lg font-semibold text-text-primary">
                High-Volume Audio & Video Transcription
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Verbatim or clean-read transcription executed across complex, multi-speaker environments with multi-layered, rigorous manager verification.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card group h-full p-7 transition-all duration-300 hover:border-gold/40 hover:bg-surface-2">
              <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-4">02 / Segmentation</div>
              <h3 className="font-display text-lg font-semibold text-text-primary">
                Media Asset Segmentation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Precise cutting, micro-clipping, metadata tagging, and partitioning of massive media catalogs into structured, machine-learnable datasets.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="card group h-full p-7 transition-all duration-300 hover:border-gold/40 hover:bg-surface-2">
              <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-4">03 / Labeling</div>
              <h3 className="font-display text-lg font-semibold text-text-primary">
                AI Dataset Annotation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Phonetic labeling, structural classification, and prompt engineering data enrichment designed to train complex generative models and LLMs.
              </p>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="card group h-full p-7 transition-all duration-300 hover:border-gold/40 hover:bg-surface-2">
              <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-4">04 / Human-in-the-loop</div>
              <h3 className="font-display text-lg font-semibold text-text-primary">
                Human-in-the-Loop QA
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Continuous validation of automated algorithm outputs, manual content moderation, and script reviews to guarantee strict alignment with your metrics.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DETAILED INTERACTIVE TIMELINE / WORKFLOW SCHEME */}
      <section className="container-page py-16 md:py-24 border-t border-surface-border">
        <div className="max-w-2xl mb-16 md:mb-20">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-sm bg-gold" />
              Our Delivery Workflow
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Closed-Loop Quality Pipeline
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-text-secondary">
              We eliminate human error and safeguard against guideline drift through a strict multi-pass filtering process. No dataset is delivered without undergoing three independent layers of verification.
            </p>
          </Reveal>
        </div>

        {/* Timeline List Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* 
            Оновлена вертикальна лінія: 
            Повністю підлаштовується під розміри кіл на мобілках (left-[24px]) та десктопах (md:left-[32px]).
            Тепер вона ідеально ховається за кружечками, оскільки вони мають заливку bg-[#0a0a0c] (або bg-background) з вищим z-index.
          */}
          <div className="absolute left-[24px] md:left-[32px] top-6 md:top-8 bottom-6 md:bottom-8 w-px bg-surface-border" />

          {/* Використовуємо flex-row на всіх пристроях з gap-4 на мобілках та gap-12 на десктопах */}
          <div className="space-y-10 md:space-y-16">
            {pipelineSteps.map((step, i) => (
              <div key={step.number} className="relative flex gap-4 md:gap-12">
                
                {/* Кругла плашка з номером етапу */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-full border border-surface-border bg-background text-gold font-mono text-sm md:text-lg font-bold shadow-sm">
                    {step.number}
                  </div>
                </div>

                {/* Картка з текстовим описом (завжди праворуч від лінії, жодних накладень) */}
                <div className="flex-1 min-w-0">
                  <Reveal delay={i * 80}>
                    <div className="card group p-5 md:p-8 transition-all duration-300 hover:border-gold/30 hover:bg-surface-2/40">
                      
                      {/* Step Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-border/60">
                        <h3 className="font-display text-base md:text-lg font-semibold text-text-primary">
                          {step.title}
                        </h3>
                        <span className="self-start sm:self-auto font-mono text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.12em] text-gold bg-gold/5 border border-gold/20 px-2.5 py-1 rounded">
                          {step.role}
                        </span>
                      </div>

                      {/* Step Description */}
                      <p className="mt-4 text-xs md:text-[14.5px] leading-relaxed text-text-secondary">
                        {step.desc}
                      </p>

                      {/* Step Inputs and Outputs Block */}
                      <div className="mt-6 pt-5 border-t border-dashed border-surface-border/60 grid gap-4 sm:grid-cols-2 text-[11.5px] md:text-[12.5px]">
                        <div>
                          <span className="font-mono text-[9px] md:text-[9.5px] uppercase tracking-wider text-text-tertiary block mb-1">
                            Input (In)
                          </span>
                          <span className="text-text-secondary">
                            {step.input}
                          </span>
                        </div>
                        <div className="sm:border-l sm:border-surface-border/60 sm:pl-4">
                          <span className="font-mono text-[9px] md:text-[9.5px] uppercase tracking-wider text-text-tertiary block mb-1">
                            Output (Out)
                          </span>
                          <span className="text-gold font-medium">
                            {step.output}
                          </span>
                        </div>
                      </div>

                    </div>
                  </Reveal>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="container-page py-12">
        <Reveal>
          <div className="card py-12 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-border text-center">
              
              <div className="flex flex-col items-center justify-center pb-8 md:pb-0 md:px-4 space-y-3.5">
                <div className="font-display text-4xl font-semibold text-text-primary sm:text-5xl tracking-tight">40k+</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold font-semibold">
                  Monthly Volume Capacity
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-8 md:py-0 md:px-4 space-y-3.5">
                <div className="font-display text-4xl font-semibold text-text-primary sm:text-5xl tracking-tight">97,5%+</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold font-semibold">
                  Accuracy Precision Bar
                </div>
              </div>

              <div className="flex flex-col items-center justify-center pt-8 md:pt-0 md:px-4 space-y-3.5">
                <div className="font-display text-4xl font-semibold text-text-primary sm:text-5xl tracking-tight">Multi-Pass</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-gold font-semibold">
                  QA Verification Flow
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </section>

      {/* PDF CAPABILITY STATEMENT BANNER */}
      <section className="container-page pb-16">
        <Reveal>
          <div className="card relative overflow-hidden p-10 text-center md:p-14">
            <div className="absolute inset-0 bg-noise-radial opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                Looking for an offline document?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-text-secondary">
                Download our official Capability Statement PDF to review or share with your engineering and operations team.
              </p>
              <div className="mt-8 flex justify-center">
                <a 
                  href="/docs/vendor-plus-proposal.pdf" 
                  download
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Download PDF Brief
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT / FORM SECTION */}
      <section id="contact" className="border-t border-surface-border">
        <ContactSection />
      </section>

    </div>
  );
}