"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type ActiveSectionNavProps = {
  items: NavItem[];
  variant?: "emerald" | "amber";
};

const activeVariantClasses = {
  emerald:
    "border border-emerald-300/35 bg-emerald-300/[0.1] text-emerald-100 shadow-[0_10px_28px_rgba(16,185,129,0.12)]",
  amber:
    "border border-amber-200/35 bg-amber-200/[0.1] text-amber-100 shadow-[0_10px_28px_rgba(245,158,11,0.12)]",
};

export default function ActiveSectionNav({
  items,
  variant = "emerald",
}: ActiveSectionNavProps) {
  const [activeHref, setActiveHref] = useState<string | null>(
    items[0]?.href ?? null,
  );

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const section = document.querySelector<HTMLElement>(href);
    if (!section) {
      return;
    }

    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
    window.history.replaceState(null, "", href);
  };

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

    const visibleSections = new Map<string, number>();

    const setLastSectionIfAtPageEnd = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      if (viewportBottom >= documentHeight - 24) {
        setActiveHref(sections[sections.length - 1].href);
        return true;
      }

      return false;
    };

    const updateActiveFromVisibleSections = () => {
      if (setLastSectionIfAtPageEnd()) {
        return;
      }

      const [mostVisibleHref] = Array.from(visibleSections.entries()).sort(
        (first, second) => second[1] - first[1],
      )[0] ?? [sections[0].href];

      setActiveHref(mostVisibleHref);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const href = `#${entry.target.id}`;

          if (entry.isIntersecting) {
            visibleSections.set(href, entry.intersectionRatio);
          } else {
            visibleSections.delete(href);
          }
        }

        updateActiveFromVisibleSections();
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const section of sections) {
      observer.observe(section.element);
    }

    return () => {
      observer.disconnect();
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
            onClick={(event) => scrollToSection(event, item.href)}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-lg px-3 py-2 transition ${
              isActive
                ? activeVariantClasses[variant]
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
