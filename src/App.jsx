import "./App.css";
import { useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar />

      <Hero
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <About />
      <Skills />

      <Projects ref={projectsRef} />

      <Contact ref={contactRef} />
    </>
  );
}

export default App;