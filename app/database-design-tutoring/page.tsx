import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../arrow-icon";
import ActiveSectionNav from "../active-section-nav";
import ImageLightboxGallery from "../image-lightbox-gallery";

import tutoringPhotoOne from "../image/6BD131C2-112B-48C8-B90B-FD36B7C5F348.jpg";
import tutoringPhotoTwo from "../image/96339D99-F8F2-4006-966F-1B68C750CA3C.jpg";

// Sources: the autobiography (2026-03: 100 分、單科第一、系友獎學金; TA duties) and the homepage experience entry.

const photos = [
  {
    title: "課後輔導講解",
    image: tutoringPhotoOne,
    alt: "資料庫設計夜間輔導課堂講解照片",
    description: "協助學生拆解 SQL 題目條件、資料表關聯與查詢撰寫邏輯。",
  },
  {
    title: "上機考操作說明",
    image: tutoringPhotoTwo,
    alt: "資料庫設計上機考操作說明照片",
    description: "說明考試環境、資料匯入、查詢執行、結果檢查與檔案繳交流程。",
  },
];

const stats = [
  ["100", "修課成績（單科第一）"],
  ["2", "學期擔任助教"],
  ["4", "教學主題"],
];

const journey = [
  {
    date: "2024.12",
    tag: "Student",
    title: "修習資料庫設計：100 分、單科第一名",
    text: "獲系友獎學金「專業課程成績優異獎」。",
  },
  {
    date: "113-2 · 2025.02–06",
    tag: "TA",
    title: "第一次擔任課程助教",
    text: "協助課程教學與夜間輔導，解答作業與 SQL 問題。",
  },
  {
    date: "114-2 · 2026.02–06",
    tag: "TA",
    title: "再次受邀擔任助教",
    text: "延續輔導工作，並協助上機考流程說明。",
  },
];

const topics = ["關聯式綱要設計", "SQL 查詢", "正規化", "資料庫管理"];

const work = [
  {
    title: "SQL 輔導",
    en: "SQL tutoring",
    text: "從題目條件拆解到語法撰寫，帶學生理解查詢邏輯。",
    points: ["SELECT / JOIN / GROUP BY", "查詢條件判讀", "錯誤訊息與結果檢查"],
  },
  {
    title: "資料庫設計引導",
    en: "Design support",
    text: "釐清資料表設計、欄位關係與作業實作上的問題。",
    points: ["資料表關聯判讀", "作業問題釐清", "設計邏輯說明"],
  },
  {
    title: "上機考流程",
    en: "Lab exam workflow",
    text: "把上機考拆成可操作的步驟，降低正式測驗時的臨場失誤。",
    points: ["考試環境確認", "資料匯入與查詢執行", "結果檢查與檔案繳交"],
  },
  {
    title: "課程協作",
    en: "Course operations",
    text: "協助教師掌握學生進度並整理課程資料。",
    points: ["檢查學生課堂進度", "解答學生問題", "整理課程相關資料"],
  },
];

const tutoringNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Photos", href: "#photos" },
];

export const metadata: Metadata = {
  title: "資料庫設計課程助教",
  description:
    "逢甲大學資料庫設計課程以 100 分、單科第一修畢後，於 113-2、114-2 學期擔任該課程助教，負責 SQL 輔導、資料庫設計引導與上機考流程說明。",
};

const cardClass = "border border-white/10 bg-white/[0.045] backdrop-blur";
const eyebrowClass = "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300";

export default function DatabaseDesignTutoringPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/#experience"
            className="btn btn-secondary btn-sm shrink-0 md:hidden"
          >
            ← Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={tutoringNavItems} />
            <Link
              href="/#experience"
              className="btn btn-secondary btn-sm"
            >
              Back to Experience
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <section id="overview" className="scroll-mt-24 pb-14 md:scroll-mt-28 md:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
            <div className="min-w-0">
              <p className={eyebrowClass}>Teaching Assistant · 逢甲大學工業工程與系統管理學系</p>
              <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">資料庫設計課程助教</h1>
              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                以 <span className="font-bold text-amber-200">100 分、單科第一</span> 修畢這門課後，
                回到課堂擔任助教，把 SQL 查詢、資料表設計與上機考流程，拆解成學生能一步步照做的學習步驟。
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-px border border-white/10 bg-white/10">
                {stats.map(([value, label], index) => (
                  <div key={label} className="flex flex-col bg-[#0a1014]/90 px-4 py-4 md:px-5">
                    <dt className="order-last mt-1 text-xs leading-5 text-slate-400">{label}</dt>
                    <dd className={`text-3xl font-black md:text-4xl ${index === 0 ? "text-amber-300" : "text-white"}`}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figure className="relative overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
              <Image
                src={tutoringPhotoOne}
                alt="資料庫設計夜間輔導課堂講解照片"
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070a0d]/95 to-transparent px-5 pb-3 pt-10 text-sm font-semibold text-slate-200">
                夜間輔導：拆解 SQL 題目條件與查詢邏輯
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 border-t border-white/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>From student to TA</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">從修課第一名，到回來教這門課</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {journey.map((step, index) => (
              <li
                key={step.date}
                className={`${cardClass} relative p-5 md:p-6 ${index === 0 ? "border-amber-300/35 bg-[linear-gradient(150deg,rgba(252,211,77,0.1),rgba(255,255,255,0.03)_60%)]" : ""}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-semibold text-slate-300">{step.date}</span>
                  <span
                    className={`border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${
                      index === 0 ? "border-amber-300/40 text-amber-200" : "border-emerald-300/40 text-emerald-200"
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-7 text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Course topics</span>
            {topics.map((topic) => (
              <span key={topic} className="border border-emerald-300/20 bg-emerald-300/[0.07] px-3 py-1 text-sm text-emerald-100">
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-24 border-t border-white/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>What I did</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">助教工作內容</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {work.map((item) => (
              <article key={item.title} className={`${cardClass} flex flex-col p-5`}>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">{item.en}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                <ul className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                  {item.points.map((point) => (
                    <li key={point} className="border-l border-emerald-300/40 pl-3 text-sm leading-6 text-slate-200">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="photos" className="scroll-mt-24 border-t border-white/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>Record</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">輔導與上機考紀錄</h2>
          <ImageLightboxGallery
            items={photos}
            actionLabel="View Photo"
            showDescription
            showTitle
            variant="emerald"
            gridClassName="mt-8 grid gap-5 md:grid-cols-2 md:gap-6"
            imageClassName="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
            imageSizes="(min-width: 768px) 50vw, 100vw"
          />

          <aside className={`${cardClass} mt-10 flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between md:p-6`}>
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-300">Also teaching · 114-1</p>
              <p className="mt-1 font-bold text-white">決策與數據分析 課程助教</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                同樣以 100 分修畢後擔任助教，指導學生以 R 進行資料前處理、探索性分析與模型建構。
              </p>
            </div>
            <Link href="/#experience" className="link-arrow shrink-0">
              看所有經歷 <Arrow />
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}
