"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import Arrow from "./arrow-icon";
import ProofViewer, { type ProofViewerItem } from "./proof-viewer";

export type Certificate = {
  title: string;
  issuer: string;
  image: StaticImageData;
  /** Original file (PDF) opened from the viewer. */
  href?: string;
  /** Public verification page, e.g. Coursera's verify link. */
  verifyHref?: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  metric: { value: string; label: string };
  tags: string[];
};

type CertificateGridProps = {
  certificates: Certificate[];
};

const cardClass =
  "group relative overflow-hidden border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur transition hover:border-emerald-300/40 hover:bg-white/[0.07] focus-within:ring-2 focus-within:ring-emerald-300/70 motion-safe:hover:-translate-y-1";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="pointer-events-none flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-0.5 text-xs text-emerald-200"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

/** The certificate rendered as a sheet of paper, never cropped. */
function Sheet({
  certificate,
  sizes,
  className = "",
}: {
  certificate: Certificate;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none relative bg-[radial-gradient(circle_at_30%_20%,rgba(110,231,183,0.12),transparent_60%)] ${className}`}
    >
      {/* Absolute box gives the image a definite area to fit into, whatever the card height. */}
      <div className="absolute inset-3 flex items-center justify-center md:inset-4">
        <Image
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          sizes={sizes}
          className="h-auto max-h-full w-auto max-w-full rounded-sm bg-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/20 transition duration-300 motion-safe:group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

function ViewButton({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View certificate for ${title}`}
      className="absolute inset-0 z-10 cursor-zoom-in focus:outline-none"
    />
  );
}

function VerifyLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Verify ${title} credential`}
      className="link-arrow relative z-20"
    >
      Verify <Arrow kind="external" />
    </a>
  );
}

export default function CertificateGrid({ certificates }: CertificateGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const viewerItems: ProofViewerItem[] = certificates.map((certificate) => ({
    title: certificate.title,
    image: certificate.image,
    alt: `${certificate.title} certificate`,
    originalHref: certificate.href,
  }));

  if (certificates.length === 0) {
    return null;
  }

  return (
    <>
      {/* Every certificate gets the same card: a row on phones, a column from sm up. */}
      <ul data-reveal-group className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {certificates.map((certificate, index) => (
          <li key={certificate.title} className={`${cardClass} flex sm:flex-col`}>
            <ViewButton title={certificate.title} onClick={() => setSelectedIndex(index)} />

            <Sheet
              certificate={certificate}
              sizes="(min-width: 1280px) 20vw, (min-width: 640px) 44vw, 36vw"
              className="min-h-44 w-[36%] shrink-0 border-r border-white/10 sm:h-56 sm:w-full sm:border-b sm:border-r-0"
            />

            <div className="flex min-w-0 flex-1 flex-col p-4 md:p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">{certificate.issuer}</p>
              <h3 className="mt-1 text-base font-semibold leading-6 text-white md:text-lg">{certificate.title}</h3>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-3xl font-black leading-none text-emerald-300">{certificate.metric.value}</span>
                <span className="pb-0.5 text-xs leading-4 text-slate-400">{certificate.metric.label}</span>
              </div>

              <p className="mt-3 font-mono text-xs leading-5 text-slate-400">
                {certificate.issued}
                {certificate.expires ? ` – ${certificate.expires}` : ""}
                {certificate.credentialId ? (
                  <span className="block">ID {certificate.credentialId}</span>
                ) : null}
              </p>

              <div className="mt-3 hidden sm:block">
                <Tags tags={certificate.tags} />
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-4">
                <span className="link-arrow pointer-events-none">
                  View <Arrow />
                </span>
                {certificate.verifyHref ? (
                  <VerifyLink href={certificate.verifyHref} title={certificate.title} />
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>

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
