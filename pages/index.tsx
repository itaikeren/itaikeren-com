import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Twitter, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      className="rounded p-1.5 hover:bg-slate-100 active:translate-y-0.5 dark:hover:bg-slate-800"
    >
      {children}
    </a>
  );
}

function ThemeToggle() {
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
        {theme === "system" && <Sun size={16} strokeWidth={1.85} />}
      </button>
      <span className="pointer-events-none translate-x-2 select-none font-roboto-mono text-xs text-slate-400 opacity-0 transition-all peer-hover:translate-x-0 peer-hover:opacity-100">
        {theme}
      </span>
    </div>
  );
}

const ITEMS = [
  {
    link: "raycast.com",
    name: "Raycast",
    description:
      "A blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more."
  },
  {
    link: "warp.dev",
    name: "Warp",
    description: "A modern, Rust-based terminal with AI built in so you and your team can build great software, faster."
  },
  {
    link: "cron.com",
    name: "Cron",
    description: "Cron is the next-generation calendar for professionals and teams."
  },
  {
    link: "arc.net",
    name: "Arc",
    description:
      "Experience a calmer, more personal internet in this browser designed for you. Let go of the clicks, the clutter, the distractions."
  },
  {
    link: "fig.io",
    name: "Fig",
    description: "Fig adds VSCode-style autocomplete to your terminal."
  },
  {
    link: "figma.com",
    name: "Figma",
    description: "The collaborative interface design tool."
  },
  {
    link: "notion.so",
    name: "Notion",
    description: "The all-in-one workspace for your notes, tasks, wikis, and databases."
  },
  {
    link: "linear.app",
    name: "Linear",
    description: "Linear helps streamline software projects, sprints, tasks, and bug tracking."
  },
  {
    link: "code.visualstudio.com",
    name: "VSCode",
    description: "You know..."
  }
];

function ListItem({ link, name, description }) {
  const [error, setError] = useState(false);

  const fallbackImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN83qlYDwAGAgISXgNCwAAAAABJRU5ErkJggg==";

  return (
    <div className="flex items-start gap-2 border-b px-1.5 py-3 text-xs transition-all last:border-none hover:bg-slate-100 dark:hover:bg-slate-800">
      <div className="flex min-w-[100px] items-center gap-2">
        <Image
          className="h-4 w-4 rounded bg-white outline outline-1 outline-slate-100 dark:bg-slate-900 dark:outline-slate-800"
          src={error ? fallbackImage : `https://aggressive-lime-tick.faviconkit.com/${link}/256`}
          onError={() => setError(true)}
          width={16}
          height={16}
          alt={`${name} favicon`}
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPkqgcAAJkAi3T5YcEAAAAASUVORK5CYII="
        />
        <a className="border-b border-current" href={`https://${link}/`} target="_blank">
          {name}
        </a>
      </div>
      <p className="grow text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col gap-5 py-5 text-gray-800 selection:bg-green-200 dark:text-white dark:selection:text-gray-800 sm:max-w-2xl md:py-20 lg:max-w-3xl">
      <Head>
        <title>Itai Keren - Software engineer, product designer, and entrepreneur</title>
        <meta
          property="og:title"
          key="title"
          content="Itai Keren - Software engineer, product designer, and entrepreneur"
        />
        <meta
          property="og:description"
          key="description"
          content="I'm Itai, a software engineer, product designer and entrepreneur based in Israel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between font-inter">
        <h1 className="text-2xl font-bold">Itai Keren</h1>
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
      <section className="prose prose-sm max-w-none font-mono dark:text-white">
        <p>
          Hey there! I'm a software engineer and product designer from Israel, but honestly, I've been messing around
          with code and design since I was just a kid. I started off dabbling in web design, and by the time I hit 12, I
          thought, "Why not make these designs <i>do</i> cool stuff?" So, I dived into coding, and man, it's been a wild
          ride ever since!
        </p>

        <p>
          I'm super into open-source stuff, especially those nifty dev tools and anything that boosts productivity. I
          just love the whole vibe of everyone chipping in and making something awesome together. So, if you're into any
          of that or just wanna chat about the latest tech, hit me up!
        </p>
      </section>
      <div className="inline-flex items-center justify-center text-2xl">***</div>
      <section className="flex flex-col gap-2 font-mono text-sm dark:text-white">
        <p>My current weapons of choice! if you know something cool I should use, please let me know!</p>
        <div className="flex flex-col">
          <div className="flex gap-2 border-b p-1.5 font-roboto-mono text-xs text-slate-500 dark:text-slate-400">
            <span className="min-w-[100px]">tool</span>
            <span>description</span>
          </div>
          {ITEMS.map((item) => (
            <ListItem key={item.link} {...item} />
          ))}
        </div>
      </section>
      <div className="inline-flex items-center justify-center text-2xl">***</div>
      <footer className="flex items-center justify-between font-mono text-xs text-slate-600 antialiased dark:text-white">
        <span>{`${new Date().getFullYear()} Itai Keren`}</span>
        <a className="border-b border-current" href="mailto:i@itaikeren.com">
          Email
        </a>
      </footer>
    </div>
  );
}
