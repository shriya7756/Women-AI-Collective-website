"use client"
import { useState } from "react"
import {Button} from "@/components/ui/button"
import Image from "next/image";
export default function Footer(){
    // controll form
    const [email,setemail]=useState(" ");
    

    // onchange
    const handleChange=(event)=>{
        setemail(event.target.value)
    };
    //Submit
    const handleSubmit=(event)=>{
        event.preventDefault()
    console.log("Submitted email:", email)
    }

    return (
        <>
  <section className="flex flex-col w-full min-h-[500px] md:min-h-[600px] lg:h-[700px] bg-[#31091E]">
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
        {/* Stay Updated block */}
        <div className="flex flex-col px-6 sm:px-12 md:px-16 lg:ml-[120px] w-full max-w-[90%] sm:max-w-md lg:w-[256px] pt-6 md:pt-8 lg:pt-4 pb-4 opacity-90">
          <span className="font-work font-semibold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight tracking-[-0.8px] text-[#F1247B]">
            Stay Updated
          </span>

          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
            <label
              htmlFor="email"
              className="text-[#FFFFFFCC] font-semibold text-[14px] sm:text-[16px] md:text-[18px]"
            >
              Email Address:
            </label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="you@gmail.com"
              className="text-white bg-transparent border-b border-white/30 outline-none pb-2 placeholder:text-white/50 focus:border-[#F1247B] transition-colors text-sm sm:text-base"
            />

            <Button
              type="submit"
              className="relative border rounded-lg bg-[#FAFCFE] hover:bg-[#F1247B] hover:text-white py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-8 pr-10 sm:pr-11 md:pr-12 text-[#F1247B] font-medium w-fit transition-colors text-sm sm:text-base"
            >
              Submit
              <Image
                src="/Pixel Arrow.png"
                width={16}
                height={16}
                alt="arrow"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
              />
            </Button>
          </form>
        </div>

        {/* Big Text BELOW */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-[50px] opacity-80 ">
          <span className="font-bold text-[40px] xs:text-[50px] sm:text-[70px] md:text-[100px] lg:text-[140px] xl:text-[190px] text-[#ECF1F4] leading-none text-center">
            WOMEN AI
          </span>

          <span className="font-bold text-[35px] xs:text-[45px] sm:text-[60px] md:text-[90px] lg:text-[130px] xl:text-[170px] text-[#ECF1F4] leading-none text-center">
            COLLECTIVE
          </span>
        </div>
      </div>
    </section>
        </>
    )
}