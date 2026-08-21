import { Container } from "@/components/ui/Container";

export function Positioning() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted md:col-span-3">
            What we do
          </p>
          <div className="md:col-span-8 md:col-start-4">
            <p className="font-serif text-[24px] leading-[1.5] text-ink md:text-[30px]">
              Most businesses lose customers and hours to the same two problems: nobody knows they
              exist, and too much of the day goes to work that shouldn&apos;t need a person.
            </p>
            <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-muted md:text-[17px]">
              Moza Systems builds things that fix both. Creator marketing brings the right
              audience to a brand. A well-built website turns that attention into contact.
              AI systems handle the follow-up, the admin and the repeat questions, so the business
              can spend its time on the parts a person actually needs to be there for.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
