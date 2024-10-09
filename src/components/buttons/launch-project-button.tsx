"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface LaunchProjectButtonProps {
  children: React.ReactNode;
}

const LaunchProjectButton = ({ children }: LaunchProjectButtonProps) => {

  const [isMounted, setIsMounted] = useState(false);
  const isViewLarge = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return ( 
    <a 
      href="" 
      target="_blank" 
      className={cn(
        isViewLarge ? "h-14" : "h-12",
        `flex items-center py-4 px-6 rounded-full
        bg-gray-50 gap-5 w-fit uppercase font-semibold tracking-tight group overflow-hidden 
          project-button-animation`
      )}
    >
      <span className="content-none w-2 h-2 rounded-full bg-gray-950 group-hover:bg-blue-500 dot origin-center
      z-10"
      />
      <p className="relative z-10 text-gray-950 group-hover:text-gray-50 text-button-animation">
      {children}
      </p>
    </a>
   );
}
 
export default LaunchProjectButton;