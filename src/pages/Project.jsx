import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import projects from '../data/projects'

// line icons for feature cards, drawn on a 24x24 grid
const icons = {
  heart: <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10z" />,
  letter: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
}

// one vertical rhythm for the page: SECTION between blocks, mt-8 for content within a block
const SECTION = 'mt-16 md:mt-20'

function Row({ title, children }) {
  return (
    <section className={`${SECTION} grid gap-4 md:grid-cols-[0.35fr_0.65fr] md:gap-8`}>
      <h2 className="text-2xl font-bold tracking-[-0.03em]">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

export default function Project() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

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

  const images = project.images || []
  const hero = images[0]
  // extra images show as a gallery unless the project picks its own
  const gallery = project.gallery ?? images.slice(1)

  const meta = [
    { label: 'My role', value: project.role },
    { label: 'Timeline', value: project.date },
    { label: 'Team', value: project.team },
    { label: project.stackLabel || 'Stack', value: project.stack },
    ...(project.stats || []),
  ].filter((m) => m.value)

  const tint = `${project.color}1f`

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#18181b]">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:px-8 md:pb-20">
        {/* Header */}
        <header className="mt-12 grid gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
          <div>
            <h1 className="font-black leading-[0.95] tracking-[-0.06em] text-[3rem] md:text-[4.5rem]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/70">
              {project.comingSoon ? 'TBD' : (project.subtitle || project.desc)}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black underline-offset-4 hover:underline"
              >
                {project.linkLabel || 'View more'} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>

          {meta.length > 0 && (
            <dl className="grid h-fit grid-cols-2 gap-x-6 gap-y-5 border-t border-black/80 pt-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-xs text-black/50">{m.label}</dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </header>

        {/* Hero */}
        <div
          className={`${SECTION} flex items-center justify-center overflow-hidden rounded-[30px] p-4 shadow-[0_24px_50px_rgba(17,24,39,0.10)] md:p-8`}
          style={{ backgroundColor: project.color }}
        >
          {hero ? (
            <img
              src={hero}
              alt={project.title}
              className="max-h-[440px] w-full rounded-[18px] object-contain"
            />
          ) : (
            <div className="flex h-56 w-full items-center justify-center rounded-[18px] border border-dashed border-white/40 text-sm text-white/70 md:h-80">
              TBD
            </div>
          )}
        </div>

        {!project.comingSoon && (
          <>
            {project.problem && (
              <Row title="The problem">
                <p className="text-xl leading-relaxed text-black/80">
                  {project.problemLead || project.problem}
                </p>
              </Row>
            )}

            {(project.built || project.solution) && (
              <Row title="What we built">
                <p className="text-base leading-relaxed text-black/70">{project.built || project.solution}</p>
              </Row>
            )}

            {project.features && (
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {project.features.map((f) => {
                  const filled = f.mine || project.featuresFilled
                  return (
                  <div
                    key={f.title}
                    className={`flex flex-col rounded-[24px] p-3 ${filled ? 'text-white' : 'bg-white'}`}
                    style={filled ? { backgroundColor: project.color } : undefined}
                  >
                    {f.image && (
                      <div
                        className="mb-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[18px]"
                        style={{ backgroundColor: filled ? 'rgba(255,255,255,0.12)' : tint }}
                      >
                        <img src={f.image} alt={f.title} className="h-[88%] w-auto object-contain" />
                      </div>
                    )}
                    <div className="px-2 pb-2 pt-2">
                      {f.icon && icons[f.icon] && (
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            {icons[f.icon]}
                          </svg>
                        </div>
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-semibold leading-snug">{f.title}</h3>
                        {f.mine && (
                          <span
                            className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold"
                            style={{ color: project.color }}
                          >
                            I built this
                          </span>
                        )}
                      </div>
                      <p className={`mt-1.5 text-sm leading-relaxed ${filled ? 'text-white/85' : 'text-black/60'}`}>{f.body}</p>
                    </div>
                  </div>
                  )
                })}
              </div>
            )}

            {!project.features && project.goal && project.goal.length > 0 && (
              <Row title="Goals">
                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-black/70">
                  {project.goal.map((g) => <li key={g}>{g}</li>)}
                </ul>
              </Row>
            )}

            {!project.features && project.uniqueness && (
              <Row title="What makes it unique">
                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-black/70">
                  {project.uniqueness.map((u) => <li key={u}>{u}</li>)}
                </ul>
              </Row>
            )}

            {gallery.length > 0 && (
              <div className={`${SECTION} grid gap-4 md:grid-cols-2`}>
                {gallery.map((src, i) => (
                  <img key={i} src={src} alt={`${project.title} ${i + 2}`} className="w-full rounded-[24px] object-cover" />
                ))}
              </div>
            )}

            {project.impact && (
              <Row title="The impact">
                <p className="text-xl leading-relaxed text-black/80">{project.impact}</p>
              </Row>
            )}

            {project.roles && (
              <Row title="My role">
                <div className="grid gap-8 sm:grid-cols-2">
                  {project.roles.map((r) => (
                    <div key={r.title} className="border-t border-black/80 pt-4">
                      <h3 className="text-base font-semibold">{r.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-black/60">{r.body}</p>
                    </div>
                  ))}
                </div>
              </Row>
            )}

            {(project.learned || project.reflection) && (
              <Row title={project.learned ? 'What I learned' : 'Reflection'}>
                <p className="whitespace-pre-line text-base leading-relaxed text-black/70">
                  {(project.learned || project.reflection).trim()}
                </p>
              </Row>
            )}
          </>
        )}
      </div>
    </div>
  )
}
