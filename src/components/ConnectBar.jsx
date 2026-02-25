import { personal } from '../data/resume'

export default function ConnectBar() {
  return (
    <div className="tile tile-connect flex h-full flex-col items-center justify-center text-center">
      <h2 className="text-xl font-bold text-[#eee] sm:text-2xl">
        Let's build something together.
      </h2>
      <p className="mt-2 text-sm text-[#64748b]">
        Open to iOS Engineer, Cloud Architect, and Software Engineer roles.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#22d3ee] px-6 py-2.5 text-sm font-semibold text-[#08080c] transition-opacity hover:opacity-90"
        >
          Email me
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
        <a
          href={`tel:${personal.phone}`}
          className="inline-flex items-center gap-2 rounded-full border border-[#1e1e24] px-5 py-2.5 text-sm font-medium text-[#eee] transition-colors hover:border-[#333]"
        >
          {personal.phone}
        </a>
      </div>
    </div>
  )
}
