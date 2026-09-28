export type ExperienceItem = {
  date: string;
  title: string;
  organization: string;
  summary: string;
  type: string;
};

export const experience: ExperienceItem[] = [
  {
    date: "2026.03 — NOW",
    title: "科研助理",
    organization: "北京大学",
    summary: "MRI 数据整理、标注核验、异常复核、指标统计与实验台账维护。",
    type: "DATA / RESEARCH",
  },
  {
    date: "2026.01 — 2026.04",
    title: "听神经瘤 2.5D AI 分割系统",
    organization: "项目组长",
    summary: "负责需求拆解、效果评估、技术沟通和项目推进。",
    type: "AI PRODUCT PROJECT",
  },
  {
    date: "2025.09 — 2027.06",
    title: "电子与计算机工程 · 本科",
    organization: "北方工业大学",
    summary: "持续把技术理解转化为产品流程、数据证据和可交付方案。",
    type: "EDUCATION",
  },
  {
    date: "2024.09 — 2024.12",
    title: "产品运营实习",
    organization: "北京纳微星科",
    summary: "整理用户反馈与异常问题，协同跟进验证，并沉淀操作指引与 FAQ。",
    type: "B2B PRODUCT OPERATIONS",
  },
  {
    date: "2024.05 — 2024.10",
    title: "正大杯市场调查项目",
    organization: "用户研究",
    summary: "参与问卷设计，整理 2000 份有效问卷，输出需求洞察与策略建议。",
    type: "USER RESEARCH",
  },
];
