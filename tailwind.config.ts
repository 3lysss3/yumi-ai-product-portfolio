import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        panel: "#101010",
        card: "#131313",
        paper: "#F2F2F2",
        muted: "#8C8C8C",
        crimson: "#A30F24",
        signal: "#D7193F",
      },
      fontFamily: {
        sans: ["Inter", "Geist", "PingFang SC", "Microsoft YaHei", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
