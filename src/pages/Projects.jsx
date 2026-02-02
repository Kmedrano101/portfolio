import Header from '@components/Header'
import Footer from '@components/Footer'
import TopButton from '@components/ui/TopButton'
import ProjectsSection from '@components/sections/Projects'

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProjectsSection />
      </main>
      <Footer />
      <TopButton />
    </div>
  )
}
