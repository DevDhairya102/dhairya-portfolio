import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 8% 0",
        gap: "100px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: "950",
            marginBottom: "20px",
          }}
        >
          Dhairya Shah
        </h1>

        <div
          style={{
            width: "100px",
            height: "9px",
            background: "#3B82F6",
            borderRadius: "10px",
            marginBottom: "50px",
          }}
        />

        <p
          style={{
            color: "#94A3B8",
            marginBottom: "20px",
          }}
        >
          B.Tech Computer Engineering • NMIMS MPSTME
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "25px",
          }}
        >
          <span className="tag">AI / ML</span>
          <span className="tag">Data Analytics</span>
          <span className="tag">Software Development</span>
        </div>

        <h2
          style={{
            color: "#60A5FA",
            marginBottom: "15px",
          }}
        >
          Debugging the world, one line at a time.
        </h2>

        <p
          style={{
            color: "#94A3B8",
            maxWidth: "600px",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Passionate about Artificial Intelligence, Machine Learning,
          Data Analytics and Software Development. Building intelligent
          solutions that solve real-world problems.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <a className="hero-btn" href="#projects">
            View Projects
          </a>

          <a className="hero-btn-outline" href="/resume.pdf">
            Resume
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "1.6rem",
          }}
        >
          <a href="https://github.com/DevDhairya102">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/dhairya-shah-a93054298/">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div>
        <img
          src="/profile.png"
          alt="Dhairya Shah"
          style={{
            width: "450px",
            borderRadius: "30px",
            marginTop: "50px",
            boxShadow:
            "0 0 40px rgba(59,130,246,0.25), \
            0 0 80px rgba(59,130,246,0.18), \
            0 0 120px rgba(59,130,246,0.12)"
          }}
        />
      </div>
    </section>
  );
}

export default Hero;