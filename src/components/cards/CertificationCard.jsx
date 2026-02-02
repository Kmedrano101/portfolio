import { motion } from 'framer-motion'
import { uiText } from '@data'
import { useLanguage } from '@contexts/LanguageContext'

export default function CertificationCard({ certificate }) {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="card overflow-hidden group cursor-pointer"
    >
      <a
        href={certificate.certificate_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Header with logo */}
        <div
          className="relative h-36 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: certificate.color_code }}
        >
          <img
            src={`/images/${certificate.logo_path}`}
            alt={certificate.alt_name}
            className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)'
            }}
          >
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
              style={{
                backgroundColor: 'var(--primary-accent)',
                color: 'white'
              }}
            >
              {t(uiText.buttons.viewCertificate)}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <h3
            className="font-bold text-base mb-2 line-clamp-2"
            style={{ color: 'var(--text)' }}
          >
            {t(certificate.title)}
          </h3>
          <p
            className="text-sm"
            style={{ color: 'var(--secondary-text)' }}
          >
            {t(certificate.subtitle)}
          </p>
        </div>
      </a>
    </motion.div>
  )
}
