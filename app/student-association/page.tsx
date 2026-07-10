import type { Metadata } from "next";
import Link from "next/link";
import ActiveSectionNav from "../active-section-nav";
import departmentNightImage from "../image/工工之夜.jpg";
import christmasPartyImage from "../image/耶晚.jpg";
import cultureFestivalImage from "../image/文化季.jpg";
import ImageLightboxGallery from "../image-lightbox-gallery";
import AwardProofSection from "./award-proof-section";

const experiences = [
  {
    title: "工佔你的直屬心 - 抽直屬",
    role: "副召",
    description:
      "協助規劃整體活動流程與細節安排，設計與製作活動表單，統整報名資料，並於活動當日協調現場流程與工作人員分工。",
    skills: ["流程規劃", "表單設計", "現場協調"],
  },
  {
    title: "工下你心頭的莓好滋味 - 聖誕傳情",
    role: "副召",
    description:
      "參與活動企劃討論，協助規劃禮物傳遞流程、前期準備與現場管理，確保活動流程順利進行。",
    skills: ["活動企劃", "前期準備", "現場管理"],
  },
  {
    title: "捌零重逢 - 文化季",
    role: "攤販長",
    description:
      "負責攤位整體規劃與管理，安排值班人員，協調攤位配置與活動方式，並處理活動現場突發狀況。",
    skills: ["攤位規劃", "人員安排", "問題處理"],
  },
  {
    title: "運動週、耶誕晚會、工工之夜",
    role: "工作人員",
    description:
      "協助活動前期準備、場地布置、現場流程執行、人員協調與活動秩序維持，累積團隊合作與執行經驗。",
    skills: ["場地布置", "流程執行", "團隊合作"],
  },
];

const photos = [
  {
    title: "工工之夜",
    description: "活動現場參與與流程執行紀錄，補充團隊合作與現場支援經驗。",
    image: departmentNightImage,
  },
  {
    title: "耶誕晚會",
    description: "協助活動前期準備、場地布置與現場秩序維持的紀錄。",
    image: christmasPartyImage,
  },
  {
    title: "捌零重逢文化季",
    description: "攤位規劃、人員分工與現場管理紀錄，呈現活動執行面的負責範圍。",
    image: cultureFestivalImage,
  },
];

const roleSummary = [
  ["Role", "活動組長"],
  ["Context", "工業工程與系統管理學系系學會"],
  ["Focus", "活動企劃、流程安排、現場協調"],
  ["Evidence", "正式證明與活動照片"],
];

const leadershipSkills = [
  "Event Planning",
  "Task Assignment",
  "On-site Coordination",
  "Team Communication",
];

const associationNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Photos", href: "#photos" },
  { label: "Award", href: "#award" },
];

export const metadata: Metadata = {
  title: "系學會活動經歷",
  description:
    "工業工程與系統管理學系系學會活動組長經歷，包含活動職責、正式獎狀證明與活動照片紀錄。",
};

export default function StudentAssociationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0d0c09] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_84%_14%,rgba(34,197,94,0.1),transparent_24%),linear-gradient(180deg,#0d0c09_0%,#15120b_52%,#0d0c09_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <nav className="z-nav fixed inset-x-0 top-0 border-b border-amber-200/10 bg-[#0d0c09]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/#student-association"
            className="shrink-0 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/[0.1] hover:text-white md:hidden"
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

      <section id="overview" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-12 pt-24 md:scroll-mt-28 md:pb-16 md:pt-28">
        <div className="border-b border-amber-200/15 pb-8 md:pb-10">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-200">
              Student Association
            </p>

            <h1 className="max-w-4xl text-3xl font-black leading-tight md:text-5xl">
              系學會活動經歷
            </h1>

            <p className="mt-5 max-w-3xl border-l border-amber-200/35 pl-5 text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">
              大三上學期加入工業工程與系統管理學系系學會，擔任活動組長，參與多項系上活動規劃與執行。這頁整理活動職責、正式證明與照片紀錄，作為團隊協作、流程安排與現場執行能力的補充證據。
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            <dl className="grid gap-3 sm:grid-cols-2">
              {roleSummary.map(([label, value]) => (
                <div
                  key={label}
                  className="border-l border-amber-200/35 bg-white/[0.025] px-4 py-3"
                >
                  <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200/80">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-6 text-slate-100">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-2">
              {leadershipSkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-amber-200/15 bg-amber-200/[0.07] px-3 py-1 text-xs font-semibold text-amber-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <div className="mb-7 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/80">
            Activity timeline
          </p>
          <h2 className="text-2xl font-bold md:text-3xl">活動職責</h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-400">
            以下整理不同活動中的負責內容，讓每段經驗對應到具體的規劃、協調與執行能力。
          </p>
        </div>

        <div className="relative grid gap-5 border-l border-amber-200/25 pl-5 md:pl-7">
          {experiences.map((experience, index) => (
            <article
              key={experience.title}
              className="relative grid gap-5 border border-amber-200/10 bg-[#15120b]/76 p-5 shadow-[0_18px_54px_rgba(0,0,0,0.16)] backdrop-blur md:grid-cols-[4.5rem_minmax(0,1fr)] md:p-6"
            >
              <span
                className="absolute -left-[1.72rem] top-7 h-3 w-3 rounded-full border border-amber-100 bg-[#0d0c09]"
                aria-hidden="true"
              />
              <div>
                <p className="font-mono text-xs font-bold text-amber-200/90">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="mt-3 inline-flex whitespace-nowrap border border-amber-200/20 bg-amber-200/[0.08] px-3 py-1 text-xs font-medium text-amber-100">
                  {experience.role}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold leading-7 md:text-xl">
                  {experience.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-slate-300 md:text-base">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="photos" className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 md:scroll-mt-28 md:pb-20">
        <div className="mb-7 max-w-3xl px-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/80">
            Evidence gallery
          </p>
          <h2 className="text-2xl font-bold md:text-3xl">活動照片</h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-400">
            照片用來補充活動現場與執行紀錄，讓這段經歷不只停留在文字描述。
          </p>
        </div>

        <ImageLightboxGallery
          items={photos}
          gridClassName="grid gap-6 md:grid-cols-2"
          imageClassName="aspect-[4/3] w-full rounded-xl object-cover object-center transition duration-300 group-hover:scale-[1.02]"
          imageSizes="(min-width: 768px) 50vw, 100vw"
          imageWrapperClassName="bg-[#15120b]/90 p-3 md:p-5"
          showDescription
          showTitle
          titleClassName="text-lg font-bold md:text-xl"
          variant="emerald"
        />
      </section>

      <AwardProofSection />
    </main>
  );
}
