export default function ToolsSection() {
 const sections1 = [
  {
    title: "Research, Writing & Brainstorming",
    tools: [
      {
        name: "ChatGPT",
        image: "/chatgpt.png", // replace later
        description: "Write assignments, generate ideas, and solve everyday study and work tasks."
      },
      {
        name: "Claude",
        image: "/calude.png",
        description: "Break down long readings and organize thoughts clearly."
      },
      {
        name: "Grok 3",
        image: "/grok.png",
        description: "Break down long readings and organize complex topics quickly."
      },
      {
        name: "Gemini",
        image: "/gemini.png",
        description: "Google's multimodal AI to search smarter and understand complex topics."
      },
      {
        name: "Perplexity",
        image: "/perplexity.png",
        description: "Find reliable answers with fast, citation-based research."
      },
      {
        name: "DeepSeek",
        image: "/deepseek.png",
        description: "Get quick explanations, summaries, and problem-solving help."
      },
    ]
  },
  {
    title: "Image Generation and Video Generation",
    tools: [
      {
        name: "ChatGPT",
        image: "/chatgpt.png", // replace later
        description: "Write assignments, generate ideas, and solve everyday study and work tasks."
      },
      {
        name: "Claude",
        image: "/calude.png",
        description: "Break down long readings and organize thoughts clearly."
      },
      {
        name: "Grok 3",
        image: "/grok.png",
        description: "Break down long readings and organize complex topics quickly."
      },
      {
        name: "Gemini",
        image: "/gemini.png",
        description: "Google's multimodal AI to search smarter and understand complex topics."
      },
      {
        name: "Perplexity",
        image: "/perplexity.png",
        description: "Find reliable answers with fast, citation-based research."
      },
      {
        name: "DeepSeek",
        image: "/deepseek.png",
        description: "Get quick explanations, summaries, and problem-solving help."
      },
    ]
  },
   {
 title: "Study, Pesesntation & Decks",
    tools: [
      {
        name: "Gemini",
        image: "/gemini.png",
        description: "Google's multimodal AI to search smarter and understand complex topics."
      },
      {
        name: "Perplexity",
        image: "/perplexity.png",
        description: "Find reliable answers with fast, citation-based research."
      },
      {
        name: "DeepSeek",
        image: "/deepseek.png",
        description: "Get quick explanations, summaries, and problem-solving help."
      },
    ]
  },
   {
 title: "No Code Website and AI Automation",
    tools: [
      {
        name: "Gemini",
        image: "/gemini.png",
        description: "Google's multimodal AI to search smarter and understand complex topics."
      },
      {
        name: "Perplexity",
        image: "/perplexity.png",
        description: "Find reliable answers with fast, citation-based research."
      },
      {
        name: "DeepSeek",
        image: "/deepseek.png",
        description: "Get quick explanations, summaries, and problem-solving help."
      },
    ]
  },
];

  return (
    <>
    {/*section1 */}
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
          {sections1.map((sec, i) => (
            <div key={i} className="bg-[#ECF1F4] text-black border border-white/10 rounded-[20px] p-6 md:p-10">

              {/* Section Title */}
              <h3 className=" font-work-sans font-semibold text-[40px] leading-none tracking-[-0.02em] mb-10">
                {sec.title}
              </h3>

              {/* FLEX WRAP: Free-flow card sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {sec.tools.map((tool, index) => (
         <div
          key={index}
          className="p-6 rounded-[30px] text-center transition
                 border border-[#F1247B] bg-[#FAFCFE]
                 shadow-[4px_4px_0px_0px_#E62376E5] hover:shadow-[6px_6px_0px_0px_#E62376E5]"
           >
        <img src={tool.image} className="w-auto h-10 mx-auto mb-3" alt={tool.name} />
        <p className="text-sm text-[#333333] leading-normal">{tool.description}</p>
         </div>
             ))}
           </div>
              
            </div>
          ))}
        </div>

      </div>
  </section>
    </>
  );
}
