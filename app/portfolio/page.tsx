"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "A fully-featured online store with integrated payment systems.",
    },
    {
      id: 2,
      name: "AI-powered Chatbot",
      description: "An intelligent customer service bot using natural language processing.",
    },
    {
      id: 3,
      name: "IoT Smart Home System",
      description: "A comprehensive solution for home automation and energy management.",
    },
    {
      id: 4,
      name: "Blockchain Supply Chain",
      description: "A transparent and secure supply chain management system using blockchain.",
    },
    {
      id: 5,
      name: "VR Training Simulator",
      description: "An immersive virtual reality training platform for industrial applications.",
    },
    {
      id: 6,
      name: "Data Visualization Dashboard",
      description: "An interactive dashboard for real-time data analysis and reporting.",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-6 text-neon-blue">Our Portfolio</h1>
        <p className="text-xl mb-12">Explore some of our most innovative and impactful projects.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <h2 className="text-2xl font-bold mb-4 text-neon-pink">{project.name}</h2>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-bold mb-4 text-neon-blue">{selectedProject.name}</h2>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <button
              className="bg-neon-pink text-gray-900 px-4 py-2 rounded-full font-bold hover:bg-neon-blue transition duration-300"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

