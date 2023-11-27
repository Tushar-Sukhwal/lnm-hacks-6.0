import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Test from './_components/Test'
import Big from './_components/Big'
import Mid from './_components/Mid'
import Check from './_components/Check'
import Image from 'next/image'
import cone from '../../public/Vector 31 (1).png'


function Sponsors() {
  return (
    <div>
         <div className='bg-grid1 bg-[#FFDFE7] bg-cover bg-no-repeat min-h-screen overflow-x-hidden'>
        <Image alt='cone' src={cone} className='relative '/>

        <Card className='w-[18rem] h-[4rem] text-center border-2 border-black rounded-none relative top-14 left-[44rem]'>
          <CardTitle className='mt-3 font-black text-3xl'>SPONSORS</CardTitle>
        </Card>

        <div className=''>
            <div className='grid grid-cols-2 gap-y-2  px-10 py-8 relative left-44'>
                <Big/>
                <Big/>
                <Big/>
                <Big/>
            </div>
        </div>
        <div className='grid grid-cols-3  px-10 relative left-32'>
            <Mid/>
            <Mid/>
            <Mid/>
            <Mid/>
            <Mid/>
            <Mid/>
            <Mid/>
            <Mid/>
            <Mid/>
        </div>

        <div className='grid grid-cols-4 px-28 py-10 relative left-24 items-center'>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>

        </div>
    </div>
    </div>
  )
}

export default Sponsors