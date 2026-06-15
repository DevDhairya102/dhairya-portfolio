import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <p className="section-label">
        PROJECTS
      </p>

      <h2 className="section-heading">
        Building Solutions Through
        Code, Data & AI.
      </h2>

      <div className="project-grid">

        <ProjectCard
          title="AI Clipboard Security DLP"
          tech={[
            "AI",
            "Machine Learning",
            "NLP",
          ]}
          description="AI-powered clipboard monitoring system that detects sensitive information and prevents accidental data leakage."
          github="https://github.com/DevDhairya102"
        />

        <ProjectCard
          title="Carbon Footprint Tracker"
          tech={[
            "Machine Learning",
            "Python",
            "Data Analytics",
          ]}
          description="Predicts personal carbon emissions using lifestyle habits and machine learning models."
          github="https://github.com/DevDhairya102"
        />

        <ProjectCard
          title="Box Office Revenue Prediction"
          tech={[
            "Machine Learning",
            "Analytics",
            "Prediction",
          ]}
          description="Predictive analytics model for forecasting movie revenues using historical and market features."
          github="https://github.com/DevDhairya102"
        />

        <ProjectCard
          title="Veggie Express"
          tech={[
            "Android",
            "Java",
            "Mobile App",
          ]}
          description="Android application for online vegetable ordering and delivery management."
          github="https://github.com/DevDhairya102"
        />

      </div>
    </section>
  );
}

export default Projects;