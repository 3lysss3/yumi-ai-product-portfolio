import { portfolioVideos } from "@/data/media";
import { agentMedia } from "@/data/projects";
import PortfolioVideo from "./PortfolioVideo";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

const workflow = ["用户输入", "问题理解", "知识检索", "多模态推理", "教学反馈"];

export default function AgentCaseStudy() {
  return (
    <ProjectSection id="ai-agent-case" number="01" kicker="AI AGENT CASE STUDY" title="AI Medical Learning Agent" subtitle="从医学学习任务出发，把检索、模型和反馈组织为可测试的产品闭环。">
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="font-mono text-[10px] text-signal">01 / CHALLENGE</p>
          <h3 className="mt-5 text-2xl font-medium text-white">传统问答缺少图像理解、知识来源与纠错反馈。</h3>
          <p className="mt-5 text-[15px] leading-8 text-white/55">我负责知识库整理、测试评估和提示词迭代，把“能回答”拆成可理解、可核验、可继续学习三个产品目标。</p>
        </div>
        <ProjectGallery images={[agentMedia.assistant]} columns={1} />
      </div>

      <div className="mt-16">
        <p className="font-mono text-[10px] text-signal">02 / ARCHITECTURE</p>
        <PortfolioVideo src={portfolioVideos.agentWorkflow.src} available={portfolioVideos.agentWorkflow.available} label="AGENT WORKFLOW / ORIGINAL AUDIO" className="mt-6" />
        <div className="mt-5 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-5">
          {workflow.map((item, index) => <div key={item} className="bg-[#0b0b0d] px-4 py-5"><span className="font-mono text-[8px] text-[#8793ff]">0{index + 1}</span><p className="mt-3 text-sm text-white/70">{item}</p></div>)}
        </div>
      </div>

      <div className="mt-16">
        <p className="font-mono text-[10px] text-signal">03 / PRODUCTIZATION</p>
        <ProjectGallery images={[agentMedia.workflow, agentMedia.rag, agentMedia.teaching, agentMedia.result]} className="mt-6" />
        <p className="mt-5 max-w-[760px] text-sm leading-7 text-white/42">已完成 30+ 高频问题测试。分析界面中的数据为演示口径，只用于说明反馈结构，不作为真实业务结果。</p>
      </div>
    </ProjectSection>
  );
}
