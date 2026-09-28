type HUDDecorationProps = {
  label: string;
  className?: string;
  vertical?: boolean;
};

export default function HUDDecoration({ label, className = "", vertical = false }: HUDDecorationProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute font-mono text-[9px] text-white/20 ${
        vertical ? "[writing-mode:vertical-rl]" : ""
      } ${className}`}
    >
      {label}
    </div>
  );
}
