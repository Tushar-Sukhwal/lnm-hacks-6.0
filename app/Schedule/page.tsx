import React from 'react'
import Time from './_components/Time'
import Image from 'next/image'
import back from '../../public/Group 13.png'
import anim from '../../public/anim window.png'
import Cal from './_components/Cal'

const Schedule = () => {
  return (
    <div className='bg-waves h-screen min-w-screen bg-no-repeat bg-contain bg-[#DDD6F4] border-b-8 border-black'>
        <div className='flex flex-row gap-x-7'>
        <div className='px-6 relative mb-8 '>
        <Time/>
        <Image alt='back' src={back} className='ml-[9rem] h-[50%] relative bottom-[8rem] ' />
        </div>
        <div>
        <Cal/>
        <Image alt='back' src={anim} className='ml-[9rem]  relative bottom-[8rem] ' />
        </div>
        </div>
       
       
    </div>
  )
}

export default Schedule