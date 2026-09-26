import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Works() {
  const [openProject, setOpenProject] = useState(0)

  const smallProjects = [
    {
      title: 'Enchanted Whispers',
      slug: 'enchanted-whispers',
      link: 'https://enchantedwhispers.netlify.app',
      blurb: 'A personality-based career quiz enhanced with a mythical visual identity and interactive storytelling to inspire users to explore and reflect on their career interests. I designed this while I was a mentee for Out in Tech’s mentorship program, and built it with JavaScript in Figma with art designed by myself.'
    },
    {
      title: 'Forever Health',
      slug: 'forever-health',
      to: '/projects/forever-health',
      blurb: 'A case study exploring a platform solution that improves patient data accessibility for healthcare institutions, emphasizing workflow efficiency and user-centric data visualization. I developed this for the Work Prep Program on the Consulting Track with Girls Who Code and Accenture, and designed it entirely by myself in Figma.'
    },
  ]

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#18181b]">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:px-8">
        <div className="mt-10 px-4 md:px-0">
          <h1 className="mt-3 font-black leading-[0.9] tracking-[-0.065em] text-[3.2rem] md:text-[6rem]">
            Things I’ve built, <span className="italic font-light">shipped</span>
            <br />
            & posted.
          </h1>
        </div>

        <div className="mt-12 space-y-16">
          <section>
            <div className="mb-4 flex items-center justify-between text-sm text-black/60">
              <h2 className="text-2xl font-bold text-black">Marketing</h2>
            </div>

            <div className="rounded-[26px] bg-[#5f3a8b] p-6 text-white shadow-[0_18px_35px_rgba(17,24,39,0.08)]">
              <div className="flex items-center justify-between gap-4 text-xs font-medium text-white/75">
                <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1.5">Marketing intern • Dec 2024 – Sept 2026</span>
              </div>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-5xl font-black tracking-[-0.06em] leading-none">Out in Tech</h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">
                    Built a Claude-powered AI workflow for content strategy, then used it to grow and engage audiences across Instagram and LinkedIn.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs lowercase text-white/85">Content strategy</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs lowercase text-white/85">Instagram</span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs lowercase text-white/85">LinkedIn</span>
                  </div>

                  <Link
                    to="/case-study/out-in-tech"
                    className="group mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-black hover:text-white"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className="inline-flex items-center transition-all duration-200 group-hover:pr-2">
                      View more
                      <span
                        className="inline-block overflow-hidden transition-all duration-200 ease-out group-hover:ml-2 group-hover:w-4 w-0 opacity-0 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="rounded-[18px] bg-white/5 p-4">
                    <div className="text-[16px] font-black tracking-[-0.05em] sm:text-[28px]">+744%</div>
                    <div className="mt-2 text-xs font-medium text-white/75">Instagram views</div>
                    <div className="mt-1 text-[10px] text-white/70">23.9k → 202.9k</div>
                  </div>

                  <div className="rounded-[18px] bg-white/5 p-4">
                    <div className="text-[16px] font-black tracking-[-0.05em] sm:text-[28px]">33x</div>
                    <div className="mt-2 text-xs font-medium text-white/75">Instagram likes</div>
                    <div className="mt-1 text-[10px] text-white/70">474 → 15.6k</div>
                  </div>

                  <div className="rounded-[18px] bg-white/5 p-4">
                    <div className="text-[16px] font-black tracking-[-0.05em] sm:text-[28px]">+46%</div>
                    <div className="mt-2 text-xs font-medium text-white/75">LinkedIn impressions</div>
                    <div className="mt-1 text-[10px] text-white/70">Above baseline</div>
                  </div>

                  <div className="rounded-[18px] bg-white/5 p-4">
                    <div className="text-[16px] font-black tracking-[-0.05em] sm:text-[28px]">+60%</div>
                    <div className="mt-2 text-xs font-medium text-white/75">LinkedIn reactions</div>
                    <div className="mt-1 text-[10px] text-white/70">Above baseline</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between text-sm text-black/60">
              <h2 className="text-2xl font-bold text-black">Smaller projects</h2>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#F4F1EB] p-4 shadow-[0_18px_35px_rgba(17,24,39,0.04)]">
              <div className="space-y-3">
                {smallProjects.map((item, i) => {
                  const isOpen = openProject === i

                  return (
                    <div key={i} className="overflow-hidden rounded-[18px] border border-black/10 bg-white/70">
                      <button
                        type="button"
                        onClick={() => setOpenProject(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                      >
                        <div className="flex w-full items-center justify-between gap-4">
                          <div className="text-xs font-medium text-black/60">2024</div>
                          <div className="flex-1 text-xl font-semibold tracking-[-0.04em] text-black">{item.title}</div>
                        </div>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className={`h-5 w-5 shrink-0 text-black/80 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="border-t border-black/10 bg-[#f8f5f2] px-4 py-4">
                          <p className="text-sm leading-relaxed text-black/70">{item.blurb}</p>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black underline-offset-4 hover:underline"
                            >
                              View more <span aria-hidden="true">→</span>
                            </a>
                          )}
                          {item.to && (
                            <Link
                              to={item.to}
                              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black underline-offset-4 hover:underline"
                            >
                              View more <span aria-hidden="true">→</span>
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 rounded-[30px] bg-[#17191c] px-6 py-10 text-white md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-5xl font-black tracking-[-0.065em] text-white">
              Have something
              <br />
              in mind?
            </h2>

            <a
              href="mailto:julissaliangg@gmail.com"
              className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-medium text-black transition-all duration-200 hover:bg-black hover:text-white"
              style={{ textDecoration: 'none' }}
            >
              <span className="inline-flex items-center transition-all duration-200 group-hover:pr-2">
                Connect
                <span
                  className="inline-block overflow-hidden transition-all duration-200 ease-out group-hover:ml-2 group-hover:w-4 w-0 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
