export default function MozFestSection() {
  return (
    <section className="w-full bg-[#03091D] py-20 flex justify-center">
      <div className="bg-[#4A4A68] w-[1320px] h-[769px] rounded-[30px] p-10 text-white mx-auto" >
          
     <h2 className="font-['Work_Sans'] text-[50px] font-bold text-white leading-tight px-0 py-[10px] w-fit h-fit mt-8 mb-0">
        MOZ FEST 2025 </h2>


<p className=" font-['Work_Sans'] text-[18px] font-normal tracking-normal text-[#ECF1F4] max-w-[1200px] leading-relaxed whitespace-pre-line mb-8">
  On November 7th, 2025, WomenAICollective collaborated with GirlsWhoML to present Tiles of Reflection by putting together the world's
  first narrative screen that brings forth voices from women and underrepresented groups in the design of technologies that impact
  literally everything we do. Through our survey, we collected more than 300 reflections from women across 35+ countries – their words
  revealing resilience, isolation, and hope. Each response became one of the digital tiles within the installation, glowing softly as visitors
  engaged. Guests were invited to select up to four tiles that resonated with them most, a simple act that amplified these women's
  voices. In doing so, the installation turned listening into participation, and participation into recognition.
</p>



          {/* Images */}
         <div className="grid grid-cols-4 gap-4 w-fit h-fit mt-6">
  <img
    src="left.jpg"
    alt="MozFest image 1"
    className="w-[300px] h-[312px] object-cover rounded-[16px]"
  />

  <img
    src="center.jpg"
    alt="MozFest image 2"
    className="w-[300px] h-[312px] object-cover rounded-[16px]"
  />

  <img
    src="centre-2.jpg"
    alt="MozFest image 3"
    className="w-[318px] h-[312px] object-cover rounded-[16px]"
  />

  <img
    src="chair.jpg"
    alt="MozFest image 4"
    className="w-[318px] h-[312px] object-cover rounded-[16px]"
  />
</div>


        </div>
     
    </section>
  );
}
