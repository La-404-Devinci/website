"use client";

import cn from "@/utils/function";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProjectProps {
  project: {
    name: string;
    date: string;
    image: string;
  };
  index: number;
}

const anim = {
  initial: {width: 0},
  open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
  closed: {width: 0}
}

const Project = ({ project, index }: ProjectProps) => {

  const [isActive, setIsActive] = useState(false);

  return ( 
    <div 
      key={`project:${index}`}
      className={cn(
        "h-40 flex items-center justify-between p-8",
        index === 0 
          ? "border-t border-b border-gray-800" 
          : "border-b border-gray-800"
      )}
      onMouseEnter={() => {setIsActive(true)}}
      onMouseLeave={() => {setIsActive(false)}}
    >
      <div className="flex items-center gap-8 justify-center">
        <h3 className="text-6xl text-gray-50 font-medium">{project.name}</h3>
        <motion.div 
          variants={anim} 
          animate={isActive ? "open" : "closed"}
          className="overflow-hidden origin-center flex justify-center"
        >
          <Image
            src={`/img/${project.image}`}
            alt={project.name}
            width={0}
            height={0}
            sizes="208px"
            className="w-52 max-w-none"
          />
        </motion.div>
      </div>
      <p className="text-gray-400">{project.date}</p>
    </div>
   );
}
 
export default Project;