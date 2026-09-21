"use client";

import { motion } from "framer-motion";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative border border-[#1F1F1F] hover:border-[#383838] bg-[#141414] hover:bg-[#161616] p-6 md:p-8 rounded-lg transition-all duration-300 flex flex-col justify-between ${
        isFeatured ? "col-span-1 md:col-span-2 bg-[#121212]" : ""
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2.5 font-mono text-[11px] text-[#737373] uppercase tracking-wider mb-2">
              <span className="text-[#FAFAFA] font-medium">#{String(index + 1).padStart(2, "0")}</span>
              <span>/</span>
              <span>{project.category}</span>
              <span>/</span>
              <span>{project.year}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-medium text-[#FAFAFA] group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm font-mono text-[#8A8A8A] mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Links / Badges */}
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1F1F1F] group-hover:bg-[#FAFAFA] text-[#FAFAFA] group-hover:text-[#0A0A0A] font-mono text-xs transition-all duration-200"
                aria-label={`Visit live site for ${project.title}`}
              >
                <span>Live</span>
                <span className="text-xs">↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded border border-[#262626] hover:border-[#FAFAFA] text-[#8A8A8A] hover:text-[#FAFAFA] transition-colors"
                aria-label={`Source code for ${project.title}`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-sm text-[#8A8A8A] leading-relaxed mb-6 font-sans">
          {project.description}
        </p>

        {/* Highlights List */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6 space-y-2 border-l border-[#262626] pl-3 py-0.5">
            {project.highlights.map((h, i) => (
              <div key={i} className="text-xs text-[#A3A3A3] flex items-start gap-2">
                <span className="text-[#525252] font-mono mt-0.5">›</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Tech stack tags */}
      <div className="pt-4 border-t border-[#1C1C1C] mt-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-[#0A0A0A] border border-[#212121] text-[#A3A3A3] group-hover:border-[#2D2D2D] font-mono text-[11px] transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
