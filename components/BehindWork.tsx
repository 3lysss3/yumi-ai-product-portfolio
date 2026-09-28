import { behindWorkMedia } from "@/data/projects";
import ProjectGallery from "./ProjectGallery";
import SectionHeading from "./SectionHeading";

export default function BehindWork() {
  return (
    <section id="behind-work" className="site-section border-b border-white/[0.07]">
      <div className="section-shell">
        <SectionHeading kicker="BEHIND THE WORK" title="Process, Evidence & Experiments" subtitle="真实界面、医学影像、访谈照片与产品实验构成项目证据墙。点击任意真实素材可全屏查看。" />
        <ProjectGallery images={behindWorkMedia} variant="masonry" className="mt-14 lg:mt-20" />
      </div>
    </section>
  );
}
