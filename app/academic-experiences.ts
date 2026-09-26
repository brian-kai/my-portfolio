type AcademicExperience = {
  id: string;
  title: string;
  meta: string;
  badge: string;
  description: string;
  href?: string;
  action?: string;
};

// Source: personal honor-student application, pp. 9–10 (recommendation dated 2026-03-25).
// The original application stays outside the public website.
export const additionalAcademicExperiences: AcademicExperience[] = [
  {
    id: "gpt2-research",
    title: "GPT-2 社群評論研究計畫參與",
    meta: "私立逢甲大學｜以 GPT-2 模型為基之社群評論情緒分類與評論自動生成模式",
    badge: "Research Project",
    description:
      "大學期間參與社群評論情緒分類與自動生成研究計畫，累積文獻蒐集、方法整理、系統開發與模型訓練經驗，建立自然語言處理與生成模型的實作基礎。",
    href: "/honor-student#gpt2-research",
    action: "View Experience",
  },
  {
    id: "pregraduate-research",
    title: "預研生研究參與",
    meta: "私立逢甲大學工業工程與系統管理學系｜楊士霆副教授指導",
    badge: "Research Training",
    description:
      "大學期間以專題生及預研生身分接受研究指導，投入資料分析、模型訓練與系統開發，透過研究討論提出想法，銜接後續專題與研究計畫。",
    href: "/honor-student#pregraduate-research",
    action: "View Experience",
  },
  {
    id: "web-development-study",
    title: "寒暑假 Web-based 系統開發學習",
    meta: "私立逢甲大學｜課外系統開發課程",
    badge: "Independent Learning",
    description:
      "於寒暑假修習教師額外開設的 Web-based 系統開發課程，學習整合前端程式與後端資料庫，累積網頁應用系統開發經驗。",
    href: "/honor-student#web-development-study",
    action: "View Experience",
  },
];

// Source: personal honor-student application, p. 1.
export const projectLeadership = {
  title: "畢業專題組長",
  description:
    "規劃研究方向與整體進度，每週彙整兩次進度報告給指導教授，安排組員分工，分階段推進文本撰寫、資料整理、模型建構與案例驗證。",
  training:
    "面對模型訓練問題，主動請教學長姐並研讀文獻，重新檢視資料預處理、模型設計、超參數與驗證方式，完成模型重建與訓練流程調整。",
};
