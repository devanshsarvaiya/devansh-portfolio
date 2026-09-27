import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects" className="projects">
      <h2>Featured Projects</h2>

      <p className="project-desc">
        Real-world projects I've built while learning React and Web Development.
      </p>

      <div className="project-grid">
        <div className="project-card">
          <h3>🎓 Student Management System</h3>

          <p>
            React CRUD application with Context API, Search, Pagination,
            Dashboard, Validation and LocalStorage.
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>Context API</span>
            <span>CRUD</span>
          </div>

          <a
            href="https://github.com/devanshsarvaiya/student-management-system"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub →
          </a>
        </div>

        <div className="project-card">
          <h3>🍔 Foodie Hub Restaurant</h3>

          <p>
            Responsive Restaurant Website built using HTML, CSS and JavaScript.
          </p>

          <div className="tech-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <a
            href="https://github.com/devanshsarvaiya/foodie-hub-restaurant"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub →
          </a>
        </div>
      </div>
    </section>
  );
});

export default Projects;