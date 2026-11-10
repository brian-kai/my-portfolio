import Link from "next/link";
import ActiveSectionNav from "./active-section-nav";

type SubpageNavProps = {
  items: { label: string; href: string }[];
  backHref: string;
  backLabel: string;
  /** Long section lists need the wider breakpoint before they fit inline. */
  breakpoint?: "md" | "lg";
};

/** Fixed header shared by the case-study pages: name, in-page sections, and the way back. */
export default function SubpageNav({ items, backHref, backLabel, breakpoint = "md" }: SubpageNavProps) {
  const compactOnly = breakpoint === "lg" ? "lg:hidden" : "md:hidden";
  const inlineFrom = breakpoint === "lg" ? "lg:flex" : "md:flex";

  return (
    <nav className="z-nav fixed inset-x-0 top-0 border-b border-white/10 bg-[#070a0d]/98 shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4">
        <Link href={backHref} className={`btn btn-secondary btn-sm shrink-0 ${compactOnly}`}>
          ← Back
        </Link>

        <Link href="/" className="min-w-0 truncate text-lg font-bold">
          <span className="md:hidden">Kevin Huang</span>
          <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
        </Link>

        <div className={`hidden items-center gap-3 ${inlineFrom}`}>
          <ActiveSectionNav items={items} breakpoint={breakpoint} />
          <Link href={backHref} className="btn btn-secondary btn-sm">
            {backLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
}
