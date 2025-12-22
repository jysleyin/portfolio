import photo from '../assets/photo.png'
import enchantedwhispers from '../assets/enchantedwhispers.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [hasTyped, setHasTyped] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (hasTyped) return;
    
    const fullText = 'JULZ.';
    let currentIndex = 0;
    
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
        setHasTyped(true);
        // Keep cursor blinking for 2 more seconds after typing finishes
        setTimeout(() => {
          setShowCursor(false);
        }, 2000);
      }
    }, 250);
    
    return () => clearInterval(timer);
  }, [hasTyped]);
  
  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 0.7; }
            51%, 100% { opacity: 0; }
          }
          .typing-cursor {
            animation: blink 0.5s infinite;
          }
        `}
      </style>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto pl-40 pr-16 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl mb-2">Hello! I am</h2>
            <h1 className="text-7xl font-bold mb-6" style={{ minHeight: '5rem' }}>
              {displayText}
              {showCursor && <span className="typing-cursor">|</span>}
            </h1>
            <p className="text-gray-700 text-xl mb-8 max-w-md">
              A student, creative builder, and community leader obsessed with turning ideas into impact.
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
          <div className="flex-1 flex justify-center">
            <div 
              className="relative"
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              {/* Decorative elements that emerge from behind */}
              <motion.div
                className="absolute -top-4 -left-4 text-4xl"
                style={{ zIndex: 0 }}
                initial={{ scale: 0, rotate: 0 }}
                animate={isPhotoHovered ? { scale: 1, rotate: 15 } : { scale: 0, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute -top-6 -right-6 text-3xl"
                style={{ zIndex: 0 }}
                initial={{ scale: 0, rotate: 0 }}
                animate={isPhotoHovered ? { scale: 1, rotate: -20 } : { scale: 0, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                🌈
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 text-4xl"
                style={{ zIndex: 0 }}
                initial={{ scale: 0, rotate: 0 }}
                animate={isPhotoHovered ? { scale: 1, rotate: 10 } : { scale: 0, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                🧋
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 text-3xl"
                style={{ zIndex: 0 }}
                initial={{ scale: 0, rotate: 0 }}
                animate={isPhotoHovered ? { scale: 1, rotate: -15 } : { scale: 0, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                🎮
              </motion.div>
              
              <motion.img 
                src={photo} 
                alt="Profile" 
                className="rounded-lg w-full max-w-sm relative"
                style={{ zIndex: 1 }}
                animate={{ scale: isPhotoHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
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
      <section id="work" ref={containerRef} className="py-20 px-8" style={{backgroundColor: '#e0eb73'}}>
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
          
        </div>
      </section>
    </>
  );
}
