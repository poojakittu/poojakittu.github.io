import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { MyCarousal } from "../my-carousal/my-carousel";

import Type from "./Type";


function About() {
  return (
    <Container fluid style={{ backgroundColor: "White" }} id="about">
      <br />
      <br />
      <div
        style={{
          width: "85%",
          height: "65px",
          margin: "auto",
        }}
        id="about"
      >
        <h1
          className="project-heading"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <strong style={{ color: "Black" }}> About us </strong>
        </h1>
      </div>
      <Container>
        <Row
          style={{
            justifyContent: "center",
          }}
        >
          <Col md={12}>
            <div style={{ marginTop: "20px", padding: "30px" }}>
              <h2>
                <center> DREAMWEAVER TECHNOLOGIES PRIVATE LIMITED</center>
              </h2>
              <br />
              <div style={{ textAlign: "left" }}>
                <p>
                  Dreamweaver Technologies Private Limited is a Private
                  incorporated on 22 May 2017. It is classified as Non-govt
                  company and is registered at Registrar of Companies, Pune. Its
                  authorized share capital is Rs. 1,000,000 and its paid up
                  capital is Rs. 100,000. It is inolved in Business activities
                  n.e.c.
                </p>
                <p>
                  Dreamweaver Technologies Private Limited's Annual General
                  Meeting (AGM) was last held on 30 September 2019 and as per
                  records from Ministry of Corporate Affairs (MCA), its balance
                  sheet was last filed on 31 March 2019.
                </p>
                <p>
                  Directors of Dreamweaver Technologies Private Limited are
                  Saniya Sikandar Pathan, Aniket Rajendra Shinde, .
                </p>
                <p>
                  Dreamweaver Technologies Private Limited's Corporate
                  Identification Number is (CIN) U74999PN2017PTC170560 and its
                  registration number is 170560.Its Email address is
                  pathansikandar@yahoo.com and its registered address is ROW
                  HOUSE NO. 12, KAPIL WOODROW ESTATE BEHIND RUBY HALL CLINIC
                  HOSPITAL AZAD NAGAR, WANOWRIE Pune MH 411022 IN .
                </p>
                <p>
                  Current status of Dreamweaver Technologies Private Limited is
                  - Strike Off.
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
              <strong className="main-name" style={{ color: "#0d6efd" }}>
                {" "}
                SMARTER SOLUTIONS TAILOR-MADE FOR YOU
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
