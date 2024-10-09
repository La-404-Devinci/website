"use client";

import H2 from "@/components/heading2";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const ProjectPage = () => {
  
  const { slug } = useParams();
  const t = useTranslations("ProjectPage"); 
  
  return ( 
    <div>
      <header className="px-10">
        <nav className="flex items-center justify-end w-full h-20">
          <a
            href="/" 
            className="text-gray-50 text-lg font-semibold inline-flex items-center gap-2
            cursor-pointer ">
            <div className="h-[1px] w-8 bg-gray-50" />
            <span>Close</span>
          </a>
        </nav>
        <div>
          <div>
            <H2>{t(`${slug}.title`)}</H2>
            <a 
              href="" 
              target="_blank" 
              className="inline-flex items-center text-blue-500 h-14 py-4 px-6 rounded-full
              bg-gray-50 gap-5 w-fit uppercase font-semibold tracking-tight group overflow-hidden"
            >
              <span className="content-none w-2 h-2 rounded-full bg-blue-500 group-hover:w-20 group-hover:h-20
                z-10"
              />
              <p className="relative z-10">Launch Project</p>
            </a>
          </div>
          <div></div>
        </div>
      </header>
    </div>
   );
}
 
export default ProjectPage;