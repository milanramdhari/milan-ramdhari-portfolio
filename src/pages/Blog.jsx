import posts from '../data/posts'

export default function Blog() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        <p className="text-gray-500 mt-2">Thoughts on software, design, and life.</p>
      </header>
      <ol className="flex flex-col gap-6 list-none p-0 m-0">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-gray-100 pb-6 last:border-0">
            <a
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1 focus:outline-none"
            >
              <h2 className="font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                {post.title}
              </h2>
              <time className="font-mono text-xs text-gray-400">{post.date}</time>
              <p className="text-gray-500 text-sm mt-1">{post.summary}</p>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
