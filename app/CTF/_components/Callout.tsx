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

function Callout() {
  return (
    <Card className=' h-[35rem] w-[28rem] border-4 border-black rounded-xl z-10'>
    <div className='bg-[#99DBE7] h-[15%] flex flex-row border-b-2 border-black gap-x-[15rem] items-center'>
      <div className='flex flex-row items-center ml-3 gap-x-5  '>
        <img src="./Ellipse 3.svg" className='h-[10%]' alt="" />
        <img src="./Ellipse 3.svg" className='h-[10%]' alt="" />
        <img src="./Ellipse 3.svg" className='h-[10%]' alt="" />
      </div>
      <img src="./X.svg" className='h-[30%] px-4' alt="" />
    </div>
    <Image alt='done' src={cat} className='h-[85%]' />
  </Card>
  )
}

export default Callout