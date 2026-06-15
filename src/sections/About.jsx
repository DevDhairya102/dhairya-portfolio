function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 8%",
      }}
    >
      <p className="section-label">
  ABOUT ME
</p>

              <h2
          className="section-heading"
          style={{
            maxWidth: "800px",
          }}
        >
        Passionate About Building Intelligent Systems
        Through AI, Data, and Software Development.
      </h2>

      <p
        style={{
          color: "#94A3B8",
          lineHeight: "1.9",
          maxWidth: "900px",
          fontSize: "1.05rem",
          marginBottom: "60px",
        }}
      >
        I am Dhairya Shah, a B.Tech Computer Engineering student at
        Mukesh Patel School of Technology Management and Engineering
        (NMIMS). My interests lie in Artificial Intelligence, Machine
        Learning, Data Analytics, and Software Development. I enjoy
        transforming ideas into practical solutions and building
        technology that creates real-world impact.
      </p>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {/* Education */}
        <div className="about-card">
          <p className="about-card-title">Education</p>

          <h3>B.Tech Computer Engineering</h3>

          <p className="about-card-text">
            Mukesh Patel School of Technology Management &
            Engineering (NMIMS)
          </p>

          <p className="about-card-highlight">
            Current Year: 4th Year
          </p>
        </div>

        {/* Focus Areas */}
        <div className="about-card">
          <p className="about-card-title">Focus Areas</p>

          <p className="about-card-text">
            • Artificial Intelligence
          </p>

          <p className="about-card-text">
            • Machine Learning
          </p>

          <p className="about-card-text">
            • Data Analytics
          </p>

          <p className="about-card-text">
            • Tableau & BI Tools
          </p>

          <p className="about-card-text">
            • Full Stack Development
          </p>
        </div>

        {/* Looking For */}
        <div className="about-card">
          <p className="about-card-title">Open To</p>

          <p className="about-card-text">
            • AI/ML Internships
          </p>

          <p className="about-card-text">
            • Data Analyst Roles
          </p>

          <p className="about-card-text">
            • Software Development
          </p>

          <p className="about-card-text">
            • Research Opportunities
          </p>

          <p className="about-card-highlight">
            Available for exciting projects
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;