import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import yellow from "../../../public/Rectangle 8.png";
import blue from "../../../public/Rectangle 9.svg";
import Image from "next/image";
import solana from "../../../public/image 24.png"


function Mid() {
  return (
    <div>
      <div>
        <div>
          <Image
            alt="blue"
            src={blue}
            className="h-[14rem] relative left-[19.1rem] top-[13.8rem] hidden lg:visible"
          />
          <Card className="rounded-none h-[12rem] w-[20rem] border-2 border-black">
          <Image alt ='solana' src={solana} className="relative px-5 top-16 left-5" />
          </Card>
          <Image alt="yellow" src={yellow} className="w-[22.2rem] hidden lg:visible" />
        </div>
      </div>
    </div>
  );
}

export default Mid;
