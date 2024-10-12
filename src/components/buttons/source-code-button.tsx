"use client";

import useMousePosition from "@/hooks/use-mouse-position";
import Link from "next/link";
import { useRef } from "react";

interface SourceCodeButtonProps {
  children: React.ReactNode;
  href: string;
}

const SourceCodeButton = ({ children, href }: SourceCodeButtonProps) => {

  const buttonRef = useRef<HTMLAnchorElement>(null);
  const mousePosition = useMousePosition(buttonRef);

  const dotStyle = {
    top: `${mousePosition.y}px`,
    left: `${mousePosition.x}px`,
  } as React.CSSProperties;

  return ( 
    <Link 
      ref={buttonRef}
      href={href} 
      target="_blank" 
      className="relative flex items-center py-4 px-6 rounded-full border border-gray-50 
        w-fit uppercase font-semibold tracking-tight group overflow-hidden h-12 lg:h-14"
    >
      <div 
        style={dotStyle} 
        className="absolute -translate-x-1/2 -translate-y-1/2 size-0 bg-gray-50 rounded-full 
        pointer-events-none group-hover:size-96 transition-[width,height] ease-in-out duration-500" 
      />
      <p className=" pointer-events-none z-10 text-gray-50 group-hover:text-gray-950 transition-colors">
        {children}
      </p>
    </Link>
   );
}
 
export default SourceCodeButton;