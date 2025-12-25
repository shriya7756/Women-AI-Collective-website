export default function ToolsSection() {
 const sections = [
  {
    title: "Research, Writing & Brainstorming",
    tools: [
      {
        name: "ChatGPT",
        image: "./logos/chatgpt.png", // replace later
        description: "Write assignments, generate ideas, and solve everyday study and work tasks."
      },
      {
        name: "Claude",
        image: "./logos/claude.png",
        description: "Break down long readings and organize thoughts clearly."
      },
      {
        name: "Grok 3",
        image: "./logos/grok.png",
        description: "Break down long readings and organize complex topics quickly."
      },
      {
        name: "Gemini",
        image: "./logos/gemini.png",
        description: "Google's multimodal AI to search smarter and understand complex topics."
      },
      {
        name: "Perplexity",
        image: "./logos/perplexity.png",
        description: "Find reliable answers with fast, citation-based research."
      },
      {
        name: "DeepSeek",
        image: "./logos/deepseek.png",
        description: "Get quick explanations, summaries, and problem-solving help."
      },
    ]
  }
];


  return (
    <section className="w-full bg-[#050817] text-white py-20 px-6 md:px-16 lg:px-28 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className=" flex jusitfy-start text-center text-xl md:text-2xl font-medium mb-2">
            Hands On AI
          </p>
          <h2 className=" flex justify-start text-center text-3xl font-extrabold text-white">
            15+ AI TOOLS
          </h2>
        </div>

        {/* Container */}
        <div className="flex flex-col gap-10 ">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white text-black border border-white/10 rounded-6xl p-6 md:p-10">

              {/* Section Title */}
              <h3 className="text-lg md:text-xl font-bold mb-6 text-black">
                {sec.title}
              </h3>

              {/* FLEX WRAP: Free-flow card sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {sec.tools.map((tool, index) => (
                <div
                  key={index}
                  className="border border-[#EE71A8] rounded-xl bg-white/10 p-6 hover:bg-white/20 transition"
                >
                  <img src={tool.image} className="w-12 h-12 mx-auto mb-3" />
                  <p className="text-sm text-gray-200 text-center leading-normal">
                    {tool.description}
                  </p>
                </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
