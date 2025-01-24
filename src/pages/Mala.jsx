import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './mala.css'
const Mala = () => {
  // Sample product data
  const products = [
    {
      title: "Tulsi Mala",
      description: "A short description of Prashad.",
      image: "/images/tulsimalaa.jpg",
      link: "https://www.youtube.com/",
    },
    {
      title: "Phool Mala",
      description: "A short description of Prashad.",
      image: "/images/phl.jpg",
      link: "/buy/prashad",
    },
    {
      title: "RudrakshaMala",
      description: "A short description of Prashad.",
      image: "/images/Rudraksha Mala.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Bodhi Mala",
      description: "A short description of Prashad.",
      image: "/images/bm.jpg",
      link: "/buy/prashad",
    },
    {
      title: "TulsiLeaf Mala",
      description: "A short description of Prashad.",
      image: "/images/tulsig.jpg",
      link: "/buy/prashad",
    },
   
  ];

  return (
    <>
    <Navbar></Navbar>
    <Container className="pq-5 prashad-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 mala-grid-title"></h2>
      <Row className="g-4 mala-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="mala-grid-col">
            <Card className="h-100 mala-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="mala-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="mala-card-body">
                <Card.Title className="mala-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="mala-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    href={product.link}
                    variant="primary"
                    className="mala-card-button" style={{backgroundColor:"#f28500",border:"none"}}
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
    </>
  );
};

export default Mala;
