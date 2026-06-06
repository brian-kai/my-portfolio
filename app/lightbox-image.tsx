"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LightboxImageProps = {
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
  src: StaticImageData;
};

export default function LightboxImage({
  alt,
  className,
  priority,
  sizes,
  src,
}: LightboxImageProps) {
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
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block w-full bg-white text-left focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
        aria-label={`View ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          className={className}
          priority={priority}
          sizes={sizes}
        />
        <span className="sr-only">View larger image</span>
      </button>

      {isOpen
        ? createPortal(
            <div
              className="z-modal fixed inset-0 flex min-h-[100dvh] items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm md:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={() => setIsOpen(false)}
            >
              <div
                className="relative flex max-h-full max-w-7xl flex-col gap-4"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="ml-auto rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:border-emerald-300/70 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
                >
                  Close
                </button>

                <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 p-2 shadow-2xl md:p-3">
                  <Image
                    src={src}
                    alt={alt}
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
