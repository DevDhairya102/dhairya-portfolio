import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBand from './components/StatsBand'
import About from './components/About'
import Projects from './components/Projects'
import Research from './components/Research'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import './App.css'

export default function App() {

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.rev, .rev-r')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) } })
    }, { threshold: 0.07, rootMargin: '0px 0px -50px 0px' })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <div className="port">
        <Hero />
        <StatsBand />
        <hr />
        <About />
        <hr />
        <Projects />
        <hr />
        <Research />
        <hr />
        <Certifications />
        <hr />
        <Contact />
      </div>
      <footer className="footer">
        <span>© 2026 Dhairya Shah · NMIMS MPSTME, Mumbai</span>
        <div style={{display:'flex',alignItems:'center'}}>
          <span className="fdot"></span>Built with precision &amp; intent.
        </div>
      </footer>
    </>
  )
}
