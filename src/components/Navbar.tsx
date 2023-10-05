import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="header">
          <LinkContainer to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/layer">
            <Nav.Link href="#main">Main Page</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Application Layer" id="dropdown1">
            <LinkContainer to="/application">
              <NavDropdown.Item href="#dropdown1/page-1">
                Application
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item href="/application/Application_sub1">application page2</NavDropdown.Item>
            <NavDropdown.Item href="/application/Application_sub2">application page 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Transport Layer" id="dropdown2">
            <LinkContainer to="/transport">
              <NavDropdown.Item href="#dropdown1/page-1">
                Transport
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item href="/transport/Transport_sub1">transport page 2</NavDropdown.Item>
            <NavDropdown.Item href="/transport/Transport_sub2">transport page 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Network Layer" id="dropdown1">
            <LinkContainer to="/network">
              <NavDropdown.Item href="#dropdown1/page-1">
                Network
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item href="/network/Network_sub1">network page 2</NavDropdown.Item>
            <NavDropdown.Item href="/network/Network_sub2">network page 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Datalink Layer" id="dropdown4">
            <LinkContainer to="/datalink">
              <NavDropdown.Item href="#dropdown2/page-1">
                Datalink
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item href="/datalink/Datalink_sub1">datalink page 2</NavDropdown.Item>
            <NavDropdown.Item href="/datalink/Datalink_sub2">datalink page 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
