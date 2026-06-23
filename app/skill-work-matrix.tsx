"use client";

import { useState } from "react";

import { EvidenceButton } from "./evidence-drawer";

type WorkItem = {
  type: "Project" | "Research" | "Experience" | "Certificate";
  title: string;
  description: string;
  href: string;
};

type SkillEntry = {
  name: string;
  group: string;
  summary: string;
  evidenceTitle: string;
  evidenceType: string;
  works: WorkItem[];
};

const skillEntries: SkillEntry[] = [
  {
    name: "LLaMA 3",
    group: "LLM / NLP",
    summary: "用於個人化行銷文案生成、研究流程設計，以及 case-study 的核心 AI 能力。",
    evidenceTitle: "LLaMA 3 AI marketing workflow evidence",
    evidenceType: "Research / Project",
    works: [
      {
        type: "Project",
        title: "LLaMA 3 個人化行銷文案系統",
        description: "把消費者偏好、關鍵字抽取與生成流程整理成可展示的 AI 產品案例。",
        href: "/llama-marketing-system",
      },
      {
        type: "Research",
        title: "CIIE Best Paper Award",
        description: "研究成果連到 LLaMA 3 行銷文案生成與模型輸出評估。",
        href: "/conference",
      },
      {
        type: "Experience",
        title: "Research Assistant",
        description: "協助 LLaMA 3 與消費者偏好建模相關研究流程。",
        href: "#experience",
      },
    ],
  },
  {
    name: "SQL",
    group: "Data Analysis",
    summary: "用於資料查詢、資料庫教學與分析專案，讓資料處理能力有實際場景可驗證。",
    evidenceTitle: "SQL data workflow evidence",
    evidenceType: "Data / Teaching",
    works: [
      {
        type: "Experience",
        title: "Database Design TA",
        description: "支援資料庫設計課程、SQL 練習與學生問題釐清。",
        href: "/database-design-tutoring",
      },
      {
        type: "Certificate",
        title: "Google Data Analytics",
        description: "資料分析證照脈絡，補強 SQL 與 Python 的資料工作流能力。",
        href: "#certificates",
      },
      {
        type: "Project",
        title: "Data Analysis Project",
        description: "將資料清理、分析與視覺化整理成可閱讀的成果。",
        href: "#projects",
      },
    ],
  },
  {
    name: "TextRank",
    group: "LLM / NLP",
    summary: "用於關鍵字抽取與研究流程前處理，支援 LLM 生成前的資料整理。",
    evidenceTitle: "TextRank keyword extraction evidence",
    evidenceType: "NLP Workflow",
    works: [
      {
        type: "Project",
        title: "LLaMA 3 marketing workflow",
        description: "用 TextRank 擷取關鍵詞，銜接後續分群與文案生成流程。",
        href: "/llama-marketing-system",
      },
      {
        type: "Research",
        title: "Best Paper workflow evidence",
        description: "作為研究方法的一部分，讓文案生成流程更可追蹤。",
        href: "/conference",
      },
    ],
  },
  {
    name: "K-Means",
    group: "Data Analysis",
    summary: "用於分群分析與偏好輪廓整理，將模型輸出轉成可解釋的洞察。",
    evidenceTitle: "K-Means clustering evidence",
    evidenceType: "Data Workflow",
    works: [
      {
        type: "Project",
        title: "Marketing preference clustering",
        description: "用分群方式整理消費者偏好，支援個人化行銷文案生成。",
        href: "/llama-marketing-system",
      },
      {
        type: "Research",
        title: "Heatmap / clustering evidence",
        description: "將分析結果轉成研究可用的視覺證據。",
        href: "/conference",
      },
    ],
  },
  {
    name: "HDBSCAN",
    group: "Data Analysis",
    summary: "用於探索型分群與資料結構觀察，補足固定群數方法的限制。",
    evidenceTitle: "HDBSCAN analysis evidence",
    evidenceType: "Data Workflow",
    works: [
      {
        type: "Project",
        title: "LLaMA 3 case-study analysis",
        description: "與 TextRank、K-Means 一起組成研究型資料分析流程。",
        href: "/llama-marketing-system",
      },
      {
        type: "Research",
        title: "Research visualization proof",
        description: "協助把分群結果轉成可檢查的研究圖表與證據。",
        href: "/conference",
      },
    ],
  },
  {
    name: "Next.js",
    group: "Web / Deployment",
    summary: "用於把研究與 demo 轉成可被招募者直接操作的網站體驗。",
    evidenceTitle: "Next.js portfolio and demo evidence",
    evidenceType: "Web Demo",
    works: [
      {
        type: "Project",
        title: "Portfolio",
        description: "把專案、研究、證照與經驗整合成互動式作品集。",
        href: "#about",
      },
      {
        type: "Project",
        title: "SEO Entity Analysis Tool",
        description: "部署成可直接操作的 live demo，展示 AI product workflow。",
        href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app",
      },
      {
        type: "Project",
        title: "IVE Fan Website",
        description: "前端網站實作經驗，補強介面與內容組織能力。",
        href: "/ive",
      },
    ],
  },
  {
    name: "Vercel",
    group: "Web / Deployment",
    summary: "用於作品與 demo 的快速部署，讓成果能被立即檢查。",
    evidenceTitle: "Vercel deployment evidence",
    evidenceType: "Deployment",
    works: [
      {
        type: "Project",
        title: "SEO Entity Analysis Tool live demo",
        description: "將工具部署成可分享、可測試的線上版本。",
        href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app",
      },
      {
        type: "Project",
        title: "Portfolio deployment",
        description: "支援作品集、專案證據與履歷連結的一站式展示。",
        href: "#about",
      },
    ],
  },
];

const groups = Array.from(new Set(skillEntries.map((entry) => entry.group)));

const typeLabel: Record<WorkItem["type"], string> = {
  Project: "Project",
  Research: "Research",
  Experience: "Experience",
  Certificate: "Certificate",
};

export default function SkillWorkMatrix() {
  const [selectedSkill, setSelectedSkill] = useState(skillEntries[0]);

  return (
    <div className="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]">
      <aside className="h-full border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Skill Index
            </p>
            <h2 className="mt-3 text-3xl font-black">Skills</h2>
          </div>
          <button
            type="button"
            onClick={() => setSelectedSkill(skillEntries[0])}
            className="rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-emerald-300/50 hover:text-white"
          >
            清除
          </button>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-300">
          點選技能後，右側會顯示它實際出現在哪些專案、研究、經驗或證照裡。
        </p>

        <div className="mt-7 grid gap-5">
          {groups.map((group) => (
            <div key={group}>
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {group}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillEntries
                  .filter((entry) => entry.group === group)
                  .map((entry) => {
                    const isSelected = entry.name === selectedSkill.name;

                    return (
                      <button
                        key={entry.name}
                        type="button"
                        onClick={() => setSelectedSkill(entry)}
                        className={`border px-3 py-2 font-mono text-xs font-bold transition ${
                          isSelected
                            ? "border-emerald-300 bg-emerald-300/[0.14] text-white"
                            : "border-white/10 bg-slate-950/45 text-slate-300 hover:border-emerald-300/45 hover:text-white"
                        }`}
                      >
                        {entry.name}
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      <section className="border border-emerald-300/20 bg-[#07100d]/60 p-5 backdrop-blur md:p-7">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-7 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Selected skill
            </p>
            <h3 className="mt-3 text-3xl font-black md:text-4xl">
              {selectedSkill.name}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              {selectedSkill.summary}
            </p>
          </div>

          <EvidenceButton
            buttonLabel="查看證據"
            evidence={{
              title: selectedSkill.evidenceTitle,
              type: selectedSkill.evidenceType,
              proofLinks: selectedSkill.works.map((work) => ({
                label: work.title,
                href: work.href,
              })),
              whyItMatters:
                "這個技能不是只出現在關鍵字列表，而是連到實際作品、研究成果與可驗證經驗。",
              relatedWork: selectedSkill.works.map((work) => ({
                label: work.title,
                href: work.href,
              })),
            }}
          />
        </div>

        <div className="mt-7">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Used in
          </p>

          <div className="grid gap-4 lg:grid-cols-3">
            {selectedSkill.works.map((work) => (
              <a
                key={`${selectedSkill.name}-${work.title}`}
                href={work.href}
                target={work.href.startsWith("http") ? "_blank" : undefined}
                rel={work.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex min-h-52 flex-col border border-white/10 bg-slate-950/35 p-4 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.06]"
              >
                <span className="w-fit border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1 font-mono text-xs font-semibold text-emerald-200">
                  {typeLabel[work.type]}
                </span>
                <h4 className="mt-4 text-lg font-bold leading-7 text-white">
                  {work.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {work.description}
                </p>
                <span className="mt-auto pt-5 text-sm font-bold text-emerald-200 transition group-hover:text-white">
                  Related link
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
