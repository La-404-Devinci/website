"use client";

import { gasoekOne } from "@/app/font";
import { cubicBezier, motion } from "framer-motion";

const AnimatedHeading1 = () => {
  return ( 
    <h1 className={`${gasoekOne.className} text-5xl md:text-7xl xl:text-[100px]`}>
      <div className="flex items-center gap-8">
        <span 
          className="uppercase relative z-20"
          >
          404
          <motion.span
            initial={{height: "auto"}}
            animate={{height: 0}}
            transition={{
              duration: .5, 
              ease: cubicBezier(0.69, 0.14, 0.85, 0.38),
            }}
            className="absolute top-0 left-0 inset-0 bg-[#070707] origin-top"
          />
        </span>
        <motion.div 
          className="h-[1px] bg-gray-50 translate-y-2"
          initial={{width: 0}}
          animate={{width: "100%"}}
          transition={{
            duration: .5, 
            ease: cubicBezier(0.69, 0.14, 0.85, 0.38),
            delay: .6
          }} 
        />
      </div>
      <div>
        <span className="uppercase relative">
          Devinci
          <motion.span
            initial={{height: "auto"}}
            animate={{height: 0}}
            transition={{
              duration: .5,
              ease: cubicBezier(0.69, 0.14, 0.85, 0.38),
              delay: .2  
            }}
            className="absolute top-0 left-0 inset-0 bg-[#070707] origin-top"
          />
        </span>
      </div>
    </h1>
   );
}
 
export default AnimatedHeading1;