"use client";

import Link from "next/link";
import { useState } from "react";

type Work = {
  title: string;
  href: string;
  skills: string[];
};

type SkillCategory = {
  key: string;
  title: string;
  description: string;
  groups: { label: string; skills: string[] }[];
  works: Work[];
};

// Every skill below maps to at least one work in the same category.
const categories: SkillCategory[] = [
  {
    key: "01 · LLM / NLP",
    title: "模型與語言處理",
    description: "微調、分類、生成與文本分析",
    groups: [
      {
        label: "Models & fine-tuning",
        skills: ["LLaMA 3", "QLoRA", "PyTorch", "Gemma 4", "BERT-BiLSTM", "LSTM", "知識蒸餾"],
      },
      { label: "Text analysis", skills: ["TextRank", "LDA", "SBERT", "BLEU / METEOR"] },
    ],
    works: [
      {
        title: "LLaMA 3 個人化行銷文案系統",
        href: "/llama-marketing-system",
        skills: ["LLaMA 3", "QLoRA", "PyTorch", "TextRank", "LDA", "SBERT", "BLEU / METEOR"],
      },
      {
        title: "國科會計畫：程式碼版本差異註解生成",
        href: "#experience",
        skills: ["LLaMA 3"],
      },
      {
        title: "Intent Classification & QA Generation",
        href: "#projects",
        skills: ["QLoRA", "Gemma 4", "BERT-BiLSTM", "知識蒸餾"],
      },
      {
        title: "ICCCM 2026：LSTM 作文評分與評語生成",
        href: "/icccm",
        skills: ["LSTM"],
      },
    ],
  },
  {
    key: "02 · Data",
    title: "資料分析與統計",
    description: "清理、分群、檢定與洞察",
    groups: [
      { label: "Languages", skills: ["Python", "Pandas", "SQL", "R"] },
      {
        label: "Methods",
        skills: ["K-Means", "HDBSCAN", "UMAP", "Fisher 檢定 + BH", "GA4 漏斗分析"],
      },
    ],
    works: [
      {
        title: "LLaMA 3 消費者偏好分群",
        href: "/llama-marketing-system",
        skills: ["Python", "K-Means", "HDBSCAN", "UMAP"],
      },
      {
        title: "AI 行銷內容自動化：GA4 成效分析",
        href: "/marketing-automation",
        skills: ["Fisher 檢定 + BH", "GA4 漏斗分析"],
      },
      {
        title: "國科會計畫：GitHub 程式碼變更資料處理",
        href: "#experience",
        skills: ["Python"],
      },
      {
        title: "用電趨勢分析",
        href: "/file/electricity-usage-trend-analysis-poster.pdf",
        skills: ["Python"],
      },
      {
        title: "資料庫設計、決策與數據分析助教",
        href: "/database-design-tutoring",
        skills: ["SQL", "R"],
      },
      {
        title: "Google Data Analytics 證照",
        href: "#certificates",
        skills: ["Python", "Pandas", "SQL", "R"],
      },
    ],
  },
  {
    key: "03 · Build & Ship",
    title: "自動化與部署",
    description: "把模型做成可操作的產品",
    groups: [
      { label: "Automation", skills: ["n8n", "OpenAI API", "SERP API", "Google Sheets"] },
      { label: "Web & deploy", skills: ["Node.js", "Next.js", "Tailwind CSS", "Vercel"] },
    ],
    works: [
      {
        title: "AI 行銷內容自動化（51 個 n8n 流程）",
        href: "/marketing-automation",
        skills: ["n8n"],
      },
      {
        title: "LLaMA 3 系統：OpenAI 文案資料增強",
        href: "/llama-marketing-system",
        skills: ["OpenAI API"],
      },
      {
        title: "SEO Entity Analysis Tool",
        href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app",
        skills: ["SERP API", "Google Sheets", "Node.js", "Vercel"],
      },
      {
        title: "IVE K-pop Fan Website",
        href: "/ive",
        skills: ["Next.js", "Tailwind CSS"],
      },
      {
        title: "這個作品集網站",
        href: "#portfolio-home",
        skills: ["Next.js", "Tailwind CSS", "Vercel"],
      },
    ],
  },
];

const isExternal = (href: string) => href.startsWith("http") || href.endsWith(".pdf");

export default function SkillWorkMatrix() {
  // Clicked skill stays selected; hovering with a mouse previews another one.
  const [pinned, setPinned] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const active = hovered ?? pinned;

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Skills
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Skills & Tools</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            點選任一技術，會標出實際用到它的作品。
          </p>
        </div>
        {pinned ? (
          <button
            type="button"
            onClick={() => setPinned(null)}
            className="pressable-subtle w-fit rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-emerald-300/50 hover:text-white"
          >
            清除選取：{pinned}
          </button>
        ) : null}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {categories.map((category) => {
          const categorySkills = category.groups.flatMap((group) => group.skills);
          const activeHere = active !== null && categorySkills.includes(active);

          return (
            <article
              key={category.key}
              className={`flex h-full flex-col border p-5 backdrop-blur transition md:p-6 ${
                activeHere ? "border-emerald-300/40 bg-emerald-300/[0.05]" : "border-white/10 bg-white/[0.045]"
              }`}
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                {category.key}
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">{category.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{category.description}</p>

              {category.groups.map((group) => (
                <div key={group.label} className="mt-5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {group.label}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const isActive = active === skill;
                      return (
                        <button
                          key={skill}
                          type="button"
                          aria-pressed={pinned === skill}
                          onClick={() => setPinned((current) => (current === skill ? null : skill))}
                          onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(skill)}
                          onPointerLeave={(event) => event.pointerType === "mouse" && setHovered(null)}
                          className={`border px-2.5 py-1.5 text-[13px] font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 ${
                            isActive
                              ? "border-emerald-300/80 bg-emerald-300/20 text-white"
                              : "border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-50 hover:border-emerald-300/50"
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Used in
                </p>
                <ul className="mt-2">
                  {category.works.map((work) => {
                    const dimmed = activeHere && !work.skills.includes(active);
                    const external = isExternal(work.href);
                    return (
                      <li key={work.title} className="border-b border-dashed border-white/[0.07] last:border-b-0">
                        <Link
                          href={work.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className={`flex items-baseline justify-between gap-3 py-2.5 text-sm leading-6 transition hover:text-emerald-200 ${
                            dimmed ? "text-slate-500 opacity-50" : "text-slate-200"
                          }`}
                        >
                          <span>{work.title}</span>
                          <span className="shrink-0 font-bold text-emerald-300" aria-hidden="true">
                            {external ? "↗" : "→"}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
