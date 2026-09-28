"use client";

import { motion } from "framer-motion";
import { portfolioVideos } from "@/data/media";
import PortfolioVideo from "./PortfolioVideo";
import ProjectSection from "./ProjectSection";

const steps = [
  ["01", "USER NEED", "先确认用户任务、输入条件与失败成本。"],
  ["02", "AI CAPABILITY", "再判断模型、检索和数据分别承担什么。"],
  ["03", "PRODUCT LOOP", "用反馈、评估和迭代把能力接入真实流程。"],
];

export default function AIThinking() {
  return (
    <ProjectSection id="ai-thinking" number="00" kicker="AI PRODUCT THINKING" title="模型能力只有进入用户闭环，才成为产品能力。" subtitle="我关注的不只是模型能否输出结果，也关注输入是否清晰、结果是否可理解、错误是否可追踪，以及用户下一步能做什么。" dark>
      <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <PortfolioVideo src={portfolioVideos.aiAnalysis.src} available={portfolioVideos.aiAnalysis.available} label="AI PRODUCT ANALYSIS / ORIGINAL AUDIO" />
        <div className="border-t border-white/[0.09]">
          {steps.map(([number, title, detail], index) => (
            <motion.div key={number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="grid grid-cols-[44px_1fr] gap-4 border-b border-white/[0.09] py-6">
              <span className="font-mono text-[10px] text-signal">{number}</span>
              <div><p className="font-mono text-[10px] text-[#b4bcff]">{title}</p><p className="mt-3 text-sm leading-6 text-white/55">{detail}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </ProjectSection>
  );
}
