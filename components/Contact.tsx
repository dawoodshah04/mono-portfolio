"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "dawood0963@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#1F1F1F]">
      <SectionHeading
        number="04"
        title="Let's Work Together"
        subtitle="Currently open to full-stack engineering roles, distributed systems work, and client contracts."
      />

      <div className="my-12">
        {/* Massive Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-14 rounded-xl border border-[#1F1F1F] bg-[#121212] relative overflow-hidden group"
        >
          <div className="flex items-center justify-between font-mono text-xs text-[#737373] mb-6">
            <span>DIRECT INBOX</span>
            <button
              onClick={handleCopyEmail}
              className="text-xs text-[#A3A3A3] hover:text-[#FAFAFA] flex items-center gap-1.5 transition-colors"
            >
              <span>{copied ? "✓ Copied to clipboard" : "Click to copy"}</span>
            </button>
          </div>

          <a
            href={`mailto:${email}`}
            className="block font-heading text-[clamp(1.8rem,5.5vw,4.5rem)] font-light tracking-tight text-[#FAFAFA] hover:text-white transition-colors duration-200 break-all leading-tight"
          >
            {email}
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs text-[#8A8A8A]">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#FAFAFA] text-[#0A0A0A] font-medium hover:bg-[#E5E5E5] transition-colors"
            >
              <span>Compose Email</span>
              <span>↗</span>
            </a>

            <a
              href="tel:+923014736695"
              className="px-4 py-2.5 rounded border border-[#2B2B2B] hover:border-[#404040] text-[#FAFAFA] transition-colors"
            >
              +92-301-4736695
            </a>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <a
            href="https://github.com/dawoodshah04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-[#1F1F1F] hover:border-[#383838] bg-[#141414] hover:bg-[#161616] text-[#A3A3A3] hover:text-[#FAFAFA] transition-all flex items-center justify-between"
          >
            <span>GitHub / dawoodshah04</span>
            <span>↗</span>
          </a>

          <a
            href="https://linkedin.com/in/dawoodbukharii"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-[#1F1F1F] hover:border-[#383838] bg-[#141414] hover:bg-[#161616] text-[#A3A3A3] hover:text-[#FAFAFA] transition-all flex items-center justify-between"
          >
            <span>LinkedIn / dawoodbukharii</span>
            <span>↗</span>
          </a>

          <div className="p-5 rounded-lg border border-[#1F1F1F] bg-[#141414] text-[#737373] flex items-center justify-between">
            <span>Location: Islamabad / Lahore, PK</span>
            <span className="text-[#383838]">UTC+5</span>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <footer className="pt-16 mt-16 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#525252]">
        <div>
          © 2026 Syed M Dawood Bukhari. Built with Next.js & Lenis.
        </div>

        <button
          onClick={scrollToTop}
          className="hover:text-[#FAFAFA] transition-colors flex items-center gap-1.5"
          aria-label="Scroll to top"
        >
          <span>Back to top</span>
          <span>↑</span>
        </button>
      </footer>
    </section>
  );
}
