import React from 'react'
import Content from './_components/Content'
import Image from 'next/image'
import window from '../../public/CTF window.png'
import browser from '../../public/div.c-browser.png'
import Callout from './_components/Callout'
import design from '../../public/Vector 31.png'
function CTF() {
  return (
    <div className='bg-wormhole h-fit bg-no-repeat bg-cover bg-[#AB93CC] border-b-8 border-black'>
        <div className='flex flex-row gap-x-7 '>\
        <div className='p-44'>
        <Content/>
        </div>
        <div className='p-40'>
            <Callout/>
            <Image alt='done' src={browser} className='w-[40%] relative bottom-60 left-96' />
        </div>
        </div>
        <Image alt='done' src={design}/>
    </div>
  )
}

export default CTF