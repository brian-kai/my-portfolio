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
        className="pressable-subtle group block w-full bg-white text-left focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
        aria-label={`View ${alt}`}
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
                : "motion-reduce-transform m-3 inline-flex w-fit items-center justify-center rounded-lg border border-emerald-300/45 bg-emerald-300/[0.1] px-5 py-2.5 text-sm font-bold text-emerald-900 transition group-hover:-translate-y-0.5 group-hover:border-emerald-300/70 group-hover:bg-emerald-300/[0.16]"
            }
          >
            {actionLabel}
          </span>
        ) : null}
        <span className="sr-only">View larger image</span>
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
