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
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Hey there, I&apos;m Milan! 👋
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          I&apos;m a software engineer passionate about building products that are{' '}
          <a href="#" className="text-[#2563eb] hover:underline">
            fast
          </a>
          ,{' '}
          <a href="#" className="text-[#2563eb] hover:underline">
            accessible
          </a>
          , and genuinely useful. I love working at the intersection of design and engineering.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          When I&apos;m not coding, you&apos;ll find me exploring{' '}
          <a href="#" className="text-[#2563eb] hover:underline">
            open-source projects
          </a>
          , writing about things I&apos;ve learnt on my{' '}
          <a href="/blog" className="text-[#2563eb] hover:underline">
            blog
          </a>
          , or experimenting with new technologies.
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
