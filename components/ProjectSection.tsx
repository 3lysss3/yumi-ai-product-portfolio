import type { ReactNode } from "react";

export default function ProjectSection({ id, number, kicker, title, subtitle, children, dark = false }: { id: string; number: string; kicker: string; title: string; subtitle: string; children: ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={`site-section border-b border-white/[0.07] ${dark ? "bg-[#0b0b0d]" : ""}`}>
      <div className="section-shell">
        <div className="grid gap-6 border-b border-white/[0.08] pb-10 lg:grid-cols-[130px_1fr] lg:pb-14">
          <p className="font-mono text-5xl text-white/[0.08]">{number}</p>
          <div>
            <p className="section-kicker">{kicker}</p>
            <h2 className="mt-5 max-w-[980px] text-4xl font-semibold leading-[1.08] text-white md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-[720px] text-[15px] leading-7 text-white/50">{subtitle}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
