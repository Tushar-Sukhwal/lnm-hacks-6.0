
import Image from "next/image";
import Topic6 from "./_components/topic6";
import Topic7 from "./_components/topic7";

import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import Marquee from './Marquee/marquee';
import About from './About/about'
import Schedule from "./Schedule/page";
import CTF from "./CTF/page";
import Tracks from "./Tracks/page";
import Sponsors from "./sponsors/page";
export default function Home() {
  return (
    <main className="h-full w-full">

      {/* <Navbar /> */}
      <Hero />
      <Marquee text=" THINK BUILDING, THINK LNM HACKS" />
    <About />
    <Schedule />
    <CTF/>
    <Topic6 />
    <Topic7 />
    </main>
  );
}
;
