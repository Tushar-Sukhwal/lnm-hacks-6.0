import React from 'react'
import Slider from './_components/Slider'
import red from '../../public/Rectangle 51.png'
import green from '../../public/Rectangle 50.png'

import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Bounty from './_components/Bounty'

function Tracks() {
  return (
    <div className='bg-third bg-[#FFD567] bg-cover bg-no-repeat h-screen min-w-screen '>
        <Card className='w-[18rem] h-[4rem] text-center border-2 border-black rounded-none relative top-14 left-[44rem]'>
          <CardTitle className='mt-3 font-black text-3xl'>BOUNTIES</CardTitle>
        </Card>

        

        <div className='grid grid-cols-3 gap-4 relative top-20 left-20 px-10'>
          <Bounty/>
          <Bounty/>
          <Bounty/>
          <Bounty/>
          <Bounty/>
          <Bounty/>
          <Bounty/>
          <Bounty/>
          <Bounty/>
        </div>
    </div>
  )
}

 {/* <div className='flex flex-row'>
        <Image alt = 'name' src = {red} className = 'relative left-[91rem] top-[11rem] h-[72vh]' />
        <Slider/>    
        </div>
        <Image alt='name' src={green} className='relative w-[72.5vw] left-[17rem] top-[8rem]' />         */}
export default Tracks