import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <>
      <CursorGlow />
      <Chatbot />

      <div className="mx-auto min-h-screen max-w-screen-xl lg:flex">
        {/* Left sidebar */}
        <Sidebar />

        {/* Right scrollable content */}
        <main className="lg:ml-[42%] lg:w-[58%] lg:py-16 lg:pr-12 xl:pr-20 xl:py-20 px-6 pb-16">
          <div className="space-y-24 lg:space-y-32">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}
