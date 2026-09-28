export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "01",
    title: "PRODUCT",
    description: "从问题定义到交付闭环",
    skills: ["用户研究", "PRD", "产品原型", "竞品分析", "用户体验", "产品规划"],
  },
  {
    id: "02",
    title: "AI",
    description: "理解能力边界并设计体验",
    skills: ["LLM", "RAG", "Prompt Engineering", "AI Agent", "Computer Vision", "Deep Learning"],
  },
  {
    id: "03",
    title: "DATA",
    description: "用数据定位问题与验证结果",
    skills: ["Excel", "SQL 基础", "Python", "Pandas", "Data Analysis", "Visualization"],
  },
  {
    id: "04",
    title: "OPERATIONS",
    description: "连接用户反馈与产品迭代",
    skills: ["用户增长", "内容运营", "电商运营", "策略运营", "FAQ", "数据复盘"],
  },
];
