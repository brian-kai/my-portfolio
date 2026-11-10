import Link from "next/link";
import Arrow from "./arrow-icon";
import { resumeHref } from "./site-config";

// One entry per detail page, so every page can point at the next thing worth reading.
const pages = {
  llama: {
    href: "/llama-marketing-system",
    kind: "Case study · Research",
    title: "LLaMA 3 個人化行銷文案系統",
    note: "QLoRA 微調、消費者偏好分群與生成評估",
  },
  automation: {
    href: "/marketing-automation",
    kind: "Case study · Internship",
    title: "AI 行銷內容自動化",
    note: "51 個 n8n 工作流程、LLM 品質檢查與成效回饋",
  },
  intentQa: {
    href: "/intent-qa-system",
    kind: "Case study · Ongoing",
    title: "知識蒸餾 × 意圖辨識問答系統",
    note: "意圖分類準確率 88.13% → 92.76%",
  },
  awards: {
    href: "/conference",
    kind: "Awards & proof",
    title: "一份研究，五項肯定",
    note: "獎狀、頒獎典禮與研討會發表證明",
  },
  icccm: {
    href: "/icccm",
    kind: "International conference",
    title: "ICCCM 2026：LSTM 作文評分與評語生成",
    note: "獲接受發表 · 日本東京",
  },
  honor: {
    href: "/honor-student",
    kind: "Honor",
    title: "校級榮譽學生",
    note: "五大評選面向與對應經歷",
  },
  association: {
    href: "/student-association",
    kind: "Leadership",
    title: "系學會活動組長",
    note: "三場活動負責人與服務獎狀",
  },
  tutoring: {
    href: "/database-design-tutoring",
    kind: "Teaching",
    title: "資料庫設計課程助教",
    note: "SQL 輔導、設計引導與上機考流程",
  },
} as const;

export type SubpageKey = keyof typeof pages;

/** Closing block for detail pages: two related pages, then contact and résumé. Colours follow --accent. */
export default function SubpageFooter({ next }: { next: SubpageKey[] }) {
  return (
    <section aria-labelledby="keep-exploring" className="border-t border-white/10 pt-12 md:pt-16">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
        Keep exploring
      </p>
      <h2 id="keep-exploring" className="mt-3 text-2xl font-bold md:text-3xl">
        接著看
      </h2>

      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {next.map((key) => {
          const page = pages[key];
          return (
            <li key={key}>
              <Link
                href={page.href}
                className="pressable motion-reduce-transform group flex h-full flex-col border border-white/10 bg-white/[0.045] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-[rgb(var(--accent)/0.45)] hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.7)] md:p-6"
              >
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {page.kind}
                </span>
                <span className="mt-2 text-lg font-bold leading-snug text-white md:text-xl">{page.title}</span>
                <span className="mt-1.5 text-sm leading-6 text-slate-300">{page.note}</span>
                <span className="link-arrow mt-auto pt-4">
                  View <Arrow />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex flex-col gap-4 border border-white/10 bg-white/[0.03] p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <p className="text-[15px] leading-7 text-slate-200">想進一步了解這段經歷，或有合適的機會？歡迎直接與我聯繫。</p>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/#contact" className="btn btn-primary">
            聯絡我
          </Link>
          <a href={resumeHref} className="btn btn-secondary">
            Resume
          </a>
          <Link href="/" className="btn btn-ghost">
            回首頁 <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
