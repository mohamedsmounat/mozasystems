import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-offwhite hover:bg-navy-soft",
  secondary:
    "text-ink underline decoration-silver decoration-2 underline-offset-[6px] hover:decoration-ink rounded-none px-0 py-1",
  ghost: "text-white underline decoration-navy-line decoration-2 underline-offset-[6px] hover:decoration-white rounded-none px-0 py-1",
  "outline-light": "border border-navy-line text-white hover:border-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type,
  disabled,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
