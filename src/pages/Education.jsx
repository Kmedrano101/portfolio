import Header from '@components/Header'
import Footer from '@components/Footer'
import TopButton from '@components/ui/TopButton'
import Educations from '@components/sections/Educations'
import Certifications from '@components/sections/Certifications'

export default function Education() {
  return (
    <>
      <Header />
      <main>
        <Educations />
        <Certifications />
      </main>
      <Footer />
      <TopButton />
    </>
  )
}
