import type { Metadata } from "next";
import Link from "next/link";
import LightboxImage from "../lightbox-image";
import { automationContributions, automationMetrics, workflowInternship } from "../resume-highlights";
import workflowOverview from "./images/hreasy-n8n-workflow-overview.webp";

export const metadata: Metadata = {
  title: "AI 行銷內容自動化",
  description: "ZOUSTEC AI 工作流程研究實習：整合 51 個 n8n 工作流程、AI 生成與審核、4 個發布平台，以及 GA4 分析與人工核准的改善流程。",
};

export default function MarketingAutomationPage() {
  return (
    <main className="min-h-screen bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <nav aria-label="返回導覽" className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="font-bold">Kevin Huang</Link>
          <Link href="/#experience" className="btn btn-secondary btn-sm">← Back to Experience</Link>
        </div>
      </nav>
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <header className="max-w-4xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">AI-Powered Marketing Content Automation</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">AI 行銷內容自動化</h1>
          <p className="mt-5 text-lg font-semibold text-emerald-100">{workflowInternship.title}</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">{workflowInternship.meta}</p>
          <p className="mt-6 text-base leading-8 text-slate-300">將內容生成、審核、發布與成效分析整合成可持續改善的工作流程，運用工業工程的流程思維降低重複操作。</p>
        </header>
        <section aria-labelledby="results-title" className="mt-12">
          <h2 id="results-title" className="text-2xl font-bold">專案成果</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {automationMetrics.map((metric) => (
              <div key={metric.label} className="border border-emerald-300/20 bg-emerald-300/[0.045] p-5">
                <dt className="text-sm leading-6 text-slate-300">{metric.label}</dt>
                <dd className="mt-3 font-mono text-3xl font-bold text-emerald-200">{metric.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-6 text-slate-400">數據為履歷所記錄的專案成果；Threads 瀏覽量的統計期間為 30 天。</p>
        </section>
        <section aria-labelledby="workflow-overview-title" className="mt-12">
          <h2 id="workflow-overview-title" className="text-2xl font-bold">n8n 流程全景</h2>
          <p className="mt-3 max-w-4xl text-[15px] leading-8 text-slate-300">從資料來源、派工與五路內容生成，到審核分流、官方發布、Instagram 互動，再回到 GA4 成效分析與核准建議回饋的完整循環。</p>
          <figure className="mt-6">
            <div className="overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <LightboxImage
                src={workflowOverview}
                alt="HReasy n8n AI 內容生成、審核、發布與成效回饋全景圖"
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-6 text-slate-500">點圖可放大。A–D 內容生成與 F LinkedIn 草稿 → 審核與發布 → IG 互動 → 週報與成效學習 → 核准建議回饋。</figcaption>
          </figure>
        </section>
        <section aria-labelledby="contributions-title" className="mt-12">
          <h2 id="contributions-title" className="text-2xl font-bold">實作內容與個人貢獻</h2>
          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {automationContributions.map((item, index) => (
              <article key={item.title} className="grid gap-4 py-7 md:grid-cols-[1fr_1.5fr] md:gap-10">
                <h3 className="text-xl font-semibold"><span className="mr-3 font-mono text-sm text-emerald-300">0{index + 1}</span>{item.title}</h3>
                <p className="text-[15px] leading-8 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="使用技術">
          {["n8n", "AI Generation", "AI Review", "GA4", "Fisher’s Exact Test", "Benjamini–Hochberg", "HTML Templates"].map((tag) => (
            <span key={tag} className="border border-white/10 px-3 py-1.5 text-xs text-slate-300">{tag}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
