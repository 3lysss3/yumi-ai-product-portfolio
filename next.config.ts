import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  output: staticExport ? "export" : undefined,
  basePath: basePath || undefined,
  trailingSlash: staticExport,
  images: {
    unoptimized: staticExport,
    formats: ["image/avif", "image/webp"],
    qualities: [75, 88, 92],
  },
};

export default nextConfig;
