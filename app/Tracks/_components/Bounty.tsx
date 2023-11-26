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
function Bounty() {
  return (
    <div>
        <Card className='rounded-none h-[3rem] w-[7rem] border-4  border-black z-20 relative top-6'>

        </Card>
        <Card className='rounded-none h-[8rem] w-[15rem] border-4 border-black'>
            <Image alt='sola' src={solana}  className='relative px-5 top-12' />
        </Card>
    </div>
   
  )
}

export default Bounty