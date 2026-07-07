import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Vendor+",
  description:
    "The terms governing use of the Vendor+ website, dashboard, and data annotation services.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "1. Acceptance of terms",
    body: (
      <p>
        These Terms of Service ("Terms") govern access to and use of the
        website, client dashboard, and data annotation, evaluation, and
        review services (collectively, the "Services") provided by Vendor+
        Data, Inc. ("Vendor+", "we", "us"). By accessing our website or
        engaging our Services, you agree to these Terms on behalf of
        yourself and the organization you represent. If you do not agree,
        you should not use the Services.
      </p>
    ),
  },
  {
    id: "description",
    heading: "2. Description of services",
    body: (
      <p>
        Vendor+ provides human-in-the-loop data labeling, RLHF and model
        evaluation, data collection, trust & safety review, and
        domain-expert annotation services. Specific deliverables, volumes,
        pricing, service levels, and timelines for a given engagement are
        set out in an order form, statement of work, or master services
        agreement ("Order"), which forms part of the agreement between the
        parties together with these Terms.
      </p>
    ),
  },
  {
    id: "client-responsibilities",
    heading: "3. Client responsibilities",
    body: (
      <>
        <p>As a client of Vendor+, you agree to:</p>
        <ul className="flex flex-col gap-2 pl-5">
          <li className="list-disc">Provide accurate taxonomies, guidelines, and quality criteria for the data submitted.</li>
          <li className="list-disc">Hold all necessary rights, licenses, and consents to submit content for annotation.</li>
          <li className="list-disc">Not submit content that is unlawful, infringing, or that you do not have the right to share.</li>
          <li className="list-disc">Pay applicable fees in accordance with the relevant Order.</li>
          <li className="list-disc">Designate an authorized point of contact for scoping, feedback, and acceptance of deliverables.</li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptable-use",
    heading: "4. Acceptable use",
    body: (
      <p>
        You may not use the Services to submit content that violates
        applicable law, infringes third-party intellectual property or
        privacy rights, or that Vendor+ reasonably determines poses a legal,
        safety, or reputational risk to our reviewer workforce. We reserve
        the right to pause or decline work on any submission that we
        believe violates this section, and will notify the client promptly.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    heading: "5. Intellectual property",
    body: (
      <>
        <p>
          As between the parties, clients retain all right, title, and
          interest in the data, content, and taxonomies they submit, and in
          the resulting labels and annotations delivered by Vendor+, subject
          to full payment of applicable fees.
        </p>
        <p>
          Vendor+ retains all right, title, and interest in its own
          software, annotation tooling, guidelines templates, quality
          methodologies, and any general know-how developed in the course
          of providing the Services, excluding any client-specific data
          embedded within it.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    heading: "6. Fees & payment",
    body: (
      <p>
        Fees for the Services are set out in the applicable Order and are
        due in accordance with the payment terms stated there. Unless
        otherwise agreed, invoices are payable within thirty (30) days of
        the invoice date. Late payments may accrue interest at the maximum
        rate permitted by law and may result in suspension of active
        engagements until the account is brought current.
      </p>
    ),
  },
  {
    id: "confidentiality",
    heading: "7. Confidentiality",
    body: (
      <p>
        Each party agrees to protect the other's confidential information
        with the same degree of care it uses for its own confidential
        information, and no less than a reasonable standard of care. Client
        content submitted for annotation is treated as confidential
        information and is accessible only to personnel and systems
        assigned to the relevant engagement, as described in our{" "}
        <a href="/security" className="text-gold hover:text-gold-soft">
          Security page
        </a>
        .
      </p>
    ),
  },
  {
    id: "warranties",
    heading: "8. Warranties & disclaimers",
    body: (
      <p>
        Vendor+ will perform the Services in a professional and workmanlike
        manner consistent with industry standards. Except as expressly
        stated in an Order, the Services are provided on an "as is" basis
        and Vendor+ disclaims all other warranties, whether express,
        implied, or statutory, including implied warranties of
        merchantability, fitness for a particular purpose, and
        non-infringement, to the maximum extent permitted by law.
      </p>
    ),
  },
  {
    id: "liability",
    heading: "9. Limitation of liability",
    body: (
      <p>
        To the maximum extent permitted by law, neither party will be
        liable for indirect, incidental, special, consequential, or
        punitive damages arising from these Terms or the Services. Except
        for breaches of confidentiality, intellectual property
        infringement, or a party's indemnification obligations, each
        party's total liability arising out of or related to these Terms
        will not exceed the fees paid or payable under the applicable Order
        in the twelve (12) months preceding the claim.
      </p>
    ),
  },
  {
    id: "indemnification",
    heading: "10. Indemnification",
    body: (
      <p>
        Each party agrees to indemnify and hold the other harmless from
        third-party claims arising from its breach of these Terms, its
        gross negligence or willful misconduct, or, in the case of a
        client, from content submitted for annotation that infringes
        third-party rights or violates applicable law.
      </p>
    ),
  },
  {
    id: "term-termination",
    heading: "11. Term & termination",
    body: (
      <p>
        These Terms remain in effect for as long as an active Order is in
        place between the parties. Either party may terminate an Order in
        accordance with its termination provisions, or immediately upon
        material breach that remains uncured for thirty (30) days following
        written notice. Sections relating to intellectual property,
        confidentiality, payment obligations accrued prior to termination,
        and limitation of liability survive termination.
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "12. Governing law & disputes",
    body: (
      <p>
        These Terms are governed by the laws of the State of California,
        without regard to its conflict-of-laws principles, unless otherwise
        specified in an applicable Order. Any dispute arising out of or
        relating to these Terms will be subject to the exclusive
        jurisdiction of the state and federal courts located in San
        Francisco, California, except where the parties have agreed to
        alternative dispute resolution in an Order.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "13. Changes to these terms",
    body: (
      <p>
        We may update these Terms from time to time. Material changes will
        be reflected by an updated "Last updated" date, and, for active
        clients, communicated in advance where reasonably practicable.
        Continued use of the Services after changes take effect constitutes
        acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "14. Contact us",
    body: (
      <p>
        Questions about these Terms can be directed to{" "}
        <span className="text-text-primary">legal@vendorplus.ai</span>.
      </p>
    ),
  },
];

export default function TermsOfService() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These Terms govern your access to and use of the Vendor+ website, client dashboard, and data annotation services."
      lastUpdated="July 7, 2026"
      sections={sections}
    />
  );
}
