"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "HOME", index: "00" },
  { id: "about", label: "ABOUT", index: "01" },
  { id: "ai-thinking", label: "AI", index: "02" },
  { id: "projects", label: "PROJECTS", index: "03" },
  { id: "experience", label: "EXPERIENCE", index: "04" },
];

export default function Navbar({ visible = true }: { visible?: boolean }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [outroActive, setOutroActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const sectionIds = [...navItems.map((item) => item.id), "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) setActive(visibleEntry.target.id);
      },
      { rootMargin: "-34% 0px -58%", threshold: [0, 0.15, 0.5] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const outro = document.getElementById("contact");
    if (!outro) return;
    const observer = new IntersectionObserver(([entry]) => setOutroActive(entry.intersectionRatio >= 0.5), {
      threshold: [0, 0.5],
    });
    observer.observe(outro);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: visible ? (outroActive && !hovered ? 0.3 : 1) : 0, y: visible ? 0 : -18 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-black/65 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-[1504px] items-center justify-between px-5 md:h-[72px] md:px-8">
        <a href="#home" className="relative text-lg font-semibold tracking-normal text-paper">
          YUMI<span className="text-signal">.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex items-center gap-2 py-2 font-mono text-[10px] transition-colors ${
                active === item.id ? "text-white" : "text-white/45 hover:text-white/80"
              }`}
            >
              <span className={active === item.id ? "text-signal" : "text-white/25"}>{item.index}</span>
              {item.label}
              {active === item.id && (
                <motion.span layoutId="nav-active" className="absolute inset-x-0 -bottom-[25px] h-px bg-signal" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <span className="flex items-center gap-2 font-mono text-[10px] text-white/55">
            <span className="relative h-2 w-2 rounded-full bg-signal">
              <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-50" />
            </span>
            AVAILABLE
          </span>
          <a
            href="#contact"
            className="border border-white/15 px-4 py-2.5 font-mono text-[10px] text-white transition-colors hover:border-signal/70 hover:bg-crimson/10"
          >
            CONTACT
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white md:hidden"
          aria-label={open ? "关闭导航" : "打开导航"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/[0.07] bg-ink/95 md:hidden"
          >
            <div className="space-y-1 px-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 border-b border-white/[0.06] py-4 font-mono text-xs text-white/70"
                >
                  <span className="text-signal">{item.index}</span>
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="flex items-center gap-4 py-4 font-mono text-xs text-white">
                <span className="text-signal">05</span>
                CONTACT
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
