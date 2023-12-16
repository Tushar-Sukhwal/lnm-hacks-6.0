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
  

  import solana from "../../../public/image 24.png"

  import dollar from '../../../public/$ (1).svg'

function Bounty() {
  return (
    <div>
        <Card className='rounded-none h-[3rem] w-[7rem] border-4  border-black z-20 relative top-6 flex flex-row'>
            <div className = 'border-r-2 w-[40%] border-black bg-[#61C0F5] text-white text-xl text-bold  '>
            <Image alt='sola' src={dollar}  className='w-5 ml-2' />
              
            </div>
              <div className = 'bg-black text-white w-[60%] text-center py-1 text-2xl font-bold'>
                850
            </div>
        </Card>
        <Card className='rounded-none h-[8rem] w-[15rem] border-4 border-black shadow-[13px_15px_0px_6px_#1a202c]'>
            <Image alt='sola' src={solana}  className='relative px-5 top-12' />
        </Card>
    </div>
   
  )
}

export default Bounty