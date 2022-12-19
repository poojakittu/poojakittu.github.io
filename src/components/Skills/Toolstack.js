import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiJson,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>Visual Studio</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h4>Netlify</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h4>Vercel</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h4>Heroku</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJson />
        <h4>Json Sever</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
