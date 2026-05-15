"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Certificate = {
  title: string;
  issuer: string;
  image: StaticImageData;
  href?: string;
  tags: string[];
};

type CertificateGridProps = {
  certificates: Certificate[];
};

export default function CertificateGrid({ certificates }: CertificateGridProps) {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  useEffect(() => {
    if (!selectedCertificate) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {certificates.map((certificate, index) => {
          const content = (
            <>
              <div className="h-52 overflow-hidden border-b border-white/10 bg-slate-950/40 p-3 md:h-auto">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-full w-full rounded-xl object-cover object-top md:aspect-[4/3] md:h-auto"
                  priority={index === 0}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="p-4 md:p-6">
                <p className="text-sm font-medium text-cyan-300">
                  {certificate.issuer}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-7 md:text-xl md:leading-8">
                  {certificate.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 inline-flex w-fit items-center justify-center rounded-lg border border-cyan-300/50 bg-cyan-400/15 px-5 py-2.5 text-sm font-bold text-cyan-100 shadow-[0_10px_24px_rgba(8,145,178,0.16)] transition group-hover:-translate-y-0.5 group-hover:border-cyan-200/80 group-hover:bg-cyan-300/25 group-hover:text-white md:mt-5">
                  View Certificate
                </div>
              </div>
            </>
          );

          if (certificate.href) {
            return (
              <a
                key={certificate.title}
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] text-left transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={certificate.title}
              type="button"
              onClick={() => setSelectedCertificate(certificate)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] text-left transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              {content}
            </button>
          );
        })}
      </div>

      {selectedCertificate ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative flex max-h-full max-w-7xl flex-col gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="ml-auto rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:border-cyan-200/70 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
            >
              Close
            </button>

            <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 p-2 shadow-2xl md:p-3">
              <Image
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate`}
                className="max-h-[82vh] w-auto max-w-[92vw] rounded-xl object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
