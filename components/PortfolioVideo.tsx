"use client";

import { Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PlaceholderMedia from "./PlaceholderMedia";

type Props = { src: string; label: string; available?: boolean; poster?: string; loop?: boolean; hasAudio?: boolean; className?: string };

export default function PortfolioVideo({ src, label, available = true, poster, loop = true, hasAudio = true, className = "" }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [active, setActive] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const [muted, setMuted] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !available) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setNear(true);
      setActive(entry.intersectionRatio >= 0.55);
    }, { rootMargin: "300px 0px", threshold: [0, 0.55, 0.8] });
    observer.observe(host);
    return () => observer.disconnect();
  }, [available]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !near || failed) return;
    if (!active) {
      video.pause();
      return;
    }
    video.muted = !hasAudio || muted;
    video.volume = 0.72;
    video.play().then(() => setNeedsInteraction(false)).catch(() => setNeedsInteraction(true));
  }, [active, failed, hasAudio, muted, near]);

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

  if (!available || failed) return <PlaceholderMedia label={`${label} / VIDEO TO BE ADDED`} className={`aspect-video ${className}`} />;

  return (
    <div ref={hostRef} className={`group relative aspect-video overflow-hidden border border-white/[0.09] bg-black ${className}`} data-cursor="PLAY">
      {near && (
        <video ref={videoRef} src={src} poster={poster} playsInline preload="metadata" loop={loop} controls={false} disablePictureInPicture onError={() => setFailed(true)} onContextMenu={(event) => event.preventDefault()} className="h-full w-full object-cover" aria-label={label} />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      <p className="pointer-events-none absolute bottom-4 left-4 font-mono text-[9px] text-white/55">{label}</p>
      {needsInteraction && (
        <button type="button" onClick={playWithSound} className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 border border-white/20 bg-black/65 px-5 py-3 font-mono text-[9px] text-white backdrop-blur-sm hover:border-signal/70">
          <Play size={14} className="text-signal" /> {hasAudio ? "PLAY WITH SOUND" : "PLAY VIDEO"}
        </button>
      )}
      {hasAudio && <button type="button" onClick={toggleSound} className="absolute right-4 top-4 flex h-9 items-center gap-2 border border-white/15 bg-black/55 px-3 font-mono text-[8px] text-white/70 backdrop-blur-sm hover:border-signal/70" aria-label={muted ? "打开视频声音" : "关闭视频声音"}>
        {muted ? <VolumeX size={12} /> : <Volume2 size={12} />} {muted ? "SOUND OFF" : "SOUND ON"}
      </button>}
    </div>
  );
}
