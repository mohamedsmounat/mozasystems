"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HeaderLogo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav, primaryCta } from "@/data/nav";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu when the route changes. Adjusting state during
  // render (rather than in an effect) avoids an extra render pass — see
  // https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-offwhite/90 backdrop-blur-sm transition-colors duration-200",
        scrolled ? "border-line" : "border-transparent",
      )}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <HeaderLogo />

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {mainNav.map((item) =>
              item.children ? (
                <details key={item.label} className="group relative">
                  <summary
                    className="flex cursor-pointer list-none items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-silver-pale [&::-webkit-details-marker]:hidden"
                  >
                    {item.label}
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 9 6"
                      fill="none"
                      className="transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <path d="M1 1L4.5 5L8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <div className="absolute left-1/2 top-full z-10 w-[300px] -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-line bg-white p-2 shadow-[0_20px_50px_-20px_rgba(16,28,44,0.25)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-silver-pale"
                        >
                          <span className="pt-0.5 text-[11px] font-medium text-muted">{child.eyebrow}</span>
                          <span>
                            <span className="block text-[13.5px] font-medium text-ink">{child.label}</span>
                            <span className="block text-[12.5px] text-muted">{child.description}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-silver-pale"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden md:block">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-all duration-200",
                  mobileOpen && "top-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] h-[1.5px] w-full bg-ink transition-opacity duration-150",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] h-[1.5px] w-full bg-ink transition-all duration-200",
                  mobileOpen && "top-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
