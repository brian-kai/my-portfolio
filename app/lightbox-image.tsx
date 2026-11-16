"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import ProofViewer from "./proof-viewer";

type LightboxImageProps = {
  actionClassName?: string;
  actionLabel?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
  src: StaticImageData;
  originalHref?: string;
};

export default function LightboxImage({
  actionClassName,
  actionLabel,
  alt,
  className,
  priority,
  sizes,
  src,
  originalHref,
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="pressable-subtle group relative block w-full cursor-zoom-in bg-white text-left focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
        aria-label={`放大檢視：${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          className={className ? `motion-reduce-transform ${className}` : undefined}
          priority={priority}
          sizes={sizes}
        />
        {actionLabel ? (
          <span
            className={
              actionClassName
                ? `motion-reduce-transform ${actionClassName}`
                : "btn btn-secondary btn-sm btn-in-card m-3 w-fit"
            }
          >
            {actionLabel}
          </span>
        ) : null}
        {/* Always visible, so the image reads as zoomable without hovering (and on touch screens). */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-2 flex h-9 w-9 items-center justify-center border border-white/20 bg-[#070a0d]/85 text-white shadow-lg shadow-black/30 transition group-hover:border-[rgb(var(--accent)/0.7)] group-hover:text-[rgb(var(--accent))]"
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <circle cx="9" cy="9" r="5.6" />
            <path d="M13.2 13.2 17 17M9 6.6v4.8M6.6 9h4.8" />
          </svg>
        </span>
        <span className="sr-only">放大檢視</span>
      </button>

      {isOpen ? (
        <ProofViewer
          currentIndex={0}
          isOpen
          items={[{ title: alt, image: src, alt, originalHref }]}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}
