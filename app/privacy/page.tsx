import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Vendor+",
  description:
    "How Vendor+ collects, uses, and protects personal data and client content across our data annotation services.",
};

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
        <p>We collect a limited set of information necessary to operate our services and respond to inquiries:</p>
        <ul className="flex flex-col gap-2 pl-5">
          <li className="list-disc">
            <span className="text-text-primary">Contact information</span> —
            name, work email, company, and phone number submitted through our
            contact form or provided during onboarding.
          </li>
          <li className="list-disc">
            <span className="text-text-primary">Account information</span> —
            login credentials and role, for individuals with access to our
            client dashboard.
          </li>
          <li className="list-disc">
            <span className="text-text-primary">Usage data</span> — pages
            visited, referring URLs, browser type, and device information,
            collected automatically via standard analytics tooling.
          </li>
          <li className="list-disc">
            <span className="text-text-primary">Client content</span> —
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
        <p>We use the information described above to:</p>
        <ul className="flex flex-col gap-2 pl-5">
          <li className="list-disc">Respond to pilot and sales inquiries, and deliver requested services.</li>
          <li className="list-disc">Operate, maintain, and improve our annotation tooling and quality systems.</li>
          <li className="list-disc">Provision and manage access to our client dashboard and reporting.</li>
          <li className="list-disc">Send service-related communications, including delivery updates and invoices.</li>
          <li className="list-disc">Comply with legal obligations and enforce our Terms of Service.</li>
        </ul>
        <p>
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
      <>
        <p>
          Depending on your location, you may have rights under applicable
          data protection law — including the GDPR and applicable US state
          privacy laws — to access, correct, delete, or export your personal
          data, and to object to or restrict certain processing.
        </p>
        <p>
          To exercise any of these rights, contact us at{" "}
          <span className="text-text-primary">privacy@vendorplus.ai</span>.
          We will respond within the timeframe required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    heading: "9. International data transfers",
    body: (
      <p>
        Vendor+ operates a global reviewer network and hosting
        infrastructure across multiple regions. Where personal data is
        transferred internationally, we rely on recognized transfer
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
        <span className="text-text-primary">privacy@vendorplus.ai</span>.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains how Vendor+ collects, uses, and safeguards personal data and client content across our website, dashboard, and annotation services."
      lastUpdated="July 7, 2026"
      sections={sections}
    />
  );
}
