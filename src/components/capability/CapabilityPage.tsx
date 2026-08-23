import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { capabilities, type Capability } from "@/data/services";

export function CapabilityPage({ capability }: { capability: Capability }) {
  const others = capabilities.filter((c) => c.slug !== capability.slug);

  return (
    <>
      <section className="pb-16 pt-16 md:pb-24 md:pt-20">
        <Container>
          <SectionLabel number={capability.number}>{capability.name}</SectionLabel>
          <h1 className="mt-5 max-w-[16ch] text-[38px] font-medium leading-[1.15] tracking-[-0.01em] text-ink md:max-w-[18ch] md:text-[54px]">
            {capability.tagline}
          </h1>
          <div className="mt-8 max-w-[62ch] space-y-4">
            {capability.heroIntro.map((para) => (
              <p key={para} className="text-[16.5px] leading-relaxed text-muted md:text-[17.5px]">
                {para}
              </p>
            ))}
          </div>
          <div className="mt-9">
            <Button href="/contact" variant="primary">
              Request a quote
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted md:col-span-3">
              What&apos;s included
            </p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2 md:col-span-8 md:col-start-4">
              {capability.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/40" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {capability.note ? (
            <div className="mt-14 max-w-[62ch] border-l-2 border-silver pl-6 md:ml-[calc(25%+0px)]">
              <p className="font-serif text-[17px] italic leading-relaxed text-ink/80">
                {capability.note}
              </p>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-20">
        <Container>
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-4 max-w-[22ch] text-[26px] font-medium leading-[1.25] text-ink md:text-[30px]">
            How {capability.processPhrase ?? `a ${capability.shortName.toLowerCase()}`} project runs.
          </h2>

          <ol className="mt-12 flex flex-col divide-y divide-line border-t border-line md:mt-14">
            {capability.process.map((step, i) => (
              <li key={step.step} className="grid grid-cols-1 gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6">
                <p className="text-[13px] font-medium text-muted md:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-[16px] font-medium text-ink md:col-span-3">{step.step}</p>
                <p className="max-w-[50ch] text-[14.5px] leading-relaxed text-muted md:col-span-7">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-silver-pale py-20 md:py-24">
        <Container>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-[18ch] text-[28px] font-medium leading-[1.2] text-ink md:text-[36px]">
              Tell us what you&apos;re working on.
            </h2>
            <Button href="/contact" variant="primary" className="shrink-0">
              Request a quote
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionLabel>Also part of what we do</SectionLabel>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line sm:grid-cols-2">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="group flex flex-col justify-between gap-6 bg-white p-7 transition-colors hover:bg-silver-pale"
              >
                <p className="text-[13px] font-medium text-muted">
                  {c.number} / {c.shortName}
                </p>
                <p className="flex items-center gap-2 text-[16px] font-medium text-ink">
                  {c.tagline}
                  <span
                    className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
