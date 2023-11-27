import React from 'react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"

function Content() {
  return (
    <Card className='w-[400px] h-[400px] bg-[#C6ACEA] border-4 border-black shadow-[-17px_29px_0px_10px_#1a202c]'>
        <CardContent className='text-2xl p-6'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </CardContent>
    </Card>
  )
}

export default Content