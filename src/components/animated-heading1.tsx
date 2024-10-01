"use client";

import { gasoekOne } from "@/app/[locale]/font";
import { easeInOut, motion } from "framer-motion";

const AnimatedHeading1 = () => {
  return ( 
    <h1 className={`${gasoekOne.className} text-5xl md:text-7xl xl:text-[100px]`}>
      <div className="flex items-center gap-8">
        <div className="flex-shrink-0 overflow-hidden">
          <motion.span 
            initial={{translateY: 100}}
            animate={{translateY: 0}}
            transition={{
              duration: .5, 
              ease: easeInOut,
              delay: 0
            }}
            className="block uppercase relative"
          >
            404
          </motion.span>
        </div>
        <motion.div 
          className="h-[1px] bg-gray-50 translate-y-2"
          initial={{width: 0}}
          animate={{width: "100%"}}
          transition={{
            duration: .5, 
            ease: easeInOut,
            delay: .6
          }} 
        />
      </div>
      <div className="overflow-hidden">
        <motion.span 
          initial={{translateY: 100}}
          animate={{translateY: 0}}
          transition={{
            duration: .5, 
            ease: easeInOut,
            delay: .2
          }}
          className="block uppercase relative"
        >
          Devinci
        </motion.span>
      </div>
    </h1>
   );
}
 
export default AnimatedHeading1;