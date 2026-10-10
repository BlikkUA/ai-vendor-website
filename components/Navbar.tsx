"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [rotation, setRotation] = useState(0); // Кут обертання логотипу
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Функція для додавання 45 градусів
  const rotateClockwise = () => {
    setRotation((prev) => prev + 45);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          open
            ? "border-b border-surface-border bg-ink/90"
            : scrolled
            ? "border-b border-surface-border bg-ink/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between">
          {/* Логотип: повертається на +45 градусів в один бік при hover і при unhover */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            onClick={() => setOpen(false)}
            onMouseEnter={rotateClockwise}
            onMouseLeave={rotateClockwise}
          >
            <span
              className="relative flex h-6 w-6 items-center justify-center rounded border border-gold/40 transition-transform duration-500 ease-out group-hover:border-gold"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <span className="h-1.5 w-1.5 rounded-sm bg-gold" />
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight text-text-primary">
              Vendor+
            </span>
          </Link>

          {/* Навігація для десктопу */}
          <div className="hidden items-center gap-8 md:flex">
            {links.slice(1).map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-body text-[13.5px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-gold drop-shadow-[0_0_8px_rgba(232,184,75,0.4)]"
                      : "text-text-secondary hover:text-gold"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="btn-primary group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_18px_rgba(232,184,75,0.25)] hover:border-gold"
            >
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

      {/* Мобільне меню */}
      <div
        className={`fixed inset-0 z-40 bg-ink/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-page flex flex-col gap-2 pt-24 pb-8">
          {links.slice(1).map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3.5 font-body text-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-surface text-gold font-semibold"
                    : "text-text-secondary hover:bg-surface/50 hover:text-gold"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
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