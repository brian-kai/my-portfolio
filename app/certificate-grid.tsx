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
  priority,
  className = "",
}: {
  certificate: Certificate;
  sizes: string;
  priority?: boolean;
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
          priority={priority}
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

  const [featured, ...rest] = certificates;

  if (!featured) {
    return null;
  }

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <article data-reveal className={`${cardClass} flex flex-col sm:flex-row`}>
          <ViewButton title={featured.title} onClick={() => setSelectedIndex(0)} />

          <Sheet
            certificate={featured}
            priority
            sizes="(min-width: 640px) 18rem, 90vw"
            className="h-80 border-b border-white/10 sm:h-auto sm:min-h-[26rem] sm:w-[46%] sm:shrink-0 sm:border-b-0 sm:border-r"
          />

          <div className="flex flex-1 flex-col p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">
                {featured.issuer}
              </p>
              <span className="shrink-0 border border-amber-300/40 bg-amber-300/[0.1] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-100">
                Featured
              </span>
            </div>
            <h3 className="mt-2 text-xl font-bold leading-8 text-white md:text-2xl md:leading-9">
              {featured.title}
            </h3>

            <div className="mt-5 flex items-end gap-3">
              <span className="font-mono text-5xl font-bold leading-none text-emerald-300 md:text-6xl">
                {featured.metric.value}
              </span>
              <span className="pb-1 text-sm leading-5 text-slate-400">{featured.metric.label}</span>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/10 pt-5 text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Issued</dt>
                <dd className="mt-1 font-semibold text-slate-200">{featured.issued}</dd>
              </div>
              {featured.expires ? (
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Valid until</dt>
                  <dd className="mt-1 font-semibold text-slate-200">{featured.expires}</dd>
                </div>
              ) : null}
              {featured.credentialId ? (
                <div className="col-span-2">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Credential ID</dt>
                  <dd className="mt-1 font-mono font-semibold text-slate-200">{featured.credentialId}</dd>
                </div>
              ) : null}
            </dl>

            <div className="mt-6">
              <Tags tags={featured.tags} />
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
              <span className="link-arrow pointer-events-none">
                View certificate <Arrow />
              </span>
              {featured.verifyHref ? (
                <VerifyLink href={featured.verifyHref} title={featured.title} />
              ) : null}
            </div>
          </div>
        </article>

        <ul data-reveal-group className="grid gap-5 lg:grid-rows-3">
          {rest.map((certificate, offset) => (
            <li key={certificate.title} className={`${cardClass} flex`}>
              <ViewButton title={certificate.title} onClick={() => setSelectedIndex(offset + 1)} />

              <Sheet
                certificate={certificate}
                sizes="(min-width: 640px) 11rem, 36vw"
                className="min-h-36 w-[36%] shrink-0 border-r border-white/10 sm:w-44"
              />

              <div className="flex min-w-0 flex-1 flex-col p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-300">
                      {certificate.issuer}
                    </p>
                    <h3 className="mt-1 text-base font-semibold leading-6 text-white">
                      {certificate.title}
                    </h3>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-2xl font-bold leading-none text-emerald-300">
                      {certificate.metric.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-4 text-slate-400">{certificate.metric.label}</p>
                  </div>
                </div>

                <p className="mt-2 font-mono text-xs text-slate-500">{certificate.issued}</p>

                <div className="mt-3 hidden sm:block">
                  <Tags tags={certificate.tags} />
                </div>

                {certificate.verifyHref ? (
                  <div className="mt-auto pt-3">
                    <VerifyLink href={certificate.verifyHref} title={certificate.title} />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
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
