import React from 'react';
import { Navbar } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const ARCNavbar = () => {
  return (
    <div>
      <Navbar bg="white lg navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-text">
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#partners">Partners & Sponsorship</Nav.Link>
              <Nav.Link href="#careers">Careers</Nav.Link>
              <Nav.Link href="#racing">Racing</Nav.Link>
              <Nav.Link href="#entertainment">Music & Entertainment</Nav.Link>
              <Nav.Link href="#hire">Venue Hire</Nav.Link>
              <Nav.Link href="#media">Media Centre</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default ARCNavbar;


