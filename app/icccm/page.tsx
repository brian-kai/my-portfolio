import Image from "next/image";
import Link from "next/link";

import proofPage1 from "../image/KY1012-A ICCCM 2026 acceptance notification-Abstract_頁面_1.png";
import proofPage2 from "../image/KY1012-A ICCCM 2026 acceptance notification-Abstract_頁面_2.png";

const proofs = [
  {
    title: "ICCCM 2026 Acceptance Notification - Page 1",
    image: proofPage1,
  },
  {
    title: "ICCCM 2026 Acceptance Notification - Page 2",
    image: proofPage2,
  },
];

export default function IcccmPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_14%_22%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(139,92,246,0.24),transparent_34%),linear-gradient(135deg,#020617_0%,#071329_45%,#111827_100%)] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <nav className="relative z-10 border-b border-white/10 bg-slate-950/80 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            Kevin Huang
          </Link>

          <Link
            href="/#experience"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white"
          >
            Back
          </Link>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Conference Experience
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          ICCCM 2026 Presentation Acceptance
        </h1>

        <p className="mt-5 max-w-4xl leading-8 text-slate-300">
          論文摘要 AN OBJECTIVE ESSAY SCORING AND COMMENTARY GENERATION SYSTEM
          WITH LSTM MODEL 獲 The 14th International Conference on Computer and
          Communications Management 接受，將於 2026 年 7 月 24-26
          日在日本東京發表。
        </p>
      </section>

      <section className="relative z-10 mx-auto grid max-w-5xl gap-8 px-6 pb-20">
        {proofs.map((proof, index) => (
          <article
            key={proof.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="flex min-h-[70vh] items-center justify-center border-b border-white/10 bg-slate-900/80 p-4 md:p-8">
              <Image
                src={proof.image}
                alt={proof.title}
                className="max-h-[82vh] w-full rounded-xl object-contain"
                priority={index === 0}
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold">{proof.title}</h2>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
