"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-14 px-6 md:px-10 max-w-6xl mx-auto">
      {/* Top Meta Line */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between border-b border-[#1F1F1F] pb-4 mb-12 text-xs font-mono text-[#737373]"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-[#FAFAFA]" />
          <span>LAHORE, PK</span>
        </div>
        <div className="hidden sm:block text-[#525252]">
          BS SOFTWARE ENGINEERING · COMSATS
        </div>
      </motion.div>

      {/* Main Hero Typography */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="my-auto py-6"
      >
        <motion.div variants={itemVariants} className="overflow-hidden">
          <h1 className="font-heading text-[clamp(2.8rem,7.5vw,7.5rem)] font-light tracking-tight text-[#FAFAFA] leading-[0.95] uppercase">
            Syed M Dawood
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="overflow-hidden">
          <h1 className="font-heading text-[clamp(2.8rem,7.5vw,7.5rem)] font-bold tracking-tight text-[#E5E5E5] leading-[0.95] uppercase">
            Bukhari
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-[#1F1F1F]"
        >
          <div className="max-w-xl">
            <p className="font-mono text-sm sm:text-base text-[#FAFAFA] tracking-wide mb-2">
              Software Engineer
            </p>
            <p className="text-sm sm:text-base text-[#8A8A8A] font-light leading-relaxed">
              Full-Stack Architectures · High-Concurrency Distributed Systems · Applied AI Tooling.
              Engineering reliable web applications and scalable backend services.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <a
              href="#projects"
              className="px-4 py-2.5 bg-[#FAFAFA] text-[#0A0A0A] font-medium hover:bg-[#E5E5E5] transition-colors rounded"
            >
              View Selected Works ↓
            </a>
            <a
              href="https://github.com/dawoodshah04"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-[#262626] hover:border-[#FAFAFA] text-[#FAFAFA] transition-colors rounded flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <span className="text-[10px] text-[#737373]">↗</span>
            </a>
            <a
              href="https://linkedin.com/in/dawoodbukharii"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-[#262626] hover:border-[#FAFAFA] text-[#FAFAFA] transition-colors rounded flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <span className="text-[10px] text-[#737373]">↗</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="pt-8 flex items-center justify-between border-t border-[#141414] text-xs font-mono text-[#525252]"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-4 h-4 flex items-center justify-center text-[#FAFAFA]"
          >
            ↓
          </motion.div>
          <span className="tracking-wider uppercase text-[11px]">
            Scroll to explore
          </span>
        </div>

        <div className="hidden sm:block text-[11px]">
          APPLIED RESEARCH · PROTOTYPES
        </div>
      </motion.div>
    </section>
  );
}
