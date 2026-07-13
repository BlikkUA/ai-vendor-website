import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers — Vendor+",
  description: "Join our global network of professional data annotators, reviewers, and machine learning engineers.",
};

const roles = [
  {
    title: "AI Training Specialist (Multilingual)",
    dept: "Data Annotation",
    type: "Remote / Freelance",
  },
  {
    title: "Data Annotation Project Manager",
    dept: "Operations",
    type: "Remote (Full-time)",
  },
  {
    title: "Full-Stack Engineer (AI Tooling)",
    dept: "Engineering",
    type: "Remote / Hybrid",
  },
];

export default function Careers() {
  return (
    <>
      {/* Заголовок сторінки */}
      <section className="container-page pb-16 pt-20 md:pb-20 md:pt-28">
        <Reveal>
          <span className="eyebrow">Careers at Vendor+</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Build the future of frontier AI models.
          </h1>
          <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-text-secondary">
            We are always looking for precision-oriented reviewers, specialists, and engineers to join our global network and build hyper-accurate datasets for the world's leading machine learning systems.
          </p>
        </Reveal>
      </section>

      {/* Переваги роботи з нами (Perks) */}
      <section className="container-page pb-24">
        <div className="grid gap-5 sm:grid-cols-3 border-t border-surface-border pt-10">
          <Reveal delay={0}>
            <div className="card p-7">
              <h3 className="font-display text-lg font-semibold text-text-primary">Global & Flexible</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Work from anywhere in the world with flexible hours that match your dynamic schedule.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card p-7">
              <h3 className="font-display text-lg font-semibold text-text-primary">Frontier AI</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Get early hands-on access to frontier models, RLHF, and complex evaluation pipelines.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="card p-7">
              <h3 className="font-display text-lg font-semibold text-text-primary">Expert Community</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Collaborate with top-tier domain professionals across linguistics, engineering, and data science.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Список відкритих вакансій */}
      <section className="container-page pb-28">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl mb-8">
            Open Positions
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {roles.map((role, i) => (
            <Reveal key={role.title} delay={i * 80}>
              <div className="card p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:border-gold/30 transition-all duration-300">
                <div>
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {role.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1 font-mono">
                    {role.dept}
                  </p>
                </div>
                <div className="mt-3 sm:mt-0">
                  <span className="inline-block text-xs font-mono text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                    {role.type}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ініціативна заявка (Open Application) */}
        <Reveal delay={300}>
          <div className="mt-16 text-center border border-dashed border-surface-border p-8 rounded-2xl bg-surface/10">
            <p className="text-text-secondary text-sm mb-2">
              Don't see your specific role but want to join our expert network?
            </p>
            <a 
              href="mailto:careers@vendorplus.ai" 
              className="font-mono text-sm text-gold hover:underline underline-offset-4"
            >
              info@vendor-plus.com
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}