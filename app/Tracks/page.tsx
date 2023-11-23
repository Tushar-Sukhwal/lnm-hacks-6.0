import React from 'react'
import Slider from './_components/Slider'
import red from '../../public/Rectangle 51.png'
import green from '../../public/Rectangle 50.png'

import Image from 'next/image'
function Tracks() {
  return (
    <div className='bg-third bg-[#FFD567] bg-cover bg-no-repeat h-screen'>
        <Slider/>
    </div>
  )
}

 {/* <div className='flex flex-row'>
        <Image alt = 'name' src = {red} className = 'relative left-[91rem] top-[11rem] h-[72vh]' />
        <Slider/>    
        </div>
        <Image alt='name' src={green} className='relative w-[72.5vw] left-[17rem] top-[8rem]' />         */}
export default Tracks