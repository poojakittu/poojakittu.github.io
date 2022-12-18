import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  
} from "react-icons/ai";

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
      <h1 className="project-heading" style={{ paddingTop: "20px",marginTop:"70px" }}>
            Github Stats
      </h1>

      <a
                href="https://github.com/poojakittu"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
    </Row>
  );
}

export default Github;
