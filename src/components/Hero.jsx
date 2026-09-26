function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-tag">👋 Hello, I'm</p>

        <h1>
          Devansh <span>Sarvaiya</span>
        </h1>

        <h2>Aspiring AI Full Stack Developer</h2>

        <p className="hero-desc">
          MCA Student passionate about React, AI and
          building real-world web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;