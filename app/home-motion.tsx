"use client";

import { useEffect } from "react";

/** Progressive enhancement: content stays readable before JS and without motion. */
export default function HomeMotion() {
  useEffect(() => {
    const root = document.getElementById("portfolio-home");
    if (!root || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Map<HTMLElement, Animation>();
    const seen = new WeakSet<HTMLElement>();
    const targets = root.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-group] > *",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;
          if (!entry.isIntersecting || seen.has(element)) continue;
          seen.add(element);
          observer.unobserve(element);
          if (preference.matches || element.contains(document.activeElement)) continue;

          const siblings = element.parentElement?.hasAttribute("data-reveal-group")
            ? Array.from(element.parentElement.children)
            : [];
          const delay = Math.max(0, siblings.indexOf(element) % 3) * 65;
          const animation = element.animate(
            [
              { opacity: 0, translate: "0 16px" },
              { opacity: 1, translate: "0 0" },
            ],
            { duration: 480, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
          );
          animations.set(element, animation);
          animation.onfinish = () => animations.delete(element);
        }
      },
      { threshold: 0.06 },
    );

    targets.forEach((target) => observer.observe(target));

    const stopMotion = () => {
      if (!preference.matches) return;
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      for (const target of targets) {
        if (!target.contains(event.target)) continue;
        seen.add(target);
        observer.unobserve(target);
        animations.get(target)?.cancel();
        animations.delete(target);
      }
    };
    preference.addEventListener("change", stopMotion);
    root.addEventListener("focusin", revealFocused);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stopMotion);
      root.removeEventListener("focusin", revealFocused);
    };
  }, []);

  return null;
}
