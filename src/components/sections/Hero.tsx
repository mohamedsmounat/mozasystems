import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { capabilities } from "@/data/services";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <Container>
        <h1 className="reveal-up max-w-[13ch] text-[42px] font-medium leading-[1.08] tracking-[-0.02em] text-ink md:max-w-[15ch] md:text-[64px] lg:text-[74px]">
          We build the systems behind business growth.
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-10 md:grid-cols-[1fr_auto] md:items-end">
          <p
            className="reveal-up max-w-[46ch] text-[17px] leading-relaxed text-muted md:text-[19px]"
            style={{ animationDelay: "80ms" }}
          >
            Moza Systems works across three areas: finding the right creators for your brand,
            building websites people trust, and automating the repetitive work that slows a
            business down.
          </p>

          <div
            className="reveal-up flex flex-wrap items-center gap-x-6 gap-y-4"
            style={{ animationDelay: "140ms" }}
          >
            <Button href="/contact" variant="primary">
              Request a quote
            </Button>
            <Button href="/work" variant="secondary">
              Explore our work
            </Button>
          </div>
        </div>
      </Container>

      <div className="reveal-up mt-16 md:mt-24" style={{ animationDelay: "200ms" }}>
        <div className="border-t border-line">
          <Container className="flex flex-col divide-y divide-line md:flex-row md:divide-x md:divide-y-0">
            {capabilities.map((cap) => (
              <div key={cap.slug} className="flex-1 py-5 md:px-8 md:py-6 first:md:pl-0 last:md:pr-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                  <span className="text-ink">{cap.number}</span> / {cap.shortName}
                </p>
              </div>
            ))}
          </Container>
        </div>
      </div>
    </section>
  );
}
