import { certB64 } from '../assets/assets'
import './Certifications.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12}}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="rev">
        <div className="eye">04 — Certifications</div>
        <h2>Learning Never Stops.</h2>
      </div>
      <div className="ctop rev">
        <div className="ccard"><div className="cci">📊</div><div className="cct">Tableau</div><div className="ccs">Data Visualization &amp; Dashboarding</div></div>
        <div className="ccard"><div className="cci">📈</div><div className="cct">Power BI</div><div className="ccs">Business Intelligence &amp; Analytics</div></div>
        <div className="ccard"><div className="cci">⚙️</div><div className="cct">Excel Power Query</div><div className="ccs">Web Scraping &amp; Data Automation</div></div>
      </div>
      <div className="cfeat rev">
        <div>
          <div className="cfb">Participation Certificate</div>
          <div className="cfti">Teliport Season 3</div>
          <div className="cfo">🏢 Tata Elxsi</div>
          <div className="cfd">June 15, 2026</div>
          <p className="cfd2">Certificate of Participation awarded for participating in Teliport Season 3 as Team CodeXplorers representing NMIMS MPSTME Mumbai.</p>
          <a className="cfl" href={certB64} download="Teliport_Certificate.png" target="_blank" rel="noopener">
            View Certificate <ArrowIcon />
          </a>
        </div>
        <div className="cimg-wrap">
          <img src={certB64} alt="Teliport Season 3 Certificate — Dhairya Shah" />
        </div>
      </div>
    </section>
  )
}
