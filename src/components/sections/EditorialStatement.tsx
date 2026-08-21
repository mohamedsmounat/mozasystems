import { Container } from "@/components/ui/Container";

export function EditorialStatement() {
  return (
    <section className="dark-section bg-navy py-24 text-white md:py-32">
      <Container>
        <p className="max-w-[13ch] font-serif text-[32px] italic leading-[1.35] text-white md:max-w-[15ch] md:text-[44px] lg:text-[50px]">
          Good systems make business simpler.
        </p>
        <p className="mt-8 max-w-[52ch] text-[15px] leading-relaxed text-muted-on-dark md:text-[16px]">
          Less time spent chasing leads, fixing a confusing website or repeating the same task by
          hand. That&apos;s what we&apos;re building toward on every project.
        </p>
      </Container>
    </section>
  );
}
