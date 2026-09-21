"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#1F1F1F]">
      <SectionHeading
        number="03"
        title="Skills"
        subtitle="Languages, framework ecosystems, and infrastructure toolchains used across projects."
      />

      <div className="border-t border-[#1F1F1F] divide-y divide-[#1F1F1F]">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
          >
            {/* Category header */}
            <div className="md:col-span-4 flex items-baseline gap-3">
              <span className="font-mono text-xs text-[#525252] group-hover:text-[#FAFAFA] transition-colors">
                {cat.code}
              </span>
              <h3 className="font-mono text-sm md:text-base text-[#FAFAFA] font-medium tracking-wide">
                {cat.title}
              </h3>
            </div>

            {/* Skill tags */}
            <div className="md:col-span-8 flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded bg-[#141414] hover:bg-[#1A1A1A] border border-[#1F1F1F] hover:border-[#383838] text-xs font-mono text-[#D4D4D4] hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Engineering Focus Summary Note */}
      <div className="mt-12 p-6 rounded-lg bg-[#141414]/50 border border-[#1F1F1F] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-[#8A8A8A]">
        <div>
          <span className="text-[#FAFAFA] font-medium">PRIMARY STACK:</span> TypeScript · Next.js 15 · Node.js · MongoDB / PostgreSQL · Python
        </div>
        <div className="text-[#525252]">
          LINUX / ARCH / DOCKER WORKFLOWS
        </div>
      </div>
    </section>
  );
}
