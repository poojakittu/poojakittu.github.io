import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Pooja_Yadav_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {  pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import "./Navbar.css";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Button className="btn btn-info"
              variant="primary"
              href={pdf}
              target="_blank"
            >
              Resume
              <i style={{marginLeft:"4px"}} className="fa fa-download"></i>
            </Button>
  );
}

export default ResumeNew;
