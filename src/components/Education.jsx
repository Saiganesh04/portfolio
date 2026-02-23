import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education } from '../data/resume'

function GradCapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-indigo-400">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  )
}

function EducationCard({ edu, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="group flex items-start gap-4 rounded-lg border border-navy-700/50 bg-navy-900/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-navy-800/60"
    >
      <GradCapIcon />
      <div>
        <h3 className="font-heading text-base font-semibold text-slate-100">
          {edu.school}
        </h3>
        <p className="mt-1 text-sm text-slate-300">{edu.degree}</p>
        <p className="mt-1 text-sm text-slate-500">{edu.location}</p>
        <p className="mt-1 font-mono text-xs text-slate-500">{edu.period}</p>
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24" aria-label="Education">
      <h2 className="mb-8 font-heading text-sm font-semibold uppercase tracking-widest text-cyan-400 lg:hidden">
        Education
      </h2>
      <div className="space-y-4">
        {education.map((edu, i) => (
          <EducationCard key={edu.school} edu={edu} index={i} />
        ))}
      </div>
    </section>
  )
}
