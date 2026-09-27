function Hero({ projectsRef, contactRef }) {
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">👋 Hello, I'm</p>

        <h1>
          Devansh <span>Sarvaiya</span>
        </h1>

        <h2>Aspiring AI Full Stack Developer</h2>

        <p className="hero-desc">
          MCA Student passionate about React, AI and building real-world web applications.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => scrollTo(projectsRef)}
          >
            View Projects
          </button>

          <button
            className="btn-outline"
            onClick={() => scrollTo(contactRef)}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;