import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Security — Vendor+",
  description:
    "How Vendor+ protects client data across infrastructure, access controls, workforce vetting, and compliance.",
};

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
        <a href="/industries" className="text-gold hover:text-gold-soft">
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
        <p>
          Access to client content and production systems is governed by
          the principle of least privilege:
        </p>
        <ul className="flex flex-col gap-2 pl-5">
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
        <a href="/services" className="text-gold hover:text-gold-soft">
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
        <p>Vendor+ maintains the following compliance posture:</p>
        <ul className="flex flex-col gap-2 pl-5">
          <li className="list-disc"><span className="text-text-primary">SOC 2 Type II</span> — independently audited annually across security, availability, and confidentiality.</li>
          <li className="list-disc"><span className="text-text-primary">ISO 27001</span> — certified information security management system.</li>
          <li className="list-disc"><span className="text-text-primary">HIPAA-aligned workflows</span> — available for clinical and PHI-adjacent engagements.</li>
          <li className="list-disc"><span className="text-text-primary">GDPR-ready data handling</span> — including support for Standard Contractual Clauses.</li>
        </ul>
        <p>
          Audit reports and certificates are available to clients and
          prospective clients under NDA — contact{" "}
          <span className="text-text-primary">trust@vendorplus.ai</span> to
          request them.
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
        <span className="text-text-primary">security@vendorplus.ai</span>{" "}
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
        <span className="text-text-primary">security@vendorplus.ai</span>.
      </p>
    ),
  },
];

export default function Security() {
  return (
    <LegalPage
      eyebrow="Trust"
      title="Security"
      intro="An overview of the infrastructure, access controls, workforce vetting, and compliance program that protect client data across every Vendor+ engagement."
      lastUpdated="July 7, 2026"
      sections={sections}
    />
  );
}
