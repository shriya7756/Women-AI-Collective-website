"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Do I need technical AI skills to join?",
    answer: "No. The program is designed for beginners from both tech and non-tech backgrounds. You'll learn AI concepts through simple explanations, no-code tools, and practical activities you can apply immediately."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes. Participants who complete the program will receive a certificate. You must maintain at least 90% attendance and submit the assigned work."
  },
  {
    question: "How much time do I need to dedicate to the program?",
    answer: "The program runs for 6 weeks with live sessions every Saturday (2 hours each). Along with two expert workshops, hands-on practice, a virtual hackathon, and one final project. You'll need 14–16 hours in total to complete the program effectively."
  },
  {
    question: "Why do we need 100% attendance?",
    answer: "Every session builds on the previous one. To support students and working professionals, classes are scheduled on weekends at comfortable times. We encourage full attendance so you don't miss essential concepts, hands-on activities, or project work that prepares you for the final outcomes."
  },
  {
    question: "In which language will the program be taught?",
    answer: "All sessions will be conducted in English."
  },
  {
    question: "On which platform will it be conducted?",
    answer: "Sessions and workshops will be hosted on Google Meet."
  },
  {
    question: "I am facing problems in payment processing when buying this course, what should I do?",
    answer: "Indian participants can pay via the QR code shared in the Google Form. For international payments or further help, email us at womenaicollective@gmail.com"
  },
  {
    question: "Is this program only for college students?",
    answer: "No. The program is ideal for college students, young professionals, high school students, small business owners or anyone curious to start their AI journey."
  },
  {
    question: "Do I need a desktop/laptop?",
    answer: "Yes, a basic desktop/laptop and a stable internet connection will help you participate fully and complete the hands-on tasks."
  },
  {
    question: "Will there be personal mentorship?",
    answer: "You'll get direct access to mentors during live sessions, workshops, and project feedback."
  },
  {
    question: "Will this program change my life?",
    answer: "If you practice what you learn, you'll absolutely notice a shift — in how you work, how you think, and how confidently you use AI. It may not change everything overnight, but it will change your skills, mindset, and opportunities."
  },
  {
    question: "Will I get access to the community after the program?",
    answer: "Yes. You'll join our exclusive Women AI Collective community for ongoing support, resources, and opportunities."
  }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className="
        w-full max-w-[1000px] bg-[#333333] border border-white/20 rounded-[20px] mb-4
        transition-all duration-300 overflow-hidden 
      "
    >
      {/* Question Button */}
      <button
        onClick={onClick}
        className="
          w-full flex items-center justify-between text-left
          hover:bg-white/5 px-6 md:px-8 py-5
          transition-all duration-300
        "
      >
        <span className="text-base md:text-lg font-semibold text-white pr-4">
          {question}
        </span>

        <ChevronDown
          className={`w-6 h-6 text-white/70 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className="
            text-white/80 leading-relaxed border-t border-white/10
            px-6 md:px-8 py-5
          "
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-[#0a0a0f] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-20">
        
        {/* Heading */}
        <div className="text-center space-y-3 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFCFE]">
            GOT QUESTIONS?
          </h2>
          <p className="text-[#ECF1F4] text-sm md:text-base">
            For any query contact at{" "}
            <a href="mailto:womenaicollective@gmail.com" className=" hover:text-white">
              womenaicollective@gmail.com
            </a>
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="w-full flex flex-col  items-center">
          {faqData.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onClick={() => toggleAccordion(i)}
              className="bg-[#333333]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}