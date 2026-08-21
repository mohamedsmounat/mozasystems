import Image from "next/image";
import type { WorkItem } from "@/data/work";

export function WorkCard({ project }: { project: WorkItem }) {
  return (
    <article className="border-t border-line py-14 first:border-t-0 first:pt-0 md:py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start md:gap-8">
        <a
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
        </a>

        <div className="md:col-span-4">
          <p className="text-[13px] font-medium text-muted">{project.category}</p>
          <h2 className="mt-2 text-[24px] font-medium text-ink">{project.name}</h2>
          <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-muted">
            {project.detail}
          </p>
          <p className="mt-4 text-[12.5px] leading-relaxed text-muted">{project.relationship}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink underline decoration-silver decoration-2 underline-offset-[6px] hover:decoration-ink"
          >
            View website
            <span aria-hidden="true">↗</span>
          </a>

          <div className="mt-8 max-w-[220px] overflow-hidden rounded-lg border border-line">
            <Image
              src={project.image.mobile}
              alt={`${project.name} website, mobile view`}
              width={1170}
              height={2020}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
