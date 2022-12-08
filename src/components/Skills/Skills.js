import React from "react";
import { Container, Row } from "react-bootstrap";
import Teachstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function Skills() {
  return (
    <Container fluid style={{ backgroundColor: "#a7b5aa" }} id="Skills">
      <Container
        style={{
          justifyContent: "center",
          colour: "white",
        }}
      >
        <Row>
          <div
            style={{
              width: "100%",
              backgroundColor: "#656467",
              height: "55px",
              marginTop: "80px",
            }}
          >
            <h1 className="project-heading">
              <strong className="white"> Technical Skills </strong>
            </h1>
          </div>
          <h1 className="project-heading">Front End</h1>
          <Teachstack />
          <h1 className="project-heading">Back End</h1>
          <Toolstack />
          <br /> <br /> <br /> <br />
          <h1 className="project-heading" style={{ paddingTop: "20px" }}>
            Github Information
          </h1>
          <Github />
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;
