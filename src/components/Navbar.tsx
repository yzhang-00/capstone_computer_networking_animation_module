import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import wwwlogo from "../assets/img/wwwlogo.gif";
import "../assets/css/logo.css";
function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container fluid>
          <Row>
            <Col md={1}>
              <img src={wwwlogo} alt="wwwlogo" className="logo-img" />
            </Col>

            <Col md={11}>
              <Nav className="header">
                <LinkContainer to="/">
                  <Nav.Link href="#home">Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/layer">
                  <Nav.Link href="#main">Main Page</Nav.Link>
                </LinkContainer>

                <NavDropdown title="Animation Module" id="dropdown0">
                  <a className="nav-link" href="https://v3d.net/q98">
                    Animation Module
                  </a>
                  <LinkContainer to="/animation_3d/details">
                    <NavDropdown.Item href="#dropdown0/page-1">
                      Animation Module Details
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown title="Application Layer" id="dropdown1">
                  <LinkContainer to="/application">
                    <NavDropdown.Item href="#dropdown1/page-1">
                      Application
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/application/Application_sub1">
                    <NavDropdown.Item href="#dropdown1/page-2">
                      HTTP
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/application/Application_sub2">
                    <NavDropdown.Item href="#dropdown1/page-3">
                      Web cache & Cookies
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown title="Transport Layer" id="dropdown2">
                  <LinkContainer to="/transport">
                    <NavDropdown.Item href="#dropdown2/page-1">
                      Transport
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/transport/Transport_sub1">
                    <NavDropdown.Item href="#dropdown2/page-2">
                      Transport page 2
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/transport/Transport_sub2">
                    <NavDropdown.Item href="#dropdown2/page-3">
                      Transport page 3
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown title="Network Layer" id="dropdown3">
                  <LinkContainer to="/network">
                    <NavDropdown.Item href="#dropdown3/page-1">
                      Introduction
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/network/Network_sub1">
                    <NavDropdown.Item href="#dropdown3/page-2">
                      Routing Table and Protocols
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/network/Network_sub2">
                    <NavDropdown.Item href="#dropdown3/page-3">
                      IP Fragmentation
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown title="Datalink Layer" id="dropdown4">
                  <LinkContainer to="/datalink">
                    <NavDropdown.Item href="#dropdown4/page-1">
                      Introduction
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/datalink/Datalink_sub1">
                    <NavDropdown.Item href="#dropdown4/page-2">
                      Data Link Layer
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/datalink/Datalink_sub2">
                    <NavDropdown.Item href="#dropdown4/page-3">
                      Layer 2 Swtiching
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
