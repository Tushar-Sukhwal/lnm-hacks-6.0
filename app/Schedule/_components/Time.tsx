import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Time() {
  return (
    <Card className='w-[40rem] h-[25rem] relative top-[12rem] left-10 border-4 border-black rounded-none rounded-lg z-10'>
      <div className='bg-[#FF9AA2] h-[25%] flex flex-row border-b-2 border-black gap-x-[32rem] items-center'>
        <div className='flex flex-row items-center ml-3 gap-x-5  '>
          <img src="./Ellipse 3.svg" className='h-[35%]' alt="" />
          <img src="./Ellipse 3.svg" className='h-[35%]' alt="" />
          <img src="./Ellipse 3.svg" className='h-[35%]' alt="" />
        </div>
        <img src="./X.svg" className='h-[45%] px-2' alt="" />
      </div>

      <CardHeader>
        <CardTitle>
          Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus, omnis ex natus assumenda optio, soluta asperiores commodi modi, officia harum fugiat beatae eveniet explicabo molestias vero? In, commodi fugit.
      </CardContent>
    </Card>
  )
}

export default Time