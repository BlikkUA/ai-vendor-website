import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";
import CursorGlow from "@/components/CursorGlow";
import Particles from "@/components/Particles";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vendor+ — High-Fidelity Data Annotation for Frontier AI",
  description:
    "Vendor+ is the human-in-the-loop data annotation partner for teams building frontier AI — labeling, RLHF, evaluation, and domain-expert review at production scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-ink`}
      >
        <BackgroundFX />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}