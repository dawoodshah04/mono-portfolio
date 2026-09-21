import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Syed M Dawood Bukhari — Software Engineer",
  description:
    "Software Engineer specializing in full-stack web applications, distributed systems, and applied AI tooling. Final year Software Engineering student at COMSATS.",
  keywords: [
    "Syed M Dawood Bukhari",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "Distributed Systems",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Syed M Dawood Bukhari" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#FAFAFA] selection:bg-[#FAFAFA] selection:text-[#0A0A0A]">
        {/* Grain Noise Texture */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Lenis Smooth Scroll Provider */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
