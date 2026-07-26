"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps its children in a container with a soft radial "spotlight" that
 * follows the user's cursor — the effect used in the hero section of
 * most modern AI-startup landing pages. Touch devices and
 * prefers-reduced-motion are automatically skipped (glow stays centered
 * and static instead of tracking).
 *
 * Usage:
 *   <CursorGlow>
 *     <section>...your hero content...</section>
 *   </CursorGlow>
 */
export default function CursorGlow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const glow = glowRef.current;
    if (!wrap || !glow) return;

    const canHover = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!canHover || reduced) return;

    let raf = 0;
    function handleMove(e: MouseEvent) {
      const rect = wrap!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow!.style.transform = `translate3d(${x - 280}px, ${y - 280}px, 0)`;
        glow!.style.opacity = "1";
      });
    }
    function handleLeave() {
      glow!.style.opacity = "0";
    }

    wrap.addEventListener("mousemove", handleMove);
    wrap.addEventListener("mouseleave", handleLeave);
    return () => {
      wrap.removeEventListener("mousemove", handleMove);
      wrap.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`glow-wrap ${className}`}>
      <div ref={glowRef} className="glow-spot" />
      <div className="glow-content">{children}</div>

      <style jsx>{`
        .glow-wrap {
          position: relative;
          overflow: hidden;
        }
        .glow-spot {
          position: absolute;
          top: 0;
          left: 0;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(122, 30, 50, 0.09) 0%,
            rgba(122, 30, 50, 0.03) 45%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          will-change: transform;
        }
        .glow-content {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
