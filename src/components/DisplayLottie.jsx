import { Suspense, lazy } from 'react'
import Loader from './ui/Loader'

const Lottie = lazy(() => import('lottie-react'))

export default function DisplayLottie({ animationData }) {
  return (
    <Suspense fallback={<Loader />}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </Suspense>
  )
}
