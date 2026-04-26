export default function About() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-10">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
      </header>

      <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
        <p>
          Hi, I&apos;m Milan — a software engineer based in [City]. I love building clean,
          performant web applications and open-source tools that solve real problems.
        </p>
        <p>
          I started programming as a teenager tinkering with HTML and CSS, and I&apos;ve been
          hooked ever since. Today I focus on full-stack JavaScript, cloud infrastructure, and
          developer experience.
        </p>
        <p>
          Outside of work I enjoy hiking, reading science fiction, and contributing to open-source
          projects whenever I find something interesting to improve.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Timeline</h2>
        <ol className="relative border-l border-gray-200 flex flex-col gap-8 list-none p-0 m-0">
          {[
            { year: '2024', event: 'Joined [Company] as a Software Engineer.' },
            { year: '2023', event: 'Graduated with a degree in Computer Science from [University].' },
            { year: '2022', event: 'Completed an internship at [Startup] working on React and Node.js.' },
            { year: '2020', event: 'Built my first side project and published it on GitHub.' },
          ].map(({ year, event }) => (
            <li key={year} className="ml-6">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-[#2563eb]" />
              <time className="font-mono text-xs text-gray-400">{year}</time>
              <p className="text-gray-700 mt-0.5">{event}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
