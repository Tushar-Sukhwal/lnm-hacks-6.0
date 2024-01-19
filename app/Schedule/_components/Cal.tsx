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
import { useEffect, useState } from "react";


const Calender = [
  [
    "CheckIn 11:00", 
    "Opening Ceremony 13:00", 
    "Flow 13:00", 
    "Intro to Web3 15:00", 
  ], 
  [
    "CheckIn 11:00", 
    "Opening Ceremony 13:00", 
    "Flow 13:00", 
    "Intro to Web3 15:00", 
  ], 

  [
    "CheckIn 11:00", 
    "Opening Ceremony 13:00", 
    "Flow 13:00", 
    "Intro to Web3 15:00", 
  ], 
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

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "January, 19, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);
  

  return (
   <Card className='w-[15.5rem] h-[18rem] lg:w-[25rem] lg:h-[30rem] mt-14 border-4 border-black divide-y-4 divide-black rounded-none shadow-[11px_26px_0px_4px_#B595FB]'>
    <div className='grid grid-cols-3 divide-x-4 divide-black '>
      <button className={`py-4 px-8 text-sm md:text-xl font-publicSans font-bold ${isDay1?'bg-[#C2A5FD]':'bg-white'}`}onClick={dayOneHandler} >DAY-1</button>
      <button className={`py-4 px-8 text-sm  md:text-xl  font-publicSans  font-bold ${isDay2?'bg-[#C2A5FD]':'bg-white'}`}onClick={dayTwoHandler} >DAY-2</button>
      <button className={`py-4 px-6 text-sm   md:text-xl  font-publicSans   font-bold ${isDay3?'bg-[#C2A5FD]':'bg-white'}`}onClick={dayThreeHandler} >DAY-3</button>
    </div>
    <div className='text-2xl font-publicSans text-center p-5'>
  {
    currentDay === 0 ? 
    <div className='space-y-4'>
      <p>Registrations starts: 12PM</p>
      <p>Opening Ceremony: 2PM</p>
      <p>Polygon vs Solana Call: 4PM</p>
      <p>Reef Workshop: 6PM</p>
      <p>Dinner: 8PM</p>
    </div> 
    : currentDay === 1 ?
    <div className='space-y-4'>
      <p>Breakfast: 8AM</p>
      <p>PlutoPe Talk: 12PM</p>
      <p>Lunch: 1PM</p>
      <p>Router Talk: 2PM</p>
      <p>Superteam Fun Event: 4PM</p>
      <p>Reef Talk: 7PM</p>
    </div>
    : currentDay === 2 ?
    <div className='space-y-4'>
      <p>Breakfast: 8AM</p>
    </div>
    : <h2>Other Day</h2>
  }
</div>
   </Card>
   
  )
}

// <h1 className='font-lexendMega font-bold text-center relative top-9 text-lg'>
// {days} Days : {hours} hrs : {minutes} minutes : {seconds} seconds
// </h1>
// <h1 className='font-lexendMega font-bold text-center relative top-9 text-xl' >
//   Coming Soon...
// </h1>

export default Cal