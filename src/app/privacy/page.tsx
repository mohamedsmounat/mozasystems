import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { company } from "@/config/company";

// NOTE: This is a draft privacy policy. It accurately describes what the
// site currently does (the quote form and nothing else), but it has not
// been reviewed by a lawyer and is missing the registered company details
// in src/config/company.ts (legalName, VAT number, company number,
// registered address). Add those and get the page reviewed before launch.

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Moza Systems handles information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <section className="pb-24 pt-16 md:pb-32 md:pt-20">
      <Container>
        <SectionLabel>Privacy</SectionLabel>
        <h1 className="mt-5 text-[34px] font-medium tracking-[-0.01em] text-ink md:text-[42px]">
          Privacy policy
        </h1>
        <p className="mt-4 text-[13.5px] text-muted">Last updated: August 23, 2026.</p>

        <div className="prose-legal mt-12 max-w-[68ch] space-y-8 text-[15.5px] leading-relaxed text-ink/85">
          <div>
            <h2 className="text-[18px] font-medium text-ink">What this covers</h2>
            <p className="mt-3">
              This policy explains how Moza Systems handles information submitted through{" "}
              {company.domain}. It currently applies to one thing: the quote request form on the
              contact page.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-ink">What we collect</h2>
            <p className="mt-3">
              When you submit the quote form, we receive your name, business name, work email,
              phone number, the service you&apos;re interested in, your website (if you provide
              one) and your project description.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-ink">Why we collect it</h2>
            <p className="mt-3">
              To read your request, understand the project, and reply to you. We don&apos;t use
              this information for marketing, and we don&apos;t sell or share it with third
              parties outside the service providers needed to run the form (our email delivery
              provider, Resend).
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-ink">How long we keep it</h2>
            <p className="mt-3">
              We keep quote requests for as long as reasonably needed to respond to you and, if we
              start working together, for the life of the project. You can ask us to delete your
              information at any time.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-ink">Cookies and tracking</h2>
            <p className="mt-3">
              This site does not use marketing or analytics cookies. It does not track you across
              other websites.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-ink">Your rights</h2>
            <p className="mt-3">
              Under GDPR, you can ask to see, correct or delete the information we hold about you.
              To do that, email{" "}
              <a
                href={`mailto:${company.contact.email}`}
                className="underline decoration-silver decoration-2 underline-offset-2 hover:decoration-ink"
              >
                {company.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium text-ink">Contact</h2>
            <p className="mt-3">
              Moza Systems is run by {company.founder.firstName}. For any privacy question, email{" "}
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
