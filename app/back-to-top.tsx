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
      className={`pressable motion-reduce-transform z-nav fixed bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/40 bg-[#070a0d]/86 text-xl font-bold text-emerald-200 shadow-lg shadow-black/30 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-200 hover:text-white md:bottom-6 md:right-6 md:h-12 md:w-12 md:text-2xl ${
        visible ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      ↑
    </a>
  );
}
