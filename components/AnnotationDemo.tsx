"use client";

import { useEffect, useState } from "react";

type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  score: string;
  color: string;
};

const frames: Box[][] = [
  [
    { x: 8, y: 18, w: 26, h: 46, label: "pedestrian", score: "0.981", color: "#E8B84B" },
    { x: 40, y: 40, w: 34, h: 28, label: "vehicle", score: "0.994", color: "#3FD0C9" },
    { x: 78, y: 12, w: 16, h: 20, label: "traffic_sign", score: "0.912", color: "#FF7A59" },
    { x: 18, y: 68, w: 20, h: 14, label: "lane_marking", score: "0.955", color: "#9B8CFF" },
  ],
  [
    { x: 14, y: 10, w: 30, h: 30, label: "tumor_region", score: "0.968", color: "#FF7A59" },
    { x: 52, y: 22, w: 22, h: 22, label: "tissue_a", score: "0.941", color: "#3FD0C9" },
    { x: 30, y: 54, w: 40, h: 30, label: "tissue_b", score: "0.977", color: "#E8B84B" },
  ],
  [
    { x: 10, y: 14, w: 80, h: 16, label: "sentiment: positive", score: "0.902", color: "#9B8CFF" },
    { x: 10, y: 40, w: 50, h: 16, label: "entity: ORG", score: "0.988", color: "#3FD0C9" },
    { x: 64, y: 40, w: 26, h: 16, label: "entity: DATE", score: "0.955", color: "#E8B84B" },
    { x: 10, y: 66, w: 80, h: 16, label: "toxicity: low", score: "0.930", color: "#FF7A59" },
  ],
];

const frameCaptions = [
  "sensor_frame · autonomous_driving.mp4",
  "wsi_scan_004 · pathology.tiff",
  "transcript_0192 · rlhf_review.json",
];

export default function AnnotationDemo() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFrameIndex((i) => (i + 1) % frames.length);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  const boxes = frames[frameIndex];

  return (
    <div className="relative">
      <div className="card relative aspect-[4/3] w-full overflow-hidden">
        {/* backdrop grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(#1B1F26 1px, transparent 1px), linear-gradient(90deg, #1B1F26 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/60" />

        {/* top bar */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-surface-border bg-ink/70 px-4 py-2.5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-tag-coral" />
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="h-2 w-2 rounded-full bg-tag-teal" />
          </div>
          <span
            key={frameIndex}
            className="animate-fade-up font-mono text-[11px] text-text-tertiary"
          >
            {frameCaptions[frameIndex]}
          </span>
        </div>

        {/* boxes */}
        <div className="absolute inset-0 px-4 pb-4 pt-12">
          <div className="relative h-full w-full">
            {mounted &&
              boxes.map((b, i) => (
                <div
                  key={`${frameIndex}-${i}`}
                  className="absolute animate-fade-up rounded-[3px] transition-all duration-500"
                  style={{
                    left: `${b.x}%`,
                    top: `${b.y}%`,
                    width: `${b.w}%`,
                    height: `${b.h}%`,
                    border: `1.5px solid ${b.color}`,
                    boxShadow: `0 0 0 1px rgba(0,0,0,0.4), 0 0 16px -4px ${b.color}66`,
                    animationDelay: `${i * 110}ms`,
                  }}
                >
                  <span
                    className="absolute -top-6 left-0 whitespace-nowrap rounded-[3px] px-1.5 py-0.5 font-mono text-[10px] font-medium leading-none text-ink"
                    style={{ backgroundColor: b.color }}
                  >
                    {b.label} · {b.score}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* scanning line */}
        <div className="pointer-events-none absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      </div>

      {/* status strip */}
      <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-text-tertiary">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-tag-teal" />
          reviewer_queue: live
        </span>
        <span>throughput: 42,110 labels/hr</span>
      </div>
    </div>
  );
}
