import dino from "@/assets/dino.svg";
import Image from "next/image";
import AnimatedHeading1 from "../animated-heading1";
import LocaleSwitcherSelect from "../buttons/select-locale";
import Timer from "../timer";

const Header = () => {
  return ( 
    <div className="w-full h-screen flex flex-col gap-8 px-4 lg:px-10">
      {/* HEADING */}
        <div className="w-full flex justify-between items-end flex-wrap pt-14">
          <AnimatedHeading1 />
          <div className="flex flex-col justify-between h-full">
            <LocaleSwitcherSelect />
            <div className="font-medium flex flex-col text-end">
              <span className="uppercase text-gray-400 ml-auto text-xs md:text-sm">Paris</span>
              <Timer />
            </div>
          </div>
        </div>
        {/* BANNER */}
        <div className="relative w-full h-[calc(100%-100px)] bg-gray-950 rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 rounded-full w-64 aspect-square bg-blue-500
            -translate-x-1/2 -translate-y-1/2 blur-3xl"
          />
          <div className="absolute bottom-0 right-0 rounded-full w-64 aspect-square bg-blue-500
            translate-x-1/2 translate-y-1/2 blur-3xl"
          />
          <Image 
            src={dino}
            alt="mascotte 404 devinci" 
            width={300} 
            height={300}
            className="absolute bottom-0 left-0 transform  " 
          />
        </div>
    </div>
   );
}
 
export default Header;