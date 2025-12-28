"use client";

import Navbar1 from "@/components/ui/navbar1";
import Image from "next/image";
import { Button } from "../../components/ui/button";

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-[#06061A] text-white font-sans">

      {/* NAVBAR */}
      <Navbar1 />

      {/* HERO SECTION */}
      <section className="py-14 px-6 md:px-16 lg:px-20 bg-[#06061A]">
        <div className="grid grid-cols-12 gap-10 items-start">

          {/* LEFT IMAGE */}
          <div className="col-span-12 md:col-span-3 flex justify-start">
            <Image
             src="/Rectangle 3.png"
              alt="Master Gen AI"
              width={300}
              height={400}
              className="
              absolute         
              top-[150px]      
              left-0           
              w-[300px]        
              h-[400px]        
              rounded-lg
              shadow-xl
                " />
          </div>

          {/* CENTER CONTENT */}
          <div className="col-span-12 md:col-span-5 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              ARTIFICIAL <br /> INTELLIGENCE 101
            </h1>

            <p className="mt-6 text-sm md:text-[15px] leading-relaxed opacity-80 max-w-[520px] mx-auto md:mx-0">
              For every girl told “tech isn’t for you”, we say “AI is your superpower.”
              Unlock the power of AI with India’s first AI program designed for women
              from both Tech and Non-Tech backgrounds.
            </p>

            <p className="mt-5 text-sm md:text-[15px] leading-relaxed opacity-80 max-w-[520px] mx-auto md:mx-0">
              Ready to master the skills that will define the next decade of work?
              No coding experience required.
            </p>

            {/* BUTTON (HUG) */}
            <Button
              className="
                mt-8 inline-flex items-center justify-center
                px-[20px] py-[12px]
                gap-[30px]
                rounded-[10px]
                text-lg font-bold
                bg-[#F1247B] text-white
                transition-all duration-300 ease-out
                hover:scale-[1.05]
                hover:shadow-[inset_0_0_12px_rgba(236,241,245,0.3)]
              "
            >
              ENROLL NOW
            </Button>
          </div>

          {/* RIGHT IMAGE (TOP) */}
          <div className="hidden md:flex col-span-4 justify-end mt-6">
           <Image
            src="/Rectangle 1.png"
              alt="Classroom AI"
                  width={300}
                    height={300}
                   className="
                   absolute
                 top-[150px]        
                  right-0           
                rounded-lg
                  shadow-xl
                 w-[300px]
                 h-[300px]
                    "
                   />
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="px-6 md:px-16 lg:px-20 py-14 bg-[#06061A]">
        <div className="grid grid-cols-12 gap-10 items-center">

          {/* LEFT TEXT */}
          <div className="col-span-12 md:col-span-7 text-center md:text-left">
           <p className="text-xs md:text-sm uppercase font-bold tracking-widest mb-4 opacity-80 text-white">
  Let’s Face It
</p>


            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              AI IS NOT THE FUTURE, <br />
              IT’S THE PRESENT.
            </h2>

            <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-[580px] mx-auto md:mx-0">
              While you’re wondering if you should learn AI, smart girls already are.
              Companies across every industry are desperately seeking employees who
              can work alongside AI, not against it. Adapt now to be the leader of
              tomorrow.
            </p>
          </div>

          {/* RIGHT IMAGE (BOTTOM – CORNER TOUCH) */}
          <div className="col-span-12 md:col-span-5 flex justify-end">
            <Image
              src="/Rectangle 1.png"
              alt="AI Board"
              width={300}
              height={300}
              className="       
                   top-[500px]      /* distance from top */
                   left-1000px           /* touches left border */
                   w-[300px]        /* width */
                   h-[300px]        /* height */
                   rounded-lg
                   shadow-xl
                     "
            />
          </div>
        </div>
      </section>

    </main>
  );
}