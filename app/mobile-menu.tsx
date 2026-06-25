"use client";

import { useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export default function MobileMenu({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ??
          [],
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [isOpen]);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setIsOpen(false);

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

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="pressable-subtle inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-200 transition hover:border-emerald-300/50 hover:text-white md:hidden"
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
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="absolute left-0 top-0 w-72 max-w-[82vw] overflow-y-auto border-r border-white/10 bg-[#020617] p-6 shadow-2xl shadow-black/40"
            style={{ height: "100dvh", minHeight: "100dvh" }}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Menu
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className="pressable-subtle flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-2xl leading-none text-slate-200 transition hover:border-emerald-300/50 hover:text-white"
              >
                &times;
              </button>
            </div>

            <nav className="mt-8 grid gap-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => scrollToSection(event, item.href)}
                  className="pressable-subtle rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
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
