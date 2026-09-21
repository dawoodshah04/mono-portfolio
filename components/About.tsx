"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  const contactPills = [
    {
      label: "Email",
      value: "dawood0963@gmail.com",
      href: "mailto:dawood0963@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/dawoodshah04",
      href: "https://github.com/dawoodshah04",
    },
    {
      label: "LinkedIn",
      value: "in/dawoodbukharii",
      href: "https://linkedin.com/in/dawoodbukharii",
    },
    {
      label: "Phone / WA",
      value: "+92 301 4736695",
      href: "tel:+923014736695",
    },
  ];

  const highlights = [
    {
      title: "Client Production",
      desc: "Architected and delivered live enterprise system (tariqaboudhelabi.com) with 15+ REST endpoints, inventory tracking, and invoice generation.",
      meta: "01",
    },
    {
      title: "Distributed Systems",
      desc: "Designed master-worker pipelines in Python using ProcessPoolExecutor for concurrent mobile app generation and task scheduling.",
      meta: "02",
    },
    {
      title: "Active Project: PriceWisePK",
      desc: "Engineering an e-commerce intelligence and price comparison engine tracking real-time deals across Pakistani marketplaces.",
      meta: "03",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-[#1F1F1F]">
      <SectionHeading
        number="01"
        title="About"
        subtitle="Background, engineering focus, and current technical pursuits."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Bio Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xl sm:text-2xl text-[#FAFAFA] font-light leading-relaxed">
            I am a final year Software Engineering student at{" "}
            <span className="text-white font-normal underline decoration-[#333] underline-offset-4">
              COMSATS University Islamabad
            </span>
            , engineering full-stack platforms, distributed systems, and real-world tools.
          </p>

          <p className="text-sm sm:text-base text-[#8A8A8A] leading-relaxed">
            My experience spans full product lifecycles — from designing schema architectures and
            building resilient RESTful APIs to crafting snappy, accessible web and mobile client
            interfaces. I focus on high-performance backends, clean component abstractions, and
            pragmatic software engineering.
          </p>

          <p className="text-sm sm:text-base text-[#8A8A8A] leading-relaxed">
            Outside of client work, I investigate parallel computation patterns, build developer
            utilities, and explore applied machine learning integrations with modern LLM APIs and
            local inference runtimes.
          </p>

          {/* Social / Contact Cards */}
          <div className="pt-6">
            <h4 className="font-mono text-xs text-[#737373] uppercase tracking-wider mb-4">
              Quick Connect
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactPills.map((pill) => (
                <a
                  key={pill.label}
                  href={pill.href}
                  target={pill.href.startsWith("http") ? "_blank" : undefined}
                  rel={pill.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3.5 bg-[#141414] hover:bg-[#1A1A1A] border border-[#1F1F1F] hover:border-[#383838] rounded transition-all duration-200 group flex items-center justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-[#737373] uppercase">
                      {pill.label}
                    </div>
                    <div className="text-xs font-mono text-[#FAFAFA] group-hover:text-white mt-0.5 truncate max-w-[200px]">
                      {pill.value}
                    </div>
                  </div>
                  <span className="text-xs text-[#525252] group-hover:text-[#FAFAFA] transition-colors">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights / Fast Facts Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 bg-[#141414]/70 border border-[#1F1F1F] rounded-lg">
            <h3 className="font-mono text-xs text-[#737373] uppercase tracking-wider mb-6 flex items-center justify-between">
              <span>Core Track Record</span>
              <span className="w-2 h-2 rounded-full bg-[#333333]" />
            </h3>

            <div className="space-y-6">
              {highlights.map((item) => (
                <div key={item.title} className="group border-b border-[#1F1F1F] pb-5 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between text-xs font-mono text-[#737373] mb-1.5">
                    <span className="text-[#FAFAFA] font-medium">{item.title}</span>
                    <span>{item.meta}</span>
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 border border-[#1F1F1F] bg-[#0E0E0E] rounded-lg font-mono text-xs text-[#737373] flex items-center justify-between">
            <span>EDUCATION</span>
            <span className="text-[#FAFAFA]">BS SE (2023 – 2027)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
