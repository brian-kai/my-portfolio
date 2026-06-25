"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import ProofViewer, { type ProofViewerItem } from "./proof-viewer";

type LightboxItem = {
  title: string;
  image: StaticImageData;
  alt?: string;
  description?: string;
  originalHref?: string;
  details?: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
};

type ImageLightboxGalleryProps = {
  items: LightboxItem[];
  actionLabel?: string;
  cardClassName?: string;
  gridClassName?: string;
  imageClassName?: string;
  imageSizes?: string;
  imageWrapperClassName?: string;
  showDescription?: boolean;
  showTitle?: boolean;
  titleClassName?: string;
  variant?: "cyan" | "emerald";
};

const variantClasses = {
  cyan: {
    button:
      "border-cyan-300/50 bg-cyan-400/15 text-cyan-100 shadow-[0_10px_24px_rgba(8,145,178,0.16)] group-hover:border-cyan-200/80 group-hover:bg-cyan-300/25",
    focus: "focus:ring-cyan-300/70",
    hoverBorder: "hover:border-cyan-300/40",
    closeFocus: "focus:ring-cyan-300/70",
    closeHover: "hover:border-cyan-200/70",
  },
  emerald: {
    button:
      "border-emerald-300/45 bg-emerald-400/15 text-emerald-100 shadow-[0_10px_24px_rgba(16,185,129,0.12)] group-hover:border-emerald-200/80 group-hover:bg-emerald-300/25",
    focus: "focus:ring-emerald-300/70",
    hoverBorder: "hover:border-emerald-300/40",
    closeFocus: "focus:ring-emerald-300/70",
    closeHover: "hover:border-emerald-200/70",
  },
};

export default function ImageLightboxGallery({
  items,
  actionLabel,
  cardClassName,
  gridClassName = "grid gap-6",
  imageClassName = "w-full rounded-xl object-contain",
  imageSizes = "100vw",
  imageWrapperClassName = "",
  showDescription = false,
  showTitle = false,
  titleClassName = "text-lg font-semibold md:text-xl",
  variant = "cyan",
}: ImageLightboxGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const styles = variantClasses[variant];
  const interactiveCardClassName = "pressable motion-reduce-transform";
  const viewerItems: ProofViewerItem[] = items.map((item) => ({
    title: item.title,
    image: item.image,
    alt: item.alt,
    originalHref: item.originalHref,
  }));

  return (
    <>
      <div className={gridClassName}>
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={
              cardClassName
                ? `${interactiveCardClassName} ${cardClassName}`
                : `${interactiveCardClassName} group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 ${styles.hoverBorder} hover:bg-white/10 focus:outline-none focus:ring-2 ${styles.focus}`
            }
          >
            <div className={imageWrapperClassName}>
              <Image
                src={item.image}
                alt={item.alt ?? item.title}
                className={`motion-reduce-transform ${imageClassName}`}
                priority={index === 0}
                sizes={imageSizes}
              />
            </div>

            {showTitle || showDescription || item.details || actionLabel ? (
              <div className="flex flex-1 flex-col border-t border-white/10 p-4 md:p-5">
                {showTitle ? (
                  <h3
                    className={`${titleClassName} ${
                      actionLabel && !showDescription ? "mb-6" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                ) : null}

                {showDescription && item.description ? (
                  <p className="mb-6 mt-2 text-[15px] leading-7 text-slate-300 md:text-base">
                    {item.description}
                  </p>
                ) : null}

                {item.details ? (
                  <dl className="mb-6 grid gap-3">
                    {item.details.map((detail) => (
                      <div
                        key={detail.label}
                        className={`rounded-xl border px-4 py-3 ${
                          detail.highlight
                            ? "border-emerald-300/45 bg-emerald-300/[0.12]"
                            : "border-white/10 bg-white/[0.045]"
                        }`}
                      >
                        <dt className="text-xs font-semibold text-slate-400">
                          {detail.label}
                        </dt>
                        <dd
                          className={`mt-1 font-bold ${
                            detail.highlight
                              ? "text-emerald-100"
                              : "text-slate-100"
                          }`}
                        >
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {actionLabel ? (
                  <div
                    className={`motion-reduce-transform mt-auto inline-flex w-fit items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-bold transition group-hover:-translate-y-0.5 group-hover:text-white ${styles.button}`}
                  >
                    {actionLabel}
                  </div>
                ) : null}
              </div>
            ) : null}
          </button>
        ))}
      </div>

      {selectedIndex !== null ? (
        <ProofViewer
          closeFocusClassName={styles.closeFocus}
          closeHoverClassName={styles.closeHover}
          currentIndex={selectedIndex}
          isOpen
          items={viewerItems}
          onClose={() => setSelectedIndex(null)}
          onIndexChange={setSelectedIndex}
        />
      ) : null}
    </>
  );
}
