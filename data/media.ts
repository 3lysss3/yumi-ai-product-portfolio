import { assetPath } from "@/lib/assets";

export const portfolioVideos = {
  intro: { src: assetPath("/videos/intro.mp4"), available: true },
  aiAnalysis: { src: assetPath("/videos/ai-analysis.mp4"), available: true },
  agentWorkflow: { src: assetPath("/videos/agent-workflow.mp4"), available: true },
  dataIteration: { src: assetPath("/videos/data-iteration.mp4"), available: true },
  productDemo: { src: assetPath("/videos/product-demo.mp4"), available: true },
  medicalInference: { src: assetPath("/videos/medical-inference.mp4"), available: true },
  projectTransition: { src: assetPath("/videos/project-transition.mp4"), available: true },
  outro: { src: assetPath("/videos/outro.mp4"), available: true },
} as const;
