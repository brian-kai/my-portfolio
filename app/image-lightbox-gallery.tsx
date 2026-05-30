"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LightboxItem = {
  title: string;
  image: StaticImageData;
  alt?: string;
  description?: string;
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
  variant = "cyan",
}: ImageLightboxGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<LightboxItem | null>(null);
  const styles = variantClasses[variant];

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <div className={gridClassName}>
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelectedItem(item)}
            className={
              cardClassName ??
              `group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 ${styles.hoverBorder} hover:bg-white/10 focus:outline-none focus:ring-2 ${styles.focus}`
            }
          >
            <div className={imageWrapperClassName}>
              <Image
                src={item.image}
                alt={item.alt ?? item.title}
                className={imageClassName}
                priority={index === 0}
                sizes={imageSizes}
              />
            </div>

            {showTitle || showDescription || actionLabel ? (
              <div className="flex flex-1 flex-col border-t border-white/10 p-4 md:p-5">
                {showTitle ? (
                  <h3
                    className={`text-lg font-semibold md:text-xl ${
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

                {actionLabel ? (
                  <div
                    className={`mt-auto inline-flex w-fit items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-bold transition group-hover:-translate-y-0.5 group-hover:text-white ${styles.button}`}
                  >
                    {actionLabel}
                  </div>
                ) : null}
              </div>
            ) : null}
          </button>
        ))}
      </div>

      {selectedItem
        ? createPortal(
        <div
          className="fixed inset-0 z-[999] flex min-h-[100dvh] items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative flex max-h-full max-w-7xl flex-col gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className={`ml-auto rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition ${styles.closeHover} hover:bg-white/20 focus:outline-none focus:ring-2 ${styles.closeFocus}`}
            >
              Close
            </button>

            <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 p-2 shadow-2xl md:p-3">
              <Image
                src={selectedItem.image}
                alt={selectedItem.alt ?? selectedItem.title}
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
    </>
  );
}
