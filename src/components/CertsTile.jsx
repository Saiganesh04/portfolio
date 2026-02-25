import { certifications } from '../data/resume'

export default function CertsTile() {
  return (
    <div className="tile tile-certs flex h-full flex-col overflow-y-auto">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-bold text-[#eee]">Certifications</h2>
        <span className="text-2xl font-bold text-[#22d3ee]">{certifications.length}</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex items-start gap-2.5 rounded-xl border-l-2 bg-[#08080c] px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ borderLeftColor: cert.color }}
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-[#eee]">{cert.name}</p>
              <p className="font-mono text-[9px] text-[#555]">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
