export type Capability = {
  number: string;
  slug: string;
  name: string;
  shortName: string;
  quoteValue: string;
  tagline: string;
  homeSummary: string;
  heroIntro: string[];
  included: string[];
  process: { step: string; detail: string }[];
  note?: string;
};

export const capabilities: Capability[] = [
  {
    number: "01",
    slug: "creator-marketing",
    name: "Creator marketing",
    shortName: "Creator marketing",
    quoteValue: "Creator marketing",
    tagline: "Work with creators who fit your brand.",
    homeSummary:
      "We find creators who fit your brand, then manage the relationship from first message to published video. Research, outreach, negotiation and deadlines all happen inside Moza.",
    heroIntro: [
      "Finding the right creator takes research, not a spreadsheet of follower counts. We look at audience, content style and past brand work before we reach out to anyone.",
      "Once a creator fits, we handle the conversation end to end: terms, deliverables, deadlines and publication. You get updates, not a second job.",
    ],
    included: [
      "Creator research and sourcing",
      "Creator and audience matching",
      "Outreach and first contact",
      "Negotiating commercial terms",
      "Coordinating communication between brand and creator",
      "Managing campaign deliverables",
      "Deadline management",
      "Publication coordination",
      "Campaign management through to publication",
      "Creator strategy",
    ],
    process: [
      { step: "Brief", detail: "We learn the product, the audience and what a good result looks like." },
      { step: "Creator search", detail: "We research creators based on audience fit and content quality." },
      { step: "Shortlist", detail: "You see a shortlist with reasoning, not a name dump." },
      { step: "Approval", detail: "You approve who we reach out to before we make contact." },
      { step: "Negotiation", detail: "We agree terms, deliverables and timing with the creator." },
      { step: "Coordination", detail: "We manage the back and forth so nothing gets missed." },
      { step: "Publication", detail: "We track the campaign through to the content going live." },
    ],
    note: "YouTube integrations are where we do most of our work today. The same process applies on Instagram, TikTok or another platform when it's the better fit for the brand.",
  },
  {
    number: "02",
    slug: "websites",
    name: "Websites & landing pages",
    shortName: "Websites",
    quoteValue: "Website / landing page",
    tagline: "A site that earns trust before the first call.",
    homeSummary:
      "We design and build websites that make a business easy to understand, trust and contact. Clear structure, fast pages and a layout that matches how people actually decide to reach out.",
    heroIntro: [
      "A website is often the first real interaction someone has with a business. If it's confusing or slow, that's the impression that sticks.",
      "We build sites around clarity first: what you do, who it's for, and what happens when someone gets in touch. Design serves that goal, not the other way around.",
    ],
    included: [
      "Business websites",
      "Landing pages",
      "Website redesigns",
      "Conversion-focused pages",
      "Websites for different industries and niches",
      "Messaging and content structure",
      "Responsive design across devices",
      "Performance and page speed",
    ],
    process: [
      { step: "Strategy", detail: "We map what the site needs to say and to whom." },
      { step: "Structure", detail: "We decide the pages, the hierarchy and the path to contact." },
      { step: "Design", detail: "We design around your brand, not a template." },
      { step: "Development", detail: "We build it properly: fast, responsive and easy to maintain." },
      { step: "Launch", detail: "We test across devices and hand the site over." },
    ],
    note: "Basic technical foundations such as clean metadata and semantic markup are part of a properly built site. We don't sell SEO as a separate service.",
  },
  {
    number: "03",
    slug: "ai-systems",
    name: "AI systems & automation",
    shortName: "AI systems",
    quoteValue: "AI system / automation",
    tagline: "We study the process before we automate anything.",
    homeSummary:
      "We look at the repetitive work inside a business first, then decide what's worth automating. That can mean faster lead response, better follow-up or a system that handles first-touch conversations.",
    heroIntro: [
      "Most businesses lose time to the same repetitive tasks: answering the same questions, chasing the same follow-ups, entering the same information twice.",
      "We start by understanding how that work actually happens today. Only then do we decide what should be automated and what shouldn't.",
    ],
    included: [
      "Lead-response systems",
      "Lead qualification",
      "Customer follow-up",
      "Appointment workflows",
      "Email workflows",
      "Internal administrative workflows",
      "AI-assisted customer communication",
      "AI chatbots",
      "Workflow automation",
    ],
    process: [
      { step: "Understand", detail: "We look at how the work happens today, step by step." },
      { step: "Define", detail: "We decide what's worth automating and what isn't." },
      { step: "Build", detail: "We build the system around your existing tools where we can." },
      { step: "Hand over", detail: "We test it against real cases and hand it over with a clear explanation." },
    ],
    note: "Some workflows are better left to a person. We recommend automation where it saves real time, not everywhere it's technically possible.",
  },
];

export const secondaryServices = [
  {
    name: "Social media management",
    quoteValue: "Social media management",
    description: "Day-to-day management of a brand's social presence.",
  },
  {
    name: "E-commerce management",
    quoteValue: "E-commerce management",
    description: "Ongoing support for running an online store.",
  },
];

export const quoteServiceOptions = [
  ...capabilities.map((c) => c.quoteValue),
  ...secondaryServices.map((s) => s.quoteValue),
  "Multiple services",
  "Not sure yet",
];
