import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Twitter, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

function Header() {
  const pathname = usePathname();

  const SocialLink = ({ href, children }) => {
    return (
      <a
        href={href}
        target="_blank"
        className="rounded p-1.5 hover:bg-slate-100 active:translate-y-0.5 dark:hover:bg-slate-800"
      >
        {children}
      </a>
    );
  };

  const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();

    const toggleTheme = () => {
      if (theme === "light") {
        setTheme("system");
      } else if (theme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    return (
      <div className="flex flex-row-reverse items-center gap-1">
        <button
          className="peer rounded p-1.5 hover:bg-slate-100 active:translate-y-0.5 dark:hover:bg-slate-800"
          onClick={toggleTheme}
        >
          {theme === "light" && <Sun size={16} strokeWidth={1.85} />}
          {theme === "dark" && <Moon size={16} strokeWidth={1.85} />}
          {theme === "system" && <Monitor size={16} strokeWidth={1.85} />}
        </button>
        <span className="pointer-events-none translate-x-2 select-none font-roboto-mono text-xs text-slate-400 opacity-0 transition-all peer-hover:translate-x-0 peer-hover:opacity-100">
          {theme}
        </span>
      </div>
    );
  };

  return (
    <header className="mb-3 flex justify-between font-inter">
      <Link
        href="/"
        aria-disabled={pathname === "/" ? true : false}
        className="-ml-2 aria-disabled:pointer-events-none"
      >
        <h1 className="rounded p-1.5 text-2xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800">Itai Keren</h1>
      </Link>
      <nav className="flex items-center gap-2">
        <ThemeToggle />
        <SocialLink href="https://twitter.com/itai_keren/">
          <Twitter size={16} strokeWidth={1.85} />
        </SocialLink>
        <SocialLink href="https://github.com/itaikeren/">
          <Github size={16} strokeWidth={1.85} />
        </SocialLink>
      </nav>
    </header>
  );
}

export default Header;
