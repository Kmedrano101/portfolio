import { motion } from 'framer-motion'
import { degrees, uiText } from '@data'
import { useLanguage } from '@contexts/LanguageContext'
import DegreeCard from '@components/cards/DegreeCard'

export default function Educations() {
  const { t } = useLanguage()

  return (
    <section className="section" id="education">
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
            {t(uiText.sections.degreesReceived)}
          </h2>
        </motion.div>

        <div className="space-y-14">
          {degrees.degrees.map((degree, index) => (
            <DegreeCard key={index} degree={degree} />
          ))}
        </div>
      </div>
    </section>
  )
}
