import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { splashScreen, greeting } from '@data'
import DisplayLottie from '@components/DisplayLottie'
import splashAnimation from '@assets/lottie/splashAnimation.json'

export default function SplashScreen({ onComplete }) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
      if (onComplete) {
        setTimeout(onComplete, 500) // Wait for exit animation
      }
    }, splashScreen.duration)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--splash-bg)' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="w-48 h-48 md:w-64 md:h-64"
          >
            <DisplayLottie animationData={splashAnimation} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold mt-6"
            style={{ color: 'var(--body)' }}
          >
            {greeting.logo_name}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
