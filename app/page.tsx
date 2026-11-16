import Image from "next/image";
import Link from "next/link";
import Arrow, { arrowFor } from "./arrow-icon";
import { courseHonors, education, honorSharing, workflowInternship } from "./resume-highlights";
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
import MoreOnMobile from "./more-on-mobile";
import LightboxImage from "./lightbox-image";
import SiteBrand from "./site-brand";
import SkillWorkMatrix from "./skill-work-matrix";
import { isExternalHref } from "./smart-link";
import llamaSystemDiagram from "./llama-marketing-system/images/llama-system-diagram.svg";
import aiatclCertificate from "./image/AIATCL.jpg";
import aboutPortrait from "./image/honor-student-portrait.jpg";
import aiCertificate from "./image/ai-certificate.png";
import googleCertificate from "./image/google-certificate.png";
import toeicCertificate from "./image/toeic-score-report.png";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const certificates: Certificate[] = [
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
    title: "Google Data Analytics",
    issuer: "Coursera / Google",
    image: googleCertificate,
    verifyHref: "https://coursera.org/verify/professional-cert/R3Y99VZP1AB4",
    issued: "Mar 5, 2026",
    metric: { value: "9", label: "courses" },
    tags: ["Data Analytics", "SQL", "Python"],
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

// Newest first; the internship leads the two entries that ended in 2026.09.
const experiences: Experience[] = [
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
    period: honorSharing.meta.split("｜")[1],
    kind: "Speaking",
    title: honorSharing.title,
    org: "逢甲大學",
    description: honorSharing.description,
    href: honorSharing.href,
    action: honorSharing.action,
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
    action: "看照片",
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
  {
    kind: "Course Honors",
    title: "課程優異表現 ×2",
    detail: `${courseHonors
      .map((honor) => `${honor.title.replace(" 課程優異表現", "")}（${honor.date}）`)
      .join("、")}｜${courseHonors[0].issuer}`,
    date: "2024–2025",
    href: undefined as string | undefined,
    featured: false,
  },
  {
    kind: "Leadership",
    title: "系學會活動組長",
    detail: "工業工程與系統管理學系系學會：活動規劃、流程安排與現場執行",
    date: "2024–2025",
    href: "/student-association",
    featured: false,
  },
];

/** Phones show the newest entries first; the rest sit behind a "show earlier" toggle. */
const recentExperiences = experiences.slice(0, 4);
const earlierExperiences = experiences.slice(4);

function ExperienceItem({ experience, last = false }: { experience: Experience; last?: boolean }) {
  const kind = experienceKinds[experience.kind];
  return (
    <li
      className={`relative grid gap-2 pl-7 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-8 md:pl-0 ${last ? "" : "pb-8"}`}
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
          <span className={`border px-2 py-0.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] ${kind.badge}`}>
            {kind.label}
          </span>
          <h4 className="text-lg font-bold leading-7 text-white md:text-xl">{experience.title}</h4>
        </div>
        <p className="mt-1 text-sm leading-6 text-slate-400">{experience.org}</p>
        <p className="mt-3 max-w-[42em] text-[15px] leading-7 text-slate-300">{experience.description}</p>
        {experience.href ? (
          <Link href={experience.href} className="link-arrow mt-3">
            {experience.action} <Arrow kind={arrowFor(experience.href)} />
          </Link>
        ) : null}
      </div>
    </li>
  );
}

type ProjectLink = { label: string; href: string };

const llamaShowcase = {
  eyebrow: "Case Study · Research",
  award: "CIIE 2025 最佳論文獎",
  title: "LLaMA 3 個人化行銷文案系統",
  role: "專題組長｜規劃研究進度與組員分工，每週彙整兩次進度報告。",
  paper: {
    venue: "CIIE 2025 · 口頭發表",
    title: "基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式",
  },
  steps: [
    ["Problem", "制式化的產品描述，難以貼近不同消費者的偏好。"],
    ["Method", "以 QLoRA 於 78K 筆行銷文本微調 LLaMA 3 8B，結合 TextRank、情感分析與分群建立偏好特徵。"],
    ["Outcome", "BLEU-4 14.44、METEOR 23.62，分別比已發表的基準高 27% 與 64%；人工評估流暢性 0.89、相關性 0.80。"],
  ],
  tags: ["LLaMA 3", "QLoRA", "TextRank", "K-Means", "HDBSCAN"],
  primary: { label: "看案例研究", href: "/llama-marketing-system" },
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
  primary: { label: "看案例研究", href: "/marketing-automation" },
};

type Paper = { venue: string; title: string };

// Research projects carry their paper here, so the papers need no section of their own.
const moreProjects: {
  eyebrow: string;
  title: string;
  summary: string;
  highlight: string;
  /** Shown beside the eyebrow in the amber used for awards across the site. */
  award?: string;
  paper?: Paper;
  /** Spans two columns and gets the award tint. */
  featured?: boolean;
  /** Headline number shown beside a featured card's text from md up, where the wide card has room. */
  stat?: { value: string; label: string };
  link: ProjectLink;
}[] = [
  {
    eyebrow: "NLP · Research",
    award: "CIIE 2026 最佳論文獎",
    featured: true,
    title: "知識蒸餾 × 意圖辨識問答系統",
    summary: "以 73,828 句的 soft label 將微調後的 GPT-OSS-20B 蒸餾為輕量 BiLSTM 進行意圖分類，並以 69,476 組 QA 微調 Gemma 4-E4B。",
    highlight: "Accuracy 88.13% → 92.76%",
    stat: { value: "92.76%", label: "意圖分類 Accuracy（蒸餾前 88.13%）" },
    paper: { venue: "CIIE 2026", title: "應用知識蒸餾與使用者意圖識別技術之智慧問答模式系統" },
    link: { label: "看案例研究", href: "/intent-qa-system" },
  },
  {
    eyebrow: "NLP · Research",
    title: "LSTM 作文評分與評語生成",
    summary: "以分類模型與 TF-IDF 特徵為英文作文客觀評分，並結合 ELMo、Bi-LSTM 與 LSTM 生成評語。",
    highlight: "F1 0.79 · SCC 0.790 · PCC 0.749",
    paper: {
      venue: "ICCCM 2026 · 東京 · 獲接受發表",
      title: "An Objective Essay Scoring and Commentary Generation System with LSTM Model",
    },
    link: { label: "看研究細節", href: "/icccm" },
  },
  {
    eyebrow: "Live Demo",
    title: "4G SEO Entity Analysis Tool",
    summary: "串接 SERP API 擷取實體並比較關鍵詞，輸出結構化洞察到 Google Sheets。",
    highlight: "SERP API → Google Sheets",
    link: { label: "開啟線上 Demo", href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app" },
  },
  {
    eyebrow: "Data Analysis · Poster",
    title: "用電趨勢分析",
    summary: "整理 2020–2023 年每日用電資料，以 Python 進行趨勢分析、異常檢測與模型訓練。",
    highlight: "Python · Visualization",
    link: { label: "看海報", href: "/file/electricity-usage-trend-analysis-poster.pdf" },
  },
  {
    eyebrow: "Frontend",
    title: "IVE K-pop Fan Website",
    summary: "以 Next.js 與 Tailwind CSS 製作，聚焦響應式版面與視覺層級的粉絲網站。",
    highlight: "Next.js · Tailwind CSS",
    link: { label: "看網站", href: "/ive" },
  },
];

const projectButtonClass = "btn btn-secondary w-full sm:w-auto";

/** Shared page width: the nav and every section use it, so their left edges line up. */
const container = "mx-auto max-w-[88rem]";

function ProjectSteps({ steps }: { steps: string[][] }) {
  return (
    <dl className="mt-6 grid gap-4">
      {steps.map(([label, value]) => (
        <div key={label} className="border-l-2 border-emerald-300/35 pl-4">
          <dt className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
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

/** The paper a project produced: venue and status first, then the paper's own title. */
function PaperLine({ paper, className = "" }: { paper: Paper; className?: string }) {
  return (
    <p className={`max-w-[42em] border-l-2 border-white/15 pl-3 text-sm leading-6 text-slate-400 ${className}`}>
      <span className="font-semibold text-slate-200">論文｜{paper.venue}</span>
      <span className="block">{paper.title}</span>
    </p>
  );
}

const heroProof = [
  {
    label: "Competition",
    value: "1st Place",
    detail: "2026 全國工業工程與管理大學生專題論文競賽",
    href: "/conference#first-place",
    action: "看證明",
    highlight: true,
  },
  {
    label: "CIIE 2026",
    value: "Best Paper",
    detail: "知識蒸餾 × 意圖辨識問答系統",
    href: "/intent-qa-system#award",
    action: "看證明",
    highlight: true,
  },
  {
    label: "CIIE 2025",
    value: "Best Paper",
    detail: "LLaMA 3 個人化行銷文案系統",
    href: "/conference#best-paper",
    action: "看證明",
    highlight: true,
  },
  {
    label: "Automation",
    value: "30→2 分",
    detail: "n8n 自動化後每篇內容處理時間",
    href: "/marketing-automation",
    action: "看案例",
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
    title: "帶團隊",
    points: [
      ["畢業專題組長", "規劃研究方向與進度，安排分工，每週彙整兩次進度報告"],
      ["系學會活動組長", "擔任抽直屬、聖誕傳情副召與文化季攤販長，負責流程與人員協調"],
    ],
    link: { label: "看經歷", href: "#experience" },
  },
  {
    title: "教別人",
    points: [
      ["資料庫設計、決策與數據分析助教", "協助 SQL 與 R 的作業討論與學生問題釐清"],
      ["補習班理化助教", "把複雜概念轉化為容易理解的內容"],
    ],
    link: { label: "看助教經歷", href: "/database-design-tutoring" },
  },
  {
    title: "分享與表達",
    points: [
      ["榮譽學生經驗分享會受邀講者", "向約 100 位大一新生分享課程規劃、競賽經驗與研究入門"],
      ["研討會發表", "於 CIIE 2025 口頭發表畢業專題研究成果"],
    ],
    link: { label: "看分享會", href: "/honor-student#sharing-session" },
  },
];


export default function Home() {
  return (
    <main id="portfolio-home" className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <HomeMotion />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <DataFlowBackground />
      <div className="pointer-events-none fixed inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-emerald-300/45 to-transparent" />

      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/85 backdrop-blur-xl">
        <div className={`${container} flex items-center justify-between gap-3 px-4 py-3 md:px-8`}>
          <MobileMenu items={navItems} />

          <SiteBrand />

          <ActiveSectionNav items={navItems} breakpoint="lg" />

          <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm shrink-0">
            Resume
          </a>
        </div>
        <ScrollProgress />
      </nav>
      {/* Where the "skip to content" link in the root layout lands. */}
      <span id="content" tabIndex={-1} />

      <section className="relative isolate overflow-hidden border-b border-white/10 pt-16">
        <div className="hero-glow" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(245,158,11,0.1),transparent_24%)]" />

        <div className={`relative ${container} grid min-h-[82dvh] items-center gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(24rem,0.9fr)] xl:grid-cols-[minmax(0,1.1fr)_minmax(28rem,0.9fr)] xl:gap-14`}>
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
              逢甲大學工業工程碩士生（4+1 學碩一貫，預計 2027.07 畢業），結合 LLM 應用與 AI 工作流程自動化：
              從模型微調與評估，到實際上線運作的自動化系統。
            </p>

            <p className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/[0.08] px-3.5 py-1.5 text-sm font-bold text-emerald-100">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" aria-hidden="true" />
              Open to AI Engineer / AI Product Associate
            </p>

            {/* Phones get the two main actions side by side (Contact stays in the menu),
                which keeps the proof panel below within the first screen. */}
            <div className="mt-8 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:flex sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="btn btn-primary btn-lg px-3 sm:px-6"
              >
                看作品
              </a>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg px-3 sm:px-6"
              >
                履歷 <Arrow kind="external" />
              </a>
              <a
                href="#contact"
                className="btn btn-ghost btn-lg hidden sm:inline-flex"
              >
                聯絡我 <Arrow />
              </a>
            </div>
          </div>

          <aside aria-labelledby="selected-proof" className="hero-panel border border-white/10 bg-[#0a1014]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
              <h2 id="selected-proof" className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Selected proof
              </h2>
              <span className="text-sm font-semibold text-slate-400">點擊看證據</span>
            </div>
            <ul className="grid grid-cols-2 gap-px bg-white/10">
              {heroProof.map((proof) => (
                <li key={proof.label} className="bg-[#0a1014]">
                  <Link
                    href={proof.href}
                    className="group flex h-full flex-col p-4 transition hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-300/70 sm:p-5 md:p-6 lg:p-5 xl:p-6"
                  >
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {proof.label}
                    </span>
                    {/* Sized so "Best Paper" stays on one line in the narrower lg column. */}
                    <span
                      className={`mt-2.5 text-2xl font-black leading-tight tracking-tight sm:text-3xl md:text-[2.1rem] lg:text-[1.7rem] xl:text-[2.1rem] ${
                        proof.highlight ? "text-amber-300" : "text-white"
                      }`}
                    >
                      {proof.value}
                    </span>
                    <span className="mt-2 text-sm leading-6 text-slate-300">{proof.detail}</span>
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

      <div className="border-y border-white/10 bg-white/[0.02]">
      <section id="projects" className={`relative ${container} px-6 py-16 md:px-8 md:py-24`}>
        <div data-reveal className="mb-4 max-w-3xl">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Selected work
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            主力專案以系統架構與量化成果呈現完整脈絡，其他研究與作品整理在下方，論文資訊直接寫在各專案上。
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
            <figcaption className="mt-3 text-sm text-slate-400">
              系統架構：資料 → 偏好分析 → LLaMA 3 → 評估（點圖可放大）
            </figcaption>
          </figure>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {llamaShowcase.eyebrow}
              </span>
              <span className="text-sm font-bold text-amber-200">★ {llamaShowcase.award}</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">{llamaShowcase.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{llamaShowcase.role}</p>
            <PaperLine paper={llamaShowcase.paper} className="mt-4" />
            <ProjectSteps steps={llamaShowcase.steps} />
            <ProjectTags tags={llamaShowcase.tags} />
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                One research · Five awards
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {llamaAwards.map((award) => {
                  const tone = medalTones[award.tone];
                  return (
                    <li
                      key={award.name}
                      className="inline-flex items-center gap-2 border border-white/10 bg-slate-950/40 py-1 pl-1.5 pr-2.5 text-sm text-slate-200"
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-black ${tone.medal}`}
                        aria-hidden="true"
                      >
                        {award.medal}
                      </span>
                      <span className={`font-bold ${tone.rank}`}>{award.rank}</span>
                      <span>{award.short}</span>
                    </li>
                  );
                })}
              </ul>
              <Link href="/conference" className="link-arrow mt-3">
                看 5 項獎項證明 <Arrow />
              </Link>
            </div>
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
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
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
                <dt className="order-last mt-2 text-sm text-slate-400">{label}</dt>
                <dd className="text-3xl font-black tracking-tight text-white md:text-4xl">{value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <div className="border-t border-white/10 pt-10">
          <h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            More research & projects
          </h3>
          {/* Five cards: the award-winning paper spans two columns, so both rows fill at every width. */}
          <div data-reveal-group className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {moreProjects.map((project) => {
              const external = isExternalHref(project.link.href);
              const text = (
                <>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {project.eyebrow}
                    </span>
                    {project.award ? (
                      <span className="text-sm font-bold text-amber-200">★ {project.award}</span>
                    ) : null}
                  </div>
                  <h4 className={`mt-3 font-semibold leading-snug text-white ${project.featured ? "text-xl md:text-2xl" : "text-lg"}`}>
                    {project.title}
                  </h4>
                  <p className="mt-2 max-w-[42em] text-sm leading-6 text-slate-300">{project.summary}</p>
                  {project.paper ? <PaperLine paper={project.paper} className="mt-4" /> : null}
                  {/* With a stat beside the text, the same figure is not repeated as a line. */}
                  <p className={`mt-4 font-mono text-sm font-semibold text-slate-100 ${project.stat ? "md:hidden" : ""}`}>
                    {project.highlight}
                  </p>
                  <span className="link-arrow mt-auto pt-5">
                    {project.link.label} <Arrow kind={arrowFor(project.link.href)} />
                  </span>
                </>
              );
              return (
                <a
                  key={project.title}
                  href={project.link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`pressable motion-reduce-transform group h-full border p-5 transition hover:-translate-y-1 hover:border-emerald-300/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 md:p-6 ${
                    project.featured
                      ? "grid items-center gap-8 border-amber-300/30 bg-[linear-gradient(150deg,rgba(252,211,77,0.09),rgba(255,255,255,0.035)_55%)] sm:col-span-2 md:grid-cols-[minmax(0,1fr)_auto]"
                      : "flex flex-col border-white/10 bg-white/[0.045] hover:bg-white/[0.07]"
                  }`}
                >
                  {project.featured ? <div className="flex h-full min-w-0 flex-col">{text}</div> : text}
                  {project.stat ? (
                    <div className="hidden border-l border-amber-300/25 py-2 pl-8 pr-2 md:block lg:pr-6">
                      <p className="text-5xl font-black tracking-tight text-amber-300">{project.stat.value}</p>
                      <p className="mt-2 max-w-[12em] text-sm leading-6 text-slate-300">{project.stat.label}</p>
                    </div>
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>
      </section>
      </div>

      <section id="experience" className={`relative ${container} px-6 py-16 md:px-8 md:py-20`}>
        <div data-reveal className="mb-8">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Education · Work · Certificates
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Experience</h2>
        </div>

        <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Education
        </h3>
        <ul data-reveal-group className="mb-12 grid gap-3 md:grid-cols-2">
          {education.map((item) => (
            <li
              key={item.degree}
              className="flex h-full flex-col border border-white/10 bg-white/[0.045] p-4 backdrop-blur md:p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-300">{item.school}</span>
                <span className="font-mono text-sm font-semibold text-slate-400">{item.period}</span>
              </div>
              <p className="mt-3 text-lg font-bold leading-snug text-white">{item.degree}</p>
              <p className="mt-1.5 text-sm font-semibold text-slate-100">{item.detail}</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">{item.note}</p>
            </li>
          ))}
        </ul>

        <h3 id="student-association" className="mb-4 scroll-mt-6 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Honors & leadership
        </h3>
        <ul data-reveal-group className="grid gap-3 md:grid-cols-3">
          {recognitions.map((item) => {
            const body = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <span className={`font-mono text-xs font-semibold uppercase tracking-[0.16em] ${item.featured ? "text-amber-300" : "text-slate-400"}`}>
                    {item.kind}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400">{item.date}</span>
                </div>
                <p className="mt-3 text-lg font-bold leading-snug text-white">{item.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-400">{item.detail}</p>
                {item.href ? (
                  <span className="link-arrow mt-auto pt-4">查看 <Arrow /></span>
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
          {recentExperiences.map((experience) => (
            <ExperienceItem key={experience.title} experience={experience} />
          ))}
        </ol>
        <MoreOnMobile
          moreLabel={`顯示較早的 ${earlierExperiences.length} 項經歷`}
          lessLabel="收合較早的經歷"
        >
          <ol data-reveal-group className="relative">
            {earlierExperiences.map((experience, index) => (
              <ExperienceItem
                key={experience.title}
                experience={experience}
                last={index === earlierExperiences.length - 1}
              />
            ))}
          </ol>
        </MoreOnMobile>

        <div id="certificates" className="mt-12">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Certificates
            </h3>
            <p className="text-sm leading-6 text-slate-400">點擊卡片可檢視完整證書。</p>
          </div>
          <CertificateGrid certificates={certificates} />
        </div>
      </section>

      <div className="border-y border-white/10 bg-white/[0.02]">
      <section id="skills" data-reveal className={`relative ${container} px-6 py-16 md:px-8 md:py-20`}>
        <SkillWorkMatrix />
      </section>
      </div>

      <section id="about" className={`relative ${container} px-6 py-16 md:px-8 md:py-20`}>
        <div data-reveal className="mb-8">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Background
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
              <span className="mt-1 block font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                NLP / LLM AI Engineer
              </span>
            </figcaption>
          </figure>

          <div className="min-w-0">
            <p data-reveal lang="zh-Hant" className="max-w-[34em] text-xl font-semibold leading-9 text-white md:text-2xl md:leading-10">
              {aboutIntro.lead}
            </p>
            <div data-reveal className="mt-5 grid gap-4">
              {aboutIntro.paragraphs.map((paragraph) => (
                <p key={paragraph} lang="zh-Hant" className="max-w-[42em] text-base leading-8 text-slate-300">
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
                  key={card.title}
                  className="flex h-full flex-col border border-white/10 bg-white/[0.045] p-5 backdrop-blur"
                >
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
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

      <section id="contact" className={`relative ${container} px-6 py-16 md:px-8 md:py-24`}>
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
