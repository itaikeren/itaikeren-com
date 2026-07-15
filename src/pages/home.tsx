import type { CSSProperties } from "react";

import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <p
        className="rise max-w-[54ch] text-pretty text-[1.05rem] leading-[1.7] text-ink"
        style={{ "--rise-delay": "90ms" } as CSSProperties}
      >
        Hey, I&rsquo;m Itai. I build small, sharp tools and care a lot about how they feel&nbsp;&mdash; lately for the
        space where people and their agents meet. Based in Israel.
      </p>

      <div className="rise" style={{ "--rise-delay": "200ms" } as CSSProperties}>
        <Projects />
      </div>
    </div>
  );
}
