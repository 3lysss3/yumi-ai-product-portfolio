import type { Metadata } from "next";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assets";
import "./globals.css";

export const metadata: Metadata = {
  title: "YUMI | AI Product & Product Operations",
  description:
    "吕雨珊的 AI 产品经理与产品运营求职作品集，聚焦 AI 产品、用户需求、数据分析与项目推进。",
  keywords: ["AI 产品经理", "产品运营", "AI 产品运营", "吕雨珊", "YUMI"],
  icons: {
    icon: assetPath("/images/profile/avatar.webp"),
  },
  openGraph: {
    title: "YUMI | AI Product & Product Operations",
    description: "从需求洞察到产品落地，用 AI、数据和产品思维解决真实问题。",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
