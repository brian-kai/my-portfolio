"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type ProofViewerItem = {
  title: string;
  image: StaticImageData;
  alt?: string;
  originalHref?: string;
};

type ProofViewerProps = {
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

/** Zoom is relative to "fit": at 1 the whole image is visible. */
const MAX_ZOOM = 6;
const ZOOM_STEP = 1.5;
/** A wide image on a phone opens filling the height instead of the width, up to this much. */
const MAX_OPENING_ZOOM = 3;
const NARROW_STAGE = 640;
const SWIPE_DISTANCE = 56;

const iconPaths = {
  prev: "M12.5 4.5 7 10l5.5 5.5",
  next: "M7.5 4.5 13 10l-5.5 5.5",
  zoomIn: "M13.2 13.2 17 17M9 6.6v4.8M6.6 9h4.8",
  zoomOut: "M13.2 13.2 17 17M6.6 9h4.8",
  fit: "M4 8V4h4M12 4h4v4M16 12v4h-4M8 16H4v-4",
  external: "M6.5 13.5 14 6m-6 0h6v6",
  close: "M5 5l10 10M15 5 5 15",
};

function Icon({ name }: { name: keyof typeof iconPaths }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      {name === "zoomIn" || name === "zoomOut" ? <circle cx="9" cy="9" r="5.6" /> : null}
      <path d={iconPaths[name]} />
    </svg>
  );
}

const toolButtonClass = "btn btn-secondary btn-icon";

export default function ProofViewer({
  currentIndex,
  isOpen,
  items,
  onClose,
  onIndexChange,
}: ProofViewerProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const currentIndexRef = useRef(currentIndex);
  const hasMultipleItemsRef = useRef(false);
  const itemCountRef = useRef(items.length);
  const onIndexChangeRef = useRef(onIndexChange);
  const openingZoomRef = useRef(1);
  /** Point of the image (0–1 on each axis) to keep centred across the next zoom change. */
  const anchorRef = useRef<{ x: number; y: number } | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  /** Room available to the image inside the stage, measured so zoom can be relative to "fit". */
  const [stage, setStage] = useState<{ width: number; height: number } | null>(null);
  /** null = the opening zoom for the current image. */
  const [zoom, setZoom] = useState<number | null>(null);
  const [panned, setPanned] = useState(false);

  const activeItem = items[currentIndex];
  const hasMultipleItems = items.length > 1;
  const originalHref = activeItem?.originalHref ?? activeItem?.image.src;
  const pageLabel = hasMultipleItems ? `${currentIndex + 1} / ${items.length}` : null;

  const ratio = activeItem ? activeItem.image.width / activeItem.image.height : 1;
  const fitWidth = stage ? Math.min(stage.width, Math.floor(stage.height * ratio)) : null;
  // Fitting a wide diagram to a phone's width leaves it smaller than it was on the page,
  // so on narrow screens it opens filling the height and pans sideways instead.
  const openingZoom =
    stage && fitWidth && stage.width < NARROW_STAGE
      ? Math.min(Math.max((stage.height * ratio) / fitWidth, 1), MAX_OPENING_ZOOM)
      : 1;
  const activeZoom = zoom ?? openingZoom;
  const imageWidth = fitWidth ? Math.round(fitWidth * activeZoom) : null;
  const overflowsSideways = Boolean(stage && imageWidth && imageWidth > stage.width + 1);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
    hasMultipleItemsRef.current = hasMultipleItems;
    itemCountRef.current = items.length;
    onIndexChangeRef.current = onIndexChange;
    openingZoomRef.current = openingZoom;
  }, [currentIndex, hasMultipleItems, items.length, onIndexChange, openingZoom]);

  const moveTo = useCallback((direction: -1 | 1) => {
    if (!hasMultipleItemsRef.current) {
      return;
    }

    const itemCount = itemCountRef.current;
    const nextIndex = (currentIndexRef.current + direction + itemCount) % itemCount;
    onIndexChangeRef.current?.(nextIndex);
    anchorRef.current = null;
    setZoom(null);
    setPanned(false);
  }, []);

  /** Remember what is at the centre of the view, so zooming keeps it there. */
  const rememberCentre = useCallback(() => {
    const element = stageRef.current;
    if (!element) return;
    anchorRef.current = {
      x: (element.scrollLeft + element.clientWidth / 2) / element.scrollWidth,
      y: (element.scrollTop + element.clientHeight / 2) / element.scrollHeight,
    };
  }, []);

  const zoomBy = useCallback(
    (factor: number) => {
      rememberCentre();
      setZoom((current) =>
        Math.min(Math.max((current ?? openingZoomRef.current) * factor, 1), MAX_ZOOM),
      );
    },
    [rememberCentre],
  );

  const fitToScreen = useCallback(() => {
    anchorRef.current = null;
    setZoom(1);
  }, []);

  /** Tapping the image switches between the whole image and a readable close-up. */
  const toggleZoom = () => {
    if (activeZoom > 1) {
      fitToScreen();
      return;
    }
    rememberCentre();
    setZoom(openingZoom > 1 ? openingZoom : 2);
  };

  // Measure the stage; ResizeObserver reports once on observe and again on every resize.
  useLayoutEffect(() => {
    const element = stageRef.current;
    if (!isOpen || !element) return;

    const observer = new ResizeObserver(() => {
      const style = window.getComputedStyle(element);
      const width = element.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      const height = element.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
      setStage((current) =>
        current && current.width === width && current.height === height ? current : { width, height },
      );
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [isOpen]);

  // After the image changes size or is swapped, restore the remembered centre (or the top-left).
  useLayoutEffect(() => {
    const element = stageRef.current;
    if (!element) return;
    const anchor = anchorRef.current;
    element.scrollLeft = anchor ? anchor.x * element.scrollWidth - element.clientWidth / 2 : 0;
    element.scrollTop = anchor ? anchor.y * element.scrollHeight - element.clientHeight / 2 : 0;
  }, [imageWidth, currentIndex]);

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

      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        zoomBy(ZOOM_STEP);
        return;
      }

      if (event.key === "-") {
        event.preventDefault();
        zoomBy(1 / ZOOM_STEP);
        return;
      }

      if (event.key === "0") {
        event.preventDefault();
        fitToScreen();
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
  }, [fitToScreen, isOpen, moveTo, onClose, zoomBy]);

  if (!isOpen || !activeItem) {
    return null;
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    // A sideways swipe changes image, but only while there is nothing to pan.
    if (!start || overflowsSideways || event.changedTouches.length !== 1) return;
    const deltaX = event.changedTouches[0].clientX - start.x;
    const deltaY = event.changedTouches[0].clientY - start.y;
    if (Math.abs(deltaX) < SWIPE_DISTANCE || Math.abs(deltaX) < Math.abs(deltaY) * 1.5) return;
    moveTo(deltaX < 0 ? 1 : -1);
  };

  return createPortal(
    <div
      className="z-modal fixed inset-x-0 top-0 flex h-dvh bg-black/85 p-2 backdrop-blur-sm sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={activeItem.title}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="mx-auto flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950/90 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-white/10 px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="min-w-0 flex-1 basis-48">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Proof viewer{pageLabel ? ` · ${pageLabel}` : ""}
            </p>
            <h2 className="truncate text-sm font-bold text-white sm:text-base md:text-lg">
              {activeItem.title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {hasMultipleItems ? (
              <>
                <button
                  type="button"
                  onClick={() => moveTo(-1)}
                  className={toolButtonClass}
                  aria-label="Previous image"
                  title="Previous image (←)"
                >
                  <Icon name="prev" />
                </button>
                <button
                  type="button"
                  onClick={() => moveTo(1)}
                  className={toolButtonClass}
                  aria-label="Next image"
                  title="Next image (→)"
                >
                  <Icon name="next" />
                </button>
              </>
            ) : null}

            <button
              type="button"
              onClick={() => zoomBy(1 / ZOOM_STEP)}
              disabled={activeZoom <= 1}
              className={`${toolButtonClass} disabled:pointer-events-none disabled:opacity-40`}
              aria-label="Zoom out"
              title="Zoom out (-)"
            >
              <Icon name="zoomOut" />
            </button>
            <button
              type="button"
              onClick={() => zoomBy(ZOOM_STEP)}
              disabled={activeZoom >= MAX_ZOOM}
              className={`${toolButtonClass} disabled:pointer-events-none disabled:opacity-40`}
              aria-label="Zoom in"
              title="Zoom in (+)"
            >
              <Icon name="zoomIn" />
            </button>
            <button
              type="button"
              onClick={fitToScreen}
              className={toolButtonClass}
              aria-label="Fit to screen"
              title="Fit to screen (0)"
            >
              <Icon name="fit" />
            </button>
            <a
              href={originalHref}
              target="_blank"
              rel="noopener noreferrer"
              className={toolButtonClass}
              aria-label="Open original in a new tab"
              title="Open original"
            >
              <Icon name="external" />
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="btn btn-primary btn-icon"
              aria-label="Close"
              title="Close (Esc)"
            >
              <Icon name="close" />
            </button>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1">
          {/* Clicking the empty area around the image closes the viewer, like the backdrop does. */}
          <div
            ref={stageRef}
            className="flex min-h-0 flex-1 overflow-auto overscroll-contain p-2 sm:p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) onClose();
            }}
            onScroll={() => {
              if (!panned) setPanned(true);
            }}
            onTouchStart={(event) => {
              touchStartRef.current =
                event.touches.length === 1
                  ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
                  : null;
            }}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              key={activeItem.image.src}
              src={activeItem.image}
              alt={activeItem.alt ?? activeItem.title}
              onClick={toggleZoom}
              className={`m-auto block h-auto max-w-none rounded-lg ${activeZoom > 1 ? "cursor-zoom-out" : "cursor-zoom-in"}`}
              // Until the stage is measured, plain CSS keeps the image inside it.
              style={imageWidth ? { width: imageWidth } : { width: "auto", maxWidth: "100%", maxHeight: "100%" }}
              sizes={imageWidth ? `${imageWidth}px` : "100vw"}
            />
          </div>

          {overflowsSideways && !panned ? (
            <p className="pointer-events-none absolute inset-x-0 bottom-3 mx-auto w-fit rounded-full border border-white/15 bg-slate-950/90 px-3 py-1.5 text-xs font-semibold text-slate-200 sm:hidden">
              ← 左右滑動查看全圖 →
            </p>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
