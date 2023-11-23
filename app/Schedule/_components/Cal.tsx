import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Cal() {
  return (
   <Card className='w-[25rem] h-[30rem] mt-14 border-4 border-black divide-y-4 divide-black'>
    <div className='grid grid-cols-3 divide-x-4 divide-black '>
      <div className='py-4 px-8 text-xl font-bold '>DAY-1</div>
      <div className='py-4 px-8 text-xl  font-bold '>DAY-2</div>
      <div className='py-4 px-7 text-xl  font-bold '>DAY-3</div>
    </div>
    <div>
      Hello World
    </div>
   </Card>
   
  )
}

export default Cal