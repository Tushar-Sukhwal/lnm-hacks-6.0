import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import Image from 'next/image'
  import cat from '../../../public/ctf illustration 1.png'
  import browser from '../../../public/div.c-browser.png'


function Callout() {
  return (
    <div>
    <Card className='h-[25rem] w-[18rem] md:h-[35rem] md:w-[28rem] border-4 border-black rounded-xl z-10 shadow-[15px_29px_0px_10px_#1a202c]'>
    <div className='bg-[#99DBE7] h-[15%] flex flex-row border-b-2 border-black gap-x-[4rem] lg:gap-x-[15rem] items-center justify-evenly'>
      <div className='flex flex-row items-center ml-3 gap-x-5  '>
        <img src="./Ellipse 3.svg" className='lg:w-[20%] w-[15%] ' alt="" />
        <img src="./Ellipse 3.svg" className='lg:w-[20%] w-[15%]' alt="" />
        <img src="./Ellipse 3.svg" className='lg:w-[20%] w-[15%]' alt="" />
      </div>
      <img src="./X.svg" className='h-[30%] lg:px-4 ' alt="" />
    </div>
    <Image alt='done' src={cat} className='h-[85%]' />
  </Card>
  <a href="https://ctfland.netlify.app/">
  <Image alt='done' src={browser} className='w-[60%] lg:w-[60%] lg:relative lg:left-[21rem] lg:bottom-[10rem] ' />
  </a>

  
  </div>
    
  )
}

export default Callout