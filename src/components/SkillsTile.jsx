import { skills, skillColors } from '../data/resume'

export default function SkillsTile() {
  return (
    <div className="tile tile-skills flex h-full flex-col overflow-y-auto">
      <h2 className="mb-4 text-sm font-bold text-[#eee]">Skills</h2>
      <div className="flex flex-1 flex-col gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-wider text-[#555]">
              {category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-full border px-2.5 py-1 font-mono text-[10px] transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    color: skillColors[category],
                    borderColor: skillColors[category] + '30',
                    background: skillColors[category] + '08',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = skillColors[category]
                    e.currentTarget.style.boxShadow = `0 4px 12px ${skillColors[category]}20`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = skillColors[category] + '30'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
