"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const GOLD_COLOR = "#E8B84B";

export default function BackgroundFX() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;

      // Перевіряємо, чи знаходиться курсор над кнопкою або інтерактивним елементом
      setIsHovered(
        !!target.closest(
          "button, a, input, select, textarea, .card, [role='button'], .btn-primary, .btn-secondary"
        )
      );
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      <style jsx global>{`
        html,
        body,
        a,
        button,
        input,
        select,
        textarea,
        [role="button"],
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Курсор з динамічною яскравістю при наведенні */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "12px",
          height: "12px",
          backgroundColor: GOLD_COLOR,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 2147483647,
          // Напівпрозорий у звичайному стані (0.5), майже 100% яскравий на кнопці (0.95)
          opacity: isHovered ? 0.95 : 0.5,
          // Яскраве насичене світіння при наведенні на елементи
          boxShadow: isHovered
            ? `0 0 16px 4px rgba(232, 184, 75, 0.85), 0 0 30px 8px rgba(232, 184, 75, 0.5)`
            : `0 0 10px 2px rgba(232, 184, 75, 0.4), 0 0 20px 4px rgba(232, 184, 75, 0.25)`,
          transform: `translate3d(${pos.x - 6}px, ${pos.y - 6}px, 0)`,
          transition: "opacity 0.2s ease, box-shadow 0.2s ease",
          willChange: "transform",
        }}
      />
    </>,
    document.body
  );
}