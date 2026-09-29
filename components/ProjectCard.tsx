"use client";

import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import PlaceholderMedia from "./PlaceholderMedia";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={`#${project.caseTarget}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.68, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="project-nav-card group block overflow-hidden border border-white/[0.09] bg-panel transition-colors hover:border-crimson/70"
      data-cursor="VIEW"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.08] bg-black">
        {project.cover.available ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={88}
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
          />
        ) : <PlaceholderMedia className="h-full min-h-0 border-0" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/25" />
        <span className="absolute left-5 top-5 font-mono text-[9px] text-signal">CASE {project.id}</span>
        <ArrowUpRight size={21} strokeWidth={1.2} className="absolute right-5 top-5 text-white/55 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="font-mono text-[9px] text-white/50">{project.category}</p>
          <h3 className="mt-3 text-2xl font-medium text-white sm:text-3xl">{project.title}</h3>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <p className="font-mono text-[9px] text-white/35">{project.englishTitle}</p>
        <p className="mt-4 text-[14px] leading-7 text-white/60">{project.description}</p>
        <div className="mt-6 flex items-end justify-between gap-5 border-t border-white/[0.08] pt-5">
          <div>
            <p className="hud-label">MY ROLE</p>
            <p className="mt-2 text-sm text-white/70">{project.role}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 font-mono text-[8px] text-white/50 group-hover:text-white">
            OPEN CASE <ArrowDownRight size={12} className="text-signal" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
