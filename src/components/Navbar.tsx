import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import wwwlogo from "../assets/img/wwwlogo.svg";
import "../assets/css/logo.css";
import "../assets/css/navbar.css";
function NavigationBar() {
  const location = useLocation();
  return (
    <Navbar expand="lg">
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

                {/* <LinkContainer to="/layer">
                  <Nav.Link href="#main">Main Page</Nav.Link>
                </LinkContainer> */}

                <NavDropdown
                  title="Animation Module"
                  id="dropdown0"
                  active={location.pathname.startsWith("/animation_3d/details")}
                >
                  <a className="nav-link" href="https://v3d.net/s7r">
                    Animation Module
                  </a>
                  <LinkContainer to="/animation_3d/details">
                    <NavDropdown.Item href="#dropdown0/page-1">
                      <span className="dropdown-title">
                        Animation Module Details
                      </span>
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown
                  title="Application Layer"
                  id="dropdown1"
                  active={location.pathname.startsWith("/application")}
                >
                  <LinkContainer to="/application">
                    <NavDropdown.Item href="#dropdown1/page-1">
                      <span className="dropdown-title">Application</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/application/Application_sub1">
                    <NavDropdown.Item href="#dropdown1/page-2">
                      <span className="dropdown-title">HTTP</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/application/Application_sub2">
                    <NavDropdown.Item href="#dropdown1/page-3">
                      <span className="dropdown-title">
                        Web cache & Cookies
                      </span>
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown
                  title="Transport Layer"
                  id="dropdown2"
                  active={location.pathname.startsWith("/transport")}
                >
                  <LinkContainer to="/transport">
                    <NavDropdown.Item href="#dropdown2/page-1">
                      <span className="dropdown-title">Introduction</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/transport/Transport_sub1">
                    <NavDropdown.Item href="#dropdown2/page-2">
                      <span className="dropdown-title">TCP Header Files</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/transport/Transport_sub2">
                    <NavDropdown.Item href="#dropdown2/page-3">
                      <span className="dropdown-title">
                        Connections and Control
                      </span>
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown
                  title="Network Layer"
                  id="dropdown3"
                  active={location.pathname.startsWith("/network")}
                >
                  <LinkContainer to="/network">
                    <NavDropdown.Item href="#dropdown3/page-1">
                      <span className="dropdown-title">Introduction</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/network/Network_sub1">
                    <NavDropdown.Item href="#dropdown3/page-2">
                      <span className="dropdown-title">
                        Routing Table and Protocols
                      </span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/network/Network_sub2">
                    <NavDropdown.Item href="#dropdown3/page-3">
                      <span className="dropdown-title">IP Fragmentation</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <NavDropdown
                  title="Datalink Layer"
                  id="dropdown4"
                  active={location.pathname.startsWith("/datalink")}
                >
                  <LinkContainer to="/datalink">
                    <NavDropdown.Item href="#dropdown4/page-1">
                      <span className="dropdown-title">Introduction</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/datalink/Datalink_sub1">
                    <NavDropdown.Item href="#dropdown4/page-2">
                      <span className="dropdown-title">Data Link Layer</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/datalink/Datalink_sub2">
                    <NavDropdown.Item href="#dropdown4/page-3">
                      <span className="dropdown-title"> Layer 2 Swtiching</span>
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/quiz">
                  <Nav.Link href="#quiz">Quiz</Nav.Link>
                </LinkContainer>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
