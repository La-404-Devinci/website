import { gasoekOne } from "@/app/[locale]/font";
import { cn } from "@/lib/utils";
import React from "react";

interface ProjectH1Props {
  children: React.ReactNode;
}

const ProjectH1 = ({ children }: ProjectH1Props) => {
  return ( 
    <h1 className={cn(
      gasoekOne.className,
      "text-gray-50 text-5xl sm:text-6xl xl:text-8xl leading-none"
    )}>
      {children}
    </h1>
   );
}
 
export default ProjectH1;