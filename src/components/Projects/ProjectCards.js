import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "65px",
          margin: "auto",
          color: "black",
          padding: "10px",
          borderRadius: "20px",
         
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
        height={"100%"}
      />
      
    </Card>
  );
}
export default ProjectCards;
