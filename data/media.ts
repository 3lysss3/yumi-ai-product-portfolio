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

export const chapterScenes = [
  { id: "01", title: "Observe", note: "从场景与用户开始", src: assetPath("/videos/scenes/scene-01.mp4") },
  { id: "02", title: "Define", note: "把模糊问题变成边界", src: assetPath("/videos/scenes/scene-02.mp4") },
  { id: "03", title: "Build", note: "连接技术与产品流程", src: assetPath("/videos/scenes/scene-03.mp4") },
  { id: "04", title: "Deliver", note: "推进方案进入真实协作", src: assetPath("/videos/scenes/scene-04.mp4") },
  { id: "05", title: "Verify", note: "用数据和反馈复核结果", src: assetPath("/videos/scenes/scene-05.mp4") },
  { id: "06", title: "Iterate", note: "保留问题，持续优化", src: assetPath("/videos/scenes/scene-06.mp4") },
  { id: "07", title: "Imagine", note: "探索下一种产品可能", src: assetPath("/videos/scenes/scene-07.mp4") },
] as const;
