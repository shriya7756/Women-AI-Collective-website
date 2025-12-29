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
              
  <div className="pointer-events-none col-span-12 md:col-span-3 flex justify-start">
    <Image src="/Rectangle-3.png" alt="Master Gen AI" width={300} height={400}
    className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[375px] h-[200px] object-cover object-bottom rounded-lg md:top-[150px] md:left-[3px] md:translate-x-0 md:w-[300px] md:h-[400px] shadow-xl " />
                 </div>

   {/* CENTER CONTENT */}
    <div className="  col-span-15 md:col-span-5 flex flex-col items-start text-left px-4 md:px-0 mt-6 md:mt-0 ">
    <h1 className=" text-3xl md:text-5xl  font-extrabold leading-tight  absolute top-80 left-4 translate-y-[6px]  md:static md:translate-y-0  md:mt-0  ">
     ARTIFICIAL <br /> INTELLIGENCE 101 </h1>

      <p className="  text-sm md:text-[15px] leading-relaxed opacity-80 max-w-full md:max-w-[520px] relative mt-[130px] md:mt-4 -translate-x-[20px] md:translate-x-0  translate-y-[60px] md:translate-y-0  px-0 text-left md:px-0 ">
      For every girl told “tech isn’t for
      <br className="md:hidden" />
      you”, we say “AI is your superpower.”
      <br className="md:hidden" />
       Unlock the power of AI with India’s
       <br className="md:hidden" />
      first AI program designed for
      <br className="md:hidden" />
      women from both Tech and Non-
      <br className="md:hidden" />
       Tech backgrounds. </p>

   <p className="text-sm md:text-[18px] leading-relaxed opacity-80 max-w-full md:max-w-[520px] mt-4 md:mt-5 mt-[20px] md:mt-4 -translate-x-[20px] md:translate-x-0 translate-y-[60px] md:translate-y-0 ">
    Ready to master the skills that will
    <br className="md:hidden" />
    define the next decade of work? No
    <br className="md:hidden" />
     coding experience required.
            </p>

    {/* BUTTON */}
    <div className="mt-8 w-full flex justify-start">
    <Button className="px-[22px] py-[12px] rounded-[10px] text-base font-bold bg-[#F1247B] text-white transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-[inset_0_0_12px_rgba(236,241,245,0.3)]  mt-[1px] md:mt-2 -translate-x-[25px] md:translate-x-0 translate-y-[50px] md:translate-y-0 " >
      ENROLL NOW </Button></div> </div>

  {/* RIGHT IMAGE (TOP) */}
  <div className=" hidden md:block absolute  top-[767px] right-0 md:w-[300px] md:h-[300px]  md:left-1140px md:translate-x-0 md:top-[150px]">
  <Image src="/Rectangle-1.png" alt="Classroom AI" width={300} height={300} className="md:rounded-lg md:shadow-xl " />
                   </div>
        </div>
      </section>

    {/* BOTTOM SECTION */}
      <section className="px-6 md:px-16 lg:px-20 py-14 bg-[#06061A]">
      <div className="col-span-6 max-md:w-full  max-md:mt-[300px]">

     <div className=" col-span-6 max-md:col-span-1 max-md:w-full">
  {/* SMALL TEXT */}
     <p className=" text-2xl font-bold max-md:text-[16px] max-md:font-semibold max-md:mb-2">
        Let’s Face It
         </p>

  {/* MAIN HEADING */}
  <h2 className=" text-5xl font-bold leading-[1.1] max-md:text-[22px] max-md:leading-tight max-md:mb-4">
       AI IS NOT THE FUTURE,<br />
        IT’S THE PRESENT.
       </h2>

  {/* PARAGRAPH */}
  <p className=" text-gray-300 text-lg leading-relaxed max-w-lg max-md:text-[16px] max-md:max-w-full max-md:leading-[1.6] max-md:text-left max-md:whitespace-normal max-md:break-normal">
   
               While you’re wondering if you should
               <br className="block md:hidden" />
               learn AI, smart girls already are.
               <br className="block md:hidden" />
               Companies across every industry are
               <br className="block md:hidden" />
               desperately seeking employees who
               <br className="block md:hidden" />
               can work alongside AI, not against it.
               <br className="block md:hidden" />
               Adapt now to be the leader of
              <br className="block md:hidden" />
               tomorrow.
                 </p>
                     </div>

 {/* RIGHT IMAGE (BOTTOM) */}
  <div className=" relative col-span-12" />
  <Image src="/Rectangle-1.png" alt="AI Board" width={300} height={300}
  className="absolute top-[767px] left-1/2 -translate-x-1/2 w-[375px] h-[220px] object-cover object-top w-[375px] h-[220px] object-cover object-bottom
  md:top-[600px] md:left-[1000px] md:translate-x-0 md:w-[300px] md:h-[300px] md:object-contain rounded-lg shadow-xl "/>
    
        </div>
      </section>

    </main>
  );
}

