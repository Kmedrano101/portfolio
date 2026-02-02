import { motion } from 'framer-motion'
import { uiText } from '@data'
import { useLanguage } from '@contexts/LanguageContext'

export default function DegreeCard({ degree }) {
  const { t, language } = useLanguage()

  // Get descriptions based on language
  const descriptions = degree.descriptions[language] || degree.descriptions.en || degree.descriptions

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 }
      }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card p-4 md:p-5"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-6">
        {/* Logo */}
        {degree.logo_path && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center p-8 md:w-48 md:min-w-48 rounded-xl"
            style={{ backgroundColor: 'var(--highlight)' }}
          >
            <img
              src={`/images/${degree.logo_path}`}
              alt={degree.alt_name}
              className="w-24 h-24 object-contain"
            />
          </motion.div>
        )}

        {/* Content */}
        <div className="flex-1 space-y-5">
          {/* Header */}
          <div
            className="p-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4"
            style={{
              background: 'var(--gradient-surface)',
              border: '1px solid var(--card-border)'
            }}
          >
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text)' }}
              >
                {t(degree.title)}
              </h3>
              <p
                className="text-base"
                style={{ color: 'var(--secondary-text)' }}
              >
                {t(degree.subtitle)}
              </p>
            </div>
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap"
              style={{
                backgroundColor: 'var(--highlight)',
                color: 'var(--text)'
              }}
            >
              {degree.duration}
            </span>
          </div>

          {/* Body */}
          <div
            className="p-5 rounded-xl space-y-5"
            style={{
              backgroundColor: 'var(--body)',
              border: '1px solid var(--card-border)'
            }}
          >
            {descriptions.map((desc, index) => (
              <p
                key={index}
                className="text-base leading-relaxed"
                style={{ color: 'var(--exp-text-color)' }}
              >
                {desc}
              </p>
            ))}

            {degree.website_link && (
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline inline-flex items-center gap-2 mt-6 !py-2 !px-4 text-sm"
              >
                {t(uiText.buttons.visitWebsite)}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
