import { motion } from 'framer-motion'
import { certifications, uiText } from '@data'
import { useLanguage } from '@contexts/LanguageContext'
import CertificationCard from '@components/cards/CertificationCard'

export default function Certifications() {
  const { t } = useLanguage()

  return (
    <section className="section" id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--text)' }}
          >
            {t(uiText.sections.courses)}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.certifications.map((cert, index) => (
            <CertificationCard key={index} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
