const timeline = [
  {
    year: '2026',
    event:
      'Presenting ETD RAG capstone at VTURCS Spring 2026. Graduating from Virginia Tech, BS Computer Science, minor in Mathematics.',
  },
  {
    year: '2025 – 2026',
    event:
      'AI Research Assistant at Virginia Tech. Built a RAG pipeline over 400+ academic documents using ChromaDB, Phi3, and Llama3 running locally via Ollama.',
  },
  {
    year: '2025 (Fall)',
    event:
      'Software Engineering Co-op at Viven.ai. Built a model evaluation dashboard comparing a new RL-trained model against production across latency, accuracy, and qualitative behavior. Ran 90+ automated test scenarios with Playwright.',
  },
  {
    year: '2025 (Summer)',
    event:
      'Software Engineering Intern at Viven.ai, Santa Clara. Shipped Next.js APIs, scheduling workflows, and a real-time call agent using Twilio and WebSockets.',
  },
  {
    year: '2025',
    event: 'Teaching Assistant for Data Structures and Algorithms at Virginia Tech.',
  },
  {
    year: '2022',
    event: 'Started at Virginia Tech.',
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
          I&apos;m Milan, a CS student at{' '}
          <span className="text-gray-900 font-medium">Virginia Tech</span> graduating this May.
          I&apos;ve spent the last few years doing software internships, research, and side
          projects, mostly in the full-stack and AI space.
        </p>
        <p>
          At <span className="text-gray-900 font-medium">Viven.ai</span> I worked on two separate
          stints: one building Next.js APIs and a real-time call agent with Twilio and WebSockets,
          another writing 90+ automated test scenarios with Playwright and building an evaluation
          dashboard to compare two versions of an RL-trained model. That second one was interesting
          because you&apos;re not just checking if something works — you&apos;re trying to decide if
          it&apos;s actually better.
        </p>
        <p>
          Right now I&apos;m a research assistant at Virginia Tech building a RAG system over 400+
          electronic theses. Local LLMs, ChromaDB, multi-query decomposition. It runs entirely on
          your machine, which I find more satisfying than it probably should.
        </p>
        <p>
          I also built a resume tailor agent on the side that rewrites LaTeX resumes for specific
          job descriptions using Gemini. Mostly because I needed it myself.
        </p>
        <p className="text-gray-900 font-medium">
          Looking for full-stack or AI engineering roles after graduation.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Timeline</h2>
        <ol className="relative border-l border-gray-200 flex flex-col gap-8 list-none p-0 m-0">
          {timeline.map(({ year, event }) => (
            <li key={year} className="ml-6 relative">
              <span className="absolute -left-[31px] mt-1.5 h-3 w-3 rounded-full bg-[#2563eb]" />
              <time className="font-mono text-xs text-gray-400">{year}</time>
              <p className="text-gray-700 mt-1 leading-relaxed">{event}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
