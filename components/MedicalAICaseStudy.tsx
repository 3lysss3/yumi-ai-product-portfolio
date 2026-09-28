import { medicalMedia } from "@/data/projects";
import { portfolioVideos } from "@/data/media";
import PortfolioVideo from "./PortfolioVideo";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

const flow = ["影像上传", "AI 推理", "分割结果", "参数计算", "报告输出"];

export default function MedicalAICaseStudy() {
  return (
    <ProjectSection id="medical-ai-case" number="02" kicker="MEDICAL AI CASE STUDY" title="AI Medical Imaging System" subtitle="From Model to Usable Product · 把模型、界面与用户任务组织为一条可验证的产品流程。" dark>
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div><p className="font-mono text-[10px] text-signal">01 / PROBLEM</p><h3 className="mt-5 text-2xl font-medium text-white">影像结果需要更快生成，也需要让使用者看得懂、能复核。</h3><p className="mt-5 text-[15px] leading-8 text-white/55">作为项目组长，我负责需求拆解、效果评估、技术沟通和推进，重点把技术输出翻译成上传、查看、计算与报告任务。</p></div>
        <ProjectGallery images={[medicalMedia.original]} columns={1} />
      </div>

      <div className="mt-24">
        <p className="font-mono text-[10px] text-signal">02 / REAL-TIME INFERENCE</p>
        <PortfolioVideo src={portfolioVideos.medicalInference.src} available={portfolioVideos.medicalInference.available} hasAudio={false} label="DOCTOR GT / AI INFERENCE · SOURCE VIDEO HAS NO AUDIO" className="mt-6" />
        <p className="mt-4 text-xs leading-6 text-white/35">原视频同步展示 MRI、医生标注与 AI 推理区域；素材本身无音轨，因此不额外添加背景音乐。</p>
      </div>

      <div className="mt-24"><p className="font-mono text-[10px] text-signal">03 / AI RESULT</p><ProjectGallery images={[medicalMedia.original, medicalMedia.mask, medicalMedia.prediction]} columns={3} className="mt-6" /></div>

      <div className="mt-24"><p className="mb-6 font-mono text-[10px] text-signal">04 / MODEL INTERPRETATION</p><ProjectGallery images={[medicalMedia.heatmap, medicalMedia.comparison]} /></div>

      <div className="mt-24"><p className="font-mono text-[10px] text-signal">05 / DATA & EVALUATION EVIDENCE</p><ProjectGallery images={[medicalMedia.validation, medicalMedia.training]} className="mt-6" /><p className="mt-4 text-xs leading-6 text-white/35">展示输入影像与掩膜的一致性校验，以及训练和评估过程；页面仅引用已确认的结果指标。</p></div>

      <div className="mt-24"><p className="font-mono text-[10px] text-signal">06 / 3D EXPERIENCE</p><ProjectGallery images={[medicalMedia.model3d]} columns={1} className="mt-6" /></div>

      <div className="mt-24"><p className="font-mono text-[10px] text-signal">07 / PRODUCT UI</p><ProjectGallery images={[medicalMedia.gui, medicalMedia.visualization, medicalMedia.report, medicalMedia.caseExport]} className="mt-6" /><div className="mt-7 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-5">{flow.map((item, index) => <div key={item} className="bg-[#0b0b0d] px-4 py-5"><span className="font-mono text-[8px] text-signal">0{index + 1}</span><p className="mt-3 text-sm text-white/65">{item}</p></div>)}</div></div>

      <div className="mt-20 grid gap-4 sm:grid-cols-2"><div className="border border-white/[0.09] bg-white/[0.025] p-7"><p className="font-mono text-[9px] text-white/35">CONFIRMED METRIC</p><p className="mt-4 text-3xl text-white">Dice 0.86</p><p className="mt-2 text-sm text-white/42">小病灶分割</p></div><div className="border border-white/[0.09] bg-white/[0.025] p-7"><p className="font-mono text-[9px] text-white/35">INFERENCE</p><p className="mt-4 text-3xl text-white">&lt; 10s</p><p className="mt-2 text-sm text-white/42">单例推理时间</p></div></div>
    </ProjectSection>
  );
}
