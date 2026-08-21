import { cn } from "@/lib/utils";

// Note: no width utility here on purpose — callers set their own (w-full,
// a fixed width, or flex-1) so a conflicting class never fights it on
// specificity/cascade order.
export const inputClasses =
  "rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none";

export function FormField({
  label,
  htmlFor,
  error,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-[13px] font-medium text-ink">
        {label}
        {optional ? <span className="ml-1 font-normal text-muted">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-[12.5px] text-[#9a3b3b]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
