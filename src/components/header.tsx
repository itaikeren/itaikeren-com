import type { ReactNode } from "react";

import { RiGithubLine as GithubIcon, RiTwitterXLine as TwitterIcon } from "@remixicon/react";

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-ink"
    >
      {children}
      <span className="border-b border-transparent group-hover:border-accent">{label}</span>
    </a>
  );
}

function Header() {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold leading-none tracking-tight">Itai Keren</h1>
        <p className="mt-2 font-mono text-xs text-muted">Code &amp; Design</p>
      </div>

      <nav className="flex items-center gap-5">
        {/* X's mark fills its box edge-to-edge while GitHub's has built-in
            padding, so matching them geometrically reads as mismatched.
            Optically the X wants to be a couple of pixels smaller. */}
        <SocialLink href="https://x.com/itaiikeren" label="@itaiikeren">
          <TwitterIcon size={12} />
        </SocialLink>
        <SocialLink href="https://github.com/itaikeren" label="@itaikeren">
          <GithubIcon size={14} />
        </SocialLink>
      </nav>
    </header>
  );
}

export default Header;
