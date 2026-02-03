import { useEffect } from 'react'
import { seo } from '@data'
import { useLanguage } from '@contexts/LanguageContext'

export default function SeoHeader() {
  const { t } = useLanguage()

  useEffect(() => {
    // Update document title
    document.title = t(seo.title)

    // Update meta tags
    const updateMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attr}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attr, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    updateMeta('description', t(seo.description))
    updateMeta('og:title', seo.og.title, true)
    updateMeta('og:type', seo.og.type, true)
    updateMeta('og:url', seo.og.url, true)
    updateMeta('og:description', t(seo.description), true)
  }, [t])

  return null
}
