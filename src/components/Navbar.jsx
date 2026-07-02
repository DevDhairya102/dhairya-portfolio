import { useState, useEffect } from 'react'
import { resumeB64 } from '../assets/assets'
import './Navbar.css'

const links = ['about','projects','skills','research','certifications','contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section highlight
  useEffect(() => {
    const secs = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-38% 0px -58% 0px' })
    secs.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    const nav = document.getElementById('nav')
    if (el && nav) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 16, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav id="nav" className={`nav${scrolled ? ' sc' : ''}`}>
        <div className="ni">
          <a className="nlogo" onClick={() => scrollTo('hero')}>DS</a>
          <ul className="nlinks">
            {links.map(l => (
              <li key={l}>
                <a className={active === l ? 'active' : ''} onClick={() => scrollTo(l)}>
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <a className="nres" href={resumeB64} download="Dhairya_Shah_Resume_2026.pdf" target="_blank" rel="noopener">Resume</a>
          <button className={`nburger${menuOpen ? ' open' : ''}`} id="hbg" aria-label="Toggle menu" onClick={() => setMenuOpen(o => !o)}>
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      <div className={`mmenu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l} onClick={() => scrollTo(l)}>
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </a>
        ))}
        <a className="nres" href={resumeB64} download="Dhairya_Shah_Resume_2026.pdf" target="_blank" rel="noopener" style={{textAlign:'center',marginTop:'.75rem'}}>Resume</a>
      </div>
    </>
  )
}
