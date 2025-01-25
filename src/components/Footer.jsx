import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="hello" style={{backgroundColor:"white" ,marginTop:"1rem"}}  >
      <Container >
        <Row style={{backgroundColor:"white"}}>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
            We are dedicated to providing sacred items and divine essentials for your spiritual journey. From Prashad to holy idols, every product is crafted with devotion to bring peace and blessings into your life.
            </p>
          </Col>
          <Col md={4} style={{backgroundColor:"white"}}>
            <h5>Links</h5>
            <ul className="list-unstyled li ">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About Mandir</a></li>
              <li><a href="/about" className="text-light">Gallery</a></li>
              <li><a href="#" className="text-light">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4} >
            <h5>Contact</h5>
            <p style={{ fontWeight: 700}} >Email:<span style={{ fontWeight: 700,color:"darkorange" }}>shreebankebiharijimandir@gmail.com</span></p>
            <p style={{ fontWeight: 700}}>Phone: <span style={{ fontWeight: 700,color:"darkorange" }}>9871418686</span></p>
            <p style={{ fontWeight: 700}}>
  Address: <span style={{ fontWeight: 700,color:"darkorange" }}>आपके दिलों में</span>
</p>

          </Col>
        </Row>
        <hr className="bg-light"/>
        <Row >
          <Col className="text-center" >
            <p>&copy; {new Date().getFullYear()} shreebankebiharijimandir. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
