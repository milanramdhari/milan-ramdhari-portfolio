import { motion } from 'framer-motion'
import Button from '../components/Button'
import portfolio from '../assets/portfolio.png'

const MotionDiv = motion.div

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 },
}

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

        {/* Left: text */}
        <MotionDiv className="flex-1 flex flex-col gap-5" {...fadeUp}>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
              Hi, I&apos;m Milan.
            </h1>
            <p className="text-lg text-gray-500 font-normal">
              Software engineer &amp; CS student, Virginia Tech &rsquo;26.
            </p>
          </div>

          <p className="text-gray-600 text-base leading-[1.75] max-w-lg">
            I build full-stack systems and AI tools. Most recently: real-time conversational AI
            and evaluation tooling at{' '}
            <a
              href="https://viven.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-medium underline underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors duration-150"
            >
              Viven.ai
            </a>
            , and a RAG pipeline over 400+ academic documents at VT&apos;s research lab.
          </p>

          <p className="text-gray-600 text-base leading-[1.75] max-w-lg">
            Looking for full-stack or AI engineering roles after graduation this May.
          </p>

          <div className="pt-1">
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
        <MotionDiv className="shrink-0" {...fadeIn}>
          <img
            src={portfolio}
            alt="Milan Ramdhari"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl object-cover"
          />
        </MotionDiv>

      </div>
    </section>
  )
}
