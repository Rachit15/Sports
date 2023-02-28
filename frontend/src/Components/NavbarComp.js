import { Button } from 'antd';
import React, { Component,useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{Link, Navigate} from "react-router-dom";

import { UserContext } from '../App';
import Arrange from './Arrange';
import RSlider from './RSlider';

const NavbarComp = ({isLoggedin}) => {

//    const {state,dispatch}=useContext(UserContext);
// console.log(state);
//   const RenderMenu=()=>{
//     console.log("In render menu");
//     if(state)
//     {
//       console.log("in if");
//       return(
//         <>
//          <Navbar bg="success" expand="lg" variant='dark'style={{paddingRight:'0px',height:'50px'}}>
//       <Container>
        
//          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand> 
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//           <NavDropdown title="Games" id="basic-nav-dropdown">
//     <NavDropdown.Item as={Link} to="/teamevents">Team Events</NavDropdown.Item>
    
//     <NavDropdown.Divider />
//     <NavDropdown title="Individual Events" id="individual-nav-dropdown" className="dropdown-menu-right">
//         <NavDropdown.Item as={Link} to='/individualevents/event1'>Badminton</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to='/individualevents/event2'>Chess</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to='/individualevents/event3'>Swimming</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to='/individualevents/event4'>Carrom</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to='/individualevents/event5'>Tennis</NavDropdown.Item>
//     </NavDropdown>
// </NavDropdown>

//             <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            
//             {/* <Nav.Link as={Link} to="/arrange" >Create tournament</Nav.Link> */}
              
//              <Nav.Link as={Link} to="/logout" >Logout</Nav.Link>  
              
            
//           </Nav>
//         </Navbar.Collapse> 
//       </Container>
      
//     </Navbar>
//         </>
//      )
//    }
//    else{
//     console.log("In else");
//     return(
//       <>
//       <Navbar bg="success" expand="lg" variant='dark'style={{paddingRight:'0px',height:'50px'}}>
//       <Container>
        
//          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand> 
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//           <NavDropdown title="Games" id="basic-nav-dropdown">
//     <NavDropdown.Item as={Link} to="/teamevents">Team Events</NavDropdown.Item>
    
//     <NavDropdown.Divider />
//     <NavDropdown title="Individual Events" id="individual-nav-dropdown" className="dropdown-menu-right">
//         <NavDropdown.Item as={Link} to='/individualevents/event1'>Badminton</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to='/individualevents/event2'>Chess</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to='/individualevents/event3'>Swimming</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to='/individualevents/event4'>Carrom</NavDropdown.Item>
//         <NavDropdown.Item as={Link} to='/individualevents/event5'>Tennis</NavDropdown.Item>
//     </NavDropdown>
// </NavDropdown>

//             <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            
//             <Nav.Link as={Link} to="/arrange" >Create tournament</Nav.Link>
              
//             {/* <Nav.Link as={Link} to="/logout" >Logout</Nav.Link>  */}
              
            
//           </Nav>
//         </Navbar.Collapse> 
//       </Container>
      
//     </Navbar>
//       </>
//     )
//    }
//   }
  
  

  
  return (
    <>
    
   {/* <Navbar bg="success" expand="lg" variant='dark'style={{paddingRight:'0px',height:'50px'}}>
      <Container>
        
         <Navbar.Brand as={Link} to="/">Home</Navbar.Brand> 
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Games" id="basic-nav-dropdown">
    <NavDropdown.Item as={Link} to="/teamevents">Team Events</NavDropdown.Item>
    
    <NavDropdown.Divider />
    <NavDropdown title="Individual Events" id="individual-nav-dropdown" className="dropdown-menu-right">
        <NavDropdown.Item as={Link} to='/individualevents/event1'>Badminton</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/individualevents/event2'>Chess</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/individualevents/event3'>Swimming</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/individualevents/event4'>Carrom</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/individualevents/event5'>Tennis</NavDropdown.Item>
    </NavDropdown>
</NavDropdown>

            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            
            <Nav.Link as={Link} to="/arrange" >Create tournament</Nav.Link>
              
            <Nav.Link as={Link} to="/logout" >Logout</Nav.Link> 
              
            
          </Nav>
        </Navbar.Collapse> 
      </Container>
      
    </Navbar> */}
    <Navbar bg="success" expand="lg" variant="dark" style={{ paddingRight: "0px", height: "50px" }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/teamevents">
                Team Events
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown title="Individual Events" id="individual-nav-dropdown" className="dropdown-menu-right">
                <NavDropdown.Item as={Link} to="/individualevents/event1">
                  Badminton
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/individualevents/event2">
                  Chess
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/individualevents/event3">
                  Swimming
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/individualevents/event4">
                  Carrom
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/individualevents/event5">
                  Tennis
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link as={Link} to="/aboutus">
              About Us
            </Nav.Link>
            {isLoggedin ? (
              <>
                <Nav.Link as={Link} to="/logout">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/arrange">
                  Create Tournament
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/createtournament">Add Tournament</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
    
    

      
    
  
}

export default NavbarComp;
