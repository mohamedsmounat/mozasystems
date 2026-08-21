import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { company } from "@/config/company";
import { secondaryServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Request a quote",
  description: "Tell Moza Systems what you're working on and get a response about your project.",
};

export default function ContactPage() {
  return (
    <section className="pb-24 pt-16 md:pb-32 md:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-5 max-w-[14ch] text-[34px] font-medium leading-[1.15] tracking-[-0.01em] text-ink md:text-[42px]">
              Tell us what you&apos;re working on.
            </h1>
            <p className="mt-6 max-w-[38ch] text-[15.5px] leading-relaxed text-muted">
              Share a few details and we&apos;ll get back to you. There&apos;s no pricing on this
              page because it depends on the project, not a fixed package.
            </p>

            <div className="mt-10 border-t border-line pt-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                Prefer email
              </p>
              <a
                href={`mailto:${company.contact.email}`}
                className="mt-3 inline-block text-[15px] text-ink underline decoration-silver decoration-2 underline-offset-4 hover:decoration-ink"
              >
                {company.contact.email}
              </a>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                Also available
              </p>
              <p className="mt-3 max-w-[38ch] text-[13.5px] leading-relaxed text-muted">
                Alongside creator marketing, websites and AI systems, we also take on{" "}
                {secondaryServices.map((s) => s.name.toLowerCase()).join(" and ")} as ongoing
                support. Mention it in the form if that&apos;s what you need.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <QuoteForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
