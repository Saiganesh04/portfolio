import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../data/resume'

const categories = Object.entries(skills)

function SkillCategory({ name, items, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <h3 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-slate-500">
        {name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="cursor-default rounded-full border border-navy-700 bg-navy-900 px-3 py-1.5 font-mono text-xs text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24" aria-label="Technical skills">
      <h2 className="mb-8 font-heading text-sm font-semibold uppercase tracking-widest text-cyan-400 lg:hidden">
        Skills
      </h2>
      <div className="space-y-8">
        {categories.map(([name, items], i) => (
          <SkillCategory key={name} name={name} items={items} index={i} />
        ))}
      </div>
    </section>
  )
}
