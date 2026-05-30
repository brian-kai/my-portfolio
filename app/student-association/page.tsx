import Link from "next/link";
import departmentNightImage from "../image/工工之夜.jpg";
import christmasPartyImage from "../image/耶晚.jpg";
import cultureFestivalImage from "../image/文化季.jpg";
import ImageLightboxGallery from "../image-lightbox-gallery";

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

export default function StudentAssociationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <nav className="relative z-10 border-b border-white/10 bg-[#070a0d]/86 backdrop-blur">
        <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4 md:justify-between">
          <Link
            href="/"
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
            href="/#student-association"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white md:inline-flex"
          >
            Back
          </Link>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
          Student Association
        </p>

        <h1 className="max-w-6xl text-3xl font-bold leading-tight md:text-5xl">
          系學會活動經歷
        </h1>

        <p className="mt-5 max-w-6xl text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">
          大三上學期加入工業工程與系統管理學系系學會，擔任活動組長，參與多項系上活動規劃與執行。透過活動企劃、流程安排、現場管理與跨組溝通，培養團隊合作、組織協調、任務分配與問題解決能力。
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-14 md:pb-16">
        <h2 className="mb-6 text-2xl font-bold">活動職責</h2>

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold leading-7 md:text-xl">
                  {experience.title}
                </h3>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
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

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <h2 className="mb-6 px-1 text-2xl font-bold">活動照片</h2>

        <ImageLightboxGallery
          items={photos}
          gridClassName="grid gap-6 md:grid-cols-2"
          imageClassName="aspect-[4/3] w-full rounded-xl object-cover object-center transition duration-300 group-hover:scale-[1.02]"
          imageSizes="(min-width: 768px) 50vw, 100vw"
          imageWrapperClassName="bg-slate-900/80 p-3 md:p-5"
          showTitle
          variant="emerald"
        />
      </section>
    </main>
  );
}
