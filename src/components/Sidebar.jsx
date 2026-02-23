import { motion } from 'framer-motion'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { personal, navLinks } from '../data/resume'

const sectionIds = navLinks.map((l) => l.id)

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

const socials = [
  { icon: <GithubIcon />, href: personal.github, label: 'GitHub' },
  { icon: <LinkedInIcon />, href: personal.linkedin, label: 'LinkedIn' },
  { icon: <EmailIcon />, href: `mailto:${personal.email}`, label: 'Email' },
  { icon: <PhoneIcon />, href: `tel:${personal.phone}`, label: 'Phone' },
]

export default function Sidebar() {
  const activeId = useScrollSpy(sectionIds, 200)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="lg:fixed lg:top-0 lg:left-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:px-12 lg:py-16 xl:px-20 xl:py-20 px-6 py-12">
      <motion.div variants={stagger} initial="hidden" animate="show">
        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="mt-3 font-heading text-lg font-medium text-slate-100 sm:text-xl"
        >
          {personal.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base"
        >
          {personal.tagline}
        </motion.p>

        {/* Stats */}
        <motion.div variants={fadeUp} className="mt-8 flex gap-6">
          {personal.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text font-heading text-2xl font-bold text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation */}
        <motion.nav
          variants={fadeUp}
          className="mt-12 hidden lg:block"
          aria-label="Main navigation"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    aria-label={`Navigate to ${link.label} section`}
                    className="group flex items-center gap-3 py-1"
                  >
                    <span
                      className={`block h-px transition-all duration-300 ${
                        isActive
                          ? 'w-16 bg-cyan-400'
                          : 'w-8 bg-slate-500 group-hover:w-16 group-hover:bg-slate-300'
                      }`}
                    />
                    <span
                      className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? 'text-cyan-400'
                          : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.nav>
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-8 flex gap-5 lg:mt-0"
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={s.label}
            className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
          >
            {s.icon}
          </a>
        ))}
      </motion.div>
    </header>
  )
}
