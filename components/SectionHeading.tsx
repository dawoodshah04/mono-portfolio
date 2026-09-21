"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${className}`}
    >
      <div className="flex items-center gap-3 font-mono text-xs md:text-sm text-[#737373] uppercase tracking-widest">
        <span className="text-[#FAFAFA] font-medium">{number}</span>
        <span className="text-[#333333]">──</span>
        <span>{title}</span>
      </div>
      {subtitle && (
        <p className="mt-3 text-[#A3A3A3] text-sm md:text-base max-w-xl font-sans">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
