import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{Link} from "react-router-dom";

import Arrange from './Arrange';
import RSlider from './RSlider';

const NavbarComp = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/teamevents">Team Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/individualevents'>
                Individual Events
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            
            <Nav.Link as={Link} to="/arrange" >Create tournament</Nav.Link>
            
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
    </>
      
    
  )
}

export default NavbarComp
