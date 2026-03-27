import aboutme from '../assets/about-me.png'

// Import selected quest images for the carousel
import quest2 from '../assets/quests/quest-2.jpg';
import quest4 from '../assets/quests/quest-4.jpg';
import quest6 from '../assets/quests/quest-6.png';
import quest7 from '../assets/quests/quest-7.jpg';
import quest10 from '../assets/quests/quest-10.jpg';
import quest11 from '../assets/quests/quest-11.jpg';
import quest12 from '../assets/quests/quest-12.jpg';
import quest16 from '../assets/quests/quest-16.jpg';
import quest18 from '../assets/quests/quest-18.jpg';
import quest22 from '../assets/quests/quest-22.jpg';
import quest30 from '../assets/quests/quest-30.jpg';
import quest32 from '../assets/quests/quest-32.jpg';

export default function About() {
  return (
    <>
      <section className="px-8 py-16" style={{backgroundColor: '#F5F1E8', minHeight: '100vh'}}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h1 className="text-5xl text-center font-bold mb-16">Little bit about the person behind the screen</h1>
          
          {/* Location Badge */}
          <div className="inline-block px-6 py-2 rounded-full mb-12 text-lg" style={{backgroundColor: '#F5F1E8', border: '0.75px solid #888888'}}>
            Based in New York, NY 🗽🍎
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-8">
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
            <div className="flex justify-end items-center -mt-28">
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
                style={{background: 'linear-gradient(to right, #F5F1E8 0%, #F5F1E8 20%, transparent 100%)'}}></div>
              <div className="absolute right-0 top-0 bottom-0 w-64 z-10 pointer-events-none" 
                style={{background: 'linear-gradient(to left, #F5F1E8 0%, #F5F1E8 20%, transparent 100%)'}}></div>
              
              {/* Scrolling Container */}
              <div className="overflow-hidden">
                <style>
                  {`
                    @keyframes scroll {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-100%); }
                    }
                    .animate-scroll {
                      animation: scroll 120s linear infinite;
                      display: flex;
                      width: max-content;
                    }
                    .animate-scroll:hover {
                      animation-play-state: paused;
                    }
                  `}
                </style>
                {/* Single Row - Duplicated for seamless scroll */}
                <div className="flex animate-scroll gap-4">
                  {[
                    quest2, quest4, quest6, quest7, quest10, quest11, quest12, quest16, quest18, quest22, quest30, quest32,
                    quest2, quest4, quest6, quest7, quest10, quest11, quest12, quest16, quest18, quest22, quest30, quest32
                  ].map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={`Side quest ${(i%12)+1}`}
                      className="w-80 h-96 object-cover rounded-2xl shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* My Experience Section */}
          <h2 className="text-4xl font-bold mb-8">My Experience</h2>
          
          {/* Bottom Three Columns */}
          <div className="grid md:grid-cols-3 gap-12 text-sm">
            {/* Extracurriculars */}
            <div>
              <h3 className="text-lg mb-4">Extracurriculars</h3>
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
              <h3 className="text-lg mb-4">Awards & Certifications</h3>
              <ul className="space-y-2">
                <li>Microsoft Certified: Azure Fundamentals</li>
                <li>AutoCAD Certified</li>
                <li>Google Project Management: Professional Certificate</li>
                <li>AWS Certified Cloud Practitioner</li>
                <li>Last Mile Education Award</li>
                <li>Raise Me Scholarship Award</li>
                <li>NYU CAS Scholarship Award</li>
                <li>NYU IRHC Advocacy Award</li>
                <li>NYU NRHH Empowering Program of the Month</li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg mb-4">Skills</h3>
              <div className="mb-4">
                <p className="font-bold mb-2">UI/UX DESIGN</p>
                <p>Figma, Canva, Adobe Creative Cloud</p>
              </div>
              <div>
                <p className="font-bold mb-2">PROJECT MANAGEMENT</p>
                <p>Jira, Confluence, Notion, Google Suite, Visio, Figma, Hubspot, Excel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
