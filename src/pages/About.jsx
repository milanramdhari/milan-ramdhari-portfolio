const timelineByYear = [
  {
    year: '2026',
    entries: [
      {
        title: 'May 2026 — Graduation',
        description:
          'B.S. Computer Science, minor in Mathematics. Virginia Polytechnic Institute and State University.',
      },
      {
        title: 'March 2026 — Traceroot',
        description:
          'Building an observability and failure analysis platform for multi-stage LLM pipelines — tracing prompts, latency, outputs, and confidence metrics.',
      },
      {
        title: 'January 2026 — AI Research Assistant',
        description:
          'End-to-end RAG system for semantic search and question answering over 400+ academic documents at Virginia Tech.',
      },
    ],
  },
  {
    year: '2025',
    entries: [
      {
        title: 'December 2025 — Resume Tailor Agent',
        description:
          'AI resume optimization tool using the Gemini API to semantically rewrite LaTeX resumes for stronger ATS alignment while preserving formatting.',
      },
      {
        title: 'September 2025 — Software Engineering Co-op, Viven.ai',
        description:
          'Built internal evaluation dashboards comparing model performance, latency, and qualitative behavior across AI systems. 90+ automated test scenarios with Playwright.',
      },
      {
        title: 'July 2025 — Undergraduate Teaching Assistant',
        description:
          'Data Structures and Algorithms at Virginia Tech. Mentored 100+ students.',
      },
      {
        title: 'June 2025 — Software Engineering Intern, Viven.ai',
        description:
          'Backend APIs, automation workflows, and real-time conversational AI systems powered by Twilio and WebSockets.',
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
              Currently, I&apos;m an AI Research Assistant at Virginia Tech, building an end-to-end
              RAG system for semantic search and question answering over large academic datasets.
              My work focuses on retrieval quality, latency optimization, and scalable AI
              infrastructure.
            </p>
            <p>
              Previously, I worked at{' '}
              <span className="text-gray-900 font-medium">Viven.ai</span>, building backend APIs,
              real-time conversational AI systems with Twilio and WebSockets, and internal
              evaluation tools for analyzing model performance and behavior in production.
            </p>
            <p>
              I enjoy building tools that solve real engineering problems. Recently I&apos;ve been
              developing an observability platform for multi-stage LLM pipelines — tracing prompts,
              outputs, latency, and confidence scores to help debug AI failures and hallucinations.
              I also built an AI-powered resume optimization agent that semantically rewrites LaTeX
              resumes for stronger ATS alignment while preserving formatting.
            </p>
            <p>
              Outside of engineering, I enjoy mentoring students, reading about AI systems, and
              building products where software and machine learning genuinely intersect.
            </p>
            <p className="text-gray-900 font-medium">
              Graduating May 2026 with a B.S. in Computer Science and a minor in Mathematics.
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
