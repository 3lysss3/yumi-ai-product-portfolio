export default function CapabilityTag({ children, ai = false }: { children: React.ReactNode; ai?: boolean }) {
  return <span className={`border px-3 py-2 font-mono text-[9px] ${ai ? "border-[#6d7cff]/35 bg-[#6d7cff]/[0.06] text-[#b4bcff]" : "border-white/10 bg-white/[0.02] text-white/55"}`}>{children}</span>;
}
