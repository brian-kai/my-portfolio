import type { Metadata } from "next";
import Link from "next/link";
import { additionalAcademicExperiences, projectLeadership } from "../academic-experiences";
import ActiveSectionNav from "../active-section-nav";
import { honorSharing } from "../resume-highlights";
import ImageLightboxGallery from "../image-lightbox-gallery";
import LightboxImage from "../lightbox-image";

import honorStudentCertificate from "../image/honor-student-certificate.png";
import honorStudentPortrait from "../image/honor-student-portrait.jpg";
import honorStudentPortraitAlt from "../image/honor-student-portrait-alt.jpg";

const photos = [
  {
    title: "Recognition Portrait",
    image: honorStudentPortrait,
    alt: "Kai-Chun Huang wearing honor student graduation regalia",
  },
  {
    title: "Graduation Honor Record",
    image: honorStudentPortraitAlt,
    alt: "Kai-Chun Huang in honor student regalia posing for a portrait",
  },
];

const proofChips = [
  "115 級榮譽學生",
  "Feng Chia University",
  "Academic / Service / Leadership",
];

const details = [
  {
    label: "Academic & Research",
    value: "以專題領導、研究發表與國際研討會摘要錄取，呈現研究規劃與模型實作經驗。",
    evidence: [
      "CIIE 2025 最佳論文獎",
      "ICCCM 2026 Accepted for Presentation",
      "畢業專題組長：進度規劃、組員分工與每週兩次進度報告",
    ],
  },
  {
    label: "Cross-domain Practice",
    value: "將資料分析、AI 工具與實務問題連結，完成資料整理到成果呈現。",
    evidence: [
      "Google Data Analytics：資料清理、SQL 查詢、R 語言與視覺化",
      "工業感測與聯網實作：用電趨勢分析專題",
      "2020–2023 年每日用電資料分析、異常檢測與模型建構",
    ],
  },
  {
    label: "Leadership & Service",
    value: "透過助教、研究助理與系學會活動經驗，呈現溝通協作與公共服務投入。",
    evidence: [
      "資料庫設計課程助教",
      "研究計畫助理：研究資料整理、經費報帳與核銷",
      "系學會活動組長",
    ],
  },
];

const honorNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Evidence", href: "#evidence" },
  { label: "Experience", href: "#academic-experience" },
  { label: "Photos", href: "#photos" },
];

export const metadata: Metadata = {
  title: "校級榮譽學生入選",
  description:
    "逢甲大學 115 級榮譽學生入選紀錄，整理研究計畫、預研生、跨域學習、專題領導與教學服務經驗，以及官方證書與照片。",
};

export default function HonorStudentPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#080705] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(245,158,11,0.15),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(250,204,21,0.075),transparent_24%),radial-gradient(circle_at_72%_64%,rgba(16,185,129,0.07),transparent_30%),linear-gradient(180deg,#080705_0%,#0d0b08_48%,#080705_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(251,191,36,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <nav className="z-nav fixed inset-x-0 top-0 border-b border-amber-100/10 bg-[#080705]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/#experience"
            className="shrink-0 rounded-lg border border-amber-100/15 bg-amber-100/[0.06] px-4 py-2 text-sm font-bold text-stone-100 transition hover:-translate-y-0.5 hover:border-amber-200/60 hover:bg-amber-100/[0.1] hover:text-white md:hidden"
          >
            ← Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | Kai-Chun Huang
            </span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={honorNavItems} variant="amber" />
            <Link
              href="/#experience"
              className="rounded-lg border border-amber-100/15 bg-amber-100/[0.06] px-4 py-2 text-sm font-bold text-stone-100 transition hover:-translate-y-0.5 hover:border-amber-200/60 hover:bg-amber-100/[0.1] hover:text-white"
            >
              Back to Honors
            </Link>
          </div>
        </div>
      </nav>

      <section id="overview" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 pb-12 pt-28 md:scroll-mt-28 md:pb-16 md:pt-32">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
          Honors & Recognition
        </p>

        <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
          校級榮譽學生入選
        </h1>

        <p className="mt-5 max-w-6xl text-base leading-7 text-slate-300 [text-wrap:pretty] md:text-lg md:leading-8">
          獲選逢甲大學 115 級榮譽學生。申請事蹟涵蓋競賽獲獎與學術成就、跨域學習、公共服務與領導表現，呈現大學階段的研究、實作與服務經驗。
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {proofChips.map((chip) => (
            <span
              key={chip}
              className="border border-amber-200/25 bg-amber-200/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-100"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section id="evidence" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 pb-16 md:scroll-mt-28 md:pb-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">申請事蹟與官方證明</h2>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)]">
          <div className="grid gap-4">
            {details.map((detail) => (
              <article
                key={detail.label}
                className="border border-amber-100/15 bg-amber-100/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur md:p-6"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                  {detail.label}
                </p>
                <p className="mt-3 text-[15px] leading-7 text-stone-200">
                  {detail.value}
                </p>
                <div className="mt-5 grid gap-2">
                  {detail.evidence.map((item) => (
                    <div
                      key={item}
                      className="border-l border-amber-200/45 pl-3 text-sm leading-6 text-stone-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="border border-amber-100/15 bg-amber-100/[0.04] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur md:p-4">
            <div className="mb-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                Official Certificate
              </p>
              <h3 className="mt-2 text-xl font-bold">逢甲大學榮譽學生證書</h3>
            </div>

            <LightboxImage
              src={honorStudentCertificate}
              alt="逢甲大學榮譽學生證書"
              className="h-auto max-h-[58vh] w-full bg-white object-contain"
              priority
              sizes="(min-width: 1280px) 460px, (min-width: 1024px) 34vw, calc(100vw - 48px)"
            />

            <p className="mt-3 text-sm leading-6 text-stone-400">
              逢甲大學正式核發之榮譽學生證書，作為本頁成果佐證。
            </p>
          </aside>
        </div>
      </section>

      <section id="academic-experience" className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
          Research & Learning
        </p>
        <h2 className="mt-3 text-2xl font-bold md:text-3xl">研究參與與自主學習</h2>
        <div className="mt-8 divide-y divide-amber-100/10 border-y border-amber-100/10">
          {additionalAcademicExperiences.map((experience) => (
            <article key={experience.id} id={experience.id} className="grid scroll-mt-28 gap-4 py-7 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wide text-amber-200">{experience.badge}</p>
                <h3 className="mt-3 text-xl font-semibold">{experience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-400">{experience.meta}</p>
              </div>
              <p className="text-[15px] leading-8 text-stone-200">{experience.description}</p>
            </article>
          ))}
        </div>
        <article className="mt-8 border-l border-amber-200/40 bg-amber-100/[0.04] p-5 md:p-6">
          <h3 className="text-xl font-semibold">{projectLeadership.title}</h3>
          <p className="mt-3 text-[15px] leading-8 text-stone-200">{projectLeadership.description}</p>
          <Link href="/llama-marketing-system" className="mt-4 inline-flex min-h-11 items-center font-semibold text-amber-200 underline underline-offset-4 hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">
            查看 LLaMA 3 專題與個人貢獻 →
          </Link>
        </article>
        <article id="sharing-session" className="mt-6 scroll-mt-28 border-l border-amber-200/40 bg-amber-100/[0.04] p-5 md:p-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-amber-200">{honorSharing.badge}</p>
          <h3 className="mt-3 text-xl font-semibold">{honorSharing.title}</h3>
          <p className="mt-2 text-sm leading-6 text-stone-400">{honorSharing.meta}</p>
          <p className="mt-3 text-[15px] leading-8 text-stone-200">{honorSharing.description}</p>
        </article>
      </section>

      <section id="photos" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 pb-16 md:scroll-mt-28 md:pb-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            Honor Student Visual Record
          </h2>
        </div>

        <ImageLightboxGallery
          items={photos}
          actionLabel="View Photo"
          cardClassName="group flex h-full flex-col overflow-hidden border border-amber-100/15 bg-amber-100/[0.04] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-amber-200/40 hover:bg-amber-100/[0.07] focus:outline-none focus:ring-2 focus:ring-amber-200/70"
          gridClassName="grid gap-6 md:grid-cols-2"
          imageClassName="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
          imageSizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
          imageWrapperClassName="h-[420px] overflow-hidden border-b border-amber-100/10 bg-stone-950/50 md:h-[520px]"
          showTitle
          variant="amber"
        />
      </section>
    </main>
  );
}
