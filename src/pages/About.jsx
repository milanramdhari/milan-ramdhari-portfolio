const timelineByYear = [
  {
    year: '2026',
    entries: [
      {
        title: 'June 2026: Token Gate',
        description:
          'Building a self-hostable AI API gateway that routes inference across LLM providers with Redis-backed rate limiting, JWT auth, and a transactional credit-metering system.',
      },
      {
        title: 'May 2026: Graduation',
        description:
          'B.S. Computer Science, minor in Mathematics. Virginia Polytechnic Institute and State University.',
      },
      {
        title: 'March 2026: Trace Root',
        description:
          'Observability platform for LLM pipelines tracing execution, latency, token usage, and intermediate outputs. Includes root-cause analysis using backward trace evaluation and LLM-as-a-judge scoring.',
      },
      {
        title: 'January 2026: AI Research Assistant',
        description:
          'End-to-end RAG system for semantic search and question answering over 400+ academic documents at Virginia Tech. Tuned chunking strategies, embedding pipelines, and Chroma vector database parameters.',
      },
    ],
  },
  {
    year: '2025',
    entries: [
      {
        title: 'Jun - Nov 2025: Software Engineering Intern, Viven.ai',
        description:
          'Built Next.js APIs with Python Flask for RAG workflows and AWS SES email delivery, an evaluation dashboard comparing RL-trained and production models, 90+ Playwright test scenarios, and a real-time voice agent with Twilio and WebSockets.',
      },
      {
        title: 'Jul - Sep 2025: Undergraduate Teaching Assistant',
        description:
          'Data Structures and Algorithms at Virginia Tech. Hosted weekly office hours for 100+ students and graded 50+ assignments.',
      },
    ],
  },
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      {/* Page header */}
      <header className="mb-12 md:mb-14 max-w-2xl">
        <p className="font-mono text-xs font-medium text-blue-600 tracking-widest uppercase mb-3">
          About
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
          About Me
        </h1>
        <p className="mt-3 text-base text-gray-500 leading-relaxed">
          Software engineering, AI research, and the work I&apos;ve shipped.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Bio */}
        <article className="lg:col-span-7">
          <div className="flex flex-col gap-5 text-gray-600 text-base leading-[1.75]">
            <p className="text-gray-900 text-lg font-medium leading-snug">
              I&apos;m a software engineer and AI researcher focused on building fast, reliable,
              and practical AI systems.
            </p>
            <p>
              Most recently, I was an AI Research Assistant at Virginia Tech, building an
              end-to-end RAG system for semantic search and question answering over 400+ academic
              documents. My work focused on retrieval quality, latency optimization, and tuning
              Chroma vector database pipelines.
            </p>
            <p>
              Before that, I worked at{' '}
              <span className="text-gray-900 font-medium">Viven.ai</span>, building backend APIs
              with Next.js and Python Flask for RAG workflows, an evaluation dashboard comparing
              RL-trained and production models, and a real-time voice agent using Twilio and
              WebSockets.
            </p>
            <p>
              I enjoy building tools that solve real engineering problems. Recent projects:{' '}
              <span className="text-gray-900 font-medium">Token Gate</span>, a self-hostable AI
              API gateway with Redis-backed rate limiting and credit metering, and{' '}
              <span className="text-gray-900 font-medium">Trace Root</span>, an observability
              platform for debugging multi-stage LLM pipelines using backward trace evaluation and
              LLM-as-a-judge scoring.
            </p>
            <p>
              Outside of engineering, I enjoy mentoring students, reading about AI systems, and
              building products where software and machine learning genuinely intersect.
            </p>
            <p className="text-gray-900 font-medium">
              Graduated May 2026 with a B.S. in Computer Science and a minor in Mathematics.
              Open to full-stack and AI engineering roles.
            </p>
          </div>
        </article>

        {/* Timeline */}
        <aside className="lg:col-span-5 lg:sticky lg:top-20 lg:self-start">
          <h2 className="text-sm font-semibold text-gray-900 tracking-tight mb-1">Timeline</h2>
          <p className="text-sm text-gray-500 mb-8">Newest first.</p>

          <div className="flex flex-col gap-10">
            {timelineByYear.map(({ year, entries }) => (
              <section key={year} aria-labelledby={`year-${year}`}>
                <h3
                  id={`year-${year}`}
                  className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 mb-5"
                >
                  {year}
                </h3>
                <ul className="relative border-l border-gray-200 flex flex-col gap-7 list-none p-0 m-0">
                  {entries.map(({ title, description }) => (
                    <li key={title} className="ml-5 relative">
                      <span
                        className="absolute -left-[21px] top-[7px] h-2 w-2 rounded-full bg-blue-600"
                        aria-hidden
                      />
                      <p className="font-medium text-gray-900 text-sm leading-snug">{title}</p>
                      <p className="text-gray-500 mt-1.5 text-sm leading-relaxed">{description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </aside>

      </div>
    </div>
  )
}
