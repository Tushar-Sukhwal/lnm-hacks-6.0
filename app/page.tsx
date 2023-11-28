
import Image from "next/image";
import Landing from "./_components/landing";
import Topic1 from "./_components/topic1";
import Topic2 from "./_components/topic2";
import Topic3 from "./_components/topic3";
import Topic4 from "./_components/topic4";
import Topic5 from "./_components/topic5";
import Topic6 from "./_components/topic6";
import Topic7 from "./_components/topic7";

import Navbar from "./_components/Navbar/navbar";
import Hero from "./_components/Hero/hero";
import Marquee from './_components/Marquee/marquee';
import About from './_components/About/about'
import Schedule from "./Schedule/page";
import CTF from "./CTF/page";
import Tracks from "./Tracks/page";
import Sponsors from "./sponsors/page";
export default function Home() {
  return (
    <main className="h-full w-full">

      <Navbar />
      <Hero />
      <Marquee text=" THINK BUILDING, THINK LNM HACKS" />
    <About />
    <Schedule />
    <CTF/>
    <Tracks/>
    <Sponsors />
    <Topic6 /> 
    <Topic7 />
    </main>
  );
}
;
