import React, { useState } from 'react';
import Front from "./Front";
import Login from "./Login";
import avatarpic from "../Data/avatarpic.jpg"
import { Link, useNavigate } from "react-router-dom";
import { Col, Container,Form, Row, Button } from "react-bootstrap";
import "./Signup.css";
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';

const Signup = () => {

  const redirect=useNavigate();
  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  }

  const nameHandler = (event) => {
    setName(event.target.value);
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = () => {
    if(email.length < 12 || password.length < 5 || name.length <4){
      alert("Please Enter Valid Details")
    }
    else{
      redirect("/Login");
    }
  }
 
    async function postHandler() {
    console.log ("data", name, email, password);
    let user={name, email, password};
    if (name && email && password){
     const result = await fetch("http://localhost:3001/create", {
       method: "POST",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify({name, email, password}) 
      })
     result = await result.json();
    }
}

  return (
    <>
    <Front />
    <Container>
      <Row>
        <Col className="login__bg" style={{width: 600, height: 600, paddingLeft: 1}}></Col>
        <Col  className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form className="formclass" style={{height: 580,  width: "80%", maxWidth: 600, marginLeft: 170}} method="POST" onSubmit={submitHandler}>
            <img src={avatarpic} style={{height: 70, width: 68}} /> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={emailHandler} value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Choose Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" onChange={nameHandler} value={name} /> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={passwordHandler} value={password} /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept Terms and Conditions" required />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={postHandler}>Signup</Button>
            <div className='newuser'>
            <p>Already a User ? <Link to="/Login" className='newsign'>Login</Link></p>

            </div>
         </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Signup;