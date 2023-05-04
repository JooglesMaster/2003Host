import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../Assets/logo.png'
import Container from 'react-bootstrap/Container'

export default function Navigation (){
  return (

<Navbar  expand="lg">
<Container>
  <Navbar.Brand href="#home"> <img
              src={logo}
              className="d-inline-block align-top"
              alt="Dskafos logo"
            />
</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <div>
    <Nav className="Nav">
    <Nav.Item>
          <Nav.Link href="/home">About Us</Nav.Link>
         </Nav.Item>
        <Nav.Item>
           <Nav.Link eventKey="link-1">Privacy Policy</Nav.Link>
         </Nav.Item>
        <Nav.Item>
         <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
         </Nav.Item>
    </Nav>
    </div>
    
  </Navbar.Collapse>
</Container>
</Navbar>

 
  )
}



