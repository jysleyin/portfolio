import photo from './assets/photo.png'
import logo from './assets/logo.png'
import enchantedwhispers from './assets/enchantedwhispers.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  return (
    <div className="min-h-screen" style={{backgroundColor: '#F5F1E8'}}>
      {/* Navigation */}
      <nav className="flex justify-center px-8 py-6">
        <div className="flex items-center justify-between w-full max-w-2xl px-6 py-3" style={{
          backgroundColor: '#FFFBF2',
          backdropFilter: 'blur(10px)',
          borderRadius: '50px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
        }}>
          <img src={logo} alt="Logo" className="h-8" />
          <div className="flex gap-8">
            <a href="#work" className="text-gray-400 hover:text-black transition">Work</a>
            <a href="#about" className="text-gray-400 hover:text-black transition">About</a>
            <a href="#contact" className="text-gray-400 hover:text-black transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto pl-24 pr-16 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl mb-2">Hello! I am</h2>
            <h1 className="text-7xl font-bold mb-6">JULZ.</h1>
            <p className="text-gray-700 text-xl mb-8 max-w-md">
              A student, creative thinker and community leader obsessed with turning ideas into impact.
            </p>
            <motion.a
              href="https://www.linkedin.com/in/julissa-liang-6958801b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-lg rounded-full"
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
      <div className="relative h-20" style={{backgroundColor: '#F5F1E8'}}>
        <svg className="absolute top-0 w-full h-20" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,20 Q60,0 120,20 T240,20 T360,20 T480,20 T600,20 T720,20 T840,20 T960,20 T1080,20 T1200,20 T1320,20 T1440,20 L1440,100 L0,100 Z" fill="#e0eb73" />
        </svg>
      </div>

      {/* Featured Works Section */}
      <section ref={containerRef} className="py-20 px-8" style={{backgroundColor: '#e0eb73'}}>
        <h2 className="text-4xl font-bold text-center mb-16">Featured Works</h2>
        <div className="max-w-5xl mx-auto pb-40 space-y-4">
          {[
            { title: 'BenefitBridge', date: 'Summer 2025', desc: 'Connect yourself with the best benefits suitable for your needs. Designed to eliminate confusion and help people feel supported, BenefitBridge analyzes personal priorities and matches users with benefit plans that align with their health and lifestyle.', color: '#0CA065', image: null },
            { title: 'Enchanted Whispers', date: 'Spring 2024', desc: 'A personality-based career quiz enhanced with a mythical visual identity and interactive storytelling to inspire users to explore and reflect on their career interests.', color: '#000000', image: enchantedwhispers },
            { title: 'Forever Health', date: 'Spring 2024', desc: 'A case study exploring a platform solution that improves patient data accessibility for healthcare institutions, emphasizing workflow efficiency and user-centric data visualization.', color: '#EA6640', image: null }
          ].map((project, i) => {
            const topOffset = useTransform(
              scrollYProgress,
              [0, 0.5],
              [100 + i * 60, 100 + i * 45]
            );
            
            const leftOffset = useTransform(
              scrollYProgress,
              [0, 0.5],
              [i * 25, 0]
            );
            
            const [isProjectHovered, setIsProjectHovered] = useState(false);
            
            return (
              <motion.div
                key={i}
                className="sticky w-full"
                style={{ top: topOffset, left: leftOffset }}
                initial={{ scale: 1, opacity: 1 }}
                whileInView={{ 
                  scale: 1,
                }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="p-10 flex flex-col md:flex-row gap-8 relative min-h-[375px]" style={{backgroundColor: project.color, borderRadius: '30px'}}>
                  <img 
                    src={project.image || "https://via.placeholder.com/200x150"} 
                    alt={project.title}
                    className="w-64 h-48 object-cover"
                    style={{borderRadius: '20px'}}
                  />
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-white text-3xl font-bold mb-3">{project.title}</h3>
                      <p className="text-white text-lg mb-6"><em>({project.date})</em> {project.desc}</p>
                      <div className="flex-1"></div>
                      <div className="flex justify-end">
                        <motion.button
                          className="inline-block px-8 py-3 text-lg rounded-full"
                          style={{backgroundColor: '#F5F1E8', color: 'black'}}
                          onHoverStart={() => setIsProjectHovered(true)}
                          onHoverEnd={() => setIsProjectHovered(false)}
                          animate={{ paddingRight: isProjectHovered ? '2.5rem' : '1rem' }}
                          transition={{ duration: 0.2 }}
                        >
                          View more
                          <motion.span
                            className="ml-2"
                            animate={{ opacity: isProjectHovered ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </motion.button>
                      </div>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Wavy divider */}
      <div className="relative h-20" style={{backgroundColor: '#e0eb73'}}>
        <svg className="absolute top-0 w-full h-20" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,20 Q60,0 120,20 T240,20 T360,20 T480,20 T600,20 T720,20 T840,20 T960,20 T1080,20 T1200,20 T1320,20 T1440,20 L1440,100 L0,100 Z" fill="#F7C5FC" />
        </svg>
      </div>

      {/* Footer Section */}
      <section className="py-20 px-8" style={{backgroundColor: '#F7C5FC'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 leading-relaxed">Thanks for scrolling<br />12345 pixels!</h2>
          <p className="text-lg mb-8">If you are still here, let's get in touch?</p>
          <div className="flex gap-4 mb-12">
            <button className="border-2 border-black px-8 py-2 rounded-full hover:bg-black hover:text-white transition cursor-pointer">
              LinkedIn
            </button>
            <button className="border-2 border-black px-8 py-2 rounded-full hover:bg-black hover:text-white transition cursor-pointer">
              Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}