"use client";
import React, { useEffect, useRef } from "react";

export default function TechGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    
    // Кількість дата-вузлів (оптимально для 60 FPS на будь-якому екрані)
    const particleCount = 85; 
    const connectionDistance = 135;
    
    // Координати мишки (залишаємо трекінг, навіть коли блок pointer-events-none)
    const mouse = { x: null as number | null, y: null as number | null, radius: 180 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35, // Гіпнотичний повільний дрейф
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 0.8, // Різний розмір точок для глибини
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resizeCanvas();
    initParticles();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Глибокий колір підкладки
      ctx.fillStyle = "#0B0D10";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Малюємо та прораховуємо фізику точок
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // М'яке відбивання від стінок екрану
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Ефект магніту: якщо мишка поруч, точки плавно реагують
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            // Легке затягування у гравітаційне поле миші
            p.x += dx * 0.008;
            p.y += dy * 0.008;
          }
        }

        // Малюємо сам вузол
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232, 184, 75, 0.3)";
        ctx.fill();

        // Динамічні зв'язки (павутина ліній між точками)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Чим ближче точки одна до одної, тим яскравіша лінія
            const alpha = (1 - dist / connectionDistance) * 0.14;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(232, 184, 75, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Прямий інтерактивний зв'язок мишки з найближчими вузлами
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius - 20) {
            const alpha = (1 - dist / (mouse.radius - 20)) * 0.15;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(232, 184, 75, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-[#0B0D10]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      
      {/* Маски затемнення, щоб анімація красиво ховалася за контентом та краями */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0D10]/10 to-[#0B0D10]" />
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_30%,#0B0D10_90%)]" />
    </div>
  );
}