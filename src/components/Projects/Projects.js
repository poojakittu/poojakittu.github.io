import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Slide1 from "../../Assets/img/carousal/Slide1.jpg";
import Slide5 from "../../Assets/img/carousal/Slide5.png";
import Slide6 from "../../Assets/img/carousal/Slide6.png";
import Slide7 from "../../Assets/img/carousal/Slide7.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";

function Projects() {
  return (
    <Container fluid style={{ width: "100%" }} id="project">
      <div
        style={{
          backgroundColor: "white",
          paddingTop: "60px",
          marginTop: "2px",
          width: "100%",
        }}
      >
        <Particle />
        <Container>
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              height: "65px",
              margin: "auto",
            }}
            id="about"
          >
            <h1
              className="project-heading"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <strong style={{color:"black"}}> Our Services </strong>
            </h1>
          </div>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={3} className="project-card">
              <ProjectCard
                imgPath={
                  "http://vijaysolution.com/wp-content/uploads/2021/04/android-app-development-kaise-kare.webp"
                }
                title="Mobile App Devlopment"
              />
            </Col>

            <Col md={3} className="project-card">
              <ProjectCard
                imgPath={
                  "https://www.achieversit.com/uploads/course_image/web-dev-img.jpeg"
                }
                title="Website Devlopment"
              />
            </Col>

            <Col md={3} className="project-card">
              <ProjectCard
                imgPath={
                  "https://riseapps.co/wp-content/uploads/2019/07/img_article_blog_react_vs_flutter-min.jpg"
                }
                title="Flutter and React Native"
              />
            </Col>

            <Col md={3} className="project-card">
              <ProjectCard
                imgPath={
                  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220416200936/Top-10-Front-End-Developer-Skills-That-You-Need-in-2022.png"
                }
                title="Frontend Devloper"
              />
            </Col>
            <Col md={3} className="project-card">
              <ProjectCard
                imgPath={
                  "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png"
                }
                title="Backend Devloper"
              />
            </Col>
            <Col md={3} className="project-card">
              <ProjectCard
                imgPath={
                  "https://www.spec-india.com/wp-content/uploads/2021/04/ReactJS-Developer-Feature-Image.png"
                }
                title="Reactjs Devloper"
              />
            </Col>
            <Col md={3} className="project-card">
              <ProjectCard
                imgPath={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSBiiABINYtHZc1P9Di5XwXWoXHFM1zr_qQ&usqp=CAU"
                }
                title="Php Devloper"
              />
            </Col>
            <Col md={3} className="project-card">
              <ProjectCard
                imgPath={
                  "https://dce0qyjkutl4h.cloudfront.net/wp-content/uploads/2017/06/Nodejs-Developer.jpg"
                }
                title="Nodejs Devloper"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Projects;
