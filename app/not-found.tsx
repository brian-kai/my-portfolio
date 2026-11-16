import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "./arrow-icon";
import SiteBrand from "./site-brand";

export const metadata: Metadata = {
  title: "找不到頁面",
};

// Where a lost visitor most likely wanted to go.
const destinations = [
  { href: "/#projects", label: "Projects", note: "LLM 微調、研究論文與 AI 自動化專案" },
  { href: "/#experience", label: "Experience", note: "學歷、實習、助教經歷與證照" },
  { href: "/#skills", label: "Skills", note: "技術與實際用到它的作品" },
  { href: "/#contact", label: "Contact", note: "Email、LinkedIn 與履歷" },
];

/** Shown for every unmatched URL; keeps the site's nav and offers the main ways back in. */
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <SiteBrand />
          <Link href="/" className="btn btn-secondary btn-sm shrink-0">
            ← Home
          </Link>
        </div>
      </nav>
      {/* Where the "skip to content" link in the root layout lands. */}
      <span id="content" tabIndex={-1} />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 pb-16 pt-28 md:pt-32">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Error 404</p>
        <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">找不到這個頁面</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          網址可能打錯了，或是這個頁面已經搬家。可以回到首頁，或從下面的入口繼續看。
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/" className="btn btn-primary btn-lg">
            回首頁
          </Link>
          <Link href="/#projects" className="btn btn-secondary btn-lg">
            看作品 <Arrow />
          </Link>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {destinations.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                className="group flex h-full items-center justify-between gap-4 border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur transition hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
              >
                <span className="min-w-0">
                  <span className="block text-base font-bold text-white">{destination.label}</span>
                  <span className="mt-0.5 block text-sm leading-6 text-slate-400">{destination.note}</span>
                </span>
                <Arrow className="arrow-accent" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
