import Image from 'next/image'
import  Navbar1  from "@/components/ui/navbar1"

export default function MobileHeroSection() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#31091E] relative lg:hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pink light gradient.png"
          width={1000}
          height={1000}
          alt="gradient"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar1 />
           {/* Announcement Banner */}
          <div className="w-full max-w-md mb-8">
            <div className="bg-[#06061A]/50 rounded-[10px] px-4 py-3 flex items-start gap-3 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)] backdrop-blur-sm">
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
          <div className="mb-2">
            <Image
              src="/logo1.png"
              width={280}
              height={100}
              alt="Women AI Collective Logo"
              className="w-64"
            />
          </div>


          {/* Main Heading */}
          <h1 className="text-center mb-6 px-2">
            <span className="block font-normal text-2xl leading-tight text-[#FAFCFE] mb-1">
              We are on a mission
            </span>
            <span className="block font-normal text-2xl leading-tight text-[#FAFCFE] mb-1">
              to Empower
            </span>

            <div className="flex flex-wrap justify-center items-center gap-2 mb-1">
              <span className="relative inline-block italic font-semibold text-2xl leading-tight text-[#FAFCFE]">
                Young
              
              </span>
              
              <span className="relative inline-block italic font-semibold text-2xl leading-tight text-[#FAFCFE]">
                Women
              
              </span>
            </div>

            <span className="block font-semibold text-2xl leading-tight text-[#FAFCFE]">
              Build{' '}
              <span className="relative inline-block italic font-semibold text-2xl leading-tight text-[#FAFCFE]">
                Careers
              
              </span>
            </span>
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
    </section>
  );
}