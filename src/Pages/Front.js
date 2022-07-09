import React from 'react';
import Img from "../Data/Img.jpg"
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Front() {
  return (
    <>
    <div>
    <Navbar bg="light" expand="sm" style={{width:1370}}>
      <Container style={{marginLeft: 20}}>
    <Navbar.Brand to="/">
      <img src={Img} style={{width:50, height: 50}} />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="me-auto" style={{paddingLeft: 5}}>
      <LinkContainer to="/Login">
        <Nav.Link className="highlig">Login</Nav.Link>
      </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
   </div>
    </>
  )
}

export default Front;
