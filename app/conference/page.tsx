import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import ActiveSectionNav from "../active-section-nav";
import Arrow from "../arrow-icon";
import ImageLightboxGallery from "../image-lightbox-gallery";
import { llamaAwards, medalTones } from "../llama-awards";
import presentationPhotoOne from "../image/67C8471D-8089-417B-B3A5-A69F0B04C706.jpg";
import presentationPhotoTwo from "../image/B1EE1CB0-4CD0-4963-9E2C-D2FFDC5E463C.jpg";
import graduateProjectAward from "../image/graduate-project-award.png";
import industrialEngineeringCompetitionCeremony from "./industrial-engineering-competition-ceremony-2026.jpg";
import industrialEngineeringCompetitionAward from "./industrial-engineering-competition-award-2026.png";
import orCompetitionAward from "./or-competition-award-2026.png";
import orCompetitionAwardCeremony from "./or-competition-award-ceremony-2026.jpg";
import bestPaperCertificate from "./2025-11-29-ciie2025-best-paper-award-llama3-marketing-copy.png";
import presentationCertificate from "./2025-11-29-ciie2025-presentation-proof-llama3-marketing-copy.png";

type Proof = { title: string; image: StaticImageData; alt: string; description?: string; originalHref?: string };

// Evidence for each award in llamaAwards, keyed by rank; the anchor ids are linked from the homepage.
const evidence: Record<string, { id: string; note?: string; proofs: Proof[] }> = {
  第一名: {
    id: "first-place",
    proofs: [
      {
        title: "第一名獎狀",
        image: industrialEngineeringCompetitionAward,
        alt: "2026 全國工業工程與管理大學生專題論文與技術報告競賽第一名獎狀",
        originalHref: "/file/industrial-engineering-competition-award-2026.pdf",
      },
      {
        title: "頒獎典禮",
        image: industrialEngineeringCompetitionCeremony,
        alt: "2026 全國工業工程與管理大學生專題論文與技術報告競賽第一名頒獎照片",
      },
    ],
  },
  最佳論文: {
    id: "best-paper",
    note: "研討會論文版本之生成評估：BLEU-3 18.92、BLEU-4 14.44、METEOR 23.62。",
    proofs: [
      { title: "最佳論文獎狀", image: bestPaperCertificate, alt: "CIIE 2025 最佳論文獎狀" },
      { title: "論文發表證明", image: presentationCertificate, alt: "CIIE 2025 論文發表證明" },
    ],
  },
  第二名: {
    id: "graduation-project",
    proofs: [{ title: "畢業專題獎狀", image: graduateProjectAward, alt: "逢甲大學工工系 114 學年度畢業專題第二名獎狀" }],
  },
  第三名: {
    id: "or-competition",
    proofs: [
      {
        title: "第三名獎狀",
        image: orCompetitionAward,
        alt: "2026 臺灣作業研究學會大專校院專題競賽第三名獎狀",
        originalHref: "/file/or-competition-award-2026.pdf",
      },
      { title: "頒獎典禮", image: orCompetitionAwardCeremony, alt: "2026 作業研究專題競賽第三名頒獎照片" },
    ],
  },
  佳作: { id: "cie-honorable", proofs: [] },
};

const presentationPhotos = [
  {
    title: "研究成果發表",
    description: "說明研究流程、資料分析方法與個人化文案生成結果。",
    image: presentationPhotoOne,
    alt: "2025 中國工業工程學會年會上台報告照片一",
  },
  {
    title: "口頭簡報與答詢",
    description: "針對 LLaMA 3 結合消費者偏好的研究設計進行口頭發表與答詢。",
    image: presentationPhotoTwo,
    alt: "2025 中國工業工程學會年會上台報告照片二",
  },
];

const stats = [
  ["5", "項獎項"],
  ["3", "項全國競賽"],
  ["1", "篇最佳論文"],
];

const conferenceNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Awards", href: "#awards" },
  { label: "Presentation", href: "#presentation" },
];

export const metadata: Metadata = {
  title: "研究獲獎與發表證明",
  description:
    "LLaMA 3 個人化行銷文案研究的 5 項獎項證明：全國工工專題競賽第一名、CIIE 2025 最佳論文、畢業專題第二名、作業研究專題競賽第三名與工程論文競賽佳作，以及研討會發表照片。",
};

const eyebrowClass = "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300";

export default function ConferencePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-6">
          <Link href="/#research" className="btn btn-secondary btn-sm shrink-0 md:hidden">
            ← Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={conferenceNavItems} />
            <Link href="/#research" className="btn btn-secondary btn-sm">
              Back to Research
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <section id="overview" className="scroll-mt-24 pb-14 md:scroll-mt-28 md:pb-16">
          <p className={eyebrowClass}>Awards & proof</p>
          <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">一份研究，五項肯定</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            「基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式」在 2025–2026 年間獲得的獎項與發表證明。
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="flex flex-col gap-4">
              <dl className="grid grid-cols-3 gap-px border border-white/10 bg-white/10">
                {stats.map(([value, label], index) => (
                  <div key={label} className="flex flex-col bg-[#0a1014]/90 px-4 py-4">
                    <dt className="order-last mt-1 text-xs leading-5 text-slate-400">{label}</dt>
                    <dd className={`text-3xl font-black md:text-4xl ${index === 0 ? "text-amber-300" : "text-white"}`}>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="border border-white/10 bg-white/[0.045] p-5">
                <p className="text-sm leading-7 text-slate-300">研究動機、方法與三個實驗的完整內容，整理在案例頁。</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/llama-marketing-system" className="btn btn-primary btn-sm">
                    看研究案例 <Arrow />
                  </Link>
                  <a href="/file/graduation-project-poster.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                    研究海報 <Arrow kind="external" />
                  </a>
                </div>
              </div>
            </div>

            <ol className="border border-white/10 bg-[#0a1014]/70 backdrop-blur">
              {llamaAwards.map((award) => {
                const tone = medalTones[award.tone];
                return (
                  <li key={award.name} className={`border-b border-white/10 last:border-b-0 ${tone.row}`}>
                    <a
                      href={`#${evidence[award.rank].id}`}
                      className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 transition hover:bg-white/[0.04] sm:gap-4 sm:px-5"
                    >
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${tone.medal}`} aria-hidden="true">
                        {award.medal}
                      </span>
                      <span className="min-w-0">
                        <span className={`block text-sm font-black ${tone.rank}`}>{award.rank}</span>
                        <span className="block text-sm leading-6 text-white">{award.name}</span>
                      </span>
                      <span className="flex items-center gap-2 font-mono text-xs text-slate-400">
                        {award.year}
                        <Arrow kind="down" className="arrow-accent" />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="awards" className="scroll-mt-24 border-t border-white/10 pt-14 md:scroll-mt-28 md:pt-16">
          <p className={eyebrowClass}>Evidence</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">逐項獎項證明</h2>
          <div className="mt-8 grid gap-6">
            {llamaAwards.map((award) => {
              const tone = medalTones[award.tone];
              const item = evidence[award.rank];
              return (
                <article
                  key={award.name}
                  id={item.id}
                  className={`scroll-mt-28 border border-white/10 bg-white/[0.035] p-5 backdrop-blur md:p-6 ${tone.row}`}
                >
                  <header className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black ${tone.medal}`} aria-hidden="true">
                      {award.medal}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className={`text-lg font-black ${tone.rank}`}>{award.rank}</p>
                      <h3 className="text-lg font-bold leading-7 text-white md:text-xl">{award.name}</h3>
                      <p className="text-sm text-slate-400">{award.category}</p>
                    </div>
                    <p className="w-full pl-14 font-mono text-xs font-semibold text-slate-400 sm:w-auto sm:pl-0">
                      {award.level} · {award.year}
                    </p>
                  </header>
                  {item.note ? <p className="mt-4 border-l-2 border-emerald-300/40 pl-3 text-sm leading-6 text-slate-300">{item.note}</p> : null}
                  {item.proofs.length ? (
                    <ImageLightboxGallery
                      items={item.proofs}
                      actionLabel="View"
                      gridClassName={`mt-5 grid gap-4 ${item.proofs.length > 1 ? "sm:grid-cols-2" : "sm:max-w-md"}`}
                      imageClassName="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                      imageSizes="(min-width: 640px) 50vw, 100vw"
                      imageWrapperClassName="flex h-[300px] items-center justify-center border-b border-white/10 bg-slate-950/60 p-2 md:h-[360px]"
                      showTitle
                      titleClassName="text-sm font-semibold text-white"
                      variant="emerald"
                    />
                  ) : (
                    <p className="mt-4 pl-14 text-sm text-slate-500">獎狀影本尚未收錄於本頁。</p>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="presentation" className="mt-14 scroll-mt-24 border-t border-white/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>On stage · CIIE 2025</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">研討會口頭發表</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
            於 2025 中國工業工程學會年會暨學術研討會進行口頭發表，並獲大數據技術與應用領域最佳論文獎。
          </p>
          <ImageLightboxGallery
            items={presentationPhotos}
            actionLabel="View Photo"
            gridClassName="mt-8 grid gap-6 md:grid-cols-2"
            imageClassName="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
            imageSizes="(min-width: 768px) 50vw, 100vw"
            showDescription
            showTitle
            titleClassName="text-base font-bold text-white md:text-lg"
            variant="emerald"
          />
        </section>
      </div>
    </main>
  );
}
