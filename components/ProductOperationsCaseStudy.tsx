import { portfolioVideos } from "@/data/media";
import { operationMedia } from "@/data/projects";
import PortfolioVideo from "./PortfolioVideo";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

const loop = ["问题归类", "数据观察", "形成洞察", "策略推进", "复盘迭代"];

export default function ProductOperationsCaseStudy() {
  return (
    <ProjectSection id="operations-case" number="03" kicker="AI PRODUCT OPERATIONS" title="AI Product Growth & Operations" subtitle="让反馈、指标和协作进入同一条可跟进的迭代路径。">
      <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <PortfolioVideo src={portfolioVideos.dataIteration.src} available={portfolioVideos.dataIteration.available} label="DATA-DRIVEN ITERATION / ORIGINAL AUDIO" />
        <div className="border-y border-white/[0.08]">
          {loop.map((item, index) => <div key={item} className="grid grid-cols-[42px_1fr] border-b border-white/[0.08] py-4 last:border-b-0"><span className="font-mono text-[9px] text-signal">0{index + 1}</span><p className="text-sm text-white/65">{item}</p></div>)}
        </div>
      </div>
      <div className="mt-16">
        <p className="font-mono text-[10px] text-signal">DATA → INSIGHT → ITERATION</p>
        <ProjectGallery images={[operationMedia.dashboard, operationMedia.user, operationMedia.competitor, operationMedia.iteration]} className="mt-6" />
        <p className="mt-5 text-xs leading-6 text-white/35">图中包含演示数据，仅用于说明分析框架与信息结构，不作为真实增长、转化或经营结果。</p>
      </div>
    </ProjectSection>
  );
}
