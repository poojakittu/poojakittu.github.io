import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   // AiOutlineTwitter,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

import "font-awesome/css/font-awesome.min.css";

import "./Contacts.css";
import Contact2 from "./contact2";

function Contact() {
  return (
    <Container fluid style={{ backgroundColor: "#a7b5aa", paddingTop: "60px" }}>
      <div
        style={{
          justifyContent: "center",
          colour: "white",
        }}
        id="contact"
      >
        <Row>
          <br /> <br /> <br />
          <div
            style={{
              width: "85%",
              backgroundColor: "#656467",
              height: "65px",
              margin: "auto",
            }}
            id="about"
          >
            <h1
              className="project-heading"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <strong className="white"> Contact </strong>
            </h1>
          </div>
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
          <Col md={4} className="contact-container">
          <Row>
          <Col>
            <h2>Get In Touch</h2>
            <h5>
              Liked my work? Want to get in touch? <br />
              You can reach out to me at-
            </h5>
           
            <br />
            <h5>
              <a href="poojayadav.yadav173@gmail.com" className="contact-me">
                <span>
                  {" "}
                  <i className="fa fa-envelope"></i>
                </span>
                <span>poojayadav.yadav173@gmail.com</span>
              </a>
            </h5>

            <h5>
              <a href="tel: +91 7082382325" className="contact-me">
                <span>
                  {" "}
                  <i className="fa fa-phone"></i>
                </span>
                <span>+91 7082382325</span>
              </a>
            </h5>
          </Col>
          
        </Row>
          </Col>
          <Col md={4} className="contact-container">
            <Contact2/>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Contact;
