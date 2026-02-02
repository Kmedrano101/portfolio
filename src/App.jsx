import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@contexts/ThemeContext'
import { LanguageProvider } from '@contexts/LanguageContext'
import { splashScreen } from '@data'

// Pages
import Home from '@pages/Home'
import Education from '@pages/Education'
import Experience from '@pages/Experience'
import Projects from '@pages/Projects'
import Contact from '@pages/Contact'
import NotFound from '@pages/NotFound'

// Components
import SplashScreen from '@components/sections/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(splashScreen.enabled)

  if (showSplash) {
    return (
      <LanguageProvider>
        <ThemeProvider>
          <SplashScreen onComplete={() => setShowSplash(false)} />
        </ThemeProvider>
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
