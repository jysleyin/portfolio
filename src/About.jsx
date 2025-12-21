import aboutme from './assets/about-me.png'
import enchantedwhispers from './assets/enchantedwhispers.png'

export default function About() {
  return (
    <>
      <section className="px-8 py-16" style={{background: 'linear-gradient(to bottom, #F5F1E8, #E0EB73)', minHeight: '100vh'}}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h1 className="text-5xl font-bold mb-8">Little bit about the person behind the screen</h1>
          
          {/* Location Badge */}
          <div className="inline-block px-6 py-2 rounded-full mb-12 text-lg" style={{backgroundColor: '#F5F1E8', border: '0.75px solid #888888'}}>
            Based in New York, NY 🗽🍎
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-4xl font-bold mb-6">I'm Julz</h2>
              <div className="space-y-4 text-lg">
                <p>
                  a Computer Science major and Game Design minor at NYU, and a designer-technologist passionate about building intuitive, human-centered experiences.
                </p>
                <p>
                  As a first-generation American and college graduate, I'm committed to using my skills to uplift others and pay it forward through every opportunity I pursue.
                </p>
                <p>
                  Outside of work, I love hosting events, caring for my cat, playing games, and enjoying a good smoothie.
                </p>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="flex justify-center items-start">
              <img 
                src={aboutme} 
                alt="Julz with cat" 
                className="w-96 h-120"
              />
            </div>
          </div>

          {/* Side Quests Section */}
          <div className="mb-16 -mx-8">
            <h2 className="text-4xl font-bold mb-8 px-8">Side Quests</h2>
            <div className="relative">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-64 z-10 pointer-events-none" 
                style={{background: 'linear-gradient(to right, #E0EB73 0%, #E0EB73 20%, transparent 100%)'}}></div>
              <div className="absolute right-0 top-0 bottom-0 w-64 z-10 pointer-events-none" 
                style={{background: 'linear-gradient(to left, #E0EB73 0%, #E0EB73 20%, transparent 100%)'}}></div>
              
              {/* Scrolling Container */}
              <div className="overflow-hidden">
                <style>
                  {`
                    @keyframes scroll {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                      animation: scroll 20s linear infinite;
                    }
                    .animate-scroll:hover {
                      animation-play-state: paused;
                    }
                  `}
                </style>
                
                {/* Row 1 */}
                <div className="flex gap-4 mb-4 animate-scroll">
                  {[...Array(16)].map((_, i) => (
                    <img 
                      key={i}
                      src={enchantedwhispers}
                      alt="Side quest"
                      className="w-48 h-48 object-cover rounded-2xl flex-shrink-0"
                      style={{border: '4px solid white'}}
                    />
                  ))}
                </div>
                
                {/* Row 2 */}
                <div className="flex gap-4 animate-scroll" style={{animationDirection: 'reverse'}}>
                  {[...Array(16)].map((_, i) => (
                    <img 
                      key={i}
                      src={enchantedwhispers}
                      alt="Side quest"
                      className="w-48 h-48 object-cover rounded-2xl flex-shrink-0"
                      style={{border: '4px solid white'}}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Three Columns */}
          <div className="grid md:grid-cols-3 gap-12 text-sm">
            {/* Extracurriculars */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Extracurriculars</h3>
              <ul className="space-y-2">
                <li><em>(2025 - Present)</em> Public Relations, NYU Girls Proud to be First</li>
                <li><em>(2024 - Present)</em> Resident Assistant, NYU Residence Life</li>
                <li><em>(2024 - Present)</em> Vice President, Girls Who Code @ NYU</li>
                <li><em>(2023 - Present)</em> President, NYU Class Activities Board</li>
                <li><em>(2023 - Present)</em> President's Council, NYU Student Government Assembly</li>
                <li><em>(2023 - Present)</em> Marketing Director, NYU Asian Heritage Month</li>
                <li><em>(2024 - 2025)</em> Alumni Advisory Council Board Member, Girls Who Code</li>
                <li><em>(2024)</em> Mentee, Out in Tech Mentee</li>
              </ul>
            </div>

            {/* Awards & Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Awards & Certifications</h3>
              <ul className="space-y-2">
                <li>Microsoft Certified: Azure Fundamentals</li>
                <li>AutoCAD Certified</li>
                <li>Google Project Management: Professional Certificate</li>
                <li>AWS Certified Cloud Practitioner</li>
                <li>Last Mile Education Award</li>
                <li>Raise Me Scholarship Award</li>
                <li>NYU CAS Scholarship Award</li>
                <li>NYU IRHC Advocacy Award</li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="mb-4">
                <p className="font-semibold mb-2">UI/UX DESIGN</p>
                <p>Figma, Canva, Adobe Creative Cloud</p>
              </div>
              <div>
                <p className="font-semibold mb-2">PROJECT MANAGEMENT</p>
                <p>Jira, Confluence, Notion, Google Suite, Visio, Figma, Hubspot, Excel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
