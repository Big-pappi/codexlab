"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [formStatus, setFormStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setFormStatus("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-6 text-neon-blue">Contact Us</h1>
        <p className="text-xl mb-12">Get in touch with us for any inquiries or collaborations.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4 text-neon-pink">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-neon-blue focus:bg-gray-600 focus:ring-0 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-neon-blue focus:bg-gray-600 focus:ring-0 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-neon-blue focus:bg-gray-600 focus:ring-0 text-white"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-neon-blue text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-neon-pink transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
          {formStatus && <p className="mt-4 text-neon-pink">{formStatus}</p>}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-neon-pink">Contact Information</h2>
          <div className="space-y-4">
            <p>
              <strong className="text-neon-blue">Address:</strong> 123 Tech Street, Neon City, NC 12345
            </p>
            <p>
              <strong className="text-neon-blue">Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong className="text-neon-blue">Email:</strong> info@neontechsolutions.com
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-neon-pink">Follow Us</h3>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a key={social} href="#" className="text-gray-300 hover:text-neon-blue transition duration-300">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

