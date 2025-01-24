import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './panting.css'
import Footer from "../components/Footer";
const Painting = () => {
  // Sample product data
  const products = [
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/painting1.jpg",
      link: "",
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p2.jpeg",
      link: "/buy/prashad",
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p3.webp",
      link: "/buy/prashad",
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p4.jpg",
      link: "/buy/prashad",
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p5.jpg",
      link: "/buy/prashad",
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p6.jpg",
      link: "/buy/prashad",
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p7.jpg",
      link: "/buy/prashad",
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p8.jpg",
      link: "/buy/prashad",
    },
  ];

  return (
    <>
    <Navbar></Navbar>
    <Container className="pq-5 painting-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 painting-grid-title"></h2>
      <Row className="g-4 painting-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="painting-grid-col">
            <Card className="h-100 painting-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="painting-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="painting-card-body">
                <Card.Title className="painting-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="painting-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    href={product.link}
                    variant="primary"
                    className="painting-card-button" style={{backgroundColor:"#f28500",border:"none"}}
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

export default Painting;
