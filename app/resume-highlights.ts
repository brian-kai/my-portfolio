// Source: Huang_Kai-Chun_Resume.pdf (public/file), pages 1–2.
// Figures are the outcomes recorded in the resume, not live service counters.
export const education = [
  {
    degree: "工業工程與系統管理學系 碩士班",
    school: "逢甲大學",
    period: "預計 2027.07 畢業",
    detail: "4+1 學碩一貫學程",
    note: "Relevant coursework: Intro to AI · Manufacturing Data Science · Decision Support Systems",
  },
  {
    degree: "工業工程與系統管理學系 學士",
    school: "逢甲大學",
    period: "2022.09–2026.06",
    detail: "GPA 3.9 / 4.3",
    note: "115 級校級榮譽學生",
  },
];

export const workflowInternship = {
  title: "AI 工作流程研究實習生",
  meta: "ZOUSTEC TECHNOLOGIES CO., LTD.｜2026.07–2026.09",
  badge: "AI Workflow Research Intern",
  description:
    "建置並部署 51 個 n8n 工作流程，串接 AI 生成、LLM 品質檢查與 4 個發布平台；每篇內容處理時間由 30 分鐘縮短為 2 分鐘，執行成功率達 97.1%，累計發布 128 篇內容。結合 GA4 漏斗分析、統計檢定與人工核准，持續改善行銷自動化流程。",
  href: "/marketing-automation",
  action: "View Case Study",
};

export const honorSharing = {
  title: "榮譽學生經驗分享會受邀講者",
  meta: "逢甲大學｜2026.09",
  badge: "Invited Student Speaker",
  description:
    "以榮譽學生身分，向約 100 位大一新生分享課程規劃、競賽經驗與研究專題入門方法，協助新生認識大學學習與研究參與的方向。",
  href: "/honor-student#sharing-session",
  action: "View Experience",
};

export const courseHonors = [
  { title: "資料庫設計 課程優異表現", date: "2024.12", issuer: "逢甲大學" },
  { title: "決策與數據分析 課程優異表現", date: "2025.12", issuer: "逢甲大學" },
];

export const cieAward = {
  title: "2026 中國工程師學會學生分會工程論文競賽",
  result: "Honorable Award — Industrial Engineering Division",
  date: "2026.07",
  project: "基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式",
};

export const automationMetrics = [
  { value: "30→2", label: "分鐘 / 篇內容" },
  { value: "97.1%", label: "工作流程執行成功率" },
  { value: "51", label: "n8n 工作流程" },
  { value: "128", label: "篇已發布內容" },
];
