"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import cn from "@/utils/function";
import { ProjectType } from "@/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectProps {
  project: ProjectType;
  index: number;
  locale?: "fr" | "en";
}

const anim = {
  initial: {width: 0},
  open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
  closed: {width: 0}
}

const Project = ({ project, index, locale }: ProjectProps) => {

  const [isMounted, setIsMounted] = useState(false);
  const isComputerOrLarger = useMediaQuery('(min-width: 1280px)');  

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if(!isMounted) return null;
  
  if(!isComputerOrLarger) {
    return (
      <a href={`${locale}/project/${project.slug}`} className="w-full">
        <MobileProject project={project} index={index} />
      </a>
    )
  }

  return (
    <a href={`${locale}/project/${project.slug}`} className="w-full">
      <DesktopProject project={project} index={index} />
    </a>
  )
}
 
export default Project;


const MobileProject = ({ project, index }: ProjectProps) => {

  return(
    <div 
        className={cn(
          "h-32 lg:h-40 flex items-center justify-between p-5 lg:p-8",
          index === 0 
            ? "border-t border-b border-gray-800" 
            : "border-b border-gray-800"
        )}
      >
        <div className="flex items-center gap-2 justify-center">
          <h3 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl text-gray-50 font-medium">{project.name}</h3>
        </div>
        <p className="text-gray-400 text-sm md:text-base">{project.date}</p>
      </div>
  )
}

const DesktopProject = ({ project, index }: ProjectProps) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div 
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
        <h3 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl text-gray-50 font-medium">{project.name}</h3>
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
  )
}