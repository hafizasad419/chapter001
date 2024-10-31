import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  { name: 'John Doe', role: 'Creative Executive', image: '/logo.png' },
  { name: 'Jane Smith', role: 'Business Development Manager', image: '/logo.png' },
  { name: 'Alex Brown', role: 'Junior Publicist', image: '/logo.png' },
  { name: 'Emily White', role: 'Marketing Specialist', image: '/logo.png' },
];

const OurTeam: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-800 via-navy-900 to-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-5xl font-extrabold text-center text-white mb-12">
        Our Team
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-red-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center text-white">
                <h2 className="text-xl font-bold">{member.name}</h2>
                <p className="text-lg">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurTeam;
