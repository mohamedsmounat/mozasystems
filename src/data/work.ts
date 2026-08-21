export type WorkItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  detail: string;
  url: string;
  image: {
    desktop: string;
    mobile: string;
  };
  relationship: string;
};

/**
 * Selected work.
 *
 * Add future projects to this array as they become available. Keep entries
 * honest: describe what was built, never invented results or numbers.
 */
export const workItems: WorkItem[] = [
  {
    slug: "wks-performance",
    name: "WKS Performance",
    category: "Website design & development",
    description:
      "A website for a private football training business in Antwerp, built to explain the offer clearly and turn visitors into sign-ups.",
    detail:
      "WKS Performance runs small-group football training alongside players' regular clubs. The site needed to explain what the training is, who it's for, and make signing up straightforward on mobile, where most visitors land.",
    url: "https://wksperformance.be",
    image: {
      desktop: "/work/wks-performance-desktop.png",
      mobile: "/work/wks-performance-mobile.png",
    },
    relationship: "A project connected to the founder, not an external client engagement.",
  },
];
