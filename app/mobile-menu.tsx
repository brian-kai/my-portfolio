"use client";

import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export default function MobileMenu({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-200 transition hover:border-emerald-300/50 hover:text-white md:hidden"
      >
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span className="block h-0.5 w-5 rounded bg-current" />
          <span className="block h-0.5 w-5 rounded bg-current" />
          <span className="block h-0.5 w-5 rounded bg-current" />
        </span>
      </button>

      {isOpen ? (
        <div className="z-menu fixed inset-0 md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-black/65"
            onClick={() => setIsOpen(false)}
          />

          <aside
            className="absolute left-0 top-0 w-72 max-w-[82vw] overflow-y-auto border-r border-white/10 bg-[#020617] p-6 shadow-2xl shadow-black/40"
            style={{ height: "100dvh", minHeight: "100vh" }}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Menu
              </p>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-2xl leading-none text-slate-200 transition hover:border-emerald-300/50 hover:text-white"
              >
                &times;
              </button>
            </div>

            <nav className="mt-8 grid gap-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}
