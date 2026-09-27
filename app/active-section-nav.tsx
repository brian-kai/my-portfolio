"use client";

import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type ActiveSectionNavProps = {
  items: NavItem[];
  /** Kept for existing callers; colours now come from the page's --accent (see .theme-amber). */
  variant?: "emerald" | "amber";
  /** Width at which the inline nav replaces the mobile menu; long nav bars need more room. */
  breakpoint?: "md" | "lg";
};


export default function ActiveSectionNav({
  items,
  breakpoint = "md",
}: ActiveSectionNavProps) {
  // Nothing is highlighted until the first section is reached (e.g. while on a hero).
  const [activeHref, setActiveHref] = useState<string | null>(null);

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

      const [mostVisible] = Array.from(visibleSections.entries()).sort(
        (first, second) => second[1] - first[1],
      );

      if (mostVisible) {
        setActiveHref(mostVisible[0]);
        return;
      }

      // Above the first tracked section there is nothing to highlight;
      // between sections keep the first one as before.
      const firstTop = sections[0].element.getBoundingClientRect().top;
      setActiveHref(firstTop > window.innerHeight * 0.2 ? null : sections[0].href);
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
    <div className={`nav-track hidden ${breakpoint === "lg" ? "lg:flex" : "md:flex"}`}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(event) => scrollToSection(event, item.href)}
          aria-current={activeHref === item.href ? "true" : undefined}
          className="nav-link"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
