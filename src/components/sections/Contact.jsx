import { motion } from 'framer-motion'
import { contactPageData, socialMediaLinks, uiText } from '@data'
import { useLanguage } from '@contexts/LanguageContext'
import SocialMedia from '@components/SocialMedia'
import DisplayLottie from '@components/DisplayLottie'
import emailAnimation from '@assets/lottie/email.json'

export default function Contact() {
  const { t } = useLanguage()
  const { contactSection, blogSection, addressSection } = contactPageData

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--text)' }}
          >
            {t(contactSection.title)}
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: 'var(--secondary-text)' }}
          >
            {t(contactSection.description)}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--text)' }}
            >
              {blogSection.title}
            </h3>
            <p
              className="mb-6"
              style={{ color: 'var(--secondary-text)' }}
            >
              {t(blogSection.subtitle)}
            </p>

            {/* Address */}
            <div className="mb-6">
              <h4
                className="font-semibold mb-2"
                style={{ color: 'var(--text)' }}
              >
                {t(addressSection.title)}
              </h4>
              <p style={{ color: 'var(--secondary-text)' }}>
                {addressSection.streetAddress}
              </p>
              <p style={{ color: 'var(--secondary-text)' }}>
                {addressSection.locality}, {addressSection.region}
              </p>
              <p style={{ color: 'var(--secondary-text)' }}>
                {addressSection.country} {addressSection.postalCode}
              </p>
              {addressSection.location_map_link && (
                <a
                  href={addressSection.location_map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-medium hover:underline"
                  style={{ color: 'var(--primary-accent)' }}
                >
                  {t(uiText.buttons.viewOnMaps)}
                </a>
              )}
            </div>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start">
              <SocialMedia />
            </div>
          </motion.div>

          {/* Animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 max-w-md"
          >
            <DisplayLottie animationData={emailAnimation} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
