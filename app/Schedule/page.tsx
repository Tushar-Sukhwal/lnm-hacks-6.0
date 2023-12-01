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
    <div className='bg-waves lg:h-screen lg:w-screen  lg:bg-no-repeat bg-contain bg-[#DDD6F4] border-b-8 border-black  '>
       <Card className='rounded-none h-[3rem] w-[17rem] border-4  border-black z-20 relative top-10 flex flex-row left-24'>
            <div className = 'border-r-2 w-[60%] border-black bg-white text-black text-xl font-bold text-center py-2'>
              Topic#2
            </div>
              <div className = 'bg-[#AB93CC] text-black w-[40%] text-center py-1 text-xl font-bold'>
                Schedule
            </div>
        </Card>
        <div className='flex flex-col  lg:flex-row justify-evenly items-center'>
        <div className=' relative mb-9 lg:bottom-[12rem] '>
        <Time/>
        </div>
        <div className='items-center py-10 mb-4 relative left-10 '>
        <Cal/>
        <Image alt='back' src={anim} className='w-[40%] lg:w-[80%] ml-[9rem]  relative top-[2rem] lg:bottom-[8rem] ' />
        </div>
        </div>
       
       
    </div>
  )
}

export default Schedule