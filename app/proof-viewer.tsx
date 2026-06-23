"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type ProofViewerItem = {
  title: string;
  image: StaticImageData;
  alt?: string;
  originalHref?: string;
};

type ProofViewerProps = {
  closeFocusClassName?: string;
  closeHoverClassName?: string;
  currentIndex: number;
  isOpen: boolean;
  items: ProofViewerItem[];
  onClose: () => void;
  onIndexChange?: (index: number) => void;
};

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export default function ProofViewer({
  closeFocusClassName = "focus:ring-emerald-300/70",
  closeHoverClassName = "hover:border-emerald-300/70",
  currentIndex,
  isOpen,
  items,
  onClose,
  onIndexChange,
}: ProofViewerProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const currentIndexRef = useRef(currentIndex);
  const hasMultipleItemsRef = useRef(false);
  const itemCountRef = useRef(items.length);
  const onIndexChangeRef = useRef(onIndexChange);
  const [zoom, setZoom] = useState(1);

  const activeItem = items[currentIndex];
  const hasMultipleItems = items.length > 1;
  const originalHref = activeItem?.originalHref ?? activeItem?.image.src;

  const pageLabel = useMemo(() => {
    if (!hasMultipleItems) {
      return null;
    }

    return `${currentIndex + 1} / ${items.length}`;
  }, [currentIndex, hasMultipleItems, items.length]);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
    hasMultipleItemsRef.current = hasMultipleItems;
    itemCountRef.current = items.length;
    onIndexChangeRef.current = onIndexChange;
  }, [currentIndex, hasMultipleItems, items.length, onIndexChange]);

  const moveTo = useCallback((direction: -1 | 1) => {
    if (!hasMultipleItemsRef.current) {
      return;
    }

    const itemCount = itemCountRef.current;
    const nextIndex = (currentIndexRef.current + direction + itemCount) % itemCount;
    onIndexChangeRef.current?.(nextIndex);
    setZoom(1);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveTo(-1);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveTo(1);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ??
          [],
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, moveTo, onClose]);

  if (!isOpen || !activeItem) {
    return null;
  }

  return createPortal(
    <div
      className="z-modal fixed inset-0 flex min-h-[100dvh] items-center justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur-sm md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.title}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative flex max-h-full w-full max-w-7xl flex-col gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-slate-950/88 p-3 shadow-2xl md:p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Proof viewer {pageLabel ? `| ${pageLabel}` : ""}
              </p>
              <h2 className="mt-1 truncate text-base font-bold text-white md:text-lg">
                {activeItem.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {hasMultipleItems ? (
                <>
                  <button
                    type="button"
                    onClick={() => moveTo(-1)}
                    className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Previous image"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => moveTo(1)}
                    className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Next image"
                  >
                    Next
                  </button>
                </>
              ) : null}

              <button
                type="button"
                onClick={() => setZoom((current) => Math.min(current + 0.25, 2.5))}
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Zoom in"
              >
                Zoom +
              </button>
              <button
                type="button"
                onClick={() => setZoom((current) => Math.max(current - 0.25, 1))}
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Zoom out"
              >
                Zoom -
              </button>
              <button
                type="button"
                onClick={() => setZoom(1)}
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Reset
              </button>
              <a
                href={originalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Open original
              </a>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className={`rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition ${closeHoverClassName} hover:bg-white/20 focus:outline-none focus:ring-2 ${closeFocusClassName}`}
              >
                Close
              </button>
            </div>
          </div>

          <div className="max-h-[78vh] overflow-auto rounded-xl border border-white/10 bg-slate-950/80 p-2 md:p-3">
            <Image
              src={activeItem.image}
              alt={activeItem.alt ?? activeItem.title}
              className="mx-auto h-auto max-w-none rounded-lg object-contain transition-transform duration-200"
              style={{
                maxHeight: zoom === 1 ? "72vh" : "none",
                width: `${zoom * 100}%`,
              }}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
