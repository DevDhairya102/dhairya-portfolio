function Contact() {
  return (
    <section id="contact">
          <p className="section-label">
      CONTACT
    </p>

      <h2 className="section-heading">
        Let's Build Something Great Together.
      </h2>

      <p
        style={{
          color: "#94A3B8",
          marginBottom: "40px",
          maxWidth: "700px",
        }}
      >
        Open to internships, research opportunities,
        collaborations, and exciting projects.
      </p>

      <div className="contact-grid">
        <a
          href="mailto:dhairyashah2005@gmail.com"
          className="contact-card"
        >
          Email
        </a>

        <a
          href="https://github.com/DevDhairya102"
          className="contact-card"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dhairya-shah-a93054298/"
          className="contact-card"
        >
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          className="contact-card"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;