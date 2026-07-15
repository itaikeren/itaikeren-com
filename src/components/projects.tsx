import type { ReactNode } from "react";

import { LocutoryMark, MdvMark } from "@/components/marks";

interface Project {
  index: string;
  name: string;
  tagline: string;
  href: string;
  mark: ReactNode;
}

const projects: Project[] = [
  {
    index: "01",
    name: "mdv",
    tagline: "Write it in markdown, ship it as a link.",
    href: "https://github.com/itaikeren/mdv",
    mark: <MdvMark className="size-[22px] text-mdv" />
  },
  {
    index: "02",
    name: "locutory",
    tagline: "A Meet link, but for agents.",
    href: "https://github.com/itaikeren/locutory",
    mark: <LocutoryMark className="size-8" />
  }
];

function ProjectRow({ index, name, tagline, href, mark }: Project) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group -mx-3 flex items-center gap-4 rounded-[3px] px-3 py-3.5 transition-colors duration-200 hover:bg-paper-raised"
    >
      <span className="w-5 shrink-0 font-mono text-[0.7rem] text-faint tabular-nums">{index}</span>

      <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-[2px] border border-line bg-paper">
        {mark}
      </span>

      <span className="flex min-w-0 flex-col">
        <span className="font-medium tracking-tight transition-colors duration-200 group-hover:text-accent">
          {name}
        </span>
        <span className="truncate font-mono text-xs text-muted">{tagline}</span>
      </span>

      <span
        aria-hidden
        className="ml-auto translate-x-0 font-mono text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
      >
        &#8599;
      </span>
    </a>
  );
}

function Projects() {
  return (
    <section aria-label="Open source" className="flex flex-col gap-3">
      <div className="flex items-baseline gap-3">
        <h2 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">Open source</h2>
        <span className="h-px flex-1 bg-line" />
        <span className="font-mono text-[0.7rem] text-faint tabular-nums">{projects.length}</span>
      </div>

      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectRow key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
