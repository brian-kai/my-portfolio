import Link from "next/link";
import ImageLightboxGallery from "../image-lightbox-gallery";

import honorStudentPortrait from "../image/honor-student-portrait.jpg";
import honorStudentPortraitAlt from "../image/honor-student-portrait-alt.jpg";

const photos = [
  {
    title: "Honor Student Portrait",
    image: honorStudentPortrait,
    alt: "Kai-Chun Huang wearing honor student graduation regalia",
    description: "校級榮譽學生紀念照片，作為學校肯定與畢業歷程紀錄。",
  },
  {
    title: "Honor Student Portrait 2",
    image: honorStudentPortraitAlt,
    alt: "Kai-Chun Huang in honor student regalia posing for a portrait",
    description: "榮譽學生紀念照，以正式形象補強作品集中的個人可信度。",
  },
];

const details = [
  {
    label: "Recognition",
    value: "校級榮譽學生入選",
  },
  {
    label: "Meaning",
    value: "作為學業表現、專題參與與校內發展歷程的綜合肯定。",
  },
  {
    label: "Portfolio role",
    value: "補強研究與專案之外的學校認可紀錄，讓作品集具備更完整的履歷脈絡。",
  },
];

export default function HonorStudentPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <nav className="relative z-nav border-b border-white/10 bg-[#070a0d]/86 backdrop-blur">
        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-4 md:justify-between">
          <Link
            href="/#honors"
            className="absolute left-6 border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white md:hidden"
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
            href="/#honors"
            className="hidden border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white md:inline-flex"
          >
            Back to Honors
          </Link>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
          Honors & Recognition
        </p>

        <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
          校級榮譽學生入選
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
          榮譽學生申請以三個面向呈現：學術研究與競賽成果、跨域資料分析實作，以及公共服務與領導表現。內容包含
          CIIE 2025 最佳論文獎、ICCCM 2026 論文接受、Google Data
          Analytics 學習、用電趨勢分析專題，以及擔任資料庫設計助教、研究助理與系學會活動組長的經驗，展現研究執行、資料處理、團隊協調與服務投入。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="border border-white/10 bg-white/[0.06] p-4 md:p-5"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                {detail.label}
              </p>
              <p className="mt-3 text-[15px] leading-7 text-slate-200">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <ImageLightboxGallery
          items={photos}
          actionLabel="View Photo"
          cardClassName="group flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.045] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
          gridClassName="grid gap-6 md:grid-cols-2"
          imageClassName="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
          imageSizes="(min-width: 768px) 50vw, 100vw"
          imageWrapperClassName="h-[520px] overflow-hidden border-b border-white/10 bg-slate-950/50 md:h-[680px]"
          showDescription
          showTitle
          variant="emerald"
        />
      </section>
    </main>
  );
}
