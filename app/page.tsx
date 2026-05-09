import Image from "next/image";
import Link from "next/link";

import aiatclCertificate from "./image/AIATCL.jpg";
import aiCertificate from "./image/AI證照.png";
import googleCertificate from "./image/GOOGLE證照.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
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
    meta: "以 LLaMA 3 模型與 Myers 演算法進行程式碼版本差異註解生成模式",
    badge: "Research Assistant",
    description:
      "協助研究流程規劃、程式碼版本差異資料整理與模型應用，支援以 LLaMA 3 產生程式碼變更註解的研究工作。",
  },
  {
    title: "逢甲大學課程助教",
    meta: "資料庫設計、決策與數據分析｜113-2、114-1、114-2 學期",
    badge: "Teaching Assistant",
    description:
      "協助課程教學、作業討論與學生問題釐清，內容涵蓋資料庫設計、SQL 操作、資料整理、分析流程與決策應用。",
  },
  {
    title: "國中補習班理化助教",
    meta: "課堂協助、課業輔導與概念講解",
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

const projects = [
  {
    title: "LLaMA 3 個人化行銷文案生成系統",
    tags: ["LLM", "LLaMA 3", "NLP", "Marketing"],
    description:
      "以 LLaMA 3 結合消費者偏好資料，建立個人化產品行銷文案生成流程，並透過情感分析、關鍵字萃取與生成品質評估驗證研究成果。",
    highlights: [
      "應用 TextBlob、TextRank 與 K-Means 建立資料分析流程",
      "以 BLEU、METEOR 與人工評估檢驗文案品質",
      "獲 2025 中國工業工程學會年會最佳論文獎",
    ],
    href: "/file/畢業專題海報檔案.pdf",
    action: "View Poster",
  },
  {
    title: "用電趨勢分析",
    tags: ["Data Analysis", "Python", "Visualization", "Energy Data"],
    description:
      "以用電資料為主題進行期末專題分析，整理資料並觀察用電變化趨勢，透過視覺化呈現不同時間區間的用電特徵與可能影響因素。",
    highlights: [
      "進行用電資料清理、整理與趨勢分析",
      "透過圖表視覺化呈現用電變化",
      "製作專題成果海報彙整分析流程與發現",
    ],
    href: "/file/期末專題成果報告-用電趨勢分析海報.pdf",
    action: "View Poster",
  },
  {
    title: "Intent Classification & QA Generation",
    tags: ["Intent Classification", "QA Generation", "BERT", "Gemma"],
    description:
      "建立文字意圖分類與問答生成流程，結合 BERT-BiLSTM、Knowledge Distillation 與 Gemma 模型，應用於客服語意理解與 QA 生成情境。",
    highlights: [
      "使用 BERT-BiLSTM 進行意圖分類",
      "導入 Teacher-Student Knowledge Distillation",
      "使用 Gemma 進行 QA Generation",
    ],
  },
  {
    title: "4G 吃到飽 SEO 分析工具",
    tags: ["SEO", "SERP API", "Entity Analysis", "Google Sheets"],
    description:
      "開發 SEO Entity 分析工具，自動抓取 Google 搜尋前 10 名結果並分析頁面實體，將結果輸出至 Google Sheets，協助內容策略規劃。",
    highlights: [
      "串接 SERP API 擷取搜尋結果",
      "分析競品頁面 Entity 與內容結構",
      "部署於 Vercel 並整合 Supabase",
    ],
    href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app",
    action: "Live Demo",
  },
  {
    title: "IVE K-pop Fan Website",
    tags: ["Web Design", "JSP", "Tailwind CSS", "Frontend"],
    description:
      "製作 IVE 主題粉絲網站，規劃成員介紹、作品資訊與互動頁面，練習前端版面設計、資料呈現與使用者瀏覽體驗。",
    highlights: [
      "使用 JSP 建立網站頁面",
      "使用 Tailwind CSS 設計響應式介面",
      "整理偶像團體資訊並規劃內容架構",
    ],
    href: "/ive",
    action: "View Website",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_14%_22%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(139,92,246,0.24),transparent_34%),linear-gradient(135deg,#020617_0%,#071329_45%,#111827_100%)] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none fixed inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4 md:justify-between">
          <a href="#" className="text-lg font-bold">
            Kevin Huang | 黃凱浚 Kai-Chun Huang
          </a>

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
          <h1 className="max-w-5xl text-4xl font-black leading-tight text-white drop-shadow-[0_0_28px_rgba(56,189,248,0.28)] md:text-6xl">
            AI / NLP / Data Analysis Portfolio
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200">
            我是黃凱浚，就讀於逢甲大學工業工程與系統管理學系，擅長資料分析、自然語言處理與
            LLM 應用。畢業專題以 LLaMA 3
            結合消費者偏好進行個人化行銷文案生成研究，並於 2025
            中國工業工程學會年會暨學術研討會發表，榮獲大數據技術與應用領域最佳論文獎。
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              View Projects
            </a>

            <a
              href="/file/新版履歷_英文網站.pdf"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold">About Me</h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="space-y-6 leading-8 text-slate-300">
            <p>
              我具備資料分析、自然語言處理（NLP）與 LLM
              應用相關的專題實作經驗，並持續朝人工智慧應用領域發展。
            </p>

            <p>
              在技術工具方面，我熟悉 Python、SQL、R
              等資料處理工具，能使用 Pandas、NumPy
              進行資料清理、轉換與分析。在模型應用上，我曾使用
              BERT、LLaMA、Gemma
              等語言模型，並應用於文字生成、意圖分類與問答生成等專題中。
            </p>

            <p>
              在專題與團隊合作過程中，我經常需要拆解問題、整理資料、規劃流程並與團隊溝通，因此培養了邏輯分析、問題拆解、主動學習與跨角色協作能力。未來希望持續學習軟體開發與生成式
              AI 應用，並將這些能力運用在實際問題解決與系統開發中。
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>

        <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 md:p-8">
          {skills.map((skill) => (
            <article
              key={skill.category}
              className="border-b border-white/10 py-6 first:pt-0 last:border-b-0 last:pb-0"
            >
              <h3 className="text-xl font-bold">{skill.category}</h3>

              <p className="mt-3 max-w-5xl leading-8 text-slate-200">
                {skill.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-white/10 px-2 py-1 font-mono text-xs font-semibold text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="certificates" className="mx-auto max-w-6xl px-6 py-20">
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
              <div className="border-b border-white/10 bg-slate-950/40 p-3">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="aspect-[4/3] w-full rounded-xl object-cover object-top"
                  priority={index === 0}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-cyan-300">
                  {certificate.issuer}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-8">
                  {certificate.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                  View Certificate
                  <span aria-hidden="true">-&gt;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Experience</h2>

        <h3 className="mb-5 text-2xl font-semibold">工作經驗</h3>
        <div className="grid gap-6">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-slate-400">{experience.meta}</p>
                </div>

                <span className="w-fit rounded-full bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                  {experience.badge}
                </span>
              </div>

              <p className="leading-8 text-slate-300">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

        <h3 className="mb-5 mt-12 text-2xl font-semibold">系學會</h3>
        <div className="grid gap-6">
          {highlights
            .filter((highlight) => highlight.href === "/student-association")
            .map((highlight) => (
              <Link
                key={highlight.title}
                href={highlight.href}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
              >
                <div className="mb-4 flex flex-col items-start gap-3">
                  <h3 className="text-xl font-semibold leading-8">
                    {highlight.title}
                  </h3>
                  <span className="w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    {highlight.badge}
                  </span>
                </div>

                <p className="leading-8 text-slate-300">
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

        <h3 className="mb-5 mt-12 text-2xl font-semibold">研討會</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {highlights
            .filter((highlight) => highlight.href !== "/student-association")
            .map((highlight) => (
            <Link
              key={highlight.title}
              href={highlight.href}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              <div className="mb-4 flex flex-col items-start gap-3">
                <h3 className="text-xl font-semibold leading-8">
                  {highlight.title}
                </h3>
                <span className="w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  {highlight.badge}
                </span>
              </div>

              <p className="leading-8 text-slate-300">
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

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
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
                className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {!project.href ? (
                    <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200">
                      Ongoing
                    </span>
                  ) : null}
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

                <p className="mb-5 leading-7 text-slate-300">
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

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="hidden">
            歡迎透過 Email 與我聯繫，討論實習、專題合作或 AI
            應用相關機會。
          </p>

          <p className="mb-4 text-slate-300">
            歡迎透過 Email 與我聯繫，也可以查看我的 GitHub 與履歷。
          </p>

          <div className="space-y-2 text-slate-300">
            <p>
              Email:{" "}
              <a
                href="mailto:kevin80609@gmail.com"
                className="text-blue-400 hover:underline"
              >
                kevin80609@gmail.com
              </a>
            </p>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/brian-kai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/brian-kai
              </a>
            </p>

            <p>
              Resume PDF:{" "}
              <a
                href="/file/新版履歷_英文網站.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </section>

      <a
        href="#"
        aria-label="Back to top"
        title="Back to top"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950/80 text-2xl font-bold text-cyan-200 shadow-lg shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200 hover:text-white"
      >
        ↑
      </a>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Kevin Huang｜黃凱浚 Kai-Chun Huang. All rights reserved.
      </footer>
    </main>
  );
}
