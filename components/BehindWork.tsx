"use client";

import { conceptLabGallery } from "@/data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ImageLightbox from "./ImageLightbox";
import ProjectImage from "./ProjectImage";
import SectionHeading from "./SectionHeading";

const placements = ["scatter-a", "scatter-b", "scatter-c", "scatter-d", "scatter-e"];

export default function BehindWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const nearY = useTransform(scrollYProgress, [0, 1], [42, -42]);
  const farY = useTransform(scrollYProgress, [0, 1], [-26, 26]);

  return (
    <section ref={sectionRef} id="prototype-lab" className="site-section chapter-panel overflow-hidden border-b border-white/[0.07]">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <SectionHeading kicker="PRODUCT CONCEPT LAB" title="五种场景，五次快速产品化练习。" subtitle="围绕 AI 面试、企业服务、物流履约与生活方式场景，快速定义任务、信息结构和核心交互。" />
          <p className="border-l border-signal/60 pl-5 font-mono text-[9px] leading-6 text-white/35">
            CONCEPT UI / DEMO DATA<br />界面仅用于展示产品思路，不代表真实上线、用户量或业务结果。
          </p>
        </div>

        <div
          className={`prototype-scatter mt-16 ${activeIndex !== null ? "has-focus" : ""}`}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {conceptLabGallery.map((image, index) => (
            <motion.div
              key={image.src}
              style={{ y: index % 2 === 0 ? nearY : farY }}
              className={`prototype-scatter-item ${placements[index]} ${activeIndex === index ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <ProjectImage image={image} onOpen={() => setLightboxIndex(index)} />
            </motion.div>
          ))}
        </div>
      </div>

      <ImageLightbox images={conceptLabGallery} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
    </section>
  );
}
