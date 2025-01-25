import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from '../components/Navbar'
 import './allequipment.css'
import Footer from "../components/Footer";
const AllEquipment = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Immediately sets the scroll position to the top
  }, []);


  // Sample product data
  const products = [
    {
      title: "Chandan",
      description: "A short description of Prashad.",
      image: "/images/chandan.jpg",
    },
    {
      title: "DhoopBatti",
      description: "A short description of Prashad.",
      image: "/images/dhoopbatti.jpg",
    
    },
    {
      title: "AgarBatti",
      description: "A short description of Prashad.",
      image: "/images/agarbatti.jpg",
    
    },
    {
      title: "Sankh",
      description: "A short description of Prashad.",
      image: "/images/sankh.jpg",
    
    },
    {
      title: "Locket",
      description: "A short description of Prashad.",
      image: "/images/locket.jpg",
    
    },
    {
      title: "Kangan",
      description: "A short description of Prashad.",
      image: "/images/kangan.jpg",
    
    },
    {
      title: "Haridas ji",
      description: "A short description of Prashad.",
      image: "/images/haridaslocket.webp",
    
    },
    {
      title: "Combo",
      description: "A short description of Prashad.",
      image: "/images/allloket.webp",
    
    },
    {
        title: "Bracelet",
        description: "A short description of Prashad.",
        image: "/images/bracelet.jpg",
      
      },
      {
        title: "Tulsi Mala",
        description: "A short description of Prashad.",
        image: "/images/tulsimala.jpg",
      
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
    <Container className="pq-5 equipmet-grid" style={{marginTop:"9rem"}}>
      <h2 className="text-center mb-4 equipmet-grid-title">All Things</h2>
      <Row className="g-4 equipmet-grid-row">
        {products.map((product, index) => (
          <Col xs={6} sm={6} md={4} lg={3} key={index} className="equipmet-grid-col">
            <Card className="h-100 equipmet-card shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="equipmet-card-img"
                style={{
                  height: "180px",
                  objectFit: "fill",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <Card.Body className="equipmet-card-body">
                <Card.Title className="equipmet-card-title text-center">
                  {product.title}
                </Card.Title>
                <Card.Text className="equipmet-card-description text-center">
                  {/* {product.description} */}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
              onClick={() => handleBuyNow(product)}
                    variant="primary"
                    className="equipmet-card-button" style={{backgroundColor:"#f28500",border:"none"}}
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

export default AllEquipment ;
