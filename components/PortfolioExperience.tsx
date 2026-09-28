"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import About from "./About";
import AgentCaseStudy from "./AgentCaseStudy";
import AIThinking from "./AIThinking";
import BehindWork from "./BehindWork";
import Categories from "./Categories";
import CustomCursor from "./CustomCursor";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Intro, { type IntroState } from "./Intro";
import InteractiveDemos from "./InteractiveDemos";
import MedicalAICaseStudy from "./MedicalAICaseStudy";
import Navbar from "./Navbar";
import OtherProjects from "./OtherProjects";
import OutroSection from "./OutroSection";
import ProductExecution from "./ProductExecution";
import ProductOperationsCaseStudy from "./ProductOperationsCaseStudy";
import ProjectTransition from "./ProjectTransition";
import Projects from "./Projects";
import ScrollIndicator from "./ScrollIndicator";
import Skills from "./Skills";
import UserResearchCaseStudy from "./UserResearchCaseStudy";

export default function PortfolioExperience() {
  const [introState, setIntroState] = useState<IntroState>("loading");
  const visible = introState === "transitioning" || introState === "finished";

  return (
    <>
      <Intro onStateChange={setIntroState} />
      <CustomCursor />
      <Navbar visible={visible} />
      <ScrollIndicator visible={visible} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: introState === "transitioning" ? 0.85 : 0.25, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!visible}
      >
        <main>
          <Hero revealed={visible} />
          <About />
          <Skills />
          <Projects />
          <Categories />
          <AIThinking />
          <AgentCaseStudy />
          <MedicalAICaseStudy />
          <ProjectTransition />
          <ProductOperationsCaseStudy />
          <ProductExecution />
          <UserResearchCaseStudy />
          <InteractiveDemos />
          <OtherProjects />
          <BehindWork />
          <Experience />
          <OutroSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
