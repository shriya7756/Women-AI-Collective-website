export default function WhyJoin() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-16 md:py-24 bg-[#060818] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT CARD */}
        <div className="rounded-[20px] border-2 bg-[#31091E] border-[#ECF1F4] shadow-[0_0_20px_#E62376]
                        p-6 sm:p-10 md:p-[60px] flex flex-col gap-6 md:gap-8">

          <h2 className="text-[50px] md:text-[50px] font-bold leading-[100%] tracking-[-0.03em]">
  WHY SHOULD I <br /> JOIN?
</h2>
          <ul className="space-y-4 text-sm md:text-base text-gray-200 leading-relaxed">
            <li>💗 Because it’s built for women, by someone who understands what it feels like to start with zero tech background and still break into the AI space.</li>
            <li>💗 This program doesn’t overwhelm you with jargon or dump theory on you.</li>
            <li>💗 It shows you exactly how to use AI in your studies, work, projects, and daily life, step by step. While also providing a deep understanding of the fundamental concepts. </li>
            <li>💗 By the end, you won't just understand AI; you'll have built real projects that you can show to employers, clients, or use yourself to earn online.</li>
            <li>💗 Recent studies by McKinsey reveal that AI is set to replace more women employees than men by 2030, especially in roles dominated by women. This program empowers young women to stay ahead in the AI-Revolution.</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className=" relative rounded-[20px] border-2 bg-[#31091E] border-[#ECF1F4] shadow-[0_0_20px_#E62376]
                        p-6 sm:p-10 md:p-[60px] flex flex-col justify-between gap-8">

          {/* TEXT CONTENT */}
 <div
  className="
    
                text-[40px] md:text-[40px] font-bold leading-[100%] tracking-[-0.02em]"
>
                                   <p>
                             <span className="text-white">We’re building a community of </span>
                            <span className="text-pink-400 font-semibold">1,000+ girls </span>
                            <span className="text-white">and women.</span>
                          </p>
  
                        <br />

                      <p className="text-white">
                   When you join, you don’t just learn AI…
                    </p>
                <br />
                     <p>
               <span className="text-pink-300">You become part of the 
                 <br />next generation of</span>
             <br />
             <span className="text-pink-400">women shaping India’s tech landscape.</span>
           </p>
              </div>

     {/* CTA */}
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-yellow-400 font-medium">
              Don&apos;t Miss the AI Revolution • Limited time deal
            </p>

            <button
              className="
                w-full sm:w-[338px] h-[41px]
                flex items-center justify-center gap-3
                px-6 py-2
                rounded-[10px]
                bg-[#F1247B]
                font-semibold text-white
                transition
                shadow-[inset_0px_0px_6px_rgba(236,241,244,0.3)]
                hover:brightness-110
              "
            >
              ENROLL NOW
              <span className="line-through text-sm">@₹1499</span>
              <span className="text-sm">@₹599</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

