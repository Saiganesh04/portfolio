import { education } from '../data/resume'

export default function EducationTile() {
  return (
    <div className="tile tile-education flex h-full flex-col justify-center">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="flex items-start gap-3 rounded-xl bg-[#08080c] p-4 transition-all hover:-translate-y-0.5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-[#eee]">{edu.school}</p>
              <p className="mt-0.5 text-xs text-[#64748b]">{edu.degree}</p>
              <p className="mt-1 font-mono text-[10px] text-[#555]">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
