"use client";

import Image from "next/image";
import Navbar1 from "../../components/ui/navbar1";
import { Button } from "@/components/ui/button";

export default function ProgramPage() {
  return (
    <main className="bg-[#06061A] text-white font-sans min-h-screen block lg:hidden">

      {/* NAVBAR */}
      <Navbar1 />

      {/* HERO SECTION */}
      <section className="px-5 pt-10 md:px-16 lg:px-20">
        
        {/* TOP FULL IMAGE */}
        <div className="relative w-full max-w-[390px] mx-auto rounded-lg overflow-hidden">
          <Image
            src="/Rectangle 3.png"
            alt="Master Gen AI"
            width={390}
            height={100}
            className="w-full h-[260px] object-cover rounded-lg "
          />

          {/* BADGE */}
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg shadow-lg w-[90%] text-center">
            <p className="text-xs opacity-70 -mt-1">Artificial Intelligence 101</p>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="mt-16 text-left md:max-w-[520px] md:text-left md:mx-0 mx-auto">

          <h1 className="text-[28px] md:text-[42px] leading-tight font-extrabold">
            ARTIFICIAL <br /> INTELLIGENCE 101
          </h1>

          <p className="mt-5 text-[15px] opacity-80">
            For every girl told “tech isn’t for you”, we say “AI is your superpower.”
            Unlock the power of AI with India’s first AI program designed for women
            from both Tech and Non-Tech backgrounds.
          </p>

          <p className="mt-3 text-[15px] opacity-80">
            Ready to master the skills that will define the next decade of work?
            No coding experience required.
          </p>

          {/* CTA BUTTON */}
          <Button className="mt-6 bg-[#F1247B] hover:bg-[#d11c6a] transition-all px-6 py-3 mb-12 rounded-[10px] font-bold w-30 md:w-auto">
            ENROLL NOW
          </Button>
        </div>

<div className="relative w-full max-w-[390px] mx-auto rounded-lg overflow-hidden ">
          <Image
            src="/Rectangle 1.png"
            alt="Master Gen AI"
            width={390}
            height={260}
            className="w-full h-[260px] object-cover rounded-lg"
          />


        </div>

        {/* HERO CONTENT */}
        <div className="mt-16 text-left md:max-w-[520px] md:text-left md:mx-0 mx-auto">
<p>Let’s Face it</p>
          <h1 className="text-[28px] md:text-[42px] leading-tight font-extrabold">
           AI IS NOT THE FUTURE, <br /> IT'S A PRESENT
          </h1>

          <p className="mt-5 text-[15px] opacity-80">
           While you're wondering if you should learn AI, 
           smart girls already are. Companies across every industry are desperately seeking 
           employees who can work alongside AI, not against it. Adapt now to be the leader of tomorrow!
          </p>
</div>
      </section>
    </main>
  );
}
