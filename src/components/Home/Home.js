import React from "react";
import { Container } from "react-bootstrap";


import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import SignIN from "../../SignIn/Signin";

function Home() {
  return (
    <Container fluid className="project-section">
      <About />
      <Projects />
      <SignIN/>
      <Contact />
    </Container>
  );
}

export default Home;
