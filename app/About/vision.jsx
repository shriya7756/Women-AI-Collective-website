import Image from "next/image";

export default function Vision() {
  return (
    <main className="w-full min-h-screen">
  
      {/* ===== GRID WRAPPER ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2">

        {/* ===== LEFT TOP : VISION (PINK) ===== */}
        <div className="bg-pink-600 text-white px-8 py-12 md:px-14 md:py-16">
          <p className="uppercase text-sm font-semibold tracking-widest opacity-80">
            Our Vision
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight">
            WHY WOMEN AI <br />
            COLLECTIVE EXISTS
          </h1>

          <p className="mt-6 text-sm md:text-base leading-relaxed opacity-90 max-w-xl">
            Education for girls is no longer a privilege — it’s a right every
            woman holds. But having a career still depends on privilege.
            <br /><br />
            It’s time to change that. We believe that in an AI-first world, not
            knowing how AI works creates a new barrier, keeping women,
            especially from non-tech backgrounds, out of future job
            opportunities.
            <br /><br />
            <span className="font-semibold">
              This isn’t just about technology. It’s about equality.
            </span>
          </p>
        </div>

        {/* ===== RIGHT TOP : IMAGE ===== */}
        <div className="relative w-full h-[300px] md:h-full">
          <Image
            src="/books img.png"   // place image in /public/books.jpg
            alt="Bookshelf"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ===== LEFT BOTTOM : WORD CLOUD ===== */}
        <div className="bg-white px-8 py-12 md:px-14 md:py-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-pink-600 font-bold text-xl md:text-2xl mb-4">
            What girls had to say...
          </h2>

          <p className="text-sm md:text-base text-gray-700 max-w-lg mb-6">
            When you think about the relationship between AI/tech and women &
            girls, what’s one word or emoji that captures how you feel?
          </p>

          <Image
            src="/left 2.png"      // place image in /public/wordcloud.png
            alt="Word Cloud"
            width={420}
            height={260}
            className="object-contain"
          />
        </div>

        {/* ===== RIGHT BOTTOM : MISSION (YELLOW) ===== */}
        <div className="bg-yellow-400 px-8 py-12 md:px-14 md:py-16">
          <p className="uppercase text-sm font-semibold tracking-widest text-black opacity-80">
            Our Mission
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 leading-tight text-black">
            HELP 1000 GIRLS AND WOMEN IN INDIA MASTER AI BY 2027
          </h2>

          <p className="mt-6 text-sm md:text-base leading-relaxed text-black max-w-xl">
            At WAIC, we’re committed to empowering women to become AI-literate
            and AI-fluent. Not everyone needs to be a coder, but every woman
            from every discipline should have the power to understand, use,
            and question the technology shaping our lives.
          </p>
        </div>

      </section>
    </main>
  );
}
