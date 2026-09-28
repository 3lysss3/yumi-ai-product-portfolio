import { operationMedia } from "@/data/projects";
import { portfolioVideos } from "@/data/media";
import PortfolioVideo from "./PortfolioVideo";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

const loop = ["PROBLEM", "DATA", "INSIGHT", "STRATEGY", "ITERATION"];
const insights = ["把分散反馈归到具体功能与使用场景。", "区分演示指标与真实业务结果，避免过度结论。", "每条策略都需要对应验证口径和复盘入口。"];

export default function ProductOperationsCaseStudy() {
  return (
    <ProjectSection id="operations-case" number="03" kicker="AI PRODUCT OPERATIONS" title="AI Product Growth & Operations" subtitle="以问题闭环、数据框架和迭代节奏强化 AI 产品运营能力。">
      <div className="mt-14"><PortfolioVideo src={portfolioVideos.dataIteration.src} available={portfolioVideos.dataIteration.available} label="DATA-DRIVEN ITERATION / ORIGINAL AUDIO" /></div>
      <div className="mt-6 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-5">{loop.map((item, index) => <div key={item} className="bg-[#090909] px-4 py-5"><span className="font-mono text-[8px] text-signal">0{index + 1}</span><p className="mt-3 font-mono text-[9px] text-white/60">{item}</p></div>)}</div>
      <div className="mt-20"><p className="font-mono text-[10px] text-signal">DATA / USER BEHAVIOR</p><ProjectGallery images={[operationMedia.dashboard, operationMedia.user, operationMedia.funnel]} columns={3} className="mt-6" /><p className="mt-4 text-xs leading-6 text-white/35">看板图片包含演示数据，仅用于展示指标结构与分析界面，不作为真实业务增长证明。</p></div>
      <div className="mt-20"><p className="font-mono text-[10px] text-signal">INSIGHT</p><div className="mt-6 grid gap-4 md:grid-cols-3">{insights.map((item, index) => <div key={item} className="border border-white/[0.09] bg-white/[0.025] p-6"><span className="font-mono text-[9px] text-signal">0{index + 1}</span><p className="mt-5 text-sm leading-7 text-white/62">{item}</p></div>)}</div></div>
      <div className="mt-20"><p className="font-mono text-[10px] text-signal">RESEARCH / STRATEGY / ITERATION</p><ProjectGallery images={[operationMedia.competitor, operationMedia.strategy, operationMedia.iteration]} columns={3} className="mt-6" /></div>
    </ProjectSection>
  );
}
