import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow, { arrowFor } from "../arrow-icon";
import ActiveSectionNav from "../active-section-nav";
import { honorSharing } from "../resume-highlights";
import ImageLightboxGallery from "../image-lightbox-gallery";
import LightboxImage from "../lightbox-image";

import honorStudentCertificate from "../image/honor-student-certificate.png";
import honorStudentPortrait from "../image/honor-student-portrait.jpg";
import honorStudentPortraitAlt from "../image/honor-student-portrait-alt.jpg";
import honorStudentSharingSession from "../image/honor-student-sharing-session.jpg";

const photos = [
  {
    title: "Recognition Portrait",
    image: honorStudentPortrait,
    alt: "Kai-Chun Huang wearing honor student graduation regalia",
  },
  {
    title: "Graduation Honor Record",
    image: honorStudentPortraitAlt,
    alt: "Kai-Chun Huang in honor student regalia posing for a portrait",
  },
];

// The five evaluation criteria are quoted from the certificate; the evidence under each comes from
// the honor-student application (2026.03) and the rest of this site.
const criteria = [
  {
    key: "01",
    title: "學術成就",
    en: "Academic Achievement",
    evidence: [
      { text: "LLaMA 3 畢業專題：CIIE 2025 最佳論文獎等 5 項獎項", href: "/llama-marketing-system#awards" },
      { text: "擔任畢業專題組長，規劃研究進度與分工" },
      { text: "資料庫設計、決策與數據分析 課程優異表現" },
    ],
  },
  {
    key: "02",
    title: "跨域學習",
    en: "Cross-domain Learning",
    evidence: [
      { text: "修習「工業感測與聯網實作」「人工智慧應用」，完成 LSTM 用電趨勢預測專題", href: "/file/electricity-usage-trend-analysis-poster.pdf" },
      { text: "Google Data Analytics 專業證照：SQL、R、Python 資料分析", href: "/#certificates" },
    ],
  },
  {
    key: "03",
    title: "國際參與",
    en: "International Engagement",
    evidence: [
      { text: "與指導教授合作之論文獲 ICCCM 2026 國際研討會接受（日本東京）", href: "/icccm" },
    ],
  },
  {
    key: "04",
    title: "專業實習",
    en: "Professional Practice",
    evidence: [
      { text: "國科會研究計畫助理：程式碼版本差異註解生成模式", href: "/#experience" },
      { text: "資料庫設計、決策與數據分析 課程助教", href: "/database-design-tutoring" },
    ],
  },
  {
    key: "05",
    title: "公共服務與領導",
    en: "Service & Leadership",
    evidence: [
      { text: "系學會活動組長：抽直屬、聖誕傳情副召與文化季攤販長", href: "/student-association" },
      { text: "國中補習班理化助教：協助課堂與課業輔導" },
    ],
  },
];

const sharingTopics = ["課程規劃", "競賽經驗", "研究專題入門"];

const honorNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Criteria", href: "#criteria" },
  { label: "Sharing", href: "#sharing-session" },
  { label: "Proof", href: "#proof" },
];

export const metadata: Metadata = {
  title: "校級榮譽學生入選",
  description:
    "逢甲大學 115 級榮譽學生入選紀錄：學術成就、跨域學習、國際參與、專業實習與公共服務領導五大面向的對應經歷，以及榮譽學生經驗分享會、官方證書與照片。",
};

const cardClass = "border border-amber-100/15 bg-amber-100/[0.04] backdrop-blur";

/** Keeps the arrow on the same line as the last two characters, so it never wraps alone. */
function GluedArrow({ text, href }: { text: string; href: string }) {
  const head = text.slice(0, -2);
  const tail = text.slice(-2);
  return (
    <>
      {head}
      <span className="whitespace-nowrap">
        {tail}
        <Arrow kind={arrowFor(href)} className="arrow-accent ml-1 inline-block align-[-0.15em]" />
      </span>
    </>
  );
}
const eyebrowClass = "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-200";

export default function HonorStudentPage() {
  return (
    <main className="theme-amber relative min-h-screen overflow-x-hidden bg-[#080705] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(245,158,11,0.15),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(250,204,21,0.075),transparent_24%),radial-gradient(circle_at_72%_64%,rgba(16,185,129,0.07),transparent_30%),linear-gradient(180deg,#080705_0%,#0d0b08_48%,#080705_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(251,191,36,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <nav className="z-nav fixed inset-x-0 top-0 border-b border-amber-100/10 bg-[#080705]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/#experience"
            className="btn btn-secondary btn-sm shrink-0 md:hidden"
          >
            ← Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ActiveSectionNav items={honorNavItems} variant="amber" />
            <Link
              href="/#experience"
              className="btn btn-secondary btn-sm"
            >
              Back to Honors
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-28 md:pt-32">
        <section id="overview" className="scroll-mt-24 pb-14 md:scroll-mt-28 md:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className={eyebrowClass}>Honors & Recognition</p>
                <span className="rounded-full border border-amber-300/45 bg-amber-300/[0.1] px-3 py-1 font-mono text-xs font-bold text-amber-100">
                  2026.06
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                校級榮譽學生
              </h1>
              <p className="mt-3 text-lg font-semibold text-amber-100 md:text-xl">逢甲大學 115 級「榮譽學生」</p>

              <blockquote className="mt-8 border-l-2 border-amber-300/60 pl-5">
                <p className="text-base leading-8 text-stone-200 md:text-lg md:leading-9">
                  「於學術成就、跨域學習、國際參與、專業實習及公共服務與領導等
                  <span className="font-bold text-amber-200">五大評選面向</span>
                  中，取得
                  <span className="font-bold text-amber-200">兩項以上之卓越成果</span>
                  ，經本校評選，特授予 115 級『榮譽學生』殊榮。」
                </p>
                <footer className="mt-2 text-sm text-stone-400">— 逢甲大學榮譽學生證書</footer>
              </blockquote>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="#criteria"
                  className="btn btn-primary"
                >
                  看五大面向 <Arrow kind="down" />
                </Link>
                <Link
                  href="#proof"
                  className="btn btn-secondary"
                >
                  官方證書 <Arrow />
                </Link>
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-sm overflow-hidden border border-amber-200/25 shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:max-w-none">
              <Image
                src={honorStudentPortrait}
                alt="黃凱浚身著榮譽學生畢業服"
                priority
                sizes="(min-width: 1024px) 420px, 384px"
                className="aspect-[4/5] h-auto w-full object-cover object-[50%_15%]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080705]/95 via-[#080705]/60 to-transparent px-5 pb-4 pt-14">
                <span className="block text-lg font-bold">黃凱浚 Kai-Chun Huang</span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-200">
                  工業工程與系統管理學系
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="criteria" className="scroll-mt-24 border-t border-amber-100/10 py-14 md:scroll-mt-28 md:py-20">
          <p className={eyebrowClass}>Five criteria</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">五大評選面向 × 我的對應經歷</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-400">
            評選面向依證書所列；各面向下方為申請書中對應的經歷，點選可查看詳細內容。
          </p>
          {/* Six-column grid on xl: 01–03 take a third each, 04–05 split the second row, so no slot is left empty. */}
          <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {criteria.map((criterion) => (
              <li
                key={criterion.key}
                className={`${cardClass} flex flex-col p-5 md:p-6 md:last:col-span-2 xl:col-span-2 xl:[&:nth-child(n+4)]:col-span-3`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-2xl font-black text-amber-300/80">{criterion.key}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{criterion.title}</h3>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">{criterion.en}</p>
                  </div>
                </div>
                <ul className="mt-5 grid gap-2.5">
                  {criterion.evidence.map((item) => (
                    <li key={item.text} className="border-l border-amber-200/40 pl-3 text-sm leading-6 text-stone-200 break-keep [text-wrap:pretty]">
                      {item.href ? (
                        <Link href={item.href} className="group transition hover:text-amber-100">
                          <GluedArrow text={item.text} href={item.href} />
                        </Link>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="sharing-session" className="scroll-mt-24 border-t border-amber-100/10 py-14 md:scroll-mt-28 md:py-20">
          <p className={eyebrowClass}>After the honor</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">入選之後：把經驗分享給新生</h2>
          <article className="mt-8 grid overflow-hidden border border-amber-300/30 bg-[linear-gradient(135deg,rgba(252,211,77,0.1),rgba(255,255,255,0.02)_55%)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
            <figure className="relative border-b border-amber-300/20 lg:border-b-0 lg:border-r">
              <LightboxImage
                src={honorStudentSharingSession}
                alt="黃凱浚在榮譽學生經驗分享會上，向學弟妹介紹榮譽學生五大領域"
                className="aspect-[4/3] h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                sizes="(min-width: 1280px) 640px, (min-width: 1024px) 52vw, calc(100vw - 48px)"
              />
              <figcaption className="pointer-events-none px-5 py-3 text-sm leading-6 text-stone-300 sm:absolute sm:inset-x-0 sm:bottom-0 sm:bg-gradient-to-t sm:from-[#080705]/95 sm:via-[#080705]/60 sm:to-transparent sm:pb-4 sm:pt-14 sm:text-stone-200">
                學長姐經驗分享現場：以「榮譽學生五大領域」為題，分享如何選擇適合自己的方向。
              </figcaption>
            </figure>

            <div className="flex min-w-0 flex-col p-6 md:p-8">
              <p className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-amber-200">
                <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                {honorSharing.badge}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white [text-wrap:balance] md:text-3xl">{honorSharing.title}</h3>
              <p className="mt-2 font-mono text-sm text-stone-400">{honorSharing.meta}</p>
              <p className="mt-5 text-base leading-8 text-stone-200 [text-wrap:pretty]">{honorSharing.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {sharingTopics.map((topic) => (
                  <span key={topic} className="border border-amber-200/30 bg-amber-200/[0.08] px-3 py-1.5 text-sm font-semibold text-amber-100">
                    {topic}
                  </span>
                ))}
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-px border border-amber-100/15 bg-amber-100/15 lg:mt-auto">
                <div className="flex flex-col bg-[#0d0b08] px-5 py-5 sm:px-6">
                  <dt className="order-last mt-1 text-sm text-stone-400">位大一新生</dt>
                  <dd className="whitespace-nowrap text-3xl font-black text-amber-300 sm:text-4xl">≈100</dd>
                </div>
                <div className="flex flex-col bg-[#0d0b08] px-5 py-5 sm:px-6">
                  <dt className="order-last mt-1 text-sm text-stone-400">分享主題</dt>
                  <dd className="text-3xl font-black text-white sm:text-4xl">{sharingTopics.length}</dd>
                </div>
              </dl>
            </div>
          </article>
        </section>

        <section id="proof" className="scroll-mt-24 border-t border-amber-100/10 py-14 md:scroll-mt-28 md:py-20">
          <p className={eyebrowClass}>Official proof</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">官方證書與紀錄照片</h2>
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <figure className={`${cardClass} p-3 md:p-4`}>
              <LightboxImage
                src={honorStudentCertificate}
                alt="逢甲大學榮譽學生證書"
                className="h-auto w-full bg-white object-contain"
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, calc(100vw - 48px)"
              />
              <figcaption className="mt-3 text-sm leading-6 text-stone-400">
                逢甲大學正式核發之榮譽學生證書（點圖可放大）。
              </figcaption>
            </figure>
            <ImageLightboxGallery
              items={photos}
              actionLabel="View Photo"
              cardClassName="group flex h-full flex-col overflow-hidden border border-amber-100/15 bg-amber-100/[0.04] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-amber-200/40 hover:bg-amber-100/[0.07] focus:outline-none focus:ring-2 focus:ring-amber-200/70"
              gridClassName="grid gap-6 sm:grid-cols-2"
              imageClassName="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
              imageSizes="(min-width: 1280px) 340px, (min-width: 640px) 50vw, 100vw"
              imageWrapperClassName="h-[360px] overflow-hidden border-b border-amber-100/10 bg-stone-950/50 md:h-[420px]"
              showTitle
              variant="amber"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
