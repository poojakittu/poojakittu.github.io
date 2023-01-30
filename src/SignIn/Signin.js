import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../components/Contact/Contacts.css";

import { FaLinkedinIn } from "react-icons/fa";

const SignIN = () => {
  function handleSubmit(e) {
    setTimeout(() => {
      e.target.reset();
    }, 3000);
  }
  return (
    <div className="contact-container"  id="sign">
      <Container>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "65px",
            margin: "auto",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <h1 className="project-heading">
            <strong style={{ color: "Black" }}> Sign In</strong>
          </h1>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={5} className="project-card">
            <div style={{ margin: "auto", width: "50%" }}>
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
                className=" flex flex-col w-full md:w-1/2"
                width="100%"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Email"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  required
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <button type="button" class="btn btn-secondary" width="50px">
                  Login
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIN;
