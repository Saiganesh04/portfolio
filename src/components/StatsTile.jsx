import { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { stats } from '../data/resume'

function AnimatedNumber({ value, color, inView }) {
  const [display, setDisplay] = useState('0')
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const raw = value.replace(/[^0-9.]/g, '')
    const target = parseFloat(raw)
    const suffix = value.replace(/[0-9.,]/g, '')
    const hasDecimal = raw.includes('.')
    const duration = 1200
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased

      if (hasDecimal) {
        setDisplay(current.toFixed(2) + suffix)
      } else {
        setDisplay(Math.floor(current).toLocaleString() + suffix)
      }

      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span className="font-sans text-3xl font-bold" style={{ color }}>
      {display}
    </span>
  )
}

export default function StatsTile() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div className="tile tile-stats flex h-full items-center" ref={ref}>
      <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <AnimatedNumber value={s.value} color={s.color} inView={inView} />
            <p className="mt-1 font-mono text-[11px] text-[#64748b]">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
