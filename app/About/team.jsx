import React from 'react';
import { Linkedin } from 'lucide-react';

const TeamMemberCard = ({ name,place, role, description, image, linkedinUrl }) => {
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden w-72 shadow-sm hover:shadow-md transition-shadow">
      {/* Header with image and LinkedIn */}
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
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
        <p className="text-sm font-semibold text-gray-600 mb-3">
          {role}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
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
      description: "At WAIC, we're committed to empowering women to become AI-literate and AI-fluent. Not everyone needs to be a coder, but every woman from every discipline should have the power.",
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
      name: "SURBHI RACHHUNIJI",
      place:"Hyedrabad, India",
      role: "Web Developer",
      description: "At WAIC, we're committed to empowering women to become AI-literate and AI-fluent. Not everyone needs to be a coder, but every woman from every discipline should have the power.",
      image: "/Sneha - Web Developer.jpeg",
      linkedinUrl: "https://linkedin.com"
    },
    {
      name: "RARDEEP KAUR",
      place:"Madhya Pradesh , India",
      role: "Web Developer",
      description: " At WAIC, we're committed to empowering women to become AI-literate and AI-fluent. Not everyone needs to be a coder, but every woman from every discipline should have the power.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
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
      description: "At WAIC, we're committed to empowering women to become AI-literate and AI-fluent. Not everyone needs to be a coder, but every woman from every discipline should have the power.",
      image: "/Shria - Web Developer.jpeg",
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