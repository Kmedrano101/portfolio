import { motion } from 'framer-motion'
import { useLanguage } from '@contexts/LanguageContext'

export default function ExperienceCard({ experience, index, isLast }) {
  const { t } = useLanguage()

  return (
    <div className="flex gap-4 md:gap-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="hidden md:flex flex-shrink-0"
      >
        <div
          className="w-16 h-16 rounded-full overflow-hidden shadow-lg flex items-center justify-center border-2"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}
        >
          <img
            src={`/images/${experience.logo_path}`}
            alt={t(experience.company)}
            className="w-12 h-12 object-contain"
          />
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div
          className="w-4 h-4 rounded-full z-10 shadow-md"
          style={{
            backgroundColor: experience.color || 'var(--primary-accent)',
            boxShadow: `0 0 12px ${experience.color || 'var(--glow-primary)'}`
          }}
        />
        {!isLast && (
          <div
            className="w-0.5 flex-1 -mt-1"
            style={{
              background: 'linear-gradient(180deg, var(--primary-accent), var(--highlight))'
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 pb-16"
      >
        <div className="card p-5 relative space-y-4">
          {/* Arrow */}
          <div
            className="hidden md:block absolute left-0 top-5 -translate-x-full w-0 h-0"
            style={{
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderRight: '12px solid var(--card-border)'
            }}
          />
          <div
            className="hidden md:block absolute left-0 top-5 -translate-x-[calc(100%-1px)] w-0 h-0"
            style={{
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderRight: '12px solid var(--card-bg)'
            }}
          />

          {/* Header */}
          <div
            className="flex flex-col md:flex-row md:items-start justify-between gap-4 p-5 rounded-xl"
            style={{
              background: 'var(--gradient-surface)',
              border: '1px solid var(--card-border)'
            }}
          >
            <div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--text)' }}
              >
                {t(experience.title)}
              </h3>
              <a
                href={experience.company_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold hover:underline inline-flex items-center gap-1"
                style={{ color: 'var(--primary-accent)' }}
              >
                {t(experience.company)}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="text-right md:text-right">
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: 'var(--text)' }}
              >
                {t(experience.duration)}
              </p>
              <p
                className="text-sm"
                style={{ color: 'var(--secondary-text)' }}
              >
                {t(experience.location)}
              </p>
            </div>
          </div>

          {/* Description */}
          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: 'var(--body)',
              border: '1px solid var(--card-border)'
            }}
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--exp-text-color)' }}
            >
              {t(experience.description)}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
