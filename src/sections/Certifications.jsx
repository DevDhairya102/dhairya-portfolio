function Certifications() {
  return (
    <section id="certifications">
          <p className="section-label">
      CERTIFICATIONS
    </p>

      <h2 className="section-heading">
        Learning Never Stops.
      </h2>

      <div className="cert-grid">
        <div className="cert-card">
          <h3>Tableau</h3>
          <p>Data Visualization & Dashboarding</p>
        </div>

        <div className="cert-card">
          <h3>Power BI</h3>
          <p>Business Intelligence & Analytics</p>
        </div>

        <div className="cert-card">
          <h3>Excel Power Query</h3>
          <p>Web Scraping & Data Automation</p>
        </div>
      </div>

      <div className="featured-cert">

  <div className="featured-cert-content">

    <span className="featured-cert-tag">
      PARTICIPATION
    </span>

    <h3>Teliport Season 3</h3>

    <h4>Tata Elxsi</h4>

    <p>
      Certificate of Participation awarded for
      participating in Teliport Season 3 as
      Team CodeXplorers representing
      NMIMS MPSTME Mumbai.
    </p>

    <p className="featured-cert-date">
      June 2026
    </p>

    <a
      href="/teliport-certificate.jpg"
      target="_blank"
      rel="noreferrer"
      className="project-btn"
    >
      View Certificate →
    </a>

  </div>

  <img
    src="/teliport-certificate.jpg"
    alt="Teliport Certificate"
    className="featured-cert-image"
  />

</div>

  
    </section>
  );
}

export default Certifications;