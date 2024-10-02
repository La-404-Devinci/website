import { gasoekOne } from "@/app/[locale]/font"
import cn from "@/utils/function";
import React from "react";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

const H2 = ({ children, className }: H2Props) => {
  return ( 
    <h2 className={cn(
      gasoekOne.className,
      "uppercase text-5xl xl:text-7xl text-gray-50 text-balance",
      className
    )}>
      {children}
    </h2>
   );
}
 
export default H2;