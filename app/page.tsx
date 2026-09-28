import Image from "next/image";
import Link from "next/link";
import Arrow, { arrowFor } from "./arrow-icon";
import { courseHonors, honorSharing, workflowInternship } from "./resume-highlights";
import { llamaAwards, medalTones } from "./llama-awards";
import { contactEmail, githubUrl, linkedinUrl, resumeHref } from "./site-config";

import ActiveSectionNav from "./active-section-nav";
import BackToTop from "./back-to-top";
import ContactLinks from "./contact-links";
import ScrollProgress from "./scroll-progress";
import DataFlowBackground from "./data-flow-background";
import HomeMotion from "./home-motion";
import CertificateGrid, { type Certificate } from "./certificate-grid";
import MobileMenu from "./mobile-menu";
import LightboxImage from "./lightbox-image";
import SkillWorkMatrix from "./skill-work-matrix";
import llamaSystemDiagram from "./llama-marketing-system/images/llama-system-diagram.svg";
import aiatclCertificate from "./image/AIATCL.jpg";
import aboutPortrait from "./image/honor-student-portrait.jpg";
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

const certificates: Certificate[] = [
  {
    title: "AIA Talent Certification in AI Literacy",
    issuer: "Taiwan AI Academy",
    image: aiatclCertificate,
    href: "/file/AIATCL.pdf",
    issued: "Apr 18, 2026",
    expires: "Apr 18, 2028",
    credentialId: "CL2504-D017",
    metric: { value: "95", label: "AIATCL exam score" },
    tags: ["AI Literacy", "AIATCL", "Valid 2 years"],
  },
  {
    title: "TOEIC Listening & Reading",
    issuer: "ETS TOEIC",
    image: toeicCertificate,
    href: "/file/toeic-score-report.pdf",
    issued: "Apr 26, 2026",
    metric: { value: "845", label: "L465 · R380" },
    tags: ["English", "Listening", "Reading"],
  },
  {
    title: "Microsoft AI & ML Engineering",
    issuer: "Coursera / Microsoft",
    image: aiCertificate,
    verifyHref: "https://coursera.org/verify/professional-cert/4U9PB4UL4IW4",
    issued: "Apr 2, 2026",
    metric: { value: "5", label: "courses" },
    tags: ["Machine Learning", "Azure", "AI Agents"],
  },
  {
    title: "Google Data Analytics",
    issuer: "Coursera / Google",
    image: googleCertificate,
    verifyHref: "https://coursera.org/verify/professional-cert/R3Y99VZP1AB4",
    issued: "Mar 5, 2026",
    metric: { value: "9", label: "courses" },
    tags: ["Data Analytics", "SQL", "Python"],
  },
];

const experienceKinds = {
  Work: { label: "Work", badge: "border-amber-300/40 bg-amber-300/[0.1] text-amber-100", dot: "bg-amber-300" },
  Research: { label: "Research", badge: "border-emerald-300/40 bg-emerald-300/[0.1] text-emerald-100", dot: "bg-emerald-300" },
  Teaching: { label: "Teaching", badge: "border-sky-300/40 bg-sky-300/[0.1] text-sky-100", dot: "bg-sky-300" },
  Speaking: { label: "Speaking", badge: "border-violet-300/40 bg-violet-300/[0.1] text-violet-100", dot: "bg-violet-300" },
};

type Experience = {
  period: string;
  kind: keyof typeof experienceKinds;
  title: string;
  org: string;
  description: string;
  href?: string;
  action?: string;
};

// Newest first.
const experiences: Experience[] = [
  {
    period: honorSharing.meta.split("｜")[1],
    kind: "Speaking",
    title: honorSharing.title,
    org: "逢甲大學",
    description: honorSharing.description,
    href: honorSharing.href,
    action: honorSharing.action,
  },
  {
    period: workflowInternship.meta.split("｜")[1],
    kind: "Work",
    title: workflowInternship.title,
    org: "ZOUSTEC Technologies Co., Ltd.",
    description: workflowInternship.description,
    href: workflowInternship.href,
    action: workflowInternship.action,
  },
  {
    period: "2025.09–2026.01",
    kind: "Teaching",
    title: "決策與數據分析 課程助教",
    org: "逢甲大學工業工程與系統管理學系｜114-1 學期",
    description: "指導學生以 R 進行資料前處理、探索性分析、模型建構與評估，並協助作業討論與學生問題釐清。",
  },
  {
    period: "2025.08–2026.08",
    kind: "Research",
    title: "國科會研究計畫助理",
    org: "逢甲大學｜以 LLaMA 3 模型與 Myers 演算法進行程式碼版本差異註解生成模式",
    description:
      "整合 Myers Diff 演算法、深度學習分類與 LLaMA 3，建立自動化程式碼變更註解流程，支援程式碼審查與軟體維護；以 Python 處理 GitHub 程式碼變更資料，包含修改前後程式碼擷取、diff 區塊辨識與模型訓練資料集整理。並協助研究資料彙整、研究經費報帳與核銷，累積研究行政與協調經驗。",
  },
  {
    period: "2025.02–2026.06",
    kind: "Teaching",
    title: "資料庫設計 課程助教",
    org: "逢甲大學工業工程與系統管理學系｜113-2、114-2 學期",
    description: "協助課程教學、夜間輔導、作業討論與學生問題釐清，內容涵蓋關聯式綱要設計、SQL 查詢、正規化與資料庫管理。",
    href: "/database-design-tutoring",
    action: "View Photos",
  },
  {
    period: "2024.07–2025.07",
    kind: "Teaching",
    title: "國中補習班理化助教",
    org: "臺中市私立佳華文理補習班-中科旗艦校",
    description: "協助課堂進行、學生課業輔導與理化概念說明，培養將複雜概念拆解並清楚表達的能力。",
  },
];

const recognitions = [
  {
    kind: "Honor Student",
    title: "校級榮譽學生",
    detail: "逢甲大學 2026 屆，學業表現、專題參與與校內發展的綜合肯定",
    date: "2026.06",
    href: "/honor-student",
    featured: true,
  },
  ...courseHonors.map((honor) => ({
    kind: "Course Honor",
    title: honor.title.replace(" 課程優異表現", ""),
    detail: `課程優異表現｜${honor.issuer}`,
    date: honor.date,
    href: undefined as string | undefined,
    featured: false,
  })),
  {
    kind: "Leadership",
    title: "系學會活動組長",
    detail: "工業工程與系統管理學系系學會：活動規劃、流程安排與現場執行",
    date: "2024–2025",
    href: "/student-association",
    featured: false,
  },
];

type ProjectLink = { label: string; href: string };

const isExternalHref = (href: string) => href.startsWith("http") || href.endsWith(".pdf");

const llamaShowcase = {
  eyebrow: "Case Study · Research",
  award: "CIIE 2025 最佳論文獎",
  title: "LLaMA 3 個人化行銷文案系統",
  role: "專題組長｜規劃研究進度與組員分工，每週彙整兩次進度報告。",
  steps: [
    ["Problem", "制式化的產品描述，難以貼近不同消費者的偏好。"],
    ["Method", "以 QLoRA 於 78K 筆行銷文本微調 LLaMA 3 8B，結合 TextRank、情感分析與分群建立偏好特徵。"],
    ["Outcome", "BLEU-2 15.11、METEOR 16.16，皆優於比較模型；人工評估流暢性 0.89、相關性 0.80。"],
  ],
  tags: ["LLaMA 3", "QLoRA", "TextRank", "K-Means", "HDBSCAN"],
  primary: { label: "View Case Study", href: "/llama-marketing-system" },
  secondary: { label: "研究海報", href: "/file/graduation-project-poster.pdf" },
};

const automationShowcase = {
  eyebrow: "Automation",
  company: "ZOUSTEC",
  role: `${workflowInternship.title} · ${workflowInternship.meta.split("｜")[1]}`,
  title: "AI 行銷內容自動化",
  steps: [
    ["Problem", "人工製作與發布內容耗時，且影像模型產出的輪播圖常有文字與版面錯誤。"],
    ["Method", "n8n 自動化流程、GA4 漏斗分析、Fisher 精確檢定與 Benjamini–Hochberg 校正、HTML 輪播圖模板。"],
    ["Outcome", "串接 AI 生成、AI 審核與 4 個發布平台，發布 128 篇，並以 GA4 數據回饋持續改善。"],
  ],
  metrics: [
    ["30→2", "分鐘 / 篇"],
    ["97.1%", "執行成功率"],
    ["51", "n8n 工作流程"],
    ["22,761", "Threads 30 天瀏覽"],
  ],
  tags: ["n8n", "GA4", "Statistical Testing", "Workflow Automation"],
  primary: { label: "View Case Study", href: "/marketing-automation" },
};

const moreProjects: {
  eyebrow: string;
  title: string;
  summary: string;
  highlight: string;
  status?: string;
  link?: ProjectLink;
}[] = [
  {
    eyebrow: "NLP",
    status: "進行中",
    title: "Intent Classification & QA Generation",
    summary: "BERT-BiLSTM 意圖分類結合 teacher-student 知識蒸餾，以 69,477 組 QA 微調 Gemma 4-E4B。",
    highlight: "Accuracy 96.22% · F1 96.20%",
  },
  {
    eyebrow: "Live Demo",
    title: "4G SEO Entity Analysis Tool",
    summary: "串接 SERP API 擷取實體並比較關鍵詞，輸出結構化洞察到 Google Sheets。",
    highlight: "SERP API → Google Sheets",
    link: { label: "Live Demo", href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app" },
  },
  {
    eyebrow: "Data Analysis · Poster",
    title: "用電趨勢分析",
    summary: "整理 2020–2023 年每日用電資料，以 Python 進行趨勢分析、異常檢測與模型訓練。",
    highlight: "Python · Visualization",
    link: { label: "View Poster", href: "/file/electricity-usage-trend-analysis-poster.pdf" },
  },
  {
    eyebrow: "Frontend",
    title: "IVE K-pop Fan Website",
    summary: "以 Next.js 與 Tailwind CSS 製作，聚焦響應式版面與視覺層級的粉絲網站。",
    highlight: "Next.js · Tailwind CSS",
    link: { label: "View Website", href: "/ive" },
  },
];

const projectButtonClass = "btn btn-secondary w-full sm:w-auto";

function ProjectSteps({ steps }: { steps: string[][] }) {
  return (
    <dl className="mt-6 grid gap-4">
      {steps.map(([label, value]) => (
        <div key={label} className="border-l-2 border-emerald-300/35 pl-4">
          <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            {label}
          </dt>
          <dd className="mt-1 text-[15px] leading-7 text-slate-200">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="border border-white/10 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-300">
          {tag}
        </span>
      ))}
    </div>
  );
}

const heroProof = [
  {
    label: "Competition",
    value: "1st Place",
    detail: "2026 全國工業工程與管理大學生專題論文競賽",
    href: "/conference#first-place",
    action: "Proof",
    highlight: true,
  },
  {
    label: "Conference",
    value: "Best Paper",
    detail: "CIIE 2025 · LLaMA 3 個人化行銷文案",
    href: "/conference#best-paper",
    action: "Proof",
    highlight: true,
  },
  {
    label: "NLP Model",
    value: "96.22%",
    detail: "BERT-BiLSTM 意圖分類 Accuracy",
    href: "#projects",
    action: "Projects",
  },
  {
    label: "Automation",
    value: "30→2 分",
    detail: "n8n 自動化後每篇內容處理時間",
    href: "/marketing-automation",
    action: "Case study",
  },
];

const aboutIntro = {
  lead: "我從工業工程的系統思維出發，用資料與 AI 把問題拆清楚、做出能實際使用的解法。",
  paragraphs: [
    "工業工程讓我習慣從流程與系統的角度看問題。在資料分析、工程統計與決策分析等課程，以及用 LSTM 預測用電趨勢的 AI 課程專題中，我發現自己最享受用資料和模型解決問題的過程，也因此一路投入 NLP 與 LLM 的研究與實作。",
    "合作時，我最在意溝通與把事情講清楚。擔任畢業專題組長時，模型訓練一度卡關，我主動請教學長姐、查閱文獻，重新調整資料處理與超參數，直到模型穩定；擔任助教的經驗，也讓我習慣把複雜的概念轉成別人聽得懂的說明。",
  ],
};

const beyondCode = [
  {
    key: "Lead",
    title: "帶團隊",
    points: [
      ["畢業專題組長", "規劃研究方向與進度，安排分工，每週彙整兩次進度報告"],
      ["系學會活動組長", "擔任抽直屬、聖誕傳情副召與文化季攤販長，負責流程與人員協調"],
    ],
    link: { label: "看經歷", href: "#experience" },
  },
  {
    key: "Teach",
    title: "教別人",
    points: [
      ["資料庫設計、決策與數據分析助教", "協助 SQL 與 R 的作業討論與學生問題釐清"],
      ["補習班理化助教", "把複雜概念轉化為容易理解的內容"],
    ],
    link: { label: "看助教經歷", href: "/database-design-tutoring" },
  },
  {
    key: "Share",
    title: "分享與表達",
    points: [
      ["榮譽學生經驗分享會受邀講者", "向約 100 位大一新生分享課程規劃、競賽經驗與研究入門"],
      ["研討會發表", "於 CIIE 2025 口頭發表畢業專題研究成果"],
    ],
    link: { label: "看分享會", href: "/honor-student#sharing-session" },
  },
];


const awardResearch = {
  topic: "基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式",
  summary: "同一份畢業專題研究，獲得學會、全國競賽與校內共 5 項肯定。",
  stats: [
    ["5", "項獎項"],
    ["3", "項全國競賽"],
  ],
  tags: ["LLaMA 3", "NLP", "Marketing Copy"],
  href: "/conference",
  awards: llamaAwards,
};

const icccmPaper = {
  title: "An Objective Essay Scoring and Commentary Generation System with LSTM Model",
  titleZh: "以 LSTM 模型之文章客觀評分與評語生成模式",
  facts: [
    ["Conference", "ICCCM 2026 · The 14th International Conference on Computer and Communications Management"],
    ["Date", "July 24–26, 2026"],
    ["Location", "Tokyo, Japan"],
  ],
  results: [
    ["0.79", "文本分類 F1"],
    ["0.790", "評分系統 SCC"],
    ["0.749", "評分系統 PCC"],
    ["66.7%", "評語生成整體一致性"],
  ],
  tags: ["LSTM", "Bi-LSTM", "Essay Scoring"],
  href: "/icccm",
};

function ResearchTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-1 text-xs text-emerald-200">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main id="portfolio-home" className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <HomeMotion />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <DataFlowBackground />
      <div className="pointer-events-none fixed inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-emerald-300/45 to-transparent" />

      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <MobileMenu items={navItems} />

          <Link href="/" className="group flex min-w-0 items-center gap-3 lg:flex-none">
            {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG logo */}
            <img src="/icon.svg" alt="" width={32} height={32} className="h-8 w-8 shrink-0 rounded-lg transition group-hover:scale-105" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-base font-bold text-white">Kevin Huang</span>
              <span className="hidden font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300 sm:block">
                NLP / LLM AI Engineer
              </span>
            </span>
          </Link>

          <ActiveSectionNav items={navItems} breakpoint="lg" />

          <a href={resumeHref} className="btn btn-primary btn-sm shrink-0">
            Resume
          </a>
        </div>
        <ScrollProgress />
      </nav>

      <section className="relative isolate overflow-hidden border-b border-white/10 pt-16">
        <div className="hero-glow" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(245,158,11,0.1),transparent_24%)]" />

        <div className="relative mx-auto grid min-h-[82dvh] max-w-[86rem] items-center gap-10 px-6 py-14 md:px-8 md:py-20 xl:grid-cols-[minmax(0,1.1fr)_minmax(28rem,0.9fr)] xl:gap-14">
          <div className="hero-intro max-w-3xl">
            <p className="mb-4 text-base text-slate-300 md:text-lg">
              Hi, I&apos;m <span className="font-bold text-white">Kevin Huang</span>{" "}
              <span aria-hidden="true">👋</span>
            </p>

            <h1 className="text-[2.6rem] font-black leading-[1.05] text-white sm:text-5xl md:text-6xl xl:text-7xl">
              NLP / LLM
              <span className="block bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent">
                AI Engineer
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              專注於 NLP、LLM 與資料工作流程專案，將模型實驗轉化為可實際使用的
              AI 工具、研究成果與產品展示。
            </p>

            <p className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/[0.08] px-3.5 py-1.5 text-sm font-bold text-emerald-100">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" aria-hidden="true" />
              Open to AI Engineer / AI Product Associate
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="btn btn-primary btn-lg"
              >
                View Projects
              </a>
              <a
                href={resumeHref}
                className="btn btn-secondary btn-lg"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="btn btn-ghost btn-lg"
              >
                Contact <Arrow />
              </a>
            </div>
          </div>

          <aside aria-labelledby="selected-proof" className="hero-panel border border-white/10 bg-[#0a1014]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
              <h2 id="selected-proof" className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Selected proof
              </h2>
              <span className="text-xs font-semibold text-slate-400">點擊看證據</span>
            </div>
            <ul className="grid grid-cols-2 gap-px bg-white/10">
              {heroProof.map((proof) => (
                <li key={proof.label} className="bg-[#0a1014]">
                  <Link
                    href={proof.href}
                    className="group flex h-full flex-col p-4 transition hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-300/70 sm:p-5 md:p-6"
                  >
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {proof.label}
                    </span>
                    <span
                      className={`mt-2.5 text-2xl font-black leading-tight tracking-tight sm:text-3xl md:text-[2.1rem] ${
                        proof.highlight ? "text-amber-300" : "text-white"
                      }`}
                    >
                      {proof.value}
                    </span>
                    <span className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">{proof.detail}</span>
                    <span className="link-arrow mt-auto pt-3">
                      {proof.action} <Arrow kind={arrowFor(proof.href)} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-[88rem] px-6 py-16 md:px-8 md:py-20">
        <div data-reveal className="mb-8">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            About me
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <figure
            data-reveal
            className="relative h-[24rem] overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:h-[30rem] lg:h-auto lg:aspect-[4/5]"
          >
            <Image
              src={aboutPortrait}
              alt="Kevin Huang 畢業照"
              sizes="(min-width: 1024px) 320px, 100vw"
              className="h-full w-full object-cover object-[50%_18%]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070a0d]/95 via-[#070a0d]/70 to-transparent px-5 pb-4 pt-16">
              <span className="block text-lg font-bold text-white">Kevin Huang | 黃凱浚</span>
              <span className="mt-1 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                AI Engineer / AI Product
              </span>
            </figcaption>
          </figure>

          <div className="min-w-0">
            <p data-reveal lang="zh-Hant" className="text-xl font-semibold leading-9 text-white md:text-2xl md:leading-10">
              {aboutIntro.lead}
            </p>
            <div data-reveal className="mt-5 grid gap-4">
              {aboutIntro.paragraphs.map((paragraph) => (
                <p key={paragraph} lang="zh-Hant" className="text-base leading-8 text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mb-4 mt-10 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Beyond the code
            </p>
            <div data-reveal-group className="grid gap-4 md:grid-cols-3">
              {beyondCode.map((card) => (
                <article
                  key={card.key}
                  className="flex h-full flex-col border border-white/10 bg-white/[0.045] p-5 backdrop-blur"
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    {card.key}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">{card.title}</h3>
                  <ul className="mt-4 grid gap-3">
                    {card.points.map(([role, detail]) => (
                      <li key={role} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" aria-hidden="true" />
                        <span>
                          <span className="font-semibold text-white">{role}</span>
                          <span className="block">{detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.link.href}
                    className="link-arrow mt-auto pt-5"
                  >
                    {card.link.label} <Arrow kind={arrowFor(card.link.href)} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" data-reveal className="relative mx-auto max-w-[90rem] px-6 py-16 md:px-8 md:py-20">
        <SkillWorkMatrix />
      </section>

      <div className="border-y border-white/10 bg-white/[0.02]">
      <section id="projects" className="relative mx-auto max-w-[88rem] px-6 py-16 md:px-8 md:py-24">
        <div data-reveal className="mb-4 max-w-3xl">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Selected work
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            主力專案以系統架構與量化成果呈現完整脈絡，其他作品整理在下方。
          </p>
        </div>

        <article
          data-reveal
          className="grid items-center gap-8 border-t border-white/10 py-10 md:py-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-12"
        >
          <figure className="min-w-0">
            <div className="overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <LightboxImage
                src={llamaSystemDiagram}
                alt="LLaMA 3 個人化產品行銷文案生成系統架構圖"
                sizes="(min-width: 1024px) 640px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-xs text-slate-500">
              系統架構：資料 → 偏好分析 → LLaMA 3 → 評估<span className="lg:hidden">（點圖可放大）</span>
            </figcaption>
          </figure>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                {llamaShowcase.eyebrow}
              </span>
              <span className="text-xs font-bold text-amber-200">★ {llamaShowcase.award}</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">{llamaShowcase.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{llamaShowcase.role}</p>
            <ProjectSteps steps={llamaShowcase.steps} />
            <ProjectTags tags={llamaShowcase.tags} />
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Link href={llamaShowcase.primary.href} className={projectButtonClass}>
                {llamaShowcase.primary.label} <Arrow />
              </Link>
              <a
                href={llamaShowcase.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow self-center sm:self-auto"
              >
                {llamaShowcase.secondary.label} <Arrow kind="external" />
              </a>
            </div>
          </div>
        </article>

        <article
          data-reveal
          className="grid items-center gap-8 border-t border-white/10 py-10 md:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-12"
        >

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-300/[0.12] px-3.5 py-1.5 text-sm font-bold text-amber-100 shadow-[0_0_24px_rgba(252,211,77,0.12)]">
                <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                實習 @ {automationShowcase.company}
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                {automationShowcase.eyebrow}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold leading-tight text-white md:text-3xl">{automationShowcase.title}</h3>
            <p className="mt-2 text-sm font-semibold text-amber-100/80">{automationShowcase.role}</p>
            <ProjectSteps steps={automationShowcase.steps} />
            <ProjectTags tags={automationShowcase.tags} />
            <div className="mt-7">
              <Link href={automationShowcase.primary.href} className={projectButtonClass}>
                {automationShowcase.primary.label} <Arrow />
              </Link>
            </div>
          </div>

          <dl className="grid min-w-0 grid-cols-2 gap-px border border-white/10 bg-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
            {automationShowcase.metrics.map(([value, label]) => (
              <div key={label} className="flex min-h-32 flex-col justify-center bg-[#0a1114] px-5 py-6 md:min-h-40 md:px-7">
                <dt className="order-last mt-2 text-xs text-slate-400 md:text-sm">{label}</dt>
                <dd className="text-3xl font-black tracking-tight text-white md:text-4xl">{value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <div className="border-t border-white/10 pt-10">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            More projects
          </p>
          <div data-reveal-group className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {moreProjects.map((project) => {
              const content = (
                <>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      {project.eyebrow}
                    </span>
                    {project.status ? (
                      <span className="text-xs font-bold text-amber-200">● {project.status}</span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.summary}</p>
                  <p className="mt-4 font-mono text-xs font-semibold text-emerald-200/90">{project.highlight}</p>
                  {project.link ? (
                    <span className="link-arrow mt-auto pt-5">
                      {project.link.label} <Arrow kind={arrowFor(project.link.href)} />
                    </span>
                  ) : (
                    <span className="mt-auto pt-5 text-sm font-bold text-slate-400">Ongoing</span>
                  )}
                </>
              );
              const cardClass =
                "flex h-full flex-col border border-white/10 bg-white/[0.045] p-5 backdrop-blur";

              if (!project.link) {
                return (
                  <article key={project.title} className={cardClass}>
                    {content}
                  </article>
                );
              }

              const external = isExternalHref(project.link.href);
              return (
                <a
                  key={project.title}
                  href={project.link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`${cardClass} pressable motion-reduce-transform transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70`}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>
      </div>

      <section id="research" className="relative mx-auto max-w-[86rem] px-6 py-16 md:px-8 md:py-20">
        <div data-reveal className="mb-8">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Publications & Awards
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Research & Publications</h2>
        </div>

        <article
          data-reveal
          className="grid items-start gap-8 border-t border-white/10 py-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12"
        >
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              One research · Five awards
            </p>
            <h3 className="mt-3 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
              {awardResearch.topic}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{awardResearch.summary}</p>
            <dl className="mt-6 flex gap-8">
              {awardResearch.stats.map(([value, label], index) => (
                <div key={label} className="flex flex-col">
                  <dt className="order-last mt-2 text-xs text-slate-400">{label}</dt>
                  <dd className={`text-4xl font-black leading-none ${index === 0 ? "text-amber-300" : "text-white"}`}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <ResearchTags tags={awardResearch.tags} />
            <Link href={awardResearch.href} className={`mt-7 ${projectButtonClass}`}>
              View Details <Arrow />
            </Link>
          </div>

          <ol className="min-w-0 border border-white/10 bg-[#0a1014]/70 backdrop-blur">
            {awardResearch.awards.map((award) => {
              const tone = medalTones[award.tone];
              return (
                <li
                  key={award.name}
                  className={`grid gap-2 border-b border-white/10 p-4 last:border-b-0 sm:grid-cols-[8.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-5 sm:px-5 ${tone.row}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${tone.medal}`}
                      aria-hidden="true"
                    >
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
        </article>

        <article
          data-reveal
          className="grid items-start gap-8 border-t border-white/10 py-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12"
        >
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
              International publication
            </p>
            <h3 className="mt-3 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
              {icccmPaper.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">{icccmPaper.titleZh}</p>
            <ResearchTags tags={icccmPaper.tags} />
            <Link href={icccmPaper.href} className={`mt-7 ${projectButtonClass}`}>
              View Details <Arrow />
            </Link>
          </div>

          <div className="min-w-0 border border-white/10 bg-[#0a1014]/70 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" aria-hidden="true" />
                Published Paper · ICCCM 2026
              </span>
            </div>
            <dl className="grid gap-3 px-5 py-4 text-sm">
              {icccmPaper.facts.map(([label, value]) => (
                <div key={label} className="grid gap-1 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-4">
                  <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</dt>
                  <dd className="leading-6 text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
            <dl className="grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-4">
              {icccmPaper.results.map(([value, label]) => (
                <div key={label} className="flex flex-col bg-[#0a1014] px-5 py-4">
                  <dt className="order-last mt-1 text-xs leading-5 text-slate-400">{label}</dt>
                  <dd className="text-2xl font-black text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </section>

      <section id="experience" className="relative mx-auto max-w-[86rem] px-6 py-16 md:px-8 md:py-20">
        <div data-reveal className="mb-8">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Timeline
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Experience</h2>
        </div>

        <h3 id="student-association" className="mb-4 scroll-mt-28 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Honors & leadership
        </h3>
        <ul data-reveal-group className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {recognitions.map((item) => {
            const body = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <span className={`font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${item.featured ? "text-amber-300" : "text-emerald-300"}`}>
                    {item.kind}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-slate-400">{item.date}</span>
                </div>
                <p className="mt-3 text-lg font-bold leading-snug text-white">{item.title}</p>
                <p className="mt-1.5 text-[13px] leading-5 text-slate-400">{item.detail}</p>
                {item.href ? (
                  <span className="link-arrow mt-auto pt-4">View <Arrow /></span>
                ) : null}
              </>
            );
            const cardClass = `flex h-full flex-col border p-4 backdrop-blur md:p-5 ${
              item.featured
                ? "border-amber-300/35 bg-[linear-gradient(150deg,rgba(252,211,77,0.1),rgba(255,255,255,0.03)_60%)]"
                : "border-white/10 bg-white/[0.045]"
            }`;
            return (
              <li key={item.title}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`${cardClass} pressable motion-reduce-transform group transition hover:-translate-y-1 hover:border-emerald-300/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70`}
                  >
                    {body}
                  </Link>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>

        <h3 className="mb-4 mt-12 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Work, research & teaching
        </h3>
        <ol data-reveal-group className="relative">
          {experiences.map((experience) => {
            const kind = experienceKinds[experience.kind];
            return (
              <li
                key={experience.title}
                className="relative grid gap-2 pb-8 pl-7 last:pb-0 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-8 md:pl-0"
              >
                {/* Rail and dot: left edge on mobile, between date and card on desktop. */}
                <span className="absolute bottom-0 left-[5px] top-2 w-px bg-white/10 md:left-[10.4rem]" aria-hidden="true" />
                <span
                  className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-[#070a0d] md:left-[calc(10.4rem-5px)] ${kind.dot}`}
                  aria-hidden="true"
                />
                <p className="font-mono text-sm font-semibold text-slate-300 md:pt-0.5 md:text-right">{experience.period}</p>
                <div className="min-w-0 md:pl-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className={`border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${kind.badge}`}>
                      {kind.label}
                    </span>
                    <h4 className="text-lg font-bold leading-7 text-white md:text-xl">{experience.title}</h4>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{experience.org}</p>
                  <p className="mt-3 max-w-4xl text-[15px] leading-7 text-slate-300">{experience.description}</p>
                  {experience.href ? (
                    <Link
                      href={experience.href}
                      className="link-arrow mt-3"
                    >
                      {experience.action} <Arrow kind={arrowFor(experience.href)} />
                    </Link>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <div className="border-y border-amber-200/10 bg-amber-400/[0.015]">
      <section id="certificates" className="relative mx-auto max-w-[88rem] px-6 py-16 md:px-8 md:py-20">
        <div data-reveal className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Certifications
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Certificates</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            AI、機器學習、資料分析與英語能力認證。點擊卡片可檢視完整證書。
          </p>
        </div>

        <CertificateGrid certificates={certificates} />
      </section>
      </div>

      <section id="contact" className="relative mx-auto max-w-[88rem] px-6 py-16 md:px-8 md:py-24">
        <div data-reveal className="grid items-center gap-10 border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.1),rgba(255,255,255,0.035)_45%,rgba(245,158,11,0.05))] grid-cols-[minmax(0,1fr)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="min-w-0">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Contact
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">Let&apos;s Connect</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              我正在尋找 AI Engineer / AI Product Associate 相關職位，也歡迎專題合作與研究交流。如果你對我的作品、研究或技術背景有興趣，歡迎與我聯繫。
            </p>
            <p className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/[0.08] px-3.5 py-1.5 text-sm font-bold text-emerald-100">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" aria-hidden="true" />
              Open to AI Engineer / AI Product Associate
            </p>
          </div>

          <ContactLinks email={contactEmail} github={githubUrl} linkedin={linkedinUrl || undefined} resumeHref={resumeHref} />
        </div>
      </section>

      <BackToTop />

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Kevin Huang | Kai-Chun Huang. All rights reserved.
      </footer>
    </main>
  );
}
