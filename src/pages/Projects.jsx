import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      <header className="mb-12 md:mb-14 max-w-2xl">
        <p className="font-mono text-xs font-medium text-blue-600 tracking-widest uppercase mb-3">
          Work
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
          Projects
        </h1>
        <p className="mt-3 text-base text-gray-500 leading-relaxed">
          A selection of things I&apos;ve built.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
