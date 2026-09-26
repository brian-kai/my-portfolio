// Source: Huang_Kai-Chun_ Information Technology Engineer_Resume.pptx, slides 1–2.
// Figures are the outcomes recorded in the resume, not live service counters.
export const workflowInternship = {
  title: "AI 工作流程研究實習生",
  meta: "ZOUSTEC TECHNOLOGIES CO., LTD.｜2026.07–至今",
  badge: "AI Workflow Research Intern",
  description:
    "整合 51 個 n8n 工作流程，串接 AI 生成、AI 審核與 4 個發布平台；每篇內容處理時間由 30 分鐘縮短為 2 分鐘，執行成功率達 97.1%，累計發布 128 篇內容。結合 GA4 漏斗分析、統計檢定與人工核准，持續改善行銷自動化流程。",
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
  { value: "51", label: "整合的 n8n 工作流程" },
  { value: "30 → 2 min", label: "每篇內容處理時間" },
  { value: "97.1%", label: "工作流程執行成功率" },
  { value: "128", label: "已發布內容篇數" },
];

export const automationContributions = [
  {
    title: "多平台內容自動化",
    description: "設計並整合 51 個 n8n 工作流程，將 AI 內容生成、AI 審核與 4 個發布平台串接成完整系統，縮短內容製作與發布所需時間。",
  },
  {
    title: "以數據回饋改善流程",
    description: "每週分析 GA4 漏斗數據，以 Fisher 精確檢定及 Benjamini–Hochberg 多重比較校正驗證分析結果，將經人工核准的改善方案帶入下一輪內容製作。",
  },
  {
    title: "HTML 輪播圖模板",
    description: "以 HTML 模板取代影像模型產出的輪播圖，解決文字與版面錯誤；HReasy Threads 帳號在 30 天內累積 22,761 次瀏覽。",
  },
];
