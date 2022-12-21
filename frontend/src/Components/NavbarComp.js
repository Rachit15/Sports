import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Team Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Individual Events
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Tournament Arrangement</Nav.Link>
           
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
    )
  }
}
