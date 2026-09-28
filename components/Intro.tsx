"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolioVideos } from "@/data/media";
import { Play, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type IntroState = "loading" | "awaitingInteraction" | "playing" | "transitioning" | "finished";

type IntroProps = {
  onStateChange: (state: IntroState) => void;
};

const INTRO_VIDEO = portfolioVideos.intro.src;
const SESSION_KEY = "portfolio_intro_seen";
export const FORCE_INTRO = false;

export default function Intro({ onStateChange }: IntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const transitionStartedRef = useRef(false);
  const [state, setState] = useState<IntroState>("loading");
  const [renderOverlay, setRenderOverlay] = useState(true);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [muted, setMuted] = useState(false);
  const [exitDuration, setExitDuration] = useState(1000);
  const reduceMotion = useReducedMotion();

  const updateState = useCallback(
    (next: IntroState) => {
      setState(next);
      onStateChange(next);
    },
    [onStateChange],
  );

  const beginTransition = useCallback(
    (fast = false, durationOverride?: number) => {
      if (transitionStartedRef.current) return;
      transitionStartedRef.current = true;
      const duration = reduceMotion ? 120 : durationOverride ?? (fast ? 560 : 1050);
      window.sessionStorage.setItem(SESSION_KEY, "true");
      if (fast) videoRef.current?.pause();
      setExitDuration(duration);
      updateState("transitioning");

      window.setTimeout(
        () => {
          window.dispatchEvent(new Event("portfolio:cursor-clear"));
          updateState("finished");
          setRenderOverlay(false);
        },
        duration,
      );
    },
    [reduceMotion, updateState],
  );

  useEffect(() => {
    const seen = window.sessionStorage.getItem(SESSION_KEY) === "true";
    if ((seen && !FORCE_INTRO) || reduceMotion) {
      const timer = window.setTimeout(() => beginTransition(true, 300), 120);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => setShouldPlay(true), 0);
    return () => window.clearTimeout(timer);
  }, [beginTransition, reduceMotion]);

  useEffect(() => {
    if (!shouldPlay) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const timeout = window.setTimeout(
      () => beginTransition(true),
      isMobile ? 3500 : 8000,
    );

    return () => window.clearTimeout(timeout);
  }, [beginTransition, shouldPlay]);

  const startPlayback = async () => {
    if (!shouldPlay || !videoRef.current || !["loading", "awaitingInteraction"].includes(state)) return;
    try {
      if (state === "loading") videoRef.current.currentTime = 0;
      const mobileAutoplay = window.matchMedia("(max-width: 767px)").matches;
      videoRef.current.muted = mobileAutoplay;
      videoRef.current.volume = 0.75;
      setMuted(mobileAutoplay);
      await videoRef.current.play();
      updateState("playing");
    } catch {
      updateState("awaitingInteraction");
    }
  };

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (!next && video.paused) {
      try {
        await video.play();
        updateState("playing");
      } catch {
        updateState("awaitingInteraction");
      }
    }
  };

  const skip = () => beginTransition(true);
  const onVideoEnd = () => window.setTimeout(() => beginTransition(false), 400);

  return (
    <AnimatePresence>
      {renderOverlay && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: state === "transitioning" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: state === "transitioning" ? exitDuration / 1000 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          data-cursor="PLAY"
        >
          {shouldPlay && (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={INTRO_VIDEO}
              autoPlay
              muted={muted}
              playsInline
              preload="auto"
              disablePictureInPicture
              controls={false}
              onCanPlay={startPlayback}
              onEnded={onVideoEnd}
              onError={() => beginTransition(true)}
              onContextMenu={(event) => event.preventDefault()}
              aria-label="YUMI portfolio intro"
            />
          )}

          <motion.div
            className="absolute inset-0 bg-black"
            animate={{ opacity: state === "loading" ? 1 : 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-signal shadow-[0_0_18px_rgba(215,25,63,0.55)]" />
          </motion.div>

          {state === "awaitingInteraction" && (
            <button
              type="button"
              onClick={startPlayback}
              className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 border border-white/20 bg-black/70 px-6 py-4 font-mono text-[10px] text-white backdrop-blur-sm transition-colors hover:border-signal/70"
            >
              <Play size={15} className="text-signal" /> ENTER WITH SOUND
            </button>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/55" />
          <div className="pointer-events-none absolute inset-5 border border-white/[0.08] md:inset-8" />
          <div className="pointer-events-none absolute left-8 top-8 font-mono text-[9px] text-white/45 md:left-12 md:top-12">
            SYS / INIT
          </div>
          <div className="pointer-events-none absolute right-8 top-8 font-mono text-[9px] text-white/45 md:right-12 md:top-12">
            PORTFOLIO SYSTEM
          </div>
          <div className="pointer-events-none absolute bottom-8 left-8 right-8 h-px overflow-hidden bg-white/15 md:bottom-12 md:left-12 md:right-12">
            <motion.span
              className="block h-full bg-signal"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: state === "playing" ? 1 : 0.08 }}
              transition={{ duration: state === "playing" ? 5 : 0.4, ease: "linear" }}
            />
          </div>

          <div className="absolute right-6 top-16 z-10 flex items-center gap-2 md:right-10 md:top-20">
            <button
              type="button"
              onClick={toggleSound}
              disabled={!shouldPlay}
              className="flex h-10 items-center gap-2 border border-white/15 bg-black/35 px-3 font-mono text-[9px] text-white/70 backdrop-blur-sm transition-colors hover:border-signal/70 hover:text-white"
              aria-label={muted ? "打开开场视频声音" : "关闭开场视频声音"}
            >
              {muted ? <VolumeX size={13} /> : <Volume2 size={13} />} {muted ? "SOUND OFF" : "SOUND ON"}
            </button>
            <button
              type="button"
              onClick={skip}
              className="group flex h-10 items-center gap-2 border border-white/15 bg-black/35 px-3 font-mono text-[9px] text-white/70 backdrop-blur-sm transition-colors hover:border-signal/70 hover:text-white"
            >
              SKIP INTRO
              <SkipForward size={13} strokeWidth={1.5} className="text-signal" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
