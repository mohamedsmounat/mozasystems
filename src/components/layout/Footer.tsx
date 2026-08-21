import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Logo";
import { capabilityLinks } from "@/data/nav";
import { company } from "@/config/company";

const companyLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-section bg-navy text-silver">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark tone="silver" height={20} />
            <p className="mt-5 max-w-[26ch] text-[13.5px] leading-relaxed text-muted-on-dark">
              Creator marketing · Websites · AI systems
            </p>
          </div>

          <FooterColumn title="Capabilities" links={capabilityLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-on-dark">
              Get in touch
            </p>
            <a
              href={`mailto:${company.contact.email}`}
              className="mt-4 inline-block text-[13.5px] text-silver underline decoration-navy-line decoration-2 underline-offset-4 hover:decoration-silver"
            >
              {company.contact.email}
            </a>
            <ul className="mt-6 flex flex-col gap-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-muted-on-dark hover:text-silver">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-navy-line pt-6 text-[12px] text-muted-on-dark md:flex-row md:items-center md:justify-between">
          <p>© {year} Moza Systems. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-on-dark">{title}</p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[13.5px] text-silver/90 hover:text-silver">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
