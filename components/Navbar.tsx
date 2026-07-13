"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* 1. Головна шапка (Header) */}
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
          open
            ? "border-b border-surface-border bg-ink/80" 
            : scrolled
            ? "border-b border-surface-border bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="relative flex h-6 w-6 items-center justify-center rounded border border-gold/40">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-sm bg-gold" />
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight text-text-primary">
              Vendor+
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-[13.5px] font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link href="/contact" className="btn-primary">
              Request a pilot
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-[1.5px] w-5 bg-text-primary transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-text-primary transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* 2. Повноекранне мобільне меню */}
      <div
        className={`fixed inset-0 z-40 bg-ink/80 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-page flex flex-col gap-1 pt-24 pb-8">
          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-4 font-body text-lg font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full py-4 text-center text-[15px]"
          >
            Request a pilot
          </Link>
        </div>
      </div>
    </>
  );
}