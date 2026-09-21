"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", num: "01" },
    { label: "Projects", href: "#projects", num: "02" },
    { label: "Skills", href: "#skills", num: "03" },
    { label: "Contact", href: "#contact", num: "04" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#1F1F1F] py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-xs md:text-sm tracking-wider uppercase text-[#FAFAFA]"
        >
          <span className="w-2 h-2 rounded-full bg-[#FAFAFA] group-hover:scale-125 transition-transform duration-200" />
          <span className="font-semibold text-white tracking-tight">S. M. DAWOOD</span>
          <span className="text-[#666666] hidden sm:inline-block">/ SWE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-[#8A8A8A]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FAFAFA] transition-colors duration-200 flex items-center gap-1.5 py-1"
            >
              <span className="text-[#525252] text-[10px]">{link.num}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Button & Status */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-[#1F1F1F] bg-[#141414]/60 text-[11px] font-mono text-[#A3A3A3]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Roles</span>
          </div>

          <a
            href="mailto:dawood0963@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#2B2B2B] hover:border-[#FAFAFA] bg-[#141414] hover:bg-[#FAFAFA] text-[#FAFAFA] hover:text-[#0A0A0A] text-xs font-mono rounded transition-all duration-200"
          >
            <span>Say Hello</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A3A3A3] hover:text-white"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#1F1F1F] bg-[#0A0A0A]/95 px-6 py-4"
          >
            <div className="flex flex-col gap-3 font-mono text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#A3A3A3] hover:text-white py-2 flex items-center justify-between border-b border-[#1A1A1A]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#525252]">{link.num}</span>
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#737373]">dawood0963@gmail.com</span>
                <a
                  href="mailto:dawood0963@gmail.com"
                  className="text-xs text-white underline"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
