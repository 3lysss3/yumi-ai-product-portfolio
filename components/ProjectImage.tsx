"use client";

import type { ProjectMedia } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PlaceholderMedia from "./PlaceholderMedia";

const ratioClass = { landscape: "aspect-[4/3]", portrait: "aspect-[3/4]", square: "aspect-square", wide: "aspect-video" };

export default function ProjectImage({ image, onOpen, priority = false, className = "" }: { image: ProjectMedia; onOpen?: () => void; priority?: boolean; className?: string }) {
  const [failed, setFailed] = useState(false);
  const available = image.available && !failed;
  const ratio = ratioClass[image.aspectRatio ?? "landscape"];

  if (!available) {
    return (
      <figure className={`m-0 ${className}`}>
        <PlaceholderMedia className={ratio} />
        <figcaption className="mt-3 flex items-center justify-between gap-3 font-mono text-[9px] text-white/35">
          <span>{image.category}</span><span>{image.caption}</span>
        </figcaption>
      </figure>
    );
  }

  const frameClass = image.kind === "photo" ? "bg-black" : image.kind === "medical" ? "border border-white/[0.08] bg-black" : "border border-white/[0.09] bg-white/[0.025]";

  return (
    <motion.figure
      className={`group m-0 ${className}`}
      initial={{ opacity: 0, clipPath: "inset(0 0 18% 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <button type="button" onClick={onOpen} disabled={!onOpen} className={`relative block w-full overflow-hidden text-left ${ratio} ${frameClass}`} aria-label={`放大查看：${image.caption}`} data-cursor={onOpen ? "VIEW" : undefined}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" quality={88} priority={priority} loading={priority ? "eager" : "lazy"} onError={() => setFailed(true)} style={{ objectPosition: image.objectPosition }} className="object-contain transition duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-110" />
        {onOpen && <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25"><span className="absolute bottom-4 right-4 translate-y-2 font-mono text-[9px] text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">EXPAND</span></span>}
      </button>
      <figcaption className="mt-3 flex items-center justify-between gap-3 font-mono text-[9px] text-white/35">
        <span>{image.category}</span><span className="text-right">{image.caption}</span>
      </figcaption>
    </motion.figure>
  );
}
