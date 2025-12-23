"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-[#0b0d2a] text-white font-sans">

      {/* NAVBAR  */}
      <nav className="flex justify-between items-center px-10 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/logo.png"
            alt="Women AI Collective"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-lg font-bold text-pink-500">
            Women AI Collective
          </span>
        </Link>

        {/* MENU */}
        <ul className="flex gap-6 text-sm opacity-80">
          <li className="hover:opacity-100">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:opacity-100 cursor-pointer">About</li>
          <li className="hover:opacity-100 cursor-pointer">Blog</li>
          <li className="hover:opacity-100">
            <Link href="/program">Program</Link>
          </li>
          <li className="hover:opacity-100 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* HERO SECTION  */}
      <section className="relative px-16 py-24 bg-[#07081f]">
        <div className="grid grid-cols-12 gap-10 items-start">

          {/* LEFT IMAGE */}
          <div className="col-span-12 md:col-span-3 flex justify-center">
            <Image
              src="/left-card.png"
              alt="Master Gen AI"
              width={220}
              height={320}
              className="rounded-lg shadow-xl"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="col-span-12 md:col-span-5">
            <h1 className="text-[44px] font-extrabold leading-tight">
              ARTIFICIAL <br /> INTELLIGENCE 101
            </h1>

            <p className="mt-6 text-[15px] leading-[1.6] opacity-80 max-w-[520px]">
              For every girl told “tech isn’t for you”, we say “AI is your superpower.”
              Unlock the power of AI with India’s first AI program designed for women
              from both Tech and Non-Tech backgrounds.
            </p>

            <p className="mt-5 text-[15px] leading-[1.6] opacity-80 max-w-[520px]">
              Ready to master the skills that will define the next decade of work?
              No coding experience required.
            </p>

            <button className="mt-8 bg-pink-500 px-7 py-3 rounded-full text-sm font-semibold hover:bg-pink-600 transition">
              ENROLL NOW
            </button>
          </div>

          {/* RIGHT STACKED IMAGES */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-8 items-center">
            <Image
              src="/left-card.png"
              alt="Classroom AI"
              width={300}
              height={200}
              className="rounded-lg shadow-xl"
            />

            <Image
              src="/right-card.png"
              alt="AI Board"
              width={260}
              height={180}
              className="rounded-lg shadow-xl"
            />
          </div>

        </div>
      </section>

      {/*  BOTTOM SECTION  */}
      <section className="px-16 py-24 bg-[#07081f]">
        <div className="grid grid-cols-12 gap-10 items-center">

          {/* LEFT TEXT */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-sm uppercase tracking-widest opacity-60 mb-4">
              Let’s Face It
            </p>

            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              AI IS NOT THE FUTURE, <br />
              IT’S THE PRESENT.
            </h2>

            <p className="text-[18px] leading-[1.4] opacity-80 max-w-[580px]">
              While you’re wondering if you should learn AI, smart girls already are.
              Companies across every industry are desperately seeking employees who
              can work alongside AI, not against it. Adapt now to be the leader of
              tomorrow.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <Image
              src="/right-card.png"
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

