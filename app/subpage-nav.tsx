import Link from "next/link";
import ActiveSectionNav from "./active-section-nav";
import MobileMenu from "./mobile-menu";
import SiteBrand from "./site-brand";
import { resumeHref } from "./site-config";

type SubpageNavProps = {
  items: { label: string; href: string }[];
  backHref: string;
  /** Homepage section the page belongs to, e.g. "Projects"; shown as "← Projects". */
  backLabel: string;
  /** Must match the max-width of the page's content column, so the bar's edges line up with it. */
  widthClassName?: string;
  /** Border and background of the bar, for pages with their own colour theme. */
  barClassName?: string;
};

/**
 * Fixed header shared by the detail pages. Same parts as the homepage header (logo, section nav,
 * Resume) plus the way back. Below lg the sections and Resume move into the drawer.
 */
export default function SubpageNav({
  items,
  backHref,
  backLabel,
  widthClassName = "max-w-6xl",
  barClassName = "border-white/10 bg-[#070a0d]/98",
}: SubpageNavProps) {
  return (
    <>
      <nav className={`z-nav fixed inset-x-0 top-0 border-b shadow-[0_18px_48px_rgba(0,0,0,0.32)] backdrop-blur-md ${barClassName}`}>
        <div className={`mx-auto flex items-center justify-between gap-3 px-4 py-3 md:px-6 ${widthClassName}`}>
          <MobileMenu items={items} breakpoint="lg" title="On this page" />

          <SiteBrand subtitleClassName="hidden xl:block" />

          <Link href={backHref} className="btn btn-secondary btn-sm shrink-0 lg:hidden">
            ← Back
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <ActiveSectionNav items={items} breakpoint="lg" />
            <Link href={backHref} className="btn btn-secondary btn-sm shrink-0">
              ← {backLabel}
            </Link>
            <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm shrink-0">
              Resume
            </a>
          </div>
        </div>
      </nav>
      {/* Where the "skip to content" link in the root layout lands. */}
      <span id="content" tabIndex={-1} />
    </>
  );
}
