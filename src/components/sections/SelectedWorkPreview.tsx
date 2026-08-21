import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { workItems } from "@/data/work";

export function SelectedWorkPreview() {
  const project = workItems[0];
  if (!project) return null;

  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="mt-4 max-w-[20ch] text-[30px] font-medium leading-[1.2] tracking-[-0.01em] text-ink md:text-[36px]">
              Real work, not mockups.
            </h2>
          </div>
          <Button href="/work" variant="secondary" className="hidden md:inline-flex">
            View all work
          </Button>
        </div>
      </Container>

      <Container className="mt-12 md:mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start md:gap-8">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-lg border border-line md:col-span-8"
          >
            <Image
              src={project.image.desktop}
              alt={`${project.name} website, desktop view`}
              width={2880}
              height={1470}
              className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </Link>

          <div className="md:col-span-4">
            <p className="text-[13px] font-medium text-muted">{project.category}</p>
            <h3 className="mt-2 text-[22px] font-medium text-ink">{project.name}</h3>
            <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-muted">
              {project.description}
            </p>
            <p className="mt-4 text-[12.5px] leading-relaxed text-muted">
              {project.relationship}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink underline decoration-silver decoration-2 underline-offset-[6px] hover:decoration-ink"
            >
              View website
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <Button href="/work" variant="secondary">
            View all work
          </Button>
        </div>
      </Container>
    </section>
  );
}
