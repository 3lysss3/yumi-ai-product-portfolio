import { FileImage } from "lucide-react";

export default function PlaceholderMedia({ label = "PROJECT VISUAL COMING SOON", className = "" }: { label?: string; className?: string }) {
  return (
    <div role="img" aria-label={label} className={`flex min-h-[220px] w-full items-center justify-center overflow-hidden border border-dashed border-white/[0.12] bg-black/45 ${className}`}>
      <div className="text-center">
        <FileImage size={22} strokeWidth={1.2} className="mx-auto text-white/25" />
        <p className="mt-4 font-mono text-[10px] text-white/42">IMAGE TO BE ADDED</p>
        <p className="mt-2 font-mono text-[8px] text-white/25">{label}</p>
      </div>
    </div>
  );
}
