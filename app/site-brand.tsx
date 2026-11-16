import Link from "next/link";

type SiteBrandProps = {
  /** Role line under the name. Pass a breakpoint class pair so it only shows where the bar has room. */
  subtitleClassName?: string;
};

/** Logo and name linking home: the same mark at the left of every page's header. */
export default function SiteBrand({ subtitleClassName = "hidden sm:block" }: SiteBrandProps) {
  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-3 rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--accent))]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG logo */}
      <img src="/icon.svg" alt="" width={32} height={32} className="h-8 w-8 shrink-0 rounded-lg transition group-hover:scale-105" />
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-base font-bold text-white">Kevin Huang</span>
        <span className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--accent))] ${subtitleClassName}`}>
          NLP / LLM AI Engineer
        </span>
      </span>
    </Link>
  );
}
