import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/config/company";

// NOTE: This is a draft terms page, not reviewed by a lawyer, and missing
// registered company details from src/config/company.ts. Add those and get
// this reviewed before launch.

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the Moza Systems website.",
};

export default function TermsPage() {
  return (
    <section className="pb-24 pt-16 md:pb-32 md:pt-20">
      <Container>
        <SectionLabel>Terms</SectionLabel>
        <h1 className="mt-5 text-[34px] font-medium tracking-[-0.01em] text-ink md:text-[42px]">
          Terms
        </h1>
        <p className="mt-4 text-[13.5px] text-muted">Last updated: August 23, 2026.</p>

        <div className="mt-12 max-w-[68ch] space-y-8 text-[15.5px] leading-relaxed text-ink/85">
          <div>
            <h2 className="text-[18px] font-medium text-ink">This website</h2>
            <p className="mt-3">
              These terms cover the use of {company.domain}. They don&apos;t cover any separate
              agreement we make for a project, which we&apos;ll confirm directly with you in
              writing.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-ink">Content</h2>
            <p className="mt-3">
              Everything on this site (text, design, the Moza Systems name and logo) belongs to
              Moza Systems unless stated otherwise. Selected work shown on this site is presented
              to describe what was built, not as a transfer of rights to that work.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-ink">No guarantees from this site</h2>
            <p className="mt-3">
              Information on this website is provided as a description of what Moza Systems does.
              It isn&apos;t a guarantee of results for any specific project. Project scope,
              timeline and outcomes are agreed separately for each engagement.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms can go to{" "}
              <a
                href={`mailto:${company.contact.email}`}
                className="underline decoration-silver decoration-2 underline-offset-2 hover:decoration-ink"
              >
                {company.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
