import type { Metadata } from "next";
import Link from "next/link";
import { projectLeadership } from "../academic-experiences";
import ActiveSectionNav from "../active-section-nav";
import ImageLightboxGallery from "../image-lightbox-gallery";
import LightboxImage from "../lightbox-image";
import { llamaAwards, medalTones } from "../llama-awards";

import commentHeatmap from "./images/comment-heatmap.png";
import descriptionHeatmap from "./images/description-heatmap.png";
import hdbscanCluster from "./images/hdbscan-cluster.png";
import kmeansCluster from "./images/kmeans-cluster.png";
import systemDiagram from "./images/llama-system-diagram.svg";
import trainingLoss from "./images/training-loss.png";

// Source: 2025-12 graduation thesis 「基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式」.

const heroStats = [
  ["78,113", "筆訓練資料"],
  ["16.16", "METEOR（實驗一）"],
  ["0.89", "人工評估流暢性"],
  ["5", "項獎項"],
];

const problems = [
  {
    title: "沒有反映實際需求",
    text: "傳統行銷文案多針對目標族群撰寫，未能反映消費者的實際需求，難以精準觸及每位消費者的關注點。",
  },
  {
    title: "模板化、難以因應情境",
    text: "固定模板與通用語句限制了文案依情境調整的能力，無法滿足產品比較或特定使用場景等多樣需求。",
  },
  {
    title: "忽略情感特徵",
    text: "現有生成技術多聚焦語意一致性與主題相關性，較少整合情感分析，使文案難以引起情感共鳴。",
  },
];

const goals = [
  ["消費者偏好解析", "解析消費者評論中的需求與偏好，作為個人化文案的基礎。"],
  ["語意與情感特徵整合", "以 SBERT 擷取並整合語意與情感特徵，兼顧邏輯一致與情感共鳴。"],
  ["個人化行銷文案生成", "依偏好解析結果，透過 LLaMA 3 生成對應的個人化文案。"],
];

const modules = [
  {
    index: "01",
    title: "產品消費者偏好分析",
    summary: "蒐集產品描述與消費者評論，擷取關鍵字、分析主題，並依情感偏好進行分群。",
    steps: [
      "蒐集 Amazon 產品描述與評論資料並進行文本預處理",
      "以 TextRank 擷取產品描述與評論中的核心關鍵字",
      "以 LDA 進行主題分析",
      "結合語意、情感與產品描述向量，以 K-Means 進行消費者偏好分群",
    ],
    methods: ["TextRank", "LDA", "K-Means", "PCA", "Sentiment Vector"],
  },
  {
    index: "02",
    title: "行銷文案語意偏好分析",
    summary: "以 SBERT 將行銷文案與評論轉為語意向量，透過密度分群找出文案的語意與語氣偏好。",
    steps: [
      "以 SBERT 產生行銷文案與評論的語意向量",
      "以 UMAP 降維並以 HDBSCAN 進行語意分群",
      "標註各文案群集的主題與語氣偏好",
      "以 GPT-4o 依語氣、族群與主題進行資料增強（78,485 筆）",
    ],
    methods: ["SBERT", "UMAP", "HDBSCAN", "GPT-4o API", "Prompt Design"],
  },
  {
    index: "03",
    title: "個人化產品行銷文案生成",
    summary: "合併產品描述、評論偏好與增強文案，以 QLoRA 微調 LLaMA 3 8B 生成個人化文案。",
    steps: [
      "將產品描述與評論以問答形式合併，轉為模型輸入格式",
      "以 Unsloth 提供之 LLaMA 3 8B 為預訓練模型",
      "以 QLoRA（4-bit 量化與雙重量化）微調，降低記憶體與運算成本",
      "以 62,490 筆訓練、15,622 筆測試資料訓練並評估生成結果",
    ],
    methods: ["LLaMA 3 8B", "QLoRA", "Unsloth", "PyTorch"],
  },
];

const experiments = {
  generation: {
    title: "實驗一：與其他生成模型比較",
    setup: "以 eC-Tab2Text 公開資料集（1,052 筆）生成行銷文案，與 Guanilo 等人（2025）之模型比較。",
    metrics: [
      ["15.11", "BLEU-2"],
      ["29.25", "ROUGE-1"],
      ["22.34", "ROUGE-L"],
      ["16.16", "METEOR"],
    ],
    finding: "BLEU-2 與 METEOR 皆優於比較模型、ROUGE-1 略低，顯示生成內容在語意覆蓋與關鍵語彙對齊上表現較佳。",
  },
  clustering: {
    title: "實驗二：語意分群效能",
    setup: "比較 FastText、Word2Vec、BERT 與 SBERT 四種詞嵌入搭配 UMAP + HDBSCAN 的分群品質。",
    metrics: [
      ["0.5038", "輪廓係數（越高越好）"],
      ["20,526.57", "CH 指數（越高越好）"],
      ["0.5353", "DB 指數（越低越好）"],
      ["3 分 49 秒", "訓練時間（BERT 需 7 分 29 秒）"],
    ],
    finding: "SBERT 組合在各項指標皆優於其他詞嵌入，且訓練時間約為 BERT 的一半。",
  },
  human: {
    title: "實驗三：人工評估生成品質",
    setup: "隨機選取 16 組產品資訊與評論生成文案，以問卷評估，並以 Kappa 係數篩選有效受測者。",
    scores: [
      ["流暢性", 0.89],
      ["多樣性", 0.87],
      ["吸引力", 0.85],
      ["相關性", 0.8],
    ] as [string, number][],
    finding: "四項指標皆達 0.80 以上，生成文案在使用者主觀感受與語意呈現上表現良好。",
  },
};

const gallery = [
  {
    title: "K-Means 消費者偏好分群",
    description: "將產品描述、情感與語意特徵以 PCA 降維後呈現，不同顏色代表不同的消費者偏好群。",
    image: kmeansCluster,
    alt: "K-Means 消費者偏好分群圖",
  },
  {
    title: "HDBSCAN 語意偏好分群",
    description: "SBERT 語意向量經 UMAP 降維、HDBSCAN 分群後的結果；群集邊界清楚，對應實驗二的輪廓係數 0.5038。",
    image: hdbscanCluster,
    alt: "HDBSCAN 語意偏好分群圖",
  },
  {
    title: "LLaMA 3 訓練趨勢",
    description: "訓練初期 loss 快速下降，之後在約 1.0 附近趨於平穩，顯示 QLoRA 微調過程穩定收斂。",
    image: trainingLoss,
    alt: "LLaMA 3 個人化行銷文案生成模型訓練 loss 圖",
  },
  {
    title: "產品描述主題分布熱圖",
    description: "LDA 主題模型下，每筆產品描述屬於各主題的機率；顏色越深代表越集中於該主題。",
    image: descriptionHeatmap,
    alt: "產品描述主題分布熱圖",
  },
  {
    title: "評論主題分布熱圖",
    description: "消費者評論在各主題上的分布，可看出評論集中在少數主題（如 time、good）。",
    image: commentHeatmap,
    alt: "評論主題分布熱圖",
  },
];

const techStack = [
  "LLaMA 3 8B",
  "QLoRA",
  "Unsloth",
  "PyTorch",
  "GPT-4o API",
  "SBERT",
  "UMAP",
  "HDBSCAN",
  "TextRank",
  "LDA",
  "K-Means",
  "JSP",
  "SQL Server",
];

const llamaNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "Evidence", href: "#evidence" },
  { label: "Role", href: "#role" },
  { label: "Awards", href: "#awards" },
];

export const metadata: Metadata = {
  title: "LLaMA 3 個人化產品行銷文案生成系統",
  description:
    "結合消費者偏好分析、語意分群與 QLoRA 微調 LLaMA 3 的個人化行銷文案生成研究，獲 CIIE 2025 最佳論文等 5 項獎項。",
};

const sectionClass = "scroll-mt-24 border-t border-white/10 py-12 md:scroll-mt-28 md:py-16";
const eyebrowClass = "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300";
const h2Class = "mt-3 text-2xl font-bold md:text-3xl";

function MetricGrid({ metrics }: { metrics: string[][] }) {
  return (
    <dl className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 min-[360px]:grid-cols-2">
      {metrics.map(([value, label]) => (
        <div key={label} className="flex flex-col bg-[#0a1014] px-4 py-3.5">
          <dt className="order-last mt-1 text-xs leading-5 text-slate-400">{label}</dt>
          <dd className={`font-black text-white ${value.length > 7 ? "text-lg md:text-xl" : "text-xl md:text-2xl"}`}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function LlamaMarketingSystemPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/#projects"
            className="btn btn-secondary btn-sm shrink-0 lg:hidden"
          >
            ← Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <ActiveSectionNav items={llamaNavItems} breakpoint="lg" />
            <Link
              href="/#projects"
              className="btn btn-secondary btn-sm"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <section id="overview" className="scroll-mt-24 pb-12 md:scroll-mt-28 md:pb-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className={eyebrowClass}>Case study · Graduation research</p>
            <Link
              href="#awards"
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/45 bg-amber-300/[0.1] px-3 py-1 text-xs font-bold text-amber-100 transition hover:border-amber-300/70"
            >
              ★ CIIE 2025 最佳論文 · 5 項獎項
            </Link>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl lg:text-[3.4rem]">
            LLaMA 3 個人化產品行銷文案生成系統
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
            解析消費者評論中的偏好，結合語意與情感特徵，以 QLoRA 微調 LLaMA 3 8B，為不同消費者生成更貼近需求的產品行銷文案。
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
            {heroStats.map(([value, label], index) => (
              <div key={label} className="flex flex-col bg-[#0a1014]/90 px-5 py-4 backdrop-blur">
                <dt className="order-last mt-1 text-xs text-slate-400 md:text-sm">{label}</dt>
                <dd className={`text-3xl font-black md:text-4xl ${index === 3 ? "text-amber-300" : "text-white"}`}>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/file/graduation-project-poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              研究海報 ↗
            </a>
            <Link
              href="/conference"
              className="btn btn-secondary"
            >
              研討會發表與獲獎證明 →
            </Link>
          </div>
        </section>

        <section id="problem" className={sectionClass}>
          <p className={eyebrowClass}>01 · Problem</p>
          <h2 className={h2Class}>傳統行銷文案的三個痛點</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {problems.map((problem) => (
              <article key={problem.title} className="border border-white/10 bg-white/[0.045] p-5 backdrop-blur">
                <h3 className="text-lg font-bold text-white">{problem.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-slate-300">{problem.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-4 border border-amber-300/30 bg-[linear-gradient(120deg,rgba(252,211,77,0.08),transparent_60%)] p-5 md:flex-row md:items-center md:gap-8">
            <p className="shrink-0 text-5xl font-black text-amber-300">約 30%</p>
            <p className="text-[15px] leading-7 text-slate-200">
              的消費者會因文案中的產品資訊不足、或與自身需求相關性低，而降低購買意圖。
              <span className="mt-1 block text-xs text-slate-400">資料來源：Amsl 等人（2023），引自論文第一章</span>
            </p>
          </div>

          <h3 className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Research goals</h3>
          <ol className="mt-4 grid gap-4 md:grid-cols-3">
            {goals.map(([title, text], index) => (
              <li key={title} className="border-l-2 border-emerald-300/40 pl-4">
                <p className="font-mono text-xs font-bold text-emerald-300">0{index + 1}</p>
                <p className="mt-1 font-bold text-white">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="approach" className={sectionClass}>
          <p className={eyebrowClass}>02 · Approach</p>
          <h2 className={h2Class}>系統架構：三個模組串成一條生成流程</h2>
          <figure className="mt-8">
            <div className="overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <LightboxImage
                src={systemDiagram}
                alt="LLaMA 3 個人化產品行銷文案生成系統架構圖"
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-xs text-slate-500">
              點圖可放大。資料 → 兩個偏好分析模組 → LLaMA 3 生成 → 評估。
            </figcaption>
          </figure>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {modules.map((module) => (
              <article key={module.title} className="flex flex-col border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:p-6">
                <p className="font-mono text-xs font-bold text-emerald-300">MODULE {module.index}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{module.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{module.summary}</p>
                <ol className="mt-5 grid gap-3 border-t border-white/10 pt-4">
                  {module.steps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-6 text-slate-200">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-300/40 font-mono text-[10px] font-bold text-emerald-200">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {module.methods.map((method) => (
                    <span key={method} className="border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1 text-xs text-emerald-200">
                      {method}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="results" className={sectionClass}>
          <p className={eyebrowClass}>03 · Results</p>
          <h2 className={h2Class}>三個實驗驗證系統成效</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[experiments.generation, experiments.clustering].map((experiment) => (
              <article key={experiment.title} className="flex flex-col border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:p-6">
                <h3 className="text-lg font-bold text-white">{experiment.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{experiment.setup}</p>
                <div className="mt-5">
                  <MetricGrid metrics={experiment.metrics} />
                </div>
                <p className="mt-5 border-l-2 border-emerald-300/40 pl-3 text-sm leading-6 text-slate-200">{experiment.finding}</p>
              </article>
            ))}

            <article className="flex flex-col border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:p-6">
              <h3 className="text-lg font-bold text-white">{experiments.human.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{experiments.human.setup}</p>
              <figure className="mt-5">
                <figcaption className="sr-only">人工評估各指標分數（滿分 1.0）</figcaption>
                <ul className="grid gap-3">
                  {experiments.human.scores.map(([label, score]) => (
                    <li key={label} title={`${label}：${score.toFixed(2)}`}>
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="text-slate-300">{label}</span>
                        <span className="font-black text-white">{score.toFixed(2)}</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full bg-white/[0.07]" aria-hidden="true">
                        <div className="h-full rounded-r bg-emerald-300" style={{ width: `${score * 100}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-right text-[11px] text-slate-500">滿分 1.00</p>
              </figure>
              <p className="mt-4 border-l-2 border-emerald-300/40 pl-3 text-sm leading-6 text-slate-200">{experiments.human.finding}</p>
            </article>
          </div>
        </section>

        <section id="evidence" className={sectionClass}>
          <p className={eyebrowClass}>04 · Evidence</p>
          <h2 className={h2Class}>視覺證據</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">點圖可放大檢視。每張圖下方說明它呈現的內容。</p>
          <ImageLightboxGallery
            items={gallery}
            gridClassName="mt-6 grid gap-6 md:grid-cols-2"
            imageClassName="aspect-[4/3] w-full bg-slate-950/50 object-contain p-2 transition duration-300 group-hover:scale-[1.02] md:p-3"
            imageSizes="(min-width: 768px) 50vw, 100vw"
            showDescription
            showTitle
          />
        </section>

        <section id="role" className={sectionClass}>
          <p className={eyebrowClass}>05 · My role</p>
          <h2 className={h2Class}>{projectLeadership.title}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="border-l-2 border-emerald-300/40 pl-4">
              <p className="font-bold text-white">研究規劃與團隊協作</p>
              <p className="mt-2 text-[15px] leading-7 text-slate-300">{projectLeadership.description}</p>
            </div>
            <div className="border-l-2 border-amber-300/50 pl-4">
              <p className="font-bold text-white">模型訓練卡關時</p>
              <p className="mt-2 text-[15px] leading-7 text-slate-300">{projectLeadership.training}</p>
            </div>
          </div>
          <h3 className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Tech stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="border border-white/10 bg-slate-950/40 px-3 py-1.5 text-sm font-semibold text-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="awards" className={sectionClass}>
          <p className={eyebrowClass}>06 · Awards</p>
          <h2 className={h2Class}>同一份研究，獲得 5 項肯定</h2>
          <ol className="mt-8 border border-white/10 bg-[#0a1014]/70 backdrop-blur">
            {llamaAwards.map((award) => {
              const tone = medalTones[award.tone];
              return (
                <li
                  key={award.name}
                  className={`grid gap-2 border-b border-white/10 p-4 last:border-b-0 sm:grid-cols-[8.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-5 sm:px-5 ${tone.row}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${tone.medal}`} aria-hidden="true">
                      {award.medal}
                    </span>
                    <span className={`text-base font-black ${tone.rank}`}>{award.rank}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold leading-6 text-white">{award.name}</p>
                    <p className="text-[13px] leading-5 text-slate-400">{award.category}</p>
                  </div>
                  <p className="font-mono text-xs font-semibold text-slate-400 sm:text-right">
                    {award.level}
                    <span className="ml-2 text-slate-300 sm:ml-0 sm:mt-1 sm:block">{award.year}</span>
                  </p>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            CIIE 2025 研討會論文版本之生成評估：BLEU-3 18.92、BLEU-4 14.44、METEOR 23.62（本頁實驗結果為 2025.12 論文終版）。
          </p>
          <Link
            href="/conference"
            className="mt-4 inline-block text-sm font-bold text-emerald-300 underline-offset-4 transition hover:text-emerald-200 hover:underline"
          >
            查看研討會發表與獲獎證明 →
          </Link>
        </section>
      </div>
    </main>
  );
}
