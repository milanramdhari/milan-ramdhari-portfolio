/** Ordered newest → oldest (see About timeline). */
const projects = [
  {
    id: 1,
    title: 'Token Gate: API Gateway & Rate Limiter',
    description:
      'A self-hostable AI API gateway that routes inference requests across LLM providers through one endpoint. Features a transactional credit-metering system with PostgreSQL and Prisma, Redis-backed token-bucket rate limiting, and JWT authentication to enforce per-key request quotas at scale.',
    image: '/assets/project1-placeholder.jpg',
    tags: ['Bun', 'TypeScript', 'Elysia', 'Prisma', 'Redis', 'React', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Trace Root: AI Pipeline Observability Platform',
    description:
      'An observability platform for LLM pipelines that tracks execution traces, latency, token usage, and intermediate outputs across pipeline stages. Includes a root-cause analysis system using backward trace evaluation and LLM-as-a-judge scoring to identify hallucinations, propagation errors, and context loss.',
    image: '/assets/project2-placeholder.jpg',
    tags: ['Python', 'FastAPI', 'React', 'SQLite', 'OpenAI API'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'RAG Semantic Search System',
    description:
      'Built an end-to-end Retrieval-Augmented Generation (RAG) system for semantic search and question answering over 400+ academic documents. Focused on retrieval quality, chunking optimization, and low-latency vector search pipelines.',
    image: '/assets/project1-placeholder.jpg',
    tags: ['Python', 'ChromaDB', 'NLP', 'Embeddings', 'LLMs'],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Resume Tailor Agent',
    description:
      'An AI-powered resume optimization platform that tailors LaTeX resumes to job descriptions using semantic rewriting and ATS-aware analysis while preserving formatting integrity.',
    image: '/assets/project2-placeholder.jpg',
    tags: ['Python', 'Google Gemini API', 'Next.js', 'TypeScript', 'LaTeX Parsing'],
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'Personal Portfolio (milanramdhari.com)',
    description:
      'Responsive portfolio with project highlights, timeline, and blog. Built with modern React tooling and deployed via GitHub CI/CD.',
    image: '/assets/project3-placeholder.jpg',
    tags: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/milanramdhari/milan-ramdhari-portfolio',
    live: 'https://milanramdhari.com',
  },
]

export default projects
