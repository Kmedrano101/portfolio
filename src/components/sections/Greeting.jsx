import { motion } from 'framer-motion'
import { greeting, illustration, uiText } from '@data'
import { useLanguage } from '@contexts/LanguageContext'
import SocialMedia from '@components/SocialMedia'
import Button from '@components/Button'
import DisplayLottie from '@components/DisplayLottie'
import landingPerson from '@assets/lottie/landingPerson.json'

export default function Greeting() {
  const { t } = useLanguage()

  return (
    <section className="section relative overflow-hidden" id="greeting">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"
        style={{ background: 'var(--gradient-primary)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"
        style={{ background: 'var(--gradient-primary)' }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          {/* Text content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{ color: 'var(--text)' }}
            >
              {t(greeting.title)}{' '}
              <span className="wave-emoji">👋</span>
            </motion.h1>

            {greeting.nickname && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl font-medium"
                style={{ color: 'var(--secondary-text)' }}
              >
                <span style={{ color: 'var(--primary-accent)' }}>&lt;</span>
                {greeting.nickname}
                <span style={{ color: 'var(--primary-accent)' }}>/&gt;</span>
              </motion.h2>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl max-w-2xl mx-auto md:mx-0 leading-loose pt-2 font-light tracking-wide"
              style={{ color: 'var(--secondary-text)' }}
            >
              {t(greeting.subTitle)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="!mt-8"
            >
              <SocialMedia />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start !mt-8"
            >
              <Button text={t(uiText.buttons.contactMe)} href="/contact" />
              {greeting.resumeLink && (
                <Button
                  text={t(uiText.buttons.cv)}
                  href={greeting.resumeLink}
                  newTab
                  variant="outline"
                />
              )}
            </motion.div>
          </div>

          {/* Animation/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 max-w-md md:max-w-lg relative"
          >
            {/* Glow effect behind animation */}
            <div
              className="absolute inset-0 blur-3xl opacity-30 scale-90"
              style={{ background: 'var(--gradient-primary)' }}
            />
            <div className="relative">
              {illustration.animated ? (
                <DisplayLottie animationData={landingPerson} />
              ) : (
                <img
                  src="/images/manOnTable.svg"
                  alt="Developer working"
                  className="w-full"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
