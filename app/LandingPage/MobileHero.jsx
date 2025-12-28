import Image from 'next/image'
import  Navbar1  from "@/components/ui/navbar1"
import "app/globals.css"
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],      // regular + bold
  style: [ "italic"], // include italic
  display: "swap",
});


export default function MobileHeroSection() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#31091E] relative lg:hidden">
      {/* Background gradient */}
    <div className="relative w-[375px] h-[812px] mx-auto overflow-hidden">
  
  {/*Image positioned absolutely */}
      <Image
        src="/Mobile Light gradient .png"
        width={1000}
        height={100}
        alt="gradient"
        className="absolute inset-0 w-full h-180 object-cover"
      />
  
  

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar1 />
           {/* Announcement Banner */}
          <div className="w-full max-w-md ">
            <div className="bg-[#06061A]/50 rounded-[10px] px-4 py-1 flex items-start gap-3 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)] backdrop-blur-sm">
              <div className="relative w-5 h-5 flex-shrink-0 mt-0.5">
                <div
                  className="absolute top-0 left-0 w-5 h-5 rounded-full"
                  style={{ background: '#F1247B' }}
                />
                <div
                  className="absolute top-[1px] left-[1px] w-[18px] h-[18px] rounded-full"
                  style={{ background: '#F991CC' }}
                />
                <div
                  className="absolute top-[4px] left-[4px] w-[12px] h-[12px] rounded-full"
                  style={{ background: '#F1247B' }}
                />
              </div>
              <span className="font-work font-bold text-[13px] text-[#F5C939] leading-snug">
                Applications are now open for the Artificial Intelligence 101 Program 2026
              </span>
            </div>
          </div>

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 ">
          
          {/* Logo */}
          <div className="top-192">
            <Image
              src="/logo1.png"
              width={280}
              height={100}
              alt="Women AI Collective Logo"
              className="w-[315px] h-[189px] "
            />
          </div>


          {/* Main Heading */}
          <h1 className="text-center mb-3 py-2 px-2">
            <span className="block  font-Fraunces font-normal text-2xl leading-tight text-[#FAFCFE] mt-10">
              We are on a mission
            </span>
            <span className="block font-fraunces font-normal text-2xl leading-tight text-[#FAFCFE] ">
              to Empower  {" "}
              <span className={`${fraunces.className} relative font-fraunces inline-block italic font-semibold text-2xl leading-tight text-[#FAFCFE]`}>
                Young
              {" "}
              </span>
            </span>

            <div className="flex flex-wrap justify-center items-center gap-2 mb-1">
              
              <span className={` ${fraunces.className} relative font-fraunces  inline-block italic font-semibold text-2xl leading-tight text-[#FAFCFE]`}>
                Women
              </span>
               <span className="block font-fraunces  font-semibold text-2xl leading-tight text-[#FAFCFE]">
              Build{' '}
              <span className={` ${fraunces.className} relative font-fraunces  inline-block italic font-semibold text-2xl leading-tight text-[#FAFCFE]`}>
                Careers
              
              </span>
            </span>
            </div>

           
            <span className="block font-semibold text-2xl leading-tight text-[#FAFCFE]">
              of the Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-medium text-base text-[#FAFCFE] text-center mb-8 leading-relaxed px-4 max-w-md">
            From Zero to AI Fluent: Every Girl, Every Stream, Every Dream!
          </p>

          {/* CTA Button */}
          <button className="h-12 px-6 bg-[#F1247B] hover:bg-[#d91f69] active:bg-[#c11a5e] transition-colors font-bold text-base text-[#FFFFFF] rounded-[10px] shadow-lg w-full max-w-xs">
            JOIN THE AI 101 PROGRAM
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}