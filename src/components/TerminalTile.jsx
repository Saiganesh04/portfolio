import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const LINES = [
  { type: 'command', text: '$ git push origin main' },
  { type: 'output', text: 'Enumerating objects: 47, done.' },
  { type: 'output', text: 'remote: Resolving deltas: 100% (23/23)' },
  { type: 'command', text: '$ fastlane ios beta' },
  { type: 'progress', text: '▸ Building myCoke.xcworkspace...' },
  { type: 'progress', text: '▸ Running 142 tests... ✓ All passed' },
  { type: 'progress', text: '▸ Code coverage: 85.2%' },
  { type: 'progress', text: '▸ Archiving myCoke.ipa...' },
  { type: 'success', text: '▸ Uploading to TestFlight... Done ✓' },
  { type: 'command', text: '$ kubectl rollout status deploy/api' },
  { type: 'success', text: 'deployment "api" successfully rolled out' },
  { type: 'command', text: '$ echo "Ship it 🚀"' },
  { type: 'highlight', text: 'Ship it 🚀' },
]

const COLOR_MAP = {
  command: '#eee',
  output: '#64748b',
  progress: '#818cf8',
  success: '#34d399',
  highlight: '#fbbf24',
}

export default function TerminalTile() {
  const [visibleLines, setVisibleLines] = useState(0)
  const hasStarted = useRef(false)
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (!inView || hasStarted.current) return
    hasStarted.current = true

    let i = 0
    const timer = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= LINES.length) clearInterval(timer)
    }, 280)

    return () => clearInterval(timer)
  }, [inView])

  return (
    <div className="tile tile-terminal flex h-full flex-col overflow-hidden p-0" ref={ref}>
      {/* Title Bar */}
      <div className="flex items-center gap-2 border-b border-[#1e1e24] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] text-[#555]">deploy.sh — CI/CD Pipeline</span>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-[11px] leading-[1.8]">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={{ color: COLOR_MAP[line.type] }}>
            {line.text}
          </div>
        ))}
        {visibleLines < LINES.length && (
          <span className="inline-block h-3.5 w-1.5 animate-pulse bg-[#eee]" />
        )}
      </div>
    </div>
  )
}
