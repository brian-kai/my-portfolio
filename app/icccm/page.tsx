import type { Metadata } from "next";
import Link from "next/link";
import ActiveSectionNav from "../active-section-nav";
import ImageLightboxGallery from "../image-lightbox-gallery";

import proofPage1 from "../image/icccm-2026-acceptance-notification-page-1.png";
import proofPage2 from "../image/icccm-2026-acceptance-notification-page-2.png";

const paper = {
  title: "An Objective Essay Scoring and Commentary Generation System with LSTM Model",
  titleZh: "以 LSTM 模型之文章客觀評分與評語生成模式",
  conference: "The 14th International Conference on Computer and Communications Management (ICCCM 2026)",
  date: "July 24–26, 2026",
  location: "Tokyo, Japan",
};

const headline = [
  ["0.79", "文本分類 F1"],
  ["0.790", "評分系統 SCC"],
  ["66.7%", "評語生成整體一致性"],
];

const problem =
  "英文作文是國高中重要考試項目之一，但現有自動作文評分（AES）系統多偏重整體分數，較少同時處理上下文關係、文章主題與即時評語回饋。";

const approach = [
  {
    index: "01",
    title: "文章客觀評分",
    text: "以分類模型與 TF-IDF 等文字特徵，針對字詞關聯性、語意相似性、主題相關性與語意分數評分。",
    methods: ["TF-IDF", "Text Classification"],
  },
  {
    index: "02",
    title: "評語生成",
    text: "結合 ELMo、Bi-LSTM 與 LSTM 分析上下文依賴，生成連貫且切合文章主題的評語。",
    methods: ["ELMo", "Bi-LSTM", "LSTM"],
  },
  {
    index: "03",
    title: "即時回饋",
    text: "串接評分與評語流程，協助學習者理解分數意義，並取得具體可行的改善建議。",
    methods: ["Feedback Loop"],
  },
];

const experiments = [
  {
    title: "文本分類",
    metrics: [
      ["0.80", "Precision"],
      ["0.80", "Recall"],
      ["0.79", "F1"],
    ],
  },
  {
    title: "評分系統",
    metrics: [
      ["0.749", "PCC（皮爾森相關）"],
      ["0.790", "SCC（斯皮爾曼相關）"],
    ],
  },
  {
    title: "評語生成品質（問卷）",
    metrics: [
      ["> 3.5", "各指標平均分數"],
      ["66.7%", "整體一致性"],
    ],
  },
];

const applications = ["自主學習", "英文考試練習", "教育測驗輔助批改"];

const proofs = [
  { title: "ICCCM 2026 Acceptance Notification — Page 1", image: proofPage1 },
  { title: "ICCCM 2026 Acceptance Notification — Page 2", image: proofPage2 },
];

const icccmNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "Proof", href: "#proof" },
];

export const metadata: Metadata = {
  title: "ICCCM 2026 · LSTM Essay Scoring",
  description:
    "Accepted for presentation at ICCCM 2026 (Tokyo): an LSTM-based objective essay scoring and commentary generation system — F1 0.79, SCC 0.790, 66.7% commentary consistency.",
};

const cardClass = "border border-white/10 bg-white/[0.045] backdrop-blur";
const eyebrowClass = "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300";

export default function IcccmPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/#research"
            className="btn btn-secondary btn-sm shrink-0 md:hidden"
          >
            ← Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={icccmNavItems} />
            <Link
              href="/#research"
              className="btn btn-secondary btn-sm"
            >
              Back to Research
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <section id="overview" className="scroll-mt-24 pb-14 md:scroll-mt-28 md:pb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/[0.08] px-3.5 py-1.5 text-sm font-bold text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" aria-hidden="true" />
            Accepted for Presentation · ICCCM 2026
          </p>
          <h1 className="mt-5 max-w-5xl text-3xl font-black leading-tight md:text-5xl">{paper.title}</h1>
          <p className="mt-3 text-lg font-semibold text-emerald-100">{paper.titleZh}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <dl className={`${cardClass} grid content-start gap-4 p-5 md:p-6`}>
              {[
                ["Conference", paper.conference],
                ["Date", paper.date],
                ["Location", paper.location],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</dt>
                  <dd className="mt-1 text-[15px] font-semibold leading-6 text-slate-100">{value}</dd>
                </div>
              ))}
            </dl>
            <dl className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 min-[420px]:grid-cols-3">
              {headline.map(([value, label]) => (
                <div key={label} className="flex flex-col justify-center bg-[#0a1014]/90 px-5 py-5">
                  <dt className="order-last mt-1 text-xs leading-5 text-slate-400">{label}</dt>
                  <dd className="text-3xl font-black text-white md:text-4xl">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 border-t border-white/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>Problem → Approach</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">不只給分數，也要給回饋</h2>
          <p className="mt-5 max-w-4xl border-l-2 border-amber-300/50 pl-4 text-base leading-8 text-slate-200">{problem}</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {approach.map((step) => (
              <li key={step.title} className={`${cardClass} flex flex-col p-5 md:p-6`}>
                <p className="font-mono text-xs font-bold text-emerald-300">STEP {step.index}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{step.text}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {step.methods.map((method) => (
                    <span key={method} className="border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1 text-xs text-emerald-200">
                      {method}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="results" className="scroll-mt-24 border-t border-white/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>Results</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">三項實驗驗證系統表現</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">以 Hugging Face 評語資料集訓練模型，並分別驗證文本分類、評分系統與評語生成品質。</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {experiments.map((experiment) => (
              <article key={experiment.title} className={`${cardClass} p-5 md:p-6`}>
                <h3 className="text-lg font-bold text-white">{experiment.title}</h3>
                <dl className="mt-4 grid gap-3">
                  {experiment.metrics.map(([value, label]) => (
                    <div key={label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2 last:border-b-0">
                      <dt className="text-sm text-slate-400">{label}</dt>
                      <dd className="text-2xl font-black text-white">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Applications</span>
            {applications.map((item) => (
              <span key={item} className="border border-white/10 bg-slate-950/40 px-3 py-1 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="proof" className="scroll-mt-24 border-t border-white/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>Official proof</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">接受通知函</h2>
          <ImageLightboxGallery
            items={proofs}
            actionLabel="View Document"
            cardClassName="group flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.045] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
            gridClassName="mt-8 grid gap-6 md:grid-cols-2"
            imageClassName="h-full w-full object-contain"
            imageSizes="(min-width: 768px) 50vw, 100vw"
            imageWrapperClassName="flex h-[360px] items-center justify-center border-b border-white/10 bg-white/[0.035] p-2 md:h-[460px] md:px-4"
            showTitle
            variant="emerald"
          />
        </section>
      </div>
    </main>
  );
}
