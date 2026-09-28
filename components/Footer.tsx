export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060606] px-[var(--gutter)] py-7">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 text-center font-mono text-[9px] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <span>© 2026 YUMI</span>
        <span>DESIGNED &amp; BUILT BY YUMI</span>
        <span className="flex items-center justify-center gap-2 sm:justify-end">
          SYSTEM ONLINE <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        </span>
      </div>
    </footer>
  );
}
