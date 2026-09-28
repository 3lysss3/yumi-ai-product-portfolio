"use client";

import type { ProjectMedia } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
  images: ProjectMedia[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export default function ImageLightbox({ images, index, onIndexChange, onClose }: Props) {
  useEffect(() => {
    if (index === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") onIndexChange((index + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [images.length, index, onClose, onIndexChange]);

  const current = index === null ? null : images[index];

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          className="fixed inset-0 z-[140] flex items-center justify-center bg-black/[0.88] px-4 py-16 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
        >
          <button type="button" onClick={onClose} aria-label="关闭图片" className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/15 bg-black/55 text-white hover:border-signal/70 md:right-9 md:top-8">
            <X size={18} />
          </button>
          {images.length > 1 && (
            <>
              <button type="button" onClick={() => onIndexChange((index! - 1 + images.length) % images.length)} aria-label="上一张图片" className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center border border-white/15 bg-black/55 text-white hover:border-signal/70 md:left-8">
                <ChevronLeft size={19} />
              </button>
              <button type="button" onClick={() => onIndexChange((index! + 1) % images.length)} aria-label="下一张图片" className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center border border-white/15 bg-black/55 text-white hover:border-signal/70 md:right-8">
                <ChevronRight size={19} />
              </button>
            </>
          )}
          <motion.figure initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.985 }} className="m-0 w-full max-w-[1320px]">
            <div className="relative h-[66vh] w-full">
              <Image src={current.src} alt={current.alt} fill sizes="96vw" quality={92} className="object-contain" />
            </div>
            <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
              <span className="font-mono text-[9px] text-signal">{current.category}</span>
              <span className="text-sm text-white/65">{current.caption}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
