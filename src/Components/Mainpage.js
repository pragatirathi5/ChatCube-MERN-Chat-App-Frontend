import React from 'react';
import Img from "../Data/Img.jpg"
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Carousel } from 'react-bootstrap';
import imgone from "../Data/imgone.jpg";
import imgtwo from "../Data/imgtwo.jpg";
import imgthree from "../Data/imgthree.jpg";
import imgfour from "../Data/imgfour.jpg";

function Mainpage() {
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
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
   </div>

   <div>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={imgone}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chat Anytime Anywhere</h3>
          <p>Chat with like minded people based on your interests.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={imgtwo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Send a Quick Message</h3>
          <p>Send a quick message and connect with people from all over the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={imgthree}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Enjoy Connecting with People</h3>
          <p>Enjoy the latest features including instant messaging and meeting new people.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={imgfour}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Add or Block People</h3>
          <p>Add your favourite people to separate list.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Mainpage;

