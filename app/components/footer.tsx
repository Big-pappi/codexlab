import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col items-center">
          <div className="text-neon-blue font-bold text-xl mb-2">NeonTech Solutions</div>
          <p className="text-gray-400 text-sm mb-4">Innovative tech solutions for your business</p>
          <div className="flex space-x-4 mb-4">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">
                {social}
              </a>
            ))}
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NeonTech Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

