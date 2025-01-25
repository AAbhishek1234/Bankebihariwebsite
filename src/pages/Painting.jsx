import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './panting.css'
import Footer from "../components/Footer";
const Painting = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Immediately sets the scroll position to the top
  }, []);
  // Sample product data
  const products = [
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/painting1.jpg",
      
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p2.jpeg",
     
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p3.webp",
     
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p4.jpg",
     
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p5.jpg",
     
    },
    {
      title: "painting",
      description: "A short description of Prashad.",
      image: "/images/p6.jpg",
     
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
     
    },
  ];
  const handleBuyNow = (product) => {
    const phoneNumber = "9717024896"; 
    const message = `Hello, I am interested in buying "${product.title}". Could you please provide more details?\nHere is the product image: ${window.location.origin}${product.image}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <>
    <Navbar></Navbar>
    <div className="productss"style={{ backgroundColor: "#FFB733",borderRadius:"15px",marginLeft:"1rem",marginRight:"1rem",marginTop:"12rem" }}>
    <Container className="pq-5 painting-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 painting-grid-title">Paintings</h2>
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
                   onClick={() => handleBuyNow(product)}
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
    </div>
    <Footer></Footer>
    </>
  );
};

export default Painting;
