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
      className="bg-transparent overflow-hidden transition-all duration-300 ease-out"
      style={{ 
        width: '1000px',
        minHeight: '102px',
        border: '1px solid rgba(236, 241, 244, 0.3)',
        borderRadius: '20px',
        marginBottom: '12px'
      }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left transition-all duration-300 ease-out hover:bg-white/5"
        style={{
          padding: '24px 30px',
          gap: '24px'
        }}
      >
        <span className="text-lg font-semibold text-white pr-4">{question}</span>
        <ChevronDown 
          className={`w-6 h-6 text-white/70 flex-shrink-0 transition-transform duration-300 ease-out ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div 
          className="text-white/80 leading-relaxed"
          style={{
            padding: '0 30px 24px 30px',
            borderTop: '1px solid rgba(236, 241, 244, 0.2)'
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{
        width: '1440px',
        minHeight: '1946px',
        paddingTop: '120px',
        paddingRight: '60px',
        paddingBottom: '120px',
        paddingLeft: '60px',
        margin: '0 auto',
        background: '#0a0a0f'
      }}
    >
      <div 
        className="flex flex-col items-center w-full"
        style={{
          gap: '100px'
        }}
      >
        <div 
          className="text-center font-bold"
          style={{
            width: '496px',
            minHeight: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <h2 className="text-5xl font-bold text-white mb-0" style={{ letterSpacing: '0.02em' }}>
            GOT QUESTIONS?
          </h2>
          <p className="text-base text-white/70">
            For any query contact at{' '}
            <a 
              href="mailto:womenaicollective@gmail.com" 
              className="text-white hover:text-white/90 "
            >
              womenaicollective@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center w-full">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}