import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="text-gray-500 mt-2">A selection of things I&apos;ve built.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
