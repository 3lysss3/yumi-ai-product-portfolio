"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { assetPath } from "@/lib/assets";

export default function CharacterHUD() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const imageX = useSpring(rawX, { stiffness: 90, damping: 22 });
  const imageY = useSpring(rawY, { stiffness: 90, damping: 22 });

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 7);
    rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 7);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="relative mx-auto h-[520px] w-full max-w-[700px] overflow-hidden border border-white/[0.09] bg-[#0d0d0d] md:h-[640px] lg:h-[720px]"
      data-cursor="VIEW"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_42%,rgba(163,15,36,0.2),transparent_44%)]" />
      <div className="absolute inset-5 border border-white/[0.06]" />
      <div className="absolute left-5 top-5 z-20 h-8 w-8 border-l border-t border-signal/70" />
      <div className="absolute right-5 top-5 z-20 h-8 w-8 border-r border-t border-signal/70" />
      <div className="absolute bottom-5 left-5 z-20 h-8 w-8 border-b border-l border-signal/70" />
      <div className="absolute bottom-5 right-5 z-20 h-8 w-8 border-b border-r border-signal/70" />

      <motion.div
        className="absolute inset-0"
        style={{ x: imageX, y: imageY }}
        animate={reduceMotion ? undefined : { scale: [1, 1.006, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={assetPath("/images/profile/hero-character.webp")}
          alt="YUMI Portfolio System 角色场景"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black via-black/35 to-transparent" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 z-20 h-px bg-signal/55 shadow-[0_0_12px_rgba(215,25,63,0.45)]"
        animate={reduceMotion ? undefined : { top: ["12%", "88%", "12%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute left-9 top-9 z-30">
        <p className="hud-label text-white/45">SUBJECT /</p>
        <p className="mt-1 font-mono text-xs text-white">YUMI</p>
      </div>
      <div className="absolute right-9 top-9 z-30 text-right">
        <p className="hud-label text-white/45">STATUS /</p>
        <p className="mt-1 flex items-center justify-end gap-2 font-mono text-xs text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" /> ONLINE
        </p>
      </div>

      <div className="absolute right-8 top-1/2 z-30 hidden -translate-y-1/2 text-right sm:block">
        {["PRODUCT", "AI", "OPERATIONS"].map((item, index) => (
          <div key={item} className="mb-3 flex items-center justify-end gap-3">
            <span className="font-mono text-[9px] text-white/45">0{index + 1}</span>
            <span className="w-[72px] border-b border-white/15 pb-1 font-mono text-[10px] text-white/75">{item}</span>
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-[44%] z-20 h-14 w-14 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-0 top-1/2 h-px w-4 bg-signal/65" />
        <span className="absolute right-0 top-1/2 h-px w-4 bg-signal/65" />
        <span className="absolute left-1/2 top-0 h-4 w-px bg-signal/65" />
        <span className="absolute bottom-0 left-1/2 h-4 w-px bg-signal/65" />
      </div>

      <div className="absolute bottom-9 left-9 right-9 z-30 flex items-end justify-between">
        <div>
          <p className="hud-label">TARGET LOCK / 001</p>
          <p className="mt-2 font-mono text-[11px] text-white">SYSTEM READY</p>
        </div>
        <div className="flex gap-2">
          {["01", "02", "03"].map((number, index) => (
            <motion.span
              key={number}
              className={`flex h-7 w-7 items-center justify-center border font-mono text-[9px] ${
                index === 0 ? "border-signal/70 bg-crimson/15 text-white" : "border-white/10 text-white/35"
              }`}
              animate={reduceMotion ? undefined : index === 0 ? { opacity: [0.55, 1, 0.55] } : undefined}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              {number}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
