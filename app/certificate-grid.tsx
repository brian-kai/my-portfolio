"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

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
      <div className="grid gap-5 md:grid-cols-3">
        {certificates.map((certificate, index) => {
          const content = (
            <>
              <div className="h-48 overflow-hidden border-b border-white/10 bg-slate-950/40 p-3 md:h-56 lg:h-64">
                {certificate.image ? (
                  <Image
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="h-full w-full rounded-lg object-cover object-top"
                    priority={index === 0}
                    sizes="(min-width: 768px) 33vw, 100vw"
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

              <div className="flex flex-1 flex-col p-4 md:p-5">
                <p className="text-sm font-medium text-emerald-300">
                  {certificate.issuer}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-7">
                  {certificate.title}
                </h3>

                <div className="mb-5 mt-3 flex flex-wrap gap-2">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-emerald-300/15 bg-emerald-300/[0.07] px-3 py-1 text-xs text-emerald-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto inline-flex w-fit items-center justify-center rounded-lg border border-emerald-300/45 bg-emerald-300/[0.1] px-4 py-2 text-sm font-bold text-emerald-100 shadow-[0_16px_36px_rgba(16,185,129,0.14)] transition group-hover:-translate-y-0.5 group-hover:border-emerald-300/70 group-hover:bg-emerald-300/[0.16] group-hover:text-white">
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
                className="group flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.045] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
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
              className="group flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.045] text-left shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
            >
              {content}
            </button>
          );
        })}
      </div>

      {selectedCertificate ? (
        <div
          className="z-modal fixed inset-0 flex min-h-[100dvh] items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm md:p-8"
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
              className="ml-auto rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:border-emerald-300/70 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
            >
              Close
            </button>

            <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 p-2 shadow-2xl md:p-3">
              {selectedCertificate.image ? (
                <Image
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} certificate`}
                  className="max-h-[82vh] w-auto max-w-[92vw] rounded-xl object-contain"
                  sizes="100vw"
                  priority
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
