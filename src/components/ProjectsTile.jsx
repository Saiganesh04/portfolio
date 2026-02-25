import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/resume'

function ProjectCard({ project, className }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`tile cursor-pointer ${className}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{project.icon}</span>
          <div>
            <h3 className="text-sm font-bold text-[#eee]">{project.title}</h3>
            <p className="font-mono text-[10px] text-[#555]">Project · Click to explore</p>
          </div>
        </div>
        <motion.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </div>

      {/* Stats row */}
      <div className="mt-3 flex gap-3">
        {project.stats.map((s, i) => (
          <div key={s} className="rounded-lg bg-[#08080c] px-3 py-1.5 text-center">
            <p className="text-xs font-bold" style={{ color: project.color }}>{s}</p>
            <p className="font-mono text-[9px] text-[#555]">{project.statLabels[i]}</p>
          </div>
        ))}
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-xs leading-relaxed text-[#64748b]">{project.description}</p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-2 py-0.5 font-mono text-[9px]"
                  style={{ color: project.color, background: project.color + '15' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProjectsTile() {
  return (
    <>
      <ProjectCard project={projects[0]} className="tile-project1" />
      <ProjectCard project={projects[1]} className="tile-project2" />
    </>
  )
}
