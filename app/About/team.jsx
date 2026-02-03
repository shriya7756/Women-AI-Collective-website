import React from 'react';
import { Linkedin } from 'lucide-react';

const TeamMemberCard = ({ name,place, role, description, image, linkedinUrl }) => {
  return (
    <div className="bg-white rounded-[10] border-2 border-black overflow-hidden w-80 shadow-sm hover:shadow-md transition-shadow ">
      {/* Header with image and LinkedIn */}
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-[380px] h-[254px] p-3 object-cover "
        />
      </div>
      
      {/* Content */}
      <div className="p-2">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {name}
        </h3>
        <p className='text-sm font-medium text-[#F1247B]'>
            {place}
        </p>
        {/*
         <a 
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute  right-3 bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors"
        >
        </a>
            <Linkedin className="w-4 h-4 text-white" />*/}
        <p className="text-sm font-semibold text-[#000000] mb-3">
          {role}
        </p>
        <p className="text-sm text-[#333333] leading-relaxed mb-3">
          {description}
        </p>
      </div>
    </div>
  );
};

// Demo with sample data
const TeamSection = () => {
  const teamMembers = [
    {
      name: "DEEPALI SAINI",
      place:"New Delhi , India",
      role: "Content Writter",
      description: "A former Artificial Intelligence Intern at IndiGo Airlines and a fourth-year Bachelor of Technology student in Mathematics and Computing Engineering at Delhi Technological University. I am an aspiring Software Engineer with experience in AI and competitive programming.",
      image: "/DeepaliSaini_contentWriter.jpeg",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "EKTA KUMARI",
      place:"New Delhi , India",
      role: "Social Media Manager",
      description: "At WAIC, we're committed to empowering women to become AI-literate and AI-fluent. Not everyone needs to be a coder, but every woman from every discipline should have the power.",
      image: "/Ekta Kumari _ SMM.jpg",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "TAHA WAJID",
      place:"Hyedrabad, India",
      role: "Freelance Associate",
      description: "Just dedoed",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "Samina Khatoon",
      place:"Hyedrabad, India",
      role: "Web Developer",
      description: "I’m Shriya, with experience building end-to-end AI and web platforms from data to deployment. I believe technology has the greatest impact when it’s built with clarity, empathy, and intention- especially in spaces that shape inclusion. That belief led me to contribute to building WAIC.",
      image: " Shria - Web Developer.jpeg",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "RARDEEP KAUR",
      place:"Madhya Pradesh , India",
      role: "Web Developer",
      description: " I’m Rabdeep Kaur, a Full Stack Developer. Working with WAIC and contributing my skills to support the team’s vision has been a truly meaningful experience, not just in terms of project work, but in being part of a purpose that aims to make AI and the digital space more inclusive and accessible for women.",
      image: "/Untitled design (1).png",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "LATIKA",
      place:"Hyedrabad India",
      role: "Video Editor",
      description: "Just dedoed",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "SNEHA DUBEY",
      place:"Mumbai , India",
      role: "Web Developer",
      description: "Hi, I’m Sneha, a Frontend & Backend Developer. My journey at WAIC was about more than just coding I got to work on projects that amplified representation, built trust, and created opportunities in tech. Being part of WAIC showed me how powerful technology can be when it’s inclusive, intentional, and people-focused..",
      image: "/Sneha - Web Developer.jpeg",
      linkedinUrl: "https://linkedin.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          OUR TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;