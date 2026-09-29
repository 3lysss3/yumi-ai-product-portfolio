import { researchMedia } from "@/data/projects";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

const stages = ["提出问题", "进入现场", "归纳反馈", "形成洞察", "识别机会"];

export default function UserResearchCaseStudy() {
  return (
    <ProjectSection id="research-case" number="05" kicker="USER RESEARCH" title="Offline User Research" subtitle="用一线访谈校正假设，再把观察转成可讨论的产品机会。">
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div className="border-l border-signal/60 pl-5">
          <p className="text-xl leading-9 text-white/72">走访 20+ 家门店，与经营者沟通经营模式和推广难点。</p>
          <p className="mt-5 font-mono text-[9px] leading-6 text-white/35">REAL FIELD EVIDENCE<br />NO FABRICATED INTERVIEW DATA</p>
        </div>
        <ProjectGallery images={[researchMedia.cover, researchMedia.interview, researchMedia.secondary, researchMedia.insight]} />
      </div>
      <div className="mt-14 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-5">{stages.map((stage, index) => <div key={stage} className="bg-[#090909] px-4 py-5"><span className="font-mono text-[8px] text-signal">0{index + 1}</span><p className="mt-3 text-xs text-white/55">{stage}</p></div>)}</div>
    </ProjectSection>
  );
}
