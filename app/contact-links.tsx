"use client";

import { useState } from "react";

type ContactLinksProps = {
  email: string;
  github: string;
  linkedin?: string;
  resumeHref: string;
};

const iconClass = "h-5 w-5 shrink-0";

const icons = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 16 16" fill="currentColor" className={iconClass} aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden="true">
      <path d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14" />
    </svg>
  ),
};

const rowClass =
  "group flex min-h-16 items-center gap-4 border border-white/10 bg-white/[0.045] px-4 py-3 backdrop-blur transition hover:border-emerald-300/45 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 md:px-5";

function Row({ icon, label, value, href, primary, download }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  primary?: boolean;
  download?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external || download ? "_blank" : undefined}
      rel={external || download ? "noopener noreferrer" : undefined}
      className={`${rowClass} min-w-0 flex-1 ${primary ? "border-emerald-300/45 bg-emerald-300/[0.08]" : ""}`}
    >
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${primary ? "border-emerald-300/50 bg-emerald-300 text-slate-950" : "border-white/15 bg-white/[0.06] text-emerald-200"}`}>
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</span>
        <span className="block text-[15px] leading-6 [overflow-wrap:anywhere] font-semibold text-white">{value}</span>
      </span>
      <span className="shrink-0 font-bold text-emerald-300 transition group-hover:translate-x-0.5" aria-hidden="true">
        {download ? "↓" : external ? "↗" : "→"}
      </span>
    </a>
  );
}

export default function ContactLinks({ email, github, linkedin, resumeHref }: ContactLinksProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be unavailable (permissions, insecure context); the mailto link still works.
    }
  };

  return (
    <div className="grid min-w-0 gap-3">
      <div className="flex min-w-0 gap-3">
        <Row icon={icons.email} label="Email" value={email} href={`mailto:${email}`} primary />
        <button
          type="button"
          onClick={copyEmail}
          className="shrink-0 border border-white/10 bg-white/[0.045] px-4 text-sm font-bold text-slate-200 transition hover:border-emerald-300/45 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
          aria-live="polite"
        >
          {copied ? "已複製 ✓" : "複製"}
        </button>
      </div>
      {linkedin ? (
        <Row icon={icons.linkedin} label="LinkedIn" value={linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} href={linkedin} />
      ) : null}
      <Row icon={icons.github} label="GitHub" value={github.replace(/^https?:\/\//, "")} href={github} />
      <Row icon={icons.resume} label="Resume" value="下載履歷 PDF" href={resumeHref} download />
    </div>
  );
}
