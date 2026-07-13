"use client";

import { useState } from "react";

const profileModes = [
  {
    id: "research",
    label: "研究成果",
    title: "具研究驗證的 AI 系統",
    summary:
      "將 NLP 與 LLM 實驗轉化為可發表、可衡量且可檢視的研究證據。",
    proofPoints: [
      "CIIE 2025 最佳論文獎",
      "ICCCM 2026 論文發表錄取",
      "LLaMA 3 與 LSTM 研究流程",
    ],
    stack: ["LLaMA 3", "LSTM", "BLEU", "METEOR"],
    cta: "View Research",
    href: "#research",
  },
  {
    id: "product",
    label: "作品展示",
    title: "可直接體驗的作品",
    summary:
      "把模型流程整理成可開啟、可操作的網頁工具，清楚呈現功能與使用情境。",
    proofPoints: [
      "SEO 實體分析工具",
      "LLaMA 3 行銷文案系統",
      "網站部署與作品頁整理",
    ],
    stack: ["Next.js", "Vercel", "SERP API", "Entity Analysis"],
    cta: "View Projects",
    href: "#projects",
  },
  {
    id: "workflow",
    label: "資料流程",
    title: "從資料整理到結果呈現",
    summary:
      "整理清理、分析與分群步驟，讓資料處理能重複執行並清楚呈現。",
    proofPoints: [
      "Python、SQL 與 Pandas 資料整理",
      "TextRank、K-Means 與 HDBSCAN 分析",
      "流程自動化與視覺化",
    ],
    stack: ["Python", "SQL", "Pandas", "HDBSCAN"],
    cta: "View Skills",
    href: "#skills",
  },
];

export default function AiProfilePanel() {
  const [activeModeId, setActiveModeId] = useState(profileModes[0].id);
  const activeMode =
    profileModes.find((mode) => mode.id === activeModeId) ?? profileModes[0];

  return (
    <aside className="w-full border border-white/10 bg-[#07100d]/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur xl:max-w-none">
      <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            AI Engineer Profile
          </p>
          <h2 className="mt-1 text-xl font-black leading-tight text-white">
            實作重點
          </h2>
        </div>
        <span className="shrink-0 border border-emerald-300/25 bg-emerald-300/[0.08] px-2.5 py-1 font-mono text-[11px] font-bold text-emerald-100">
          03 modes
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {profileModes.map((mode) => {
          const isActive = mode.id === activeMode.id;

          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveModeId(mode.id)}
              className={`pressable-subtle min-h-11 border px-3 py-2 text-left text-sm font-bold transition ${
                isActive
                  ? "border-emerald-300/60 bg-emerald-300/[0.14] text-white shadow-[0_14px_32px_rgba(16,185,129,0.14)]"
                  : "border-white/10 bg-white/[0.045] text-slate-300 hover:border-emerald-300/35 hover:bg-white/[0.075] hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {mode.label}
            </button>
          );
        })}
      </div>

      <div className="mt-3 border border-emerald-300/20 bg-slate-950/40 p-3 md:p-4">
        <h3 className="text-2xl font-black leading-tight text-white">
          {activeMode.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          {activeMode.summary}
        </p>

        <div className="mt-3 grid gap-2">
          {activeMode.proofPoints.map((point) => (
            <div
              key={point}
              className="border-l border-emerald-300/45 bg-white/[0.035] px-3 py-1.5 text-sm font-semibold leading-6 text-slate-100"
            >
              {point}
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {activeMode.stack.map((item) => (
            <span
              key={item}
              className="border border-white/10 bg-[#07100d]/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-100"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={activeMode.href}
          className="pressable motion-reduce-transform mt-4 inline-flex w-full items-center justify-center rounded-lg border border-emerald-300/65 bg-emerald-300 px-4 py-2.5 text-sm font-black text-slate-950 shadow-[0_16px_36px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200/80"
        >
          {activeMode.cta}
        </a>
      </div>
    </aside>
  );
}
