"use client";

import { skillGroups } from "@/data/skills";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="site-section border-b border-white/[0.07]">
      <div className="section-shell">
        <SectionHeading
          kicker="CAPABILITY MATRIX"
          title="用产品方法组织技术、数据与运营能力。"
          subtitle="能力标签代表实际使用过的工具或方法；SQL 等仍以基础应用为主。"
        />

        <div className="mt-16 grid border-l border-t border-white/[0.09] md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.06 }}
              className="min-h-[330px] border-b border-r border-white/[0.09] bg-panel p-7 sm:p-10 lg:p-12"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[10px] text-signal">MODULE / {group.id}</p>
                  <h3 className="mt-4 text-2xl font-medium text-white">{group.title}</h3>
                  <p className="mt-3 text-sm text-white/38">{group.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-1" aria-hidden="true">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span key={index} className={`h-1.5 w-1.5 ${index <= groupIndex + 2 ? "bg-signal/70" : "bg-white/10"}`} />
                  ))}
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/[0.1] bg-black/10 px-3 py-2.5 font-mono text-[10px] text-white/58 transition-colors hover:border-signal/65 hover:bg-crimson/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
