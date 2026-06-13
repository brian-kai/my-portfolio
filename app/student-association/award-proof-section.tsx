"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import studentAssociationAward from "../image/student-association-award.png";

const proofItems = [
  ["Position", "活動組長"],
  ["Evidence", "服務獎狀"],
  ["Context", "工業工程與系統管理學系系學會"],
];

export default function AwardProofSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section
      id="award"
      className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-6 pb-14 md:scroll-mt-28 md:pb-16"
    >
      <div className="mb-7">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/80">
          Official proof
        </p>
        <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">
          系學會正式證明
        </h2>
      </div>

      <div className="mx-auto w-full max-w-full overflow-hidden rounded-lg border border-amber-200/20 bg-[#15120b]/88 shadow-[0_24px_80px_rgba(0,0,0,0.22)] lg:w-fit">
        <div className="grid lg:grid-cols-[auto_minmax(19rem,23rem)]">
          <div className="flex min-w-0 items-start justify-start bg-white p-0">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="block w-fit max-w-full bg-white text-left focus:outline-none focus:ring-2 focus:ring-amber-200/80"
              aria-label="View 系學獎狀"
            >
              <Image
                src={studentAssociationAward}
                alt="系學獎狀"
                className="h-auto max-h-[560px] w-auto max-w-full object-contain"
                priority
                sizes="(min-width: 1024px) 400px, calc(100vw - 48px)"
              />
              <span className="sr-only">View larger image</span>
            </button>
          </div>

          <aside className="flex flex-col border-t border-amber-200/15 p-5 md:p-6 lg:border-l lg:border-t-0">
            <span className="w-fit border border-amber-200/25 bg-amber-200/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-amber-100">
              Leadership Evidence
            </span>

            <h3 className="mt-5 text-2xl font-black leading-tight text-white">
              系學獎狀
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-slate-300">
              系學會經歷的正式獎狀證明，補強活動規劃、團隊協作、現場執行與服務貢獻。
            </p>

            <div className="mt-5 grid gap-2.5 text-sm leading-6 text-slate-300">
              {proofItems.map(([label, value]) => (
                <div
                  key={label}
                  className="border-l border-amber-200/35 bg-white/[0.035] px-4 py-2.5"
                >
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200/80">
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-slate-100">{value}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-7 inline-flex w-fit items-center justify-center rounded-lg border border-amber-200/55 bg-amber-200/[0.1] px-5 py-2.5 text-sm font-bold text-amber-50 shadow-[0_14px_32px_rgba(245,158,11,0.12)] transition hover:-translate-y-0.5 hover:border-amber-200/80 hover:bg-amber-200/[0.16] hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-200/70"
            >
              View Award
            </button>
          </aside>
        </div>
      </div>

      {isOpen
        ? createPortal(
            <div
              className="z-modal fixed inset-0 flex min-h-[100dvh] items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm md:p-8"
              role="dialog"
              aria-modal="true"
              aria-label="系學獎狀"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="relative flex max-h-full max-w-7xl flex-col gap-4"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="ml-auto rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:border-amber-200/70 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                >
                  Close
                </button>

                <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 p-2 shadow-2xl md:p-3">
                  <Image
                    src={studentAssociationAward}
                    alt="系學獎狀"
                    className="max-h-[82vh] w-auto max-w-[92vw] rounded-xl object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
