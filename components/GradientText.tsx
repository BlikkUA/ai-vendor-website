"use client";

/**
 * Wraps a headline word/phrase in a slowly animated gradient — the
 * "shimmering" accent text effect common on AI-startup hero sections.
 *
 * Usage:
 *   <h1>The ground truth layer for <GradientText>frontier AI</GradientText>.</h1>
 */
export default function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
      <style jsx>{`
        .gradient-text {
          background-image: linear-gradient(
            90deg,
            #7a1e32 0%,
            #b45469 25%,
            #9c2f49 50%,
            #b45469 75%,
            #7a1e32 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient-pan 7s linear infinite;
        }
        @keyframes gradient-pan {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gradient-text {
            animation: none;
          }
        }
      `}</style>
    </span>
  );
}
