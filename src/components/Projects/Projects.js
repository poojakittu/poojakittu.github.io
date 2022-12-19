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
    <Container fluid style={{width:"100%"}}>
      <div
        id="project"
        style={{
          backgroundColor: "#656467",
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
              <strong className="white"> My Projects </strong>
            </h1>
          </div>
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
                a="https://ih1.redbubble.net/image.399555340.5300/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
                b="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
                c="https://e7.pngegg.com/pngimages/490/824/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark-thumbnail.png"
                d="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                x={<DiJavascript1 />}
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Slide7}
                isBlog={false}
                title="Lately"
                description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                ghLink="https://github.com/poojakittu/wicked-chicken-8524"
                demoLink="https://musical-fenglisu-6b918c.netlify.app/"
                a="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1200px-JSON_vector_logo.svg.png"
                b="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
                c="https://e7.pngegg.com/pngimages/490/824/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark-thumbnail.png"
                d="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
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
                a="https://ih1.redbubble.net/image.399555340.5300/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
                b="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
                c="https://e7.pngegg.com/pngimages/490/824/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark-thumbnail.png"
                d="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Slide6}
                isBlog={false}
                title="Engage Bay"
                description=" Thousands of dollars to dozens of marketing, sales, and support software. Experience the world's most affordable, unified software. EngageBay's all-in-one CRM software is the most comprehensive solution for your business."
                ghLink="https://github.com/Saif-sk5417/Engagebay-Clone"
                demoLink="https://quiet-cascaron-2fcf99.netlify.app/"
                a="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1200px-JSON_vector_logo.svg.png"
                b="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
                c="https://e7.pngegg.com/pngimages/490/824/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark-thumbnail.png"
                d="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Projects;
