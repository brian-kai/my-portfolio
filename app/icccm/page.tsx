import Image from "next/image";
import Link from "next/link";

import proofPage1 from "../image/KY1012-A ICCCM 2026 acceptance notification-Abstract_頁面_1.png";
import proofPage2 from "../image/KY1012-A ICCCM 2026 acceptance notification-Abstract_頁面_2.png";

const details = [
  {
    label: "Topic",
    value:
      "An Objective Essay Scoring and Commentary Generation System with LSTM Model",
  },
  {
    label: "Conference",
    value:
      "The 14th International Conference on Computer and Communications Management",
  },
  {
    label: "Date",
    value: "July 24-26, 2026",
  },
  {
    label: "Location",
    value: "Tokyo, Japan",
  },
];

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
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_14%_22%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(139,92,246,0.24),transparent_34%),linear-gradient(135deg,#020617_0%,#071329_45%,#111827_100%)] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <nav className="relative z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur">
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
            href="/#experience"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-white md:inline-flex"
          >
            Back
          </Link>
        </div>
      </nav>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Conference Experience
        </p>

        <h1 className="max-w-5xl text-3xl font-bold leading-tight md:text-5xl">
          ICCCM 2026 Presentation Acceptance
        </h1>

        <p className="mt-5 max-w-5xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
          論文摘要 AN OBJECTIVE ESSAY SCORING AND COMMENTARY GENERATION SYSTEM
          WITH LSTM MODEL 獲 The 14th International Conference on Computer and
          Communications Management 接受，將於 2026 年 7 月 24-26
          日在日本東京發表。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 md:p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {detail.label}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-slate-200 md:text-base">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2 md:pb-20">
        {proofs.map((proof, index) => (
          <article
            key={proof.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="flex h-[420px] items-center justify-center border-b border-white/10 bg-slate-900/80 p-2 md:h-auto md:min-h-[640px]">
              <Image
                src={proof.image}
                alt={proof.title}
                className="max-h-full w-full rounded-xl object-contain md:max-h-[720px]"
                priority={index === 0}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="p-5 md:p-6">
              <h2 className="text-xl font-semibold md:text-2xl">
                {proof.title}
              </h2>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
