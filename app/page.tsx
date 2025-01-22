"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-6 text-neon-blue">Welcome to NeonTech Solutions</h1>
        <p className="text-xl mb-8">Innovative tech solutions for your business</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/services"
            className="bg-neon-blue text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-neon-pink transition duration-300"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {["Innovative", "Reliable", "Cutting-edge"].map((feature, index) => (
          <motion.div
            key={feature}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-neon-pink">{feature}</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

