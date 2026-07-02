import { useEffect, useRef } from 'react'
import { photoB64, resumeB64 } from '../assets/assets'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  // Photo-only sparkle
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, animId

    function resize() {
      const wrap = canvas.parentElement
      W = canvas.width = wrap.offsetWidth + 80
      H = canvas.height = wrap.offsetHeight + 80
    }
    resize()
    window.addEventListener('resize', resize)

    const COLORS = ['#5C5549','#8C8375','#2C2A25','#B6AE9F','#7A6E5A']
    const rand = (a, b) => Math.random() * (b - a) + a

    class Particle {
      constructor() { this.reset(); this.phase = rand(0, Math.PI * 2) }
      reset() {
        this.x = rand(W * 0.15, W * 0.85)
        this.y = rand(H * 0.75, H * 0.95)
        this.size = rand(2.2, 4.2)
        this.alpha = 0
        this.maxAlpha = rand(0.6, 0.95)
        this.phase = rand(0, Math.PI)
        this.speed = rand(0.028, 0.05)
        this.vx = rand(-0.4, 0.4)
        this.vy = rand(-1.2, -0.5)
        this.color = COLORS[Math.floor(rand(0, COLORS.length))]
        this.rot = rand(0, Math.PI * 2)
        this.rotSpd = rand(-0.05, 0.05)
      }
      update() {
        this.phase += this.speed
        this.alpha = Math.abs(Math.sin(this.phase)) * this.maxAlpha
        this.x += this.vx; this.y += this.vy; this.rot += this.rotSpd
        if (this.y < -20) this.reset()
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rot)
        const s = this.size
        ctx.beginPath()
        ctx.moveTo(0, -s*2.4); ctx.lineTo(s*.55, -s*.55)
        ctx.lineTo(s*2.4, 0);  ctx.lineTo(s*.55, s*.55)
        ctx.lineTo(0, s*2.4);  ctx.lineTo(-s*.55, s*.55)
        ctx.lineTo(-s*2.4, 0); ctx.lineTo(-s*.55, -s*.55)
        ctx.closePath(); ctx.fill()
        ctx.restore()
      }
    }

    const particles = Array.from({ length: 30 }, () => new Particle())

    function loop() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    const nav = document.getElementById('nav')
    if (el && nav) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 16, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">

      {/* PHOTO — LEFT */}
      <div className="pcol fu">
        <div className="pframe-wrap">
          <canvas ref={canvasRef} className="sparks-canvas" />
          <div className="pframe">
            <img src={photoB64} alt="Dhairya Shah" />
          </div>
          <div className="fbadge b1"><span className="fbdot" />Open to work</div>
          <div className="fbadge b2">📍 Mumbai, India</div>
          <div className="fbadge b3">AI / ML Dev</div>
        </div>
        <div className="hstats">
          <div><div className="hs-n">4th</div><div className="hs-l">Year</div></div>
          <div><div className="hs-n">5+</div><div className="hs-l">Projects</div></div>
          <div><div className="hs-n">1</div><div className="hs-l">Paper</div></div>
        </div>
      </div>

      {/* TEXT — RIGHT */}
      <div className="hero-text">
        <div className="htag fu"><span className="ldot" />Available for exciting projects</div>
        <h1 className="fu d1"><span className="nm">Dhairya</span><br />Shah</h1>
        <div className="hrole fu d2">AI&nbsp;/&nbsp;ML · Data Analytics · Software Dev</div>
        <div className="hcol fu d2">B.Tech Computer Engineering · NMIMS MPSTME · 4th Year</div>
        <div className="htag2 fu d3">"Debugging the world, one line at a time."</div>
        <p className="hsub fu d3">Passionate about Artificial Intelligence, Machine Learning, Data Analytics and Software Development. Building intelligent solutions that solve real-world problems.</p>
        <div className="hchips fu d4">
          <span className="chip">AI / ML</span>
          <span className="chip">Data Analytics</span>
          <span className="chip">Software Development</span>
        </div>
        <div className="hbtns fu d4">
          <a className="bfill" onClick={() => scrollTo('projects')}>View Projects</a>
          <a className="boutl" onClick={() => scrollTo('contact')}>Get in Touch</a>
        </div>
        <div className="hsoc fu d5">
          <a className="socbtn" href="https://github.com/DevDhairya102" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <a className="socbtn" href="https://www.linkedin.com/in/dhairya-shah-a93054298/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a className="socbtn" href="mailto:dhairyamihir2005@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
