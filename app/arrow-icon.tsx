export type ArrowKind = "right" | "external" | "down";

/** Links leaving the site (or opening a file) get the ↗ arrow; everything else points right. */
export function arrowFor(href: string): ArrowKind {
  return href.startsWith("http") || href.endsWith(".pdf") ? "external" : "right";
}

const paths: Record<ArrowKind, string> = {
  right: "M4 10h11m-4-4.5L15.5 10 11 14.5",
  external: "M6.5 13.5 14 6m-6 0h6v6",
  down: "M10 4v11m-4.5-4L10 15.5 14.5 11",
};

/**
 * One arrow shape for every link and button. It nudges in its direction when the
 * surrounding link, button or .group card is hovered (see .arrow-icon in globals.css).
 */
export default function Arrow({ kind = "right", className = "" }: { kind?: ArrowKind; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-kind={kind}
      className={`arrow-icon ${className}`}
    >
      <path d={paths[kind]} />
    </svg>
  );
}
