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
    <div className='bg-wormhole h-fit lg:bg-no-repeat bg-cover bg-[#AB93CC] overflow-x-hidden w-screen '>
        <Card className='rounded-none h-[3rem] w-[17rem] border-4  border-black z-20 relative top-20 flex flex-row left-24'>
            <div className = 'border-r-2 w-[60%] border-black bg-white text-black text-xl font-bold text-center py-1'>
              Topic#3
            </div>
              <div className = 'bg-[#AB93CC] text-black w-[40%] text-center py-1 text-xl font-bold'>
                CTF
            </div>
        </Card>
        <div className='flex flex-col lg:flex-row justify-beteeen items-center  py-4 '>
        <div className='p-44'>
        <Content/>
        </div>
        <div className='p-40'>
            <Callout/>
        </div>
        </div>
        <Image alt='done' src={design}/>
    </div>
  )
}

export default CTF