import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '../data/resume'

function ExperienceCard({ job, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
    >
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="group relative grid gap-4 rounded-lg p-5 transition-all duration-300 hover:bg-navy-800/60 hover:shadow-[inset_2px_0_0_0_theme(--color-cyan-400)] sm:grid-cols-[180px_1fr]"
      >
        {/* Date column */}
        <div className="font-mono text-xs uppercase tracking-wide text-slate-500 pt-1">
          {job.period}
        </div>

        {/* Content */}
        <div>
          {/* Title */}
          <h3 className="font-heading text-base font-semibold leading-snug text-slate-100 transition-colors duration-300 group-hover:text-cyan-400">
            {job.role} · {job.company}
          </h3>
          {job.client && (
            <p className="mt-0.5 text-sm text-slate-500">
              Client: {job.client} · {job.location}
            </p>
          )}
          {!job.client && (
            <p className="mt-0.5 text-sm text-slate-500">{job.location}</p>
          )}

          {/* Bullets */}
          <ul className="mt-3 space-y-2">
            {job.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                {bullet}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-cyan-400/10 px-3 py-1 font-mono text-[11px] font-medium text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24" aria-label="Work experience">
      <h2 className="mb-6 font-heading text-sm font-semibold uppercase tracking-widest text-cyan-400 lg:hidden">
        Experience
      </h2>
      <div className="space-y-4">
        {experience.map((job, i) => (
          <ExperienceCard key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  )
}
