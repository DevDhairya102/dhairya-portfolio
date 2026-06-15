import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <section id="skills">
          <p className="section-label">
      SKILLS
    </p>

      <h2 className="section-heading">
        Technologies &
        Tools I Work With.
      </h2>

      <div className="skills-grid">
        <SkillCard
          title="Artificial Intelligence & ML"
          skills={[
            "Python",
            "Machine Learning",
            "Scikit-Learn",
            "TensorFlow",
            "Pandas",
            "NumPy",
            "Data Preprocessing",
          ]}
        />

        <SkillCard
          title="Data Analytics"
          skills={[
            "Tableau",
            "Power BI",
            "Excel",
            "Power Query",
            "SQL",
            "Data Visualization",
          ]}
        />

        <SkillCard
          title="Development"
          skills={[
            "React",
            "Java",
            "Git",
            "Android Development",
            "MySQL",
            "PHP",
          ]}
        />
      </div>
    </section>
  );
}

export default Skills;