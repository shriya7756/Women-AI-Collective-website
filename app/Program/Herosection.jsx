"use client";
"use client";

import Navbar1 from "@/components/ui/navbar1";
import Image from "next/image";
import { Button } from "../../components/ui/button";

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Navbar1 />

      {/* HERO SECTION  */}
      <section className="relative py-10 px-6 md:px-16 lg:px-20 bg-black">
        <div className="grid grid-cols-12 gap-10 items-start">

          {/* LEFT IMAGE */}
          <div className="col-span-12 md:col-span-3 flex justify-center md:justify-start">
            <Image
              src="/Rectangle 3.png"
              alt="Master Gen AI"
              width={300}
              height={400}
              className="rounded-lg shadow-xl w-[220px] h-auto md:w-[300px] md:h-[400px]"
            />
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

            <Button className="mt-8 bg-pink-500 px-7 py-3 rounded-xl text-lg font-bold hover:bg-pink-600 transition">
              ENROLL NOW
            </Button>
          </div>

          {/* RIGHT STACKED IMAGE (❌HIDDEN ON MOBILE) */}
          <div className="hidden md:flex col-span-12 md:col-span-4 flex-col gap-8 mt-4">
            <Image
              src="/Rectangle 1.png"
              alt="Classroom AI"
              width={200}
              height={200}
              className="rounded-lg shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="px-6 md:px-16 lg:px-20 py-10 bg-black">
        <div className="grid grid-cols-12 gap-10 items-center">

          {/* LEFT TEXT */}
          <div className="col-span-12 md:col-span-7 text-center md:text-left">
            <p className="text-xs md:text-sm uppercase font-bold tracking-widest mb-4">
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

          {/* RIGHT IMAGE */}
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <Image
              src="/Rectangle 1.png"
              alt="AI Board"
              width={320}
              height={260}
              className="rounded-lg shadow-xl"
            />
          </div>

        </div>
      </section>

    </main>
  );
}
