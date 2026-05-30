import Link from "next/link";

import CertificateGrid from "./certificate-grid";
import MobileMenu from "./mobile-menu";
import aiatclCertificate from "./image/AIATCL.jpg";
import aiCertificate from "./image/AI證照.png";
import googleCertificate from "./image/GOOGLE證照.png";
import toeicCertificate from "./image/多益成績單.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    category: "Data Analysis",
    description:
      "使用 Python、Pandas、NumPy 與 SQL 進行資料清理、資料轉換、特徵整理與視覺化分析，協助從資料中分析趨勢與洞察。",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Data Cleaning",
      "Data Visualization",
    ],
  },
  {
    category: "NLP / LLM",
    description:
      "具備自然語言處理與大型語言模型應用經驗，能進行意圖分類、文字生成、情感分析、關鍵字擷取與知識蒸餾相關實作。",
    items: [
      "BERT",
      "LLaMA",
      "Gemma",
      "Intent Classification",
      "Text Generation",
      "Sentiment Analysis",
      "Keyword Extraction",
      "Knowledge Distillation",
    ],
  },
  {
    category: "Web / Deployment",
    description:
      "使用 Next.js、Tailwind CSS、Vercel、Supabase 與 n8n 建立網站介面、部署專案，並串接資料庫與自動化流程。",
    items: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Supabase",
      "n8n",
      "Deployment",
      "Workflow Automation",
    ],
  },
];

const certificates = [
  {
    title: "AIA Talent Certification in AI Literacy",
    issuer: "Taiwan AI Academy",
    image: aiatclCertificate,
    href: "/file/AIATCL.pdf",
    tags: ["AI Literacy", "AI Fundamentals", "AIA Talent"],
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
    href: "/file/多益成績單.pdf",
    tags: ["TOEIC", "English", "Score Report"],
  },
];

const experiences = [
  {
    title: "國科會研究計畫助理",
    meta: "私立逢甲大學｜以 LLaMA 3 模型與 Myers 演算法進行程式碼版本差異註解生成模式",
    badge: "Research Assistant",
    description:
      "協助研究流程規劃、程式碼版本差異資料整理與模型應用，支援以 LLaMA 3 產生程式碼變更註解的研究工作。",
  },
  {
    title: "工業工程與系統管理學系資料庫設計課程助教",
    meta: "私立逢甲大學｜資料庫設計｜113-2、114-2 學期",
    badge: "Teaching Assistant",
    description:
      "協助課程教學、夜間輔導、作業討論與學生問題釐清，內容涵蓋資料庫設計、SQL 操作、資料整理與實作流程說明。",
    href: "/database-design-tutoring",
    action: "View Photos",
  },
  {
    title: "工業工程與系統管理學系決策與數據分析課程助教",
    meta: "私立逢甲大學｜決策與數據分析｜114-1 學期",
    badge: "Teaching Assistant",
    description:
      "協助課程教學、作業討論與學生問題釐清，內容涵蓋資料分析流程、決策應用與數據分析觀念說明。",
  },
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
    badge: "Accepted for Presentation",
    description:
      "論文摘要 AN OBJECTIVE ESSAY SCORING AND COMMENTARY GENERATION SYSTEM WITH LSTM MODEL 獲 The 14th International Conference on Computer and Communications Management 接受，將於 2026 年 7 月 24-26 日在日本東京發表。",
    tags: ["ICCCM 2026", "Presentation", "LSTM", "Essay Scoring"],
  },
  {
    title: "工業工程與系統管理學系系學會",
    href: "/student-association",
    badge: "Activity Leader",
    description:
      "擔任工業工程與系統管理學系系學會活動組長，負責活動企劃、流程安排、資源協調與現場執行。",
    tags: ["Event Planning", "Teamwork", "Coordination", "Leadership"],
  },
];

const researchPublications = [
  {
    title: "2025 中國工業工程學會年會暨學術研討會",
    href: "/conference",
    badge: "Best Paper Award",
    details: [
      {
        label: "研究主題",
        value: "基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式",
      },
      {
        label: "獎項",
        value: "最佳論文獎 — 大數據技術與應用領域",
      },
      {
        label: "地點",
        value: "高雄科技大學",
      },
    ],
    tags: ["LLaMA 3", "NLP", "Marketing Copy", "Best Paper"],
  },
  {
    title: "ICCCM 2026 Accepted for Presentation",
    href: "/icccm",
    badge: "Accepted for Presentation",
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
    tags: ["ICCCM 2026", "Presentation", "LSTM", "Essay Scoring"],
  },
];

const projects = [
  {
    title: "基於LLaMA 3 模型結合消費者偏好生成個人化行銷文案生成模式",
    tags: ["LLM", "LLaMA 3", "NLP", "Marketing"],
    description:
      "以 LLaMA 3 結合消費者偏好資料，建立個人化產品行銷文案生成流程，並透過情感分析、關鍵字萃取與生成品質評估驗證研究成果。",
    highlights: [
      "目標: 建立結合消費者偏好的個人化產品行銷文案生成模式。",
      "方法: LLaMA 3、TextBlob、TextRank、K-Means、BLEU、METEOR",
      "應用: 個人化行銷文案生成、產品偏好分析、生成品質評估",
    ],
    href: "/file/畢業專題海報檔案.pdf",
    action: "View Poster",
  },
  {
    title: "LLaMA 3 個人化產品行銷文案網站",
    tags: ["JSP", "LLaMA 3", "TextRank", "K-Means", "HDBSCAN"],
    description:
      "整理為作品展示頁，呈現產品資訊分析、行銷文案語意偏好分析與 LLaMA 3 文案生成流程。",
    highlights: [
      "目標: 將原始 JSP 系統整理成可公開瀏覽的作品展示頁。",
      "方法: JSP Prototype、Next.js、TextRank、K-Means、HDBSCAN、LLaMA 3",
      "應用: 系統流程展示、研究成果視覺化、作品集網站呈現",
    ],
    href: "/llama-marketing-system",
    action: "View Website",
  },
  {
    title: "用電趨勢分析",
    tags: ["Data Analysis", "Python", "Visualization", "Energy Data"],
    description:
      "以用電資料為主題進行期末專題分析，整理資料並觀察用電變化趨勢，透過視覺化呈現不同時間區間的用電特徵與可能影響因素。",
    highlights: [
      "目標: 分析用電資料變化趨勢，觀察不同時間區間的用電特徵。",
      "方法: Python、Data Cleaning、Trend Analysis、Data Visualization",
      "應用: 能源資料分析、用電趨勢觀察、專題成果海報呈現",
    ],
    href: "/file/期末專題成果報告-用電趨勢分析海報.pdf",
    action: "View Poster",
  },
  {
    title: "Intent Classification & QA Generation",
    status: "ongoing",
    tags: ["Intent Classification", "QA Generation", "BERT", "Gemma"],
    description:
      "建立一套能理解使用者語意、判斷意圖類別，並生成對應 QA 回覆的智慧問答流程。",
    highlights: [
      "目標: 建立一套能理解使用者語意、判斷意圖類別，並生成對應 QA 回覆的智慧問答流程。",
      "方法: BERT-BiLSTM、Knowledge Distillation、Gemma 4",
      "應用: 客服語意理解、FAQ 自動生成、智慧問答系統",
    ],
  },
  {
    title: "4G 吃到飽 SEO 分析工具",
    tags: ["SEO", "SERP API", "Entity Analysis", "Google Sheets"],
    description:
      "開發 SEO Entity 分析工具，自動抓取 Google 搜尋前 10 名結果並分析頁面實體，將結果輸出至 Google Sheets，協助內容策略規劃。",
    highlights: [
      "目標: 建立能自動分析搜尋結果與競品內容結構的 SEO 工具。",
      "方法: SERP API、Entity Analysis、Google Sheets、Vercel、Supabase",
      "應用: SEO 內容策略、競品頁面分析、搜尋結果資料整理",
    ],
    href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app",
    action: "Live Demo",
  },
  {
    title: "IVE K-pop Fan Website",
    label: "Side Project-Frontend Practice",
    tags: ["Web Design", "JSP", "Tailwind CSS", "Frontend"],
    description:
      "製作 IVE 主題粉絲網站，規劃成員介紹、作品資訊與互動頁面，練習前端版面設計、資料呈現與使用者瀏覽體驗。",
    highlights: [
      "目標: 製作 IVE 主題粉絲網站，練習前端版面與內容呈現。",
      "方法: JSP、Tailwind CSS、Responsive Layout、Frontend Practice",
      "應用: 人物介紹頁、作品資訊展示、互動式粉絲網站",
    ],
    href: "/ive",
    action: "View Website",
  },
];

const featuredProjects = [
  {
    title: "LLaMA 3 個人化行銷文案系統",
    badge: "Featured Case Study",
    href: "/llama-marketing-system",
    action: "View Website",
    tags: ["LLaMA 3", "NLP", "TextRank", "K-Means", "HDBSCAN"],
    problem:
      "行銷文案生成不能只追求流暢文字，也需要理解產品特徵、消費者偏好與語意重點，才能讓 AI 產出更接近真實使用情境。",
    method:
      "以 LLaMA 3 作為生成核心，結合 TextRank 關鍵字擷取、K-Means / HDBSCAN 分群與文案語意分析，整理成可展示的網站流程。",
    outcome:
      "將研究流程轉成可瀏覽的 product prototype，讓使用者能理解資料處理、模型生成、文案檢視與研究成果之間的關係。",
    tech: ["LLaMA 3", "TextRank", "K-Means", "HDBSCAN", "Next.js"],
  },
  {
    title: "4G SEO Entity Analysis Tool",
    badge: "Live Demo",
    href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app",
    action: "Live Demo",
    tags: ["SEO Tool", "SERP API", "Entity Analysis", "Google Sheets"],
    problem:
      "SEO 內容策略需要快速理解搜尋結果中的競品頁面、實體關鍵詞與內容方向，手動整理會耗費大量時間。",
    method:
      "串接 SERP API 擷取 Google 搜尋結果，進行 entity analysis，並將整理後的結果輸出到 Google Sheets，形成可重複使用的分析流程。",
    outcome:
      "完成可線上操作的 Live Demo，證明能把資料擷取、資料處理與產品化介面串成實際可用的 AI workflow tool。",
    tech: ["SERP API", "Entity Analysis", "Google Sheets", "Vercel", "Supabase"],
  },
];

const supportingProjects = [
  {
    title: "Intent Classification & QA Generation",
    status: "Ongoing",
    tags: ["BERT-BiLSTM", "Gemma", "Intent QA", "Knowledge Distillation"],
    problem: "希望建立能理解使用者語意、判斷 intent，並產生 QA 回覆的智慧問答流程。",
    method: "使用 BERT-BiLSTM、Knowledge Distillation 與 Gemma 進行意圖分類與回答生成實作。",
    outcome: "目前作為 NLP / LLM 應用實驗，聚焦客服語意理解、FAQ 自動生成與 structured response generation。",
    tech: ["BERT-BiLSTM", "Gemma", "QA Generation"],
  },
  {
    title: "LLaMA 3 個人化行銷文案研究",
    href: "/file/畢業專題海報檔案.pdf",
    action: "View Poster",
    tags: ["Best Paper", "LLaMA 3", "BLEU", "METEOR"],
    problem: "研究如何讓 LLM 生成更符合消費者偏好與產品特徵的個人化行銷文案。",
    method: "以 LLaMA 3 生成文案，搭配 TextBlob、TextRank、K-Means、BLEU、METEOR 做分析與模型評估。",
    outcome: "完成研究海報與評估流程，並以此研究獲得 Best Paper 相關成果。",
    tech: ["LLaMA 3", "BLEU", "METEOR", "TextBlob"],
  },
  {
    title: "用電趨勢分析",
    href: "/file/期末專題成果報告-用電趨勢分析海報.pdf",
    action: "View Poster",
    tags: ["Data Analysis", "Python", "Visualization"],
    problem: "需要從用電資料中整理變化趨勢，觀察不同時間區間的用電特徵。",
    method: "使用 Python 進行 data cleaning、trend analysis 與 data visualization。",
    outcome: "完成專題成果海報，將資料處理流程轉化成可閱讀的分析結論。",
    tech: ["Python", "Data Cleaning", "Visualization"],
  },
  {
    title: "IVE K-pop Fan Website",
    href: "/ive",
    action: "View Website",
    tags: ["Frontend", "JSP", "Tailwind CSS"],
    problem: "以前端練習為目標，設計一個具備成員介紹與內容展示的主題網站。",
    method: "使用 JSP 與 Tailwind CSS 規劃響應式版面與內容呈現。",
    outcome: "完成可瀏覽的 fan website，作為 frontend layout 與內容組織練習。",
    tech: ["JSP", "Tailwind CSS", "Responsive Layout"],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none fixed inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-emerald-300/45 to-transparent" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070a0d]/86 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-6">
          <MobileMenu items={navItems} />

          <a
            href="#"
            className="min-w-0 flex-1 truncate text-center text-base font-bold md:flex-none md:text-left md:text-lg"
          >
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
          </a>

          <div className="h-10 w-10 shrink-0 md:hidden" aria-hidden="true" />

          <div className="hidden gap-7 text-base font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#070a0d] pt-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(245,158,11,0.1),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto grid min-h-[82dvh] max-w-7xl items-center gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Kevin Huang | AI Engineer / AI Product Associate
            </p>

            <h1 className="max-w-none text-4xl font-black leading-[1.05] text-white md:text-5xl lg:whitespace-nowrap xl:text-6xl">
              NLP / LLM AI Engineer
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Focused on NLP, LLM, Python, SQL, data processing, and AI workflow
              design, with projects that connect model experiments to usable AI
              tools.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Best Paper", "LLaMA 3", "BERT-BiLSTM", "SEO Tool", "Live Demo"].map(
                (item) => (
                  <span
                    key={item}
                    className="border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-100"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="rounded-lg border border-emerald-300/70 bg-emerald-300 px-6 py-3 text-center font-bold text-slate-950 shadow-[0_16px_36px_rgba(16,185,129,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-center font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white"
              >
                Contact Me
              </a>

              <a
                href="/file/Huang_Kai-Chun_AI_Engineer_Intern_Resume.pdf"
                className="rounded-lg border border-white/10 px-6 py-3 text-center font-bold text-slate-300 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur md:p-6">
            <div className="border-b border-white/10 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Focus stack
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {["NLP", "LLM", "Python", "SQL"].map((item) => (
                  <div key={item} className="bg-slate-950/50 px-4 py-3">
                    <p className="font-mono text-sm font-bold text-slate-100">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-5">
              {[
                ["Research", "LLaMA 3 marketing copy generation"],
                ["Modeling", "BERT-BiLSTM intent classification"],
                ["Product", "SEO entity analysis tool with live demo"],
                ["Workflow", "Data processing to deployable AI prototype"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 border-l border-emerald-300/40 pl-4"
                >
                  <p className="font-mono text-xs uppercase tracking-wide text-emerald-300">
                    {label}
                  </p>
                  <p className="text-sm leading-6 text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="mb-6 text-3xl font-bold">About Me</h2>

        <div className="border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur md:p-8">
          <div className="max-w-none">
            <p
              lang="zh-Hant"
              className="text-base leading-8 text-slate-300"
            >
            我具備資料分析、自然語言處理（NLP）與 LLM 應用相關的專題實作經驗，能從資料整理、模型訓練、流程規劃到結果評估參與完整 AI 專案流程。

在技術應用上，我熟悉 Python、SQL、R，並能使用 Pandas、NumPy 進行資料清理、轉換與分析；在模型應用上，曾使用 BERT、LLaMA 3、Gemma 4 等語言模型，應用於文字生成、意圖分類與問答生成等任務。

在專題實作過程中，我經常需要拆解問題、整理資料、規劃流程並與團隊溝通，因此培養了邏輯分析、問題拆解、主動學習與跨角色協作能力。未來希望持續深化生成式 AI 與軟體開發能力，將 AI 技術應用於實際問題解決與系統開發。
          </p>
          </div>
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="mb-6 text-3xl font-bold md:mb-8">Skills</h2>

        <div className="border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur md:p-8">
          {skills.map((skill) => (
            <article
              key={skill.category}
              className="border-b border-white/10 py-5 first:pt-0 last:border-b-0 last:pb-0 md:py-6"
            >
              <h3 className="text-lg font-bold md:text-xl">
                {skill.category}
              </h3>

              <p className="mt-3 max-w-5xl text-[15px] leading-7 text-slate-200 md:text-base md:leading-8">
                {skill.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 md:mt-5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="border border-emerald-300/15 bg-emerald-300/[0.07] px-2 py-1 font-mono text-[11px] font-semibold leading-5 text-emerald-50 md:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Featured case studies
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
          <p className="mt-4 leading-8 text-slate-300">
            以工程與產品作品集的角度重新整理，聚焦能證明研究、資料處理、
            模型方法與產品展示能力的 AI 專案；從 {projects.length} 個作品中
            選出代表案例放大呈現。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => {
            const isExternal = project.href.startsWith("http");

            return (
              <a
                key={project.title}
                href={project.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col border border-white/10 bg-white/[0.055] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.075] md:p-7"
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      {project.badge}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-100">
                    {project.action}
                  </span>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 bg-slate-950/45 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid gap-4">
                  {[
                    ["Problem", project.problem],
                    ["Method", project.method],
                    ["Outcome", project.outcome],
                    ["Tech", project.tech.join(" / ")],
                  ].map(([label, value]) => (
                    <div key={label} className="border-l border-emerald-300/35 pl-4">
                      <p className="font-mono text-xs font-semibold uppercase tracking-wide text-emerald-300">
                        {label}
                      </p>
                      <p className="mt-1 text-[15px] leading-7 text-slate-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {supportingProjects.map((project) => {
            const isExternal = project.href?.startsWith("http");
            const CardTag = project.href ? "a" : "article";

            return (
              <CardTag
                key={project.title}
                href={project.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.065] md:p-6"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-7 text-white md:text-xl">
                    {project.title}
                  </h3>
                  {project.status ? (
                    <span className="border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1 text-xs font-semibold text-emerald-100">
                      {project.status}
                    </span>
                  ) : null}
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 bg-slate-950/45 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 text-sm leading-6 text-slate-300">
                  <p>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wide text-emerald-300">
                      Problem
                    </span>{" "}
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wide text-emerald-300">
                      Method
                    </span>{" "}
                    {project.method}
                  </p>
                  <p>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wide text-emerald-300">
                      Outcome
                    </span>{" "}
                    {project.outcome}
                  </p>
                </div>

                {project.action ? (
                  <div className="mt-6 inline-flex w-fit items-center justify-center border border-emerald-300/35 bg-emerald-300/[0.08] px-4 py-2 text-sm font-bold text-emerald-100 transition group-hover:border-emerald-300/60 group-hover:bg-emerald-300/[0.14]">
                    {project.action}
                  </div>
                ) : null}
              </CardTag>
            );
          })}
        </div>
      </section>

      <section id="research" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Research & Publications</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            研究成果聚焦於大型語言模型、自然語言處理與智慧文字生成，包含學術研討會發表與最佳論文獎紀錄。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {researchPublications.map((publication) => (
            <Link
              key={publication.title}
              href={publication.href}
              className="group flex h-full flex-col border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70 md:p-6"
            >
              <div className="mb-5 flex flex-col items-start gap-3">
                <span className="w-fit border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 text-sm font-medium text-emerald-200">
                  {publication.badge}
                </span>
                <h3 className="text-lg font-semibold leading-7 md:text-xl md:leading-8">
                  {publication.title}
                </h3>
              </div>

              <dl className="space-y-4">
                {publication.details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      {detail.label}
                    </dt>
                    <dd className="mt-1 text-[15px] leading-7 text-slate-200 md:text-base">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mb-6 mt-6 flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
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
      </section>

      <section id="experience" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="mb-8 text-3xl font-bold">Experience</h2>

        <h3 className="mb-5 text-2xl font-semibold">
          Academic & Work Experience
        </h3>
        <div className="grid gap-6">
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
                className="group flex h-full flex-col border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70 md:p-6"
              >
                {content}
              </Link>
            ) : (
              <article
                key={experience.title}
                className="border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur md:p-6"
              >
                {content}
              </article>
            );
          })}
        </div>

        <h3 className="mb-5 mt-12 text-2xl font-semibold">
          Student Association
        </h3>
        <div className="grid gap-6">
          {highlights
            .filter((highlight) => highlight.href === "/student-association")
            .map((highlight) => (
              <Link
                key={highlight.title}
                href={highlight.href}
                className="group flex h-full flex-col border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70 md:p-6"
              >
                <div className="mb-4 flex flex-col items-start gap-3">
                  <h3 className="text-lg font-semibold leading-7 md:text-xl md:leading-8">
                    {highlight.title}
                  </h3>
                  <span className="w-fit border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 text-sm text-emerald-200">
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
      </section>

      <section id="certificates" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="mb-8 text-3xl font-bold">Certificates</h2>

        <CertificateGrid certificates={certificates} />
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="mb-6 text-3xl font-bold">Let&apos;s Connect</h2>

        <div className="border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur md:p-8">
          <p className="text-lg leading-8 text-slate-200">
            我目前正在尋找 AI、資料分析、NLP、LLM
            應用相關的實習、專題合作與研究機會。如果你對我的作品、研究或技術背景有興趣，歡迎透過
            Email 或 GitHub 與我聯繫。
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:kevin80609@gmail.com"
              className="w-full rounded-lg border border-emerald-300/70 bg-emerald-300 px-6 py-3 text-center font-bold text-slate-950 shadow-[0_16px_36px_rgba(16,185,129,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-200 sm:w-auto"
            >
              Email Me
            </a>

            <a
              href="https://github.com/brian-kai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-center font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white sm:w-auto"
            >
              GitHub
            </a>

            <a
              href="/file/Huang_Kai-Chun_AI_Engineer_Intern_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-center font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white sm:w-auto"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <a
        href="#"
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/40 bg-[#070a0d]/86 text-xl font-bold text-emerald-200 shadow-lg shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-200 hover:text-white md:bottom-6 md:right-6 md:h-12 md:w-12 md:text-2xl"
      >
        ↑
      </a>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Kevin Huang | Kai-Chun Huang. All rights reserved.
      </footer>
    </main>
  );
}
