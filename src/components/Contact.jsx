import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} id="contact" className="contact">
        <h2>Contact Me</h2>

        <p className="contact-desc">
          I'm always open to learning, collaboration and freelance opportunities.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>devanshsarvaiya3@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>💼 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/devansh-sarvaiya-a5977541b"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </div>

          <div className="contact-card">
            <h3>🐙 GitHub</h3>
            <a
              href="https://github.com/devanshsarvaiya"
              target="_blank"
              rel="noreferrer"
            >
              devanshsarvaiya
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Devansh Sarvaiya | Built with React ❤️</p>
      </footer>
    </>
  );
});

export default Contact;