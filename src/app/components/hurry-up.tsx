"use client";
import Image from "next/image";
import BG9 from "../../../public/images/backgrounds/bg-9.png";
import { useEffect, useState } from "react";

interface TimeRemainingInterface {
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

function getTimeRemaining(targetDate: Date): TimeRemainingInterface {
    const now = new Date();
    const dubaiTimezoneOffset = 4 * 60; // Dubai's timezone offset in minutes (UTC+4)
    const timeRemaining = targetDate.getTime() - now.getTime() + (dubaiTimezoneOffset * 60 * 1000);
  
    if (timeRemaining <= 0) {
      // The target date has already passed
      return {
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  
    // Calculate weeks, days, hours, minutes, and seconds
    const weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return {
      weeks,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
// Set the target date (15 January 2024 in Dubai timezone)
const targetDate = new Date('2024-01-15T00:00:00');
targetDate.setUTCHours(0, 0, 0, 0); // Ensure midnight in UTC
targetDate.setMinutes(targetDate.getMinutes() - targetDate.getTimezoneOffset() + 4 * 60); // Adjust to Dubai's timezone


const CountCard = ({number, label}:{number:number; label:string;}) => {
    return (
        <div className="w-24 md:w-32 bg-primary-yellow rounded-lg py-8 flex flex-col items-center">
            <span className="text-black font-press-start text-2xl md:text-3xl">{number < 10 ? '0' + number : number}</span>
            <span className="text-neutral-800">{label}</span>
        </div>
    );
}

const TimeCounter = () => {
    const [timeLeft, setTimeLeft] = useState<TimeRemainingInterface>();

    useEffect(() => {
        setInterval(() => {
            setTimeLeft(getTimeRemaining(targetDate));
        }, 1000);
    }, []);

    return (
        <div className="md:mt-8 flex flex-wrap justify-center gap-4">
            <CountCard label="weeks" number={timeLeft?.weeks ?? 0} />
            <CountCard label="days" number={timeLeft?.days ?? 0} />
            <CountCard label="hours" number={timeLeft?.hours ?? 0} />
            <CountCard label="minutes" number={timeLeft?.minutes ?? 0} />
            <CountCard label="seconds" number={timeLeft?.seconds ?? 0} />
        </div>
    )
}

export function HurryUp()
{
    return (
        <section id="hurry-up" className="relative py-20 flex justify-center items-center px-4">
            <div className="absolute z-[-2] h-full w-full bg-black"></div>
            <Image src={BG9} alt="" className="absolute z-[-1] w-full h-full object-cover opacity-20" />
            <div className="container text-white flex flex-col gap-2 md:gap-4 items-center text-center">
                <h2 className="text-3xl md:text-5xl font-bold">Hurry up!</h2>
                <p className="md:text-xl font-medium mb-4">Last year our tickers sold fast so don't miss. Conference will start in</p>
                <TimeCounter />
            </div>
        </section>
    )
}