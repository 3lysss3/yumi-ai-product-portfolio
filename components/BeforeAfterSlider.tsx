"use client";

import type { ProjectMedia } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";
import PlaceholderMedia from "./PlaceholderMedia";

export default function BeforeAfterSlider({ before, after }: { before: ProjectMedia; after: ProjectMedia }) {
  const [position, setPosition] = useState(50);
  const canCompare = before.available && after.available;
  return (
    <div className="relative aspect-video overflow-hidden border border-white/[0.1] bg-black">
      {before.available ? <Image src={before.src} alt={before.alt} fill sizes="100vw" className="object-contain" /> : <PlaceholderMedia label="DOCTOR LABEL TO BE ADDED" className="absolute inset-0 min-h-0 border-0" />}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        {after.available ? <Image src={after.src} alt={after.alt} fill sizes="100vw" className="object-contain" /> : <div className="absolute inset-0 bg-[#0d0d10]"><PlaceholderMedia label="AI PREDICTION TO BE ADDED" className="h-full min-h-0 border-0" /></div>}
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-px bg-signal" style={{ left: `${position}%` }}><span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-signal bg-black font-mono text-[10px] text-white">↔</span></div>
      <input type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" aria-label="拖动比较医生标注与 AI 预测" />
      <span className="absolute left-4 top-4 bg-black/65 px-3 py-2 font-mono text-[8px] text-white/65">DOCTOR LABEL</span>
      <span className="absolute right-4 top-4 bg-black/65 px-3 py-2 font-mono text-[8px] text-white/65">AI PREDICTION</span>
      {!canCompare && <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-2 text-center font-mono text-[8px] text-white/45">COMPARISON ASSETS TO BE ADDED</p>}
    </div>
  );
}
