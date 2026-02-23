import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../data/resume'

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
    >
      <div className="group relative rounded-lg p-5 transition-all duration-300 hover:bg-navy-800/60 hover:shadow-[inset_2px_0_0_0_theme(--color-cyan-400)]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-base font-semibold leading-snug text-slate-100 transition-colors duration-300 group-hover:text-cyan-400">
              {project.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </h3>
            <p className="mt-1 font-mono text-xs text-indigo-400">
              {project.tech}
            </p>
            <p className="font-mono text-[11px] text-slate-500">{project.date}</p>
          </div>
        </div>

        {/* Bullets */}
        <ul className="mt-4 space-y-2">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 shrink-0 text-cyan-400/70"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24" aria-label="Selected projects">
      <h2 className="mb-6 font-heading text-sm font-semibold uppercase tracking-widest text-cyan-400 lg:hidden">
        Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
