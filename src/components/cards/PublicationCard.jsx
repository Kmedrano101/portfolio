import { motion } from 'framer-motion'
import { useLanguage } from '@contexts/LanguageContext'

export default function PublicationCard({ publication }) {
  const { t, language } = useLanguage()

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const locale = language === 'es' ? 'es-ES' : 'en-US'
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const publishedLabel = language === 'es' ? 'Publicado el' : 'Published on'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="card p-6 cursor-pointer group"
      onClick={() => window.open(publication.url, '_blank')}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: 'var(--gradient-primary)'
        }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <h3
        className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-[var(--primary-accent)] transition-colors"
        style={{ color: 'var(--text)' }}
      >
        {t(publication.name)}
      </h3>

      <p
        className="text-base mb-4 line-clamp-3"
        style={{ color: 'var(--exp-text-color)' }}
      >
        {t(publication.description)}
      </p>

      <div className="flex items-center justify-between">
        <p
          className="text-sm"
          style={{ color: 'var(--secondary-text)' }}
        >
          {publishedLabel} {formatDate(publication.createdAt)}
        </p>
        <span
          className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
          style={{ color: 'var(--primary-accent)' }}
        >
          {language === 'es' ? 'Leer' : 'Read'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </motion.div>
  )
}
