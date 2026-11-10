import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../arrow-icon";
import SubpageFooter from "../subpage-footer";
import SubpageNav from "../subpage-nav";

// Source: Huang_Kai-Chun_Resume.pdf — projects and conference sections. The project is ongoing,
// so this page only states what the resume records.

const paperTitle =
  "An Intelligent Question-Answering System Based on Knowledge Distillation and User Intent Recognition Technologies";

const heroStats = [
  ["92.76%", "意圖分類 Accuracy（蒸餾後）"],
  ["73,828", "句 soft label"],
  ["69,476", "組 QA 資料"],
  ["4", "項生成評估指標"],
];

const modules = [
  {
    index: "01",
    title: "意圖辨識：知識蒸餾",
    summary: "把大型模型的判斷能力，轉移到能快速推論的輕量模型。",
    steps: [
      "微調 GPT-OSS-20B 作為教師模型",
      "以教師模型為 73,828 個句子產生 soft label",
      "用 soft label 訓練輕量的 BiLSTM 學生模型",
    ],
    methods: ["GPT-OSS-20B", "BiLSTM", "Knowledge Distillation", "PyTorch"],
  },
  {
    index: "02",
    title: "答案生成：微調 Gemma",
    summary: "整理高品質問答資料，微調模型產生回答。",
    steps: [
      "清理並格式化 69,476 組 QA 資料",
      "以 QLoRA 與 Unsloth 微調 Gemma 4-E4B",
    ],
    methods: ["Gemma 4-E4B", "QLoRA", "Unsloth"],
  },
  {
    index: "03",
    title: "評估流程",
    summary: "用同一套流程比較不同設定下的生成答案。",
    steps: ["建立自動化評估流程", "以 BLEU、ROUGE、METEOR 與 BERTScore 比較生成答案"],
    methods: ["BLEU", "ROUGE", "METEOR", "BERTScore"],
  },
];

const accuracy = { before: 88.13, after: 92.76 };
const gain = (accuracy.after - accuracy.before).toFixed(2);

const techStack = ["Python", "PyTorch", "Unsloth", "QLoRA", "GPT-OSS-20B", "BiLSTM", "Gemma 4-E4B", "BERTScore"];

const intentNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "Status", href: "#status" },
];

export const metadata: Metadata = {
  title: "知識蒸餾 × 意圖辨識問答系統",
  description:
    "以知識蒸餾將微調後的 GPT-OSS-20B 轉移到輕量 BiLSTM，意圖分類準確率由 88.13% 提升至 92.76%；並以 69,476 組 QA 微調 Gemma 4-E4B 生成答案。論文已獲 2026 CIIE 年會接受。",
};

const sectionClass = "scroll-mt-24 border-t border-white/10 py-12 md:scroll-mt-28 md:py-16";
const eyebrowClass = "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300";
const h2Class = "mt-3 text-2xl font-bold md:text-3xl";

function FlowArrow() {
  return (
    <span aria-hidden="true" className="flex shrink-0 items-center justify-center text-emerald-300 md:px-1">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 rotate-90 md:rotate-0">
        <path d="M4 10h11m-4-4.5L15.5 10 11 14.5" />
      </svg>
    </span>
  );
}

export default function IntentQaSystemPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <SubpageNav items={intentNavItems} backHref="/#projects" backLabel="Back to Projects" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <section id="overview" className="scroll-mt-24 pb-12 md:scroll-mt-28 md:pb-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className={eyebrowClass}>Case study · NLP research</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/45 bg-amber-300/[0.1] px-3 py-1 text-xs font-bold text-amber-100">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              進行中 · 2025.09–
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/[0.08] px-3 py-1 text-xs font-bold text-emerald-100">
              Paper Accepted · CIIE 2026
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl lg:text-[3.4rem]">知識蒸餾 × 意圖辨識問答系統</h1>
          <p lang="en" className="mt-3 max-w-4xl text-base font-semibold leading-7 text-emerald-100 md:text-lg">
            {paperTitle}
          </p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
            先辨識使用者問題的意圖，再生成回答。意圖辨識以知識蒸餾把大型模型壓成輕量的 BiLSTM，答案生成則微調 Gemma 4-E4B。
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
            {heroStats.map(([value, label], index) => (
              <div key={label} className="flex flex-col bg-[#0a1014]/90 px-5 py-4 backdrop-blur">
                <dt className="order-last mt-1 text-xs text-slate-400 md:text-sm">{label}</dt>
                <dd className={`text-3xl font-black md:text-4xl ${index === 0 ? "text-amber-300" : "text-white"}`}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="approach" className={sectionClass}>
          <p className={eyebrowClass}>01 · Approach</p>
          <h2 className={h2Class}>兩個模型，各做擅長的事</h2>

          <div className="mt-8 border border-white/10 bg-[#0a1014]/80 p-5 backdrop-blur md:p-6">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Pipeline</p>
            <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-stretch">
              <div className="flex-1 border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="font-bold text-white">使用者問題</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">輸入句子</p>
              </div>
              <FlowArrow />
              <div className="flex-1 border border-emerald-300/40 bg-emerald-300/[0.08] px-4 py-3">
                <p className="font-bold text-white">意圖辨識</p>
                <p className="mt-1 text-sm leading-6 text-emerald-100/80">蒸餾後的 BiLSTM</p>
              </div>
              <FlowArrow />
              <div className="flex-1 border border-emerald-300/40 bg-emerald-300/[0.08] px-4 py-3">
                <p className="font-bold text-white">答案生成</p>
                <p className="mt-1 text-sm leading-6 text-emerald-100/80">微調後的 Gemma 4-E4B</p>
              </div>
              <FlowArrow />
              <div className="flex-1 border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="font-bold text-white">評估</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">BLEU · ROUGE · METEOR · BERTScore</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
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
          <p className={eyebrowClass}>02 · Results</p>
          <h2 className={h2Class}>蒸餾讓輕量模型的準確率提升 {gain} 個百分點</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)]">
            <figure className="border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:p-6">
              <figcaption className="text-lg font-bold text-white">意圖分類 Accuracy</figcaption>
              <ul className="mt-5 grid gap-5">
                <li>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-slate-300">蒸餾前</span>
                    <span className="font-black text-slate-200">{accuracy.before.toFixed(2)}%</span>
                  </div>
                  <div className="mt-1.5 h-3 w-full bg-white/[0.07]" aria-hidden="true">
                    <div className="h-full rounded-r bg-slate-400" style={{ width: `${accuracy.before}%` }} />
                  </div>
                </li>
                <li>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-semibold text-white">蒸餾後</span>
                    <span className="text-xl font-black text-emerald-300">{accuracy.after.toFixed(2)}%</span>
                  </div>
                  <div className="mt-1.5 h-3 w-full bg-white/[0.07]" aria-hidden="true">
                    <div className="h-full rounded-r bg-emerald-300" style={{ width: `${accuracy.after}%` }} />
                  </div>
                </li>
              </ul>
              <p className="mt-5 border-l-2 border-emerald-300/40 pl-3 text-sm leading-6 text-slate-200">
                以微調後的 GPT-OSS-20B 為 73,828 個句子產生 soft label，蒸餾到輕量的 BiLSTM 後，意圖分類準確率由 88.13% 提升至 92.76%。
              </p>
            </figure>

            <div className="flex flex-col justify-center border border-amber-300/30 bg-[linear-gradient(150deg,rgba(252,211,77,0.1),rgba(255,255,255,0.03)_60%)] p-5 md:p-6">
              <p className="text-5xl font-black text-amber-300">+{gain}</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">個百分點（88.13% → 92.76%）</p>
            </div>
          </div>
        </section>

        <section id="status" className={sectionClass}>
          <p className={eyebrowClass}>03 · Status</p>
          <h2 className={h2Class}>目前進度</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="border-l-2 border-emerald-300/40 pl-4">
              <p className="font-bold text-white">論文已獲 2026 CIIE 年會接受</p>
              <p className="mt-2 text-[15px] leading-7 text-slate-300">
                研究成果已投稿並獲 2026 中國工業工程學會年會（CIIE Annual Conference）接受。
              </p>
            </div>
            <div className="border-l-2 border-amber-300/50 pl-4">
              <p className="font-bold text-white">持續進行中</p>
              <p className="mt-2 text-[15px] leading-7 text-slate-300">
                專案自 2025.09 開始、仍在進行中。目前已完成意圖辨識的蒸餾、Gemma 4-E4B 的微調，以及比較生成答案的評估流程。
              </p>
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
          <Link href="/#research" className="link-arrow mt-8">
            看所有研討會論文 <Arrow />
          </Link>
        </section>

        <SubpageFooter next={["llama", "automation"]} />
      </div>
    </main>
  );
}
