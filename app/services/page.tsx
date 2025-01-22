"use client"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    { name: "Web Development", description: "Custom websites and web applications tailored to your needs." },
    { name: "Mobile App Development", description: "Native and cross-platform mobile apps for iOS and Android." },
    { name: "Cloud Solutions", description: "Scalable and secure cloud infrastructure and migration services." },
    {
      name: "AI & Machine Learning",
      description: "Intelligent solutions to automate and optimize your business processes.",
    },
    { name: "Cybersecurity", description: "Comprehensive security solutions to protect your digital assets." },
    { name: "IoT Solutions", description: "Connecting devices and gathering insights for smarter decision-making." },
  ]

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-6 text-neon-blue">Our Services</h1>
        <p className="text-xl mb-12">Discover the cutting-edge solutions we offer to transform your business.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-neon-pink">{service.name}</h2>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

