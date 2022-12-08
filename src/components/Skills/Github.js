import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        padding: "40px",
        color: "black",
      }}
    >
      <GitHubCalendar
        username="poojakittu"
        blockSize={15}
        blockMargin={5}
        color="#0373ca"
        fontSize={16}
      />
      <h1 className="project-heading" style={{ paddingTop: "20px" }}>
            Github Stats
      </h1>

     <img style={{width:"70%",marginTop:"30px"}} src="https://github-readme-stats.vercel.app/api?username=poojakittu&theme=radical" alt="stats" />
    </Row>
  );
}

export default Github;
