import { gasoekOne } from "@/app/[locale]/font";
import Image from "next/image";
import Timer from "../timer";

const Header = () => {
  return ( 
    <div className="w-full h-screen flex flex-col gap-8 px-5 lg:px-10">
      {/* HEADING */}
        <div className="w-full flex justify-between items-end flex-wrap pt-14">
          <h1 className={`${gasoekOne.className} text-5xl md:text-7xl xl:text-[100px] leading-none`}>
            <div className="flex items-center gap-8">
              <span className="uppercase">404</span>
              <div className="h-[1px] bg-gray-50 w-full translate-y-2" />
            </div>
            <div>
              <span className="uppercase">Devinci</span>
            </div>
          </h1>

          <div className="font-medium flex flex-col">
            <span className="uppercase text-gray-400 ml-auto text-xs md:text-sm">Paris</span>
            <Timer />
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
            src="./img/dino.svg"
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