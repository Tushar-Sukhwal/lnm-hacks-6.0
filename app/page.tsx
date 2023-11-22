import Image from "next/image";
import Landing from "./_components/landing";
import Topic1 from "./_components/topic1";
import Topic2 from "./_components/topic2";
import Topic3 from "./_components/topic3";
import Topic4 from "./_components/topic4";
import Topic5 from "./_components/topic5";
import Topic6 from "./_components/topic6";
import Navbar from "./_components/Navbar/navbar";
import Hero from "./_components/Hero/hero";
import Marquee from './_components/Marquee/marquee';
import About from './_components/About/about'

export default function Home() {
  return (
    <main className="">
<<<<<<< HEAD
      <Navbar />
      <Hero />
      <Marquee text=" THINK BUILDING, THINK LNM HACKS" />
    <About />
=======
      <Landing />
      <Topic1 />
      <Topic2 />
      <Topic3 />
      <Topic4 />
      <Topic5 /> //tushar
      <Topic6 /> //tushar
>>>>>>> 9daaf3b258ef125d586728f328b115090264145c
    </main>
  );
}
;