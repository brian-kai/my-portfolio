import Image from "next/image";
import Link from "next/link";
import presentationPhotoOne from "../image/67C8471D-8089-417B-B3A5-A69F0B04C706.jpg";
import presentationPhotoTwo from "../image/B1EE1CB0-4CD0-4963-9E2C-D2FFDC5E463C.jpg";
import bestPaperCertificate from "./2025-11-29-[CIIE2025最佳論文獎]基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式.png";
import presentationCertificate from "./2025-11-29-[CIIE2025發表證明]基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式.png";

const presentationPhotos = [
  {
    image: presentationPhotoOne,
    alt: "2025 中國工業工程學會年會上台報告照片一",
  },
  {
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

export default function ConferencePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white [overflow-wrap:anywhere]">
      <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4 md:justify-between">
          <Link
            href="/"
            className="absolute left-6 rounded-full border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white md:hidden"
          >
            &lt;- Home
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | 黃凱浚 Kai-Chun Huang
            </span>
          </Link>

          <Link
            href="/#conference"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white md:inline-flex"
          >
            回首頁
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
        <div className="mb-6">
          <h2 className="text-2xl font-bold md:text-3xl">上台報告照片</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-300">
            於 2025 中國工業工程學會年會暨學術研討會進行研究成果發表。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {presentationPhotos.map((photo, index) => (
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
                className="aspect-[4/3] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                priority={index === 0}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <article
            key={certificate.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="flex h-[420px] items-center justify-center border-b border-white/10 bg-slate-900/80 p-2 md:h-auto md:min-h-[640px]">
              <Image
                src={certificate.image}
                alt={certificate.title}
                className="max-h-full w-full rounded-xl object-contain md:max-h-[720px]"
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
