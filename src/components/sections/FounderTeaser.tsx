import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/config/company";

export function FounderTeaser() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            {/*
              TODO: replace this placeholder panel with a real founder photo
              once supplied — e.g.
              <Image src="/founder/mohamed.jpg" alt="Mohamed, founder of Moza Systems"
                     width={640} height={800} className="w-full rounded-lg object-cover" />
            */}
            <div className="flex aspect-[4/5] w-full max-w-[280px] items-center justify-center rounded-lg bg-silver-pale">
              <span className="font-serif text-[64px] italic text-ink/25">M</span>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <SectionLabel>Founder</SectionLabel>
            <h2 className="mt-4 text-[26px] font-medium leading-[1.3] text-ink md:text-[30px]">
              {company.founder.firstName}, {company.founder.title.toLowerCase()}
            </h2>
            <p className="mt-5 max-w-[54ch] font-serif text-[19px] italic leading-[1.6] text-ink/85 md:text-[21px]">
              I started Moza Systems to build the things I kept seeing businesses need: a way to
              reach the right people, a website that actually explains what they do, and fewer
              hours lost to repetitive work.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink underline decoration-silver decoration-2 underline-offset-[6px] hover:decoration-ink"
            >
              More about Moza
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
