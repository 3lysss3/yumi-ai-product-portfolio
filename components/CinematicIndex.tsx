"use client";

import { chapterScenes } from "@/data/media";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, Volume2, VolumeX } from "lucide-react";
import type { CSSProperties, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

export default function CinematicIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeScene = chapterScenes[activeIndex];
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const driftX = useSpring(rawX, { stiffness: 80, damping: 24 });
  const driftY = useSpring(rawY, { stiffness: 80, damping: 24 });
  const copyX = useSpring(rawX, { stiffness: 60, damping: 28 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
    });
  }, [activeIndex, muted]);

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set(((event.clientX - rect.left) / rect.width - 0.5) * 12);
    rawY.set(((event.clientY - rect.top) / rect.height - 0.5) * 8);
  }

  function changeScene(index: number) {
    setFailed(false);
    setActiveIndex((index + chapterScenes.length) % chapterScenes.length);
  }

  async function toggleSound() {
    const video = videoRef.current;
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (!video) return;
    video.muted = nextMuted;
    if (!nextMuted) await video.play().catch(() => setMuted(true));
  }

  return (
    <section id="motion-index" className="cinematic-index chapter-panel" onMouseMove={handlePointerMove} onMouseLeave={() => { rawX.set(0); rawY.set(0); }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScene.src}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="cinematic-media"
          style={{ x: driftX, y: driftY }}
        >
          {!failed ? (
            <video
              ref={videoRef}
              src={activeScene.src}
              autoPlay
              muted={muted}
              loop
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture
              onError={() => setFailed(true)}
              onContextMenu={(event) => event.preventDefault()}
              aria-label={`${activeScene.title} 视觉章节视频`}
            />
          ) : <div className="cinematic-fallback" />}
        </motion.div>
      </AnimatePresence>

      <div className="cinematic-shade" />
      <div className="cinematic-grid section-shell">
        <motion.div className="cinematic-copy" style={{ x: copyX }}>
          <p className="section-kicker">MOTION CHAPTER INDEX</p>
          <p className="mt-7 font-mono text-[10px] text-white/40">SCENE {activeScene.id} / 07</p>
          <h2 className="mt-4 text-5xl font-semibold text-white md:text-7xl">{activeScene.title}</h2>
          <p className="mt-5 max-w-[420px] text-[16px] leading-8 text-white/62">{activeScene.note}。视觉负责建立节奏，真实案例负责证明能力。</p>
          <div className="mt-8 flex items-center gap-3">
            <button type="button" onClick={() => changeScene(activeIndex - 1)} className="scene-arrow" aria-label="上一个视觉章节"><ArrowLeft size={17} /></button>
            <button type="button" onClick={() => changeScene(activeIndex + 1)} className="scene-arrow" aria-label="下一个视觉章节"><ArrowRight size={17} /></button>
            <button type="button" onClick={toggleSound} className="scene-sound" aria-label={muted ? "打开当前视频声音" : "关闭当前视频声音"}>
              {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}{muted ? "SOUND OFF" : "SOUND ON"}
            </button>
          </div>
        </motion.div>

        <nav className="scene-wheel" aria-label="视觉章节轮盘">
          <div className="scene-wheel-ring" aria-hidden="true" />
          {chapterScenes.map((scene, index) => (
            <button
              key={scene.id}
              type="button"
              aria-label={`切换到场景 ${scene.id} ${scene.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => changeScene(index)}
              className={`scene-node ${activeIndex === index ? "active" : ""}`}
              style={{ "--scene-angle": `${index * (360 / chapterScenes.length)}deg` } as CSSProperties}
            >
              <span>{scene.id}</span>
            </button>
          ))}
          <div className="scene-wheel-center">
            <span>{activeScene.id}</span>
            <small>SCENE</small>
          </div>
        </nav>
      </div>
    </section>
  );
}
