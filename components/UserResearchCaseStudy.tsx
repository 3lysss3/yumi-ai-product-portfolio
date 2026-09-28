import { researchMedia } from "@/data/projects";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";

const stages = ["RESEARCH QUESTION", "FIELD INTERVIEW", "USER FEEDBACK", "INSIGHT", "PRODUCT OPPORTUNITY"];

export default function UserResearchCaseStudy() {
  return (
    <ProjectSection id="research-case" number="05" kicker="USER RESEARCH CASE" title="Offline User Research" subtitle="通过一线访谈理解经营者、体验参与者与推广场景，把观察转成可讨论的产品机会。">
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div className="border-l border-signal/60 pl-5"><p className="max-w-[720px] text-xl leading-9 text-white/72">走访 20+ 家门店，与经营者沟通经营模式与推广难点；照片作为真实过程证据，不增加赛博滤镜。</p></div><p className="font-mono text-[9px] leading-6 text-white/35">EVIDENCE FIRST<br />NO FABRICATED INTERVIEW DATA</p></div>
      <ProjectGallery images={[researchMedia.cover, researchMedia.interview, researchMedia.secondary, researchMedia.online]} className="mt-12" />
      <div className="mt-16 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-5">{stages.map((stage, index) => <div key={stage} className="bg-[#090909] px-4 py-5"><span className="font-mono text-[8px] text-signal">0{index + 1}</span><p className="mt-3 font-mono text-[8px] leading-5 text-white/55">{stage}</p></div>)}</div>
      <div className="mt-16"><p className="font-mono text-[10px] text-signal">NOTES / INSIGHT</p><ProjectGallery images={[researchMedia.notes, researchMedia.insight]} className="mt-6" /></div>
    </ProjectSection>
  );
}
