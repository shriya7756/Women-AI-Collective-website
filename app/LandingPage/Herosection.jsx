import Image from 'next/image'

import {Button} from "../../components/ui/button"
import { Fraunces } from "next/font/google";
import Navbar1 from '../../components/ui/navbar1';

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],      // regular + bold
  style: [ "italic"], // include italic
  display: "swap",
});

export default function Herosection(){
    return (
       <>
<section className=" hidden lg:block min-h-screen overflow-hidden  relative">
  {/*background gradient */}

  <div className='absolute inset-0 z-0'>

   {/*Image positioned absolutely */}
    <Image
      src="/Light gradient bg.png"
      width={1000}
      height={100}
      alt="gradient"
      className="absolute inset-0 w-full h-210 object-cover"
    />
  </div>

<div className='sticky top-0 z-50 flex flex-col min-h-screen'>
  <Navbar1/>
<div className="mx-auto w-[1000px] h-[48px]  bg-[#06061A]/50 rounded-[10px] px-8 flex items-center justify-center gap-4 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)] backdrop-blur-sm">
  
              <div className="relative w-5 h-5 md:w-6 md:h-[25px] flex-shrink-0">
                <div
                  className="absolute top-0 left-0 w-5 h-5 md:w-6 md:h-[25px] rounded-full"
                  style={{ background: '#F1247B' }}
                />
                <div
                  className="absolute top-[1px] left-[1px] w-[18px] h-[18px] md:w-[22px] md:h-[23px] rounded-full"
                  style={{ background: '#F991CC' }}
                />
                <div
                  className="absolute top-[4px] left-[4px] md:top-[5px] md:left-[5px] w-[12px] h-[12px] md:w-[14px] md:h-[15px] rounded-full"
                  style={{ background: '#F1247B' }}
                />
              </div>
              <span className="font-work font-bold text-[14px] md:text-[18px] lg:text-[20px] text-[#F5C939] text-center leading-tight">
                Applications are now open for the Artificial Intelligence 101 Program 2026
              </span>
            </div>
          

   <div className="flex justify-center sm:mb-1 md:mb-2 lg:mb-4 mt-2">
    <Image
      src="/logo1.png"
      width={400}
      height={200}
      alt="logo"
      className='w-48 sm:w-64 md:w-80 lg:w-96 mb-9'
    />
  </div>

<div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-10 max-w-7xl  mx-auto w-full '>
     <h1 className="text-center">
  <span className="block md:inline font-bold text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[70px] text-[#FAFCFE]">
    We are on a Mission to Empower {" "}
  </span>

  <span className={`${fraunces.className} relative font-Fraunces inline-block italic font-semibold text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight text-[#FAFCFE] `} >
    Young 
     <Image 
    src="/Vector 1.png" 
  width={176}       // match Figma width
    height={1}   
    alt="underline" 
    className="absolute left-4 -bottom-1 "
  />
     {" "}
  </span>
  <span className={`${fraunces.className} relative  inline-block italic font-semibold text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight text-[#FAFCFE]`} >
    Women
     <Image 
    src="/Vector 2.png" 
    width={176}       // match Figma width
    height={1}   
    alt="underline" 
    className="absolute left-3 -bottom-1"
  />
  </span>

  <span className="block md:inline font-semibold text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[70px] text-[#FAFCFE]">
    {" " }  Build  {" "}
    <span className={` ${fraunces.className}  relative font-Fraunces inline-block italic font-semibold text-xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight text-[#FAFCFE]`}>
    Carrers
      <Image 
      src="/Vector 3.png" 
     width={176}       // match Figma width
    height={1}  
      alt="underline" 
      className="absolute left-3 -bottom-1 "
    />
    {"  "}
  </span>
    {" "} of the Future
  </span>
</h1>
<p className=' flex flex-col block md:inline font-large text-2lg sm:text-sm md:text-lg lg:text-xl leading-tight md:leading-[70px] text-[#FAFCFE]'> 
        From Zero to AI Fluet: Every Girl ,  Every Stram ,  every Dream!</p>

      <Button className="h-10 px-6 md:px-8 bg-[#F1247B] font-bold text-[18px] text-[#FFFFFF] font-semibold text-sm md:text-base lg:text-lg rounded-[10px] hover:bg-[#F1247B] hover:shadow-4xl active:scale-100 active:shadow-inner transition-all duration-150"
   >
        JOIN THE AI 101 PROGRAM
      </Button>

 </div>
 </div>
<div className="bg-gradient-to-b from-[#9B0F52] to-[#0A0212]  h-[100px]"></div>
</section>

        </>
    )
}
