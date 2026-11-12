/**
 * In-page navigation shared by the desktop section nav and the mobile menu.
 *
 * scrollIntoView() honours the page's scroll-padding-top, so the target lands below the
 * fixed nav exactly where a plain #hash link would put it. The URL is replaced rather
 * than pushed, so Back leaves the page instead of stepping through sections.
 */
export function scrollToSection(href: string) {
  const section = document.querySelector<HTMLElement>(href);
  if (!section) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", href);

  // Move focus along with the scroll, so the next Tab continues inside the section
  // instead of in the nav. Deferred a frame: a closing menu restores focus to its trigger first.
  window.requestAnimationFrame(() => {
    if (!section.hasAttribute("tabindex")) section.setAttribute("tabindex", "-1");
    section.focus({ preventScroll: true });
  });
}
