import React from 'react'
import Time from './_components/Time'
import Image from 'next/image'
import back from '../../public/Group 13.png'
import anim from '../../public/anim window.png'
import Cal from './_components/Cal'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Schedule = () => {
  return (
    <div className='bg-waves h-screen  bg-no-repeat bg-contain bg-[#DDD6F4] border-b-8 border-black'>
       <Card className='rounded-none h-[3rem] w-[17rem] border-4  border-black z-20 relative top-20 flex flex-row left-24'>
            <div className = 'border-r-2 w-[60%] border-black bg-white text-black text-xl font-bold text-center py-1'>
              Topic#2
            </div>
              <div className = 'bg-[#AB93CC] text-black w-[40%] text-center py-1 text-xl font-bold'>
                Schedule
            </div>
        </Card>
        <div className='flex flex-row gap-x-[20rem] px-10'>
        <div className='px-6 relative mb-8 '>
        <Time/>
        <Image alt='back' src={back} className='ml-[7rem] h-[47%] w-[100%] relative bottom-[10rem] ' />
        </div>
        <div>
        <Cal/>
        <Image alt='back' src={anim} className='ml-[9rem]  relative bottom-[8rem] ' />
        </div>
        </div>
       
       
    </div>
  )
}

export default Schedule