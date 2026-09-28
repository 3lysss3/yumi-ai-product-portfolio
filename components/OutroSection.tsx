"use client";

import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { portfolioVideos } from "@/data/media";
import { ArrowUp, ArrowUpRight, Mail, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const OUTRO_VIDEO = portfolioVideos.outro.src;

export default function OutroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [active, setActive] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [muted, setMuted] = useState(false);
  const reduceMotion = useReducedMotion();
  const pointX = useMotionValue(0);
  const pointY = useMotionValue(0);
  const hudXRaw = useMotionValue(0);
  const hudYRaw = useMotionValue(0);
  const hudX = useSpring(hudXRaw, { stiffness: 90, damping: 24 });
  const hudY = useSpring(hudYRaw, { stiffness: 90, damping: 24 });

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "600px 0px", threshold: 0 },
    );

    const playObserver = new IntersectionObserver(([entry]) => setActive(entry.intersectionRatio >= 0.5), {
      threshold: [0, 0.5, 0.75],
    });

    loadObserver.observe(element);
    playObserver.observe(element);
    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || videoFailed) return;

    if (active) {
      video.muted = muted;
      video.volume = 0.72;
      video.play().then(() => setNeedsInteraction(false)).catch(() => setNeedsInteraction(true));
    } else {
      video.pause();
    }
  }, [active, muted, shouldLoad, videoFailed]);

  const playWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setMuted(false);
    try {
      await video.play();
      setNeedsInteraction(false);
    } catch {
      setNeedsInteraction(true);
    }
  };

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (!next && active) {
      try {
        await video.play();
        setNeedsInteraction(false);
      } catch {
        setNeedsInteraction(true);
      }
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = sectionRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    pointX.set(localX);
    pointY.set(localY);
    hudXRaw.set((localX / bounds.width - 0.5) * 8);
    hudYRaw.set((localY / bounds.height - 0.5) * 8);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative h-screen min-h-[700px] overflow-hidden bg-black"
      data-outro-active={active ? "true" : "false"}
      data-cursor="PLAY"
    >
      {shouldLoad && !videoFailed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={OUTRO_VIDEO}
          playsInline
          preload="metadata"
          controls={false}
          loop
          disablePictureInPicture
          onError={() => setVideoFailed(true)}
          onContextMenu={(event) => event.preventDefault()}
          aria-label="YUMI portfolio final scene"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(163,15,36,0.2),transparent_38%)]" />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/75" />
      <div className="pointer-events-none absolute inset-5 border border-white/[0.08] md:inset-8" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ x: hudX, y: hudY }}>
        <div className="absolute left-8 top-8 hidden font-mono text-[9px] text-white/38 sm:block md:left-12 md:top-12">OUTRO / FINAL SCENE</div>
        <div className="absolute bottom-8 left-8 hidden font-mono text-[9px] text-white/30 sm:block md:bottom-12 md:left-12">SYS_05 / CONTACT CHANNEL</div>
      </motion.div>

      {shouldLoad && !videoFailed && (
        <button type="button" onClick={toggleSound} className="absolute right-8 top-8 z-20 hidden h-10 items-center gap-2 border border-white/15 bg-black/40 px-3 font-mono text-[9px] text-white/65 backdrop-blur-sm hover:border-signal/70 sm:flex md:right-12 md:top-12" aria-label={muted ? "打开片尾视频声音" : "关闭片尾视频声音"}>
          {muted ? <VolumeX size={12} /> : <Volume2 size={12} />} {muted ? "SOUND OFF" : "SOUND ON"}
        </button>
      )}

      {active && needsInteraction && (
        <button type="button" onClick={playWithSound} className="absolute left-1/2 top-1/3 z-20 flex -translate-x-1/2 items-center gap-3 border border-white/20 bg-black/65 px-5 py-3 font-mono text-[9px] text-white backdrop-blur-sm hover:border-signal/70">
          <Play size={14} className="text-signal" /> PLAY WITH SOUND
        </button>
      )}

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_16px_rgba(215,25,63,0.6)] md:block"
        style={{ x: pointX, y: pointY, translateX: "-50%", translateY: "-50%" }}
      />

      <AnimatePresence>
        {active && (
          <motion.div
            className="relative z-10 flex h-full items-end px-[var(--gutter)] pb-36 pt-28 sm:items-center sm:pb-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto w-full max-w-[1440px]">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : 1.5 }}
                className="section-kicker"
              >
                END OF FILE
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: reduceMotion ? 0 : 2.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-[900px] text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl"
              >
                LET&apos;S BUILD
                <br />
                SOMETHING INTERESTING.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: reduceMotion ? 0 : 3 }}
                className="mt-8"
              >
                <p className="font-mono text-[11px] text-white/55">AI · PRODUCT · OPERATIONS</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:2780166094@qq.com"
                    className="group flex h-12 items-center gap-3 bg-paper px-5 font-mono text-[10px] text-ink transition-colors hover:bg-signal hover:text-white"
                  >
                    CONTACT ME
                    <Mail size={15} strokeWidth={1.6} />
                  </a>
                  <a
                    href="tel:13605824710"
                    className="flex h-12 items-center border border-white/15 bg-black/25 px-5 font-mono text-[10px] text-white backdrop-blur-sm transition-colors hover:border-signal/70"
                  >
                    136 0582 4710
                  </a>
                </div>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[9px] text-white/38">
                  <span>2780166094@qq.com</span>
                  {["GITHUB / 待补充", "LINKEDIN / 待补充"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5">
                      {item} <ArrowUpRight size={10} />
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })}
        className="absolute bottom-8 right-8 z-20 flex items-center gap-2 border border-white/15 bg-black/30 px-4 py-3 font-mono text-[9px] text-white/55 backdrop-blur-sm transition-colors hover:border-signal/70 hover:text-white md:bottom-12 md:right-12"
      >
        RETURN TO TOP
        <ArrowUp size={13} className="text-signal" />
      </button>
    </section>
  );
}
