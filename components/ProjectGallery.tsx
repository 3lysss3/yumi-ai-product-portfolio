"use client";

import type { ProjectMedia } from "@/data/projects";
import { useCallback, useMemo, useState } from "react";
import ImageLightbox from "./ImageLightbox";
import ProjectImage from "./ProjectImage";

type Props = { images: ProjectMedia[]; columns?: 1 | 2 | 3; variant?: "grid" | "masonry" | "phones"; className?: string };

export default function ProjectGallery({ images, columns = 2, variant = "grid", className = "" }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const availableImages = useMemo(() => images.filter((image) => image.available), [images]);
  const open = (image: ProjectMedia) => {
    const index = availableImages.findIndex((item) => item.src === image.src && item.caption === image.caption);
    if (index >= 0) setLightboxIndex(index);
  };
  const close = useCallback(() => setLightboxIndex(null), []);
  const change = useCallback((index: number) => setLightboxIndex(index), []);

  const layout = variant === "masonry"
    ? "columns-1 gap-5 md:columns-2 xl:columns-3"
    : variant === "phones"
      ? "hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5"
      : columns === 1 ? "grid gap-5" : columns === 3 ? "grid gap-5 md:grid-cols-2 xl:grid-cols-3" : "grid gap-5 md:grid-cols-2";

  return (
    <>
      <div className={`${layout} ${className}`}>
        {images.map((image, index) => (
          <div key={`${image.src}-${index}`} className={variant === "masonry" ? "mb-5 break-inside-avoid" : variant === "phones" ? "w-[76vw] max-w-[310px] shrink-0 snap-start" : ""}>
            <ProjectImage image={image} onOpen={image.available ? () => open(image) : undefined} />
          </div>
        ))}
      </div>
      <ImageLightbox images={availableImages} index={lightboxIndex} onIndexChange={change} onClose={close} />
    </>
  );
}
