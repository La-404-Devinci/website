"use client";

import { getDate } from "@/utils/function";
import { useEffect, useState } from "react";

const Timer = () => {

  const [time, setTime] = useState(getDate());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(getDate());
    }, 1000);    
    
    return () => clearInterval(interval);
  }, []);
  
  if (!mounted) return;

  return ( 
    <span className="uppercase text-xl">{time}</span>
   );
}
 
export default Timer;