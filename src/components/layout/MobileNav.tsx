"use client";

import Link from "next/link";
import { mainNav, primaryCta } from "@/data/nav";
import { cn } from "@/lib/utils";
import { company } from "@/config/company";
import { useEffect } from "react";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      id="mobile-nav"
      className={cn(
        "fixed inset-x-0 top-[72px] bottom-0 z-40 flex flex-col overflow-y-auto bg-offwhite md:hidden",
        "transition-[opacity,transform] duration-300 ease-out",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile" className="flex flex-1 flex-col px-6 pt-8">
        <ul className="flex flex-col divide-y divide-line">
          {mainNav.map((item) =>
            item.children ? (
              <li key={item.label} className="py-1">
                <details>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-[22px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                    {item.label}
                    <svg width="12" height="8" viewBox="0 0 9 6" fill="none" aria-hidden="true">
                      <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <ul className="pb-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2.5 text-[15px] text-muted"
                        >
                          <span className="mr-2 text-[11px] text-ink">{child.eyebrow}</span>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 text-[22px] font-medium text-ink">
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="mt-auto flex flex-col gap-4 py-8">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-center text-[15px] font-medium text-offwhite"
          >
            {primaryCta.label}
          </Link>
          <a href={`mailto:${company.contact.email}`} className="text-center text-[13px] text-muted">
            {company.contact.email}
          </a>
        </div>
      </nav>
    </div>
  );
}
