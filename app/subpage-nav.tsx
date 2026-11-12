import Link from "next/link";
import ActiveSectionNav from "./active-section-nav";
import MobileMenu from "./mobile-menu";

type SubpageNavProps = {
  items: { label: string; href: string }[];
  backHref: string;
  backLabel: string;
  /** Long section lists need the wider breakpoint before they fit inline. */
  breakpoint?: "md" | "lg";
  /** Border and background of the bar, for pages with their own colour theme. */
  barClassName?: string;
};

/**
 * Fixed header shared by the detail pages: name, in-page sections, and the way back.
 * Below the breakpoint the sections move into a drawer, so long pages stay navigable on phones.
 */
export default function SubpageNav({
  items,
  backHref,
  backLabel,
  breakpoint = "md",
  barClassName = "border-white/10 bg-[#070a0d]/98",
}: SubpageNavProps) {
  const compactOnly = breakpoint === "lg" ? "lg:hidden" : "md:hidden";
  const inlineFrom = breakpoint === "lg" ? "lg:flex" : "md:flex";

  return (
    <>
      <nav className={`z-nav fixed inset-x-0 top-0 border-b shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md ${barClassName}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-6">
          <MobileMenu items={items} breakpoint={breakpoint} title="On this page" />

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">Kevin Huang | Kai-Chun Huang</span>
          </Link>

          <Link href={backHref} className={`btn btn-secondary btn-sm shrink-0 ${compactOnly}`}>
            ← Back
          </Link>

          <div className={`hidden items-center gap-3 ${inlineFrom}`}>
            <ActiveSectionNav items={items} breakpoint={breakpoint} />
            <Link href={backHref} className="btn btn-secondary btn-sm">
              {backLabel}
            </Link>
          </div>
        </div>
      </nav>
      {/* Where the "skip to content" link in the root layout lands. */}
      <span id="content" tabIndex={-1} />
    </>
  );
}
