"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import ProofViewer, { type ProofViewerItem } from "./proof-viewer";

type Certificate = {
  title: string;
  issuer: string;
  image?: StaticImageData;
  href?: string;
  tags: string[];
};

type CertificateGridProps = {
  certificates: Certificate[];
};

export default function CertificateGrid({ certificates }: CertificateGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const viewerItems: ProofViewerItem[] = certificates
    .filter((certificate) => certificate.image)
    .map((certificate) => ({
      title: certificate.title,
      image: certificate.image as StaticImageData,
      alt: `${certificate.title} certificate`,
      originalHref: certificate.href,
    }));

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {certificates.map((certificate, index) => {
          const viewerIndex = viewerItems.findIndex(
            (item) => item.title === certificate.title,
          );

          const content = (
            <>
              <div className="pointer-events-none h-56 overflow-hidden border-b border-white/10 bg-slate-950/40 p-3 md:h-64 xl:h-72">
                {certificate.image ? (
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="h-full w-full rounded-lg object-cover object-top"
                    priority={index === 0}
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  <div className="flex h-full min-h-44 flex-col items-center justify-center rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] px-5 text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
                      PDF
                    </span>
                    <span className="mt-3 text-lg font-bold leading-7 text-white">
                      {certificate.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">
                  {certificate.issuer}
                </p>
                <h3 className="mt-2 text-base font-semibold leading-7">
                  {certificate.title}
                </h3>

                <div className="pointer-events-none mt-3 flex flex-wrap gap-2">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-1 text-xs text-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="sr-only">Select card to view certificate</span>
              </div>
            </>
          );

          if (!certificate.image && certificate.href) {
            return (
              <article
                key={certificate.title}
                className="pressable motion-reduce-transform group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.045] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus-within:ring-2 focus-within:ring-emerald-300/70"
              >
                <a
                  href={certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate for ${certificate.title}`}
                  className="absolute inset-0 z-10"
                />
                {content}
              </article>
            );
          }

          return (
            <article
              key={certificate.title}
              className="pressable motion-reduce-transform group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.045] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus-within:ring-2 focus-within:ring-emerald-300/70"
            >
              {viewerIndex >= 0 ? (
                <button
                  type="button"
                  onClick={() => setSelectedIndex(viewerIndex)}
                  aria-label={`View certificate for ${certificate.title}`}
                  className="absolute inset-0 z-10 text-left"
                />
              ) : null}
              {content}
            </article>
          );
        })}
      </div>

      {selectedIndex !== null ? (
        <ProofViewer
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
