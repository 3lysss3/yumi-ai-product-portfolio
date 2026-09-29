import { assetPath } from "@/lib/assets";

export type ProjectFilter = "AI" | "PRODUCT" | "DATA" | "RESEARCH" | "TECH";
export type MediaKind = "cover" | "process" | "result" | "evidence" | "ui" | "medical" | "photo";

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  category: string;
  kind: MediaKind;
  available: boolean;
  aspectRatio?: "landscape" | "portrait" | "square" | "wide";
  objectPosition?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  englishTitle: string;
  description: string;
  tags: string[];
  role: string;
  result: string;
  cover: ProjectMedia;
  category: string;
  filters: ProjectFilter[];
  caseTarget: string;
  featured: boolean;
};

const media = (
  src: string,
  alt: string,
  caption: string,
  category: string,
  kind: MediaKind,
  available: boolean,
  aspectRatio: ProjectMedia["aspectRatio"] = "landscape",
  objectPosition = "center",
): ProjectMedia => ({ src: assetPath(src), alt, caption, category, kind, available, aspectRatio, objectPosition });

export const agentMedia = {
  cover: media("/images/concept-lab/ai-agent-studio.webp", "AI Agent Studio workflow orchestration interface", "AI Agent Studio", "PROJECT COVER", "cover", true, "wide"),
  assistant: media("/images/ai-agent/assistant-ui.webp", "AI assistant conversation and knowledge base interface", "AI Assistant & Knowledge Base", "PRODUCT UI", "ui", true, "wide"),
  ui: media("/images/ai-agent/agent-ui.webp", "AI medical teaching agent interface", "AI Teaching Interface", "PRODUCT UI", "ui", true),
  workflow: media("/images/ai-agent/agent-workflow.webp", "AI medical agent workflow", "Agent Workflow", "PROCESS", "process", true),
  rag: media("/images/ai-agent/rag-process.webp", "RAG retrieval process", "RAG Retrieval Process", "PROCESS", "process", true),
  knowledge: media("/images/ai-agent/knowledge-base.webp", "Medical knowledge base structure", "Knowledge Base", "EVIDENCE", "evidence", true),
  teaching: media("/images/ai-agent/teaching-agent.webp", "AI teaching feedback design", "Teaching Feedback Design", "PRODUCT UI", "ui", true),
  result: media("/images/ai-agent/model-result.webp", "AI analysis dashboard with demonstration data", "AI Analysis Dashboard · Demo Data", "DEMO UI", "ui", true),
};

export const medicalMedia = {
  cover: media("/images/medical-ai/medical-cover.webp", "Medical AI imaging visualization", "Medical Imaging Visualization", "PROJECT COVER", "cover", true, "wide"),
  original: media("/images/medical-ai/mri-original.webp", "Original brain MRI scan in the medical imaging system", "Original MRI", "ORIGINAL", "medical", true, "square"),
  mask: media("/images/medical-ai/mri-mask.webp", "Doctor annotation mask in the medical imaging system", "Doctor Annotation", "GROUND TRUTH", "medical", true, "square"),
  prediction: media("/images/medical-ai/comparison.webp", "Ground truth and AI prediction overlay comparison", "GT / Prediction / Overlay", "AI PREDICTION", "medical", true, "square"),
  comparison: media("/images/medical-ai/qualitative-comparison.webp", "Qualitative comparison of doctor annotations and model predictions", "Doctor Label vs Model Prediction", "MODEL REVIEW", "result", true, "portrait"),
  heatmap: media("/images/medical-ai/heatmap.webp", "Medical AI model attention heatmap", "Model Interpretation", "MODEL REVIEW", "medical", true),
  model3d: media("/images/medical-ai/3d-model.webp", "Medical imaging 3D reconstruction interface", "3D Structure Preview", "3D EXPERIENCE", "result", true, "wide"),
  gui: media("/images/medical-ai/gui.webp", "Medical image segmentation application interface", "Segmentation System Interface", "PRODUCT UI", "ui", true),
  report: media("/images/medical-ai/report.webp", "Medical AI structured report output", "Structured Report Output", "PRODUCT UI", "ui", true),
  training: media("/images/medical-ai/training-result.webp", "Medical AI model training curves and evaluation plots", "Training & Evaluation", "EVIDENCE", "evidence", true, "wide"),
  validation: media("/images/medical-ai/data-validation.webp", "MRI image and mask data pipeline consistency check", "Data Pipeline Validation", "EVIDENCE", "medical", true, "wide"),
  visualization: media("/images/medical-ai/visualization-platform.webp", "Medical image visualization platform interface", "Imaging Visualization Platform", "PRODUCT UI", "ui", true, "wide"),
  caseExport: media("/images/medical-ai/case-export-platform.webp", "Medical segmentation case export system", "Case Export System", "PRODUCT UI", "ui", true, "wide"),
};

export const miniProgramMedia = {
  cakeCover: media("/images/mini-program/cake-cover.webp", "Cake ordering mini program demo", "Cake Ordering Demo", "PROJECT COVER", "cover", true, "wide"),
  cakeHome: media("/images/mini-program/cake-home.webp", "Cake ordering mini program menu interface", "Cake Menu Interface", "PRODUCT UI", "ui", true, "portrait"),
  cakeDetail: media("/images/mini-program/cake-detail.webp", "Cake product purchase interface", "Product Selection", "PRODUCT UI", "ui", true, "portrait"),
  cakeCart: media("/images/mini-program/cake-cart.webp", "Cake ordering cart interface", "Cart Flow", "PRODUCT UI", "ui", true, "landscape"),
  cocktailCover: media("/images/mini-program/cocktail-cover.webp", "Cocktail assistant mini program home", "Cocktail Assistant", "PROJECT COVER", "cover", true, "portrait"),
  cocktailHome: media("/images/mini-program/cocktail-home.webp", "Cocktail assistant home interface", "Discovery", "PRODUCT UI", "ui", true, "portrait"),
  cocktailDetail: media("/images/mini-program/cocktail-detail.webp", "Cocktail assistant recommendation interface", "Personalized Recommendation", "PRODUCT UI", "ui", true, "portrait"),
  cocktailResult: media("/images/mini-program/cocktail-result.webp", "Cocktail recipe result interface", "Recipe Result", "PRODUCT UI", "ui", true, "portrait"),
  romanceHome: media("/images/mini-program/romance-home.webp", "Relationship mini program home interface", "Relationship Mini Program", "PRODUCT UI", "ui", true, "portrait"),
  romanceResult: media("/images/mini-program/romance-result.webp", "Relationship mini program result interface", "Interaction Result", "PRODUCT UI", "ui", true, "portrait"),
};

export const operationMedia = {
  cover: media("/images/product-operation/operation-cover.webp", "AI product operations analysis interface", "AI Product Operations", "PROJECT COVER", "cover", true, "wide"),
  dashboard: media("/images/product-operation/dashboard.webp", "Product operations dashboard with demonstration data", "Product Dashboard · Demo Data", "DATA", "ui", true, "wide"),
  competitor: media("/images/product-operation/competitor-analysis.webp", "AI product competitor analysis template", "Competitor Analysis · Sample Data", "RESEARCH", "ui", true, "wide"),
  funnel: media("/images/product-operation/funnel.webp", "Product conversion funnel dashboard with demonstration data", "Conversion Funnel · Demo Data", "DATA", "result", true),
  user: media("/images/product-operation/user-analysis.webp", "User growth analysis dashboard with demonstration data", "User Analysis · Demo Data", "DATA", "ui", true, "wide"),
  strategy: media("/images/product-operation/strategy.webp", "AI product operations strategy dashboard with demonstration data", "Operations Strategy · Demo Data", "STRATEGY", "process", true),
  iteration: media("/images/product-operation/iteration.webp", "AI product iteration comparison with demonstration data", "Iteration Comparison · Demo Data", "ITERATION", "evidence", true),
};

export const researchMedia = {
  cover: media("/images/research/research-cover.webp", "Offline user research interview", "Offline User Research", "PROJECT COVER", "photo", true, "landscape"),
  interview: media("/images/research/offline-interview.webp", "Tea culture field interview", "Field Interview", "EVIDENCE", "photo", true, "landscape"),
  secondary: media("/images/research/field-interview-secondary.webp", "Tea culture practitioner interview", "Practitioner Conversation", "EVIDENCE", "photo", true, "landscape"),
  online: media("/images/research/online-interview.webp", "Anonymized online user interview record", "Online Interview · Anonymized", "EVIDENCE", "photo", true),
  notes: media("/images/research/interview-notes.webp", "User research interview notes and coding record", "Interview Notes", "PROCESS", "evidence", true),
  insight: media("/images/research/insight.webp", "User research insight summary", "Research Insight", "RESULT", "result", true),
};

export const ecommerceMedia = {
  cover: media("/images/ecommerce/store-dashboard.webp", "E-commerce operations dashboard with demonstration data", "E-commerce Operations · Demo Data", "PROJECT COVER", "cover", true, "wide"),
  dashboard: media("/images/ecommerce/store-dashboard.webp", "Store operations dashboard with demonstration data", "Store Dashboard · Demo Data", "DATA", "ui", true, "wide"),
  sku: media("/images/ecommerce/sku-analysis.webp", "Operations strategy interface with demonstration data", "Operations Strategy · Demo Data", "STRATEGY", "process", true, "wide"),
  product: media("/images/ecommerce/product-analysis.webp", "Competitor analysis interface with demonstration data", "Competitor Analysis · Demo Data", "RESEARCH", "ui", true, "wide"),
  funnel: media("/images/ecommerce/conversion-funnel.webp", "Conversion funnel interface with demonstration data", "Conversion Funnel · Demo Data", "DATA", "result", true, "wide"),
};

export const liveDemoMedia = {
  medicalSite: media("/images/live-demos/medical-site.webp", "LightCBAM-UNet medical workstation introduction website", "Medical Workstation Web Demo", "INTERACTIVE WEB", "ui", true, "wide"),
  medicalQr: media("/images/live-demos/medical-site-qr.webp", "QR code for vestibular schwannoma introduction website", "Scan to Open Medical Demo", "LIVE QR", "evidence", true, "square"),
  watchSite: media("/images/live-demos/watch-site.webp", "AuraMed interactive rehabilitation watch website", "Interactive Rehabilitation Watch", "INTERACTIVE WEB", "ui", true, "wide"),
  watchSiteSecondary: media("/images/live-demos/watch-site-secondary.webp", "AuraMed interactive watch website alternate state", "Interactive System State", "INTERACTIVE WEB", "ui", true, "wide"),
  watchQr: media("/images/live-demos/watch-site-qr.webp", "QR code for interactive rehabilitation watch website", "Scan to Open Watch Demo", "LIVE QR", "evidence", true, "square"),
};

export const additionalProductMedia = {
  campusMarket: media("/images/additional-products/campus-market.webp", "Campus second-hand marketplace mini program interface", "Campus Marketplace", "PRODUCT UI", "ui", true, "portrait"),
  cargoDriver: media("/images/additional-products/cargo-driver.webp", "Cargo driver mini program workflow", "Cargo Driver Workflow", "PRODUCT UI", "ui", true, "wide"),
  whiteElephant: media("/images/additional-products/white-elephant.webp", "White Elephant student housing application flow", "Student Housing Product Flow", "PRODUCT UI", "ui", true, "wide"),
};

export const developmentMedia = {
  cakeEnvironment: media("/images/development/cake-dev-environment.webp", "WeChat developer tools showing the cake mini program implementation", "Mini Program Development Environment", "DEVELOPMENT EVIDENCE", "evidence", true, "wide"),
};

export const conceptLabMedia = {
  petCommunity: media("/images/concept-lab/pet-community.webp", "Pet growth record and community product concept", "Pet Growth & Community", "CONCEPT UI", "cover", true, "wide"),
  aiInterview: media("/images/concept-lab/ai-interview.webp", "AI interview assistant product concept interface", "AI Interview Assistant", "CONCEPT UI · DEMO DATA", "ui", true, "wide"),
  attendance: media("/images/concept-lab/attendance-platform.webp", "Enterprise attendance management platform concept", "Smart Attendance Platform", "B2B CONCEPT · DEMO DATA", "ui", true, "wide"),
  cocktail: media("/images/concept-lab/cocktail-ai.webp", "AI cocktail recommendation application concept", "AI Cocktail Assistant", "CONCEPT UI", "ui", true, "wide"),
  freight: media("/images/concept-lab/freight-driver.webp", "Freight driver workflow tool concept", "Freight Driver Tool", "PRODUCT FLOW · DEMO DATA", "ui", true, "wide"),
  truthOrDare: media("/images/concept-lab/truth-or-dare.webp", "Truth or dare mobile application concept", "Truth or Dare", "SIDE PROJECT · CONCEPT UI", "ui", true, "wide"),
};

export const awardMedia = [
  media("/images/awards/award-01.webp", "Privacy-redacted IICT artificial intelligence professional capability certificate issued to Lv Yushan", "IICT 人工智能岗位能力评价证书 · 2026", "CERTIFICATE", "evidence", true, "landscape"),
  media("/images/awards/award-02.webp", "Privacy-redacted Huawei HCIA AI certification issued to Yushan Lv", "Huawei HCIA-AI · Valid through 2029", "CERTIFICATE", "evidence", true, "landscape"),
  media("/images/awards/certificate-01.webp", "Privacy-redacted Lanqiao Cup Python competition award certificate", "蓝桥杯 Python 程序设计大学 C 组 · 北京赛区三等奖 · 2024", "AWARD", "evidence", true, "portrait"),
];

export const projects: Project[] = [
  { id: "01", slug: "medical-agent", title: "医学教学智能体", englishTitle: "AI Medical Learning Agent", description: "围绕医学知识问答组织知识库、问题集与反馈流程，把模型能力转成可测试的学习体验。", tags: ["AI Agent", "RAG", "LLM", "Product Design"], role: "知识库整理 / 测试评估 / 提示词迭代", result: "完成 30+ 高频问题测试", cover: agentMedia.cover, category: "AI / AGENT / RAG", filters: ["AI", "PRODUCT", "TECH"], caseTarget: "ai-agent-case", featured: true },
  { id: "02", slug: "medical-imaging", title: "听神经瘤 AI 分割系统", englishTitle: "AI Medical Imaging System", description: "把影像上传、AI 分割、参数计算和报告输出串成完整流程，让技术结果进入可验证的使用任务。", tags: ["Medical AI", "Computer Vision", "Visualization"], role: "项目组长 / 需求拆解 / 效果评估", result: "小病灶 Dice 0.86 · 单例推理 <10 秒", cover: medicalMedia.cover, category: "AI / MEDICAL / TECH", filters: ["AI", "PRODUCT", "TECH"], caseTarget: "medical-ai-case", featured: true },
  { id: "03", slug: "ai-product-operations", title: "AI 产品增长与运营", englishTitle: "AI Product Growth & Operations", description: "从反馈、行为与竞品信息出发组织问题优先级，形成可跟进的策略与迭代路径。", tags: ["Product Operations", "Data", "Iteration"], role: "问题归类 / 数据框架 / 策略复盘", result: "以演示界面呈现分析与迭代框架", cover: operationMedia.cover, category: "DATA / OPERATIONS", filters: ["AI", "DATA", "PRODUCT"], caseTarget: "operations-case", featured: true },
  { id: "04", slug: "product-concept-lab", title: "产品概念实验室", englishTitle: "Product Concept Lab", description: "围绕宠物、企业服务、物流和生活方式场景，用界面原型快速验证信息架构与关键任务。", tags: ["Product Design", "B2B", "UX"], role: "场景拆解 / 信息架构 / 交互表达", result: "概念界面仅展示设计思路，不代表真实上线或业务数据", cover: conceptLabMedia.petCommunity, category: "PRODUCT / CONCEPT", filters: ["PRODUCT", "TECH"], caseTarget: "prototype-lab", featured: true },
];

export const projectCategories = [
  { id: "01", name: "AI PRODUCT", count: "03", note: "智能体 / 医学影像 / AI 运营" },
  { id: "02", name: "PRODUCT OPERATIONS", count: "02", note: "增长分析 / 电商运营" },
  { id: "03", name: "DATA & STRATEGY", count: "03", note: "指标框架 / 用户研究 / 复盘" },
  { id: "04", name: "PRODUCT EXECUTION", count: "06", note: "点单 / 调酒 / 校园交易 / 货运 / 租住" },
] as const;

export const conceptLabGallery: ProjectMedia[] = [
  conceptLabMedia.aiInterview,
  conceptLabMedia.attendance,
  conceptLabMedia.cocktail,
  conceptLabMedia.freight,
  conceptLabMedia.truthOrDare,
];
