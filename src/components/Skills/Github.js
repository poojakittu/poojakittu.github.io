import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        padding: "40px",
        color: "black",
        width: "100%",
      }}
    >
      <GitHubCalendar
        username="poojakittu"
        blockSize={15}
        blockMargin={5}
        color="#0373ca"
        fontSize={16}
      />
      <div style={{ margin: "auto", justifyContent: "center" }}>
        <h1
          className="project-heading"
          style={{ paddingTop: "20px", marginTop: "60px" }}
        >
          Github Status
        </h1>
        <img
          style={{ width: "70%", marginTop: "30px" }}
          src="https://camo.githubusercontent.com/46afaa33ff9ac4974cf3abd5c20969637e2a69feb308bc344cb5e7108c38ce27/68747470733a2f2f73747265616b2d73746174732e64656d6f6c61622e636f6d3f757365723d706f6f6a616b69747475265f626f726465723d74727565267468656d653d6461726b26686964655f626f726465723d74727565267468656d653d7265616374"
          alt="stats"
        />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <img
              style={{ width: "400px",marginTop: "30px" }}
              src="https://github-readme-stats.vercel.app/api?username=poojakittu&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true"
              alt="stats"
            />
          </Col>
          <Col md={6} className="project-card" >
            <img
              style={{ width: "400px", marginTop: "30px" }}
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=poojakittu&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true"
              alt="stats"
            />
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default Github;
