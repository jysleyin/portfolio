import photo from './assets/photo.png'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Navigation */}
      <nav className="flex justify-center gap-8 py-6">
        <a href="#work" className="text-gray-700 hover:text-gray-900">Work</a>
        <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
        <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl mb-2">Hello! I am</h2>
            <h1 className="text-6xl font-bold mb-4">JULZ.</h1>
            <p className="text-gray-700 mb-6 max-w-md">
              A student, creative thinker and community leader obsessed with turning ideas into impact.
            </p>
            <motion.a
              href="https://www.linkedin.com/in/julissa-liang-6958801b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full"
              style={{backgroundColor: '#7F9F5C', color: '#e0eb73'}}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={{ paddingRight: isHovered ? '1.5rem' : '0.25rem' }}
              transition={{ duration: 0.2 }}
            >
              Let's connect!
              <motion.span
                className="ml-2"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
          <div className="flex-1">
            <img 
              src={photo} 
              alt="Profile" 
              className="rounded-lg w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <div className="relative h-20" style={{backgroundColor: '#e0eb73'}}>
        <svg className="absolute top-0 w-full h-20" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" fill="#fafaf9" />
        </svg>
      </div>

      {/* Featured Works Section */}
      <section className="py-20 px-8" style={{backgroundColor: '#e0eb73'}}>
        <h2 className="text-4xl font-bold text-center mb-12">Featured Works</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-teal-700 rounded-3xl p-4">
            <div className="bg-orange-400 rounded-2xl p-8 flex flex-col md:flex-row gap-6">
              <img 
                src="https://via.placeholder.com/200x150" 
                alt="BenefitBridge" 
                className="rounded-lg w-48 h-36 object-cover"
              />
              <div className="flex-1">
                <h3 className="text-white text-2xl font-bold mb-2">BenefitBridge</h3>
                <p className="text-white mb-4">
                  Connect yourself with the best benefits for your needs.
                </p>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100">
                  View more →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <div className="relative h-20 bg-purple-300">
        <svg className="absolute top-0 w-full h-20" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" fill="#e0eb73" />
        </svg>
      </div>

      {/* Footer Section */}
      <section className="bg-purple-300 py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Thanks for scrolling<br />12345 pixels!</h2>
        <p className="text-lg mb-8">If you are still here, let's get in touch?</p>
        <div className="flex justify-center gap-4 mb-12">
          <button className="border-2 border-black px-8 py-2 rounded-full hover:bg-black hover:text-white transition">
            LinkedIn
          </button>
          <button className="border-2 border-black px-8 py-2 rounded-full hover:bg-black hover:text-white transition">
            Email
          </button>
        </div>
        <p className="text-gray-600 text-lg">[THE END]</p>
      </section>
    </div>
  );
}