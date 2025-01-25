import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
import './poshak.css'
import Footer from "../components/Footer";
const Poshak = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Immediately sets the scroll position to the top
  }, []);
  // Sample product data
  const products = [
    {
      title: "Green ",
      description: "A short description of Prashad.",
      image: "/images/dress1.webp",
      
    },
    {
      title: "White ",
      description: "A short description of Prashad.",
      image: "/images/dress2.jpg",
    
    },
    {
      title: "Red ",
      description: "A short description of Prashad.",
      image: "/images/dress3.webp",
    
    },
    {
      title: "Yellow ",
      description: "A short description of Prashad.",
      image: "/images/d5.jpeg",
    
    },
    {
      title: "Laddu Gopal",
      description: "A short description of Prashad.",
      image: "/images/laddugopali.jpg",
    
    },
    {
      title: "Laddu Gopal",
      description: "A short description of Prashad.",
      image: "/images/laddugopal.webp",
    
    },
    {
      title: "Laddu Gopal",
      description: "A short description of Prashad.",
      image: "/images/lg.jpg",
    
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
    <Container className="pq-5 poshak-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 poshak-grid-title">Poshak</h2>
      <Row className="g-4 poshak-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="poshak-grid-col">
            <Card className="h-100 poshak-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="poshak-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="poshak-card-body">
                <Card.Title className="poshak-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="poshak-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                onClick={() => handleBuyNow(product)}
                    variant="primary"
                    className="poshak-card-button" style={{backgroundColor:"#f28500",border:"none"}}
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

export default Poshak;
