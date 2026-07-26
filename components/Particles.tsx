"use client";

import { useEffect, useState } from "react";

type Particle = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  color: string;
};

const PARTICLE_COLORS = ["#E8B84B", "#3FD0C9", "#FF7A59", "#9B8CFF"];

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    left: (i * 137.5) % 100, // evenly spread, golden-angle distribution
    size: 3 + ((i * 7) % 5),
    duration: 14 + ((i * 5) % 12),
    delay: (i * 1.7) % 14,
    drift: ((i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 6)),
    color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
  }));
}

/**
 * A field of ~24 tiny embers that drift slowly upward and fade in/out —
 * adds "a lot" of ambient background motion on top of BackgroundFX's
 * orbs. Purely decorative and behind everything (z-index -8).
 */
export default function Particles() {
  const [mounted, setMounted] = useState(false);
  const [particles] = useState(() => makeParticles(24));

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div aria-hidden className="particles-root">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
      <style jsx>{`
        .particles-root {
          position: fixed;
          inset: 0;
          z-index: -8;
          overflow: hidden;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          bottom: -5%;
          border-radius: 50%;
          opacity: 0;
          filter: blur(0.5px);
          animation-name: particle-rise;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes particle-rise {
          0% {
            transform: translate(0, 0) scale(0.6);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            transform: translate(var(--drift), -50vh) scale(1);
            opacity: 0.35;
          }
          90% {
            opacity: 0.15;
          }
          100% {
            transform: translate(calc(var(--drift) * 2), -105vh) scale(0.6);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .particle {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </div>
  );
}