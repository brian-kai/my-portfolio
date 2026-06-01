import Link from "next/link";
import ImageLightboxGallery from "../image-lightbox-gallery";

import tutoringPhotoOne from "../image/6BD131C2-112B-48C8-B90B-FD36B7C5F348.jpg";
import tutoringPhotoTwo from "../image/96339D99-F8F2-4006-966F-1B68C750CA3C.jpg";

const photos = [
  {
    title: "Database Design Tutoring Photo 1",
    image: tutoringPhotoOne,
    alt: "資料庫設計夜間輔導課堂講解照片",
  },
  {
    title: "Database Design Tutoring Photo 2",
    image: tutoringPhotoTwo,
    alt: "資料庫設計上機考操作說明照片",
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
            className="absolute left-6 rounded-full border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white md:hidden"
          >
            Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | Kai-Chun Huang
            </span>
          </Link>

          <Link
            href="/#experience"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white md:inline-flex"
          >
            Back
          </Link>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
        <header className="border-b border-white/10 pb-6 md:pb-8">
          <p className="text-sm font-medium text-emerald-300">私立逢甲大學</p>
          <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
            資料庫設計夜間輔導
          </h1>

          <p className="mt-4 max-w-5xl text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">
            113-2、114-2 學期擔任資料庫設計課程助教，協助學生釐清 SQL
            操作、資料表設計與作業實作問題，並在課後輔導時提供即時解答與操作示範；輔導過程中協助講解小考考試題目，從題目條件拆解、資料表關聯判讀到查詢語法撰寫，帶學生理解每一步的思考邏輯，而不只是記憶
            SQL
            指令；同時也教導學生實際操作上機考步驟，包含考試環境確認、資料匯入、查詢執行、結果檢查與檔案繳交流程，幫助學生在正式測驗前熟悉操作節奏並降低臨場失誤。
          </p>
        </header>

        <section className="mx-auto max-w-5xl py-8 md:py-10">
          <ImageLightboxGallery
            items={photos}
            gridClassName="grid gap-5 md:grid-cols-2 md:gap-6"
            imageClassName="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
            imageSizes="(min-width: 768px) 50vw, 100vw"
          />
        </section>
      </div>
    </main>
  );
}
