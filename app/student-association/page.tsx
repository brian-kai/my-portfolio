import Link from "next/link";
import ActiveSectionNav from "../active-section-nav";
import departmentNightImage from "../image/工工之夜.jpg";
import christmasPartyImage from "../image/耶晚.jpg";
import cultureFestivalImage from "../image/文化季.jpg";
import ImageLightboxGallery from "../image-lightbox-gallery";
import studentAssociationAward from "../image/student-association-award.png";
import LightboxImage from "../lightbox-image";
import AwardProofSection from "./award-proof-section";

const experiences = [
  {
    title: "工佔你的直屬心 - 抽直屬",
    role: "副召",
    description:
      "協助規劃整體活動流程與細節安排，設計與製作活動表單，統整報名資料，並於活動當日協調現場流程與工作人員分工。",
  },
  {
    title: "工下你心頭的莓好滋味 - 聖誕傳情",
    role: "副召",
    description:
      "參與活動企劃討論，協助規劃禮物傳遞流程、前期準備與現場管理，確保活動流程順利進行。",
  },
  {
    title: "捌零重逢 - 文化季",
    role: "攤販長",
    description:
      "負責攤位整體規劃與管理，安排值班人員，協調攤位配置與活動方式，並處理活動現場突發狀況。",
  },
  {
    title: "運動週、耶誕晚會、工工之夜",
    role: "工作人員",
    description:
      "協助活動前期準備、場地布置、現場流程執行、人員協調與活動秩序維持，累積團隊合作與執行經驗。",
  },
];

const photos = [
  {
    title: "工工之夜",
    image: departmentNightImage,
  },
  {
    title: "耶誕晚會",
    image: christmasPartyImage,
  },
  {
    title: "捌零重逢文化季",
    image: cultureFestivalImage,
  },
];

const associationNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Award", href: "#award" },
  { label: "Photos", href: "#photos" },
];

export default function StudentAssociationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0d0c09] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_84%_14%,rgba(34,197,94,0.1),transparent_24%),linear-gradient(180deg,#0d0c09_0%,#15120b_52%,#0d0c09_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <nav className="z-nav fixed inset-x-0 top-0 border-b border-amber-200/10 bg-[#0d0c09]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-4 md:justify-between">
          <Link
            href="/#student-association"
            className="absolute left-6 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white md:hidden"
          >
            Back to Student Association
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | Kai-Chun Huang
            </span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={associationNavItems} variant="amber" />
            <Link
              href="/#student-association"
              className="rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white"
            >
              Back to Student Association
            </Link>
          </div>
        </div>
      </nav>

      <section id="overview" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-12 pt-28 md:scroll-mt-28 md:pb-16 md:pt-32">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-200">
          Student Association
        </p>

        <h1 className="max-w-6xl text-3xl font-black leading-tight md:text-5xl">
          系學會活動經歷
        </h1>

        <p className="mt-5 max-w-5xl border-l border-amber-200/35 pl-5 text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">
          大三上學期加入工業工程與系統管理學系系學會，擔任活動組長，參與多項系上活動規劃與執行。透過活動企劃、流程安排、現場管理與跨組溝通，培養團隊合作、組織協調、任務分配與問題解決能力。
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="mb-6 text-2xl font-bold">活動職責</h2>

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="rounded-lg border border-amber-200/10 bg-[#15120b]/80 p-5 shadow-[0_18px_54px_rgba(0,0,0,0.18)] md:p-6"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold leading-7 md:text-xl">
                  {experience.title}
                </h3>
                <span className="border border-amber-200/20 bg-amber-200/[0.08] px-3 py-1 text-xs font-medium text-amber-100">
                  {experience.role}
                </span>
              </div>

              <p className="text-[15px] leading-7 text-slate-300 md:text-base">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <AwardProofSection />

      <section
        id="award-old"
        className="hidden"
      >
        <div className="mb-7 grid gap-4 md:grid-cols-[minmax(0,0.74fr)_minmax(16rem,0.26fr)] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/80">
              Official proof
            </p>
            <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">
              系學會正式證明
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-7 text-slate-300 md:text-right">
            獎狀、職責與照片放在同一頁，讓系學會經歷有完整的證據鏈。
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-amber-200/20 bg-[#15120b]/88 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
          <div className="grid lg:grid-cols-[minmax(0,0.76fr)_minmax(16rem,0.24fr)]">
            <div className="bg-white p-2 md:p-4">
              <LightboxImage
                src={studentAssociationAward}
                alt="系學獎狀"
                actionLabel="View Award"
                actionClassName="m-3 inline-flex w-fit items-center justify-center rounded-lg border border-amber-200/55 bg-[#15120b] px-5 py-2.5 text-sm font-bold text-amber-50 shadow-[0_14px_32px_rgba(245,158,11,0.16)] transition group-hover:-translate-y-0.5 group-hover:border-amber-200/80 group-hover:bg-[#1b160d]"
                className="h-auto max-h-[720px] w-full object-contain"
                sizes="(min-width: 1024px) 820px, calc(100vw - 48px)"
                priority
              />
            </div>

            <aside className="flex flex-col border-t border-amber-200/15 p-5 md:p-6 lg:border-l lg:border-t-0">
              <span className="w-fit border border-amber-200/25 bg-amber-200/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">
                Leadership Evidence
              </span>

              <h3 className="mt-6 text-2xl font-black leading-tight text-white">
                系學獎狀
              </h3>

              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                系學會經歷的正式獎狀證明，補強活動規劃、團隊協作、現場執行與服務貢獻。
              </p>

              <div className="mt-7 grid gap-3 text-sm leading-6 text-slate-300">
                {[
                  ["Position", "活動組長"],
                  ["Evidence", "服務獎狀"],
                  ["Context", "工業工程與系統管理學系系學會"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-l border-amber-200/35 bg-white/[0.035] px-4 py-3"
                  >
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200/80">
                      {label}
                    </p>
                    <p className="mt-1 font-semibold text-slate-100">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <p className="text-xs leading-6 text-slate-400">
                  使用獎狀下方按鈕可放大檢視。
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="photos" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 md:scroll-mt-28 md:pb-20">
        <h2 className="mb-6 px-1 text-2xl font-bold">活動照片</h2>

        <ImageLightboxGallery
          items={photos}
          gridClassName="grid gap-6 md:grid-cols-2"
          imageClassName="aspect-[4/3] w-full rounded-xl object-cover object-center transition duration-300 group-hover:scale-[1.02]"
          imageSizes="(min-width: 768px) 50vw, 100vw"
          imageWrapperClassName="bg-[#15120b]/90 p-3 md:p-5"
          showTitle
          variant="emerald"
        />
      </section>
    </main>
  );
}
