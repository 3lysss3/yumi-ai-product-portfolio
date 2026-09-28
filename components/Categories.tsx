"use client";

import { projectCategories } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="site-section border-b border-white/[0.07] bg-[#0b0b0b]">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
          <div>
            <p className="section-kicker">PROJECT DATABASE</p>
            <h2 className="mt-6 text-4xl font-medium leading-tight text-white">按问题类型，而不是按工具分类。</h2>
            <p className="mt-5 max-w-[380px] text-[15px] leading-7 text-muted">
              一个项目可能同时横跨 AI、用户体验和数据策略。这里呈现的是主要解决方向。
            </p>
          </div>

          <div className="border-t border-white/[0.09]">
            {projectCategories.map((category, index) => (
              <motion.a
                key={category.id}
                href="#projects"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="group grid min-h-[112px] grid-cols-[52px_1fr_auto] items-center gap-4 border-b border-white/[0.09] transition-colors hover:bg-white/[0.025] sm:grid-cols-[70px_1fr_140px_auto] sm:gap-6"
              >
                <span className="font-mono text-[10px] text-signal">{category.id}</span>
                <div>
                  <h3 className="text-lg font-medium text-white sm:text-xl">{category.name}</h3>
                  <p className="mt-2 text-xs text-white/35 sm:hidden">{category.note}</p>
                </div>
                <div className="hidden sm:block">
                  <p className="font-mono text-[10px] text-white/45">{category.count} PROJECTS</p>
                  <p className="mt-2 text-xs text-white/30">{category.note}</p>
                </div>
                <ArrowRight size={17} strokeWidth={1.4} className="text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-signal" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
