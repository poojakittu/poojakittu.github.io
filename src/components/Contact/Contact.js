import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Contacts.css";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  function handleSubmit(e) {
    setTimeout(() => {
      e.target.reset();
    }, 3000);
  }
  return (
    <div className="contact-container">
      <Container id="contact">
        <div
          style={{
            width: "100%",
            backgroundColor: "#656467",
            height: "65px",
            margin: "auto",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <h1 className="project-heading">
            <strong className="white"> Contact </strong>
          </h1>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
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
            <h5 className="contact-me">
                <span>
                  {" "}
                  <AiFillGithub />
                </span>
              <a target="_blank" href="https://github.com/poojakittu" className="contact-me" alt="github">
                <span>Github</span>
              </a>
            </h5>
            <h5 className="contact-me">
                <span>
                  {" "}
                  <FaLinkedinIn />
                </span>
              <a target="_blank" href="https://www.linkedin.com/in/pooja-yadav-21611721b/" className="contact-me" alt="linkedin">
                <span>Linkedin</span>
              </a>
            </h5>
          </Col>
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
                  placeholder="Enter your name"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="5"
                  required
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>

                <button type="button" class="btn btn-secondary" width="50px">
                  Send{" "}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
