'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";

const Calender = [
  {
    "CheckIn": "11:00", 
    "Opening Ceremony" : "13:00", 
    "Flow" : "13:00", 
    "Intro to Web3" : "15:00", 
  }, 
  {
    "CheckIn": "11:00", 
    "Opening Ceremony" : "13:00", 
    "Flow" : "13:00", 
    "Intro to Web3" : "15:00", 
  }, 
  {
    "CheckIn": "11:00", 
    "Opening Ceremony" : "13:00", 
    "Flow" : "13:00", 
    "Intro to Web3" : "15:00", 
  }
]
 

function Cal() {
  const [isDay1 , setDay1] = useState(false)
  const [isDay2 , setDay2] =useState(false)
  const [isDay3 , setDay3] =  useState(false)
  const [currentDay , setCurrentDay] = useState(-1)

  const dayOneHandler = ()=>{
    setDay1(true); 
    setDay2(false)
    setDay3(false)
    setCurrentDay(0)
  }

  const dayTwoHandler = ()=>{
    setDay1(false); 
    setDay2(true)
    setDay3(false)
    setCurrentDay(1)
  }

  const dayThreeHandler = ()=>{
    setDay1(false); 
    setDay2(false)
    setDay3(true)
    setCurrentDay(2)

  }

  
  

  return (
   <Card className='w-[25rem] h-[30rem] mt-14 border-4 border-black divide-y-4 divide-black rounded-none shadow-[11px_26px_0px_4px_#B595FB]'>
    <div className='grid grid-cols-3 divide-x-4 divide-black '>
      <button className={`py-4 px-8 text-xl font-bold ${isDay1?'bg-[#C2A5FD]':'bg-white'}`}onClick={dayOneHandler} >DAY-1</button>
      <button className={`py-4 px-8 text-xl  font-bold ${isDay2?'bg-[#C2A5FD]':'bg-white'}`}onClick={dayTwoHandler} >DAY-2</button>
      <button className={`py-4 px-6 text-xl  font-bold ${isDay3?'bg-[#C2A5FD]':'bg-white'}`}onClick={dayThreeHandler} >DAY-3</button>
    </div>
    <div>
      {`${Calender[currentDay]}`}
    </div>
   </Card>
   
  )
}

export default Cal