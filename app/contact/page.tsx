import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

const offices = [
  { city: "Lviv, Ukraine", detail: "" },
];

export default function Contact() {
  return (
    <section className="container-page pb-28 pt-20 md:pt-28">
      <Reveal>
        <span className="eyebrow">Contact</span>
        <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Tell us what you're building.
        </h1>
        <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-text-secondary">
          Share a sample of your data and your target quality bar. We'll
          respond with a scoped pilot plan — typically within one business
          day.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_420px]">
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>

        <Reveal delay={160}>
          <div className="flex flex-col gap-5">
            <div className="card p-7">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary">
                Direct
              </div>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <span className="text-text-primary">nokillazone@gmail.com</span>
                <span className="text-text-secondary">+38 (093) 925-3276</span>
              </div>
            </div>

            <div className="card p-7">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary">
                Offices
              </div>
              <ul className="mt-3 flex flex-col divide-y divide-surface-border">
                {offices.map((o) => (
                  <li key={o.city} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="text-sm text-text-primary">{o.city}</span>
                    <span className="text-right text-xs text-text-tertiary">{o.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-7">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary">
                Response time
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Enterprise and pilot inquiries are reviewed by our solutions
                team within one business day.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
