"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */
const testimonials = [
  {
    id: 1,
    name: "Alina Fatema",
    org: "St. Xavier's College, Ahmedabad",
    location: "Ahmadabad India",
    sticker:[{name :"rainbow"}],
    color: "bg-purple-500",
    text:
      "The AI Program was a game changer for me! Our mentor,Samina simplified complicated Ai topics into simple,interesting lectures that even a non-technical person like me could understand them.The interactive discussions kept me motivated, and the prompt learning was quite beneficial in my college assignments lately.I feel more secure in my understanding of Ai today,and I would absolutely suggest it to anyone interested in the topic. it was a fantastic starting place!"
  },
  {
    id: 2,
    name: "Riya",
    org: "DBJ College, Chiplun",
     location: "Maharastra, India",
     sticker: [
    { name: "smile"  },
    { name: "star" }
  ],
    color: "bg-pink-500",
    text:
      "I knew a little about AI before, but not much.This program really helped me understand it in a simple way.As a commerce student,Ithought it would be hard, but everything was explained so well.I learned new things, and the mentor support & interactive sessions were amazing. Now i feel more confident,and I'm really happy i joined!\u{1F60A}"
  },
  {
    id: 3,
    name: "Taha Wajid",
    org: "Digital Product Designer, Dubai",
    location: "Dubai",
    sticker:[{name :"heart"}],
    color: "bg-yellow-400",
    text:
      "To be honest, I was a bit skeptical about joining the course and learning about AI. But from the very first lesson, I felt like I was in good hands. The mentor was super knowledgeable and patient and explained everything in a way that just made sense. I am confident in my ability to work with AI and excited to see where this new skill takes me. From being somewhat clueless to confident in just weeks. I am glad I took the leap and invested in myself. If you are thinking about it and curious about AI and its possibilities, I would say definitely give it a shot; just do it, and it’s perfect for beginners and experts alike"
  },
  {
    id: 4,
    name: "Sumaiya Khatun",
    org: "Bidya Bharati Girls' High School",
    location: "Kolkata, India",
    sticker:[{name :"fire"}],
    color: "bg-gray-100",
    text:
      "I was nervous about AI, but this course changed everything. Step by step, I learned not just what AI can do, but how to use it in my daily life. The examples were so relatable and helpful. What I loved most was how simple everything was explained. It’s amazing how much I learned in such a short time."
  },
  {
    id: 5,
    name: "Molli Sharma",
    org: "Jesus and Mary College, Delhi",
    location:"New Delhi, India",
    sticker: [
    { name: "spark"  },
    { name: "trophy" }
  ],
    color: "bg-pink-300",
    text1:
    "AI is transforming the world, and regardless of our background, understanding its fundamentals has become important. As someone always fascinated by technology but never formally studied computer science, I actively seek opportunities to explore this field. That’s how I came across Intro to AI by Women AI Collective, a beginner-friendly program designed to make AI accessible to young women. One of the highlights of this journey was working on my project ‘A Day with AI’. I created a small comic showing how AI is part of our daily lives from morning alarms to virtual assistants and work tasks. This helped me see how AI makes life easier in so many ways.",
  text2:
    "A big thanks to our mentor SAMINA, who made everything so simple and easy to understand. She explained even the toughest topics in a way that made sense. This program has helped me gain new skills, understand AI better, and feel more confident using AI tools. I’m excited to keep learning and exploring the world of AI."
}
];

 

/* ---------------- COMPONENT ---------------- */
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(testimonials);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#05061a] text-white px-6 py-20 overflow-hidden">
    

      <h1 className="text-center text-5xl font-bold mb-30">
        WHAT OUR GIRLS SAY
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
        {/* Left column */}
        <div className="flex flex-col gap-14">
          {data.slice(0, 2).map((item, i) => (
            <TestimonialCard key={item.id} item={item} delay={i * 0.1} />
          ))}
        </div>

        {/* Center column */}
        <div className="flex flex-col gap-14 md:-mt-12">
          {data.slice(2, 4).map((item, i) => (
            <TestimonialCard key={item.id} item={item} delay={i * 0.15} />
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-14">
          {data.slice(4).map((item) => (
            <TestimonialCard key={item.id} item={item} delay={0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}

const stickerPositionClasses = {
rainbow: "absolute -top-13 -right-7 w-28 h-30",
  smile: "absolute -top-9 -left-5 w-17 h-18",
  star: "absolute top-[85%] right-[-3%] -translate-y-1/2 w-20 h-16",
  heart: "absolute bottom-4 right-4 w-25 h-28",
 trophy: "absolute top-[90%] -right-6 -translate-y-1/2 w-16 h-16",
spark: "absolute left-1/2 -top-8 -translate-x-1/2 w-16 h-16",
fire: "absolute top-[78%] right-9 -translate-y-1/2 w-16 h-17"

};







/* ---------------- CARD COMPONENT ---------------- */
function TestimonialCard({ item, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    className={`relative p-6 shadow-xl text-black ${item.color}`}
>
  <p className="font-indie text-[15px] leading-[1.6] mb-6">
    {item.text}</p>
  <p className="font-indie text-[15px] leading-[1.6] mb-4">
  {item.text1}</p>
<p className="font-indie text-[15px] leading-[1.6] mb-6">
  {item.text2}</p>
  <h3 className="font-sans font-bold text-sm uppercase tracking-wide">
    {item.name}</h3>
  <p className="font-sans text-xs opacity-80">
    {item.org}</p>
  <p className="font-sans text-xs opacity-80">
    {item.location}</p>
   {item.sticker?.map((sticker, index) => (
  <img
    key={index}
    src={`/stickers/${sticker.name}.png`}
    alt={sticker.name}
    className={stickerPositionClasses[sticker.name]}
  />
))}
    </motion.div>
  );
}
