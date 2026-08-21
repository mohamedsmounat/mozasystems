import type { Metadata } from "next";
import { CapabilityPage } from "@/components/capability/CapabilityPage";
import { capabilities } from "@/data/services";

const capability = capabilities.find((c) => c.slug === "websites")!;

export const metadata: Metadata = {
  title: capability.name,
  description: capability.homeSummary,
};

export default function Page() {
  return <CapabilityPage capability={capability} />;
}
