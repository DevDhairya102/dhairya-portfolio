function ProjectCard({
  title,
  tech,
  description,
  github,
}) {
  return (
    <div className="project-card">
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "15px",
        }}
      >
        {tech.map((item, index) => (
          <span
            key={index}
            className="project-badge"
          >
            {item}
          </span>
        ))}
      </div>

      <h3>{title}</h3>

      <p className="project-description">
        {description}
      </p>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="project-btn"
      >
        View Project →
      </a>
    </div>
  );
}

export default ProjectCard;