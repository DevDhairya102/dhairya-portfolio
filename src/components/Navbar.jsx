function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,

        background: "rgba(10,15,30,0.75)",
        backdropFilter: "blur(18px)",

        border: "1px solid rgba(96,165,250,0.15)",

        borderRadius: "999px",

        padding: "12px 18px",

        display: "flex",
        alignItems: "center",
        gap: "18px",

        boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          background:
            "linear-gradient(135deg,#60A5FA,#2563EB)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontWeight: "800",
          color: "white",
        }}
      >
        DS
      </div>

      {/* Links */}
      <a className="nav-pill" href="#about">
        About
      </a>

      <a className="nav-pill" href="#projects">
        Projects
      </a>

      <a className="nav-pill" href="#skills">
        Skills
      </a>

      <a className="nav-pill" href="#research">
        Research
      </a>

      <a className="nav-pill" href="#contact">
        Contact
      </a>

      <a
        className="resume-pill"
        href="/resume.pdf"
        target="_blank"
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;