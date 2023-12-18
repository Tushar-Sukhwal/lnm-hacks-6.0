import React from "react";
import Time from "./_components/Time";
import Image from "next/image";
import back from "../../public/Group 13.png";
import anim from "../../public/anim window.png";
import Cal from "./_components/Cal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="bg-waves lg:h-screen lg:w-screen  lg:bg-no-repeat bg-contain bg-[#DDD6F4] border-b-8 border-black  "
    >
      <Card className="rounded-none h-[3rem] w-[17rem] lg:h-[4rem] lg:w-[20rem] border-4  border-black z-20 relative top-10 flex flex-row left-16">
        <div className="border-r-2 w-[50%] border-black bg-white text-black text-xl font-bold text-center font-meslo py-1 lg:py-4">
          Topic#2
        </div>
        <div className="bg-[#AB93CC] text-black w-[50%] text-center py-1 lg:py-4 text-xl font-bold font-meslo">
          Schedule
        </div>
      </Card>
      <div className="flex flex-col  lg:flex-row justify-around items-center px-4 lg:mr-16 lg:space-x-11">
        <div className=" relative mb-9 lg:bottom-[12rem] ">
          <Time />
        </div>
        <div className="items-center py-3 mb-4 relative left-7 lg:left-10 ">
          <Cal />
          <Image
            alt="back"
            src={anim}
            className="w-[50%] lg:w-[72%] ml-[9rem] z-20 relative bottom-28"
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
