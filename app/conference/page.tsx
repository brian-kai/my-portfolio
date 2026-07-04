import Link from "next/link";
import ActiveSectionNav from "../active-section-nav";
import ImageLightboxGallery from "../image-lightbox-gallery";
import presentationPhotoOne from "../image/67C8471D-8089-417B-B3A5-A69F0B04C706.jpg";
import presentationPhotoTwo from "../image/B1EE1CB0-4CD0-4963-9E2C-D2FFDC5E463C.jpg";
import graduateProjectAward from "../image/graduate-project-award.png";
import industrialEngineeringCompetitionAward from "./industrial-engineering-competition-award-2026.png";
import orCompetitionAward from "./or-competition-award-2026.png";
import orCompetitionAwardCeremony from "./or-competition-award-ceremony-2026.jpg";
import bestPaperCertificate from "./2025-11-29-[CIIE2025最佳論文獎]基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式.png";
import presentationCertificate from "./2025-11-29-[CIIE2025發表證明]基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式.png";

const presentationPhotos = [
  {
    title: "研究成果發表現場",
    description: "於簡報中說明研究流程、資料分析方法與個人化文案生成結果。",
    image: presentationPhotoOne,
    alt: "2025 中國工業工程學會年會上台報告照片一",
  },
  {
    title: "口頭簡報與答詢",
    description: "針對 LLaMA 3 結合消費者偏好的研究設計進行口頭發表。",
    image: presentationPhotoTwo,
    alt: "2025 中國工業工程學會年會上台報告照片二",
  },
];

const conferenceNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Presentation Photos", href: "#presentation-photos" },
  { label: "Recognition", href: "#recognition" },
];

const certificates = [
  {
    title: "CIIE 2025 最佳論文獎",
    event: "基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式",
    image: bestPaperCertificate,
  },
  {
    title: "CIIE 2025 發表證明",
    event: "基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式",
    image: presentationCertificate,
  },
];

const awardEvidence = [
  {
    title: "工工競賽第一名獎狀",
    description:
      "2026 年全國工業工程與管理大學生專題論文與技術報告競賽服務系統與科技管理組第一名。",
    image: industrialEngineeringCompetitionAward,
    alt: "2026 全國工業工程與管理大學生專題論文與技術報告競賽第一名獎狀",
    originalHref: "/file/industrial-engineering-competition-award-2026.pdf",
  },
  {
    title: "OR 競賽獎狀",
    description: "基於LLaMA 3 個人化行銷文案研究題目於2026作業研究學會-大專生競賽獲獎證明。",
    image: orCompetitionAward,
  },
  {
    title: "畢業專題獎狀",
    description:
      "畢業專題成果的正式獎狀證明，與研究成果、專題競賽和發表紀錄放在同一脈絡中呈現。",
    image: graduateProjectAward,
    alt: "畢業專題獎狀",
  },
];

const awardCeremonyPhotos = [
  {
    title: "2026 作業研究專題競賽頒獎典禮",
    description:
      "於 2026 臺灣作業研究學會大專校院專題競賽中，獲得人工智慧與大數據分析組第三名。",
    image: orCompetitionAwardCeremony,
    alt: "2026 作業研究專題競賽第三名頒獎照片",
    details: [
      {
        label: "競賽組別",
        value: "人工智慧與大數據分析組",
      },
      {
        label: "獲獎名次",
        value: "第三名",
        highlight: true,
      },
      {
        label: "主辦單位",
        value: "臺灣作業研究學會",
      },
    ],
  },
];

const recognitionItems = [
  {
    title: "最佳論文獎",
    description: "基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式。",
    image: certificates[0].image,
  },
  {
    title: "研討會發表證明",
    description: "基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式。",
    image: certificates[1].image,
  },
  ...awardEvidence,
];

const researchOverview = {
  title: "基於 LLaMA 3 模型結合消費者偏好生成個人化行銷文案生成模式",
  tags: ["LLM", "LLaMA 3", "NLP", "Marketing"],
  motivation:
    "隨著數位平台之普及，傳統行銷文案常因內容制式、與消費者需求關聯性不足而降低購買意圖。因此，本研究選擇 LLaMA 3 結合消費者偏好生成個人化產品行銷文案，包含消費者偏好分析、語意分析與個人化行銷文案生成三大模組，並透過系統進行案例驗證，以評估其實用性與可行性。",
  goals: [
    {
      title: "消費者偏好分析",
      description:
        "透過解析消費者評論，分析評論中的消費者需求與偏好資訊，作為生成個人化行銷文案之基礎。",
    },
    {
      title: "語意與情感特徵整合",
      description:
        "針對行銷文案與消費者評論進行語意特徵分析，擷取並整合語意和情感線索，使生成文案更能貼近目標受眾。",
    },
    {
      title: "個人化行銷文案生成",
      description:
        "根據消費者偏好分析結果，結合語意與情感特徵，透過 LLaMA 3 生成更具吸引力的個人化行銷文案。",
    },
  ],
  result:
    "研究建構一套基於 LLaMA 3 模型的個人化產品行銷文案生成方法，並整合 TextBlob、TextRank、LDA、SBERT 與 K-Means 等方法擷取消費者情感特徵、產品主題與銷售文案語意特徵。實驗結果顯示，本研究方法不僅能有效完成消費者偏好分析與文案生成，亦能改善傳統行銷文案模板化生成方式之侷限。",
  metrics: "BLEU-3 為 18.92、BLEU-4 為 14.44、METEOR 為 0.2362",
  posterHref: "/file/畢業專題海報檔案.pdf",
};

export default function ConferencePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-4 md:justify-between md:px-6">
          <Link
            href="/#research"
            className="absolute left-4 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white md:hidden"
          >
            Back to Research
          </Link>

          <Link href="/#research" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | Kai-Chun Huang
            </span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={conferenceNavItems} />
            <Link
              href="/#research"
              className="rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white"
            >
              Back to Research
            </Link>
          </div>
        </div>
      </nav>

      <section id="overview" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-12 pt-28 md:scroll-mt-28 md:pb-16 md:pt-32">
        <p className="mb-4 inline-flex border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-sm font-semibold text-emerald-200">
          Conference
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          研討會發表與獲獎證明
        </h1>

        <p className="mt-5 max-w-3xl leading-8 text-slate-300">
          CIIE 2025 研討會發表與獲獎紀錄，包含論文發表證明、最佳論文獎，以及 2026 全國工業工程與管理大學生專題論文與技術報告競賽第一名證明。
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <article
          lang="zh-Hant"
          className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_20px_70px_rgba(8,47,73,0.32)] md:p-8"
        >
          <div className="max-w-5xl">
            <h2 className="text-2xl font-black leading-tight text-white md:text-3xl">
              {researchOverview.title}
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {researchOverview.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-300/[0.08] px-3 py-1 text-xs font-semibold text-emerald-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <section>
              <h3 className="border-b border-emerald-300/45 pb-3 text-lg font-bold text-emerald-100 md:text-xl">
                研究動機
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-200 md:text-base">
                {researchOverview.motivation}
              </p>
            </section>

            <section>
              <h3 className="border-b border-emerald-300/45 pb-3 text-lg font-bold text-emerald-100 md:text-xl">
                研究目的
              </h3>
              <ol className="mt-4 space-y-4 text-[15px] leading-8 text-slate-200 md:text-base">
                {researchOverview.goals.map((goal, index) => (
                  <li key={goal.title} className="flex gap-3">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-300/[0.12] text-sm font-bold text-emerald-200">
                      {index + 1}
                    </span>
                    <span>
                      <strong className="text-white">{goal.title}：</strong>
                      {goal.description}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <section className="mt-8">
            <h3 className="border-b border-emerald-300/45 pb-3 text-lg font-bold text-emerald-100 md:text-xl">
              研究成果
            </h3>
            <p className="mt-4 text-[15px] leading-8 text-slate-200 md:text-base">
              {researchOverview.result}
              <span className="font-semibold text-rose-200">
                {" "}
                其中 {researchOverview.metrics}。
              </span>
            </p>
          </section>

          <div className="mt-8">
            <a
              href={researchOverview.posterHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-emerald-300/60 bg-emerald-300/[0.12] px-6 py-3 text-center font-bold text-emerald-50 shadow-[0_16px_36px_rgba(16,185,129,0.14)] transition hover:-translate-y-0.5 hover:border-emerald-300/70 hover:bg-emerald-300/[0.16] hover:text-white sm:w-auto"
            >
              View Poster
            </a>
          </div>
        </article>
      </section>

      <section id="presentation-photos" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 md:scroll-mt-28 md:pb-20">
        <div className="mb-6">
          <h2 className="text-2xl font-bold md:text-3xl">上台報告照片</h2>
          <p className="mt-3 max-w-5xl leading-8 text-slate-300">
            於 2025 中國工業工程學會年會暨學術研討會進行口頭發表，分享 LLaMA 3 結合消費者偏好的行銷文案生成研究。
          </p>
        </div>

        <ImageLightboxGallery
          items={presentationPhotos}
          actionLabel="View Photo"
          cardClassName="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] text-left transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
          gridClassName="grid gap-6 md:grid-cols-2"
          imageClassName="aspect-[4/3] w-full object-cover object-center brightness-[0.94] saturate-[0.92] contrast-[1.06] transition duration-300 group-hover:scale-[1.02] group-hover:brightness-100"
          imageSizes="(min-width: 768px) 50vw, 100vw"
          showDescription
          showTitle
          titleClassName="text-base font-bold text-white md:text-lg"
          variant="emerald"
        />
      </section>

      <section id="recognition" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 pb-16 md:scroll-mt-28">
        <div className="mb-6">
          <h2 className="text-2xl font-bold md:text-3xl">獎項與發表證明</h2>
        </div>

        <div className="mb-8">
          <ImageLightboxGallery
            items={awardCeremonyPhotos}
            actionLabel="View Award Photo"
            cardClassName="group grid overflow-hidden rounded-2xl border border-emerald-300/20 bg-white/[0.06] text-left shadow-[0_24px_80px_rgba(16,185,129,0.14)] transition hover:-translate-y-1 hover:border-emerald-300/45 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-emerald-300/70 lg:grid-cols-[1.35fr_0.65fr]"
            gridClassName="grid"
            imageClassName="aspect-[16/9] h-full w-full object-cover object-[52%_48%] transition duration-300 group-hover:scale-[1.015]"
            imageSizes="(min-width: 1024px) 62vw, 100vw"
            imageWrapperClassName="overflow-hidden bg-slate-950/80"
            showDescription
            showTitle
            titleClassName="text-xl font-black leading-tight text-white md:text-2xl"
            variant="emerald"
          />
        </div>

        <ImageLightboxGallery
          items={recognitionItems}
          cardClassName="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
          gridClassName="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          imageClassName="h-full w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.01]"
          imageSizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
          imageWrapperClassName="flex h-[390px] items-center justify-center border-b border-white/10 bg-slate-900/80 p-2 md:h-[520px]"
          showDescription
          showTitle
          titleClassName="text-base font-semibold text-white md:text-lg"
          variant="emerald"
        />
      </section>
    </main>
  );
}
