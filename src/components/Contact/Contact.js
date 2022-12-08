import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Contact() {
  return (
    <Container fluid style={{ backgroundColor: "#a7b5aa" }} >
      <div
        style={{
          justifyContent: "center",
          colour: "white",
        }}
        id="contact"
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
              <strong className="white"> Contact Me </strong>
            </h1>
          </div>
          <Col md={4} className="project-card">
            <Container>
              
            </Container>
          </Col>
          <Col md={4} className="project-card">
            <Container>
              <h1>Pooja Yadav</h1>
              <h5>poojayadav.yadav173@gmail.com</h5>
              <h5>+91-8930451525</h5>
              <h5>Gurgaon | Haryana</h5>
              <h5>
                <a href="https://github.com" style={{ textDecoration: "0" }}>
                <AiFillGithub />Github
                </a>
              </h5>
              <h5>
                <a href="https://www.linkedin.com/in/pooja-yadav-21611721b/" style={{ textDecoration: "0" }}>
                <FaLinkedinIn /> Linked In
                </a>
              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Contact;
