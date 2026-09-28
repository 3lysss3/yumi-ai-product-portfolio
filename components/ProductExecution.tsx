import { developmentMedia, miniProgramMedia } from "@/data/projects";
import { portfolioVideos } from "@/data/media";
import PortfolioVideo from "./PortfolioVideo";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

export default function ProductExecution() {
  return (
    <ProjectSection id="product-execution" number="04" kicker="PRODUCT EXECUTION" title="Cake Ordering Mini Program" subtitle="这个项目不包装成 AI。它用于证明信息架构、用户流程、交互设计和产品落地能力。" dark>
      <div className="mt-14"><PortfolioVideo src={portfolioVideos.productDemo.src} available={portfolioVideos.productDemo.available} label="MINI PROGRAM DEMO / ORIGINAL AUDIO" /></div>
      <div className="mt-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div><p className="font-mono text-[10px] text-signal">CORE FLOW</p><h3 className="mt-5 text-2xl font-medium text-white">浏览 → 选品 → 购物车 → 下单</h3><p className="mt-5 text-[15px] leading-8 text-white/55">用简洁的移动端路径承接用户任务，通过菜单、购买页与购物车三组真实界面展示核心点单流程。</p></div>
        <ProjectGallery images={[miniProgramMedia.cakeHome, miniProgramMedia.cakeDetail, miniProgramMedia.cakeCart]} variant="phones" />
      </div>
      <div className="mt-20"><p className="font-mono text-[10px] text-signal">IMPLEMENTATION EVIDENCE</p><ProjectGallery images={[developmentMedia.cakeEnvironment]} columns={1} className="mt-6" /></div>
    </ProjectSection>
  );
}
