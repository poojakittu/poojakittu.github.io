import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import { ImBlog } from "react-icons/im";
import {
  
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      variant="dark"
      expand="md"
      className={navColour ? "primary" : "bg-primary"}
    >
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <img src="data:image/png;base64,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"
           className="img-fluid logo" alt="brand"  width="230" height="24"/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            
              
              <Nav.Item>
              <Nav.Link
                href="https://blogs.soumya-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg> &nbsp;Github
               
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
