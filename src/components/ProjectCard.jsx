import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ title, description, tags, github, live }) {
  const hasCode = github && github !== '#'
  const hasLive = live && live !== '#'

  return (
    <article className="group flex flex-col gap-4 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-150">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-gray-900 text-[0.9375rem] leading-snug">{title}</h3>
        <div className="flex items-center gap-3 shrink-0 pt-0.5">
          {hasCode && (
            <a
              href={github}
              aria-label={`${title} source code`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-900 transition-colors duration-150 flex items-center gap-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Code <ArrowUpRight size={12} />
            </a>
          )}
          {hasLive && (
            <a
              href={live}
              aria-label={`${title} live site`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-900 transition-colors duration-150 flex items-center gap-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Live <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
