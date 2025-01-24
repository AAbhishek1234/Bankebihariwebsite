import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './prashad.css'
import Footer from "../components/Footer";
const PrashadGrid = () => {
  // Sample product data
  const products = [
    {
      title: "56 Bhog",
      description: "A short description of Prashad.",
      image: "/images/56bhog.webp",
      link: "https://www.youtube.com/",
    },
    {
      title: "Makhan Mishri",
      description: "A short description of Prashad.",
      image: "/images/makhanmishri.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Peda",
      description: "A short description of Prashad.",
      image: "/images/peda2.jpg",
      link: "/buy/prashad",
    },
    {
      title: "MilkCake",
      description: "A short description of Prashad.",
      image: "/images/milkcake.webp",
      link: "/buy/prashad",
    },
    {
      title: "MigiPagh",
      description: "A short description of Prashad.",
      image: "/images/migipagh.jpeg",
      link: "/buy/prashad",
    },
    {
      title: "Panchamrit",
      description: "A short description of Prashad.",
      image: "/images/panchamrit.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Khichadi",
      description: "A short description of Prashad.",
      image: "/images/khichdi.png",
      link: "/buy/prashad",
    },
    {
      title: "Besan barfi",
      description: "A short description of Prashad.",
      image: "/images/besan-barfi.jpg",
      link: "/buy/prashad",
    },
  ];

  return (
    <>
    <Navbar></Navbar>
    <Container className="pq-5 prashad-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 prashad-grid-title"></h2>
      <Row className="g-4 prashad-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="prashad-grid-col">
            <Card className="h-100 prashad-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="prashad-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="prashad-card-body">
                <Card.Title className="prashad-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="prashad-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    href={product.link}
                    variant="primary"
                    className="prashad-card-button" style={{backgroundColor:"#f28500",border:"none"}}
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

export default PrashadGrid;
