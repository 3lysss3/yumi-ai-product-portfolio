import { liveDemoMedia, type ProjectMedia } from "@/data/projects";
import { ScanLine } from "lucide-react";
import Image from "next/image";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

type DemoPanelProps = {
  index: string;
  title: string;
  description: string;
  screenshots: ProjectMedia[];
  qr: ProjectMedia;
  note: string;
};

function DemoPanel({ index, title, description, screenshots, qr, note }: DemoPanelProps) {
  return (
    <article className="border-t border-white/[0.09] pt-9 first:border-t-0 first:pt-0">
      <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
        <div className="xl:sticky xl:top-28">
          <p className="font-mono text-[10px] text-signal">{index} / LIVE PRODUCT DEMO</p>
          <h3 className="mt-5 max-w-[560px] text-2xl font-medium text-white sm:text-3xl">{title}</h3>
          <p className="mt-5 max-w-[560px] text-[15px] leading-8 text-white/52">{description}</p>

          <div className="mt-7 inline-grid grid-cols-[112px_1fr] items-center gap-5 border border-white/[0.1] bg-white/[0.025] p-4">
            <div className="bg-white p-1.5">
              <Image src={qr.src} alt={qr.alt} width={112} height={112} quality={100} unoptimized className="h-auto w-full" />
            </div>
            <div>
              <ScanLine className="h-5 w-5 text-signal" aria-hidden="true" />
              <p className="mt-3 font-mono text-[10px] text-white/70">SCAN TO OPEN</p>
              <p className="mt-2 text-xs leading-6 text-white/38">{note}</p>
            </div>
          </div>
        </div>

        <ProjectGallery images={screenshots} columns={1} />
      </div>
    </article>
  );
}

export default function InteractiveDemos() {
  return (
    <ProjectSection
      id="interactive-demos"
      number="06"
      kicker="INTERACTIVE PRODUCT DEMOS"
      title="从静态方案走到可访问、可操作的产品体验。"
      subtitle="二维码与网页截图来自已提供素材；页面中的概念文案和演示数值仅用于展示产品结构，不作为真实业务成效。"
    >
      <div className="mt-14 space-y-24 lg:mt-20">
        <DemoPanel
          index="01"
          title="医学影像 AI 工作站介绍网页"
          description="以产品页面组织项目背景、模型能力、多模态平台与康复场景，让技术项目能够被招聘者和非算法角色快速理解。"
          screenshots={[liveDemoMedia.medicalSite]}
          qr={liveDemoMedia.medicalQr}
          note="前庭神经鞘瘤项目网页"
        />
        <DemoPanel
          index="02"
          title="AuraMed AI 互动康复手表网页"
          description="通过网页控制台呈现语音检测、纯音筛查、面神经评估与康复趋势等交互模块，补充展示复杂场景的信息架构与互动实现。"
          screenshots={[liveDemoMedia.watchSite, liveDemoMedia.watchSiteSecondary]}
          qr={liveDemoMedia.watchQr}
          note="互动手表实时演示网页"
        />
      </div>
    </ProjectSection>
  );
}
