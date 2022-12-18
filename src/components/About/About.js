import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import { MyCarousal } from "../my-carousal/my-carousel";

import Type from "./Type";
import ResumeNew from "../Resume/ResumeNew";

function About() {
  return (
    <Container fluid style={{ backgroundColor: "#656467" }}>
      <br/><br/>
      <div
        style={{
          width: "85%",
          backgroundColor: "#a7b5aa",
          height: "65px",
          margin: "auto",
        
        }}
        id="about"
      >
        <h1
          className="project-heading"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div> </div> <div> </div>
          <strong className="white"> About Me </strong>
          <div style={{ paddingLeft: "50px" }}>
            <ResumeNew />
          </div>
        </h1>
      </div>
      <Container>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Col md={4} className="project-card">
            <Container>
              <img
                src="https://avatars.githubusercontent.com/u/107460416?v=4"
                alt="abc"
                width="280"
                height="280"
                borderRadius="50%"
              />
            </Container>
          </Col>

          <Col md={8}>
            <div style={{ color: "white", marginTop: "20px", padding: "30px" }}>
              <h3 style={{ textAlign: "left" }}>Hi there! I am</h3>
              <h2>
                <center>POOJA YADAV</center>
              </h2>
              <div style={{ textAlign: "left" }}>
                <p>
                  {" "}
                  <ul>
                    <li>
                      I am currently learning full stack web development at
                      Masai School. I am passionate about solving real-world
                      problems and actively looking for opportunities in the
                      field of web development and software engineering
                    </li>
                  </ul>
                </p>
                <p>
                  {" "}
                  <ul>
                    <li>
                      I was always interested in web development but did not
                      have correct guidance but when i got to know about Masai
                      School I was overwhelmed and immediately took admission.
                    </li>
                  </ul>
                </p>
                <p>
                  {" "}
                  <ul>
                    <li>
                      I'm a passionate Developer, with strong administrative and
                      communication skills, good attention to detail and the
                      ability to write efficient code using MERN Stack.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div></div>
          </Col>

          <Col md={6} className="project-card">
            <h1 style={{ paddingTop: 20, color: "white" }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name" style={{ color: "white" }}>
              I'M
              <strong className="main-name" style={{ color: "#3f6b96" }}>
                {" "}
                Pooja Yadav
              </strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left", color: "#3f6b96" }}>
              <Type />
            </div>
          </Col>

          <Col md={6} className="project-card">
            <MyCarousal />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
