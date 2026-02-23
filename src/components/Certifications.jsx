import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { certifications } from '../data/resume'

function CertBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-cyan-400">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

function CertCard({ cert, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="group flex items-start gap-3 rounded-lg border border-navy-700/50 bg-navy-900/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-navy-800/60 hover:shadow-lg hover:shadow-cyan-400/5"
    >
      <CertBadge />
      <div>
        <h3 className="font-heading text-sm font-semibold text-slate-100 transition-colors duration-300 group-hover:text-cyan-400">
          {cert.name}
        </h3>
        <p className="mt-0.5 font-mono text-[11px] text-slate-500">{cert.issuer}</p>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24" aria-label="Certifications">
      <h2 className="mb-8 font-heading text-sm font-semibold uppercase tracking-widest text-cyan-400 lg:hidden">
        Certifications
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <CertCard key={cert.name} cert={cert} index={i} />
        ))}
      </div>
    </section>
  )
}
