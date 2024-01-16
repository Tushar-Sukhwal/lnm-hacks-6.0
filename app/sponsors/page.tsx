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
import banner from "../../public/banner.png"
import solana from "../../public/image 24.png"
import { StaticImageData } from "next/image"
import aops from "../../public/AoPS_Main_Logo (1).png"
import zeta from "../../public/green@4x.png"
import jb from "../../public/jb_beam.png"
import echo from "../../public/echo3D - Logo 2021 - Black.png"
function Sponsors() {
  return (
    <div>
         <div className='bg-grid1 bg-[#FFDFE7] bg-cover bg-no-repeat min-h-screen overflow-x-hidden lg:w-screen '>
         
        <Image alt='cone' src={cone} className='relative lg:top-0 '/>

        <Card className='rounded-none h-[3rem] w-[17rem] border-4  border-black z-20 relative top-[7rem] flex flex-row left-24 invisible md:visible'>
            <div className = 'border-r-2 w-[40%] border-black bg-white text-black text-xl font-bold text-center py-1'>
              Topic#5
            </div>
              <div className = 'bg-[#D9BFFF] text-black w-[60%] text-center py-1 text-xl font-bold'>
                Sponsors
            </div>
        </Card>

        <Card className='lg:w-[18rem] lg:h-[4rem] w-[12rem] h-[3rem] text-center border-2 border-black rounded-none relative lg:top-14 lg:left-[44rem] left-[6rem] top-10 '>
          <CardTitle className='mt-2 font-black text-2xl   lg:text-3xl '>SPONSORS</CardTitle>
        </Card>

         <div className=''>
            <div className='md:grid md:grid-cols-2 gap-y-2 py-24 px-20  lg:px-10 lg:py-5 lg:mb-4 relative lg:left-44 space-y-3 lg:space-x-5  '>
                <Big sponsor = {aops} classname="mt-2 p-2 md:mt-10 "/>
                <Big sponsor = {zeta} classname="w-[86%] ml-2 md:mt-10 lg:ml-5 " />
                <Big sponsor = {jb} classname="w-[50%] ml-9 lg:w-[70%]"/>
                
                <Big sponsor = {echo} classname="mt-2 p-4 md:w-[70%] lg:w-[80%] xl:w-[90%] lg:mt-[6rem] "/>
            </div>
        </div>
        {/* <div className='grid grid-cols-3 place-content-center px-10 relative left-32'>
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

        </div> */}
    </div>
    <Image alt="social" src={banner} className='w-full'/>
    
    </div>
  )
}

export default Sponsors