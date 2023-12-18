"use client";
import ScrollLink from "@/components/ScrollLink";
import Image from "next/image";

const Topic7 = () => {
  return (
    <section id="venue" className="w-screen border-t-8 border-black  ">
      <div className="bg-section-7 w-full bg-[#FFAA75] md:p-20 p-7 pb-40">
        <div className="relative md:w-[93%]  border-black border-8  m-auto flex-col md:flex-row flex bg-white z-10  md:py-20 pb-10  mt-20 shadow-section-7 ">
          <div className="md:w-[43%] w-full   md:text-left font-semibold text-4xl md:pl-14 md:pr-32 md:py-10 p-8 pt-14 font-publicSans">
            {/* topic (absolute element ) */}
            <div className="absolute left-0 md:top-[-110px] top-[-80px] font-normal flex text-2xl ">
              <div className="border-2 border-black p-5 border-r-0 bg-white font-meslo font-bold">
                Topic #7
              </div>
              <div className="border-2 border-black p-5 bg-[#FFB587] font-meslo font-bold">
                Venue
              </div>
            </div>
            {/* end  */}
            The LNM Institute Of Information Technology LNMIIT
            <br className="pb-2" />
            <span className=" font-normal text-2xl gap-2 leading-tight font-publicSans">
              Rupa ki Nangal, Jaipur Rajasthan
            </span>
            <br />
            <button className="bg-black font-bold rounded-xl text-white p-3 px-7 -mr-[10px] mt-5 text-xl font-futura">
              <a href="https://www.google.com/maps/place/The+LNM+Institute+of+Information+Technology/@26.936346,75.923523,16z/data=!4m6!3m5!1s0x396dba21e8a1d1c9:0x5ab565cce4d44c2b!8m2!3d26.9362886!4d75.9234891!16s%2Fm%2F04cql40?hl=en-US&entry=ttu">Get Directions</a>
            </button>
          </div>
          <div className="md:w-[50%] h-auto text-right md:p-0 p-4 md:m-0 m-auto mt-3 md:mt-0">
            <img src="/lnmiit-top-view.png" alt="" />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-[#2F2138] md:px-20 px-6 pt-10 pb-6">
        <div className="md:flex-row flex flex-col  justify-between md:items-center">
          <div className="">
            <img
              src="/footer-logo.png"
              alt=""
              className="h-20 w-auto m-auto md:m-0"
            />
            <img
              src="/footer-text-logo.png"
              alt=""
              className="h-14 w-auto mb-4 m-auto "
            />
            <div className="flex  justify-between md:w-[200px]">
              <a href="https://twitter.com/lnmhacks?lang=en">
                <img src="/TwitterX.png" alt="" className="h-10 w-auto" />
              </a>
              <a
                href="https://www.linkedin.com/company/lnm-hacks/?originalSubdomain=in"
                className=""
              >
                <img src="/Linkedin.png" alt="" className="h-10 w-auto" />
              </a>
              <a className="">
                <img src="/Mail.png" alt="" className="h-10 w-auto" />
              </a>
              <a href="https://www.facebook.com/lnmhacks/" className="">
                <img src="/Facebook.png" alt="" className="h-10 w-auto" />
              </a>
            </div>
          </div>
          <div className="text-white underline flex flex-col my-auto md:justify-start md:items-end justify-center mt-10 items-center mb-10 text-2xl md:text-base">
            <div className="flex  gap-4 font-futura font-bold ">
              <div>
                <ScrollLink href="#about">About</ScrollLink>
              </div>
              <div>
                <ScrollLink href="#schedule">Schedule</ScrollLink>
              </div>
              <div>
                <ScrollLink href="#ctf">CTF</ScrollLink>
              </div>
            </div>
            <div className="flex  gap-4 font-futura font-bold">
              <ScrollLink href="">Tracks & Prizes</ScrollLink>
            </div>
            <div className="flex   gap-4 font-futura font-bold ">
              <ScrollLink href="">Our Sponsors</ScrollLink>
              <ScrollLink href="#faqs">FAQs</ScrollLink>
              <ScrollLink href="#venue">Venue</ScrollLink>
            </div>
          </div>
        </div>
        <div className="mt-3 text-white font-semibold w-full text-center font-futura">
          Made with ❤️ in 🇮🇳 by Tushar Sukhwal, Rudransh Singhal and Ayush
          Bansal
        </div>
        <div className="mt-3 text-white font-semibold w-full text-center font-futura">
          Designed with ❤️ in 🇮🇳 by Suryansh Chauhan , Aditya Karanwal & Akshat
          Singh
        </div>
      </div>
    </section>
  );
};
export default Topic7;
