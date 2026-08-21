import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Capabilities } from "@/components/sections/Capabilities";
import { EditorialStatement } from "@/components/sections/EditorialStatement";
import { SelectedWorkPreview } from "@/components/sections/SelectedWorkPreview";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { FounderTeaser } from "@/components/sections/FounderTeaser";
import { QuoteCTA } from "@/components/sections/QuoteCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <Capabilities />
      <EditorialStatement />
      <SelectedWorkPreview />
      <HowWeWork />
      <FounderTeaser />
      <QuoteCTA />
    </>
  );
}
