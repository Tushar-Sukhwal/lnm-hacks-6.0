import React from 'react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"

function Content() {
  return (
    <Card className=' rounded-none w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#C6ACEA] border-4 border-black shadow-[-17px_29px_0px_10px_#1a202c]'>
        <CardContent className='text-[1rem] lg:text-2xl p-4 lg:p-6 font-publicSans font-black'>
        CTF is a gamified competitive cybersecurity event that is based on different challenges or aspects of information security( in Jeopardy style i.e. players solve problems to acquire “flags” to win). They are excellent for beginners looking to develop, test, and prove their skills because they gamify hacking concepts.
        </CardContent>
    </Card>
  )
}

export default Content