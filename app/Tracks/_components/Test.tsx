import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import yellow from '../../../public/Rectangle 8.png'
  import blue from '../../../public/Rectangle 9.svg'
  import Image from 'next/image'

function Test() {
  return (
    <div>
     
      <Image alt = 'blue' src = {blue} className='h-[9.5rem] relative left-[13.7rem] top-[9.5rem]'/>
      <Card className='rounded-none h-[8rem] w-[15rem] border-2 border-black'>
                
      </Card>
      <Image alt='yellow' src={yellow} className='w-[16.5rem]'/>
    </div>
  )
}

export default Test