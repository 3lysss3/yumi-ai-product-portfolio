import { portfolioVideos } from "@/data/media";
import PortfolioVideo from "./PortfolioVideo";

export default function ProjectTransition() {
  return (
    <section aria-label="项目案例转场" className="border-b border-white/[0.07] bg-[#070707] px-[var(--gutter)] py-20">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
        <div>
          <p className="section-kicker">CASE FILE / TRANSITION</p>
          <h2 className="mt-6 max-w-[420px] text-3xl font-medium leading-tight text-white sm:text-4xl">从模型验证，切换到产品运营闭环。</h2>
          <p className="mt-5 max-w-[430px] text-sm leading-7 text-white/45">技术结果需要继续进入问题识别、数据观察、策略设计和迭代验证。</p>
        </div>
        <PortfolioVideo src={portfolioVideos.projectTransition.src} available={portfolioVideos.projectTransition.available} label="PROJECT SYSTEM / ORIGINAL AUDIO" />
      </div>
    </section>
  );
}
