import { Icon } from '@iconify/react'
import { useLanguage } from '@contexts/LanguageContext'

export default function SoftwareSkills({ skills }) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {skills.map((skill, index) => {
        const skillName = t(skill.skillName)
        return (
          <div
            key={index}
            className="skill-icon group relative"
            title={skillName}
          >
            {skill.fontAwesomeClassname ? (
              <Icon
                icon={skill.fontAwesomeClassname}
                style={skill.style}
                className="text-4xl"
              />
            ) : skill.imageSrc ? (
              <img
                src={`/skills/${skill.imageSrc}`}
                alt={skillName}
                className="w-10 h-10 object-contain"
                style={skill.style}
              />
            ) : null}
            {/* Tooltip */}
            <span
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{
                backgroundColor: 'var(--dark)',
                color: 'var(--body)'
              }}
            >
              {skillName}
            </span>
          </div>
        )
      })}
    </div>
  )
}
