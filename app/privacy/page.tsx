import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Vendor+",
  description:
    "How Vendor+ collects, uses, and protects personal data and client content across our data annotation services.",
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
        Vendor+ Data, Inc. ("Vendor+", "we", "us", or "our") provides
        human-in-the-loop data labeling, evaluation, and review services to
        organizations building machine learning systems. This Privacy Policy
        explains what personal data we collect, why we collect it, how it is
        used, and the choices available to you. It applies to our website,
        our client-facing platform, and any services we deliver under a
        signed order form or master services agreement.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    heading: "2. Information we collect",
    body: (
      <>
        <p className="mb-4">We collect a limited set of information necessary to operate our services and respond to inquiries:</p>
        <ul className="flex flex-col gap-3 pl-5 text-slate-400">
          <li className="list-disc">
            <span className="text-white font-medium">Contact information</span> —{" "}
            name, work email, company, and phone number submitted through our
            contact form or provided during onboarding.
          </li>
          <li className="list-disc">
            <span className="text-white font-medium">Account information</span> —{" "}
            login credentials and role, for individuals with access to our
            client dashboard.
          </li>
          <li className="list-disc">
            <span className="text-white font-medium">Usage data</span> — pages{" "}
            visited, referring URLs, browser type, and device information,
            collected automatically via standard analytics tooling.
          </li>
          <li className="list-disc">
            <span className="text-white font-medium">Client content</span> —{" "}
            datasets, files, and associated metadata that clients submit to
            us for annotation, evaluation, or review under a service
            agreement.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    heading: "3. How we use information",
    body: (
      <>
        <p className="mb-4">We use the information described above to:</p>
        <ul className="flex flex-col gap-2 pl-5 text-slate-400 mb-4">
          <li className="list-disc">Respond to pilot and sales inquiries, and deliver requested services.</li>
          <li className="list-disc">Operate, maintain, and improve our annotation tooling and quality systems.</li>
          <li className="list-disc">Provision and manage access to our client dashboard and reporting.</li>
          <li className="list-disc">Send service-related communications, including delivery updates and invoices.</li>
          <li className="list-disc">Comply with legal obligations and enforce our Terms of Service.</li>
        </ul>
        <p className="pt-2">
          We do not sell personal data, and we do not use client content to
          train our own general-purpose models without a client's prior
          written authorization.
        </p>
      </>
    ),
  },
  {
    id: "client-content",
    heading: "4. Client content submitted for annotation",
    body: (
      <p>
        Datasets submitted to Vendor+ for labeling, evaluation, or review are
        processed strictly for the purpose of delivering the contracted
        service. Access is limited to the reviewer pods, quality staff, and
        systems assigned to a given engagement, governed by the
        confidentiality terms in the applicable order form or master
        services agreement. Clients remain the owner of their submitted
        content and any resulting annotations, unless otherwise agreed in
        writing.
      </p>
    ),
  },
  {
    id: "cookies",
    heading: "5. Cookies & tracking technologies",
    body: (
      <p>
        Our website uses a limited number of essential and analytics
        cookies to remember basic preferences and understand aggregate
        traffic patterns. We do not use third-party advertising cookies or
        cross-site tracking. You can control or disable cookies through your
        browser settings; disabling essential cookies may affect site
        functionality.
      </p>
    ),
  },
  {
    id: "sharing",
    heading: "6. Data sharing & sub-processors",
    body: (
      <p>
        We share personal data only with service providers who support our
        infrastructure, payments, and communications (for example, cloud
        hosting, email delivery, and analytics providers), each bound by
        contractual confidentiality and data-protection obligations. A
        current list of sub-processors is available on request. We do not
        share client content with any party outside the scope of the
        applicable service agreement, and we disclose personal data to
        regulators or law enforcement only where legally required.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "7. Data retention",
    body: (
      <p>
        We retain personal data only as long as necessary to fulfill the
        purposes described in this policy, satisfy legal or contractual
        obligations, and resolve disputes. Client content is retained
        according to the retention and deletion terms specified in the
        applicable service agreement, and is deleted or returned upon
        contract termination unless a longer period is required by law.
      </p>
    ),
  },
  {
    id: "rights",
    heading: "8. Your rights",
    body: (
      <div className="space-y-4">
        <p>
          Depending on your location, you may have rights under applicable
          data protection law — including the GDPR and applicable US state
          privacy laws — to access, correct, delete, or export your personal
          data, and to object to or restrict certain processing.
        </p>
        <p>
          To exercise any of these rights, contact us at{" "}
          <span className="text-white font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
            nokillazone@gmail.com
          </span>
          . We will respond within the timeframe required by applicable law.
        </p>
      </div>
    ),
  },
  {
    id: "transfers",
    heading: "9. International data transfers",
    body: (
      <p>
        Vendor+ operates a global reviewer network and hosting
        infrastructure across multiple regions. Where personal data is
        translated internationally, we rely on recognized transfer
        mechanisms, including Standard Contractual Clauses, to maintain an
        adequate level of protection consistent with GDPR requirements.
      </p>
    ),
  },
  {
    id: "children",
    heading: "10. Children's privacy",
    body: (
      <p>
        Our services are intended for business use and are not directed to
        individuals under the age of 16. We do not knowingly collect
        personal data from children. If you believe a child has provided us
        with personal data, please contact us so we can delete it.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "11. Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect
        changes in our practices or legal requirements. Material changes
        will be reflected by an updated "Last updated" date above, and, where
        appropriate, communicated directly to active clients.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "12. Contact us",
    body: (
      <p>
        Questions about this Privacy Policy or our data practices can be
        directed to{" "}
        <span className="text-white font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
          nokillazone@gmail.com
        </span>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen text-slate-300 overflow-hidden selection:bg-amber-500/20 selection:text-amber-200 bg-ink">
      
      {/* Фонове неонове світіння (Glow effects) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
        
        {/* Головний блок заголовка */}
        <div className="max-w-3xl border-b border-white/10 pb-12 mb-16">
          <span className="font-mono text-[11px] tracking-widest uppercase text-amber-400 font-medium bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Legal Documentation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-6 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-body text-lg text-slate-400 leading-relaxed mb-6">
            This policy explains how Vendor+ collects, uses, and safeguards personal data and client content across our website, dashboard, and annotation services.
          </p>
          <p className="font-mono text-xs text-slate-500 flex items-center gap-2">
            <span>Last updated:</span>
            <span className="text-slate-400 font-medium">July 7, 2026</span>
          </p>
        </div>

        {/* Двоколонкова сітка: Сайдбар + Контент */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Лівий інтерактивний зміст (sticky) */}
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

          {/* Правий блок із текстом */}
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