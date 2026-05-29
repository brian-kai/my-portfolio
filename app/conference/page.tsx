import Image from "next/image";
import Link from "next/link";
import ImageLightboxGallery from "../image-lightbox-gallery";
import presentationPhotoOne from "../image/67C8471D-8089-417B-B3A5-A69F0B04C706.jpg";
import presentationPhotoTwo from "../image/B1EE1CB0-4CD0-4963-9E2C-D2FFDC5E463C.jpg";
import bestPaperCertificate from "./2025-11-29-[CIIE2025最佳論文獎]基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式.png";
import presentationCertificate from "./2025-11-29-[CIIE2025發表證明]基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式.png";

const presentationPhotos = [
  {
    title: "CIIE 2025 Presentation Photo 1",
    image: presentationPhotoOne,
    alt: "2025 中國工業工程學會年會上台報告照片一",
  },
  {
    title: "CIIE 2025 Presentation Photo 2",
    image: presentationPhotoTwo,
    alt: "2025 中國工業工程學會年會上台報告照片二",
  },
];

const certificates = [
  {
    title: "CIIE 2025 最佳論文獎",
    event: "基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式",
    image: bestPaperCertificate,
  },
  {
    title: "CIIE 2025 發表證明",
    event: "基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式",
    image: presentationCertificate,
  },
];

const researchOverview = {
  title: "基於 LLaMA 3 模型結合消費者偏好生成個人化行銷文案生成模式",
  tags: ["LLM", "LLaMA 3", "NLP", "Marketing"],
  motivation:
    "隨著數位平台之普及，傳統行銷文案常因內容制式、與消費者需求關聯性不足而降低購買意圖。因此，本研究選擇 LLaMA 3 結合消費者偏好生成個人化產品行銷文案，包含消費者偏好分析、語意分析與個人化行銷文案生成三大模組，並透過系統進行案例驗證，以評估其實用性與可行性。",
  goals: [
    {
      title: "消費者偏好分析",
      description:
        "透過解析消費者評論，分析評論中的消費者需求與偏好資訊，作為生成個人化行銷文案之基礎。",
    },
    {
      title: "語意與情感特徵整合",
      description:
        "針對行銷文案與消費者評論進行語意特徵分析，擷取並整合語意和情感線索，使生成文案更能貼近目標受眾。",
    },
    {
      title: "個人化行銷文案生成",
      description:
        "根據消費者偏好分析結果，結合語意與情感特徵，透過 LLaMA 3 生成更具吸引力的個人化行銷文案。",
    },
  ],
  result:
    "研究建構一套基於 LLaMA 3 模型的個人化產品行銷文案生成方法，並整合 TextBlob、TextRank、LDA、SBERT 與 K-Means 等方法擷取消費者情感特徵、產品主題與銷售文案語意特徵。實驗結果顯示，本研究方法不僅能有效完成消費者偏好分析與文案生成，亦能改善傳統行銷文案模板化生成方式之侷限。",
  metrics: "BLEU-3 為 18.92、BLEU-4 為 14.44、METEOR 為 0.2362",
  posterHref: "/file/畢業專題海報檔案.pdf",
};

export default function ConferencePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white [overflow-wrap:anywhere]">
      <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4 md:justify-between">
          <Link
            href="/"
            className="absolute left-6 rounded-full border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white md:hidden"
          >
            返回
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | 黃凱浚 Kai-Chun Huang
            </span>
          </Link>

          <Link
            href="/#research"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white md:inline-flex"
          >
            返回
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Conference
        </p>

        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          研討會獎狀
        </h1>

        <p className="mt-5 max-w-3xl leading-8 text-slate-300">
          CIIE 2025 研討會發表與獲獎證明，包含最佳論文獎與發表證明。
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <article
          lang="zh-Hant"
          className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_20px_70px_rgba(8,47,73,0.32)] md:p-8"
        >
          <div className="max-w-5xl">
            <h2 className="text-2xl font-black leading-tight text-white md:text-3xl">
              {researchOverview.title}
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {researchOverview.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-purple-500/15 px-3 py-1 text-xs font-semibold text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <section>
              <h3 className="border-b border-cyan-300/50 pb-3 text-xl font-bold text-cyan-100">
                研究動機
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-200 md:text-base">
                {researchOverview.motivation}
              </p>
            </section>

            <section>
              <h3 className="border-b border-cyan-300/50 pb-3 text-xl font-bold text-cyan-100">
                研究目的
              </h3>
              <ol className="mt-4 space-y-4 text-[15px] leading-8 text-slate-200 md:text-base">
                {researchOverview.goals.map((goal, index) => (
                  <li key={goal.title} className="flex gap-3">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/15 text-sm font-bold text-cyan-200">
                      {index + 1}
                    </span>
                    <span>
                      <strong className="text-white">{goal.title}：</strong>
                      {goal.description}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <section className="mt-8">
            <h3 className="border-b border-cyan-300/50 pb-3 text-xl font-bold text-cyan-100">
              研究成果
            </h3>
            <p className="mt-4 text-[15px] leading-8 text-slate-200 md:text-base">
              {researchOverview.result}
              <span className="font-semibold text-rose-200">
                {" "}
                其中 {researchOverview.metrics}。
              </span>
            </p>
          </section>

          <div className="mt-8">
            <a
              href={researchOverview.posterHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-cyan-300/60 bg-cyan-400/20 px-6 py-3 text-center font-bold text-cyan-50 shadow-[0_10px_24px_rgba(8,145,178,0.16)] transition hover:-translate-y-0.5 hover:border-cyan-200/80 hover:bg-cyan-300/30 hover:text-white sm:w-auto"
            >
              View Poster
            </a>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <div className="mb-6">
          <h2 className="text-2xl font-bold md:text-3xl">上台報告照片</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-300">
            於 2025 中國工業工程學會年會暨學術研討會進行研究成果發表。
          </p>
        </div>

        <ImageLightboxGallery
          items={presentationPhotos}
          gridClassName="grid gap-6 md:grid-cols-2"
          imageClassName="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
          imageSizes="(min-width: 768px) 50vw, 100vw"
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <article
            key={certificate.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="flex h-[360px] items-center justify-center border-b border-white/10 bg-slate-900/80 p-2 md:h-[480px]">
              <Image
                src={certificate.image}
                alt={certificate.title}
                className="h-full w-full rounded-xl object-contain"
                priority={index === 0}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">
                {certificate.title}
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-slate-400 md:text-base">
                {certificate.event}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
