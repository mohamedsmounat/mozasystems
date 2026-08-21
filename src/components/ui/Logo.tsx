import Image from "next/image";
import Link from "next/link";

const ASPECT = 2172 / 724;

export function Wordmark({
  tone = "navy",
  height = 22,
  className,
  priority,
}: {
  tone?: "navy" | "white" | "silver";
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const src =
    tone === "navy"
      ? "/logo/moza-wordmark-navy.png"
      : tone === "white"
        ? "/logo/moza-wordmark-white.png"
        : "/logo/moza-wordmark-silver.png";

  return (
    <Image
      src={src}
      alt="Moza Systems"
      width={Math.round(height * ASPECT)}
      height={height}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}

export function HeaderLogo({ tone = "navy" }: { tone?: "navy" | "white" }) {
  return (
    <Link
      href="/"
      aria-label="Moza Systems — home"
      className="inline-flex items-center py-1 focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <Wordmark tone={tone} height={20} priority />
    </Link>
  );
}

export function MarkIcon({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo/moza-mark-square.png"
      alt="Moza Systems"
      width={size}
      height={size}
      unoptimized
      className={className}
      style={{ borderRadius: size * 0.22 }}
    />
  );
}
