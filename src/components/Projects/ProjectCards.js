import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div
        style={{
          width: "100%",
          backgroundColor: "#0d6efd",
          height: "65px",
          margin: "auto",
          color: "white",
          padding: "10px",
          borderRadius: "20px",
          border:"1px solid gray"
        }}
      >
        <h3>{props.title}</h3>
      </div>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        width="100%"
        color="black"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div
          style={{
            display: "flex",
            gap: "10px",
            margin: "auto",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
          }}
        >
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "5px" }}
            >
              <CgWebsite /> &nbsp;
              {"Netlify"}
            </Button>
          )}
        </div>
        <br /> <br />
        <div style={{ gap: "2px" }}>
          <img src={props.a} alt="1" width="50" height="50" />{" "}
          <img src={props.b} alt="1" width="50" height="50" />{" "}
          <img src={props.c} alt="1" width="50" height="50" />{" "}
          <img src={props.d} alt="1" width="50" height="50" />{" "}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
