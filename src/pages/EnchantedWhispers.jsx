import { useNavigate } from 'react-router-dom'
import projects from '../data/projects'
import enchantedwhispersTransparent from '../assets/enchantedwhispers-transparent.png'

export default function EnchantedWhispers() {
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === 'enchanted-whispers')

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => navigate('/')}>Go back</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-sm uppercase tracking-[0.3em] mb-6">{project.date}</p>
              <p className="text-lg leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag) => (
                  <span key={tag} className="bg-transparent border border-black text-slate-900 px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <img
                src={enchantedwhispersTransparent}
                alt="Enchanted Whispers"
                className="w-full max-w-md object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="mt-10 space-y-8 text-slate-900">
            <section>
              <h2 className="text-2xl font-semibold mb-3">The challenge</h2>
              <p className="leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Project vision</h2>
              <p className="leading-relaxed">{project.desc}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Design goals</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.goal?.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Future directions</h2>
              <p className="leading-relaxed">This page can be developed further with interaction flows, research insights, and refinements that make the experience feel magical and meaningful.</p>
            </section>
          </div>
      </div>
    </div>
  )
}
