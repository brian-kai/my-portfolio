import Link from "next/link";
import ActiveSectionNav from "../active-section-nav";
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
    value: "以研究發表與學術成果展現專題執行、模型應用與英文論文發表能力。",
    evidence: [
      "CIIE 2025 最佳論文獎",
      "ICCCM 2026 Accepted for Presentation",
      "NLP / LLM 研究與專題實作",
    ],
  },
  {
    label: "Cross-domain Practice",
    value: "將資料分析、AI 工具與實務問題連結，完成資料整理到成果呈現。",
    evidence: [
      "Google Data Analytics 學習",
      "用電趨勢分析專題",
      "AI workflow 與資料處理專案",
    ],
  },
  {
    label: "Leadership & Service",
    value: "透過助教、研究助理與系學會活動經驗，呈現溝通協作與公共服務投入。",
    evidence: [
      "資料庫設計課程助教",
      "國科會研究計畫助理",
      "系學會活動組長",
    ],
  },
];

const honorNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Evidence", href: "#evidence" },
  { label: "Photos", href: "#photos" },
];

export default function HonorStudentPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-4 md:justify-between">
          <Link
            href="/#experience"
            className="absolute left-6 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white md:hidden"
          >
            Back to Honors
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | Kai-Chun Huang
            </span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={honorNavItems} />
            <Link
              href="/#experience"
              className="rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white"
            >
              Back to Honors
            </Link>
          </div>
        </div>
      </nav>

      <section id="overview" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 pb-12 pt-28 md:scroll-mt-28 md:pb-16 md:pt-32">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
          Honors & Recognition
        </p>

        <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
          校級榮譽學生入選
        </h1>

        <p className="mt-5 max-w-6xl text-base leading-7 text-slate-300 [text-wrap:pretty] md:text-lg md:leading-8">
          以學術研究、跨域資料分析、國際參與、專業實習與公共服務等面向獲選，作為大學階段綜合表現的代表性榮譽。
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
      </section>

      <section id="evidence" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 pb-16 md:scroll-mt-28 md:pb-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">獲選依據與官方證明</h2>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)]">
          <div className="grid gap-4">
            {details.map((detail) => (
              <article
                key={detail.label}
                className="border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur md:p-6"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  {detail.label}
                </p>
                <p className="mt-3 text-[15px] leading-7 text-slate-200">
                  {detail.value}
                </p>
                <div className="mt-5 grid gap-2">
                  {detail.evidence.map((item) => (
                    <div
                      key={item}
                      className="border-l border-emerald-300/40 pl-3 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="border border-white/10 bg-white/[0.045] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur md:p-4">
            <div className="mb-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
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

            <p className="mt-3 text-sm leading-6 text-slate-400">
              逢甲大學正式核發之榮譽學生證書，作為本頁成果佐證。
            </p>
          </aside>
        </div>
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
          cardClassName="group flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.045] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
          gridClassName="grid gap-6 md:grid-cols-2"
          imageClassName="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
          imageSizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
          imageWrapperClassName="h-[420px] overflow-hidden border-b border-white/10 bg-slate-950/50 md:h-[520px]"
          showTitle
          variant="emerald"
        />
      </section>
    </main>
  );
}
