import { personal } from '../data/resume'

export default function HeroTile() {
  return (
    <div className="tile tile-hero flex h-full flex-col justify-center">
      {/* Available badge */}
      <div className="mb-5 flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        </span>
        <span className="font-mono text-xs text-[#34d399]">Available for opportunities</span>
      </div>

      {/* Name */}
      <h1
        className="mb-3 font-sans font-bold leading-[1.1] text-[#eee]"
        style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1.5px' }}
      >
        I'm {personal.name.split(' ')[0]} {personal.name.split(' ')[1]},
        <br />
        I ship apps used by{' '}
        <span className="text-[#22d3ee]">220,000+</span> stores.
      </h1>

      {/* Description */}
      <p className="mb-6 max-w-lg text-sm leading-relaxed text-[#64748b]">
        {personal.description}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#22d3ee] px-5 py-2.5 text-sm font-semibold text-[#08080c] transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#1e1e24] px-5 py-2.5 text-sm font-medium text-[#eee] transition-colors hover:border-[#333]"
        >
          LinkedIn
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#1e1e24] px-5 py-2.5 text-sm font-medium text-[#eee] transition-colors hover:border-[#333]"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
