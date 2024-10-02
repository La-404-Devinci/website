import { gasoekOne } from "@/app/[locale]/font"
import cn from "@/utils/function"
import Arrow from "./arrow"
import LocaleSwitcherSelect from "../components/buttons/SelectLocale";


export default function Content() {
  return (
    <div className='max-w-[1700px] mx-auto py-8 px-5 lg:px-10 h-full w-full flex flex-col justify-between'>
      <Nav />
      <BottomFooter />
    </div>
  )
}


const BottomFooter = () => {
    return (
      <div className="flex flex-col gap-8">
        <h2 className={cn(
          gasoekOne.className,
          'uppercase text-6xl sm:text-8xl text-gray-900'
        )}>
          404 Devinci
        </h2>
        <div className="w-full h-[1px] bg-gray-900" />
        <div className='flex items-center justify-between text-gray-900'>
          <p>2024 © All Rights Reserved</p>
          <p>Legal notices</p>
        </div>
      </div>
    )
}

const Nav = () => {
    return (
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-3 text-gray-900">
          <h3 className="uppercase text-lg sm:text-xl font-semibold">Social media</h3>
          <div className="flex flex-col">
            <div>
              <a 
                href="https://www.linkedin.com/company/la-404-devinci/" 
                target="_blank"          
                className="inline-flex items-center gap-2 group"
              >
                Linkedin 
                <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
                  <Arrow rotate />
                </div>
              </a>
            </div>
            <div>
              <a 
                href="https://instagram.com/la404.devinci" 
                target="_blank"
                className="inline-flex items-center gap-2 group"
              >
                Instagram 
                <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
                  <Arrow rotate />
                </div>
              </a>
            </div>
          </div>
        </div>
        <LocaleSwitcherSelect />

        <div className="w-40 h-14 sm:w-56 sm:h-16 rounded-full border border-black flex items-center 
          justify-center text-gray-900 text-lg sm:text-xl relative group overflow-hidden"
        >
          <a href="mailto:404@devinci.fr" className="z-10">
            404@devinci.fr
          </a>
          <div className="absolute -bottom-full left-1/2 -translate-x-1/2 h-full rounded-[100%]
           bg-blue-400 w-full group-hover:w-[140%] group-hover:bottom-1/2 group-hover:translate-y-1/2 
           transition-all duration-500 group-hover:h-[130%]" />
        </div>

      </div>
    )
}