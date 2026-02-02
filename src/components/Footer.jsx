import { motion } from 'framer-motion'
import { greeting, uiText } from '@data'
import { useLanguage } from '@contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-10 text-center relative"
      style={{
        borderTop: '1px solid var(--card-border)'
      }}
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, var(--highlight) 100%)'
        }}
      />

      <div className="relative">
        <p
          className="text-base mb-2"
          style={{ color: 'var(--secondary-text)' }}
        >
          {t(uiText.footer.madeWith)}{' '}
          <span className="text-red-500">❤️</span>{' '}
          {t(uiText.footer.by)}{' '}
          <a
            href={greeting.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: 'var(--primary-accent)' }}
          >
            {greeting.nickname}
          </a>
        </p>
        <p
          className="text-sm"
          style={{ color: 'var(--secondary-text)' }}
        >
          © {currentYear} {greeting.logo_name}
        </p>
      </div>
    </motion.footer>
  )
}
