import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function QuoteCTA() {
  return (
    <section className="border-t border-line bg-silver-pale py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[16ch] text-[34px] font-medium leading-[1.15] tracking-[-0.01em] text-ink md:text-[46px]">
            Tell us what you&apos;re working on.
          </h2>
          <Button href="/contact" variant="primary" className="shrink-0">
            Request a quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
