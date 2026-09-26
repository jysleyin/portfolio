import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import projects from '../data/projects'

export default function Project() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    html.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      html.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [])

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#F5F1E8] px-6">
        <div className="text-center rounded-[28px] border border-black/5 bg-white/80 shadow-[0_20px_50px_rgba(17,24,39,0.08)] px-8 py-10">
          <h2 className="text-2xl font-bold mb-4 text-stone-800">Project not found</h2>
          <button className="px-4 py-2 rounded-full bg-stone-900 text-white font-medium hover:opacity-90 transition-opacity" onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    )
  }

  const images = (project.images && project.images.length) ? project.images : ['https://via.placeholder.com/800x500']

  const goPrev = () => setIndex((current) => (current - 1 + images.length) % images.length)
  const goNext = () => setIndex((current) => (current + 1) % images.length)

  return (
    <div className="h-[calc(100vh-120px)] overflow-hidden" style={{ background: 'radial-gradient(circle at top, #faf6ef 0%, #F5F1E8 42%, #efe7d9 100%)' }}>
      <div className="flex h-full items-center justify-center px-3 md:px-5">
        <div
          className="relative w-full max-w-6xl max-h-full overflow-hidden rounded-[28px] border border-white/60 shadow-[0_30px_80px_rgba(17,24,39,0.12)]"
          style={{
            background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.26),transparent_38%)]" />

          <div className="relative p-3 md:p-4">
            <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="flex items-center rounded-[24px] border border-white/25 bg-white/10 p-3 shadow-inner shadow-black/10 backdrop-blur-sm">
                {project.slug === 'benefitbridge' && index === 1 ? (
                  <div className="h-[200px] w-full md:h-[280px]" />
                ) : (
                  <img
                    src={images[index]}
                    alt={`${project.title} ${index + 1}`}
                    className="h-56 w-full cursor-pointer rounded-[18px] object-cover transition duration-200 hover:scale-[1.01] md:h-[300px] lg:h-[360px]"
                    onClick={() => setZoomed(true)}
                  />
                )}
              </div>

              <div className="flex h-full flex-col justify-center overflow-hidden text-white">
                <div className="mb-2 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/90">
                  {project.date}
                </div>

                <h1 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">{project.title}</h1>

                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags && project.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/90">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 text-xs leading-relaxed md:text-sm">
                  {index === 0 && (
                    <>
                      <div>
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Problem</p>
                        <p>{project.problem || project.desc}</p>
                      </div>

                      <div>
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Solution</p>
                        <p>{project.solution || project.desc}</p>
                      </div>

                      <div>
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Goal</p>
                        <ul className="list-disc space-y-1 pl-5">
                          {(project.goal || []).map((g, idx) => (
                            <li key={idx}>{g}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {index === 1 && project.reflection && (
                    <>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Reflection</p>
                      <p className="whitespace-pre-wrap">{project.reflection}</p>
                    </>
                  )}

                  {index === 2 && project.uniqueness && (
                    <>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">What makes it unique</p>
                      <ul className="list-disc space-y-1 pl-5">
                        {project.uniqueness.map((u, idx) => (
                          <li key={idx}>{u}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg font-medium text-white transition hover:bg-white/20"
              >
                &lt;
              </button>

              <div className="flex items-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/75'}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg font-medium text-white transition hover:bg-white/20"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomed(false)}
        >
          <div className="relative max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[index]}
              alt={`${project.title} ${index + 1}`}
              className="max-h-[90vh] w-full rounded-[24px] object-contain shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            />
            <button
              type="button"
              onClick={() => setZoomed(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/70"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
