import Link from "next/link";
import { cieAward, courseHonors, honorSharing, workflowInternship } from "./resume-highlights";
import { resumeHref } from "./site-config";

import ActiveSectionNav from "./active-section-nav";
import AiProfilePanel from "./ai-profile-panel";
import BackToTop from "./back-to-top";
import HomeMotion from "./home-motion";
import CertificateGrid from "./certificate-grid";
import MobileMenu from "./mobile-menu";
import SkillWorkMatrix from "./skill-work-matrix";
import aiatclCertificate from "./image/AIATCL.jpg";
import aiCertificate from "./image/ai-certificate.png";
import googleCertificate from "./image/google-certificate.png";
import toeicCertificate from "./image/toeic-score-report.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const certificates = [
  {
    title: "AIA Talent Certification in AI Literacy",
    issuer: "Taiwan AI Academy",
    image: aiatclCertificate,
    href: "/file/AIATCL.pdf",
    tags: ["Score 95", "AI Literacy", "Valid 2026.04–2028.04"],
  },
  {
    title: "Microsoft AI & ML Engineering",
    issuer: "Coursera / Microsoft",
    image: aiCertificate,
    tags: ["AI", "Machine Learning", "Engineering"],
  },
  {
    title: "Google Data Analytics",
    issuer: "Coursera / Google",
    image: googleCertificate,
    tags: ["Data Analytics", "SQL", "Python"],
  },
  {
    title: "TOEIC Listening & Reading Score Report",
    issuer: "ETS TOEIC",
    image: toeicCertificate,
    href: "/file/toeic-score-report.pdf",
    tags: ["Score 845", "TOEIC", "English"],
  },
];

type Experience = {
  title: string;
  meta: string;
  badge: string;
  description: string;
  href?: string;
  action?: string;
};

const experiences: Experience[] = [
  workflowInternship,
  {
    title: "國科會研究計畫助理",
    meta: "私立逢甲大學｜以 LLaMA 3 模型與 Myers 演算法進行程式碼版本差異註解生成模式｜2025.08–2026.08",
    badge: "Research Assistant",
    description:
      "整合 Myers Diff 演算法、深度學習分類與 LLaMA 3，建立自動化程式碼變更註解流程，支援程式碼審查與軟體維護；以 Python 處理 GitHub 程式碼變更資料，包含修改前後程式碼擷取、diff 區塊辨識與模型訓練資料集整理。並協助研究資料彙整、研究經費報帳與核銷，累積研究行政與協調經驗。",
  },
  {
    title: "工業工程與系統管理學系資料庫設計課程助教",
    meta: "私立逢甲大學｜資料庫管理系統與設計｜113-2、114-2 學期（2025.02–至今）",
    badge: "Teaching Assistant",
    description:
      "協助課程教學、夜間輔導、作業討論與學生問題釐清，內容涵蓋關聯式綱要設計、SQL 查詢、正規化與資料庫管理。",
    href: "/database-design-tutoring",
    action: "View Photos",
  },
  {
    title: "工業工程與系統管理學系決策與數據分析課程助教",
    meta: "私立逢甲大學｜決策與數據分析｜114-1 學期（2025.09–2026.01）",
    badge: "Teaching Assistant",
    description:
      "指導學生以 R 進行資料前處理、探索性分析、模型建構與評估，並協助作業討論與學生問題釐清。",
  },
  honorSharing,
  {
    title: "國中補習班理化助教",
    meta: "臺中市私立佳華文理補習班-中科旗艦校｜課堂協助、課業輔導與概念講解",
    badge: "Tutor Assistant",
    description:
      "協助課堂進行、學生課業輔導與理化概念說明，培養將複雜概念拆解並清楚表達的能力。",
  },
];

const highlights = [
  {
    title: "2025 中國工業工程學會年會暨學術研討會",
    href: "/conference",
    badge: "Best Paper Award",
    description:
      "發表 LLaMA 3 個人化行銷文案生成研究，榮獲大數據技術與應用領域最佳論文獎。",
    tags: ["LLaMA 3", "NLP", "Marketing Copy", "Best Paper"],
  },
  {
    title: "ICCCM 2026",
    href: "/icccm",
    badge: "Published Paper",
    description:
      "論文 AN OBJECTIVE ESSAY SCORING AND COMMENTARY GENERATION SYSTEM WITH LSTM MODEL 於 2026 年 7 月 24-26 日在日本東京 The 14th International Conference on Computer and Communications Management 發表。",
    tags: ["ICCCM 2026", "Published Paper", "LSTM", "Essay Scoring"],
  },
  {
    title: "工業工程與系統管理學系系學會",
    href: "/student-association",
    badge: "Leadership Evidence",
    description:
      "擔任工業工程與系統管理學系系學會活動組長，作為團隊協作、流程安排、資源協調與現場執行能力的輔助證據。",
    tags: ["Event Planning", "Teamwork", "Coordination", "Leadership"],
  },
];

const researchPublications = [
  {
    title: "2025 中國工業工程學會年會暨學術研討會",
    href: "/conference",
    badge: "Best Paper Award",
    subtitle: "2026台灣作業研究學會-大專校院專題競賽",
    details: [
      {
        label: "研究主題",
        value: "基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式",
      },
      {
        label: "獎項",
        value: [
          "2026 全國工業工程與管理大學生專題論文與技術報告競賽：服務系統與科技管理組第一名",
          "2025 工工年會：最佳論文獎 / 大數據技術與應用領域",
          "2026 台灣作業研究學會大專校院專題競賽：人工智慧與大數據分析組第三名",
          "逢甲大學工業工程與系統管理學系-114學年度畢業專題第二名",
          `${cieAward.title}：工業工程組佳作（Honorable Award）`,
        ],
      },
    ],
    tags: ["LLaMA 3", "NLP", "Marketing Copy", "Best Paper"],
  },
  {
    title: "ICCCM 2026 Published Paper",
    href: "/icccm",
    badge: "Published Paper",
    details: [
      {
        label: "研究主題",
        value:
          "An Objective Essay Scoring and Commentary Generation System with LSTM Model",
      },
      {
        label: "會議",
        value:
          "The 14th International Conference on Computer and Communications Management",
      },
      {
        label: "地點",
        value: "日本東京",
      },
    ],
    tags: ["ICCCM 2026", "Published Paper", "LSTM", "Essay Scoring"],
  },
];

const honors = [
  {
    title: "校級榮譽學生入選",
    badge: "Honor Student",
    href: "/honor-student",
    action: "View Details",
    description:
      "入選逢甲大學 2026 屆榮譽學生（2026.06），作為學業表現、專題參與與校內發展歷程的綜合肯定。",
    tags: ["University Recognition", "Honor Student", "Academic Growth"],
  },
];

const featuredProjects = [
  {
    title: "LLaMA 3 個人化行銷文案系統",
    badge: "Featured Case Study",
    href: "/llama-marketing-system",
    action: "View Website",
    tags: ["LLaMA 3", "NLP", "TextRank", "K-Means", "HDBSCAN"],
    summary:
      "以 LLaMA 3 分析消費者偏好，並生成更貼近產品特徵的個人化行銷文案。",
    proofPoints: [
      "擔任專題組長，規劃研究進度與組員分工，每週彙整兩次進度報告。",
      "以 QLoRA 於 78K 筆行銷文本微調 LLaMA 3 8B，減少制式化的產品描述。",
      "BLEU-3 18.92、BLEU-4 14.44、METEOR 23.62；人工評估流暢度 0.89、多樣性 0.87、相關性 0.80、吸引力 0.85。",
      "結合 TextRank、情感分析、分群方法與 LLaMA 3 文案生成流程。",
      "整理訓練 loss、分群結果與評論/描述 heatmap 作為研究視覺證據。",
      "延伸為 CIIE 最佳論文獎與作業研究專題競賽獲獎成果。",
    ],
  },
  {
    title: "4G SEO Entity Analysis Tool",
    badge: "Live Demo",
    href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app",
    action: "Live Demo",
    tags: ["SEO Tool", "SERP API", "Entity Analysis", "Google Sheets"],
    summary:
      "一個可線上操作的 SEO 分析工具，用來擷取 SERP 實體並輸出結構化洞察到 Google Sheets。",
    proofPoints: [
      "串接 SERP API，進行 entity extraction 與關鍵詞比較。",
      "將 SEO 研究流程自動化，產出可重複使用的內容規劃資料。",
      "部署成 Vercel live demo，呈現完整的端到端產品介面。",
    ],
  },
];

const supportingProjects = [
  {
    title: "AI 行銷內容自動化（ZOUSTEC 實習）",
    href: "/marketing-automation",
    action: "View Case Study",
    tags: ["n8n", "GA4", "Statistical Testing", "Workflow Automation"],
    summary:
      "以 51 個 n8n 工作流程串接 AI 生成、AI 審核與 4 個發布平台，並以 GA4 數據回饋持續改善。",
    problem: "人工製作與發布內容耗時，且影像模型產出的輪播圖常有文字與版面錯誤。",
    method: "n8n 自動化流程、GA4 漏斗分析、Fisher 精確檢定與 Benjamini–Hochberg 校正、HTML 輪播圖模板。",
    outcome: "每篇處理時間 30 → 2 分鐘、執行成功率 97.1%、發布 128 篇；Threads 30 天 22,761 次瀏覽。",
  },
  {
    title: "Intent Classification & QA Generation",
    status: "Ongoing",
    tags: ["BERT-BiLSTM", "Gemma 4", "Intent QA", "Knowledge Distillation"],
    summary:
      "建立結合 BERT-BiLSTM、Gemma 4 與 teacher-student 知識蒸餾的端到端意圖分類與 QA 生成流程。",
    problem: "判斷使用者 intent，並生成可用的領域 QA 回覆。",
    method: "BERT-BiLSTM 意圖分類；清理、篩選並格式化 69,477 組 QA，以 QLoRA 與 Unsloth 微調 Gemma 4-E4B。",
    outcome: "意圖分類 Accuracy 96.22%、F1-score 96.20%。",
  },
  {
    title: "LLaMA 3 個人化行銷文案研究",
    href: "/file/graduation-project-poster.pdf",
    action: "View Poster",
    tags: ["Best Paper", "LLaMA 3", "BLEU", "METEOR"],
    summary:
      "個人化行銷文案生成研究海報，包含 BLEU、METEOR 評估與研討會獲獎證明。",
    problem: "生成更符合消費者偏好與產品特徵的行銷文案。",
    method: "結合 LLaMA 3、TextBlob、TextRank、K-Means 與評估指標。",
    outcome: "完成研究發表材料，並獲得 Best Paper Award。",
  },
  {
    title: "用電趨勢分析",
    href: "/file/electricity-usage-trend-analysis-poster.pdf",
    action: "View Poster",
    tags: ["Data Analysis", "Python", "Visualization"],
    summary:
      "於「工業感測與聯網實作」課程參與用電趨勢分析，主要負責資料分析與模型建構。",
    problem: "從用電資料中找出可解讀的變化趨勢。",
    method: "整理 2020–2023 年每日用電資料，於 Google Colab 以 Python 進行前處理、趨勢分析、異常檢測與模型訓練。",
    outcome: "以折線圖呈現用電趨勢與異常情形，完成研究海報，提供節能規劃與用電管理的參考。",
  },
  {
    title: "IVE K-pop Fan Website",
    href: "/ive",
    action: "View Website",
    tags: ["Frontend", "Next.js", "Tailwind CSS"],
    summary:
      "以前端介面實作為核心，聚焦響應式版面、視覺層級與粉絲網站內容架構。",
    problem: "建立內容豐富且主題明確的 fan website。",
    method: "使用 Next.js 與 Tailwind CSS 製作響應式頁面。",
    outcome: "完成可瀏覽、內容結構清楚的前端作品。",
  },
];

const getProjectArtifactLabel = (action?: string, status?: string) => {
  if (status) return "In Progress";
  if (action === "Live Demo") return "Live Demo";
  if (action === "View Poster") return "Poster";
  if (action === "View Website") return "Website";
  if (action === "View Case Study") return "Case Study";
  return "Project Proof";
};

const getProjectReviewType = (action?: string, status?: string) => {
  if (status) return "Ongoing Work";
  if (action === "Live Demo") return "Demo";
  if (action === "View Poster") return "Research Proof";
  if (action === "View Website" || action === "View Case Study") return "Case Study";
  return "Project";
};

export default function Home() {
  return (
    <main id="portfolio-home" className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <HomeMotion />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none fixed inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-emerald-300/45 to-transparent" />

      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-6">
          <MobileMenu items={navItems} />

          <Link
            href="/"
            className="min-w-0 flex-1 truncate text-center text-base font-bold md:flex-none md:text-left md:text-lg"
          >
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
          </Link>

          <div className="h-10 w-10 shrink-0 md:hidden" aria-hidden="true" />

          <ActiveSectionNav items={navItems} />
        </div>
      </nav>

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#070a0d] pt-16">
        <div className="hero-glow" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(245,158,11,0.1),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto grid min-h-[82dvh] max-w-[86rem] items-center gap-12 px-6 py-16 md:px-8 md:py-20 xl:grid-cols-[minmax(0,1.12fr)_minmax(28rem,0.85fr)] xl:gap-10">
          <div className="hero-intro max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Kevin Huang | AI Engineer / AI Product Associate
            </p>

            <h1 className="max-w-none text-4xl font-black leading-[1.05] text-white md:text-5xl xl:whitespace-nowrap xl:text-6xl">
              NLP / LLM AI Engineer
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              專注於 NLP、LLM 與資料工作流程專案，將模型實驗轉化為可實際使用的
              AI 工具、研究成果與產品展示。
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                "IE Competition 1st Place",
                "OR Competition 3rd Place",
                "Best Paper Award",
                "LLaMA 3 System",
                "Live SEO Tool",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="pressable motion-reduce-transform rounded-lg border border-emerald-300/70 bg-emerald-300 px-6 py-3 text-center font-bold text-slate-950 shadow-[0_16px_36px_rgba(16,185,129,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="pressable motion-reduce-transform rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-center font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white"
              >
                Contact Me
              </a>

              <a
                href={resumeHref}
                className="pressable motion-reduce-transform rounded-lg border border-white/10 px-6 py-3 text-center font-bold text-slate-300 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <AiProfilePanel />
          </div>
        </div>

        <aside data-reveal-group className="relative z-10 mx-auto mt-4 grid max-w-[86rem] grid-cols-2 gap-3 border-t border-white/10 px-6 pb-16 sm:grid-cols-4 md:px-8 md:pb-20">
          {[
            ["Research Proof", "2026 IE Competition 1st Place"],
            ["Conference Proof", "2025 CIIE Best Paper Award"],
            ["Product Demo", "SEO Entity Analysis Tool"],
            ["LLM Stack", "LLaMA 3、BERT-BiLSTM、Gemma 4"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border border-white/10 bg-[#07100d]/76 p-4 shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur sm:p-5"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                {label}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {value}
              </p>
            </div>
          ))}
        </aside>
      </section>

      <section id="about" className="relative mx-auto max-w-[88rem] px-6 py-16 md:px-8 md:py-20">
        <h2 data-reveal className="mb-6 text-3xl font-bold">About Me</h2>

        <div data-reveal className="border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur md:p-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1fr)] xl:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                AI workflow builder
              </p>
              <p
                lang="zh-Hant"
                className="mt-4 max-w-3xl text-xl font-semibold leading-9 text-white md:text-2xl md:leading-10"
              >
                我專注於 NLP、LLM 與資料工作流，擅長把模型實驗整理成可展示、可驗證、可操作的 AI 工具與研究成果。
              </p>
              <p
                lang="zh-Hant"
                className="mt-5 max-w-3xl text-base leading-8 text-slate-300"
              >
                在專案中，我從問題拆解、資料清理、模型應用、實驗評估到成果展示參與完整流程，並重視 workflow design、介面呈現與跨角色溝通。
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-1">
              {[
                {
                  title: "AI Workflow",
                  text: "問題拆解、資料清理、模型應用、實驗評估與成果展示。",
                },
                {
                  title: "NLP / LLM",
                  text: "LLaMA 3、BERT、Gemma、文字生成、意圖分類與問答生成。",
                },
                {
                  title: "Data Product",
                  text: "Python、SQL、R、統計檢定、PyTorch、n8n、Supabase、Git / Linux 與 demo deployment。",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="border border-white/10 bg-slate-950/35 p-4"
                >
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {[
              "Best Paper Award",
              "LLaMA 3 System",
              "n8n Workflow Automation",
              "SEO Live Demo",
              "GPA 3.9 / 4.3",
              "Database TA",
              "Google Data Analytics",
              "AI / ML Certificate",
            ].map((item) => (
              <span
                key={item}
                className="border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" data-reveal className="relative mx-auto max-w-[90rem] px-6 py-16 md:px-8 md:py-20">
        <SkillWorkMatrix />
      </section>

      <div className="border-y border-white/10 bg-white/[0.02]">
      <section id="projects" className="relative mx-auto max-w-[88rem] px-6 py-16 md:px-8 md:py-24">
        <div data-reveal className="mb-10 grid gap-6 border-b border-white/10 pb-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(24rem,0.7fr)] xl:items-end">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Featured case studies
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
              這裡整理了幾個主要專案，包含實作作品、研究成果與目前進行中的方向。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["01", "Artifact", "Demo / website / poster"],
              ["02", "Method", "Problem to outcome"],
              ["03", "Highlights", "Proof points"],
            ].map(([step, title, text]) => (
              <div
                key={step}
                className="border border-white/10 bg-white/[0.025] px-4 py-3"
              >
                <p className="font-mono text-[11px] font-bold text-emerald-300">
                  {step}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal-group className="grid gap-5 xl:grid-cols-12">
          {featuredProjects.map((project, index) => {
            const isExternal = project.href.startsWith("http");
            const artifactLabel = getProjectArtifactLabel(project.action);
            const reviewType = getProjectReviewType(project.action);
            const isPrimary = index === 0;
            const reviewPath = [
              ["Artifact", artifactLabel],
              ["Highlights", `${project.proofPoints.length} proof points`],
              ["Stack", project.tags.slice(0, 2).join(" / ")],
            ];

            return (
              <article
                key={project.title}
                className={`pressable motion-reduce-transform group relative flex h-full flex-col overflow-hidden border backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 focus-within:ring-2 focus-within:ring-emerald-300/70 ${
                  isPrimary
                    ? "border-emerald-300/25 bg-[linear-gradient(135deg,rgba(16,185,129,0.1),rgba(255,255,255,0.04)_45%,rgba(245,158,11,0.055))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:p-7 xl:col-span-7"
                    : "border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_64px_rgba(0,0,0,0.18)] hover:bg-white/[0.065] md:p-6 xl:col-span-5"
                }`}
              >
                <a
                  href={project.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={`${project.action} for ${project.title}`}
                  tabIndex={-1}
                  className="absolute inset-0 z-10"
                />

                <div className="pointer-events-none flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    {project.badge}
                  </span>
                  <span className="h-px w-6 bg-white/15" aria-hidden="true" />
                  <span className="text-xs font-semibold text-slate-300">
                    {artifactLabel}
                  </span>
                  <span className="text-xs font-semibold text-amber-200">
                    Verified
                  </span>
                </div>

                <div className="pointer-events-none mt-5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {reviewType} entry
                  </p>
                  <h3
                    className={`mt-3 font-bold leading-tight text-white ${
                      isPrimary ? "text-3xl md:text-[2.35rem]" : "text-2xl"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-300 md:text-base">
                    {project.summary}
                  </p>
                </div>

                <dl className="pointer-events-none mt-5 grid gap-3 border-y border-white/10 py-4 sm:grid-cols-3">
                  {reviewPath.map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold leading-6 text-emerald-100">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="pointer-events-none mt-5 grid gap-2.5 text-[15px] leading-7 text-slate-200">
                  {project.proofPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pointer-events-none mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative z-20 mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
                  <a
                    href={project.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="pressable motion-reduce-transform inline-flex w-full items-center justify-center rounded-lg border border-emerald-300/55 bg-emerald-300/[0.12] px-4 py-2.5 text-sm font-bold text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-300/80 hover:bg-emerald-300/[0.18] hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/70 sm:w-auto"
                  >
                    {project.action}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div data-reveal-group className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {supportingProjects.map((project, index) => {
            const isExternal = project.href?.startsWith("http");
            const artifactLabel = getProjectArtifactLabel(
              project.action,
              project.status,
            );
            const reviewType = getProjectReviewType(
              project.action,
              project.status,
            );
            return (
              <article
                key={project.title}
                className="pressable-subtle group relative grid gap-5 py-6 transition hover:bg-white/[0.03] focus-within:ring-2 focus-within:ring-emerald-300/70 md:px-4 xl:grid-cols-[3rem_minmax(14rem,0.82fr)_minmax(0,1.18fr)] xl:gap-8"
              >
                {project.href ? (
                  <a
                    href={project.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={`${project.action} for ${project.title}`}
                    tabIndex={-1}
                    className="absolute inset-0 z-10"
                  />
                ) : null}

                <div className="font-mono text-sm font-bold text-emerald-300/80">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="pointer-events-none min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      {reviewType}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {artifactLabel}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold leading-7 text-white md:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-300">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-slate-950/45 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="pointer-events-none grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-3">
                    {[
                      ["Problem", project.problem],
                      ["Method", project.method],
                      ["Outcome", project.outcome],
                    ].map(([label, value]) => (
                      <p key={label} className="border-l border-emerald-300/25 pl-3">
                        <span className="mb-1 block font-mono text-xs font-semibold uppercase tracking-wide text-emerald-300">
                          {label}
                        </span>
                        {value}
                      </p>
                    ))}
                  </div>

                  <div className="relative z-20 mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:flex-wrap">
                    {project.href ? (
                      <a
                        href={project.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="pressable motion-reduce-transform inline-flex w-full items-center justify-center rounded-lg border border-emerald-300/45 bg-emerald-300/[0.1] px-4 py-2.5 text-sm font-bold text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-300/70 hover:bg-emerald-300/[0.16] hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/70 sm:w-auto"
                      >
                        {project.action}
                      </a>
                    ) : (
                      <span className="inline-flex w-full items-center justify-center rounded-lg border border-white/10 bg-slate-950/35 px-4 py-2.5 text-sm font-bold text-slate-300 sm:w-auto">
                        Ongoing
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      </div>

      <section id="research" className="relative mx-auto max-w-[86rem] px-6 py-16 md:px-8 md:py-20">
        <div data-reveal className="mb-8">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Publications & Awards
            </p>
            <h2 className="text-3xl font-bold">Research & Publications</h2>
          </div>
        </div>

        <div data-reveal-group className="divide-y divide-white/10 border-y border-white/10">
          {researchPublications.map((publication) => (
            <article
              key={publication.title}
              className="group relative grid gap-6 py-7 transition hover:bg-white/[0.035] focus-within:ring-2 focus-within:ring-emerald-300/70 md:px-4 xl:grid-cols-[minmax(0,0.82fr)_minmax(22rem,1fr)] xl:gap-10"
            >
              <Link
                href={publication.href}
                aria-label={`View details for ${publication.title}`}
                className="absolute inset-0 z-10"
              />

              <div className="flex min-w-0 flex-col xl:h-full">
                <div className="pointer-events-none flex flex-col items-start gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="w-fit border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 text-sm font-medium text-emerald-200">
                      {publication.badge}
                    </span>
                    {publication.href === "/conference" ? (
                      <span className="w-fit border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 text-sm font-medium text-emerald-200">
                        Industrial Engineering Competition First Place
                      </span>
                    ) : null}
                    {publication.href === "/conference" ? (
                      <span className="w-fit border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 text-sm font-medium text-emerald-200">
                        Operations Research Project Competition Third Place
                      </span>
                    ) : null}
                  </div>
                  <h3 className="text-lg font-semibold leading-7 md:text-xl md:leading-8">
                    {publication.title}
                  </h3>
                  {publication.subtitle ? (
                    <p className="text-lg font-semibold leading-7 text-white md:text-xl md:leading-8">
                      {publication.subtitle}
                    </p>
                  ) : null}
                </div>

                <div className="pointer-events-none mt-6 border-l border-emerald-300/35 pl-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Focus area
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-emerald-100">
                    {publication.badge}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {publication.tags.slice(0, 3).join(" / ")}
                  </p>
                </div>

                <div className="relative z-20 mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:flex-wrap">
                  <Link
                    href={publication.href}
                    className="pressable motion-reduce-transform inline-flex w-full items-center justify-center rounded-lg border border-emerald-300/45 bg-emerald-300/[0.1] px-5 py-2.5 text-sm font-bold text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-300/70 hover:bg-emerald-300/[0.16] hover:text-white sm:w-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="pointer-events-none min-w-0 border border-white/10 bg-slate-950/25 p-5">
                <dl className="grid gap-4">
                  {publication.details.map((detail) => (
                    <div
                      key={detail.label}
                    >
                      <dt className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 text-[15px] leading-7 text-slate-200 md:text-base">
                        {Array.isArray(detail.value) ? (
                          <span className="grid gap-1">
                            {detail.value.map((item) => (
                              <span key={item}>{item}</span>
                            ))}
                          </span>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-2">
                  {publication.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-1 text-xs text-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-[86rem] px-6 py-16 md:px-8 md:py-20">
        <div data-reveal className="mb-8">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Timeline
            </p>
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
        </div>

        <h3 className="mb-5 text-2xl font-semibold">Honors & recognition</h3>
        <article
          data-reveal
          className="pressable motion-reduce-transform group relative block border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus-within:ring-2 focus-within:ring-emerald-300/70 md:p-6"
        >
          <Link
            href={honors[0].href}
            aria-label={`View details for ${honors[0].title}`}
            className="absolute inset-0 z-10"
          />

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="pointer-events-none max-w-4xl">
              <span className="w-fit border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">
                {honors[0].badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-white md:text-2xl">
                {honors[0].title}
              </h3>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-300 [text-wrap:pretty] md:text-base md:leading-8">
                {honors[0].description}
              </p>

              <div className="pointer-events-auto relative z-20 mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={honors[0].href}
                  className="pressable-subtle inline-flex w-full items-center justify-center rounded-lg border border-emerald-300/35 bg-emerald-300/[0.08] px-4 py-2 text-sm font-bold text-emerald-100 transition hover:border-emerald-300/60 hover:bg-emerald-300/[0.14] sm:w-auto"
                >
                  {honors[0].action}
                </Link>
              </div>
            </div>

            <div className="pointer-events-none flex max-w-sm flex-wrap gap-2 md:justify-end">
              {honors[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 bg-slate-950/45 px-2.5 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        <ul data-reveal-group className="mt-4 grid gap-4 sm:grid-cols-2">
          {courseHonors.map((honor) => (
            <li
              key={honor.title}
              className="border border-white/10 bg-white/[0.035] p-5"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                Academic Honor｜{honor.date}
              </p>
              <p className="mt-2 text-base font-semibold leading-7 text-white">
                {honor.title}
              </p>
              <p className="mt-1 text-sm text-slate-400">{honor.issuer}</p>
            </li>
          ))}
        </ul>

        <h3
          id="student-association"
          className="mb-5 mt-12 text-2xl font-semibold"
        >
          Leadership
        </h3>
        <div data-reveal-group className="grid gap-6">
          {highlights
            .filter((highlight) => highlight.href === "/student-association")
            .map((highlight) => (
              <Link
                key={highlight.title}
                href={highlight.href}
                className="pressable motion-reduce-transform group flex h-full flex-col border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70 md:p-6"
              >
                <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <h3 className="text-lg font-semibold leading-7 md:text-xl md:leading-8">
                    {highlight.title}
                  </h3>
                  <span className="w-fit shrink-0 border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 text-sm text-emerald-200">
                    {highlight.badge}
                  </span>
                </div>

                <p className="text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">
                  {highlight.description}
                </p>

                <div className="mb-6 mt-5 flex flex-wrap gap-2">
                  {highlight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-1 text-xs text-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto inline-flex w-fit items-center justify-center rounded-lg border border-emerald-300/45 bg-emerald-300/[0.1] px-5 py-2.5 text-sm font-bold text-emerald-100 transition group-hover:-translate-y-0.5 group-hover:border-emerald-300/70 group-hover:bg-emerald-300/[0.16] group-hover:text-white">
                  View Details
                </div>
              </Link>
            ))}
        </div>

        <h3 className="mb-5 mt-12 text-2xl font-semibold">
          Academic & Work Experience
        </h3>
        <div data-reveal-group className="relative grid gap-6 border-l border-emerald-300/25 pl-6">
          {experiences.map((experience) => {
            const content = (
              <>
                <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-lg font-semibold leading-7 md:text-xl">
                      {experience.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-400 md:text-base">
                      {experience.meta}
                    </p>
                  </div>

                  <span className="w-fit border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 text-sm text-emerald-200">
                    {experience.badge}
                  </span>
                </div>

                <p className="mb-6 text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">
                  {experience.description}
                </p>

                {experience.href ? (
                  <div className="mt-auto inline-flex w-fit items-center justify-center rounded-lg border border-emerald-300/45 bg-emerald-300/[0.1] px-5 py-2.5 text-sm font-bold text-emerald-100 transition group-hover:-translate-y-0.5 group-hover:border-emerald-300/70 group-hover:bg-emerald-300/[0.16] group-hover:text-white">
                    {experience.action}
                  </div>
                ) : null}
              </>
            );

            return experience.href ? (
              <Link
                key={experience.title}
                href={experience.href}
                className="pressable motion-reduce-transform group relative flex h-full flex-col border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition before:absolute before:-left-[1.92rem] before:top-6 before:h-3 before:w-3 before:rounded-full before:border before:border-emerald-200 before:bg-[#070a0d] hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70 md:p-6"
              >
                {content}
              </Link>
            ) : (
              <article
                key={experience.title}
                className="relative border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur before:absolute before:-left-[1.92rem] before:top-6 before:h-3 before:w-3 before:rounded-full before:border before:border-emerald-200 before:bg-[#070a0d] md:p-6"
              >
                {content}
              </article>
            );
          })}
        </div>

      </section>

      <div className="border-y border-amber-200/10 bg-amber-400/[0.015]">
      <section id="certificates" className="relative mx-auto max-w-[88rem] px-6 py-16 md:px-8 md:py-20">
        <div data-reveal className="mb-8">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Certifications
            </p>
            <h2 className="text-3xl font-bold">Certificates</h2>
          </div>
        </div>

        <CertificateGrid certificates={certificates} />
      </section>
      </div>

      <section id="contact" className="relative mx-auto max-w-[88rem] px-6 py-16 md:px-8 md:py-20">
        <h2 data-reveal className="mb-6 text-3xl font-bold">Let&apos;s Connect</h2>

        <div data-reveal className="border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur md:p-8">
          <p className="text-lg leading-8 text-slate-200">
            我目前正在尋找 AI、資料分析、NLP、LLM
            應用相關的實習、專題合作與研究機會。如果你對我的作品、研究或技術背景有興趣，歡迎透過
            Email 或 GitHub 與我聯繫。
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:kevin80609@gmail.com"
              className="pressable motion-reduce-transform w-full rounded-lg border border-emerald-300/70 bg-emerald-300 px-6 py-3 text-center font-bold text-slate-950 shadow-[0_16px_36px_rgba(16,185,129,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-200 sm:w-auto"
            >
              Email Me
            </a>

            <a
              href="https://github.com/brian-kai"
              target="_blank"
              rel="noopener noreferrer"
              className="pressable motion-reduce-transform w-full rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-center font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white sm:w-auto"
            >
              GitHub
            </a>

            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="pressable motion-reduce-transform w-full rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-center font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white sm:w-auto"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <BackToTop />

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Kevin Huang | Kai-Chun Huang. All rights reserved.
      </footer>
    </main>
  );
}
