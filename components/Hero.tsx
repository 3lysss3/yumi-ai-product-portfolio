"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, UserRound } from "lucide-react";
import CharacterHUD from "./CharacterHUD";
import CapabilityTag from "./CapabilityTag";
import HUDDecoration from "./HUDDecoration";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero({ revealed = true }: { revealed?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/[0.07] px-[var(--gutter)] pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(163,15,36,0.11),transparent_31%)]" />
      <HUDDecoration label="35.274° / SYSTEM ACTIVE" className="bottom-8 left-[var(--gutter)] hidden md:block" />
      <HUDDecoration label="INDEX_001 / PORTFOLIO / 2026" className="right-6 top-1/3 hidden xl:block" vertical />
      <div className="absolute left-0 top-[27%] h-32 w-px bg-signal/40" />
      <div className="absolute right-0 top-[62%] h-24 w-px bg-signal/35" />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-14 lg:grid-cols-[0.84fr_1.16fr] xl:gap-20">
        <motion.div
          initial="hidden"
          animate={revealed ? "visible" : "hidden"}
          transition={{ staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.15 }}
          className="relative z-10 pt-4 lg:pt-0"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.65 }} className="flex items-center gap-3">
            <span className="h-px w-9 bg-signal" />
            <span className="font-mono text-[11px] text-signal">PORTFOLIO / 2026</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-8 text-[72px] font-semibold leading-[0.9] tracking-normal text-paper sm:text-[96px] xl:text-[124px]"
          >
            YUMI<span className="text-signal">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-7 font-mono text-[12px] text-white/65 sm:text-sm"
          >
            AI PRODUCT <span className="text-signal">×</span> PRODUCT OPERATIONS
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-8 max-w-[560px] border-l border-white/15 pl-5">
            <p className="text-lg leading-relaxed text-white sm:text-xl">Turning ideas into products people actually use.</p>
            <p className="mt-3 max-w-[520px] text-[15px] leading-7 text-muted">
              从需求洞察到产品落地，用 AI、数据和产品思维解决真实问题。
            </p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group flex h-12 items-center gap-3 bg-paper px-5 font-mono text-[10px] text-ink transition-colors hover:bg-signal hover:text-white"
            >
              VIEW PROJECTS
              <ArrowDownRight size={15} strokeWidth={1.7} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#about"
              className="group flex h-12 items-center gap-3 border border-white/15 px-5 font-mono text-[10px] text-white transition-colors hover:border-signal/70 hover:bg-crimson/10"
            >
              ABOUT ME
              <UserRound size={14} strokeWidth={1.7} className="text-signal" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-11 flex max-w-[600px] flex-wrap gap-2 border-y border-white/[0.08] py-5">
            {["AI PRODUCT", "AGENT", "RAG", "DATA", "PRODUCT DESIGN", "USER RESEARCH", "PRODUCT ITERATION"].map((item, index) => (
              <CapabilityTag key={item} ai={index === 1 || index === 2}>{item}</CapabilityTag>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={revealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
          transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.25 }}
          className="relative"
        >
          <CharacterHUD />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 right-[var(--gutter)] hidden items-center gap-3 font-mono text-[9px] text-white/35 transition-colors hover:text-white md:flex"
      >
        SCROLL TO EXPLORE
        <ArrowDownRight size={14} className="text-signal" />
      </a>
    </section>
  );
}
