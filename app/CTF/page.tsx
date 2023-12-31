import React from 'react'
import Content from './_components/Content'
import Image from 'next/image'
import window from '../../public/CTF window.png'
import browser from '../../public/div.c-browser.png'
import Callout from './_components/Callout'
import design from '../../public/Vector 31.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function CTF() {
 


  return (
    <section id="ctf" className='bg-wormhole h-fit lg:bg-no-repeat bg-cover bg-[#AB93CC] overflow-x-hidden w-screen cursor-[url(/Vector.cur), _pointer] border border-b-8 border-black '>
        <Card className="rounded-none h-[3rem] w-[17rem] lg:h-[4rem] lg:w-[20rem] border-4  border-black z-20 relative top-10 flex flex-row left-16 ">
        <div className="border-r-2 w-[50%] border-black bg-white text-black text-xl font-bold text-center font-meslo py-1 lg:py-4">
          Topic#3
        </div>
        <div className="bg-[#AB93CC] text-black w-[50%] text-center py-1 lg:py-4 text-xl font-bold font-meslo">
          CTF
        </div>
      </Card>
        <div className='flex flex-col justify-between lg:flex-row lg:justify-evenly items-center py-1 px-8 '>
        <div className='p-20 '>
        <Content/>
        </div>
        <div className='p-20'>
            <Callout/>
        </div>
        </div>
        {/* <Image alt='done' src={design}/> */}
    </section>
  )
}

export default CTF