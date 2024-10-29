import { motion } from 'framer-motion'
import { Lightbulb, Users, Rocket } from 'lucide-react'

export default function About() {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', description: 'With over 10 years of experience in marketing and communications, John leads our team with expertise and passion.' },
    { name: 'Jane Smith', role: 'Creative Director', description: 'Jane brings creativity and innovation to our team, with a focus on delivering exceptional results.' },
    { name: 'Mike Johnson', role: 'Marketing Manager', description: 'Mike has a proven track record of success in marketing and communications, and is dedicated to helping our clients achieve their goals.' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-600 via-navy-800 to-navy-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 mb-12"
        >
          About Us
        </motion.h1>

        <motion.div variants={itemVariants} className="text-cyan-100 text-lg md:text-xl text-center mb-16">
          <p>
            At Chapter 001 Pakistan, we believe in empowering businesses to reach their full potential. Our mission is to provide innovative and effective marketing solutions that help businesses in Pakistan grow and succeed. We're passionate about what we do, and we're committed to delivering exceptional results for our clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <Lightbulb className="text-5xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Innovative Solutions</h3>
            <p className="text-cyan-100">We bring fresh ideas to the table, helping your business stand out.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <Users className="text-5xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Expert Team</h3>
            <p className="text-cyan-100">Our experienced professionals are dedicated to your success.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <Rocket className="text-5xl text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Proven Results</h3>
            <p className="text-cyan-100">We deliver measurable outcomes that drive your business forward.</p>
          </motion.div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 mb-8"
        >
          Our Team
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 rounded-xl p-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{member.name}</h3>
              <h4 className="text-xl font-semibold text-cyan-200 mb-4">{member.role}</h4>
              <p className="text-cyan-100">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}