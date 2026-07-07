import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security — Vendor+",
  description:
    "How Vendor+ protects client data across infrastructure, access controls, workforce vetting, and compliance.",
};

interface LegalSection {
  id: string;
  heading: string;
  body: React.ReactNode;
}

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "1. Overview",
    body: (
      <p>
        Data security is foundational to how Vendor+ operates — our clients
        trust us with datasets that are often sensitive, proprietary, or
        regulated. This page summarizes the technical, operational, and
        organizational measures we maintain to protect client content
        across every engagement, from a small pilot to a production-scale
        annotation program.
      </p>
    ),
  },
  {
    id: "infrastructure",
    heading: "2. Infrastructure & hosting",
    body: (
      <p>
        Our platform is hosted on established cloud infrastructure
        providers with independently audited data centers. Environments are
        logically separated by client and engagement, with network access
        restricted through firewalls, private networking, and least-
        privilege security groups. Government and highly regulated
        engagements can be provisioned on dedicated or air-gapped
        infrastructure where required — see our{" "}
        <a href="/industries" className="text-gold hover:text-gold-soft underline underline-offset-4 decoration-gold/30">
          Industries page
        </a>{" "}
        for details.
      </p>
    ),
  },
  {
    id: "encryption",
    heading: "3. Encryption",
    body: (
      <p>
        Client content is encrypted in transit using TLS 1.2 or higher, and
        at rest using industry-standard encryption (AES-256 or equivalent).
        Encryption keys are managed through a dedicated key-management
        service with restricted administrative access, and are rotated on a
        scheduled basis.
      </p>
    ),
  },
  {
    id: "access-controls",
    heading: "4. Access controls",
    body: (
      <>
        <p className="mb-4">
          Access to client content and production systems is governed by
          the principle of least privilege:
        </p>
        <ul className="flex flex-col gap-2.5 pl-5 text-slate-400">
          <li className="list-disc">Reviewer access is scoped to the specific tasks and queues assigned to their engagement.</li>
          <li className="list-disc">Internal access to production systems requires multi-factor authentication and is logged.</li>
          <li className="list-disc">Access is reviewed on a recurring basis and revoked immediately upon role change or offboarding.</li>
          <li className="list-disc">Administrative actions on client data are subject to audit logging.</li>
        </ul>
      </>
    ),
  },
  {
    id: "workforce",
    heading: "5. Workforce vetting & training",
    body: (
      <p>
        Reviewers and domain experts undergo identity verification and
        background screening appropriate to the sensitivity of the
        engagement, along with mandatory confidentiality agreements before
        accessing any client content. Domain-expert annotation — clinical,
        legal, or financial — is restricted to individuals with the
        relevant professional credentials, as described on our{" "}
        <a href="/services" className="text-gold hover:text-gold-soft underline underline-offset-4 decoration-gold/30">
          Services page
        </a>
        . All reviewers complete recurring security and data-handling
        training.
      </p>
    ),
  },
  {
    id: "compliance",
    heading: "6. Compliance & certifications",
    body: (
      <>
        <p className="mb-4">Vendor+ maintains the following compliance posture:</p>
        <ul className="flex flex-col gap-2.5 pl-5 text-slate-400 mb-6">
          <li className="list-disc">
            <span className="text-white font-medium">SOC 2 Type II</span> — independently audited annually across security, availability, and confidentiality.
          </li>
          <li className="list-disc">
            <span className="text-white font-medium">ISO 27001</span> — certified information security management system.
          </li>
          <li className="list-disc">
            <span className="text-white font-medium">HIPAA-aligned workflows</span> — available for clinical and PHI-adjacent engagements.
          </li>
          <li className="list-disc">
            <span className="text-white font-medium">GDPR-ready data handling</span> — including support for Standard Contractual Clauses.
          </li>
        </ul>
        <p>
          Audit reports and certificates are available to clients and
          prospective clients under NDA — contact{" "}
          <span className="text-white font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
            nokillazone@gmail.com
          </span>{" "}
          to request them.
        </p>
      </>
    ),
  },
  {
    id: "incident-response",
    heading: "7. Incident response",
    body: (
      <p>
        We maintain a documented incident response plan covering detection,
        containment, investigation, and notification. In the event of a
        confirmed security incident affecting client data, we will notify
        affected clients without undue delay and in accordance with the
        timelines specified in the applicable service agreement or
        applicable law, whichever is stricter.
      </p>
    ),
  },
  {
    id: "vulnerability-disclosure",
    heading: "8. Vulnerability disclosure",
    body: (
      <p>
        We welcome responsible disclosure of security vulnerabilities.
        If you believe you've identified a security issue affecting our
        website, dashboard, or services, please report it to{" "}
        <span className="text-white font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
          nokillazone@gmail.com
        </span>{" "}
        with sufficient detail to reproduce the issue. We ask that you
        avoid accessing or modifying data that isn't yours, and give us a
        reasonable period to investigate and remediate before public
        disclosure.
      </p>
    ),
  },
  {
    id: "sub-processors",
    heading: "9. Sub-processors",
    body: (
      <p>
        We rely on a limited number of vetted sub-processors for
        infrastructure, storage, and communications, each bound by
        contractual security and confidentiality obligations no less
        protective than our own commitments to clients. A current
        sub-processor list is available on request.
      </p>
    ),
  },
  {
    id: "continuity",
    heading: "10. Business continuity",
    body: (
      <p>
        Client content is backed up on a scheduled basis and stored
        redundantly across availability zones. Our business continuity and
        disaster recovery procedures are tested periodically to ensure
        service can be restored within the recovery objectives defined for
        production engagements.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "11. Contact us",
    body: (
      <p>
        For security questionnaires, audit requests, or to report a
        vulnerability, contact{" "}
        <span className="text-white font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
          nokillazone@gmail.com
        </span>
        .
      </p>
    ),
  },
];

export default function Security() {
  return (
    <div className="relative min-h-screen text-slate-300 overflow-hidden selection:bg-amber-500/20 selection:text-amber-200 bg-ink">
      
      {/* М'які фонові градієнти (Glow) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
        
        {/* Шапка сторінки з твоїми оригінальними даними */}
        <div className="max-w-3xl border-b border-white/10 pb-12 mb-16">
          <span className="font-mono text-[11px] tracking-widest uppercase text-amber-400 font-medium bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Trust & Security
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-6 mb-6 tracking-tight">
            Security
          </h1>
          <p className="font-body text-lg text-slate-400 leading-relaxed mb-6">
            An overview of the infrastructure, access controls, workforce vetting, and compliance program that protect client data across every Vendor+ engagement.
          </p>
          <p className="font-mono text-xs text-slate-500 flex items-center gap-2">
            <span>Last updated:</span>
            <span className="text-slate-400 font-medium">July 7, 2026</span>
          </p>
        </div>

        {/* Головна сітка */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Інтерактивний сайдбар */}
          <aside className="lg:w-64 shrink-0 lg:sticky lg:top-28 h-fit hidden lg:block">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              On this page
            </p>
            <nav className="flex flex-col gap-2.5 border-l border-white/10 pl-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="font-body text-[13px] text-slate-400 hover:text-white transition-all py-0.5 block truncate hover:translate-x-1 duration-200"
                >
                  {section.heading.split(". ")[1] || section.heading}
                </a>
              ))}
            </nav>
          </aside>

          {/* Текстовий блок */}
          <article className="flex-1 max-w-3xl">
            <div className="flex flex-col gap-12 lg:gap-16">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 group border-b border-white/[0.03] pb-10 last:border-0"
                >
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {section.heading}
                  </h2>
                  <div className="font-body text-slate-400 leading-relaxed space-y-4 text-[15px]">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>
          </article>

        </div>
      </div>
    </div>
  );
}