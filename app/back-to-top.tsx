"use client";

import { useEffect, useState } from "react";

/** Scrolling up by less than this (px) is treated as jitter, not intent. */
const DIRECTION_THRESHOLD = 6;

/**
 * Appears only while the reader scrolls back up (or has reached the end of the page).
 * While reading downwards it stays out of the way, so it never sits on top of the text
 * and buttons at the right edge of the content column.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      const pastFirstScreen = y > window.innerHeight * 0.6;
      const atPageEnd = y + window.innerHeight >= document.documentElement.scrollHeight - 24;

      if (!pastFirstScreen) setVisible(false);
      else if (atPageEnd || delta < -DIRECTION_THRESHOLD) setVisible(true);
      else if (delta > DIRECTION_THRESHOLD) setVisible(false);

      if (Math.abs(delta) > DIRECTION_THRESHOLD) lastY = y;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      href="#"
      aria-label="回到頁面頂端"
      title="回到頂端"
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
