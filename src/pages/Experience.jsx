import Header from '@components/Header'
import Footer from '@components/Footer'
import TopButton from '@components/ui/TopButton'
import ExperienceAccordion from '@components/sections/ExperienceAccordion'

export default function Experience() {
  return (
    <>
      <Header />
      <main>
        <ExperienceAccordion />
      </main>
      <Footer />
      <TopButton />
    </>
  )
}
