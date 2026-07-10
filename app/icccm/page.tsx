import type { Metadata } from "next";
import Link from "next/link";
import ActiveSectionNav from "../active-section-nav";
import ImageLightboxGallery from "../image-lightbox-gallery";

import proofPage1 from "../image/KY1012-A ICCCM 2026 acceptance notification-Abstract_頁面_1.png";
import proofPage2 from "../image/KY1012-A ICCCM 2026 acceptance notification-Abstract_頁面_2.png";

const details = [
  {
    label: "Topic",
    value:
      "An Objective Essay Scoring and Commentary Generation System with LSTM Model",
  },
  {
    label: "Conference",
    value:
      "The 14th International Conference on Computer and Communications Management",
  },
  {
    label: "Date",
    value: "July 24-26, 2026",
  },
  {
    label: "Location",
    value: "Tokyo, Japan",
  },
];

const [paperDetail, ...conferenceDetails] = details;

const researchOverview = {
  title: "以 LSTM 模型之文章客觀評分與評語生成模式",
  tags: ["AES", "LSTM", "NLP", "Education"],
  motivation:
    "英文作文是國高中重要考試項目之一，現有自動論文評分系統多偏重整體分數，較少同時處理上下文關係、文章主題與即時評語回饋。本研究結合文章語意結構分析與評語生成技術，建立能提供客觀評分與回饋建議的寫作輔助模式。",
  goals: [
    {
      title: "文章客觀評分",
      description:
        "蒐集英文文章資料，透過分類模型與 TF-IDF 等文字特徵分析方法，針對字詞關聯性、語意相似性、主題相關性與語意分數進行評分。",
    },
    {
      title: "文章評語生成",
      description:
        "結合 ELMo、Bi-LSTM 與 LSTM 模型分析上下文依賴關係，生成具連貫性且與文章主題相關的評語內容。",
    },
    {
      title: "即時回饋應用",
      description:
        "建立文章評分與評語生成流程，協助使用者理解分數意義，並針對英文寫作內容提供可行的改善建議。",
    },
  ],
  result:
    "本研究建構一套文章客觀評分與評語生成模式，使用 Hugging Face 評語資料集進行模型訓練，並透過文本分類、評分系統與評語生成品質三項實驗驗證系統表現。結果顯示，本研究能提升 AES 系統在上下文關聯性、文章主題性與即時回饋上的應用價值，可應用於自主學習、英文考試與教育測驗輔助批改情境。",
  metrics:
    "文本分類 Precision 為 0.8、Recall 為 0.8、F1 為 0.79；評分系統 PCC 為 0.7490、SCC 為 0.7902；評語生成問卷各指標皆高於 3.5 分，整體一致性為 66.7%",
};

const proofs = [
  {
    title: "ICCCM 2026 Acceptance Notification - Page 1",
    image: proofPage1,
  },
  {
    title: "ICCCM 2026 Acceptance Notification - Page 2",
    image: proofPage2,
  },
];

const icccmNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Proof", href: "#proof" },
];

export const metadata: Metadata = {
  title: "ICCCM 2026 Presentation Accepted",
  description:
    "Paper accepted for presentation at ICCCM 2026 in Tokyo: An Objective Essay Scoring and Commentary Generation System with LSTM Model.",
};

export default function IcccmPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/#research"
            className="shrink-0 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white md:hidden"
          >
            ← Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | Kai-Chun Huang
            </span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={icccmNavItems} />
            <Link
              href="/#research"
              className="rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white"
            >
              Back to Research
            </Link>
          </div>
        </div>
      </nav>

      <section id="overview" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-12 pt-28 md:scroll-mt-28 md:pb-16 md:pt-32">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
          Conference Experience
        </p>

        <h1 className="max-w-5xl text-3xl font-bold leading-tight md:text-5xl">
          ICCCM 2026 Presentation Accepted
        </h1>

        <p className="mt-5 max-w-5xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
          Accepted for presentation at ICCCM 2026 in Tokyo, Japan, with the
          paper &quot;An Objective Essay Scoring and Commentary Generation System
          with LSTM Model.&quot;
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-2xl border border-emerald-300/20 bg-white/[0.07] p-5 shadow-[0_20px_70px_rgba(16,185,129,0.1)] md:p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
              Paper
            </p>
            <p className="mt-3 text-xl font-bold leading-tight text-white md:text-2xl">
              {paperDetail.value}
            </p>
          </div>

          <div className="grid gap-3">
            {conferenceDetails.map((detail) => (
              <div
                key={detail.label}
                className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {detail.label}
                </p>
                <p className="mt-1 text-[15px] font-semibold leading-7 text-slate-100 md:text-base">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <article
          lang="zh-Hant"
          className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_20px_70px_rgba(8,47,73,0.32)] md:p-8"
        >
          <div className="max-w-5xl">
            <h2 className="text-2xl font-black leading-tight text-white md:text-3xl">
              {researchOverview.title}
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {researchOverview.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-300/[0.08] px-3 py-1 text-xs font-semibold text-emerald-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <section>
              <h3 className="border-b border-emerald-300/45 pb-3 text-lg font-bold text-emerald-100 md:text-xl">
                研究動機
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-200 md:text-base">
                {researchOverview.motivation}
              </p>
            </section>

            <section>
              <h3 className="border-b border-emerald-300/45 pb-3 text-lg font-bold text-emerald-100 md:text-xl">
                研究目的
              </h3>
              <ol className="mt-4 space-y-4 text-[15px] leading-8 text-slate-200 md:text-base">
                {researchOverview.goals.map((goal, index) => (
                  <li key={goal.title} className="flex gap-3">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-300/[0.12] text-sm font-bold text-emerald-200">
                      {index + 1}
                    </span>
                    <span>
                      <strong className="text-white">{goal.title}：</strong>
                      {goal.description}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <section className="mt-8">
            <h3 className="border-b border-emerald-300/45 pb-3 text-lg font-bold text-emerald-100 md:text-xl">
              研究成果
            </h3>
            <p className="mt-4 text-[15px] leading-8 text-slate-200 md:text-base">
              {researchOverview.result}
              <span className="font-semibold text-rose-200">
                {" "}
                其中 {researchOverview.metrics}。
              </span>
            </p>
          </section>
        </article>
      </section>

      <section id="proof" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 md:scroll-mt-28 md:pb-20">
        <div className="mb-6">
          <h2 className="text-2xl font-bold md:text-3xl">
            Acceptance Notification
          </h2>
          <p className="mt-3 max-w-4xl leading-8 text-slate-300">
            Official acceptance pages for the ICCCM 2026 presentation.
          </p>
        </div>

        <ImageLightboxGallery
          items={proofs}
          actionLabel="View Document"
          cardClassName="group flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.045] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
          gridClassName="grid gap-6 md:grid-cols-2"
          imageClassName="h-full w-full rounded-xl object-contain"
          imageSizes="(min-width: 768px) 50vw, 100vw"
          imageWrapperClassName="flex h-[360px] items-center justify-center border-b border-white/10 bg-white/[0.035] p-2 md:h-[480px] md:px-4"
          showTitle
          variant="emerald"
        />
      </section>
    </main>
  );
}
