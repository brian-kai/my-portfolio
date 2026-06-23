"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type EvidenceLink = {
  label: string;
  href: string;
};

export type EvidenceItem = {
  title: string;
  type: string;
  proofLinks: EvidenceLink[];
  whyItMatters: string;
  relatedWork: EvidenceLink[];
};

type EvidenceDrawerProps = {
  buttonClassName?: string;
  buttonLabel?: string;
  evidence: EvidenceItem;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export default function EvidenceDrawer({
  buttonClassName,
  buttonLabel = "Evidence",
  evidence,
  isOpen,
  onClose,
  onOpen,
}: EvidenceDrawerProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={onOpen}
        className={
          buttonClassName ??
          "inline-flex w-fit items-center justify-center rounded-lg border border-emerald-300/45 bg-emerald-300/[0.1] px-4 py-2 text-sm font-bold text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-300/70 hover:bg-emerald-300/[0.16] hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
        }
      >
        {buttonLabel}
      </button>

      {isOpen
        ? createPortal(
            <div
              className="z-modal fixed inset-0 bg-black/65 backdrop-blur-sm"
              onClick={onClose}
            >
              <aside
                role="dialog"
                aria-modal="true"
                aria-label={evidence.title}
                className="ml-auto flex h-full w-full max-w-xl flex-col border-l border-emerald-300/20 bg-[#07100d] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5 md:p-6">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      {evidence.type}
                    </p>
                    <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                      {evidence.title}
                    </h2>
                  </div>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    className="rounded-lg border border-white/15 bg-white/[0.08] px-3 py-2 text-sm font-bold text-slate-100 transition hover:border-emerald-300/60 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
                  >
                    Close
                  </button>
                </div>

                <div className="grid gap-6 overflow-y-auto p-5 md:p-6">
                  <section>
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Proof
                    </h3>
                    <div className="mt-3 grid gap-2">
                      {evidence.proofLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="border border-emerald-300/25 bg-emerald-300/[0.08] px-4 py-3 text-sm font-bold text-emerald-100 transition hover:border-emerald-300/55 hover:bg-emerald-300/[0.14] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Why it matters
                    </h3>
                    <p className="mt-3 text-base leading-8 text-slate-200">
                      {evidence.whyItMatters}
                    </p>
                  </section>

                  <section>
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Related work
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {evidence.relatedWork.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="border border-white/10 bg-white/[0.045] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-300/45 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </section>
                </div>
              </aside>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

type EvidenceButtonProps = {
  buttonClassName?: string;
  buttonLabel?: string;
  evidence: EvidenceItem;
};

export function EvidenceButton({
  buttonClassName,
  buttonLabel,
  evidence,
}: EvidenceButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EvidenceDrawer
      buttonClassName={buttonClassName}
      buttonLabel={buttonLabel}
      evidence={evidence}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    />
  );
}
