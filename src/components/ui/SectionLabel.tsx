import { cn } from "@/lib/utils";

export function SectionLabel({
  number,
  children,
  tone = "dark",
  className,
}: {
  number?: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.14em]",
        tone === "dark" ? "text-muted" : "text-muted-on-dark",
        className,
      )}
    >
      {number ? (
        <span className={tone === "dark" ? "text-ink" : "text-silver"}>{number}</span>
      ) : null}
      {number ? <span aria-hidden="true">/</span> : null}
      <span>{children}</span>
    </p>
  );
}
