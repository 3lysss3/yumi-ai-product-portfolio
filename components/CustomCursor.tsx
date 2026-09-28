"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const pointX = useMotionValue(-40);
  const pointY = useMotionValue(-40);
  const ringX = useSpring(pointX, { stiffness: 500, damping: 36, mass: 0.25 });
  const ringY = useSpring(pointY, { stiffness: 500, damping: 36, mass: 0.25 });
  const [interactive, setInteractive] = useState(false);
  const [label, setLabel] = useState("");
  const [pressed, setPressed] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (min-width: 768px)");

    const onMove = (event: MouseEvent) => {
      pointX.set(event.clientX);
      pointY.set(event.clientY);
      const target = event.target as HTMLElement;
      const labeledTarget = target.closest<HTMLElement>("[data-cursor]");
      setLabel(labeledTarget?.dataset.cursor ?? "");
      setInteractive(Boolean(target.closest("a, button, [data-cursor]")));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onChange = () => setEnabled(media.matches);
    const initialFrame = window.requestAnimationFrame(onChange);
    const clearLabel = () => {
      setLabel("");
      setInteractive(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("portfolio:cursor-clear", clearLabel);
    media.addEventListener("change", onChange);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("portfolio:cursor-clear", clearLabel);
      media.removeEventListener("change", onChange);
    };
  }, [pointX, pointY]);

  if (!enabled) return null;

  return (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[120] h-1.5 w-1.5 rounded-full bg-signal"
        style={{ x: pointX, y: pointY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[119] flex h-7 w-7 items-center justify-center rounded-full border border-signal/70 font-mono text-[7px] text-white"
        animate={{ scale: pressed ? 0.72 : label ? 1.95 : interactive ? 1.45 : 1 }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        {label}
      </motion.span>
    </>
  );
}
