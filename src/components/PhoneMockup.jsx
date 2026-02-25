import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const screens = [
  { id: 'catalog', label: 'Product Catalog' },
  { id: 'tracking', label: 'Order Tracking' },
  { id: 'payments', label: 'Payments' },
]

function CatalogScreen() {
  const products = [
    { name: 'Coca-Cola Classic', detail: '24-pack', price: '$18.99', bg: '#dc2626' },
    { name: 'Minute Maid OJ', detail: '12-pack', price: '$12.49', bg: '#f97316' },
    { name: 'Sprite Zero', detail: '24-pack', price: '$17.49', bg: '#22c55e' },
  ]
  return (
    <div className="flex h-full flex-col px-4 pt-3 pb-4">
      <h3 className="mb-3 text-sm font-semibold text-white">Products</h3>
      <div className="flex flex-1 flex-col gap-2.5">
        {products.map((p) => (
          <div key={p.name} className="flex items-center gap-3 rounded-xl bg-[#1a1a22] p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: p.bg + '22' }}>
              <div className="h-5 w-5 rounded-full" style={{ background: p.bg }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-xs font-medium text-white">{p.name}</p>
              <p className="text-[10px] text-[#64748b]">{p.detail}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-white">{p.price}</p>
              <button className="mt-0.5 rounded-full bg-[#22d3ee] px-3 py-0.5 text-[9px] font-bold text-[#08080c]">ADD</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TrackingScreen() {
  const steps = [
    { label: 'Ordered', time: '9:15 AM', done: true },
    { label: 'Processing', time: '9:42 AM', done: true },
    { label: 'Shipped', time: '11:30 AM', done: true },
    { label: 'Delivering', time: 'ETA 2:30 PM', done: false },
  ]
  return (
    <div className="flex h-full flex-col px-4 pt-3 pb-4">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Order #CK-48291</h3>
      </div>
      <span className="mb-4 inline-block w-fit rounded-full bg-[#22d3ee]/15 px-2.5 py-0.5 text-[10px] font-semibold text-[#22d3ee]">
        Out for Delivery
      </span>
      <div className="flex flex-1 flex-col justify-center gap-0">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div className={`flex h-5 w-5 items-center justify-center rounded-full ${s.done ? 'bg-[#22d3ee]' : 'border-2 border-[#333] bg-transparent'}`}>
                {s.done && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#08080c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                )}
              </div>
              {i < steps.length - 1 && (
                <div className={`h-6 w-0.5 ${s.done ? 'bg-[#22d3ee]' : 'bg-[#333]'}`} />
              )}
            </div>
            <div className="pb-2">
              <p className={`text-xs font-medium ${s.done ? 'text-white' : 'text-[#64748b]'}`}>{s.label}</p>
              <p className="text-[10px] text-[#555]">{s.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PaymentsScreen() {
  return (
    <div className="flex h-full flex-col px-4 pt-3 pb-4">
      <h3 className="mb-3 text-sm font-semibold text-white">Digital Wallet</h3>
      {/* Card */}
      <div className="mb-3 rounded-xl bg-gradient-to-br from-[#6d28d9] to-[#4c1d95] p-4">
        <p className="font-mono text-[10px] text-white/60">CONA Services</p>
        <p className="mt-2 font-mono text-xs tracking-widest text-white/80">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4821</p>
        <p className="mt-3 text-lg font-bold text-white">$2,847.50</p>
        <p className="text-[10px] text-white/50">Available Balance</p>
      </div>
      {/* Invoice */}
      <div className="mb-3 flex items-center justify-between rounded-xl bg-[#1a1a22] p-3">
        <div>
          <p className="text-xs font-medium text-white">Invoice #INV-3847</p>
          <p className="text-[10px] text-[#64748b]">Due Feb 28, 2025</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-white">$1,249.00</p>
          <button className="mt-0.5 rounded-full bg-[#22d3ee] px-3 py-0.5 text-[9px] font-bold text-[#08080c]">PAY</button>
        </div>
      </div>
      {/* FaceID badge */}
      <div className="mt-auto flex items-center justify-center gap-1.5 rounded-lg bg-[#1a1a22] py-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="10" r="0.5" fill="#34d399" />
          <circle cx="15" cy="10" r="0.5" fill="#34d399" />
          <path d="M9 15c.83.67 2.17.67 3 .67s2.17 0 3-.67" />
        </svg>
        <span className="text-[10px] font-medium text-[#34d399]">FaceID Secured</span>
      </div>
    </div>
  )
}

const screenComponents = [CatalogScreen, TrackingScreen, PaymentsScreen]

export default function PhoneMockup() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % screens.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [paused, next])

  const Screen = screenComponents[current]

  return (
    <div className="tile tile-phone flex h-full flex-col items-center justify-center p-4 lg:p-6">
      <p className="mb-3 text-center font-mono text-[11px] text-[#64748b]">
        Live App Preview — <span className="text-[#22d3ee]">myCoke</span>
      </p>

      {/* Phone Frame */}
      <div
        className="relative mx-auto w-[260px] overflow-hidden rounded-[40px] border-[3px] border-[#222] bg-[#000]"
        style={{ aspectRatio: '9/19.2' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Notch */}
        <div className="absolute top-2 left-1/2 z-20 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-[#000]" />

        {/* Status Bar */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-3 pb-1">
          <span className="font-sans text-[10px] font-semibold text-white">9:41</span>
          <div className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><rect x="1" y="14" width="4" height="8" rx="1" opacity="0.3" /><rect x="7" y="10" width="4" height="12" rx="1" opacity="0.5" /><rect x="13" y="6" width="4" height="16" rx="1" opacity="0.7" /><rect x="19" y="2" width="4" height="20" rx="1" /></svg>
            <svg width="16" height="12" viewBox="0 0 28 14" fill="white"><rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="white" strokeWidth="1" fill="none" opacity="0.4" /><rect x="24.5" y="4" width="2.5" height="6" rx="1" opacity="0.4" /><rect x="2" y="2" width="18" height="10" rx="2" fill="#34d399" /></svg>
          </div>
        </div>

        {/* Screen Content */}
        <div className="relative h-[calc(100%-60px)] overflow-hidden bg-[#0e0e14]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <Screen />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 z-20 h-1 w-[100px] -translate-x-1/2 rounded-full bg-white/30" />
      </div>

      {/* Dot Indicators */}
      <div className="mt-3 flex gap-2">
        {screens.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 5000) }}
            className={`h-2 w-2 rounded-full transition-colors ${i === current ? 'bg-[#22d3ee]' : 'bg-[#333]'}`}
            aria-label={s.label}
          />
        ))}
      </div>
    </div>
  )
}
