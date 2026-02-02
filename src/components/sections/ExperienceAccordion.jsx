import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '@data'
import { useLanguage } from '@contexts/LanguageContext'
import ExperienceCard from '@components/cards/ExperienceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function AccordionSection({ section, isOpen, onToggle, t }) {
  return (
    <div className="mb-4">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full p-4 rounded-lg border flex items-center justify-between transition-all duration-300"
        style={{
          backgroundColor: 'var(--body)',
          borderColor: 'var(--header-color)',
          color: 'var(--text)'
        }}
      >
        <span className="font-semibold text-lg">{t(section.title)}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.span>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="p-4 rounded-b-lg"
              style={{ backgroundColor: 'var(--body)' }}
            >
              {section.experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  experience={exp}
                  index={index}
                  isLast={index === section.experiences.length - 1}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ExperienceAccordion() {
  const { t } = useLanguage()
  const [openSections, setOpenSections] = useState(
    // Open first section by default
    experience.sections.reduce((acc, _, index) => {
      acc[index] = index === 0
      return acc
    }, {})
  )

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--text)' }}
          >
            {t(experience.title)}
          </h2>
          <p
            className="text-lg mb-2"
            style={{ color: 'var(--secondary-text)' }}
          >
            {t(experience.subtitle)}
          </p>
          <div className="flex justify-center w-full">
            <p
              className="max-w-2xl text-center"
              style={{ color: 'var(--exp-text-color)' }}
            >
              {t(experience.description)}
            </p>
          </div>
        </motion.div>

        <div className="mt-8">
          {experience.sections.map((section, index) => (
            <AccordionSection
              key={index}
              section={section}
              isOpen={openSections[index]}
              onToggle={() => toggleSection(index)}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
