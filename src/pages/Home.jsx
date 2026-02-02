import Header from '@components/Header'
import Footer from '@components/Footer'
import TopButton from '@components/ui/TopButton'
import Greeting from '@components/sections/Greeting'
import Skills from '@components/sections/Skills'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Greeting />
        <Skills />
      </main>
      <Footer />
      <TopButton />
    </>
  )
}
