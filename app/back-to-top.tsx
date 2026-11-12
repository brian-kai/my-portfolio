"use client";

import { useEffect, useState } from "react";

/** Hidden near the top of the page so it doesn't cover the hero actions on small screens. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.6);

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      href="#"
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`pressable motion-reduce-transform z-nav fixed bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-[rgb(var(--accent)/0.4)] bg-[#070a0d]/86 text-xl font-bold text-[rgb(var(--accent))] shadow-lg shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-[rgb(var(--accent))] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent))] md:bottom-6 md:right-6 md:h-12 md:w-12 md:text-2xl ${
        visible ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      ↑
    </a>
  );
}
