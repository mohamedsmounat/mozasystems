import type { MetadataRoute } from "next";
import { company } from "@/config/company";

const routes = [
  "",
  "/creator-marketing",
  "/websites",
  "/ai-systems",
  "/work",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${company.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
