import Image from "next/image";

export default function Vision() {
  return (
  <main className="w-full min-h-screen">
  <section className="grid grid-cols-1 md:grid-cols-2">
        
    <div className="bg-pink-600 text-white px-8 py-12 md:px-14 md:py-16  width-[720px] height-[512px]">
    <p className="text-[20px] font-bold tracking-widest text-left">
       Our Vision</p>

  <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight max-w-[720px]">
    WHY WOMEN AI <br />
    COLLECTIVE EXISTS</h1>

 <p className="mt-6 text-left leading-[1.4] text-[#ECF1F4] max-w-[520px] tracking-normal">
   Education for girls is no longer a privilege — it’s a right <br />
   every woman holds. But having a career still depends <br />
   on privilege. It’s time to change that. We believe that in <br />
   an AI-first world, not knowing how AI works creates a <br />
   new barrier, keeping women, especially from non-tech <br />
   backgrounds, out of future job opportunities. <br />
  <span className="font-bold text-[18px]">
  This isn’t just about technology. It’s about equality.</span> </p>
 </div> 
    
 <div className="relative w-[751px] h-[513px] w-full">
<Image src="/books img.png" alt="Bookshelf" fill className="object-cover" priority /> </div>

      
  <div className="bg-white px-8 py-12 md:px-14 md:py-16 flex flex-col items-center justify-center text-center  width-[720px] height-[512px]">
   <Image src="/what our girls say img.png" alt="Word Cloud" width={712} height={513} className="object-contain"/>
        </div>

  <div className="bg-yellow-400 px-8 py-12 md:px-14 md:py-16">
    <p className=" text-[20px] font-bold tracking-widest text-[#06061A] mb-6">
       Our Mission </p>

    <h2 className="max-w-[595px] text-[32px] md:text-[50px] font-[700] uppercase leading-tight text-black">
        Help 1000 GIRLS and WOMEN IN INDIA Master AI BY 2027
            </h2>

  <p className="mt-6 w-[532px] text-[18px] font-[work sans] leading-[34px] text-[#333333]">
     At WAIC, we're committed to empowering women to <br />
     become AI-literate and AI-fluent. Not everyone needs to be <br />
      a coder, but every woman from every discipline should have <br />
       the power to understand, use, and question the technology <br />
       shaping our lives. </p>
        </div>

      </section>
    </main>
  );
}
