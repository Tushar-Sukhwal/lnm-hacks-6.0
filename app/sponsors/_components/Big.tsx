"use client"
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
import { useMediaQuery } from 'usehooks-ts'
import { StaticImageData } from "next/image"



function Big({sponsor , classname} : {sponsor:any , classname :any}) {
  const matches = useMediaQuery('(min-width:1024px )')
  return (
    <div>
      <div>
        <Image
          alt="blue"
          src={blue}
          className={`h-[22.9rem] relative left-[27.8rem] top-[22.9rem] ${matches ? 'block' : 'hidden'}`} 
        />
        <Card className="rounded-none h-[6rem] w-[12rem] md:h-[10rem] md:w-[15rem] lg:h-[20rem] lg:w-[28rem] border-2 border-black ">
          <Image alt="sponsor" src={sponsor} className={classname} />
        </Card>
        <Image alt="yellow" src={yellow} className={`w-[31rem] ${matches ? 'block' : 'hidden'}`}  />
      </div>
    </div>
  );
}

export default Big;
