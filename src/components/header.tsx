import { ReactNode } from "react";

import { RiTwitterXLine as TwitterIcon, RiGithubLine as GithubIcon } from "@remixicon/react";
import { Link, useLocation } from "react-router-dom";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
}

function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ring-0 hover:ring-1 hover:ring-blue-600 p-1.5 min-w-20 flex items-center bg-blue-50 text-blue-600 text-xs gap-1 transition-all duration-100"
    >
      {children}
    </a>
  );
}

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="mb-3 flex flex-col sm:flex-row justify-between">
      <Link to="/" aria-disabled={pathname === "/" ? true : false} className="-ml-2 aria-disabled:pointer-events-none">
        <h1 className="rounded p-1.5 text-2xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800">Itai Keren</h1>
      </Link>
      <nav className="flex items-center gap-2">
        <SocialLink href="https://x.com/itaiikeren">
          <TwitterIcon size={16} strokeWidth={1.85} />
          @itaiikeren
        </SocialLink>
        <SocialLink href="https://github.com/itaikeren/">
          <GithubIcon size={16} strokeWidth={1.85} />
          @itaikeren
        </SocialLink>
      </nav>
    </header>
  );
}

export default Header;
