"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", index: "01", label: "ABOUT" },
  { id: "projects", index: "02", label: "PROJECTS" },
  { id: "ai-thinking", index: "03", label: "AI" },
  { id: "experience", index: "04", label: "EXPERIENCE" },
  { id: "contact", index: "05", label: "CONTACT" },
];

export default function ScrollIndicator({ visible }: { visible: boolean }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActive(current.target.id);
      },
      { rootMargin: "-36% 0px -52%", threshold: [0, 0.1, 0.4] },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 10 }}
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
      aria-label="页面进度"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          className={`group flex items-center justify-end gap-3 font-mono text-[9px] transition-colors ${
            active === section.id ? "text-signal" : "text-white/25 hover:text-white/60"
          }`}
        >
          <span className="translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">{section.label}</span>
          <span className={`h-px transition-all ${active === section.id ? "w-6 bg-signal" : "w-3 bg-white/25"}`} />
          {section.index}
        </a>
      ))}
    </motion.aside>
  );
}
