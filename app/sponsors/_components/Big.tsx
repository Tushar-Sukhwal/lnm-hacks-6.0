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

function Big() {
  return (
    <div>
      <div>
        <Image
          alt="blue"
          src={blue}
          className="h-[22.9rem] relative left-[27.8rem] top-[22.9rem]"
        />
        <Card className="rounded-none h-[20rem] w-[28rem] border-2 border-black"></Card>
        <Image alt="yellow" src={yellow} className="w-[31rem]" />
      </div>
    </div>
  );
}

export default Big;
