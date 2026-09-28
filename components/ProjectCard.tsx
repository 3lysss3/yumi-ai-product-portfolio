"use client";

import type { Project } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import PlaceholderMedia from "./PlaceholderMedia";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", close); };
  }, [open]);

  return (
    <>
      <motion.article layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 14 }} transition={{ duration: 0.45 }} className="group overflow-hidden border border-white/[0.09] bg-panel transition-colors hover:border-crimson/70" data-cursor="VIEW">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-black">
          {project.cover.available ? (
            <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" quality={88} className="object-contain transition duration-700 ease-out group-hover:scale-[1.03]" />
          ) : <PlaceholderMedia className="h-full min-h-0 border-0" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/20" />
          <span className="absolute left-5 top-5 font-mono text-[9px] text-signal">CASE {project.id}</span>
          <ArrowUpRight size={21} strokeWidth={1.2} className="absolute right-5 top-5 text-white/55 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-mono text-[9px] text-white/50">{project.category}</p>
            <h3 className="mt-3 text-2xl font-medium text-white sm:text-3xl">{project.title}</h3>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <p className="font-mono text-[10px] text-white/35">{project.englishTitle}</p>
          <p className="mt-5 text-[15px] leading-7 text-white/62">{project.description}</p>
          <div className="mt-6 border-y border-white/[0.08] py-5">
            <p className="hud-label">MY ROLE</p>
            <p className="mt-2 text-sm text-white/72">{project.role}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="border border-white/10 px-2.5 py-2 font-mono text-[8px] text-white/45">{tag}</span>)}
          </div>
          <button type="button" onClick={() => setOpen(true)} className="mt-7 inline-flex items-center gap-3 font-mono text-[9px] text-white/65 hover:text-white">
            VIEW CASE STUDY <ArrowDownRight size={13} className="text-signal" />
          </button>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby={`case-title-${project.slug}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }} className="relative grid max-h-[88vh] w-full max-w-[1120px] overflow-y-auto border border-white/[0.12] bg-[#0d0d0f] lg:grid-cols-[0.9fr_1.1fr]">
              <button type="button" onClick={() => setOpen(false)} aria-label="关闭项目摘要" className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-white/15 bg-black/70 text-white hover:border-signal/70"><X size={17} /></button>
              <div className="relative min-h-[300px] bg-black lg:min-h-[590px]">
                {project.cover.available ? <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-contain p-7" /> : <PlaceholderMedia className="h-full border-0" />}
              </div>
              <div className="border-t border-white/[0.08] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="font-mono text-[9px] text-signal">CASE {project.id} / PROJECT BRIEF</p>
                <h3 id={`case-title-${project.slug}`} className="mt-5 pr-10 text-3xl font-medium text-white">{project.title}</h3>
                <p className="mt-3 font-mono text-[9px] text-white/35">{project.englishTitle}</p>
                <p className="mt-8 text-[15px] leading-8 text-white/62">{project.description}</p>
                <dl className="mt-8 border-t border-white/[0.08]">
                  {[["MY ROLE", project.role], ["CONFIRMED RESULT", project.result]].map(([label, value]) => <div key={label} className="grid gap-2 border-b border-white/[0.08] py-5 sm:grid-cols-[130px_1fr]"><dt className="font-mono text-[8px] text-white/35">{label}</dt><dd className="m-0 text-sm leading-6 text-white/72">{value}</dd></div>)}
                </dl>
                <a href={`#${project.caseTarget}`} onClick={() => setOpen(false)} className="mt-8 inline-flex h-11 items-center gap-3 bg-paper px-5 font-mono text-[9px] text-ink hover:bg-signal hover:text-white">OPEN FULL CASE <ArrowDownRight size={13} /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
