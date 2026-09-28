import { additionalProductMedia, ecommerceMedia, medicalMedia, miniProgramMedia } from "@/data/projects";
import BeforeAfterSlider from "./BeforeAfterSlider";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

export default function OtherProjects() {
  return (
    <ProjectSection id="other-projects" number="07" kicker="OTHER PROJECTS" title="更多产品、数据与技术实践。" subtitle="用真实界面补充移动产品、复杂流程、商业分析与医学 AI 结果复核能力。" dark>
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="font-mono text-[10px] text-signal">COCKTAIL ASSISTANT</p><h3 className="mt-5 text-2xl font-medium text-white">从发现、推荐到配方结果的轻量用户流程。</h3><p className="mt-4 text-sm leading-7 text-white/48">横向滑动查看真实界面，桌面和移动端均支持拖动。</p></div><ProjectGallery images={[miniProgramMedia.cocktailHome, miniProgramMedia.cocktailDetail, miniProgramMedia.cocktailResult]} variant="phones" /></div>

      <div className="mt-24 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="font-mono text-[10px] text-signal">RELATIONSHIP MINI PROGRAM</p><h3 className="mt-5 text-2xl font-medium text-white">用轻量内容与结果反馈组织情感互动路径。</h3><p className="mt-4 text-sm leading-7 text-white/48">保留原始移动界面，以补充展示内容型产品的信息组织与反馈设计。</p></div><ProjectGallery images={[miniProgramMedia.romanceHome, miniProgramMedia.romanceResult]} variant="phones" /></div>

      <div className="mt-24"><p className="font-mono text-[10px] text-signal">PRODUCT FLOW EXPLORATIONS</p><h3 className="mt-5 max-w-[780px] text-2xl font-medium text-white">从校园交易、货运履约到跨语言租住，拆解不同用户任务。</h3><ProjectGallery images={[additionalProductMedia.campusMarket, additionalProductMedia.cargoDriver, additionalProductMedia.whiteElephant]} columns={3} className="mt-7" /></div>

      <div className="mt-24"><p className="font-mono text-[10px] text-signal">E-COMMERCE PRODUCT OPERATIONS</p><h3 className="mt-5 max-w-[780px] text-2xl font-medium text-white">用经营、策略、竞品与转化视角建立分析框架。</h3><ProjectGallery images={[ecommerceMedia.dashboard, ecommerceMedia.sku, ecommerceMedia.product, ecommerceMedia.funnel]} className="mt-7" /><p className="mt-4 text-xs leading-6 text-white/35">图中为演示数据，用于展示分析结构和信息呈现，不作为真实增长或经营结果。</p></div>

      <div className="mt-24"><p className="font-mono text-[10px] text-signal">MEDICAL AI COMPARISON</p><h3 className="mt-5 text-2xl font-medium text-white">Doctor Annotation vs AI Prediction</h3><p className="mt-4 max-w-[720px] text-sm leading-7 text-white/48">拖动控制线复核医生标注与模型输出的区域差异；对照素材来自已提供的医学影像项目。</p><div className="mt-7"><BeforeAfterSlider before={medicalMedia.mask} after={medicalMedia.prediction} /></div><div className="mt-5 grid grid-cols-2 gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-4">{["Original MRI", "Doctor Annotation", "AI Prediction", "Prediction Comparison"].map((item, index) => <div key={item} className="bg-[#0b0b0d] p-4"><span className="font-mono text-[8px] text-signal">0{index + 1}</span><p className="mt-2 text-xs text-white/52">{item}</p></div>)}</div></div>
    </ProjectSection>
  );
}
