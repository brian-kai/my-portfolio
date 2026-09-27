import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ActiveSectionNav from "../active-section-nav";
import ImageLightboxGallery from "../image-lightbox-gallery";
import LightboxImage from "../lightbox-image";

import christmasPartyImage from "../image/christmas-eve-event.jpg";
import cultureFestivalImage from "../image/culture-festival.jpg";
import departmentNightImage from "../image/ie-department-night.jpg";
import studentAssociationAward from "../image/student-association-award.png";

// Source: autobiography (2026-03), 社團活動經歷.

const ledEvents = [
  {
    role: "副召",
    title: "工佔你的直屬心",
    subtitle: "抽直屬",
    description: "規劃整體活動流程與細節，設計報名表單並統整報名資料；活動當日協調現場流程與工作人員分工。",
    skills: ["流程規劃", "表單設計", "現場協調"],
  },
  {
    role: "副召",
    title: "工下你心頭的莓好滋味",
    subtitle: "聖誕傳情",
    description: "參與活動企劃討論，規劃禮物傳遞流程，負責前期準備、現場管理與工作人員分工。",
    skills: ["活動企劃", "流程設計", "現場管理"],
  },
  {
    role: "攤販長",
    title: "捌零重逢",
    subtitle: "文化季",
    description: "負責攤位整體規劃與管理，安排各攤位值班人員、討論攤位配置，並處理活動現場突發狀況。",
    skills: ["攤位規劃", "人員排班", "突發處理"],
  },
];

const supportedEvents = ["運動週", "耶誕晚會", "工工之夜"];

const stats = [
  ["3", "場活動擔任負責人"],
  ["6", "場系上活動參與"],
  ["1", "張服務獎狀"],
];

const photos = [
  {
    title: "捌零重逢文化季",
    description: "擔任攤販長：攤位規劃、人員排班與現場管理。",
    image: cultureFestivalImage,
  },
  {
    title: "耶誕晚會",
    description: "工作人員：前期準備、場地布置與現場秩序維持。",
    image: christmasPartyImage,
  },
  {
    title: "工工之夜",
    description: "工作人員：現場流程執行與人員協調。",
    image: departmentNightImage,
  },
];

const associationNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Led", href: "#led" },
  { label: "Photos", href: "#photos" },
  { label: "Award", href: "#award" },
];

export const metadata: Metadata = {
  title: "系學會活動組長",
  description:
    "工業工程與系統管理學系系學會活動組長（2024–2025）：擔任抽直屬、聖誕傳情副召與文化季攤販長，並參與運動週、耶誕晚會、工工之夜，獲系學會服務獎狀。",
};

const cardClass = "border border-amber-200/15 bg-[#15120b]/80 backdrop-blur";
const eyebrowClass = "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-200";

export default function StudentAssociationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0d0c09] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_84%_14%,rgba(34,197,94,0.1),transparent_24%),linear-gradient(180deg,#0d0c09_0%,#15120b_52%,#0d0c09_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <nav className="z-nav fixed inset-x-0 top-0 border-b border-amber-200/10 bg-[#0d0c09]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/#student-association"
            className="shrink-0 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-amber-200/60 hover:bg-white/[0.1] hover:text-white md:hidden"
          >
            ← Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={associationNavItems} variant="amber" />
            <Link
              href="/#student-association"
              className="rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-amber-200/60 hover:bg-white/[0.1] hover:text-white"
            >
              Back to Experience
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <section id="overview" className="scroll-mt-24 pb-14 md:scroll-mt-28 md:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className={eyebrowClass}>Student Association · Leadership</p>
                <span className="rounded-full border border-amber-300/45 bg-amber-300/[0.1] px-3 py-1 font-mono text-xs font-bold text-amber-100">
                  2024–2025
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">系學會活動組長</h1>
              <p className="mt-2 text-lg font-semibold text-amber-100">逢甲大學工業工程與系統管理學系系學會</p>
              <p className="mt-5 text-base leading-8 text-slate-300">
                大三起加入系學會擔任活動組長，從活動企劃、表單與流程設計到當天的人員調度與突發狀況處理，
                在有限時間內把活動從規劃帶到落地。
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-px border border-amber-200/15 bg-amber-200/15">
                {stats.map(([value, label], index) => (
                  <div key={label} className="flex flex-col bg-[#15120b] px-4 py-4">
                    <dt className="order-last mt-1 text-xs leading-5 text-slate-400">{label}</dt>
                    <dd className={`text-3xl font-black md:text-4xl ${index === 0 ? "text-amber-300" : "text-white"}`}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <figure className="relative overflow-hidden border border-amber-200/20 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
              <Image
                src={cultureFestivalImage}
                alt="捌零重逢文化季活動照片"
                priority
                sizes="(min-width: 1024px) 540px, 100vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d0c09]/95 to-transparent px-5 pb-3 pt-10 text-sm font-semibold text-slate-200">
                捌零重逢文化季 · 擔任攤販長
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="led" className="scroll-mt-24 border-t border-amber-200/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>Events I led</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">擔任負責人的活動</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {ledEvents.map((event) => (
              <li key={event.title} className={`${cardClass} flex flex-col p-5 md:p-6`}>
                <span className="w-fit rounded-full border border-amber-300/50 bg-amber-300/[0.12] px-3 py-1 text-sm font-black text-amber-200">
                  {event.role}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-snug text-white">{event.title}</h3>
                <p className="text-sm font-semibold text-amber-100/80">{event.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{event.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {event.skills.map((skill) => (
                    <span key={skill} className="border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <div className={`${cardClass} mt-4 flex flex-col gap-3 p-5 md:flex-row md:items-center md:gap-6`}>
            <p className="shrink-0 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Also on staff</p>
            <div className="flex flex-wrap gap-2">
              {supportedEvents.map((name) => (
                <span key={name} className="border border-amber-200/20 bg-amber-200/[0.06] px-3 py-1 text-sm font-semibold text-amber-50">
                  {name}
                </span>
              ))}
            </div>
            <p className="text-sm leading-6 text-slate-400 md:ml-auto md:text-right">前期準備、場地布置、流程執行與秩序維持</p>
          </div>
        </section>

        <section id="photos" className="scroll-mt-24 border-t border-amber-200/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>On site</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">活動現場紀錄</h2>
          <ImageLightboxGallery
            items={photos}
            actionLabel="View Photo"
            gridClassName="mt-8 grid gap-5 md:grid-cols-3"
            imageClassName="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
            imageSizes="(min-width: 768px) 33vw, 100vw"
            showDescription
            showTitle
            variant="amber"
          />
        </section>

        <section id="award" className="scroll-mt-24 border-t border-amber-200/10 py-14 md:scroll-mt-28 md:py-16">
          <p className={eyebrowClass}>Official proof</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">系學會服務獎狀</h2>
          <div className={`${cardClass} mt-8 grid gap-6 p-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:p-6`}>
            <div className="overflow-hidden bg-white">
              <LightboxImage
                src={studentAssociationAward}
                alt="系學會服務獎狀"
                className="mx-auto h-auto max-h-[520px] w-auto max-w-full object-contain"
                sizes="(min-width: 768px) 440px, calc(100vw - 80px)"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-white">系學會活動組長 服務獎狀</p>
              <p className="mt-3 text-[15px] leading-7 text-slate-300">
                系學會正式核發的服務獎狀，肯定擔任活動組長期間在活動規劃、團隊協作與現場執行上的貢獻。
              </p>
              <p className="mt-4 text-sm text-slate-500">點獎狀可放大檢視。</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
