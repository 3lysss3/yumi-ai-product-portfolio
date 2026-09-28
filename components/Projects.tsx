"use client";

import { projects, type ProjectFilter } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const filters: Array<"ALL" | ProjectFilter> = ["ALL", "AI", "PRODUCT", "DATA", "RESEARCH", "TECH"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("ALL");
  const visibleProjects = activeFilter === "ALL" ? projects.filter((project) => project.featured) : projects.filter((project) => project.filters.includes(activeFilter));

  return (
    <section id="projects" className="site-section border-b border-white/[0.07]">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading kicker="SELECTED WORK" title="Selected Work" subtitle="AI × Product × Data · 四个核心项目先证明与岗位最相关的能力。" />
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="项目筛选">
            {filters.map((filter) => (
              <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`h-10 border px-4 font-mono text-[9px] transition-colors ${activeFilter === filter ? "border-signal bg-crimson/15 text-white" : "border-white/10 text-white/38 hover:border-white/25 hover:text-white/70"}`} aria-pressed={activeFilter === filter}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </AnimatePresence>
        </motion.div>

        <p className="mt-7 font-mono text-[9px] leading-5 text-white/30">
          ALL 默认展示 4 个核心案例；使用筛选可查看研究与补充项目。项目结果只保留已确认数据。
        </p>
      </div>
    </section>
  );
}
