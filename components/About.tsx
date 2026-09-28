"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/assets";
import SectionHeading from "./SectionHeading";

const profileRows = [
  ["IDENTITY", "吕雨珊 / YUMI"],
  ["ROLE", "AI PRODUCT / PRODUCT OPERATIONS"],
  ["STATUS", "OPEN TO WORK · 2027 GRAD"],
  ["FOCUS", "AI · PRODUCT · DATA"],
  ["CITY", "HANGZHOU / 杭州优先"],
];

export default function About() {
  return (
    <section id="about" className="site-section border-b border-white/[0.07] bg-[#0b0b0b]">
      <div className="section-shell">
        <SectionHeading
          kicker="PROFILE / 001"
          title="把技术能力翻译成用户可感知的产品价值。"
          subtitle="我关注需求如何被识别、方案如何被推进，以及 AI 能力如何进入真实使用流程。"
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="mt-16 grid overflow-hidden border border-white/[0.09] bg-panel lg:grid-cols-[0.78fr_1.22fr]"
        >
          <div className="relative min-h-[440px] overflow-hidden border-b border-white/[0.08] lg:min-h-[620px] lg:border-b-0 lg:border-r">
            <Image
              src={assetPath("/images/profile/avatar.webp")}
              alt="YUMI 人物简介照片"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-signal/70" />
            <div className="absolute bottom-6 right-6 h-10 w-10 border-b border-r border-signal/70" />
            <div className="absolute bottom-7 left-7">
              <p className="hud-label text-white/50">PERSONNEL FILE</p>
              <p className="mt-2 font-mono text-xs text-white">ID / YUMI_001</p>
            </div>
          </div>

          <div className="p-6 sm:p-9 lg:p-12 xl:p-16">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
              <div>
                <p className="hud-label">SUBJECT</p>
                <h3 className="mt-2 text-3xl font-medium text-white">吕雨珊</h3>
              </div>
              <span className="flex items-center gap-2 font-mono text-[10px] text-white/55">
                <span className="h-2 w-2 rounded-full bg-signal" /> VERIFIED
              </span>
            </div>

            <dl className="mt-2">
              {profileRows.map(([label, value]) => (
                <div key={label} className="grid gap-2 border-b border-white/[0.07] py-5 sm:grid-cols-[140px_1fr] sm:items-center">
                  <dt className="font-mono text-[10px] text-white/35">{label}</dt>
                  <dd className="m-0 text-sm leading-6 text-white/85">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-l border-signal/60 pl-5">
              <p className="max-w-[650px] text-[15px] leading-8 text-white/68">
                电子与计算机工程本科在读，拥有企业服务产品运营、医学影像科研与 AI 项目推进经历。习惯从用户反馈和业务场景出发，拆解问题、协调角色，并把过程沉淀为可复用的文档和方法。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
