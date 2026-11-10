import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Files and other sites open in a new tab; only real routes go through next/link. */
export const isExternalHref = (href: string) => href.startsWith("http") || href.endsWith(".pdf");

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & { href: string; children: ReactNode };

/**
 * next/link prefetches whatever it points at, so a PDF behind a <Link> is downloaded
 * as soon as the link scrolls into view. Plain anchors keep files out of that path.
 */
export default function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
