import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "About",
  description: "Moza Systems is a small, founder-led studio working across creator marketing, websites and AI systems.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-14 pt-16 md:pb-20 md:pt-20">
        <Container>
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-5 max-w-[18ch] text-[38px] font-medium leading-[1.15] tracking-[-0.01em] text-ink md:text-[54px]">
            A small studio, run directly by the person doing the work.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[16.5px] leading-relaxed text-muted md:text-[17.5px]">
            Moza Systems works with businesses internationally. The studio is early, which means
            direct communication, no account managers, and a founder who is personally involved
            in every project.
          </p>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              {/*
                TODO: replace this placeholder panel with a real founder photo
                once supplied — e.g.
                <Image src="/founder/mohamed.jpg" alt="Mohamed, founder of Moza Systems"
                       width={640} height={800} className="w-full rounded-lg object-cover" />
              */}
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-lg bg-silver-pale">
                <span className="font-serif text-[72px] italic text-ink/25">M</span>
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <SectionLabel>Founder</SectionLabel>
              <h2 className="mt-4 text-[28px] font-medium leading-[1.3] text-ink md:text-[34px]">
                {company.founder.firstName}
              </h2>
              <p className="mt-1 text-[14px] text-muted">{company.founder.title}</p>

              <div className="mt-7 space-y-5 max-w-[54ch] text-[16.5px] leading-relaxed text-ink/85">
                <p>
                  I started Moza Systems because I kept running into the same gap: businesses know
                  they need more customers and fewer repetitive tasks, but the work to get there
                  (finding the right creators, building a website that actually converts,
                  figuring out what to automate) rarely happens in one place.
                </p>
                <p>
                  I&apos;d rather take on fewer projects and do them properly than stretch across
                  everything. If a project makes sense, we talk directly. No account manager, no
                  layers in between.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-navy py-20 text-white md:py-28">
        <Container>
          <p className="max-w-[22ch] font-serif text-[26px] italic leading-[1.5] text-white md:text-[32px]">
            &ldquo;{companyPromise}&rdquo;
          </p>
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
    </>
  );
}

const companyPromise =
  "We take repetitive work off a business, so it can focus on customers and growth.";
