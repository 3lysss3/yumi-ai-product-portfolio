import { portfolioVideos } from "@/data/media";
import { medicalMedia } from "@/data/projects";
import PortfolioVideo from "./PortfolioVideo";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

const flow = ["影像上传", "AI 推理", "结果复核", "参数计算", "报告输出"];

export default function MedicalAICaseStudy() {
  return (
    <ProjectSection id="medical-ai-case" number="02" kicker="MEDICAL AI CASE STUDY" title="AI Medical Imaging System" subtitle="把模型输出翻译为上传、分割、复核、计算与报告任务。" dark>
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div>
          <p className="font-mono text-[10px] text-signal">01 / PRODUCT GOAL</p>
          <h3 className="mt-5 text-2xl font-medium text-white">让结果生成得更快，也让使用者看得懂、能复核。</h3>
          <p className="mt-5 text-[15px] leading-8 text-white/55">作为项目组长，我负责需求拆解、效果评估、技术沟通和进度推进。</p>
        </div>
        <PortfolioVideo src={portfolioVideos.medicalInference.src} available={portfolioVideos.medicalInference.available} hasAudio={false} label="DOCTOR GT / AI INFERENCE · SOURCE VIDEO HAS NO AUDIO" />
      </div>

      <div className="mt-16">
        <p className="font-mono text-[10px] text-signal">02 / RESULT REVIEW</p>
        <ProjectGallery images={[medicalMedia.original, medicalMedia.mask, medicalMedia.prediction]} columns={3} className="mt-6" />
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <ProjectGallery images={[medicalMedia.heatmap, medicalMedia.model3d]} />
        <div>
          <p className="font-mono text-[10px] text-signal">03 / EXPLAIN & EXPLORE</p>
          <h3 className="mt-5 text-2xl font-medium text-white">用注意力解释与三维查看支持结果判断。</h3>
          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="border border-white/[0.09] p-5"><p className="font-mono text-[8px] text-white/35">CONFIRMED</p><p className="mt-3 text-2xl text-white">Dice 0.86</p></div>
            <div className="border border-white/[0.09] p-5"><p className="font-mono text-[8px] text-white/35">INFERENCE</p><p className="mt-3 text-2xl text-white">&lt; 10s</p></div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <p className="font-mono text-[10px] text-signal">04 / PRODUCT DELIVERY</p>
        <ProjectGallery images={[medicalMedia.gui, medicalMedia.report]} className="mt-6" />
        <div className="mt-6 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-5">{flow.map((item, index) => <div key={item} className="bg-[#0b0b0d] px-4 py-5"><span className="font-mono text-[8px] text-signal">0{index + 1}</span><p className="mt-3 text-sm text-white/65">{item}</p></div>)}</div>
      </div>
    </ProjectSection>
  );
}
