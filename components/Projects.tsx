import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="site-section chapter-panel border-b border-white/[0.07]">
      <div className="section-shell">
        <SectionHeading kicker="SELECTED WORK" title="四个入口，快速看懂我的产品能力。" subtitle="AI Agent、医学影像、产品运营与概念原型。点击任意缩略图，直接进入对应案例。" />

        <div className="project-nav-grid mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>

        <p className="mt-7 font-mono text-[9px] leading-5 text-white/30">ONE COVER / ONE DESTINATION · 所有视觉素材仅出现一次，数据口径以原始材料为准。</p>
      </div>
    </section>
  );
}
