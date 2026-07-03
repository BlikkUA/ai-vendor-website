import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D10",
          50: "#F4F5F6",
          900: "#0B0D10",
        },
        surface: {
          DEFAULT: "#14171C",
          2: "#1B1F26",
          border: "#262B33",
        },
        text: {
          primary: "#EDF0F3",
          secondary: "#9AA3AF",
          tertiary: "#5C6470",
        },
        gold: {
          DEFAULT: "#E8B84B",
          soft: "#F3D089",
          dim: "#8A6C2E",
        },
        tag: {
          teal: "#3FD0C9",
          coral: "#FF7A59",
          violet: "#9B8CFF",
          gold: "#E8B84B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(232,184,75,0.06) 0%, rgba(11,13,16,0) 60%)",
        "noise-radial":
          "radial-gradient(60% 50% at 50% 0%, rgba(232,184,75,0.10) 0%, rgba(11,13,16,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-box": {
          "0%": { strokeDashoffset: "1", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { strokeDashoffset: "0", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 32s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};
export default config;
