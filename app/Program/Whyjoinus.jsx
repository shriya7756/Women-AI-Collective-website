export default function WhyJoin() {
  return (
    <section className="px-10 py-24 bg-[#060818] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="rounded-2xl p-8 bg-gradient-to-br from-[#2a061a] to-[#12030b]
                        border border-pink-500/60 shadow-[0_0_25px_rgba(255,45,143,0.35)]">
          <h2 className="text-3xl font-bold mb-6">
            WHY SHOULD I <br /> JOIN?
          </h2>

          <ul className="space-y-4 text-sm text-gray-200">
            <li>💗 Because it’s built for women, by someone who understands what it feels like to start with zero tech background and still break into the AI space.</li>
            <li>💗 This program doesn’t overwhelm you with jargon or dump theory on you.</li>
            <li>💗 It shows you exactly how to use AI in your studies, work, projects, and daily life, step by step. While also providing a deep understanding of the fundamental concepts. </li>
            <li>💗 By the end, you won't just understand AI; you'll have built real projects that you can show to employers, clients, or use yourself.</li>
            <li>💗Recent studies by McKinsey reveal that AI is set to replace more women employees than men by 2030, especially in roles dominated by women. This program empowers young women to stay ahead in the AI-Revolution.</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="rounded-2xl p-8 bg-gradient-to-br from-[#2a061a] to-[#12030b]
                        border border-pink-500/60 shadow-[0_0_25px_rgba(255,45,143,0.35)]
                        flex flex-col justify-between">

          <h2 className="text-2xl text-pink-200 leading-snug">
            We’re building a community of{" "}
            <span className=" text-pink-400 font-bold">1,000+</span> girls & women.
            <br /><br />
            <p className = "text-2xl text-pink-200 leading-snug">you don’t just learn AI…
             You become part of the next generation of women shaping India’s tech landscape.</p>
           
            You don’t just learn AI — you become part of the future.
          </h2>

          <button className="mt-10 bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full font-semibold">
            ENROLL NOW <span className="line-through ml-2">@₹1499</span>@₹599
          </button>
        </div>

      </div>
    </section>
  );
}