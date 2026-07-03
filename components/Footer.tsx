import Link from "next/link";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "Data labeling" },
      { href: "/services", label: "RLHF & evaluation" },
      { href: "/services", label: "Data collection" },
      { href: "/services", label: "Trust & safety review" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries", label: "Autonomous systems" },
      { href: "/industries", label: "Healthcare" },
      { href: "/industries", label: "Generative AI" },
      { href: "/industries", label: "Financial services" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/contact", label: "Careers" },
      { href: "/contact", label: "Trust center" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-ink">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded border border-gold/40">
                <span className="h-1.5 w-1.5 rounded-sm bg-gold" />
              </span>
              <span className="font-display text-[17px] font-semibold text-text-primary">
                Vendor+
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              The human-in-the-loop layer for teams building frontier AI —
              labeling, evaluation, and domain review at production scale.
            </p>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
              SOC 2 Type II · ISO 27001 · GDPR ready
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                {col.title}
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-secondary transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-surface-border pt-8 text-xs text-text-tertiary md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Vendor+ Data, Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-text-secondary">Privacy</Link>
            <Link href="/contact" className="hover:text-text-secondary">Terms</Link>
            <Link href="/contact" className="hover:text-text-secondary">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
