import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Slide1 from "../../Assets/img/carousal/Slide1.jpg";
import Slide5 from "../../Assets/img/carousal/Slide5.png";
import Slide6 from "../../Assets/img/carousal/Slide6.png";
import Slide7 from "../../Assets/img/carousal/Slide7.png";

function Projects() {
  return (
    <Container fluid>
      <div style={{ backgroundColor: "#656467", paddingTop: "60px" }}>
        <Particle />
        <Container>
          <div
            style={{
              width: "100%",
              backgroundColor: "#a7b5aa ",
              height: "55px",
            }}
          >
            <h1 className="project-heading">
              <strong className="white"> My Projects </strong>
            </h1>
          </div>{" "}
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Slide1}
                isBlog={false}
                title="Kind Meal"
                description="Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
                Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!"
                ghLink="https://github.com/poojakittu/impolite-support-6582/tree/main/kind-meal"
                demoLink="https://bmmbmn.netlify.app/home"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Slide7}
                isBlog={false}
                title="Lately"
                description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                ghLink="https://github.com/poojakittu/wicked-chicken-8524"
                demoLink="https://plant49-ai.herokuapp.com/"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Slide5}
                isBlog={false}
                title="Body Cares"
                description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                ghLink="https://github.com/poojakittu/body_care/tree/main/app"
                demoLink="https://bmmbmn.netlify.app/"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Slide6}
                isBlog={false}
                title="Engage Bay"
                description=" thousands of dollars to dozens of marketing, sales, and support software. Experience the world's most affordable, unified software. EngageBay's all-in-one CRM software is the most comprehensive solution for your business."
                ghLink="https://github.com/Saif-sk5417/Engagebay-Clone"
                demoLink="https://quiet-cascaron-2fcf99.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Projects;
