import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container>
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">404</p>
        <h1 className="mt-4 max-w-[16ch] text-[34px] font-medium leading-[1.2] tracking-[-0.01em] text-ink md:text-[42px]">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-muted">
          The link may be outdated, or the page has moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back to homepage
          </Button>
        </div>
      </Container>
    </section>
  );
}
