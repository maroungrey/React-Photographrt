import React from "react";
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'
import Logo from "../assets/logo.png"




export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/' className="me-auto">
            {/* LOGO */}
            <img
              src={Logo}
              width="190"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="m-1" href='#portfolio'>Portfolio</Nav.Link>
            <Nav.Link className="m-1" href='#contact'>Contact Me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="m-1"><i class="fa-brands fa-facebook-f"></i></Nav.Link>
            <Nav.Link className="m-1"><i class="fa-brands fa-instagram"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}