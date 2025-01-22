"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-6 text-neon-blue">About NeonTech Solutions</h1>
        <p className="text-xl mb-8">
          We are a team of passionate tech enthusiasts dedicated to providing innovative solutions for businesses.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-neon-pink">Our Mission</h2>
          <p className="text-gray-300">
            To empower businesses with cutting-edge technology solutions that drive growth and innovation.
          </p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-neon-pink">Our Vision</h2>
          <p className="text-gray-300">
            To be the leading provider of transformative tech solutions, shaping the future of businesses worldwide.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-3xl font-bold mb-6 text-neon-blue">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["John Doe", "Jane Smith", "Mike Johnson"].map((member) => (
            <motion.div
              key={member}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg text-center"
            >
              <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2 text-neon-pink">{member}</h3>
              <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

