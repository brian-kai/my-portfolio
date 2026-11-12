"use client";

import { useId, useState, type ReactNode } from "react";
import Arrow from "./arrow-icon";

type MoreOnMobileProps = {
  children: ReactNode;
  moreLabel: string;
  lessLabel: string;
};

/**
 * Keeps a long page short on phones: the children stay collapsed behind a toggle below `md`
 * and are always visible from `md` up. They are in the HTML either way.
 */
export default function MoreOnMobile({ children, moreLabel, lessLabel }: MoreOnMobileProps) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <>
      <div id={contentId} className={open ? undefined : "hidden md:block"}>
        {children}
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((current) => !current)}
        className={`btn btn-secondary w-full md:hidden ${open ? "mt-6" : ""}`}
      >
        {open ? lessLabel : moreLabel}
        <Arrow kind="down" className={open ? "rotate-180" : ""} />
      </button>
    </>
  );
}
