import Separator from "@/components/separator";
import List from "@/components/list";

const NOTES = [
  {
    date: new Date("2021-11-20"),
    link: "/notes/slek",
    title: "Unveiling Slek, a calendar component for React"
  }
];

export default function Home() {
  return (
    <>
      <section className="prose max-w-none dark:text-white">
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
      <Separator />
      <List title="Notes" items={NOTES} headers={["date", "title"]} />
    </>
  );
}
