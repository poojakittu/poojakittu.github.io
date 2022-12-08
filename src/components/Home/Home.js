import React from "react";
import { Container } from "react-bootstrap";
import Skills from "../Skills/Skills";

import About from "../About/About";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <Container fluid className="project-section">
      <About />
      <Skills />
      <Projects />
    </Container>
  );
}

export default Home;
