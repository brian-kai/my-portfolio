import type { Metadata } from "next";
import LightboxImage from "../lightbox-image";
import { automationMetrics, workflowInternship } from "../resume-highlights";
import SubpageFooter from "../subpage-footer";
import SubpageNav from "../subpage-nav";
import workflowOverview from "./images/hreasy-n8n-workflow-overview.webp";

// Sources: Huang_Kai-Chun_Resume.pdf (experience section) and the n8n workflow overview diagram on this page.

const period = workflowInternship.meta.split("｜")[1];

const problems = [
  {
    title: "人工製作與發布太耗時",
    text: "人工製作並發布一篇內容約需 30 分鐘，而且同一份內容要發布到 4 個平台。",
  },
  {
    title: "影像模型的字與版面會出錯",
    text: "直接用影像模型產生輪播圖，常出現中文錯字與版面跑位。",
  },
  {
    title: "草稿品質與 API 都不穩定",
    text: "生成的草稿品質不一，外部 API 也會逾時或被限流，需要流程自己處理，而不是靠人盯著重跑。",
  },
];

const stages = [
  {
    index: "01",
    title: "派工與內容準備",
    text: "依內容計畫定期派工，將產品、受眾與品牌素材組成生成任務。",
  },
  {
    index: "02",
    title: "五路內容生成",
    text: "同一批任務分別生成 Facebook 長文、HTML 輪播圖、數字人影片、Threads 卡片與 LinkedIn 草稿。",
  },
  {
    index: "03",
    title: "AI 審核與人工核准",
    text: "LLM 品質檢查先把關，未達標的草稿退回重寫；通過後寄出審核信，由人工核准、退回或指定重做。",
  },
  {
    index: "04",
    title: "多平台發布",
    text: "透過 Meta API（Facebook Pages、Instagram Graph、Threads）將內容發布到 4 個平台，並回寫發布紀錄。",
  },
  {
    index: "05",
    title: "成效回饋",
    text: "每週分析 GA4 漏斗；通過統計檢定且經人工核准的建議，才會帶入下一輪生成。",
  },
];

const safeguards = [
  {
    label: "Structured output",
    title: "結構化 JSON 輸出",
    text: "生成與審核的提示都設計成結構化 JSON 輸出，下游節點直接讀取欄位，不必解析自由文字。",
  },
  {
    label: "LLM quality check",
    title: "LLM 品質檢查",
    text: "每份草稿先經過 LLM 品質檢查，未達標的自動退回重寫，通過才進入發布。",
  },
  {
    label: "Automatic retries",
    title: "逾時與限流自動重試",
    text: "遇到 API 逾時或 rate limit 錯誤時自動重試，流程不會因為單次失敗而中斷。",
  },
];

const feedbackSteps = [
  ["每週 GA4 漏斗分析", "每週擷取 GA4 的站上行為與各階段漏斗數據。"],
  ["統計檢定", "以 Fisher 精確檢定比較差異，並用 Benjamini–Hochberg 校正多重比較。"],
  ["人工核准", "只有通過檢定、且經人工核准的改善方案才會被採用。"],
  ["帶入下一輪", "核准的建議回寫到生成提示，進入下一輪內容製作。"],
];

const techStack = [
  "n8n",
  "JavaScript",
  "OpenAI API",
  "Gemini API",
  "Meta APIs",
  "GA4",
  "HTML Templates",
  "Fisher’s Exact Test",
  "Benjamini–Hochberg",
];

const automationNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "System", href: "#system" },
  { label: "Reliability", href: "#reliability" },
  { label: "Carousel", href: "#carousel" },
  { label: "Feedback", href: "#feedback" },
  { label: "Handover", href: "#handover" },
];

export const metadata: Metadata = {
  title: "AI 行銷內容自動化",
  description:
    "ZOUSTEC AI 工作流程研究實習：以 51 個 n8n 工作流程串接 AI 生成、LLM 品質檢查與 4 個發布平台，每篇內容由 30 分鐘縮短為 2 分鐘、執行成功率 97.1%，並以 GA4 與統計檢定回饋改善。",
};

const sectionClass = "border-t border-white/10 py-12 md:py-16";
const eyebrowClass = "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300";
const h2Class = "mt-3 text-2xl font-bold md:text-3xl";
const cardClass = "border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:p-6";

function FlowArrow() {
  return (
    <span aria-hidden="true" className="flex shrink-0 items-center justify-center text-emerald-300 md:px-1">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 rotate-90 md:rotate-0">
        <path d="M4 10h11m-4-4.5L15.5 10 11 14.5" />
      </svg>
    </span>
  );
}

export default function MarketingAutomationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <SubpageNav items={automationNavItems} backHref="/#projects" backLabel="Back to Projects" breakpoint="lg" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <section id="overview" className="pb-12 md:pb-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className={eyebrowClass}>Case study · Internship</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/45 bg-amber-300/[0.1] px-3 py-1 text-xs font-bold text-amber-100">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              ZOUSTEC · {period}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl lg:text-[3.4rem]">AI 行銷內容自動化</h1>
          <p className="mt-3 text-lg font-semibold text-emerald-100">{workflowInternship.title}</p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
            把內容的生成、審核、發布與成效分析，接成一條會自己把關、也會從數據學習的工作流程，讓團隊不必再重複同樣的人工操作。
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
            {automationMetrics.map((metric, index) => (
              <div key={metric.label} className="flex flex-col bg-[#0a1014]/90 px-5 py-4 backdrop-blur">
                <dt className="order-last mt-1 text-xs text-slate-400 md:text-sm">{metric.label}</dt>
                <dd className={`text-3xl font-black md:text-4xl ${index === 0 ? "text-amber-300" : "text-white"}`}>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs leading-6 text-slate-400">數據為實習期間的專案成果紀錄，並非即時服務數字。</p>
        </section>

        <section id="problem" className={sectionClass}>
          <p className={eyebrowClass}>01 · Problem</p>
          <h2 className={h2Class}>原本的內容流程卡在三個地方</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {problems.map((problem) => (
              <article key={problem.title} className={cardClass}>
                <h3 className="text-lg font-bold text-white">{problem.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-slate-300">{problem.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="system" className={sectionClass}>
          <p className={eyebrowClass}>02 · System</p>
          <h2 className={h2Class}>51 個 n8n 工作流程，串成一個循環</h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-300">
            從派工、生成、審核到發布，最後再把成效數據帶回下一輪生成。
          </p>

          <ol className="mt-8 grid gap-px border border-white/10 bg-white/10 md:grid-cols-5">
            {stages.map((stage) => (
              <li key={stage.index} className="flex flex-col bg-[#0a1014] p-5">
                <p className="font-mono text-xs font-bold text-emerald-300">{stage.index}</p>
                <h3 className="mt-2 text-base font-bold leading-6 text-white">{stage.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{stage.text}</p>
              </li>
            ))}
          </ol>

          <figure className="mt-8">
            <div className="overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <LightboxImage
                src={workflowOverview}
                alt="HReasy n8n AI 內容生成、審核、發布與成效回饋全景圖"
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-6 text-slate-400">
              完整流程全景圖（點圖可放大）：資料來源 → 派工 → 五路內容生成與 AI 審核 → 審核分流與發布 → Instagram 互動 → GA4 成效分析 → 核准建議回饋。
            </figcaption>
          </figure>
        </section>

        <section id="reliability" className={sectionClass}>
          <p className={eyebrowClass}>03 · Reliability</p>
          <h2 className={h2Class}>讓流程自己把關：品質檢查與自動重試</h2>

          <div className="mt-8 border border-white/10 bg-[#0a1014]/80 p-5 backdrop-blur md:p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Quality loop</p>
            <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-stretch">
              <div className="flex-1 border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="font-bold text-white">AI 生成草稿</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">結構化 JSON 輸出</p>
              </div>
              <FlowArrow />
              <div className="flex-1 border border-emerald-300/40 bg-emerald-300/[0.08] px-4 py-3">
                <p className="font-bold text-white">LLM 品質檢查</p>
                <p className="mt-1 text-sm leading-6 text-emerald-100/80">通過才放行</p>
              </div>
              <FlowArrow />
              <div className="flex-1 border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="font-bold text-white">發布到 4 個平台</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">回寫發布紀錄</p>
              </div>
            </div>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300 md:grid-cols-2">
              <li className="flex gap-2.5">
                <span className="font-bold text-amber-300" aria-hidden="true">↺</span>
                <span>
                  <span className="font-semibold text-white">未通過檢查：</span>草稿退回重寫，再檢查一次。
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-amber-300" aria-hidden="true">↻</span>
                <span>
                  <span className="font-semibold text-white">API 逾時或限流：</span>自動重試，不必人工重跑。
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {safeguards.map((item) => (
              <article key={item.title} className={cardClass}>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">{item.label}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-4 border border-emerald-300/30 bg-[linear-gradient(120deg,rgba(110,231,183,0.08),transparent_60%)] p-5 md:flex-row md:items-center md:gap-8">
            <p className="shrink-0 text-5xl font-black text-emerald-300">97.1%</p>
            <p className="text-[15px] leading-7 text-slate-200">
              的執行成功率，統計範圍為已發布的 128 篇內容；每篇內容的處理時間由 30 分鐘縮短為 2 分鐘。
            </p>
          </div>
        </section>

        <section id="carousel" className={sectionClass}>
          <p className={eyebrowClass}>04 · Carousel</p>
          <h2 className={h2Class}>輪播圖改用 HTML 模板，不再讓影像模型寫字</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.8fr)]">
            <article className={cardClass}>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Before · 影像模型</p>
              <h3 className="mt-2 text-lg font-bold text-white">字和版面交給模型畫</h3>
              <ul className="mt-3 grid gap-2 text-[15px] leading-7 text-slate-300">
                <li className="border-l-2 border-white/15 pl-3">中文字會拼錯</li>
                <li className="border-l-2 border-white/15 pl-3">版面會跑位</li>
              </ul>
            </article>
            <article className="border border-emerald-300/30 bg-emerald-300/[0.05] p-5 backdrop-blur md:p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">After · HTML 模板</p>
              <h3 className="mt-2 text-lg font-bold text-white">文字由模板排版後再輸出成圖</h3>
              <ul className="mt-3 grid gap-2 text-[15px] leading-7 text-slate-200">
                <li className="border-l-2 border-emerald-300/40 pl-3">排查影像模型的文字錯誤後，以 HTML 模板重做 Instagram 輪播圖</li>
                <li className="border-l-2 border-emerald-300/40 pl-3">文字與版面錯誤問題獲得解決</li>
              </ul>
            </article>
            <div className="flex flex-col justify-center border border-amber-300/30 bg-[linear-gradient(150deg,rgba(252,211,77,0.1),rgba(255,255,255,0.03)_60%)] p-5 md:p-6">
              <p className="text-5xl font-black text-amber-300">−55%</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">輪播圖渲染時間</p>
            </div>
          </div>
        </section>

        <section id="feedback" className={sectionClass}>
          <p className={eyebrowClass}>05 · Feedback</p>
          <h2 className={h2Class}>用數據決定下一輪要改什麼</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.5fr)]">
            <ol className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {feedbackSteps.map(([title, text], index) => (
                <li key={title} className="bg-[#0a1014] p-5">
                  <p className="font-mono text-xs font-bold text-emerald-300">0{index + 1}</p>
                  <h3 className="mt-2 text-base font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-300">{text}</p>
                </li>
              ))}
            </ol>
            <div className="flex flex-col justify-center border border-white/10 bg-white/[0.045] p-5 backdrop-blur md:p-6">
              <p className="text-4xl font-black text-white md:text-5xl">22,761</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">HReasy Threads 帳號 30 天內累積的瀏覽次數</p>
            </div>
          </div>
        </section>

        <section id="handover" className={sectionClass}>
          <p className={eyebrowClass}>06 · Handover</p>
          <h2 className={h2Class}>做到別人接得下去</h2>
          <div className="mt-6 border-l-2 border-emerald-300/40 pl-4">
            <p className="max-w-3xl text-[15px] leading-7 text-slate-300">
              撰寫交接文件，整理憑證到期日、token 更新方式與待辦事項，讓同事可以接手維運整套系統。
            </p>
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

        <SubpageFooter next={["llama", "intentQa"]} />
      </div>
    </main>
  );
}
