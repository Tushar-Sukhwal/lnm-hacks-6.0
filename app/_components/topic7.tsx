import Image from "next/image";

const Topic7 = () => {
  return (
    <section id="venue" className="w-screen border-t-8 border-black ">
      <div className="bg-section-7   w-full bg-[#FFAA75] p-20 pb-40">
        <div className="md:w-[93%]  border-black border-8  m-auto flex bg-white z-10  py-20 mt-20 shadow-section-7">
          <div className="md:w-[43%] relative text-left font-semibold text-4xl pl-14 pr-40 pt-10 ">
            {/* topic (absolute element ) */}
            <div className="absolute left-0 top-[-150px] font-normal flex text-xl">
              <div className="border-2 border-black px-2 border-r-0 bg-white">
                Topic #7
              </div>
              <div className="border-2 border-black px-2 bg-[#FFB587]">
                Venue
              </div>
            </div>
            {/* end  */}
            The LNM Institute Of Information Technology LNMIIT
            <br className="pb-2" />
            <span className=" font-light text-2xl gap-2 leading-tight ">
              Rupa ki Nangal, Jaipur Rajasthan
            </span>
            <br />
            <button className="bg-black font-bold rounded-xl text-white p-3 px-7 -mr-[10px] mt-5 text-xl">
              Get Directions
            </button>
          </div>
          <div className="w-[600px] h-auto text-right">
            <img src="/lnmiit-top-view.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#2F2138] px-20 ">
        <div className="flex justify-between">
          <div className="w-">
            <img src="/footer-logo.png" alt="" className="h-20 w-auto" />
            <img
              src="/footer-text-logo.png"
              alt=""
              className="h-14 w-auto mb-4"
            />
            <div className="flex  justify-between w-[200px]">
              <button className="">
                <img src="/TwitterX.png" alt="" className="h-10 w-auto" />
              </button>
              <button className="">
                <img src="/Linkedin.png" alt="" className="h-10 w-auto" />
              </button>
              <button className="">
                <img src="/Mail.png" alt="" className="h-10 w-auto" />
              </button>
              <button className="">
                <img src="/Facebook.png" alt="" className="h-10 w-auto" />
              </button>
            </div>
          </div>
          <div className="text-white underline flex flex-col my-auto justify-start items-end">
            <div className="flex justify-space-around gap-3" >
              <a href="">About</a>
              <a href="">Schedule</a>
              <a href="">CTF</a>
            </div>
            <div className="flex justify-space-around gap-3">
              <a href="">Tracks & Prizes</a>
            </div>
            <div className="flex justify-space-around gap-3">
              <a href="">Our Sponsors</a>
              <a href="">FAQs</a>
              <a href="">Venue</a>
            </div>
          </div>
        </div>
        <div className="mt-3 text-white font-semibold w-full text-center">
          Designed with ❤️ in 🇮🇳 by Suryansh Chauhan , Aditya Karanwal & Akshat
          Singh
        </div>
      </div>
    </section>
  );
};
export default Topic7;

