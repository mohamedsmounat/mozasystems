export type NavChild = {
  label: string;
  href: string;
  eyebrow: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const capabilityLinks: NavChild[] = [
  {
    eyebrow: "01",
    label: "Creator marketing",
    href: "/creator-marketing",
    description: "Find and work with the right creators.",
  },
  {
    eyebrow: "02",
    label: "Websites & landing pages",
    href: "/websites",
    description: "Sites that make people trust you fast.",
  },
  {
    eyebrow: "03",
    label: "AI systems & automation",
    href: "/ai-systems",
    description: "Remove the repetitive work from the business.",
  },
];

export const mainNav: NavItem[] = [
  {
    label: "Capabilities",
    href: "/#capabilities",
    children: capabilityLinks,
  },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = {
  label: "Request a quote",
  href: "/contact",
};

export const secondaryCta = {
  label: "Explore our work",
  href: "/work",
};
