import Image from "next/image";
import Link from "next/link";

import tutoringPhotoOne from "../image/6BD131C2-112B-48C8-B90B-FD36B7C5F348.jpg";
import tutoringPhotoTwo from "../image/96339D99-F8F2-4006-966F-1B68C750CA3C.jpg";

const photos = [
  {
    image: tutoringPhotoOne,
    alt: "資料庫設計夜間輔導課堂照片一",
  },
  {
    image: tutoringPhotoTwo,
    alt: "資料庫設計夜間輔導課堂照片二",
  },
];

export default function DatabaseDesignTutoringPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_14%_22%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(139,92,246,0.24),transparent_34%),linear-gradient(135deg,#020617_0%,#071329_45%,#111827_100%)] px-6 py-8 text-white [overflow-wrap:anywhere] md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
          >
            <span aria-hidden="true">&lt;-</span>
            Back to Experience
          </Link>

          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
          >
            Home
          </Link>
        </div>

        <header className="mt-8 border-b border-white/10 pb-6 md:pb-8">
          <p className="text-sm font-medium text-cyan-300">私立逢甲大學</p>
          <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
            資料庫設計夜間輔導
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">
            113-2、114-2 學期擔任資料庫設計課程助教，協助學生釐清 SQL
            操作、資料表設計與作業實作問題。
          </p>
        </header>

        <section className="grid gap-5 py-8 md:grid-cols-2 md:gap-6 md:py-10">
          {photos.map((photo) => (
            <a
              key={photo.alt}
              href={photo.image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                className="aspect-[4/5] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02] max-md:max-h-[520px]"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={photo.image === tutoringPhotoOne}
              />
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
