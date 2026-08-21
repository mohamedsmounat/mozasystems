import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { WorkCard } from "@/components/work/WorkCard";
import { workItems } from "@/data/work";

export const metadata: Metadata = {
  title: "Selected work",
  description: "Real projects Moza Systems has built, starting with WKS Performance.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pb-14 pt-16 md:pb-20 md:pt-20">
        <Container>
          <SectionLabel>Selected work</SectionLabel>
          <h1 className="mt-5 max-w-[16ch] text-[38px] font-medium leading-[1.15] tracking-[-0.01em] text-ink md:text-[54px]">
            Real work, not mockups.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-muted md:text-[17.5px]">
            We&apos;re a young company, so this list is short on purpose. Every project here is
            real work we can show you, with a link to see it live.
          </p>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container>
          {workItems.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </Container>
      </section>

      <section className="border-t border-line bg-silver-pale py-20 md:py-24">
        <Container>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[18ch] text-[28px] font-medium leading-[1.2] text-ink md:text-[36px]">
              Want to see your project here next?
            </h2>
            <Button href="/contact" variant="primary" className="shrink-0">
              Request a quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
