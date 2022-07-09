import React from "react";
import Navig from "../Components/Navig";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Figure from 'react-bootstrap/Figure';
import BackgroundImg from '../Data/BackgroundImg.jpg';
import { FaRegCommentAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <>
        <Navig />
        <Row>
            <Col className="homepage-flex flex-direction-column align-items-center justify-content-center">
                <div style= {{ paddingLeft: 10, paddingTop: 120 }} >
                    <h1 style={{ paddingLeft: 20 }}>ChatCube</h1>
                    <p style={{ fontSize: 14, color: 'grey', paddingLeft: 19 }}> Platform that allows you to connect with Like Minded People </p>
                    <br /> 
                    <div style={{ paddingLeft: 18 }}>
                    <LinkContainer to="/Chat">
                        <Button variant="success"><FaRegCommentAlt /> Let's Get Started</Button>
                    </LinkContainer>
                    </div> 
                </div>
            </Col>
             <Col className="homeimage">
             <Figure>
             <img src={BackgroundImg} style={{width: 800, height: 850, paddingLeft: 80, marginLeft: 120, marginTop: 0}} />
             </Figure>
             </Col> 
        </Row>
        </>
    );
}

export default Home;