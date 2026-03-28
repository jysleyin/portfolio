import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import projects from '../data/projects'
import Navbar from '../components/Navbar'

export default function Project() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    )
  }

  const images = (project.images && project.images.length) ? project.images : ['https://via.placeholder.com/800x500']

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  return (
    <div style={{backgroundColor: '#F5F1E8', maxHeight: '100vh', overflow: 'hidden'}}>

      <div className="flex items-center justify-center px-6 h-full">
        <div className="w-full max-w-6xl relative" style={{padding: '0 2rem 2rem 2rem'}}>
          <div className="relative p-5 md:p-8 rounded-2xl mx-auto" style={{backgroundColor: project.color, borderRadius: 30}}>
            <button
              type="button"
              onClick={() => navigate('/')}
              aria-label="Back to home"
              className="absolute left-6 top-6 text-white text-4xl font-light hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"
            >
              &lt;
            </button>

            {/* image on top */}
            <div className="w-11/12 mx-auto mb-5">
              {!(project.slug === 'benefitbridge' && index === 1) && (
                <img 
                  src={images[index]} 
                  alt={`${project.title} ${index+1}`} 
                  className="w-full object-contain rounded-xl cursor-pointer hover:opacity-80 transition-opacity h-56 md:h-72"
                  style={{borderRadius: 20}}
                  onClick={() => setZoomed(true)}
                />
              )}
            </div>

            {/* text below image */}
            <div className="text-left text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tags && project.tags.map((t) => (
                  <span key={t} className="bg-white/20 text-white px-2 py-0.5 rounded-full text-sm">{t}</span>
                ))}
              </div>
              <p className="mb-3 text-base"><em>({project.date})</em></p>

              <div className="mb-3 text-base">
                {index === 0 && (
                  <>
                    <p className="font-semibold mb-1">Problem:</p>
                    <p className="mb-3">{project.problem || project.desc}</p>

                    <p className="font-semibold mb-1">Solution:</p>
                    <p className="mb-3">{project.solution || project.desc}</p>

                    <p className="font-semibold mb-1">Our goal was to design an app:</p>
                    <ul className="list-disc list-inside mb-3">
                      {(project.goal || []).map((g, idx) => (
                        <li key={idx}>{g}</li>
                      ))}
                    </ul>
                  </>
                )}

                {index === 1 && project.reflection && (
                  <>
                    <p className="font-semibold mb-1">Reflection:</p>
                    <p className="whitespace-pre-wrap text-base">{project.reflection}</p>
                  </>
                )}
                {index === 2 && project.uniqueness && (
                  <>
                    <p className="font-semibold mb-1">What makes our app unique?</p>
                    <ul className="list-disc list-inside mb-8">
                      {project.uniqueness.map((u, idx) => (
                        <li key={idx}>{u}</li>
                      ))}
                    </ul>
                  </>
                )}              </div>

            </div>

            <div className="flex justify-center mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full mx-1.5 ${i === index ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {zoomed && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[index]} 
              alt={`${project.title} ${index+1}`} 
              className="w-full h-full object-contain"
            />
            <button
              type="button"
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 text-white text-2xl font-light hover:opacity-70 transition-opacity bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
