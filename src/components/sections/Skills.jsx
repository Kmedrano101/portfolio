import { motion } from 'framer-motion'
import { skills, uiText } from '@data'
import { useLanguage } from '@contexts/LanguageContext'
import SoftwareSkills from '@components/SoftwareSkills'
import DisplayLottie from '@components/DisplayLottie'

// Import Lottie animations
import Electricity from '@assets/lottie/Electricity.json'
import Robotics from '@assets/lottie/Robotics.json'
import MachineLearning from '@assets/lottie/MachineLearning.json'
import ProjectManagement from '@assets/lottie/ProjectManagement.json'

const animations = {
  Electricity,
  Robotics,
  MachineLearning,
  ProjectManagement
}

function SkillAnimation({ fileName }) {
  const animationData = animations[fileName] || ProjectManagement
  return <DisplayLottie animationData={animationData} />
}

export default function Skills() {
  const { t, language } = useLanguage()

  return (
    <section className="section relative" id="skills">
      {/* Background decoration */}
      <div
        className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: 'var(--gradient-primary)' }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: 'var(--gradient-primary)' }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--text)' }}
          >
            {t(uiText.sections.whatIDo)}
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-20">
          {skills.data.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12 md:gap-16`}
            >
              {/* Animation */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 max-w-sm relative"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 blur-3xl opacity-20 scale-75"
                  style={{ background: 'var(--gradient-primary)' }}
                />
                <div className="relative">
                  <SkillAnimation fileName={skill.fileName} />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: 'var(--text)' }}
                >
                  {t(skill.title)}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <SoftwareSkills skills={skill.softwareSkills} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {(skill.skills[language] || skill.skills.en || skill.skills).map((text, i) => (
                    <p
                      key={i}
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: 'var(--exp-text-color)' }}
                    >
                      {text}
                    </p>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
