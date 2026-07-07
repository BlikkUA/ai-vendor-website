import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Trust Center — Vendor+",
  description: "Security, compliance, privacy, and reliability at Vendor+. Learn how we safeguard client data and infrastructure.",
};

const documents = [
  {
    title: "Security Overview",
    desc: "Technical and operational measures, encryption standards, and infrastructure hosting details.",
    href: "/security",
    label: "Read Security",
  },
  {
    title: "Privacy Policy",
    desc: "How we collect, use, process, and protect your personal data and submitted client datasets.",
    href: "/privacy",
    label: "Read Privacy",
  },
  {
    title: "Terms of Service",
    desc: "The legal framework and contractual terms governing the use of our platforms and data annotation services.",
    href: "/terms",
    label: "Read Terms",
  },
];

const compliances = [
  { name: "SOC 2 Type II", status: "Audited Annually", desc: "Independent verification of our security, availability, and confidentiality controls." },
  { name: "ISO 27001", status: "Certified", desc: "International standard for managing information security risks and protecting enterprise assets." },
  { name: "GDPR Ready", status: "Compliant", desc: "Full adherence to European data protection laws, including Standard Contractual Clauses." },
  { name: "HIPAA Aligned", status: "Available", desc: "Secure workflows optimized for clinical data processing and Protected Health Information (PHI)." },
];

export default function TrustCenter() {
  return (
    <>
      {/* Hero Секція */}
      <section className="container-page pb-16 pt-20 md:pb-20 md:pt-28">
        <Reveal>
          <span className="eyebrow">Trust & Compliance</span>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Security, privacy, and reliability. Built in from day one.
          </h1>
          <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-text-secondary">
            At Vendor+, we process enterprise-grade datasets for frontier AI development. Our Trust Center provides transparency into our compliance frameworks, data protection policies, and security posture.
          </p>
        </Reveal>
      </section>

      {/* Сертифікації та відповідність (Compliances) */}
      <section className="container-page pb-24">
        <div className="border-t border-surface-border pt-10">
          <Reveal>
            <h2 className="text-xl font-semibold tracking-tight text-text-primary mb-8">
              Compliance Frameworks
            </h2>
          </Reveal>
          
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {compliances.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div className="card p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-semibold text-text-primary text-[15px]">
                        {c.name}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                        {c.status}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Юридичні документи (Legal Hub) */}
      <section className="border-t border-surface-border bg-surface/30 py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Legal Hub</span>
            <h2 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Our Policies & Legal Documentation
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {documents.map((doc, i) => (
              <Reveal key={doc.title} delay={i * 90}>
                <div className="card p-7 flex flex-col justify-between h-full hover:border-gold/30 transition-all duration-300">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {doc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {doc.desc}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link 
                      href={doc.href} 
                      className="font-mono text-xs text-gold hover:underline underline-offset-4 flex items-center gap-1"
                    >
                      {doc.label} <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Запит звітів (NDA Audit Request) */}
      <section className="container-page py-28 text-center">
        <Reveal>
          <div className="card max-w-3xl mx-auto p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise-radial" />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Need our SOC 2 Report or ISO Certificate?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-text-secondary leading-relaxed">
                Full documentation, independent audit reports, and penetration testing results are available to current and prospective clients under NDA.
              </p>
              <div className="mt-8">
                <a 
                  href="mailto:trust@vendorplus.ai" 
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-ink bg-amber-400 hover:bg-amber-300 transition-colors rounded-full duration-200 font-body font-semibold"
                >
                  Contact Trust Team
                </a>
                <div className="mt-4 text-xs font-mono text-text-tertiary">
                  or email us directly at <span className="text-gold">trust@vendorplus.ai</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}