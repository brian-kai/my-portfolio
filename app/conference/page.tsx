import Image from "next/image";
import Link from "next/link";
import bestPaperCertificate from "./2025-11-29-[CIIE2025最佳論文獎]基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式.png";
import presentationCertificate from "./2025-11-29-[CIIE2025發表證明]基於LLaMA 3模型結合消費者偏好生成個人化產品行銷文案模式.png";

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
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950/80 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            Kevin Huang
          </Link>

          <Link
            href="/#conference"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
          >
            回首頁
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Conference
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          研討會獎狀
        </h1>

        <p className="mt-5 max-w-3xl leading-8 text-slate-300">
          CIIE 2025 研討會發表與獲獎證明，包含最佳論文獎與發表證明。
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-20">
        {certificates.map((certificate, index) => (
          <article
            key={certificate.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="flex min-h-[70vh] items-center justify-center border-b border-white/10 bg-slate-900/80 p-4 md:p-8">
              <Image
                src={certificate.image}
                alt={certificate.title}
                className="max-h-[82vh] w-full rounded-xl object-contain"
                priority={index === 0}
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold">{certificate.title}</h2>
              <p className="mt-2 leading-7 text-slate-400">
                {certificate.event}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
