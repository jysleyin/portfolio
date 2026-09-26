import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import postNepal from '../assets/oit-post-nepal.jpg'
import postAstronaut from '../assets/oit-post-astronaut.jpg'
import postScientist from '../assets/oit-post-scientist.jpg'

const stats = [
  { value: '+744%', label: 'Instagram views', detail: '23.9k → 202.9k' },
  { value: '33x', label: 'Instagram likes', detail: '474 → 15.6k' },
  { value: '+46%', label: 'LinkedIn impressions', detail: 'Above baseline' },
  { value: '+60%', label: 'LinkedIn reactions', detail: 'Above baseline' },
]

const overview = [
  { label: 'Role', value: 'Marketing intern' },
  { label: 'Timeline', value: 'Dec 2024 – Sept 2026' },
  { label: 'Team', value: '2 people' },
  { label: 'Platforms', value: 'Instagram, LinkedIn' },
  { label: 'Tools', value: 'Claude, HubSpot, Canva', wide: true },
]

const pillars = [
  {
    title: 'News-style stories',
    body: 'Shared important stories from the community in a news article format.',
  },
  {
    title: 'Post every day',
    body: 'Moved to a daily posting cadence so we stayed present in people’s feeds.',
  },
  {
    title: 'Events for bigger audiences',
    body: 'Marketed our community events beyond existing followers to reach larger audiences.',
  },
  {
    title: 'Spotlight the Leadership Institute',
    body: 'Put more focus on our annual Leadership Institute conference through testimonials, agenda posts, and video clips of speakers sharing valuable points.',
  },
]

const steps = [
  {
    title: 'Find the stories',
    body: 'Built a Claude workflow to surface relevant stories worth highlighting to the community.',
  },
  {
    title: 'Build the calendar',
    body: 'Used the same workflow to build out the content calendar.',
  },
  {
    title: 'Draft with a human in the loop',
    body: 'Automated post creation with Claude, with a human in the loop making the essential edits before anything went live.',
  },
  {
    title: 'Measure monthly',
    body: 'Tracked stats each month to see what worked and what didn’t, then updated the content calendar.',
  },
]

// widths are relative to the larger value in each pair
const comparisons = [
  { label: 'Instagram views', before: '23.9k', after: '202.9k', beforePct: 12, afterPct: 100 },
  { label: 'Instagram likes', before: '474', after: '15.6k', beforePct: 3, afterPct: 100 },
  { label: 'LinkedIn impressions', before: 'Baseline', after: '+46%', beforePct: 68, afterPct: 100 },
  { label: 'LinkedIn reactions', before: 'Baseline', after: '+60%', beforePct: 63, afterPct: 100 },
]

const topPosts = [
  {
    title: 'Nepal’s Supreme Court legalizes same-sex marriage, making it the 40th country in the world',
    image: postNepal,
    views: '113.7k',
    nonFollowers: '95.6%',
    likes: '9.4k',
    shares: '2.7k',
    saves: '317',
    comments: '199',
  },
  {
    title: 'Meet the first American woman in space and America’s first known queer astronaut',
    image: postAstronaut,
    views: '102.2k',
    nonFollowers: '94.8%',
    likes: '6.7k',
    shares: '361',
    saves: '308',
    comments: '41',
  },
  {
    title: 'Meet the trans scientist who changed neuroscience',
    image: postScientist,
    views: '66.8k',
    nonFollowers: '94.2%',
    likes: '6.4k',
    shares: '748',
    saves: '710',
    comments: '57',
  },
]

const tags = ['content strategy', 'instagram', 'linkedin']

export default function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#18181b]">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:px-8">
        <Link
          to="/works"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black/60 transition hover:text-black"
        >
          <span aria-hidden="true">←</span>
          Back to works
        </Link>

        {/* Hero */}
        <section className="mt-6 overflow-hidden rounded-[30px] bg-[#5f3a8b] p-6 text-white shadow-[0_18px_35px_rgba(17,24,39,0.08)] md:p-10">
          <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white/75">
            Marketing intern • Dec 2024 – Sept 2026
          </span>

          <h1 className="mt-6 font-black leading-[0.9] tracking-[-0.065em] text-[3.2rem] md:text-[6rem]">
            Out in Tech
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Built a Claude-powered AI workflow for content strategy, then used it to grow and engage audiences across Instagram and LinkedIn.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs lowercase text-white/85">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-[18px] bg-white/5 p-4">
                <div className="text-[22px] font-black tracking-[-0.05em] sm:text-[34px]">{s.value}</div>
                <div className="mt-2 text-xs font-medium text-white/75">{s.label}</div>
                <div className="mt-1 text-xs text-white/60">{s.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Top posts */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Top-performing posts</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-black/70">
            Our news-style stories travelled furthest. Across the top three Instagram posts, about 95% of views came from people who didn’t follow us yet.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {topPosts.map((post) => (
              <article key={post.title} className="overflow-hidden rounded-[26px] border border-black/10 bg-white/60">
                <img src={post.image} alt={post.title} className="aspect-[4/5] w-full object-cover" />

                <div className="p-5">
                  <h3 className="text-base font-bold leading-snug tracking-[-0.02em]">{post.title}</h3>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-black tracking-[-0.05em]">{post.views}</span>
                    <span className="text-xs font-medium text-black/50">views</span>
                  </div>
                  <div className="mt-1 text-xs text-black/50">{post.nonFollowers} from non-followers</div>

                  <div className="mt-4 grid grid-cols-4 gap-2 border-t border-black/10 pt-4">
                    {[
                      ['Likes', post.likes],
                      ['Shares', post.shares],
                      ['Saves', post.saves],
                      ['Comments', post.comments],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div className="text-sm font-bold">{value}</div>
                        <div className="text-[11px] text-black/50">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mt-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 self-start rounded-[26px] border border-black/10 bg-white/60 p-6">
            {overview.map((item) => (
              <div key={item.label} className={item.wide ? 'col-span-2' : ''}>
                <div className="text-xs font-medium text-black/50">{item.label}</div>
                <div className="mt-1 text-base font-semibold tracking-[-0.02em]">{item.value}</div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold">The challenge</h2>
            <p className="mt-4 text-base leading-relaxed text-black/70">
              Out in Tech needed stronger numbers to connect with its chapters and wider community. Our existing process wasn’t working: posts drew little response from the community, and it felt like we were out of the loop on the stories and conversations that mattered to them. Our channels weren’t doing their job of bringing the community together.
            </p>
            <p className="mt-4 text-base leading-relaxed text-black/70">
              Then our team shrank to two people, me and one teammate. With that new dynamic, I had full autonomy to redesign the content strategy from the ground up.
            </p>
          </div>
        </section>

        {/* Strategy */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">The new strategy</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[26px] bg-[#5f3a8b] p-6 text-white shadow-[0_18px_35px_rgba(17,24,39,0.08)]">
                <h3 className="text-xl font-bold tracking-[-0.03em]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">The Claude workflow</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-[26px] border border-black/10 bg-white/60 p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5f3a8b] text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">The results</h2>

          <div className="mt-6 rounded-[26px] bg-[#5f3a8b] p-6 text-white shadow-[0_18px_35px_rgba(17,24,39,0.08)] md:p-8">
            <div className="space-y-7">
              {comparisons.map((c) => (
                <div key={c.label}>
                  <div className="mb-3 text-sm font-semibold">{c.label}</div>
                  <div className="space-y-2 text-xs text-white/75">
                    <div className="flex items-center gap-3">
                      <span className="w-12 shrink-0">Before</span>
                      <div className="h-2.5 flex-1 rounded-full bg-white/15">
                        <div className="h-full rounded-full bg-white/50" style={{ width: `${c.beforePct}%` }} />
                      </div>
                      <span className="w-16 shrink-0 text-right">{c.before}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-12 shrink-0">After</span>
                      <div className="h-2.5 flex-1 rounded-full bg-white/15">
                        <div className="h-full rounded-full bg-[#f5d7f7]" style={{ width: `${c.afterPct}%` }} />
                      </div>
                      <span className="w-16 shrink-0 text-right font-semibold text-white">{c.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mt-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl font-bold">What I learned</h2>
          <div className="space-y-4 text-base leading-relaxed text-black/70">
            <p>
              People don’t use social media the way they used to. Most will scroll right past an announcement, but they’ll stop for a story that feels like it’s about them. When we started sharing news and history that was relevant and educational, people didn’t just like the posts, they shared them. I think that’s because the stories helped them feel more empowered in their identity, and they wanted to pass that feeling on.
            </p>
            <p>
              I also learned that showing up matters. Posting every day with a team of two was ambitious, but that consistency is what put us in front of new people. Almost all the views on our top posts came from people who didn’t follow us yet.
            </p>
            <p>
              Working with Claude taught me where AI actually helps. It was great at finding stories and getting a first draft down fast, which is the only way two people could keep up a daily schedule. But the posts only landed because a person read every one before it went out, made sure it sounded like us, and treated each story with care. Checking the numbers every month kept me honest, too. I stopped guessing what our community wanted and let them show me.
            </p>
          </div>
        </section>

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
