import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { howWeWork } from "@/data/process";

export function HowWeWork() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <SectionLabel>How we work</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-12">
          <h2 className="max-w-[20ch] text-[30px] font-medium leading-[1.2] tracking-[-0.01em] text-ink md:col-span-5 md:text-[36px]">
            What happens after you reach out.
          </h2>
          <p className="max-w-[46ch] text-[15.5px] leading-relaxed text-muted md:col-span-6 md:col-start-7 md:self-end">
            {howWeWork.intro}
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-line pt-10 md:mt-20 md:grid-cols-4">
          {howWeWork.steps.map((step) => (
            <li key={step.number} className="md:border-l md:border-line md:pl-6 md:first:border-l-0 md:first:pl-0">
              <p className="font-serif text-[26px] italic text-ink/70">{step.number}</p>
              <p className="mt-3 text-[16px] font-medium text-ink">{step.title}</p>
              <p className="mt-2.5 max-w-[32ch] text-[14px] leading-relaxed text-muted">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
