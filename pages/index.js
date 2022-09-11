import Head from "next/head";
import Link from "next/link";
import { Container } from "../components/Container";
import { DribbbleIcon, GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../components/SocialIcons";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition cursor-pointer fill-zinc-500 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300" />
    </Link>
  );
}

export default function Home() {
  return (
    <div className="py-2 mt-32">
      <Head>
        <title>Itai Keren - Software engineer, product designer, and entrepreneur</title>
        <meta
          name="description"
          content="I'm Itai, a software engineer, product designer and entrepreneur based in Israel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <div className="flex flex-col space-y-3">
            <h1 className="text-4xl text-indigo-600 select-none dark:text-indigo-500 sm:text-5xl">✦</h1>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Software engineer, product designer, and entrepreneur.
            </h1>
          </div>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Itai, a software engineer, product designer and entrepreneur based in Israel. Big passion for open
            source projects and always looking for opportunities to contribute. I'm also a big fan of FPS & RTS games,
            and gadgets.
          </p>
          <div className="flex gap-6 mt-6">
            <SocialLink href="https://twitter.com/itai_keren/" aria-label="Follow on Twitter" icon={TwitterIcon} />
            <SocialLink href="https://github.com/itaikeren/" aria-label="Follow on GitHub" icon={GitHubIcon} />
            <SocialLink
              href="https://www.linkedin.com/in/itaikeren/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink href="https://dribbble.com/itaikeren/" aria-label="Follow on Dribbble" icon={DribbbleIcon} />
          </div>
        </div>
      </Container>
    </div>
  );
}
