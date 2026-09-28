"use client";

import { experience } from "@/data/experience";
import { awardMedia } from "@/data/projects";
import { motion } from "framer-motion";
import ProjectGallery from "./ProjectGallery";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="site-section border-b border-white/[0.07] bg-[#0b0b0b]">
      <div className="section-shell">
        <SectionHeading
          kicker="EXPERIENCE & RECOGNITION"
          title="经历证明过程，证据留给材料。"
          subtitle="左侧呈现项目与经历时间轴；右侧展示已提供的真实证书与竞赛材料，公开版本已遮挡证件号、证书编号和校验二维码。"
        />

        <div className="mt-16 grid gap-14 lg:mt-20 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="relative">
            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-white/[0.08]" />
            {experience.map((item, index) => (
            <motion.article
              key={`${item.date}-${item.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative grid gap-5 border-b border-white/[0.08] py-8 pl-11 lg:grid-cols-[150px_1fr] lg:gap-8"
            >
              <span className="absolute left-[7px] top-[38px] z-10 h-[9px] w-[9px] border border-white/30 bg-[#0b0b0b] transition-all group-hover:border-signal group-hover:bg-signal" />
              <div className="font-mono text-[10px] text-white/38 lg:pt-1">{item.date}</div>
              <div>
                <p className="font-mono text-[10px] text-signal">{item.type}</p>
                <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
                  <h3 className="text-xl font-medium text-white sm:text-2xl">{item.title}</h3>
                  <span className="text-sm text-white/40">{item.organization}</span>
                </div>
                <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-white/55">{item.summary}</p>
              </div>
            </motion.article>
            ))}
          </div>
          <aside>
            <p className="font-mono text-[10px] text-signal">AWARDS / CERTIFICATES</p>
            <p className="mt-4 text-sm leading-7 text-white/42">IICT 人工智能岗位能力评价、Huawei HCIA-AI 与蓝桥杯 Python 程序设计北京赛区三等奖。</p>
            <ProjectGallery images={awardMedia} className="mt-7" />
          </aside>
        </div>
      </div>
    </section>
  );
}
