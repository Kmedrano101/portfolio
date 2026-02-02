import { motion } from 'framer-motion'
import { projectsHeader, publicationsHeader, publications, uiText } from '@data'
import { useLanguage } from '@contexts/LanguageContext'
import PublicationCard from '@components/cards/PublicationCard'
import DisplayLottie from '@components/DisplayLottie'
import buildAnimation from '@assets/lottie/build.json'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
        >
          <div className="flex-1 text-center md:text-left">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text)' }}
            >
              {t(projectsHeader.title)}
            </h2>
            <p
              className="max-w-xl"
              style={{ color: 'var(--secondary-text)' }}
            >
              {t(projectsHeader.description)}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 max-w-xs"
          >
            <DisplayLottie animationData={buildAnimation} />
          </motion.div>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left"
            style={{ color: 'var(--text)' }}
          >
            {t(publicationsHeader.title)}
          </h3>
          <p
            className="mb-8 text-center md:text-left"
            style={{ color: 'var(--secondary-text)' }}
          >
            {t(publicationsHeader.description)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.data.map((pub, index) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </div>
    </section>
  )
}
