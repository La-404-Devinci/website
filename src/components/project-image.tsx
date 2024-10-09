"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ProjectImageProps {
  image: string;
}


const ProjectImage = ({ image }: ProjectImageProps) => {

  const ref = useRef(null);
  // Récupère les informations de scroll
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ["start end", "end end"],
  });

  // Transforme la progression du scroll en échelle (scale)
  const scale = useTransform(scrollYProgress, [0.5, 1], [0.7, 1]);

  return ( 
      <motion.div 
        ref={ref}
        className="overflow-hidden w-full"
        style={{ scale }}
        viewport={{once: true}}
      >
      <Image 
        src={image}
        alt="Image de projet" 
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
        priority
      />
    </motion.div>
   );
}
 
export default ProjectImage;