// components/TwoColumnLayout.tsx

import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';

import image from './assests/image 23.png'
import barcode from './assests/Group.svg'
import code from './assests/code.svg'
import purple from './assests/purple.svg'
import blue from './assests/blue.svg'
import green from './assests/green.svg'
import Photo from '../../public/Card.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const About: React.FC = () => {
  return (
   <div className='bg-About h-screen  bg-no-repeat bg-cover bg-[#9BC6FB] overflow-x-hidden border-b-8 border-black '>
     <Card className='rounded-none h-[3rem] w-[17rem] border-4  border-black z-20 relative top-20 flex flex-row left-24'>
            <div className = 'border-r-2 w-[60%] border-black bg-white text-black text-xl font-bold text-center py-1'>
              Topic#3
            </div>
              <div className = 'bg-[#AB93CC] text-black w-[40%] text-center py-1 text-xl font-bold'>
                CTF
            </div>
        </Card>
        <div className='flex flex-row justify-evenly px-4 py-20 '>
        <div className='flex flex-col w-[50%]  py-8 px-4 relative top-4 left-8 gap-y-8'>
          <CardTitle className='text-7xl font-bold ml-2'>About LNM hacks</CardTitle>
          <CardContent className='text-5xl '>
          LNMHacks is the flagship annual hackathon of The LNM Institute of Information Technology. A 72-hours in-person hackathon with a wide range of tracks in the blockchain field, such as DeFi, DAOs, NFTs, and gaming. 
          </CardContent>
        </div>
        <Image alt='src' src={Photo} className='py-4 px-4 ' />
        </div>
   
   </div>
  );
};

export default About;
