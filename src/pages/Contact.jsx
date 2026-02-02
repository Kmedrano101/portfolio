import Header from '@components/Header'
import Footer from '@components/Footer'
import TopButton from '@components/ui/TopButton'
import ContactSection from '@components/sections/Contact'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
      <TopButton />
    </div>
  )
}
