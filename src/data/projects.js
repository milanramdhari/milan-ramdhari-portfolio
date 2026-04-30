/** Ordered newest → oldest (see About timeline). */
const projects = [
  {
    id: 1,
    title: 'Personal Portfolio (milanramdhari.com)',
    description:
      'This site — a responsive portfolio with project highlights, timeline, and blog, built with modern React tooling and deployed with continuous delivery from GitHub.',
    image: '/assets/project1-placeholder.jpg',
    tags: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/milanramdhari/milan-ramdhari-portfolio',
    live: 'https://milanramdhari.com',
  },
  {
    id: 2,
    title: 'Traceroot — LLM Failure Forensics Platform',
    description:
      'An observability and debugging platform for multi-stage AI pipelines that traces prompts, outputs, latency, token usage, and confidence scores across LLM workflows. Built to help identify hallucinations, bottlenecks, and failure points in complex AI systems.',
    image: '/assets/project2-placeholder.jpg',
    tags: ['Python', 'FastAPI', 'OpenTelemetry', 'React', 'SQLite', 'OpenAI API', 'Docker'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'RAG Semantic Search System',
    description:
      'Built an end-to-end Retrieval-Augmented Generation (RAG) system for semantic search and question answering over 400+ academic documents. Focused on retrieval quality, chunking optimization, and low-latency vector search pipelines.',
    image: '/assets/project3-placeholder.jpg',
    tags: ['Python', 'ChromaDB', 'NLP', 'Embeddings', 'LLMs'],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Resume Tailor Agent',
    description:
      'An AI-powered resume optimization platform that tailors LaTeX resumes to job descriptions using semantic rewriting and ATS-aware analysis while preserving formatting integrity.',
    image: '/assets/project1-placeholder.jpg',
    tags: ['Python', 'Google Gemini API', 'Next.js', 'TypeScript', 'LaTeX Parsing'],
    github: '#',
    live: '#',
  }
]

export default projects
