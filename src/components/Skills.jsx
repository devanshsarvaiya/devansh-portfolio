function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <p className="skills-desc">
        Technologies I'm learning and using to build modern web applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;