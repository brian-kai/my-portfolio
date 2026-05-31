"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export default function ActiveSectionNav({ items }: { items: NavItem[] }) {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => ({
        href: item.href,
        element: document.querySelector<HTMLElement>(item.href),
      }))
      .filter(
        (section): section is { href: string; element: HTMLElement } =>
          Boolean(section.element),
      );

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      if (viewportBottom >= documentHeight - 24) {
        setActiveHref(sections[sections.length - 1].href);
        return;
      }

      const readingLine = window.scrollY + 120;
      let currentHref = sections[0].href;

      for (const section of sections) {
        if (section.element.offsetTop <= readingLine) {
          currentHref = section.href;
        }
      }

      setActiveHref(currentHref);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  return (
    <div className="hidden gap-2 text-sm font-medium text-slate-300 md:flex">
      {items.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-lg px-3 py-2 transition ${
              isActive
                ? "border border-emerald-300/35 bg-emerald-300/[0.1] text-emerald-100 shadow-[0_10px_28px_rgba(16,185,129,0.12)]"
                : "hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
