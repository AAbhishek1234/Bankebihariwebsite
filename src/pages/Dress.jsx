import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './dress.css'
import Footer from "../components/Footer";
const Dress = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Immediately sets the scroll position to the top
  }, []);



  // Sample product data
  const products = [
    {
      title: "Gopi Dress",
      description: "A short description of Prashad.",
      image: "/images/d2.webp",
      link: "https://www.youtube.com/",
    },
    {
      title: "Pataka",
      description: "A short description of Prashad.",
      image: "/images/d8.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Kurtas",
      description: "A short description of Prashad.",
      image: "/images/d5kurta.jpeg",
      link: "/buy/prashad",
    },
    {
      title: "T-Shirt",
      description: "A short description of Prashad.",
      image: "/images/d4t-shirt.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Shirt",
      description: "A short description of Prashad.",
      image: "/images/d3shirt.jpeg",
      link: "/buy/prashad",
    },
    {
      title: "Kurta Dhoti",
      description: "A short description of Prashad.",
      image: "/images/kurtdhoti.webp",
      link: "/buy/prashad",
    },
    {
      title: "Khichadi",
      description: "A short description of Prashad.",
      image: "/images/d7.jpg",
      link: "/buy/prashad",
    },
    {
      title: "Combo",
      description: "A short description of Prashad.",
      image: "/images/d6.jpg",
      link: "/buy/prashad",
    },
  ];

  return (
    <>
    <Navbar></Navbar>
    <div className="productss"style={{ backgroundColor: "#FFB733",borderRadius:"15px",marginLeft:"1rem",marginRight:"1rem",marginTop:"12rem" }}>
    <Container className="pq-5 dress-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 dress-grid-title">Dresses</h2>
      <Row className="g-4 dress-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="dress-grid-col">
            <Card className="h-100 dress-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="dress-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="dress-card-body">
                <Card.Title className="dress-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="dress-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    href={product.link}
                    variant="primary"
                    className="dress-card-button" style={{backgroundColor:"#f28500",border:"none"}}
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

export default Dress;
