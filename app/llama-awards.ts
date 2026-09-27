import { cieAward } from "./resume-highlights";

// Awards earned by the LLaMA 3 graduation project; shown on the homepage and the case-study page.
export const medalTones = {
  gold: { medal: "bg-amber-300 text-slate-950 shadow-[0_0_16px_rgba(252,211,77,0.45)]", rank: "text-amber-300", row: "bg-[linear-gradient(90deg,rgba(252,211,77,0.09),transparent_60%)]" },
  silver: { medal: "bg-slate-200 text-slate-950 shadow-[0_0_16px_rgba(226,232,240,0.35)]", rank: "text-slate-100", row: "" },
  bronze: { medal: "bg-orange-300 text-slate-950 shadow-[0_0_16px_rgba(253,186,116,0.4)]", rank: "text-orange-300", row: "" },
  emerald: { medal: "bg-emerald-300 text-slate-950 shadow-[0_0_16px_rgba(110,231,183,0.4)]", rank: "text-emerald-300", row: "" },
};

export type LlamaAward = {
  medal: string;
  rank: string;
  tone: keyof typeof medalTones;
  name: string;
  category: string;
  level: string;
  year: string;
};

export const llamaAwards: LlamaAward[] = [
  { medal: "1", rank: "第一名", tone: "gold", name: "全國工業工程與管理大學生專題論文與技術報告競賽", category: "服務系統與科技管理組", level: "全國", year: "2026" },
  { medal: "★", rank: "最佳論文", tone: "gold", name: "中國工業工程學會年會暨學術研討會", category: "大數據技術與應用領域", level: "學會", year: "2025" },
  { medal: "2", rank: "第二名", tone: "silver", name: "逢甲大學工工系畢業專題", category: "114 學年度", level: "校內", year: "2026" },
  { medal: "3", rank: "第三名", tone: "bronze", name: "台灣作業研究學會大專校院專題競賽", category: "人工智慧與大數據分析組", level: "全國", year: "2026" },
  { medal: "✓", rank: "佳作", tone: "emerald", name: cieAward.title.replace(/^\d{4}\s*/, ""), category: "工業工程組", level: "全國", year: "2026" },
];
