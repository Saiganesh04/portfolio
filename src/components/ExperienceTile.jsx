import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experienceTabs } from '../data/resume'

export default function ExperienceTile() {
  const [active, setActive] = useState(0)
  const exp = experienceTabs[active]

  return (
    <div className="tile tile-experience flex h-full flex-col overflow-hidden">
      {/* Tabs */}
      <div className="mb-4 flex gap-1 overflow-x-auto border-b border-[#1e1e24] pb-3">
        {experienceTabs.map((t, i) => (
          <button
            key={t.tab}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 font-mono text-[11px] transition-colors ${
              i === active
                ? 'bg-[#22d3ee]/15 text-[#22d3ee]'
                : 'text-[#64748b] hover:text-[#eee]'
            }`}
          >
            {t.tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="flex flex-1 flex-col"
        >
          {/* Company & Role */}
          <h3 className="text-base font-bold text-[#eee]">{exp.company}</h3>
          <p className="mt-0.5 font-mono text-[11px] text-[#555]">
            {exp.role} &middot; {exp.location} &middot; {exp.period}
          </p>

          {/* Headline */}
          <p className="mt-3 text-sm font-medium text-[#22d3ee]">{exp.headline}</p>

          {/* Metrics */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {exp.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl bg-[#08080c] p-3 text-center transition-all hover:bg-[#0e0e14]"
              >
                <p className="text-lg font-bold text-[#eee]">{m.value}</p>
                <p className="font-mono text-[10px] text-[#64748b]">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#22d3ee]/8 px-2.5 py-0.5 font-mono text-[10px] text-[#22d3ee]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
