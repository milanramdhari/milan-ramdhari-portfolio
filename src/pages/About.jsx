const timelineByYear = [
  {
    year: '2026',
    entries: [
      {
        title: 'May 2026 — Graduation',
        description:
          'Graduating from Virginia Polytechnic Institute and State University with a B.S. in Computer Science and a Minor in Mathematics.',
      },
      {
        title: 'March 2026 — Traceroot (Failure Forensics Platform)',
        description:
          'Started building an observability and failure analysis platform for multi-stage LLM pipelines, focused on tracing prompts, latency, outputs, and confidence metrics across AI workflows.',
      },
      {
        title: 'January 2026 — AI Research Assistant',
        description:
          'Began developing an end-to-end RAG system for semantic search and question answering over 400+ academic documents.',
      },
    ],
  },
  {
    year: '2025',
    entries: [
      {
        title: 'December 2025 — Resume Tailor Agent',
        description:
          'Built an AI-powered resume optimization tool using the Gemini API to semantically rewrite LaTeX resumes for stronger ATS alignment while preserving formatting.',
      },
      {
        title: 'September 2025 — Software Engineering Co-op at Viven.ai',
        description:
          'Developed internal evaluation dashboards for comparing model performance, latency, and qualitative behavior across AI systems.',
      },
      {
        title: 'July 2025 — Undergraduate Teaching Assistant',
        description:
          'Mentored 100+ students in Data Structures and Algorithms, helping teach concepts ranging from linked lists and trees to graph algorithms.',
      },
      {
        title: 'June 2025 — Software Engineering Intern at Viven.ai',
        description:
          'Worked on backend APIs, automation workflows, and real-time conversational AI systems powered by Twilio and WebSockets.',
      },
    ],
  },
]

export default function About() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-10">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
      </header>

      <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
        <p>
          I&apos;m a software engineer and AI researcher focused on building fast, reliable, and
          practical AI systems.
        </p>
        <p>
          Currently, I&apos;m an AI Research Assistant at Virginia Polytechnic Institute and State
          University, where I&apos;m building an end-to-end RAG system for semantic search and
          question answering over large academic datasets. My work focuses on retrieval quality,
          latency optimization, and scalable AI infrastructure.
        </p>
        <p>
          Previously, I worked at{' '}
          <span className="text-gray-900 font-medium">Viven.ai</span>, building backend APIs,
          real-time conversational AI systems with Twilio and WebSockets, and internal evaluation
          tools for analyzing model performance and behavior in production environments.
        </p>
        <p>
          I enjoy building tools that solve real engineering problems. Recently, I&apos;ve been
          developing an observability platform for multi-stage LLM pipelines that traces prompts,
          outputs, latency, and confidence scores to help debug AI failures and hallucinations. I
          also built an AI-powered resume optimization agent that semantically rewrites LaTeX
          resumes for stronger ATS alignment while preserving formatting.
        </p>
        <p>
          Outside of coding, I enjoy mentoring students, exploring AI systems, and building products
          at the intersection of software engineering and machine learning.
        </p>
        <p className="text-gray-900 font-medium">
          I&apos;m graduating in May 2026 with a B.S. in Computer Science and a minor in
          Mathematics, and I&apos;m excited to continue building high-impact AI-driven products.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Timeline</h2>
        <div className="flex flex-col gap-12">
          {timelineByYear.map(({ year, entries }) => (
            <div key={year}>
              <h3 className="font-mono text-lg font-semibold text-gray-900 mb-4">{year}</h3>
              <ul className="relative border-l border-gray-200 flex flex-col gap-8 list-none p-0 m-0">
                {entries.map(({ title, description }) => (
                  <li key={title} className="ml-6 relative">
                    <span className="absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full bg-[#2563eb]" />
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{title}</p>
                    <p className="text-gray-600 mt-1.5 leading-relaxed text-sm sm:text-base">
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
