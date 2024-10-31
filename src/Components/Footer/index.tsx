'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Animated rings */}
          <div className="relative w-48 h-48">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute inset-0 border border-cyan-500/30 rounded-full"
                style={{ scale: 1 - index * 0.1 }}
                animate={{
                  rotate: 360,
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 10 + index * 5,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              />
            ))}
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                src="/logo.png"
                alt="Logo"
                className="w-24 h-24"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
            </div>
          </div>

          {/* Privacy Policy Link */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group flex items-center space-x-2 text-white hover:text-white transition-colors duration-300"
          >
            <NavLink to="/privacy-policy" className="text-lg font-medium">
              Privacy Policy
            </NavLink>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-white/70 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            © 2019 Chapter001 Pakistan. All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
            fill="rgba(0, 255, 255, 0.05)"
          />
        </svg>
      </div>
    </footer>
  )
}

export default Footer