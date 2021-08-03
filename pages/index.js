import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Itai Keren</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 px-20 mt-20 space-y-20 w-full lg:w-3/5 selection:bg-black selection:text-white">
        <header className="font-noto text-left flex flex-col space-y-5">
          <div className="text-4xl font-black selection:bg-yellow-600">Itai Keren</div>
        </header>
        {/* <div className="text-4xl my-5 select-none">👋</div> */}
        <div className="w-full my-5">
          {/* <div className="text-xl font-light">👨🏻‍💻 Full-Stack Software Engineer & 👨🏻‍🎨 Product Designer</div> */}
          <div className=" font-light space-y-5">
            <p>Itai (b. 1993) is a designer and developer focusing on visual ideas.</p>
            <p>
              Started programming in high school, Itai worked as a{" "}
              <span className="font-bold">graphic designer and full stack developer</span>, and got his BSc degree in{" "}
              <span className="font-bold">Software Engineering</span> from Afeka Academic College.
            </p>
            <p>
              Itai has a big passion for <span className="font-bold">open source</span> projects and always looking for
              opportunities to contribute. He also a big fan of FPS & RTS games, movies and gadgets.
            </p>
          </div>
          <hr className="my-5" />
          <div className="flex flex-col space-y-5 lg:flex-row w-full lg:space-y-0 justify-between">
            <div>
              GitHub{" "}
              <a className="text-blue-500 underline p-1" href="https://github.com/itaikeren/" target="_blank">
                @itaikeren
              </a>
            </div>
            <div>
              Twitter{" "}
              <a className="text-blue-500 underline p-1" href="https://twitter.com/itai_keren/" target="_blank">
                @itai_keren
              </a>
            </div>
            <div>
              LinkedIn{" "}
              <a className="text-blue-500 underline p-1" href="https://www.linkedin.com/in/itaikeren/" target="_blank">
                @itaikeren
              </a>
            </div>
            <div>
              Dribbble{" "}
              <a className="text-blue-500 underline p-1" href="https://dribbble.com/itaikeren/" target="_blank">
                @itaikeren
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
