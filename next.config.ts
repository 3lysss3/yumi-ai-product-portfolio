import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  output: staticExport ? "export" : undefined,
  images: {
    unoptimized: staticExport,
    formats: ["image/avif", "image/webp"],
    qualities: [75, 88, 92],
  },
};

export default nextConfig;
