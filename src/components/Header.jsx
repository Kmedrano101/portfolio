import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { greeting, settings, uiText } from '@data'
import { useTheme } from '@contexts/ThemeContext'
import { useLanguage, languages } from '@contexts/LanguageContext'
import SeoHeader from './SeoHeader'

// Sun Icon
function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

// Moon Icon
function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

// Theme Toggle Button
function ThemeToggle() {
  const { isDark, toggleDarkMode } = useTheme()

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative w-14 h-8 rounded-full p-1 transition-colors duration-300"
      style={{
        backgroundColor: isDark ? 'var(--primary-accent)' : 'var(--highlight)'
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Track icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <span
          className="transition-opacity duration-300"
          style={{
            opacity: isDark ? 0.3 : 0,
            color: '#fbbf24'
          }}
        >
          <SunIcon />
        </span>
        <span
          className="transition-opacity duration-300"
          style={{
            opacity: isDark ? 0 : 0.3,
            color: 'var(--text)'
          }}
        >
          <MoonIcon />
        </span>
      </div>

      {/* Sliding knob */}
      <motion.div
        className="relative w-6 h-6 rounded-full shadow-md flex items-center justify-center"
        style={{
          backgroundColor: isDark ? '#1a1a2e' : '#ffffff'
        }}
        animate={{
          x: isDark ? 24 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.span
          initial={false}
          animate={{
            rotate: isDark ? 0 : 360,
            scale: 1
          }}
          transition={{ duration: 0.5 }}
          style={{
            color: isDark ? '#fbbf24' : '#f59e0b'
          }}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </motion.div>
    </motion.button>
  )
}

// Language Toggle Button
function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const isSpanish = language === 'es'

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative w-14 h-8 rounded-full p-1 transition-colors duration-300 overflow-hidden"
      style={{
        backgroundColor: 'var(--highlight)'
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
    >
      {/* Track flags */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 text-sm">
        <span
          className="transition-opacity duration-300"
          style={{
            opacity: isSpanish ? 0.4 : 0.2
          }}
        >
          {languages.es.flag}
        </span>
        <span
          className="transition-opacity duration-300"
          style={{
            opacity: isSpanish ? 0.2 : 0.4
          }}
        >
          {languages.en.flag}
        </span>
      </div>

      {/* Sliding knob */}
      <motion.div
        className="relative w-6 h-6 rounded-full shadow-md flex items-center justify-center text-sm"
        style={{
          backgroundColor: 'var(--body)',
          border: '2px solid var(--primary-accent)'
        }}
        animate={{
          x: isSpanish ? 0 : 24
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.span
          initial={false}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isSpanish ? languages.es.flag : languages.en.flag}
        </motion.span>
      </motion.div>
    </motion.button>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { t } = useLanguage()
  const link = settings.isSplash ? '/splash' : '/'

  const navLinks = [
    { to: '/', label: uiText.nav.home },
    { to: '/education', label: uiText.nav.education },
    { to: '/experience', label: uiText.nav.experience },
    { to: '/projects', label: uiText.nav.projects },
    { to: '/contact', label: uiText.nav.contact }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <SeoHeader />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled ? 'shadow-lg' : ''
          }`}
          style={{
            background: scrolled
              ? 'var(--body)'
              : 'linear-gradient(180deg, var(--body) 0%, transparent 100%)',
            backdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
            borderBottom: scrolled ? '1px solid var(--highlight)' : 'none',
            opacity: scrolled ? 0.98 : 1
          }}
        />

        <nav className="container mx-auto px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to={link} className="group relative z-10">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-0.5 font-mono text-xl font-bold"
              >
                <span style={{ color: 'var(--primary-accent)' }}>&lt;</span>
                <span style={{ color: 'var(--text)' }}>{greeting.nickname}</span>
                <span style={{ color: 'var(--primary-accent)' }}>/&gt;</span>
              </motion.div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-2">
                {navLinks.map((navItem, index) => (
                  <motion.li
                    key={navItem.to}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <NavLink
                      to={navItem.to}
                      className="relative block"
                    >
                      {({ isActive }) => (
                        <motion.div
                          className="relative px-5 py-2.5 rounded-xl overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Hover/Active Background */}
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            initial={false}
                            animate={{
                              opacity: isActive || hoveredIndex === index ? 1 : 0,
                              scale: isActive || hoveredIndex === index ? 1 : 0.9
                            }}
                            transition={{ duration: 0.2 }}
                            style={{
                              background: isActive
                                ? 'var(--primary-accent)'
                                : 'var(--highlight)',
                            }}
                          />

                          {/* Text */}
                          <motion.span
                            className="relative z-10 block text-base font-semibold tracking-wide"
                            animate={{
                              color: isActive
                                ? '#ffffff'
                                : hoveredIndex === index
                                  ? 'var(--primary-accent)'
                                  : 'var(--text)'
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {t(navItem.label)}
                          </motion.span>

                          {/* Bottom highlight line for hover */}
                          {!isActive && (
                            <motion.div
                              className="absolute bottom-1 left-1/2 h-0.5 rounded-full"
                              style={{
                                backgroundColor: 'var(--primary-accent)',
                                x: '-50%'
                              }}
                              initial={{ width: 0, opacity: 0 }}
                              animate={{
                                width: hoveredIndex === index ? '50%' : 0,
                                opacity: hoveredIndex === index ? 1 : 0
                              }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                            />
                          )}
                        </motion.div>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Language Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                <LanguageToggle />
              </motion.div>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <ThemeToggle />
              </motion.div>
            </nav>

            {/* Mobile: Language Toggle + Theme Toggle + Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-10 w-11 h-11 flex items-center justify-center rounded-xl transition-colors duration-300"
                style={{
                  backgroundColor: isMenuOpen ? 'var(--primary-accent)' : 'var(--highlight)'
                }}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <motion.span
                    className="w-full h-0.5 rounded-full origin-center"
                    style={{ backgroundColor: isMenuOpen ? '#ffffff' : 'var(--text)' }}
                    animate={{
                      rotate: isMenuOpen ? 45 : 0,
                      y: isMenuOpen ? 7 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 rounded-full"
                    style={{ backgroundColor: isMenuOpen ? '#ffffff' : 'var(--text)' }}
                    animate={{
                      opacity: isMenuOpen ? 0 : 1,
                      scaleX: isMenuOpen ? 0 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="w-full h-0.5 rounded-full origin-center"
                    style={{ backgroundColor: isMenuOpen ? '#ffffff' : 'var(--text)' }}
                    animate={{
                      rotate: isMenuOpen ? -45 : 0,
                      y: isMenuOpen ? -7 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden relative mt-4"
            >
              <div
                className="absolute inset-0 rounded-2xl mx-4"
                style={{
                  background: 'var(--body)',
                  border: '1px solid var(--highlight)',
                  boxShadow: '0 10px 40px -10px var(--card-shadow)'
                }}
              />
              <ul className="relative px-6 py-4 space-y-1">
                {navLinks.map((navItem, index) => (
                  <motion.li
                    key={navItem.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <NavLink
                      to={navItem.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="relative block"
                    >
                      {({ isActive }) => (
                        <div
                          className="relative py-3.5 px-4 rounded-xl transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? 'var(--primary-accent)' : 'transparent'
                          }}
                        >
                          <span
                            className="text-base font-semibold transition-colors duration-300"
                            style={{
                              color: isActive ? '#ffffff' : 'var(--text)'
                            }}
                          >
                            {t(navItem.label)}
                          </span>
                        </div>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className={`transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`} />
    </>
  )
}
