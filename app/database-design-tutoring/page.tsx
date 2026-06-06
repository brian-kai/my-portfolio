import Link from "next/link";
import ImageLightboxGallery from "../image-lightbox-gallery";

import tutoringPhotoOne from "../image/6BD131C2-112B-48C8-B90B-FD36B7C5F348.jpg";
import tutoringPhotoTwo from "../image/96339D99-F8F2-4006-966F-1B68C750CA3C.jpg";

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

const proofChips = [
  "Teaching Assistant",
  "Database Design",
  "113-2 / 114-2",
  "SQL / ERD / Lab Exam",
];

const evidenceSummaries = [
  {
    title: "SQL Tutoring",
    description: "協助學生理解查詢邏輯，從題目條件拆解到 SQL 語法撰寫。",
    points: ["SELECT / JOIN / GROUP BY", "查詢條件判讀", "錯誤訊息與結果檢查"],
  },
  {
    title: "Database Design Support",
    description: "引導學生釐清資料表設計、欄位關係與作業實作問題。",
    points: ["資料表關聯判讀", "作業問題釐清", "資料表設計邏輯說明"],
  },
  {
    title: "Exam Preparation Workflow",
    description: "將上機考流程拆成可操作步驟，降低正式測驗時的臨場失誤。",
    points: ["考試環境確認", "資料匯入與查詢執行", "結果檢查與檔案繳交"],
  },
];

export default function DatabaseDesignTutoringPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <nav className="relative z-10 border-b border-white/10 bg-[#070a0d]/86 backdrop-blur">
        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-4 md:justify-between">
          <Link
            href="/#experience"
            className="absolute left-6 border border-emerald-300/45 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-300/70 hover:bg-emerald-300/[0.08] hover:text-white md:hidden"
          >
            Back to Experience
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | Kai-Chun Huang
            </span>
          </Link>

          <Link
            href="/#experience"
            className="hidden border border-emerald-300/45 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-300/70 hover:bg-emerald-300/[0.08] hover:text-white md:inline-flex"
          >
            Back to Experience
          </Link>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
        <header className="border-b border-white/10 pb-6 md:pb-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            私立逢甲大學
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
            資料庫設計課程助教
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
            協助學生理解 SQL 查詢、資料表關聯與上機考流程，將資料庫概念轉化成可操作的學習步驟。
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {proofChips.map((chip) => (
              <span
                key={chip}
                className="border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-100"
              >
                {chip}
              </span>
            ))}
          </div>
        </header>

        <section className="py-8 md:py-10">
          <div className="mb-6 max-w-3xl">
            <h2 className="text-2xl font-bold md:text-3xl">
              Teaching Evidence Summary
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {evidenceSummaries.map((item) => (
              <article
                key={item.title}
                className="border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur md:p-6"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  {item.title}
                </p>
                <p className="mt-3 text-[15px] leading-7 text-slate-200">
                  {item.description}
                </p>
                <div className="mt-5 grid gap-2">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="border-l border-emerald-300/40 pl-3 text-sm leading-6 text-slate-300"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-2xl font-bold md:text-3xl">
              Tutoring & Lab Support Record
            </h2>
          </div>

          <ImageLightboxGallery
            items={photos}
            actionLabel="View Photo"
            showDescription
            showTitle
            variant="emerald"
            gridClassName="grid gap-5 md:grid-cols-2 md:gap-6"
            imageClassName="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
            imageSizes="(min-width: 768px) 50vw, 100vw"
          />
        </section>
      </div>
    </main>
  );
}
