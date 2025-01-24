import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './prashad.css'
import Footer from "../components/Footer";
const Pratima = () => {
  // Sample product data
  const products = [
    {
      title: "Pratima",
      description: "A short description of Prashad.",
      image: "/images/p1.jpg",
      link: "https://www.youtube.com/",
    },
    {
      title: "Pratima",
      description: "A short description of Prashad.",
      image: "/images/pratima2.webp",
      link: "/buy/prashad",
    },
    {
      title: "Pratima",
      description: "A short description of Prashad.",
      image: "/images/pratima3.webp",
      link: "/buy/prashad",
    },
    {
      title: "Pratima",
      description: "A short description of Prashad.",
      image: "/images/pratima4.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Pratima",
      description: "A short description of Prashad.",
      image: "/images/pratima5.jpeg",
      link: "/buy/prashad",
    },
    
  ];

  return (
    <>
    <Navbar></Navbar>
    <Container className="pq-5 pratima-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 pratima-grid-title"></h2>
      <Row className="g-4 pratima-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="pratima-grid-col">
            <Card className="h-100 pratima-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="pratima-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="pratima-card-body">
                <Card.Title className="pratima-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="pratima-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    href={product.link}
                    variant="primary"
                    className="pratima-card-button" style={{backgroundColor:"#f28500",border:"none"}}
                  >
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer></Footer>
    </>
  );
};

export default Pratima;
