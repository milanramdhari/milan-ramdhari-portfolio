import { Code2, ExternalLink } from 'lucide-react'

export default function ProjectCard({ title, description, image, tags, github, live }) {
  return (
    <article className="flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-1">
          <a
            href={github}
            aria-label={`${title} GitHub repository`}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
          >
            <Code2 size={15} />
            Code
          </a>
          <a
            href={live}
            aria-label={`${title} live demo`}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
          >
            <ExternalLink size={15} />
            Live
          </a>
        </div>
      </div>
    </article>
  )
}
