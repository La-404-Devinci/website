"use client";

import React from "react";

interface LaunchProjectButtonProps {
  children: React.ReactNode;
}

const LaunchProjectButton = ({ children }: LaunchProjectButtonProps) => {

  return ( 
    <a 
      href="" 
      target="_blank" 
      className="flex items-center py-4 px-6 rounded-full
      bg-gray-50 gap-5 w-fit uppercase font-semibold tracking-tight group overflow-hidden 
        project-button-animation h-12 lg:h-14"
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