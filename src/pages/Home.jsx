import { motion } from 'framer-motion'
import Button from '../components/Button'
import portfolio from '../assets/portfolio.png'

const MotionDiv = motion.div

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const fadeRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: 'easeOut', delay: 0.15 },
}

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-16">
      {/* Left: text content */}
      <MotionDiv className="flex-1 flex flex-col gap-6" {...fadeUp}>
        {/* <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Hey there, I&apos;m Milan! 👋
        </h1> */}
        <p className="text-gray-600 text-lg leading-relaxed">
          I&apos;m a software engineer and AI researcher building at the intersection of full-stack
          development and Large Language Models. Currently, I&apos;m focused on architecting
          intelligent, scalable systems that translate complex AI logic into seamless user
          experiences.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Previously, I&apos;ve spent my time developing end-to-end RAG frameworks, observability
          tools for AI pipelines, and automated testing for conversational platforms. My background
          is rooted in bridging the gap between robust backend engineering and intuitive frontend
          design.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Looking ahead, I&apos;m excited to apply my expertise in LLM orchestration and full-stack
          engineering to build the next generation of fast, reliable, and high-impact products within
          high-velocity environments.
        </p>
        <div>
          <Button
            href="https://drive.google.com/file/d/1-uPPYE9OH_GONwQfm34bN3_xgugth8pj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </div>
      </MotionDiv>

      {/* Right: avatar */}
      <MotionDiv className="flex-shrink-0" {...fadeRight}>
        <img
          src={portfolio}
          alt="Milan Ramdhari"
          className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-md"
        />
      </MotionDiv>
    </section>
  )
}
