import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

export const languages = {
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
  en: { code: 'en', name: 'English', flag: '🇺🇸' }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-language') || 'es' // Spanish as default
    }
    return 'es'
  })

  useEffect(() => {
    document.documentElement.setAttribute('lang', language)
    localStorage.setItem('portfolio-language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const t = (translations) => {
    return translations[language] || translations.en || translations.es
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    languages,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext
