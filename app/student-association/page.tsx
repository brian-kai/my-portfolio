import Image from "next/image";
import Link from "next/link";
import departmentNightImage from "../image/工工之夜.jpg";
import christmasPartyImage from "../image/耶晚.jpg";
import cultureFestivalImage from "../image/文化季.jpg";

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
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950/80 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            Kevin Huang
          </Link>

          <Link
            href="/#student-association"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white"
          >
            回首頁
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
          Student Association
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          系學會活動經歷
        </h1>

        <p className="mt-5 max-w-4xl leading-8 text-slate-300">
          大三上學期加入工業工程與系統管理學系系學會，擔任活動組長，參與多項系上活動規劃與執行。透過活動企劃、流程安排、現場管理與跨組溝通，培養團隊合作、組織協調、任務分配與問題解決能力。
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold">活動職責</h2>

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {experience.role}
                </span>
              </div>

              <p className="leading-7 text-slate-300">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-6 text-2xl font-bold">活動照片</h2>

        <div className="grid gap-6">
          {photos.map((photo, index) => (
            <article
              key={photo.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="bg-slate-900/80 p-3 md:p-5">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  className="h-auto w-full rounded-xl object-cover"
                  priority={index === 0}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                />
              </div>

              <div className="border-t border-white/10 p-5">
                <h3 className="text-xl font-semibold">{photo.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
