import Head from "next/head";
import Image from "next/image";
import Button from "../components/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Itai Keren</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 w-full px-10 mt-20 space-y-5 md:mt-32 lg:w-3/5 font-inter">
        <header className="flex flex-col">
          <div className="text-3xl font-bold">Hey, I'm Itai.</div>
          <div className="text-xl">
            A <span className="font-roboto-mono">developer</span> and{" "}
            <span className="text-2xl font-edu-sa">designer</span> focusing on visual ideas.
          </div>
        </header>
        <div className="w-full">
          <div className="space-y-5 font-light">
            <p>
              Started programming in high school, worked as a{" "}
              <span className="font-bold">full stack developer and product designer</span>, and got my BSc degree in{" "}
              <span className="font-bold">Software Engineering</span> from Afeka Academic College.
            </p>
            <p>
              Big passion for <span className="font-bold">open source</span> projects and always looking for
              opportunities to contribute. I'm also a big fan of FPS & RTS games, movies and gadgets.
            </p>
          </div>
          <div className="my-5 bg-[url('../images/divider.svg')] w-full h-1.5" />
          <div className="flex flex-col justify-between w-full space-y-5 lg:flex-row lg:space-y-0">
            <Button text={"Github"} image={require("../images/github.svg")} href={"https://github.com/itaikeren/"} />
            <Button
              text={"Twitter"}
              image={require("../images/twitter.svg")}
              href={"https://twitter.com/itai_keren/"}
            />
            <Button
              text={"Linkedin"}
              image={require("../images/linkedin.svg")}
              href={"https://www.linkedin.com/in/itaikeren/"}
            />
            <Button
              text={"Dribbble"}
              image={require("../images/dribbble.svg")}
              href={"https://dribbble.com/itaikeren/"}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
