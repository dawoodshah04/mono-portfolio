"use client";

import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#1F1F1F]">
      <SectionHeading
        number="02"
        title="Projects"
        subtitle="Selected production software, distributed computing pipelines, and open-source work."
      />

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* GitHub Outbound Footer */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/dawoodshah04"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#262626] hover:border-[#FAFAFA] bg-[#141414] hover:bg-[#FAFAFA] text-[#FAFAFA] hover:text-[#0A0A0A] font-mono text-xs transition-all duration-200"
        >
          <span>More Experiments on GitHub</span>
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}
