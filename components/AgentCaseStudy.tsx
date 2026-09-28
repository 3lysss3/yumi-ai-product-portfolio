import { agentMedia } from "@/data/projects";
import { portfolioVideos } from "@/data/media";
import CapabilityTag from "./CapabilityTag";
import PortfolioVideo from "./PortfolioVideo";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

const workflow = ["用户输入", "问题理解", "医学知识检索", "多模态模型", "AI Reasoning", "教学反馈"];

export default function AgentCaseStudy() {
  return (
    <ProjectSection id="ai-agent-case" number="01" kicker="AI AGENT CASE STUDY" title="AI Medical Learning Agent" subtitle="AI Agent · LLM · RAG · Multimodal · Product Design">
      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div><p className="font-mono text-[10px] text-signal">01 / CHALLENGE</p><h3 className="mt-5 text-2xl font-medium text-white">传统问答缺少图像理解、知识检索与教学反馈闭环。</h3><p className="mt-5 max-w-[560px] text-[15px] leading-8 text-white/55">我把问题拆成输入理解、知识来源、答案核验和反馈设计四个环节，避免把“能回答”直接等同于“能教学”。</p></div>
        <ProjectGallery images={[agentMedia.assistant]} columns={1} />
      </div>

      <div className="mt-24">
        <p className="font-mono text-[10px] text-signal">02 / PRODUCT ARCHITECTURE</p>
        <div className="mt-6"><PortfolioVideo src={portfolioVideos.agentWorkflow.src} available={portfolioVideos.agentWorkflow.available} label="AGENT WORKFLOW / ORIGINAL AUDIO" /></div>
        <ProjectGallery images={[agentMedia.ui, agentMedia.workflow]} className="mt-6" />
        <div className="mt-5 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3 xl:grid-cols-6">
          {workflow.map((item, index) => <div key={item} className="relative bg-[#0b0b0d] px-4 py-5"><span className="font-mono text-[8px] text-[#8793ff]">0{index + 1}</span><p className="mt-3 text-sm text-white/72">{item}</p>{index < workflow.length - 1 && <span className="absolute right-2 top-1/2 hidden text-signal/50 xl:block">→</span>}</div>)}
        </div>
      </div>

      <div className="mt-24"><p className="font-mono text-[10px] text-signal">03 / RAG & KNOWLEDGE</p><ProjectGallery images={[agentMedia.rag, agentMedia.knowledge]} className="mt-6" /></div>

      <div className="mt-24 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <ProjectGallery images={[agentMedia.teaching]} columns={1} />
        <div><p className="font-mono text-[10px] text-signal">04 / AI PRODUCT DESIGN</p><h3 className="mt-5 text-2xl font-medium text-white">把模型能力变成可使用、可纠错、可继续学习的产品能力。</h3><div className="mt-7 flex flex-wrap gap-2">{["分级提示", "错误分类", "学习记录", "知识掌握", "个性化反馈"].map((item) => <CapabilityTag key={item} ai>{item}</CapabilityTag>)}</div></div>
      </div>

      <div className="mt-24 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div><p className="font-mono text-[10px] text-signal">05 / RESULT</p><p className="mt-5 text-5xl font-semibold text-white">30<span className="text-signal">+</span></p><p className="mt-3 text-sm leading-7 text-white/48">高频问题测试已完成；右侧为 AI 分析界面演示，图中数据不作为项目成果口径。</p></div>
        <ProjectGallery images={[agentMedia.result]} columns={1} />
      </div>
    </ProjectSection>
  );
}
