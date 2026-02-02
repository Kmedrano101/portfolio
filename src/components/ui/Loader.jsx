import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        className="w-12 h-12 border-4 rounded-full"
        style={{
          borderColor: 'var(--highlight)',
          borderTopColor: 'var(--primary-accent)'
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  )
}
