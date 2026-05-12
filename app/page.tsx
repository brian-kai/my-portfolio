import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./mobile-menu";
import aiatclCertificate from "./image/AIATCL.jpg";
import aiCertificate from "./image/AI證照.png";
import googleCertificate from "./image/GOOGLE證照.png";

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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_14%_22%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(139,92,246,0.24),transparent_34%),linear-gradient(135deg,#020617_0%,#071329_45%,#111827_100%)] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none fixed inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-6">
          <MobileMenu items={navItems} />

          <a
            href="#"
            className="min-w-0 flex-1 truncate text-center text-base font-bold md:flex-none md:text-left md:text-lg"
          >
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | 黃凱浚 Kai-Chun Huang</span>
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

      <section className="relative border-b border-white/10 pt-16">
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Kevin Huang｜黃凱浚 Kai-Chun Huang
          </p>
          <h1 className="max-w-6xl text-3xl font-black leading-tight text-white drop-shadow-[0_0_28px_rgba(56,189,248,0.28)] md:text-5xl">
            AI / NLP / Data Analysis Portfolio
          </h1>

          <p className="mt-6 max-w-6xl text-lg leading-8 text-slate-200 md:hidden">
            我是黃凱浚，專注於資料分析、自然語言處理與 LLM
            應用。曾以 LLaMA 3
            個人化行銷文案生成研究獲得最佳論文獎，並持續開發意圖分類、問答生成與
            SEO 分析工具。
          </p>

          <p className="mt-6 hidden max-w-6xl text-lg leading-8 text-slate-200 md:block">
            我是黃凱浚，逢甲大學工業工程與系統管理學系學生，具備資料分析、自然語言處理與 LLM 應用實作經驗。

我曾以 LLaMA 3 結合消費者偏好進行個人化行銷文案生成研究，並獲得 2025 中國工業工程學會年會暨學術研討會大數據技術與應用領域最佳論文獎。現階段持續朝 AI 應用工程與生成式 AI 系統開發方向發展。
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-600"
            >
              View Projects
            </a>

            <a
              href="/file/新版履歷_英文.pdf"
              className="rounded-xl border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:border-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="mb-6 text-3xl font-bold">About Me</h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="leading-8 text-slate-300">
            我具備資料分析、自然語言處理（NLP）與 LLM 應用相關的專題實作經驗，並持續朝AI應用與系統開發領域發展。熟悉 Python、SQL、R，能使用 Pandas、NumPy 進行資料清理、轉換與分析；也曾使用 BERT、LLaMA 3、Gemma 4 等語言模型，應用於文字生成、意圖分類、個人化行銷文案與問答生成等任務。

在專題實作中，我參與資料整理、模型訓練、流程規劃與結果評估，並透過團隊合作培養問題拆解、邏輯分析、主動學習與跨角色溝通能力。未來希望持續深化生成式 AI 與軟體開發能力，將 AI 技術應用於實際問題解決與系統開發。
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="mb-6 text-3xl font-bold md:mb-8">Skills</h2>

        <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 md:p-8">
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
                    className="rounded bg-white/10 px-2 py-1 font-mono text-[11px] font-semibold leading-5 text-white md:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const isExternal = project.href?.startsWith("http");
            const CardTag = project.href ? "a" : "article";

            return (
              <CardTag
                key={project.title}
                href={project.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10 md:p-6"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-7 md:text-xl">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap justify-end gap-2">
                    {!project.href ? (
                      <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                        {project.status ?? "Ongoing"}
                      </span>
                    ) : null}
                    {project.label ? (
                      <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                        {project.label}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mb-5 text-[15px] leading-7 text-slate-300 md:text-base">
                  {project.description}
                </p>

                <ul className="space-y-2 text-sm text-slate-400">
                  {project.highlights.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>

                {project.href ? (
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition hover:text-purple-200">
                    {project.action}
                    <span aria-hidden="true">-&gt;</span>
                  </div>
                ) : null}
              </CardTag>
            );
          })}
        </div>
      </section>

      <section id="research" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
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
              className="group block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 md:p-6"
            >
              <div className="mb-5 flex flex-col items-start gap-3">
                <span className="w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
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

              <div className="mt-6 flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                View Details
                <span aria-hidden="true">-&gt;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
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

                  <span className="w-fit rounded-full bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                    {experience.badge}
                  </span>
                </div>

                <p className="text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">
                  {experience.description}
                </p>

                {experience.href ? (
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                    {experience.action}
                    <span aria-hidden="true">-&gt;</span>
                  </div>
                ) : null}
              </>
            );

            return experience.href ? (
              <Link
                key={experience.title}
                href={experience.href}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 md:p-6"
              >
                {content}
              </Link>
            ) : (
              <article
                key={experience.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
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
                className="group block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 md:p-6"
              >
                <div className="mb-4 flex flex-col items-start gap-3">
                  <h3 className="text-lg font-semibold leading-7 md:text-xl md:leading-8">
                    {highlight.title}
                  </h3>
                  <span className="w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    {highlight.badge}
                  </span>
                </div>

                <p className="text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">
                  {highlight.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {highlight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                  View Details
                  <span aria-hidden="true">-&gt;</span>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <section id="certificates" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="mb-8 text-3xl font-bold">Certificates</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((certificate, index) => (
            <a
              key={certificate.title}
              href={certificate.href ?? certificate.image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              <div className="h-52 overflow-hidden border-b border-white/10 bg-slate-950/40 p-3 md:h-auto">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-full w-full rounded-xl object-cover object-top md:aspect-[4/3] md:h-auto"
                  priority={index === 0}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="p-4 md:p-6">
                <p className="text-sm font-medium text-cyan-300">
                  {certificate.issuer}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-7 md:text-xl md:leading-8">
                  {certificate.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200 md:mt-5">
                  View Certificate
                  <span aria-hidden="true">-&gt;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="mb-6 text-3xl font-bold">Let&apos;s Connect</h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-lg leading-8 text-slate-200">
            我目前正在尋找 AI、資料分析、NLP、LLM
            應用相關的實習、專題合作與研究機會。如果你對我的作品、研究或技術背景有興趣，歡迎透過
            Email 或 GitHub 與我聯繫。
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:kevin80609@gmail.com"
              className="w-full rounded-xl bg-blue-500 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-600 sm:w-auto"
            >
              Email Me
            </a>

            <a
              href="https://github.com/brian-kai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:border-white sm:w-auto"
            >
              GitHub
            </a>

            <a
              href="/file/新版履歷_英文.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:border-white sm:w-auto"
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
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950/80 text-xl font-bold text-cyan-200 shadow-lg shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200 hover:text-white md:bottom-6 md:right-6 md:h-12 md:w-12 md:text-2xl"
      >
        ↑
      </a>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Kevin Huang｜黃凱浚 Kai-Chun Huang. All rights reserved.
      </footer>
    </main>
  );
}
