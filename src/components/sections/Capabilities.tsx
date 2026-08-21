import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { capabilities } from "@/data/services";
import { cn } from "@/lib/utils";

const colStarts = ["md:col-start-4", "md:col-start-5", "md:col-start-4"];

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-line py-20 md:py-28">
      <Container>
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="mt-4 max-w-[22ch] text-[30px] font-medium leading-[1.2] tracking-[-0.01em] text-ink md:text-[38px]">
          Three ways we help a business grow.
        </h2>
      </Container>

      <div className="mt-16 flex flex-col md:mt-20">
        {capabilities.map((cap, i) => (
          <Container key={cap.slug} className={cn(i > 0 && "border-t border-line")}>
            <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-6 md:py-16">
              <div className="md:col-span-3">
                <p className="text-[13px] font-medium text-muted">
                  <span className="text-[15px] text-ink">{cap.number}</span> /{" "}
                  {cap.shortName}
                </p>
              </div>

              <div className={cn("md:col-span-8", colStarts[i % colStarts.length])}>
                <h3 className="max-w-[20ch] text-[24px] font-medium leading-[1.25] text-ink md:text-[28px]">
                  {cap.tagline}
                </h3>
                <p className="mt-4 max-w-[56ch] text-[15.5px] leading-relaxed text-muted md:text-[16px]">
                  {cap.homeSummary}
                </p>
                <p className="mt-6 max-w-[56ch] text-[13.5px] leading-relaxed text-muted">
                  {cap.included.slice(0, 4).join("  ·  ")}
                </p>
                <Link
                  href={`/${cap.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink underline decoration-silver decoration-2 underline-offset-[6px] transition-colors hover:decoration-ink"
                >
                  View capability
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Container>
        ))}
      </div>
    </section>
  );
}
