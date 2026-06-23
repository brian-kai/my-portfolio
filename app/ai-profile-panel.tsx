"use client";

import { useState } from "react";
import EvidenceDrawer, { type EvidenceItem } from "./evidence-drawer";

const profileModes = [
  {
    id: "research",
    label: "Research",
    title: "Research-backed AI systems",
    summary:
      "Turning NLP and LLM experiments into publishable, measurable, and reviewable research evidence.",
    proofPoints: [
      "CIIE 2025 Best Paper Award",
      "ICCCM 2026 Accepted Presentation",
      "LLaMA 3 and LSTM research pipeline",
    ],
    stack: ["LLaMA 3", "LSTM", "BLEU", "METEOR"],
    cta: "View Research Evidence",
    href: "#research",
    evidence: {
      title: "Research-backed AI systems",
      type: "Research Evidence",
      proofLinks: [
        { label: "CIIE 2025 Best Paper Award", href: "/conference" },
        { label: "ICCCM 2026 Acceptance", href: "/icccm" },
        { label: "LLaMA 3 Case Study", href: "/llama-marketing-system" },
      ],
      whyItMatters:
        "This evidence shows the ability to turn model experiments into reviewed research outcomes, not only isolated prototypes.",
      relatedWork: [
        { label: "Research section", href: "#research" },
        { label: "Resume", href: "/file/Huang_Kai-Chun_AI_Engineer_Intern_Resume.pdf" },
      ],
    },
  },
  {
    id: "product",
    label: "Product Demo",
    title: "AI demos that can be opened",
    summary:
      "Building web-facing tools from model workflows, with live demos, deployment, and case-study proof.",
    proofPoints: [
      "SEO Entity Analysis live demo",
      "LLaMA 3 marketing system case study",
      "Vercel deployment and web delivery",
    ],
    stack: ["Next.js", "Vercel", "SERP API", "Entity Analysis"],
    cta: "Open Demo Projects",
    href: "#projects",
    evidence: {
      title: "Product demos and deployed AI tools",
      type: "Demo Evidence",
      proofLinks: [
        {
          label: "SEO Entity Analysis Tool",
          href: "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app",
        },
        { label: "LLaMA 3 Marketing System", href: "/llama-marketing-system" },
      ],
      whyItMatters:
        "Live demos make the portfolio verifiable. They show that the work can move from analysis and modeling into something people can open and inspect.",
      relatedWork: [
        { label: "Projects section", href: "#projects" },
        { label: "GitHub", href: "https://github.com/brian-kai" },
      ],
    },
  },
  {
    id: "workflow",
    label: "Data Workflow",
    title: "Data workflows for model output",
    summary:
      "Connecting cleaning, analysis, clustering, and automation into repeatable AI product workflows.",
    proofPoints: [
      "Python, SQL, Pandas data preparation",
      "TextRank, K-Means, HDBSCAN analysis",
      "Workflow automation and visualization",
    ],
    stack: ["Python", "SQL", "Pandas", "HDBSCAN"],
    cta: "Explore Workflow",
    href: "#skills",
    evidence: {
      title: "Data workflow and model pipeline skills",
      type: "Workflow Evidence",
      proofLinks: [
        { label: "Skills section", href: "#skills" },
        { label: "LLaMA 3 Workflow", href: "/llama-marketing-system" },
        { label: "Project cases", href: "#projects" },
      ],
      whyItMatters:
        "The workflow evidence connects data cleaning, feature extraction, clustering, visualization, and model output into a repeatable AI engineering process.",
      relatedWork: [
        { label: "Data projects", href: "#projects" },
        { label: "Research section", href: "#research" },
      ],
    },
  },
];

export default function AiProfilePanel() {
  const [activeModeId, setActiveModeId] = useState(profileModes[0].id);
  const [openEvidence, setOpenEvidence] = useState<EvidenceItem | null>(null);
  const activeMode =
    profileModes.find((mode) => mode.id === activeModeId) ?? profileModes[0];

  return (
    <aside className="w-full border border-white/10 bg-[#07100d]/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur md:p-5 lg:max-w-[34rem]">
      <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            AI Engineer Profile
          </p>
          <h2 className="mt-2 text-xl font-black leading-tight text-white">
            Proof, demos, workflow
          </h2>
        </div>
        <span className="shrink-0 border border-emerald-300/25 bg-emerald-300/[0.08] px-2.5 py-1 font-mono text-[11px] font-bold text-emerald-100">
          03 modes
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {profileModes.map((mode) => {
          const isActive = mode.id === activeMode.id;

          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveModeId(mode.id)}
              className={`min-h-11 border px-3 py-2 text-left text-sm font-bold transition active:translate-y-px ${
                isActive
                  ? "border-emerald-300/60 bg-emerald-300/[0.14] text-white shadow-[0_14px_32px_rgba(16,185,129,0.14)]"
                  : "border-white/10 bg-white/[0.045] text-slate-300 hover:border-emerald-300/35 hover:bg-white/[0.075] hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {mode.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 border border-emerald-300/20 bg-slate-950/40 p-4 md:p-5">
        <h3 className="text-2xl font-black leading-tight text-white md:text-[1.7rem]">
          {activeMode.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {activeMode.summary}
        </p>

        <div className="mt-5 grid gap-2.5">
          {activeMode.proofPoints.map((point) => (
            <EvidenceDrawer
              key={point}
              buttonLabel={point}
              buttonClassName="w-full border-l border-emerald-300/45 bg-white/[0.035] px-3 py-2 text-left text-sm font-semibold leading-6 text-slate-100 transition hover:bg-emerald-300/[0.08] focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
              evidence={{ ...activeMode.evidence, title: point }}
              isOpen={openEvidence?.title === point}
              onClose={() => setOpenEvidence(null)}
              onOpen={() => setOpenEvidence({ ...activeMode.evidence, title: point })}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {activeMode.stack.map((item) => (
            <span
              key={item}
              className="border border-white/10 bg-[#07100d]/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-100"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={activeMode.href}
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-emerald-300/65 bg-emerald-300 px-4 py-3 text-sm font-black text-slate-950 shadow-[0_16px_36px_rgba(16,185,129,0.16)] transition hover:-translate-y-0.5 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-200/80"
        >
          {activeMode.cta}
        </a>
      </div>
    </aside>
  );
}
