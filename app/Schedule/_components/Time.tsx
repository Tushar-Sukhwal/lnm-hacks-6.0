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
import back from '../../../public/Group 13.png'


function Time() {
  return (
    <div  >
       <Card className='w-[20rem] h-[12.5rem] lg:w-[40rem] lg:h-[25rem] relative top-[12rem] left-4 lg:left-10  border-4 border-black rounded-none rounded-lg z-10 '>
      <div className='bg-[#FF9AA2] h-[25%] flex flex-row border-b-2 border-black  lg:gap-x-[32rem] items-center justify-between'>
        <div className='flex flex-row items-center ml-3 gap-x-5  '>
          <img src="./Ellipse 3.svg" className='w-[10%] lg:w-[45%]' alt="" />
          <img src="./Ellipse 3.svg" className='w-[10%] lg:w-[45%]' alt="" />
          <img src="./Ellipse 3.svg" className=' w-[10%] lg:w-[45%]' alt="" />
        </div>
        <img src="./X.svg" className='h-[45%] px-2' alt="" />
      </div>
      <div className='h-[75%] md:py-5'>
      
        <CardTitle className='text-3xl lg:text-6xl font-publicSans ml-4 mt-3 italic'>
        Scheduleee
        </CardTitle>
  
      <CardContent className='text-xs lg:text-xl py-4 font-publicSans font-bold '>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </CardContent>
      </div>
     
    </Card>
    <Image alt='back' src={back} className=' lg:ml-[7rem] h-[20%] w-[80%] lg:h-[60%] lg:w-[90%] relative left-[5rem] top-[4rem] lg:top-[1rem] lg:left-[6rem]   ' />

    </div>
   
  )
}

export default Time